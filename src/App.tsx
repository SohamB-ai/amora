import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Sparkles, 
  Tag, 
  X, 
  Check, 
  Award, 
  Layers,
  UtensilsCrossed
} from "lucide-react";
import { MENU_ITEMS, CATEGORIES, MenuItem } from "./data/menuData.js";
// @ts-ignore
import amoraLogo from "./assets/images/logo.png";

type TabType = "menu" | "offers";

const getFoodImage = (item: MenuItem) => {
  const nameLower = item.name.toLowerCase();
  const descLower = (item.description || "").toLowerCase();
  const categoryLower = item.category.toLowerCase();

  // Cheesecakes
  if (nameLower.includes("blueberry cheese") || nameLower.includes("blueberry cake")) {
    return "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("mango cheese") || nameLower.includes("mango cake")) {
    return "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("coconut cheese") || nameLower.includes("coconut cake")) {
    return "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("biscoff cheese") || nameLower.includes("biscoff cake") || nameLower.includes("speculoos")) {
    return "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("cheesecake") || nameLower.includes("cheese cake")) {
    return "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=800";
  }

  // Other Desserts
  if (nameLower.includes("brownie")) {
    return "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("gulabjamun") || nameLower.includes("gulab jamun")) {
    return "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("chocolate ice-cream") || nameLower.includes("belgian chocolate milkshake")) {
    return "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("ice-cream") || nameLower.includes("ice cream") || nameLower.includes("sundae")) {
    return "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("hot chocolate")) {
    return "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800";
  }

  // Kebabs & Platters (Tandoor)
  if (nameLower.includes("murgan kebab") || nameLower.includes("seekh kebab") || nameLower.includes("tangdi kebab")) {
    return "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("paneer pahadi") || nameLower.includes("paneer tikka") || nameLower.includes("paneer thecha")) {
    return "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("kebab") || nameLower.includes("tikka") || nameLower.includes("tandoori")) {
    return "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("platter")) {
    return "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800";
  }

  // Shakes
  if (nameLower.includes("biscoff milkshake") || nameLower.includes("biscoff milk shake")) {
    return "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("oreo") || nameLower.includes("kitkat")) {
    return "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("mango mastani") || nameLower.includes("mango shake") || nameLower.includes("mango blaster")) {
    return "https://images.unsplash.com/photo-1537655780520-1e392edd816a?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("milkshake") || nameLower.includes("shake") || nameLower.includes("mastani")) {
    return "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800";
  }

  // Pizza & Pasta
  if (nameLower.includes("margarita pizza") || nameLower.includes("pepperoni pizza")) {
    return "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("pizza")) {
    return "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("pasta") || nameLower.includes("alfredo") || nameLower.includes("arrabiata")) {
    return "https://images.unsplash.com/photo-1563379971899-660589a01cc3?auto=format&fit=crop&q=80&w=800";
  }

  // Rice & Noodles (Oriental)
  if (nameLower.includes("fried rice") || nameLower.includes("hong kong rice")) {
    return "https://images.unsplash.com/photo-1603133872878-30cc2b988448?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("noodles") || nameLower.includes("hakka") || nameLower.includes("phad thai")) {
    return "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800";
  }

  // Main / Curry / Oriental Gravy
  if (nameLower.includes("manchurian") || nameLower.includes("chilli chicken") || nameLower.includes("chilli paneer")) {
    return "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("kung pao")) {
    return "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800";
  }

  // Continental Starters
  if (nameLower.includes("cheese ball") || nameLower.includes("cheese bomb")) {
    return "https://images.unsplash.com/photo-1548340748-6d2b7d7db87d?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("falafel")) {
    return "https://images.unsplash.com/photo-1547058886-d1223e7f407a?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("nachos")) {
    return "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("bruschetta")) {
    return "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("toast")) {
    return "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("fries") || nameLower.includes("wedges")) {
    return "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("wings")) {
    return "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("prawns") || nameLower.includes("tempura")) {
    return "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("fish")) {
    return "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800";
  }

  // Continental Main
  if (nameLower.includes("stroganoff")) {
    return "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("risotto")) {
    return "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("rice bowl")) {
    return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("sizzler")) {
    return "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800";
  }

  // Biryani & Eggs
  if (nameLower.includes("biryani")) {
    return "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("omelette") || nameLower.includes("boiled egg") || nameLower.includes("sunny side")) {
    return "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800";
  }

  // Burgers & Sandwiches / Wraps
  if (nameLower.includes("burger")) {
    return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("sandwich")) {
    return "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("wrap")) {
    return "https://images.unsplash.com/photo-1626700051175-6518c4793f0f?auto=format&fit=crop&q=80&w=800";
  }

  // Soups & Salads
  if (nameLower.includes("soup")) {
    return "https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("salad")) {
    return "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800";
  }

  // Mocktails & Beverages
  if (nameLower.includes("mojito")) {
    return "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("juice")) {
    return "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("water") || nameLower.includes("soda") || nameLower.includes("soft drink")) {
    return "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&q=80&w=800";
  }
  if (nameLower.includes("red bull")) {
    return "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800";
  }
  if (categoryLower.includes("mocktails") || item.type === "beverage") {
    return "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800";
  }

  // Fallbacks
  if (categoryLower.includes("desserts")) {
    return "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800";
  }

  return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800";
};

