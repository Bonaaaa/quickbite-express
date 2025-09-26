/**
 * MENU DATA CONFIGURATION
 *
 * Static data untuk menu items yang digunakan dalam aplikasi
 * Data ini tidak menggunakan useState karena sifatnya static/tidak berubah
 *
 * Structure setiap menu item:
 * - id: unique identifier (number) - digunakan sebagai key di useState cart object
 * - name: nama menu item (string)
 * - category: kategori untuk grouping (string)
 * - price: harga dalam rupiah (number) - digunakan untuk calculations
 * - description: deskripsi item (string)
 * - icon: React component dari lucide-react (JSX element)
 *
 * Requirement: More than 5 items (current: 8 items)
 */

export const menuItems = [
  // Main Course Items (20 items)
  {
    id: 1,
    name: "Classic Burger",
    category: "Main Course",
    price: 45000,
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 85000,
    description: "Traditional Italian pizza with fresh mozzarella and basil",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    category: "Main Course",
    price: 65000,
    description: "Herb-marinated chicken breast with seasonal vegetables",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Fish & Chips",
    category: "Main Course",
    price: 55000,
    description: "Beer-battered fish with crispy fries and tartar sauce",
    image:
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Beef Steak",
    category: "Main Course",
    price: 95000,
    description: "Tender ribeye steak with garlic butter and herbs",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "BBQ Ribs",
    category: "Main Course",
    price: 78000,
    description: "Slow-cooked pork ribs with smoky BBQ sauce",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Chicken Wings",
    category: "Main Course",
    price: 42000,
    description: "Crispy buffalo wings with blue cheese dip",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Pepperoni Pizza",
    category: "Main Course",
    price: 75000,
    description: "Classic pizza loaded with pepperoni and mozzarella",
    image:
      "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Cheeseburger",
    category: "Main Course",
    price: 52000,
    description: "Beef patty with crispy melted cheese",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Grilled Salmon",
    category: "Main Course",
    price: 88000,
    description: "Fresh Atlantic salmon with lemon herb seasoning",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 11,
    name: "Chicken Sandwich",
    category: "Main Course",
    price: 38000,
    description: "Grilled chicken breast with avocado and mayo",
    image:
      "https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Mushroom Pizza",
    category: "Main Course",
    price: 72000,
    description: "Wood-fired pizza with mixed mushrooms and truffle oil",
    image:
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 13,
    name: "Fried Chicken",
    category: "Main Course",
    price: 48000,
    description: "Crispy fried chicken with honey mustard sauce",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 14,
    name: "Lamb Chops",
    category: "Main Course",
    price: 105000,
    description: "Herb-crusted lamb chops with mint jus",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 15,
    name: "Tuna Steak",
    category: "Main Course",
    price: 82000,
    description: "Seared tuna with wasabi and soy glaze",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 16,
    name: "Pork Tenderloin",
    category: "Main Course",
    price: 68000,
    description: "Roasted pork with apple compote",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 17,
    name: "Seafood Pasta",
    category: "Main Course",
    price: 75000,
    description: "Linguine with shrimp, scallops, and white wine sauce",
    image:
      "https://plus.unsplash.com/premium_photo-1661455803353-f69a605b5105?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Beef Tacos",
    category: "Main Course",
    price: 45000,
    description: "Three soft tacos with seasoned ground beef",
    image:
      "https://plus.unsplash.com/premium_photo-1661730314652-911662c0d86e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Vegetable Curry",
    category: "Main Course",
    price: 42000,
    description: "Mixed vegetables in aromatic coconut curry",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 20,
    name: "Duck Breast",
    category: "Main Course",
    price: 92000,
    description: "Pan-seared duck breast with orange glaze",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center",
  },

  // Appetizers (12 items)
  {
    id: 21,
    name: "Caesar Salad",
    category: "Appetizers",
    price: 35000,
    description: "Crispy romaine lettuce with parmesan and croutons",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 22,
    name: "Chicken Nuggets",
    category: "Appetizers",
    price: 32000,
    description: "Golden crispy chicken nuggets with dipping sauce",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 23,
    name: "Mozzarella Sticks",
    category: "Appetizers",
    price: 38000,
    description: "Breaded mozzarella with marinara sauce",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 24,
    name: "Garlic Bread",
    category: "Appetizers",
    price: 25000,
    description: "Toasted bread with garlic butter and herbs",
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    name: "Onion Rings",
    category: "Appetizers",
    price: 28000,
    description: "Crispy beer-battered onion rings",
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 26,
    name: "Bruschetta",
    category: "Appetizers",
    price: 33000,
    description: "Toasted bread with fresh tomatoes and basil",
    image:
      "https://plus.unsplash.com/premium_photo-1677686707252-16013f466e61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 27,
    name: "Spring Rolls",
    category: "Appetizers",
    price: 30000,
    description: "Fresh vegetable spring rolls with peanut sauce",
    image:
      "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    name: "Stuffed Mushrooms",
    category: "Appetizers",
    price: 36000,
    description: "Button mushrooms stuffed with herbs and cheese",
    image:
      "https://images.unsplash.com/photo-1756478629551-2f5708638b23?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  },
  {
    id: 29,
    name: "Chicken Satay",
    category: "Appetizers",
    price: 40000,
    description: "Grilled chicken skewers with peanut sauce",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 30,
    name: "Calamari Rings",
    category: "Appetizers",
    price: 45000,
    description: "Fried squid rings with spicy mayo",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 31,
    name: "Potato Wedges",
    category: "Appetizers",
    price: 26000,
    description: "Seasoned potato wedges with sour cream",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 32,
    name: "Greek Salad",
    category: "Appetizers",
    price: 38000,
    description: "Mixed greens with feta, olives, and cucumber",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center",
  },

  // Beverages (10 items)
  {
    id: 33,
    name: "Cappuccino",
    category: "Beverages",
    price: 28000,
    description: "Rich espresso topped with steamed milk foam",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 34,
    name: "Vanilla Milkshake",
    category: "Beverages",
    price: 22000,
    description: "Thick and creamy vanilla milkshake with whipped cream",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 35,
    name: "Fresh Orange Juice",
    category: "Beverages",
    price: 18000,
    description: "Freshly squeezed orange juice",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 36,
    name: "Iced Coffee",
    category: "Beverages",
    price: 25000,
    description: "Cold brew coffee with ice and cream",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 37,
    name: "Strawberry Smoothie",
    category: "Beverages",
    price: 32000,
    description: "Fresh strawberries blended with yogurt",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 38,
    name: "Green Tea",
    category: "Beverages",
    price: 15000,
    description: "Premium Japanese green tea",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 39,
    name: "Chocolate Milkshake",
    category: "Beverages",
    price: 24000,
    description: "Rich chocolate milkshake with whipped cream",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 40,
    name: "Lemonade",
    category: "Beverages",
    price: 16000,
    description: "Fresh squeezed lemonade with mint",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 41,
    name: "Hot Chocolate",
    category: "Beverages",
    price: 20000,
    description: "Rich hot chocolate with marshmallows",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    name: "Mango Smoothie",
    category: "Beverages",
    price: 30000,
    description: "Tropical mango smoothie with coconut",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop&crop=center",
  },

  // Desserts (8 items)
  {
    id: 43,
    name: "Chocolate Ice Cream",
    category: "Desserts",
    price: 25000,
    description: "Creamy Belgian chocolate ice cream with chocolate chips",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 44,
    name: "Cheesecake",
    category: "Desserts",
    price: 38000,
    description: "New York style cheesecake with berry compote",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 45,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 35000,
    description: "Rich chocolate layer cake with ganache",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 46,
    name: "Apple Pie",
    category: "Desserts",
    price: 32000,
    description: "Classic apple pie with cinnamon and vanilla ice cream",
    image:
      "https://images.unsplash.com/photo-1572383672419-ab35444a6934?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 47,
    name: "Tiramisu",
    category: "Desserts",
    price: 42000,
    description: "Italian coffee-flavored dessert with mascarpone",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 48,
    name: "Strawberry Ice Cream",
    category: "Desserts",
    price: 24000,
    description: "Fresh strawberry ice cream with real fruit pieces",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 49,
    name: "Brownies",
    category: "Desserts",
    price: 28000,
    description: "Fudgy chocolate brownies with walnuts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 50,
    name: "Vanilla Panna Cotta",
    category: "Desserts",
    price: 36000,
    description: "Silky vanilla panna cotta with fresh berries",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&crop=center",
  },
];
/**
 * DATA ANALYSIS:
 *
 * CATEGORIES BREAKDOWN:
 * - Main Course: 4 items (id: 1,2,4,7)
 * - Appetizers: 1 item (id: 3)
 * - Beverages: 2 items (id: 5,8)
 * - Desserts: 1 item (id: 6)
 *
 * PRICE RANGE:
 * - Minimum: Rp 22,000 (Vanilla Milkshake)
 * - Maximum: Rp 85,000 (Margherita Pizza)
 * - Average: Rp 44,375
 *
 * ICON USAGE:
 * - Sandwich: 4 items (Main Course items)
 * - Coffee: 2 items (Beverages)
 * - Pizza: 1 item
 * - Salad: 1 item
 * - IceCream: 1 item
 *
 * EXPORT USAGE:
 * Data ini diimport di App.js dan digunakan untuk:
 * 1. Grouping by category (Object.entries, reduce)
 * 2. Mapping untuk render MenuCard components
 * 3. Source data untuk cart operations (addToCart functions)
 * 4. Price calculations (calculateTotal function)
 */
