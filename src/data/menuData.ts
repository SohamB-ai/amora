export interface MenuItem {
  id: string;
  name: string;
  category: string;
  type: 'veg' | 'non-veg' | 'egg' | 'beverage';
  price?: number;
  priceOptions?: {
    label: string;
    price: number;
  }[];
  description?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon?: string;
}

export const CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'All Items' },
  { id: 'amora-signature', name: 'Amora Signature' },
  { id: 'continental-starter', name: 'Continental Starters' },
  { id: 'continental-main', name: 'Continental Main Course' },
  { id: 'oriental-starter', name: 'Oriental Starters' },
  { id: 'oriental-gravy', name: 'Oriental Main (Gravy)' },
  { id: 'tandoor', name: 'Tandoor Starters' },
  { id: 'pizza-pasta', name: 'Pizza & Pasta' },
  { id: 'burgers-sandwiches', name: 'Burgers & Sandwiches' },
  { id: 'biryani-egg', name: 'Biryani & Eggs' },
  { id: 'soups-salads', name: 'Soups, Salads & Fries' },
  { id: 'mocktails-shakes', name: 'Mocktails & Shakes' },
  { id: 'desserts-icecream', name: 'Desserts & Ice Cream' }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- DESSERTS ---
  { id: 'd1', name: 'Blueberry Cheese Cake', category: 'desserts-icecream', type: 'veg', price: 179, description: 'Creamy cheesecake topped with luscious blueberry compote.', isPopular: true },
  { id: 'd2', name: 'Mango Cheese Cake', category: 'desserts-icecream', type: 'veg', price: 189, description: 'Tropical mango pulp layer on top of a melt-in-your-mouth cheese base.' },
  { id: 'd3', name: 'Coconut Cheese Cake', category: 'desserts-icecream', type: 'veg', price: 179, description: 'Infused with roasted coconut shavings and smooth cream cheese.' },
  { id: 'd4', name: 'Biscoff Cheese Cake', category: 'desserts-icecream', type: 'veg', price: 229, description: 'Rich loaded cookie butter base and crumbled Lotus Biscoff cookies on top.', isPopular: true },
  { id: 'd5', name: 'Pull me up Cake', category: 'desserts-icecream', type: 'veg', price: 239, description: 'An interactive chocolate explosion dessert that pours over as you lift.' },
  { id: 'd6', name: 'Gulabjamun With Ice-cream', category: 'desserts-icecream', type: 'veg', price: 149, description: 'Classic warm Indian gulab jamuns paired beautifully with cold vanilla ice-cream.' },
  { id: 'd7', name: 'Sizzling Brownie', category: 'desserts-icecream', type: 'veg', price: 219, description: 'Hot chocolate brownie on a sizzler plate topped with cold vanilla and hot fudge Sauce.' },
  { id: 'd8', name: 'Hot Chocolate', category: 'desserts-icecream', type: 'veg', price: 99, description: 'Thick, creamy gourmet warm hot cocoa.' },

  // --- AMORA SPECIAL ICE CREAM ---
  { id: 'ic1', name: 'Chocolate Ice-cream', category: 'desserts-icecream', type: 'veg', priceOptions: [{ label: 'Single Scoop', price: 59 }, { label: 'Double Scoop', price: 111 }] },
  { id: 'ic2', name: 'American Dry Fruit Ice-cream', category: 'desserts-icecream', type: 'veg', priceOptions: [{ label: 'Single Scoop', price: 69 }, { label: 'Double Scoop', price: 129 }] },
  { id: 'ic3', name: 'Red Velvet Ice-cream', category: 'desserts-icecream', type: 'veg', priceOptions: [{ label: 'Single Scoop', price: 49 }, { label: 'Double Scoop', price: 99 }] },
  { id: 'ic4', name: 'Biscoff Ice-cream', category: 'desserts-icecream', type: 'veg', priceOptions: [{ label: 'Single Scoop', price: 89 }, { label: 'Double Scoop', price: 169 }] },
  { id: 'ic5', name: 'Pineapple Ice-cream', category: 'desserts-icecream', type: 'veg', priceOptions: [{ label: 'Single Scoop', price: 79 }, { label: 'Double Scoop', price: 149 }] },
  { id: 'ic6', name: 'Belgian Speculoos Ice-cream', category: 'desserts-icecream', type: 'veg', priceOptions: [{ label: 'Single Scoop', price: 69 }, { label: 'Double Scoop', price: 129 }] },
  { id: 'ic7', name: 'Amora Special Triple Sundae Jar', category: 'desserts-icecream', type: 'veg', price: 249, description: 'A grand layers of 3 premium ice-cream scoops loaded with sweet syrups, nuts and crumbles.' },

  // --- AMORA SIGNATURE ---
  { id: 'sig1', name: 'Murgan Kebab', category: 'amora-signature', type: 'non-veg', price: 449, description: 'Exquisite signature tender chicken seekh kebabs loaded with aromatic spices.', isPopular: true },
  { id: 'sig2', name: 'Paneer Pahadi Kebab', category: 'amora-signature', type: 'veg', price: 319, description: 'Fresh cottage cheese blocks marinated with mint, coriander, and wild mountain herbs.' },
  { id: 'sig3', name: 'Amora Park Mocktail', category: 'amora-signature', type: 'beverage', price: 269, description: 'Amora Special garden refresher with fresh mint, lime, cucumber slices, and carbonated twist.' },
  { id: 'sig4', name: 'Amora Special Lotus Biscoff Milk Shake', category: 'amora-signature', type: 'beverage', price: 269, description: 'Mouth-watering thick premium milkshake blended with real Lotus cookie butter.', isPopular: true },
  { id: 'sig5', name: 'Mango Mastani', category: 'amora-signature', type: 'beverage', price: 179, description: 'Traditional Puneri thick mango shake topped with vanilla ice cream, dry fruits, and cherries.' },
  { id: 'sig6', name: 'Dry Fruit Mastani', category: 'amora-signature', type: 'beverage', price: 199, description: 'Rich loaded and sweet dry fruit hybrid ice cream shake.' },
  { id: 'sig7', name: 'Strawberry Mastani', category: 'amora-signature', type: 'beverage', price: 169, description: 'Thick seasonal strawberry blended drink with real ice cream scoop.' },
  { id: 'sig8', name: 'Amora Special Mango Blaster', category: 'amora-signature', type: 'beverage', price: 299, description: 'Our custom double-loaded super-charged fresh mango blast.' },
  { id: 'sig9', name: 'Veg Tandoori Platter', category: 'amora-signature', type: 'veg', price: 1299, description: 'An ultimate grand assortment of Paneer Tikka, Veg Seekh Kebab, Tandoori Mushrooms & Potatoes.' },
  { id: 'sig10', name: 'Murgh Tandoori Platter', category: 'amora-signature', type: 'non-veg', price: 1699, description: 'The absolute royal tandoori platter: Chicken Tikka, Murgh Seekh, Tangdi, Lollipop, and Fish Tikka.' },

  // --- CONTINENTAL STARTERS ---
  { id: 'cs1', name: 'Corn Cheese Ball', category: 'continental-starter', type: 'veg', price: 249, description: 'Golden crispy fried spheres containing molten cheese and sweet corn kernels.' },
  { id: 'cs2', name: 'Jalapeños Cheese Bomb', category: 'continental-starter', type: 'veg', price: 369, description: 'Stuffed spicy pickled jalapeños filled with luxurious cheese paste and breaded.', isPopular: true },
  { id: 'cs3', name: 'Falafel', category: 'continental-starter', type: 'veg', price: 309, description: 'Crispy chickpeas patties served with creamy cold tahini sauce.' },
  { id: 'cs4', name: 'Sircha Cottage Cheese', category: 'continental-starter', type: 'veg', price: 349, description: 'Cottage cheese cubes tossed in spicy sriracha chilli dressing and green garnish.' },
  { id: 'cs5', name: 'Nachos', category: 'continental-starter', type: 'veg', price: 339, description: 'Classic tortilla chips drenched in warm cheese sauce, served with tangy side salsa.' },
  { id: 'cs6', name: 'Stuff Funghi', category: 'continental-starter', type: 'veg', price: 349, description: 'Mouthwatering mushroom caps filled with creamy spinach and melted cheese blend.' },
  { id: 'cs7', name: 'Veg Au Gratin', category: 'continental-starter', type: 'veg', price: 369, description: 'Exquisite baked vegetables in rich, velvet cream white sauce and crust of golden cheese.' },
  { id: 'cs8', name: 'Tomato Basil Bruschetta', category: 'continental-starter', type: 'veg', price: 329, description: 'Crisp rustic bread slices rubbed with garlic, topped with fresh cherry tomatoes and basil.' },
  { id: 'cs9', name: 'Guacamole Bruschetta', category: 'continental-starter', type: 'veg', price: 359, description: 'Rich toast topped with premium smashed seasoned avocado salsa.' },
  { id: 'cs10', name: 'Cheese Chilli Toast', category: 'continental-starter', type: 'veg', price: 279, description: 'Cheddar and green chillies melted over crusty toasted sourdough slices.' },

  // --- CONTINENTAL STARTERS (NON-VEG) ---
  { id: 'csnv1', name: 'BBQ Chicken Wings', category: 'continental-starter', type: 'non-veg', price: 379, description: 'Juicy wings glazed in our in-house smoky dark BBQ sauce.', isPopular: true },
  { id: 'csnv2', name: 'Fish Finger', category: 'continental-starter', type: 'non-veg', price: 399, description: 'Crisp breaded sea-fish strips served with smooth lemon tartar sauce.' },
  { id: 'csnv3', name: 'Chicken Nuggets', category: 'continental-starter', type: 'non-veg', price: 379, description: 'Bite-sized golden crispy tender chicken bites.' },
  { id: 'csnv4', name: 'Crumbed Fried Chicken', category: 'continental-starter', type: 'non-veg', price: 379, description: 'Southern style heavy breaded crunch chicken portion.' },
  { id: 'csnv5', name: 'Amora Special Drumstick Bucket', category: 'continental-starter', type: 'non-veg', price: 449, description: 'Generous bucket loaded with crispy marinated fried drumsticks.' },
  { id: 'csnv6', name: 'Chicken Cigar Roll', category: 'continental-starter', type: 'non-veg', price: 410, description: 'Minced chicken seasoned with western herbs wrapped in crisp leaves.' },
  { id: 'csnv7', name: 'Butter Garlic Prawns', category: 'continental-starter', type: 'non-veg', price: 499, description: 'Luscious pan-seared prawns drenched in rich butter and chopped roasted garlic.', isPopular: true },
  { id: 'csnv8', name: 'Prawns Tempura', category: 'continental-starter', type: 'non-veg', price: 499, description: 'Light, airy golden Japanese-style battered jumbo prawns.' },

  // --- CONTINENTAL MAIN COURSE (VEG) ---
  { id: 'cmv1', name: 'Mushroom Stroganoff', category: 'continental-main', type: 'veg', price: 349, description: 'Wild mushrooms cooked in a rich, tangy sour cream gravy, served alongside butter rice.' },
  { id: 'cmv2', name: 'Veg Risotto', category: 'continental-main', type: 'veg', price: 349, description: 'Creamy slow-cooked arborio rice loaded with garden zucchini, peppers, and parmesan.' },
  { id: 'cmv3', name: 'Funghi Risotto', category: 'continental-main', type: 'veg', price: 369, description: 'Rich Italian risotto earthy with mixed exotic porcini and button forest mushrooms.' },
  { id: 'cmv4', name: 'Mexican Rice Bowl', category: 'continental-main', type: 'veg', price: 329, description: 'Spiced cilantro-lime rice paired with kidney beans, grilled sweetcorn, pico de gallo, and sour cream.' },

  // --- CONTINENTAL MAIN COURSE (NON-VEG) ---
  { id: 'cmnv1', name: 'Chicken Roulade in Red Wine Sauce', category: 'continental-main', type: 'non-veg', price: 489, description: 'Chicken breast stuffed with mushrooms & spinach, pan-roasted and served in rich wine reduction.' },
  { id: 'cmnv2', name: 'Grilled Chicken with Peri Peri Sauce', category: 'continental-main', type: 'non-veg', price: 479, description: 'Seared chicken breast marinated in fiery African bird\'s eye chili glaze.' },
  { id: 'cmnv3', name: 'Prawns Risotto', category: 'continental-main', type: 'non-veg', price: 529, description: 'Luxurious creamy parmesan arborio rice cooked with delicious juicy marine prawns.' },
  { id: 'cmnv4', name: 'Chicken Stroganoff', category: 'continental-main', type: 'non-veg', price: 449, description: 'Tender chicken strips creamed with mushrooms and gherkins, laid over buttered herb rice.' },
  { id: 'cmnv5', name: 'Grilled Fish with Lemon Butter Sauce', category: 'continental-main', type: 'non-veg', price: 519, description: 'Flaky catch of the day pan-fried and drizzled with a decadent fresh citrus-emulsified butter sauce.' },

  // --- ORIENTAL GRAVY MAIN COURSE (VEG) ---
  { id: 'ogv1', name: 'Veg Manchurian (Gravy)', category: 'oriental-gravy', type: 'veg', price: 269, description: 'Deep fried mixed vegetable balls in classic soy-garlic dark gravy.' },
  { id: 'ogv2', name: 'Chilli Paneer (Gravy)', category: 'oriental-gravy', type: 'veg', price: 289, description: 'Fried cottage cheese tossed with capsicums in hot and pungent chili-garlic sauce.' },
  { id: 'ogv3', name: 'Paneer in Hot Garlic Sauce', category: 'oriental-gravy', type: 'veg', price: 289, description: 'Moist paneer bathed in a fiery, sweet, and sticky garlic-heavy oriental sauce.' },
  { id: 'ogv4', name: 'Paneer in Schezwan Sauce', category: 'oriental-gravy', type: 'veg', price: 289, description: 'Spiced up cottage cheese cubes prepared in a spicy, tingling Schezwan peppercorn slurry.' },

  // --- ORIENTAL GRAVY MAIN COURSE (NON-VEG) ---
  { id: 'ognv1', name: 'Chilli Chicken (Gravy)', category: 'oriental-gravy', type: 'non-veg', price: 349, description: 'Boneless chicken cubes tossed with onions and green peppers in seasoned soy-chilli gravy.' },
  { id: 'ognv2', name: 'Chicken Manchurian (Gravy)', category: 'oriental-gravy', type: 'non-veg', price: 349, description: 'Minced chicken balls fried and submerged in a deep brown savory ginger-garlic broth.' },
  { id: 'ognv3', name: 'Kung Pao Chicken (Gravy)', category: 'oriental-gravy', type: 'non-veg', price: 379, description: 'Stir-fried dark meat with dried red chillies, onions, celery, and toasted crunchy peanuts.' },
  { id: 'ognv4', name: 'Chicken in Hot Garlic Sauce', category: 'oriental-gravy', type: 'non-veg', price: 369, description: 'Pan-fried chicken pieces cooked in our intensely flavorful garlic glaze.' },

  // --- EGG SPECIAL ---
  { id: 'egg1', name: 'Plain Omelette', category: 'biryani-egg', type: 'egg', price: 99, description: 'Simple seasoned farmhouse egg omelette cooked in butter.' },
  { id: 'egg2', name: 'Boiled Egg (3 Piece)', category: 'biryani-egg', type: 'egg', price: 99, description: 'Three hard or medium-boiled eggs sprinkled with pepper and salt.' },
  { id: 'egg3', name: 'Bread Omelette', category: 'biryani-egg', type: 'egg', price: 149, description: 'Pan toasted bread slices sandwiched with a spiced egg wrap.' },
  { id: 'egg4', name: 'Sunny Side Up', category: 'biryani-egg', type: 'egg', price: 99, description: 'Perfect runny double-egg yolk skillet fry.' },

  // --- BIRYANI ---
  { id: 'by1', name: 'Subz Matka Biryani', category: 'biryani-egg', type: 'veg', price: 219, description: 'Fragrant basmati rice dum-cooked in a traditional clay pot with seasoned vegetables.' },
  { id: 'by2', name: 'Laziz Paneer Tikka Biryani', category: 'biryani-egg', type: 'veg', price: 289, description: 'Enriched layered basmati rice loaded with roasted smoky spiced paneer tikkas.' },
  { id: 'by3', name: 'Egg Dum Biryani', category: 'biryani-egg', type: 'egg', price: 259, description: 'Slow-cooked aromatic basmati rice layered with spiced boiled eggs.' },
  { id: 'by4', name: 'Murgh Matka Biryani', category: 'biryani-egg', type: 'non-veg', price: 359, description: 'Traditional clay-pot dum-cooked chicken biryani with fresh mint and saffron.' },
  { id: 'by5', name: 'Mutton Matka Biryani', category: 'biryani-egg', type: 'non-veg', price: 449, description: 'Tender baby lamb slow-cooked with highly seasoned long-grain basmati rice.', isPopular: true },
  { id: 'by6', name: 'Prawns Biryani', category: 'biryani-egg', type: 'non-veg', price: 519, description: 'Spiced prawns cooked together with seasoned basmati rice and signature ground spices.' },

  // --- RAITA ---
  { id: 'ra1', name: 'Mix Veg Raita', category: 'biryani-egg', type: 'veg', price: 99 },
  { id: 'ra2', name: 'Pineapple Raita', category: 'biryani-egg', type: 'veg', price: 111 },
  { id: 'ra3', name: 'Plain Curd', category: 'biryani-egg', type: 'veg', price: 49 },

  // --- ORIENTAL STARTER (VEG) ---
  { id: 'osv1', name: 'Veg Spring Roll', category: 'oriental-starter', type: 'veg', price: 249, description: 'Golden sheet pastry wraps enclosing tossed julienned vegetables.' },
  { id: 'osv2', name: 'Honey Chilli Potato', category: 'oriental-starter', type: 'veg', price: 279, description: 'Crisp-fried matchstick potatoes tossed in sweet honey, dark soy, and toasted sesame.', isPopular: true },
  { id: 'osv3', name: 'Chilli Paneer (Dry)', category: 'oriental-starter', type: 'veg', price: 289, description: 'Dry roasted soft paneer cubes flavored with green chilies, capsicum, and garlic.' },
  { id: 'osv4', name: 'Paneer 65', category: 'oriental-starter', type: 'veg', price: 299, description: 'Deep fried cottage cheese nuggets dressed with yogurt, curry leaves, and spicy red masala.' },
  { id: 'osv5', name: 'Veg Manchurian (Dry)', category: 'oriental-starter', type: 'veg', price: 249, description: 'Crisp vegetable dumplings pan-fried in ginger-garlic dressing.' },
  { id: 'osv6', name: 'Corn Salt & Pepper', category: 'oriental-starter', type: 'veg', price: 249, description: 'Crunchy battered corn nuggets dry tossed with crushed sea salt and black peppercorn.' },
  { id: 'osv7', name: 'Mushroom Salt & Pepper', category: 'oriental-starter', type: 'veg', price: 269 },
  { id: 'osv8', name: 'Kung Pao Paneer', category: 'oriental-starter', type: 'veg', price: 299 },
  { id: 'osv9', name: 'Chilli Mushroom', category: 'oriental-starter', type: 'veg', price: 269 },
  { id: 'osv10', name: 'Paneer Hotpan', category: 'oriental-starter', type: 'veg', price: 299 },

  // --- ORIENTAL STARTER (NON-VEG) ---
  { id: 'osnv1', name: 'Chicken Lollipop', category: 'oriental-starter', type: 'non-veg', price: 339, description: 'Iconic deep-fried drummettes tossed in mild red ginger-garlic paste.', isPopular: true },
  { id: 'osnv2', name: 'Chicken Lollipop Masala', category: 'oriental-starter', type: 'non-veg', price: 349, description: 'Crispy lollipops tossed in a thicker, rich masala glaze.' },
  { id: 'osnv3', name: 'Chicken 65', category: 'oriental-starter', type: 'non-veg', price: 349, description: 'Classic fiery south Indian fried chicken chunks flavored with curry leaves.' },
  { id: 'osnv4', name: 'Chilli Chicken (Dry)', category: 'oriental-starter', type: 'non-veg', price: 339 },
  { id: 'osnv5', name: 'Chicken Manchurian (Dry)', category: 'oriental-starter', type: 'non-veg', price: 339 },
  { id: 'osnv6', name: 'Dragon Chicken', category: 'oriental-starter', type: 'non-veg', price: 369, description: 'Stir-fried thin strips of chicken tossed in an ultra-spicy peri-style sweet and hot red paste.' },
  { id: 'osnv7', name: 'Chicken Salt & Pepper', category: 'oriental-starter', type: 'non-veg', price: 349 },
  { id: 'osnv8', name: 'Kung Pao Chicken (Dry)', category: 'oriental-starter', type: 'non-veg', price: 389 },

  // --- ORIENTAL RICE & NOODLES (Veg, Egg, Chicken, Meat columns) ---
  { id: 'or1', name: 'Veg Fried Rice', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 249 }, { label: 'Egg', price: 269 }, { label: 'Chicken', price: 289 }, { label: 'Meat/Mutton', price: 319 }] },
  { id: 'or2', name: 'Schezwan Fried Rice', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 259 }, { label: 'Egg', price: 279 }, { label: 'Chicken', price: 299 }, { label: 'Meat/Mutton', price: 329 }] },
  { id: 'or3', name: 'Burnt Garlic Fried Rice', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 249 }, { label: 'Egg', price: 269 }, { label: 'Chicken', price: 289 }, { label: 'Meat/Mutton', price: 319 }] },
  { id: 'or4', name: 'Hong Kong Rice', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 249 }, { label: 'Egg', price: 269 }, { label: 'Chicken', price: 289 }, { label: 'Meat/Mutton', price: 319 }] },
  { id: 'or5', name: 'Triple Fried Rice with Gravy', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 289 }, { label: 'Egg', price: 319 }, { label: 'Chicken', price: 339 }, { label: 'Meat/Mutton', price: 369 }] },
  { id: 'or6', name: 'Hakka Noodles', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 249 }, { label: 'Egg', price: 269 }, { label: 'Chicken', price: 289 }, { label: 'Meat/Mutton', price: 319 }] },
  { id: 'or7', name: 'Schezwan Noodles', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 259 }, { label: 'Egg', price: 279 }, { label: 'Chicken', price: 299 }, { label: 'Meat/Mutton', price: 329 }] },
  { id: 'or8', name: 'Singapore Noodles', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 249 }, { label: 'Egg', price: 269 }, { label: 'Chicken', price: 289 }, { label: 'Meat/Mutton', price: 319 }] },
  { id: 'or9', name: 'Phad Thai Noodles', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 269 }, { label: 'Egg', price: 289 }, { label: 'Chicken', price: 319 }, { label: 'Meat/Mutton', price: 349 }] },
  { id: 'or10', name: 'Burnt Garlic Noodles', category: 'oriental-starter', type: 'veg', priceOptions: [{ label: 'Veg', price: 249 }, { label: 'Egg', price: 269 }, { label: 'Chicken', price: 289 }, { label: 'Meat/Mutton', price: 319 }] },

  // --- SIZZLERS ---
  { id: 'sz1', name: 'Continental Chef Special Sizzler', category: 'continental-main', type: 'veg', priceOptions: [{ label: 'Veg', price: 569 }, { label: 'Non-veg (Chicken/Fish)', price: 869 }] },
  { id: 'sz2', name: 'Chinese Chef Special Sizzler', category: 'continental-main', type: 'veg', priceOptions: [{ label: 'Veg', price: 579 }, { label: 'Non-veg (Chicken)', price: 779 }] },

  // --- SANDWICHES (VEG) ---
  { id: 'swv1', name: 'Amora Special Decker Sandwich', category: 'burgers-sandwiches', type: 'veg', price: 199, description: 'Our signature triple-layered vegetable classic toasted double-decker.' },
  { id: 'swv2', name: 'Paneer Cheese Sandwich', category: 'burgers-sandwiches', type: 'veg', price: 179 },
  { id: 'swv3', name: 'Cheese Corn Sandwich', category: 'burgers-sandwiches', type: 'veg', price: 169 },
  { id: 'swv4', name: 'Paneer Makhani Grilled Sandwich', category: 'burgers-sandwiches', type: 'veg', price: 189, description: 'Toasted loaded sandwich flavored with butter-rich makhani sauce.' },
  { id: 'swv5', name: 'Classic Veg Grilled Sandwich', category: 'burgers-sandwiches', type: 'veg', price: 139 },
  { id: 'swv6', name: 'Spinach Corn Grilled Sandwich', category: 'burgers-sandwiches', type: 'veg', price: 149 },

  // --- SANDWICHES (NON-VEG) ---
  { id: 'swnv1', name: 'Chicken Grilled Sandwich', category: 'burgers-sandwiches', type: 'non-veg', price: 189 },
  { id: 'swnv2', name: 'Chicken Club Sandwich', category: 'burgers-sandwiches', type: 'non-veg', price: 229, description: 'Triple decker egg, chicken breast, lettuce, tomato and house mayo.' },
  { id: 'swnv3', name: 'Chicken Tikka Sandwich', category: 'burgers-sandwiches', type: 'non-veg', price: 239 },
  { id: 'swnv4', name: 'BBQ Chicken Sandwich', category: 'burgers-sandwiches', type: 'non-veg', price: 249 },
  { id: 'swnv5', name: 'Chicken Mayo Sandwich', category: 'burgers-sandwiches', type: 'non-veg', price: 229 },

  // --- PIZZA (VEG) ---
  { id: 'pzv1', name: 'Margarita Pizza', category: 'pizza-pasta', type: 'veg', price: 249, description: 'House tomato spread loaded with fresh mozzarella cheese and olive oil drizzle.' },
  { id: 'pzv2', name: 'Mushroom & Spinach Pizza', category: 'pizza-pasta', type: 'veg', price: 269 },
  { id: 'pzv3', name: 'Paneer Tikka Pizza', category: 'pizza-pasta', type: 'veg', price: 299 },
  { id: 'pzv4', name: 'Paneer Chilli Pizza', category: 'pizza-pasta', type: 'veg', price: 349 },
  { id: 'pzv5', name: 'FarmHouse Exotic Vegetable Pizza', category: 'pizza-pasta', type: 'veg', price: 379, description: 'Overloaded with zucchini, coloured bell peppers, black olives, corn, onions.', isPopular: true },

  // --- PIZZA (NON-VEG) ---
  { id: 'pznv1', name: 'BBQ Chicken Pizza', category: 'pizza-pasta', type: 'non-veg', price: 399, description: 'Pulled sweet barbecue chicken chunks, sliced red onions, and hot cheese.' },
  { id: 'pznv2', name: 'Chicken Susegas Pizza', category: 'pizza-pasta', type: 'non-veg', price: 399, description: 'Goan layout chicken pizza loaded with soft, mildly spiced and seasoned chunks.' },
  { id: 'pznv3', name: 'Chicken Pepperoni Pizza', category: 'pizza-pasta', type: 'non-veg', price: 399, description: 'Traditional cured chicken pepperoni wheels and dynamic base pizza.' },
  { id: 'pznv4', name: 'Chicken Tikka Pizza', category: 'pizza-pasta', type: 'non-veg', price: 399 },

  // --- PASTA ---
  { id: 'pst1', name: 'Alfredo Pasta (White Sauce)', category: 'pizza-pasta', type: 'veg', priceOptions: [{ label: 'Veg', price: 349 }, { label: 'Egg', price: 369 }, { label: 'Chicken', price: 429 }] },
  { id: 'pst2', name: 'Arrabiata Pasta (Red Sauce)', category: 'pizza-pasta', type: 'veg', priceOptions: [{ label: 'Veg', price: 349 }, { label: 'Egg', price: 369 }, { label: 'Chicken', price: 429 }] },
  { id: 'pst3', name: 'Aglio E Olio Pasta', category: 'pizza-pasta', type: 'veg', priceOptions: [{ label: 'Veg', price: 349 }, { label: 'Egg', price: 369 }, { label: 'Chicken', price: 429 }] },
  { id: 'pst4', name: 'Creamy Pesto Sauce Pasta', category: 'pizza-pasta', type: 'veg', priceOptions: [{ label: 'Veg', price: 349 }, { label: 'Egg', price: 369 }, { label: 'Chicken', price: 429 }] },

  // --- TANDOOR STARTER ---
  { id: 'td1', name: 'Paneer Thecha Kebab', category: 'tandoor', type: 'veg', price: 329, description: 'Spicy Marathi-style coarse green chilli-garlic crushed paste coat on roasted paneer blocks.', isPopular: true },
  { id: 'td2', name: 'Paneer Tikka', category: 'tandoor', type: 'veg', price: 309, description: 'Classic red paste spiced yogurt tandoori charcoal cottage cheese skewers.' },
  { id: 'td3', name: 'Hara Bhara Kebab', category: 'tandoor', type: 'veg', price: 279, description: 'Spinach, green pea and potato shallow fried patties, enriched with royal dry fruit core.' },
  { id: 'td4', name: 'Tandoori Mushroom', category: 'tandoor', type: 'veg', price: 299 },
  { id: 'td5', name: 'Creamy Malai Paneer Tikka', category: 'tandoor', type: 'veg', price: 329, description: 'Velvety mild cardamom flavored cheese block roast.' },
  { id: 'td6', name: 'Paneer Afghani Kebab', category: 'tandoor', type: 'veg', price: 319 },
  { id: 'td7', name: 'Paneer Sufiyana Kebab', category: 'tandoor', type: 'veg', price: 339 },
  { id: 'td8', name: 'Bharva Aloo', category: 'tandoor', type: 'veg', price: 329, description: 'Scooped crisp potato barrels plugged with paneer, nuts, and dry-roasted tandoori spice.' },
  { id: 'td9', name: 'Veg Sheek Kebab', category: 'tandoor', type: 'veg', price: 299 },

  // --- NON-VEG TANDOOR STARTER ---
  { id: 'tdnv1', name: 'Tandoori Murgh', category: 'tandoor', type: 'non-veg', priceOptions: [{ label: 'Half', price: 369 }, { label: 'Full', price: 499 }] },
  { id: 'tdnv2', name: 'Royal Murgh Talwari', category: 'tandoor', type: 'non-veg', price: 409, description: 'Majestic whole spicy clay-oven sword-skewered royal chicken chops.' },
  { id: 'tdnv3', name: 'Murgh Thecha Tikka', category: 'tandoor', type: 'non-veg', price: 399, description: 'Spiced up tender chicken pieces drenched in hot garlic-green chili crushed paste.' },
  { id: 'tdnv4', name: 'Murgh Pahadi Kebab', category: 'tandoor', type: 'non-veg', price: 409, description: 'Mint and green herb marinated succulent chicken shoulder skewers.' },
  { id: 'tdnv5', name: 'Arabian Tangdi Kebab', category: 'tandoor', type: 'non-veg', price: 429, description: 'Saffron-infused cream and cheese paste double roasted chicken legs.' },
  { id: 'tdnv6', name: 'Tandoori Lollipop', category: 'tandoor', type: 'non-veg', price: 379 },
  { id: 'tdnv7', name: 'Fish Tikka', category: 'tandoor', type: 'non-veg', price: 499 },
  { id: 'tdnv8', name: 'Tandoori Prawns', category: 'tandoor', type: 'non-veg', price: 519, isPopular: true },

  // --- SOUPS & SALADS ---
  { id: 'sp1', name: 'Manchow Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 149 }, { label: 'Chicken', price: 169 }, { label: 'Mutton', price: 189 }] },
  { id: 'sp2', name: 'Sweet Corn Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 149 }, { label: 'Chicken', price: 169 }, { label: 'Mutton', price: 189 }] },
  { id: 'sp3', name: 'Hot & Sour Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 149 }, { label: 'Chicken', price: 169 }, { label: 'Mutton', price: 189 }] },
  { id: 'sp4', name: 'Lemon Coriander Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 149 }, { label: 'Chicken', price: 169 }, { label: 'Mutton', price: 189 }] },
  { id: 'sp5', name: 'Tom Yum Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 159 }, { label: 'Chicken', price: 179 }, { label: 'Mutton', price: 199 }] },
  { id: 'sp6', name: 'Tom Kha Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 159 }, { label: 'Chicken', price: 179 }, { label: 'Mutton', price: 199 }] },

  // --- CONTINENTAL SOUPS ---
  { id: 'scp1', name: 'Almond Broccoli Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 199 }, { label: 'Chicken', price: 239 }, { label: 'Seafood', price: 279 }] },
  { id: 'scp2', name: 'Roasted Cauliflower Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 189 }, { label: 'Chicken', price: 269 }, { label: 'Seafood', price: 269 }] },
  { id: 'scp3', name: 'Minestrone Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 179 }, { label: 'Chicken', price: 219 }, { label: 'Seafood', price: 259 }] },
  { id: 'scp4', name: 'Roasted Tomato Basil Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 169 }, { label: 'Chicken', price: 209 }, { label: 'Seafood', price: 249 }] },
  { id: 'scp5', name: 'Mushroom Cappuccino Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 149 }, { label: 'Chicken', price: 199 }, { label: 'Seafood', price: 239 }] },
  { id: 'scp6', name: 'Corn Chowder Soup', category: 'soups-salads', type: 'veg', priceOptions: [{ label: 'Veg', price: 139 }, { label: 'Chicken', price: 189 }, { label: 'Seafood', price: 229 }] },

  // --- SALADS ---
  { id: 'sld1', name: 'Classic Caesar Salad', category: 'soups-salads', type: 'veg', price: 279 },
  { id: 'sld2', name: 'Horlatiki Greek Salad', category: 'soups-salads', type: 'veg', price: 299 },
  { id: 'sld3', name: 'Fattoush Arabic Salad', category: 'soups-salads', type: 'veg', price: 279 },
  { id: 'sld4', name: 'Roasted Beetroot Salad', category: 'soups-salads', type: 'veg', price: 279 },

  // --- SMALL BITE ---
  { id: 'sb1', name: 'Fried Papad', category: 'soups-salads', type: 'veg', price: 39 },
  { id: 'sb2', name: 'Masala Papad', category: 'soups-salads', type: 'veg', price: 79 },
  { id: 'sb3', name: 'Roasted Papad', category: 'soups-salads', type: 'veg', price: 39 },
  { id: 'sb4', name: 'Green Garden Salad', category: 'soups-salads', type: 'veg', price: 129 },

  // --- WRAPS ---
  { id: 'wr1', name: 'Paneer Tikka Wrap', category: 'soups-salads', type: 'veg', price: 219 },
  { id: 'wr2', name: 'Veggie Delight Wrap', category: 'soups-salads', type: 'veg', price: 199 },
  { id: 'wr3', name: 'Chicken Tikka Wrap', category: 'soups-salads', type: 'non-veg', price: 239 },
  { id: 'wr4', name: 'Crispy Chicken Wrap', category: 'soups-salads', type: 'non-veg', price: 249 },

  // --- FRIES ---
  { id: 'fr1', name: 'French Fries - Salted', category: 'soups-salads', type: 'veg', price: 139 },
  { id: 'fr2', name: 'French Fries - Peri Peri', category: 'soups-salads', type: 'veg', price: 179 },
  { id: 'fr3', name: 'Potato Wedges - Salted', category: 'soups-salads', type: 'veg', price: 189 },
  { id: 'fr4', name: 'Potato Wedges - Peri Peri', category: 'soups-salads', type: 'veg', price: 209 },
  { id: 'fr5', name: 'Sloppy Cheesy Fries', category: 'soups-salads', type: 'veg', price: 249, isPopular: true },

  // --- BURGERS ---
  { id: 'bgv1', name: 'Classic Veg Burger', category: 'burgers-sandwiches', type: 'veg', price: 149 },
  { id: 'bgv2', name: 'Cheese Veg Burger', category: 'burgers-sandwiches', type: 'veg', price: 179 },
  { id: 'bgv3', name: 'Paneer Tikka Burger', category: 'burgers-sandwiches', type: 'veg', price: 189 },
  { id: 'bgv4', name: 'Mexican Veg Burger', category: 'burgers-sandwiches', type: 'veg', price: 189 },
  { id: 'bgnv1', name: 'Classic Chicken Burger', category: 'burgers-sandwiches', type: 'non-veg', price: 179 },
  { id: 'bgnv2', name: 'Peri Peri Chicken Burger', category: 'burgers-sandwiches', type: 'non-veg', price: 199 },
  { id: 'bgnv3', name: 'BBQ Chicken Burger', category: 'burgers-sandwiches', type: 'non-veg', price: 209 },
  { id: 'bgnv4', name: 'Mexican Chicken Burger', category: 'burgers-sandwiches', type: 'non-veg', price: 219 },

  // --- SHOTS ---
  { id: 'sht1', name: 'Jamun Shot', category: 'mocktails-shakes', type: 'beverage', priceOptions: [{ label: 'Single', price: 59 }, { label: 'Double', price: 99 }] },
  { id: 'sht2', name: 'Aura Paan Shot', category: 'mocktails-shakes', type: 'beverage', priceOptions: [{ label: 'Single', price: 79 }, { label: 'Double', price: 139 }] },

  // --- MOCKTAILS ---
  { id: 'mk1', name: 'Virgin Guava Merry', category: 'mocktails-shakes', type: 'beverage', price: 189, description: 'Zesty guava juice shaken with cold lemonade and layered with secret spices.' },
  { id: 'mk2', name: 'Coconut Blossom', category: 'mocktails-shakes', type: 'beverage', price: 299 },
  { id: 'mk3', name: 'Classy Blueberry Fizz', category: 'mocktails-shakes', type: 'beverage', price: 169 },
  { id: 'mk4', name: 'Virgin Pina Colada', category: 'mocktails-shakes', type: 'beverage', price: 189 },
  { id: 'mk5', name: 'Frozen Mango Mocktail', category: 'mocktails-shakes', type: 'beverage', price: 199 },
  { id: 'mk6', name: 'Strawberry Mountain', category: 'mocktails-shakes', type: 'beverage', price: 211 },
  { id: 'mk7', name: 'Kardinal Kick', category: 'mocktails-shakes', type: 'beverage', price: 179 },
  { id: 'mk8', name: 'Sherlock Punch', category: 'mocktails-shakes', type: 'beverage', price: 219 },
  { id: 'mk9', name: 'Pink Rose Love', category: 'mocktails-shakes', type: 'beverage', price: 249 },
  { id: 'mk10', name: 'Lemon Ice Tea', category: 'mocktails-shakes', type: 'beverage', price: 169, description: 'Choose from peach, strawberry, green apple, orange, or mango flavour.' },
  { id: 'mk11', name: 'Kala Khatta Blaster', category: 'mocktails-shakes', type: 'beverage', price: 169, isPopular: true },
  { id: 'mk12', name: 'Virgin Mojito', category: 'mocktails-shakes', type: 'beverage', price: 159 },
  { id: 'mk13', name: 'Flavoured Virgin Mojito', category: 'mocktails-shakes', type: 'beverage', price: 189, description: 'Refreshing mojito with your choice of watermelon, orange, kiwi, green apple, or strawberry flavour.' },
  { id: 'mk14', name: 'Blue Lagoon', category: 'mocktails-shakes', type: 'beverage', price: 149 },

  // --- MILK SHAKES ---
  { id: 'sh1', name: 'Fudgy Chocolate And Oreo Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 249, description: 'Double loaded cream dream dark chocolate and crunchy Oreo lumps.' },
  { id: 'sh2', name: 'Belgium Chocolate Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 239 },
  { id: 'sh3', name: 'Ferrero Rocher & Cadbury Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 245, isPopular: true },
  { id: 'sh4', name: 'Snicker Crunchy Blast', category: 'mocktails-shakes', type: 'beverage', price: 249 },
  { id: 'sh5', name: 'Lotus Biscoff Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 269, description: 'Real imported cookie butter blended into fresh milk and cold cream base.' },
  { id: 'sh6', name: 'Tak Tak Kitkat Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 199 },
  { id: 'sh7', name: 'Classic Vanilla Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 159 },
  { id: 'sh8', name: 'Mango Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 169 },
  { id: 'sh9', name: 'Strawberry Milkshake', category: 'mocktails-shakes', type: 'beverage', price: 149 },
  { id: 'sh10', name: 'Cold Coffee', category: 'mocktails-shakes', type: 'beverage', price: 149 },

  // --- FRESH JUICES ---
  { id: 'fj1', name: 'Orange Juice', category: 'mocktails-shakes', type: 'beverage', price: 149 },
  { id: 'fj2', name: 'Watermelon Juice', category: 'mocktails-shakes', type: 'beverage', price: 149 },
  { id: 'fj3', name: 'Pineapple Juice', category: 'mocktails-shakes', type: 'beverage', price: 149 },
  { id: 'fj4', name: 'Mix Fruit Juice', category: 'mocktails-shakes', type: 'beverage', price: 159 },
  { id: 'fj5', name: 'Apple Juice', category: 'mocktails-shakes', type: 'beverage', price: 149 },
  { id: 'fj6', name: 'Beetroot Juice', category: 'mocktails-shakes', type: 'beverage', price: 99 },

  // --- BEVERAGES ---
  { id: 'bv1', name: 'Mineral Water', category: 'mocktails-shakes', type: 'beverage', price: 20 },
  { id: 'bv2', name: 'Fresh Lime Water', category: 'mocktails-shakes', type: 'beverage', priceOptions: [{ label: 'Glass', price: 49 }] },
  { id: 'bv3', name: 'Fresh Lime Soda', category: 'mocktails-shakes', type: 'beverage', priceOptions: [{ label: 'Glass', price: 59 }] },
  { id: 'bv4', name: 'Soft Drink (Sprite/Coke/Thumbs Up)', category: 'mocktails-shakes', type: 'beverage', priceOptions: [{ label: 'Glass', price: 39 }] },
  { id: 'bv5', name: 'Red Bull Energy Drink', category: 'mocktails-shakes', type: 'beverage', price: 150 }
];