interface PredefinedCombo {
  id: string;
  name: string;
  badge: string;
  items: string[];
  originalPrice: number;
  comboPrice: number;
  savings: number;
  description: string;
  promoCode: string;
}

const COMBO_OFFERS: PredefinedCombo[] = [
  {
    id: "combo-1",
    name: "Carnivore Delight Feast",
    badge: "Non-Veg",
    items: ["BBQ Chicken Wings", "Murgh Matka Biryani", "Amora Special Lotus Biscoff Shake"],
    originalPrice: 1007,
    comboPrice: 799,
    savings: 208,
    description: "Indulge in crispy glazed wings, slow dum-cooked chicken biryani in clay pot, and our thick premium Lotus cookie butter shake.",
    promoCode: "AMORA-CARNI"
  },
  {
    id: "combo-2",
    name: "Royal Tandoori & Sips Platter",
    badge: "Veg Elite",
    items: ["Veg Tandoori Platter", "Amora Park Mocktail", "Paneer Pahadi Kebab"],
    originalPrice: 1887,
    comboPrice: 1449,
    savings: 438,
    description: "The ultimate shared assortment platter featuring smoky cottage cheese blocks marinated with mint, served alongside signature garden refreshers.",
    promoCode: "AMORA-ROYAL"
  },
  {
    id: "combo-3",
    name: "Chinesey Zesty Duo",
    badge: "Hot & Crispy",
    items: ["Honey Chilli Potato", "Veg Hakka Noodles", "Veg Manchurian (Dry)"],
    originalPrice: 777,
    comboPrice: 599,
    savings: 178,
    description: "Crispy sweet honey potato sticks rolled in sesame, served with traditional stir-fried hakka noodles and fried vegetable Manchurian.",
    promoCode: "AMORA-CHINESE"
  },
  {
    id: "combo-4",
    name: "Sweet Tooth Indulgence",
    badge: "Dessert Special",
    items: ["Blueberry Cheese Cake", "Belgian Speculoos Ice-cream", "Sizzling Brownie"],
    originalPrice: 467,
    comboPrice: 349,
    savings: 118,
    description: "Celebrate sweet cravings with classic cream cheese blueberry pie, paired with single scoops of gourmet Speculoos and hot brownie fudge.",
    promoCode: "AMORA-SWEETS"
  },
  {
    id: "combo-5",
    name: "Continental Cozy Lunch",
    badge: "Gourmet Pair",
    items: ["Mushroom Stroganoff", "FarmHouse Exotic Pizza", "Amora Park Mocktail"],
    originalPrice: 997,
    comboPrice: 749,
    savings: 248,
    description: "Earthg wild mushrooms over buttered herb rice, paired with single portion gourmet pizza and signature refresher.",
    promoCode: "AMORA-DATE"
  }
];

