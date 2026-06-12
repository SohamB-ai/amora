import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS, MenuItem } from "./src/data/menuData.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy initialize Gemini client to prevent crash if key is missing on startup
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY is not configured. Please add your secret in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. Dynamic complementary offer generator backed by Gemini 3.5 Flash!
app.post("/api/generate-offer", async (req, res) => {
  const { mood, diet, budget } = req.body;

  try {
    const client = getGeminiClient();

    // Custom system instruction and prompt for culinary pairing
    const systemInstruction = `You are the world-class Executive Chef and AI Sommelier of Amora Cafe.
Your goal is to curate an exclusive, mouth-watering special offer that pairs items from our actual menu.
You must select real, exact items from the menu dataset provided in the prompt. Do not invent any items not present in the list.
Ensure the selected items respect the customer's diet preference (veg, non-veg, egg). For "veg", ensure only "veg" and "beverage" items are matched. For "non-veg", you can bundle both veg and non-veg.
Create a pair/trio containing 2 to 3 items that complement each other wonderfully (e.g. A spicy starter paired with a sweet/refreshing milkshake, or a main course with a drink and popular dessert).
Calculate:
1. The total original cumulative price of the items if bought separately.
2. An exciting discounted bundle price (around 15% to 25% cheaper).
Provide a creative culinary explanation for why these textures and flavours enhance each other, a catchy marketing slogan, and a mock coupon code (e.g. AMORA-GEMINI-XXX).`;

    const prompt = `Create a custom complementary special offer for Amora Cafe.
User Preferences:
- Mood/Vibe desired: "${mood || 'Surprise Me'}"
- Diet preference: "${diet || 'any'}"
- Budget tier: "${budget || 'standard'}"

Here is the exact restaurant menu to pick items from:
${JSON.stringify(MENU_ITEMS.map(item => ({
  id: item.id,
  name: item.name,
  category: item.category,
  type: item.type,
  price: item.price || (item.priceOptions ? item.priceOptions[0].price : 150)
})))}

Generate one beautifully crafted, mouth-watering recommendation with the specified JSON schema. Only use real items from the menu above. Make sure the total original calculation matches the sum of the selected items' prices exactly.`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 1.0,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["offerName", "slogan", "description", "items", "originalPrice", "discountedPrice", "discountPercentage", "couponCode", "funCulinaryFact"],
          properties: {
            offerName: {
              type: Type.STRING,
              description: "A highly elegant, creative name for this special bundle (e.g. 'The Sizzling Biscoff Harmony', 'The Royal Rajputana Grill Union')."
            },
            slogan: {
              type: Type.STRING,
              description: "A catchy, short marketing tagline for the offer."
            },
            description: {
              type: Type.STRING,
              description: "A decadent, engaging culinary explanation describing the taste harmony, contrasts in textures and flavor profiles of these items combined."
            },
            items: {
              type: Type.ARRAY,
              description: "The list of real menu items bundled in this offer.",
              items: {
                type: Type.OBJECT,
                required: ["id", "name", "originalPrice"],
                properties: {
                  id: { type: Type.STRING },
                  name: { type: Type.STRING },
                  originalPrice: { type: Type.NUMBER, description: "The standard price of this individual item on the menu." }
                }
              }
            },
            originalPrice: {
              type: Type.NUMBER,
              description: "The sum total of the individual item prices."
            },
            discountedPrice: {
              type: Type.NUMBER,
              description: "The special discounted bundle price (15% to 25% lower)."
            },
            discountPercentage: {
              type: Type.NUMBER,
              description: "The calculated discount percentage as a whole integer (e.g. 20)."
            },
            couponCode: {
              type: Type.STRING,
              description: "A classy uppercase promo code (e.g. AMORA-DREAM-83)."
            },
            funCulinaryFact: {
              type: Type.STRING,
              description: "A brief, fun chef fact or secret pairing tip about these ingredients."
            }
          }
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("No text response generated from Gemini");
    }

    res.json(JSON.parse(resultText));
  } catch (err: any) {
    console.warn("Gemini API call failed, serving delicious static fallback offer:", err.message);

    // Provide pre-built premium fallbacks based on user inputs so the UI is NEVER broken even without API Key!
    const isVeg = diet === "veg";
    const fallbackOffer = isVeg ? {
      offerName: "The Amora Signature Sunset Feast",
      slogan: "A perfect blend of hot, spiced tandoori and cooling biscuit cream.",
      description: "Experience the vibrant herby tang of our grilled Paneer Pahadi Kebab, meticulously complemented by the refreshing and cold notes of our Amora Special Lotus Biscoff Milk Shake. The spicy punch of the mint and coriander marination elegantly highlights the sweet caramelized cinnamon flavor of the Biscoff biscuit butter, providing an exquisite contrast of temperature and taste on the palate.",
      items: [
        { id: "sig2", name: "Paneer Pahadi Kebab", originalPrice: 319 },
        { id: "sig4", name: "Amora Special Lotus Biscoff Milk Shake", originalPrice: 269 }
      ],
      originalPrice: 588,
      discountedPrice: 470,
      discountPercentage: 20,
      couponCode: "AMORA-SUNSET-20",
      funCulinaryFact: "Tandoori spices bloom intensely under warm heat, which are then perfectly counter-balanced by the lactose and fats in milkshakes, resetting your palate instantly."
    } : {
      offerName: "The Royal Tandoor & Cold Brew Mashup",
      slogan: "Succulent, smoky kebabs paired with our signature fizzy refresher.",
      description: "Delight in the smoky, tender, spice-laden layers of our premium Murgan Kebab. We pair it with the effervescent, citrus-mint-cucumber profile of the Amora Park Mocktail. The zesty acidity and lime notes in the mocktail slice beautifully through the rich tandoori char, cleansing your taste buds between every bite.",
      items: [
        { id: "sig1", name: "Murgan Kebab", originalPrice: 449 },
        { id: "sig3", name: "Amora Park Mocktail", originalPrice: 269 }
      ],
      originalPrice: 718,
      discountedPrice: 574,
      discountPercentage: 20,
      couponCode: "AMORA-ROYAL-77",
      funCulinaryFact: "Smoky tandoori meats contain deep umami compounds that are chemically amplified when met with high carbonation and citric acid, elevating the flavor profile."
    };

    res.json(fallbackOffer);
  }
});

// Configure Vite or Static delivery
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Amora Cafe System] Running on port ${PORT}`);
  });
}

setupServer();
