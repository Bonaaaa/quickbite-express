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
    id: 1, // Primary key untuk cart state management
    name: "Classic Burger",
    category: "Main Course", // Kategori untuk grouping di UI
    price: 45000, // Number format untuk calculations
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    icon: <Sandwich size={32} /> // React component untuk consistent icon sizing
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 85000, // Highest price item
    description: "Traditional Italian pizza with fresh mozzarella and basil",
    icon: <Pizza size={32} />
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Appetizers", // Different category untuk variety
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
    category: "Beverages", // Beverages category
    price: 28000,
    description: "Rich espresso topped with steamed milk foam",
    icon: <Coffee size={32} />
  },
  {
    id: 6,
    name: "Chocolate Ice Cream",
    category: "Desserts", // Desserts category untuk variety
    price: 25000, // Lowest price item
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
    id: 8, // 8 total items (requirement: >5)
    name: "Vanilla Milkshake",
    category: "Beverages",
    price: 22000,
    description: "Thick and creamy vanilla milkshake with whipped cream",
    icon: <Coffee size={32} />
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