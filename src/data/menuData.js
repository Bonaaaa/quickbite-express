import React from 'react';
import { Coffee, Pizza, Salad, IceCream, Sandwich } from 'lucide-react';

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
  {
    id: 1,
    name: "Classic Burger",
    category: "Main Course",
    price: 45000,
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    icon: <Sandwich size={32} />
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 85000,
    description: "Traditional Italian pizza with fresh mozzarella and basil",
    icon: <Pizza size={32} />
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Appetizers",
    price: 35000,
    description: "Crispy romaine lettuce with parmesan and croutons",
    icon: <Salad size={32} />
  },
  {
    id: 4,
    name: "Grilled Chicken",
    category: "Main Course",
    price: 65000,
    description: "Herb-marinated chicken breast with seasonal vegetables",
    icon: <Sandwich size={32} />
  },
  {
    id: 5,
    name: "Cappuccino",
    category: "Beverages",
    price: 28000,
    description: "Rich espresso topped with steamed milk foam",
    icon: <Coffee size={32} />
  },
  {
    id: 6,
    name: "Chocolate Ice Cream",
    category: "Desserts",
    price: 25000,
    description: "Creamy Belgian chocolate ice cream with chocolate chips",
    icon: <IceCream size={32} />
  },
  {
    id: 7,
    name: "Fish & Chips",
    category: "Main Course",
    price: 55000,
    description: "Beer-battered fish with crispy fries and tartar sauce",
    icon: <Sandwich size={32} />
  },
  {
    id: 8,
    name: "Vanilla Milkshake",
    category: "Beverages",
    price: 22000,
    description: "Thick and creamy vanilla milkshake with whipped cream",
    icon: <Coffee size={32} />
  },
  {
    id: 9,
    name: "French Fries",
    category: "Appetizers",
    price: 20000,
    description: "Golden crispy fries with ketchup",
    icon: <Sandwich size={32} />
  },
  {
    id: 10,
    name: "Pepperoni Pizza",
    category: "Main Course",
    price: 90000,
    description: "Cheesy pizza topped with spicy pepperoni slices",
    icon: <Pizza size={32} />
  },
  {
    id: 11,
    name: "Mango Smoothie",
    category: "Beverages",
    price: 24000,
    description: "Fresh mango blended with ice and milk",
    icon: <Coffee size={32} />
  },
  {
    id: 12,
    name: "Chicken Nuggets",
    category: "Appetizers",
    price: 30000,
    description: "Crispy fried chicken bites with dip",
    icon: <Sandwich size={32} />
  },
  {
    id: 13,
    name: "Beef Steak",
    category: "Main Course",
    price: 120000,
    description: "Grilled sirloin steak with mushroom sauce",
    icon: <Sandwich size={32} />
  },
  {
    id: 14,
    name: "Greek Salad",
    category: "Appetizers",
    price: 38000,
    description: "Fresh cucumbers, tomatoes, feta cheese, and olives",
    icon: <Salad size={32} />
  },
  {
    id: 15,
    name: "Strawberry Ice Cream",
    category: "Desserts",
    price: 25000,
    description: "Refreshing strawberry ice cream with chunks",
    icon: <IceCream size={32} />
  },
  {
    id: 16,
    name: "Latte",
    category: "Beverages",
    price: 30000,
    description: "Smooth espresso with steamed milk",
    icon: <Coffee size={32} />
  },
  {
    id: 17,
    name: "Tuna Sandwich",
    category: "Main Course",
    price: 40000,
    description: "Toasted sandwich with tuna and mayo",
    icon: <Sandwich size={32} />
  },
  {
    id: 18,
    name: "Onion Rings",
    category: "Appetizers",
    price: 25000,
    description: "Crispy onion rings with dipping sauce",
    icon: <Sandwich size={32} />
  },
  {
    id: 19,
    name: "Iced Americano",
    category: "Beverages",
    price: 20000,
    description: "Chilled espresso shot with water and ice",
    icon: <Coffee size={32} />
  },
  {
    id: 20,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 40000,
    description: "Moist chocolate cake with fudge layers",
    icon: <IceCream size={32} />
  },
  {
    id: 21,
    name: "BBQ Ribs",
    category: "Main Course",
    price: 135000,
    description: "Slow-cooked ribs with BBQ sauce",
    icon: <Sandwich size={32} />
  },
  {
    id: 22,
    name: "Pasta Carbonara",
    category: "Main Course",
    price: 75000,
    description: "Creamy pasta with bacon and parmesan",
    icon: <Sandwich size={32} />
  },
  {
    id: 23,
    name: "Garlic Bread",
    category: "Appetizers",
    price: 20000,
    description: "Toasted bread with garlic butter",
    icon: <Sandwich size={32} />
  },
  {
    id: 24,
    name: "Mojito Mocktail",
    category: "Beverages",
    price: 28000,
    description: "Mint, lime, and soda refreshing drink",
    icon: <Coffee size={32} />
  },
  {
    id: 25,
    name: "Brownie Sundae",
    category: "Desserts",
    price: 45000,
    description: "Warm brownie topped with ice cream",
    icon: <IceCream size={32} />
  },
  {
    id: 26,
    name: "Chicken Alfredo",
    category: "Main Course",
    price: 80000,
    description: "Pasta in creamy Alfredo sauce with chicken",
    icon: <Sandwich size={32} />
  },
  {
    id: 27,
    name: "Caprese Salad",
    category: "Appetizers",
    price: 33000,
    description: "Tomato, mozzarella, and basil drizzled with olive oil",
    icon: <Salad size={32} />
  },
  {
    id: 28,
    name: "Espresso Shot",
    category: "Beverages",
    price: 18000,
    description: "Strong Italian espresso shot",
    icon: <Coffee size={32} />
  },
  {
    id: 29,
    name: "Lemon Tart",
    category: "Desserts",
    price: 30000,
    description: "Tangy lemon tart with buttery crust",
    icon: <IceCream size={32} />
  },
  {
    id: 30,
    name: "Fried Calamari",
    category: "Appetizers",
    price: 42000,
    description: "Crispy fried calamari with garlic mayo dip",
    icon: <Sandwich size={32} />
  },
  {
    id: 31,
    name: "Chicken Curry",
    category: "Main Course",
    price: 70000,
    description: "Spicy chicken curry with steamed rice",
    icon: <Sandwich size={32} />
  },
  {
    id: 32,
    name: "Pancakes",
    category: "Desserts",
    price: 35000,
    description: "Fluffy pancakes with syrup and butter",
    icon: <IceCream size={32} />
  },
  {
    id: 33,
    name: "Fruit Salad",
    category: "Appetizers",
    price: 27000,
    description: "Fresh mixed fruits with honey drizzle",
    icon: <Salad size={32} />
  },
  {
    id: 34,
    name: "Hot Chocolate",
    category: "Beverages",
    price: 25000,
    description: "Warm cocoa drink topped with cream",
    icon: <Coffee size={32} />
  },
  {
    id: 35,
    name: "Club Sandwich",
    category: "Main Course",
    price: 60000,
    description: "Triple-decker sandwich with chicken and veggies",
    icon: <Sandwich size={32} />
  },
  {
    id: 36,
    name: "Cheesecake",
    category: "Desserts",
    price: 42000,
    description: "Creamy cheesecake with strawberry topping",
    icon: <IceCream size={32} />
  },
  {
    id: 37,
    name: "Spring Rolls",
    category: "Appetizers",
    price: 28000,
    description: "Crispy rolls filled with vegetables",
    icon: <Sandwich size={32} />
  },
  {
    id: 38,
    name: "Green Tea Latte",
    category: "Beverages",
    price: 27000,
    description: "Matcha green tea with milk",
    icon: <Coffee size={32} />
  },
  {
    id: 39,
    name: "Chicken Wings",
    category: "Appetizers",
    price: 35000,
    description: "Spicy chicken wings with dip",
    icon: <Sandwich size={32} />
  },
  {
    id: 40,
    name: "Tiramisu",
    category: "Desserts",
    price: 50000,
    description: "Classic Italian dessert with coffee and mascarpone",
    icon: <IceCream size={32} />
  },
  {
    id: 41,
    name: "Veggie Burger",
    category: "Main Course",
    price: 48000,
    description: "Grilled veggie patty with lettuce and tomato",
    icon: <Sandwich size={32} />
  },
  {
    id: 42,
    name: "BBQ Chicken Pizza",
    category: "Main Course",
    price: 92000,
    description: "Pizza topped with BBQ chicken and red onions",
    icon: <Pizza size={32} />
  },
  {
    id: 43,
    name: "Spinach Salad",
    category: "Main Course",
    price: 36000,
    description: "Fresh spinach with strawberries and walnuts",
    icon: <Salad size={32} />
  },
  {
    id: 44,
    name: "Mocha",
    category: "Beverages",
    price: 32000,
    description: "Espresso with chocolate and steamed milk",
    icon: <Coffee size={32} />
  },
  {
    id: 45,
    name: "Vanilla Ice Cream",
    category: "Desserts",
    price: 25000,
    description: "Classic vanilla ice cream with sprinkles",
    icon: <IceCream size={32} />
  },
  {
    id: 46,
    name: "Avocado Toast",
    category: "Appetizers",
    price: 30000,
    description: "Toasted bread topped with mashed avocado and spices",
    icon: <Sandwich size={32} />
  },
  {
    id: 47,
    name: "Cucumber Mint Cooler",
    category: "Beverages",
    price: 26000,
    description: "Refreshing cucumber and mint drink",
    icon: <Coffee size={32} />
  },
  {
    id: 48,
    name: "Shrimp Scampi",
    category: "Main Course",
    price: 95000,
    description: "Shrimp cooked in garlic butter sauce with pasta",
    icon: <Sandwich size={32} />
  },
  {
    id: 49,
    name: "Chocolate Mousse",
    category: "Desserts",
    price: 40000,
    description: "Light and airy chocolate mousse dessert",
    icon: <IceCream size={32} />
  },
  {
    id: 50,
    name: "Bruschetta",
    category: "Appetizers",
    price: 22000,
    description: "Grilled bread topped with tomatoes and basil",
    icon: <Sandwich size={32} />
  }
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