export default function App() {
  // Mobile UI States
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("menu");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [onlyPopular, setOnlyPopular] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Filter items dynamically
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Search matching
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Category matching
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;

      // Diet matching
      let matchesDiet = true;
      if (dietFilter === "veg") {
        matchesDiet = item.type === "veg" || item.type === "beverage";
      } else if (dietFilter === "non-veg") {
        matchesDiet = item.type === "non-veg" || item.type === "egg";
      }

      // Popular matching
      const matchesPopular = !onlyPopular || item.isPopular;

      return matchesSearch && matchesCategory && matchesDiet && matchesPopular;
    });
  }, [searchQuery, selectedCategory, dietFilter, onlyPopular]);

  // Copy promo code helper
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="h-screen bg-[#071F12] text-[#0B301D] font-sans flex flex-col items-center justify-center p-0 md:p-4 overflow-hidden">
      
      {/* Maximum outer mobile viewport container to simulate standard mobile screens flawlessly */}
      <div className="w-full max-w-md bg-white h-screen md:h-[850px] shadow-2xl flex flex-col relative border-x border-[#D4AF37]/30 rounded-none md:rounded-[32px] overflow-hidden">
        
        {/* --- DYNAMIC LOADING SPLASH OVERLAY WITH CIRCULAR SPINNING PATTERNS --- */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4, ease: "easeInOut" } }}
              className="absolute inset-0 bg-[#071F12] z-50 flex flex-col items-center justify-center px-6 overflow-hidden"
            >
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Loop 1: Slow outermost dotted gold orbit ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                  className="absolute w-56 h-56 rounded-full border border-dashed border-[#D4AF37]/40"
                />

                {/* Loop 2: Alternating medium dashed counter-orbit ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
                  className="absolute w-44 h-44 rounded-full border border-[#D4AF37]/50"
                  style={{ borderStyle: "dotted", borderWidth: "3px" }}
                />

                {/* Loop 3: Rapid inner gold mesh ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
                  className="absolute w-32 h-32 rounded-full border border-dashed border-[#D4AF37]/30"
                />

                {/* Center Core Floating Branding Mask */}
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-full bg-[#0B301D] border-2 border-[#D4AF37] overflow-hidden shadow-[0_0_25px_rgba(212,175,55,0.25)] flex items-center justify-center z-10"
                >
                  <img
                    src={amoraLogo}
                    alt="ARK Amora Café Logo Splash"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Loader description & branding text */}
              <div className="text-center mt-7 space-y-2.5">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                  Savor the premium blend
                </span>
                <h2 className="font-serif italic text-2xl text-white font-bold tracking-tight">
                  Amora Café
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
                <p className="text-[9px] text-[#D4AF37]/65 uppercase tracking-wider font-mono">
                  Loading Experience...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- HEADER --- */}
        <header className="bg-white border-b border-[#F0ECE1] pt-6 pb-4 px-5 sticky top-0 z-40 shadow-[0_2px_12px_rgba(11,48,29,0.03)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B301D] overflow-hidden shadow-md border border-[#D4AF37]/30 flex items-center justify-center">
                <img 
                  src={amoraLogo} 
                  alt="ARK Amora Café" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="font-serif italic text-lg text-[#0B301D] font-bold leading-tight tracking-tight">Amora Café</h1>
                <span className="text-[10px] font-semibold text-[#D4AF37] bg-[#0B301D]/5 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit mt-0.5 border border-[#D4AF37]/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse inline-block"></span>
                  Kitchen Serving Live
                </span>
              </div>
            </div>
          </div>
        </header>
 
        {/* --- DYNAMIC BODY VIEWS BASED ON TAB --- */}
        <main className="flex-1 overflow-y-auto pb-24">
          
          <AnimatePresence mode="wait">
            
            {/* TABS VIEW 1: INTERACTIVE MENU CARD */}
            {activeTab === "menu" && (
              <motion.div
                key="menu-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-4"
              >
                {/* Search Inputs and Quick Filters */}
                <div className="space-y-3 mb-5">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-[#0B301D]/50" size={17} />
                    <input
                      id="search-menu-input"
                      type="text"
                      placeholder="Search cheese cake, kebab, mocktails..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 bg-[#F4F8F5] focus:bg-white text-xs border border-transparent focus:border-[#0B301D]/30 rounded-xl outline-none transition-all placeholder:text-[#0B301D]/40 text-[#0B301D]"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery("")} 
                        className="absolute right-3 top-2.5 text-[#0B301D]/50 hover:text-[#0B301D]"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Diet & Legend Pill Selector */}
                  <div className="flex gap-2 text-xs">
                    <button
                      id="diet-filter-all"
                      onClick={() => setDietFilter("all")}
                      className={`flex-1 py-2 px-2.5 rounded-lg text-center font-medium transition-all border text-xs ${
                        dietFilter === "all"
                          ? "bg-[#0B301D] border-[#0B301D] text-[#D4AF37] shadow-xs font-bold"
                          : "bg-white border-[#EAE5D9] text-[#0B301D] hover:bg-[#F4F8F5]"
                      }`}
                    >
                      All Types
                    </button>
                    <button
                      id="diet-filter-veg"
                      onClick={() => setDietFilter("veg")}
                      className={`flex-1 py-1.5 px-2 text-center font-medium transition-all border flex items-center justify-center gap-1.5 text-xs ${
                        dietFilter === "veg"
                          ? "bg-[#EBF3EC] border-[#0B301D]/30 text-[#0B301D] font-bold"
                          : "bg-white border-[#EAE5D9] text-[#0B301D]/80 hover:bg-[#F4F8F5]"
                      }`}
                    >
                      <span className="w-2.5 h-2.5 border border-[#0B301D] rounded-xs flex items-center justify-center p-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B301D]"></span>
                      </span>
                      Veg only
                    </button>
                    <button
                      id="diet-filter-non-veg"
                      onClick={() => setDietFilter("non-veg")}
                      className={`flex-1 py-1.5 px-2 text-center font-medium transition-all border flex items-center justify-center gap-1.5 text-xs ${
                        dietFilter === "non-veg"
                          ? "bg-[#FDF3F0] border-red-200 text-red-800 font-bold"
                          : "bg-white border-[#EAE5D9] text-[#0B301D]/80 hover:bg-[#F4F8F5]"
                      }`}
                    >
                      <span className="w-2.5 h-2.5 border border-red-600 rounded-xs flex items-center justify-center p-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      </span>
                      Egg/Non-Veg
                    </button>
                  </div>

                  {/* Popular Filter Toggle */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      id="toggle-popular-filter"
                      onClick={() => setOnlyPopular(!onlyPopular)}
                      className={`text-[11px] font-medium px-2.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                        onlyPopular 
                          ? "bg-[#0B301D] text-[#D4AF37] border-[#D4AF37]/45 shadow-xs"
                          : "bg-[#F4F8F5] text-[#0B301D]/75 border-[#EAE5D9]"
                      }`}
                    >
                      <Award size={12} className={onlyPopular ? "fill-[#D4AF37] text-[#D4AF37]" : "text-[#0B301D]/60"} />
                      ⭐ Best Sellers / Popular only
                    </button>

                    <span className="text-[10px] font-mono text-[#0B301D]/60 font-bold">
                      Showing {filteredItems.length} items
                    </span>
                  </div>
                </div>

                {/* Horizontal Category Slider */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 scrollbar-none scroll-smooth">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      id={`cat-pill-${category.id}`}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                        selectedCategory === category.id
                          ? "bg-[#0B301D] text-[#D4AF37] border border-[#D4AF37]/35 shadow-sm"
                          : "bg-[#F4F8F5] hover:bg-[#EAF0EB] text-[#0B301D] border border-transparent"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* MENU ITEM GRID LIST */}
                <div className="space-y-3.5">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <div
                        key={item.id}
                        id={`menu-item-${item.id}`}
                        onClick={() => setSelectedItem(item)}
                        className="p-4 bg-white border border-[#F0ECE1] hover:border-[#D4AF37]/35 hover:bg-[#F4F8F5]/20 rounded-2xl transition-all cursor-pointer shadow-xs flex justify-between gap-3"
                      >
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {/* Veg vs Non-Veg dynamic icon markers */}
                            {item.type === "veg" && (
                              <span className="w-3.5 h-3.5 border border-[#0B301D]/60 rounded-xs flex items-center justify-center p-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0B301D]"></span>
                              </span>
                            )}
                            {item.type === "egg" && (
                              <span className="w-3.5 h-3.5 border border-[#D4AF37]/75 rounded-xs flex items-center justify-center p-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                              </span>
                            )}
                            {item.type === "non-veg" && (
                              <span className="w-3.5 h-3.5 border border-red-600 rounded-xs flex items-center justify-center p-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                              </span>
                            )}
                            {item.type === "beverage" && (
                              <span className="text-[9px] font-bold text-[#0B301D] bg-[#F4F8F5] px-1.5 py-0.5 rounded-sm uppercase tracking-wider scale-90 border border-[#0B301D]/15">
                                Drink
                              </span>
                            )}

                            <h3 className="font-serif italic text-sm text-[#0B301D] font-bold tracking-tight">{item.name}</h3>
                            
                            {item.isPopular && (
                              <span className="text-[9px] bg-[#D4AF37]/10 text-[#0B301D] border border-[#D4AF37]/25 px-1.5 py-0.2 rounded-sm font-semibold tracking-wide flex items-center gap-0.5">
                                ⭐ star
                              </span>
                            )}
                          </div>

                          {item.description ? (
                            <p className="text-[11px] text-[#0B301D]/75 line-clamp-2 leading-relaxed font-light">
                              {item.description}
                            </p>
                          ) : (
                            <p className="text-[10px] text-[#0B301D]/40 italic">No description added.</p>
                          )}
                        </div>

                        {/* Pricing section */}
                        <div className="text-right flex flex-col justify-between items-end min-w-[75px]">
                          {item.price ? (
                            <span className="text-sm font-serif font-extrabold text-[#D4AF37]">
                              ₹{item.price}/-
                            </span>
                          ) : item.priceOptions ? (
                            <div className="text-right">
                              <span className="text-[9px] text-[#0B301D]/50 block font-sans">Multi-pricing:</span>
                              <span className="text-xs font-serif font-bold text-[#D4AF37]">
                                ₹{item.priceOptions[0].price} - ₹{item.priceOptions[item.priceOptions.length - 1].price}
                              </span>
                            </div>
                          ) : (
                            <span className="text-xs font-serif font-bold text-[#D4AF37]">Seasonal</span>
                          )}

                          <span className="text-[9px] text-[#0B301D] font-bold bg-[#F4F8F5] px-2.5 py-1 rounded-md hover:bg-[#0B301D] hover:text-[#D4AF37] border border-[#0B301D]/10 transition-all mt-2.5">
                            View details
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-12 text-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-[#F4F8F5] flex items-center justify-center mx-auto text-[#0B301D]/40">
                        <UtensilsCrossed className="w-5 h-5 pointer-events-none" />
                      </div>
                      <p className="text-xs font-medium text-[#0B301D]/80">No matching culinary items found.</p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("all");
                          setDietFilter("all");
                          setOnlyPopular(false);
                        }}
                        className="text-[11px] font-semibold text-[#0B301D]/70 underline hover:text-[#D4AF37]"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* TABS VIEW 2: SPECIAL COMBO OFFERS */}
            {activeTab === "offers" && (
              <motion.div
                key="offers-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-4 space-y-5"
              >
                {/* Intro to Offers */}
                <div className="space-y-1">
                  <h2 className="text-base font-serif italic text-[#0B301D] font-bold tracking-tight flex items-center gap-1.5">
                    <Sparkles className="text-[#D4AF37] fill-[#D4AF37]/45 animate-pulse" size={17} />
                    Exquisite Combo Deals
                  </h2>
                  <p className="text-xs text-[#0B301D]/75 leading-relaxed font-light">
                    Handcrafted premium pairings curated by our master chefs, combining signature dishes, mains, and mocktails for the ultimate Amora tasting experience.
                  </p>
                </div>

                {/* COMBO OFFERS CARDS LIST */}
                <div className="space-y-4">
                  {COMBO_OFFERS.map((combo) => (
                    <div 
                      key={combo.id}
                      className="bg-white border border-[#F0ECE1] hover:border-[#D4AF37]/50 rounded-2xl p-5 space-y-3.5 shadow-sm relative overflow-hidden transition-all duration-300 group"
                    >
                      {/* Top ribbon border */}
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0B301D] via-[#D4AF37] to-[#0B301D]" />

                      {/* Header row */}
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <span className="text-[9px] bg-[#0B301D]/5 text-[#0B301D] border border-[#0B301D]/15 px-2 py-0.5 rounded-md font-mono font-bold uppercase tracking-wider">
                            {combo.badge}
                          </span>
                          <h3 className="text-sm font-serif italic font-bold text-[#0B301D] mt-1.5 group-hover:text-[#D4AF37] transition-colors leading-tight">
                            {combo.name}
                          </h3>
                        </div>
                        <div className="bg-[#D4AF37]/10 text-[#0B301D] text-[9px] px-2 py-1 rounded font-bold uppercase tracking-tight">
                          Save ₹{combo.savings}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] text-[#0B301D]/75 font-light leading-relaxed">
                        {combo.description}
                      </p>

                      {/* Included Items sub-pills */}
                      <div className="bg-[#F4F8F5] p-3 rounded-xl space-y-1 border border-[#0B301D]/5">
                        <span className="text-[9px] text-[#0B301D]/60 block uppercase font-bold tracking-wider">Featured Items:</span>
                        <div className="grid grid-cols-1 gap-1 pt-1">
                          {combo.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[10.5px] text-[#0B301D]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                              <span className="font-medium truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cost breakdown */}
                      <div className="pt-2 flex justify-between items-end border-t border-dashed border-[#F0ECE1]">
                        <div>
                          <span className="text-[10px] text-zinc-400 block line-through">Standard total: ₹{combo.originalPrice}/-</span>
                          <span className="text-[9px] text-[#0B301D] font-bold bg-[#D4AF37]/20 border border-[#D4AF37]/30 px-2 py-0.5 rounded">
                            Specially Packaged
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="text-[8px] text-[#0B301D]/60 block uppercase font-mono">Combo Price</span>
                          <span className="text-base font-serif italic font-extrabold text-[#D4AF37]">
                            ₹{combo.comboPrice}/-
                          </span>
                        </div>
                      </div>

                      {/* Copy code button */}
                      <div className="pt-1">
                        <button
                          onClick={() => handleCopyCode(combo.promoCode)}
                          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            copiedCode === combo.promoCode
                              ? "bg-[#0B301D] text-[#D4AF37] border border-[#D4AF37]/35 shadow-sm"
                              : "bg-[#0B301D] hover:bg-[#15462D] text-white shadow-xs"
                          }`}
                        >
                          {copiedCode === combo.promoCode ? (
                            <>
                              <Check size={14} className="text-[#D4AF37] stroke-[3.5px]" />
                              Copied Promo Code: {combo.promoCode}!
                            </>
                          ) : (
                            <>
                              <Tag size={13} className="text-[#D4AF37]" />
                              Activate Promo: <span className="font-mono underline decoration-dashed text-[#D4AF37] ml-0.5">{combo.promoCode}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </main>

        {/* --- DETAIL PREVIEW DIALOG MODAL --- */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-end"
            >
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                exit={{ y: 200 }}
                className="w-full bg-white border-t border-[#D4AF37]/30 rounded-t-[32px] max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col relative"
              >
                {/* 1. Visually appetizing header image with a gradient overlay */}
                <div className="relative w-full h-48 bg-stone-100 overflow-hidden shrink-0">
                  <img
                    src={getFoodImage(selectedItem)}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  
                  {/* Close button on image */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 p-2 bg-black/55 hover:bg-black/80 rounded-full text-white transition-all shadow-md z-10"
                    title="Close"
                  >
                    <X size={15} />
                  </button>

                  {/* Bestseller badge floating inside the image area */}
                  {selectedItem.isPopular && (
                    <div className="absolute bottom-3 right-4 bg-[#D4AF37] text-[#0B301D] text-[9px] font-bold uppercase px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1 shadow-sm font-sans">
                      <Sparkles size={10} className="fill-[#0B301D]/20 animate-pulse" />
                      Bestseller
                    </div>
                  )}
                </div>

                {/* 2. Padded modal details container */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {selectedItem.type === "veg" && (
                        <span className="w-3.5 h-3.5 border border-[#0B301D] rounded-xs flex items-center justify-center p-0.5 bg-[#EBF3EC]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B301D]"></span>
                        </span>
                      )}
                      {selectedItem.type === "non-veg" && (
                        <span className="w-3.5 h-3.5 border border-red-600 rounded-xs flex items-center justify-center p-0.5 bg-red-50">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                        </span>
                      )}
                      {selectedItem.type === "beverage" && (
                        <span className="text-[9px] bg-[#F4F8F5] text-[#0B301D] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider scale-90 border border-[#0B301D]/15">Drink</span>
                      )}
                      <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-mono font-bold">
                        {selectedItem.category.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif italic text-[#0B301D] font-bold tracking-tight leading-snug">{selectedItem.name}</h3>
                  </div>

                  {/* Description and tags */}
                  <div className="space-y-3 py-1">
                    <p className="text-xs text-[#0B301D]/85 leading-relaxed font-light">
                      {selectedItem.description || "Our chefs formulate this from fresh organic ingredients harvested locally, carrying the signature Amora spice footprint and clean palette balance."}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1 font-sans text-[10px]">
                      <span className="bg-[#F4F8F5] border border-[#0B301D]/10 text-[#0B301D] px-2.5 py-1 rounded-md font-medium">✨ Prep time: ~10-15m</span>
                      <span className="bg-[#F4F8F5] border border-[#0B301D]/10 text-[#0B301D] px-2.5 py-1 rounded-md font-medium">🌿 Locally Sourced</span>
                      <span className="bg-[#F4F8F5] border border-[#0B301D]/10 text-[#0B301D] px-2.5 py-1 rounded-md font-semibold text-[#D4AF37]">👑 Premium Specialty</span>
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="pt-4 border-t border-[#F0ECE1] flex justify-between items-center bg-[#F4F8F5] p-4.5 rounded-2xl mt-1">
                    <span className="text-xs font-bold text-[#0B301D]/80">Curated Price:</span>
                    
                    {selectedItem.price ? (
                      <span className="text-lg font-serif font-extrabold text-[#D4AF37] tracking-tight">
                        ₹{selectedItem.price}/-
                      </span>
                    ) : selectedItem.priceOptions ? (
                      <div className="space-y-1 text-right w-1/2">
                        {selectedItem.priceOptions.map((opt) => (
                          <div key={opt.label} className="flex justify-between items-center text-xs">
                            <span className="text-[#0B301D]/60 pr-1">{opt.label}:</span>
                            <span className="font-serif font-bold text-[#D4AF37]">₹{opt.price}/-</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-sm font-semibold text-[#0B301D]/65">Contact Host</span>
                    )}
                  </div>

                  {/* Return button */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full bg-[#0B301D] hover:bg-[#15462D] text-[#D4AF37] font-bold py-3.5 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Return to Menu
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- BOTTOM MOBILE PERSISTENT TAB BAR --- */}
        <nav className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-[#F0ECE1] flex justify-around items-center px-4 z-40 shadow-[0_-4px_16px_rgba(11,48,29,0.03)]">
          <button
            id="tab-btn-menu"
            onClick={() => setActiveTab("menu")}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all ${
              activeTab === "menu" ? "text-[#0B301D]" : "text-zinc-400 hover:text-[#0B301D]"
            }`}
          >
            <Layers size={18} className={activeTab === "menu" ? "stroke-[2.5px] text-[#0B301D]" : "stroke-[1.8px] opacity-75"} />
            <span className="text-[10px] font-bold tracking-tight">Browse Menu</span>
          </button>

          <button
            id="tab-btn-offers"
            onClick={() => setActiveTab("offers")}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all ${
              activeTab === "offers" ? "text-[#D4AF37]" : "text-zinc-400 hover:text-[#0B301D]"
            }`}
          >
            <div className="relative">
              <Tag size={18} className={activeTab === "offers" ? "text-[#D4AF37] fill-[#D4AF37]/15 stroke-[2.5px]" : "stroke-[1.8px] opacity-75"} />
            </div>
            <span className="text-[10px] font-bold tracking-tight">Combo Offers</span>
          </button>
        </nav>

      </div>
    </div>
  );
}
