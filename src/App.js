import React, { useState } from "react";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import CartSidebar from "./components/CartSidebar";
import { menuItems } from "./data/menuData";
import { styles } from "./styles/styles";
import ModalsForm from "./components/Modals/ModalsForm";
import { Recommendation } from "./components/Recommendation/Recommendation";

const FoodOrderingApp = () => {
  // ===== USESTATE IMPLEMENTATIONS - STATE MANAGEMENT UTAMA =====

  // STATE 1: CART MANAGEMENT (Object-based structure)
  // Menggunakan object dengan ID sebagai key untuk performa O(1) lookup
  // Format: { itemId: { ...itemData, quantity: number } }
  // Keuntungan: Update quantity sangat cepat, tidak perlu loop array
  const [cart, setCart] = useState({});

  // STATE 2: MOBILE CART VISIBILITY
  // Boolean state untuk mengontrol tampilan cart di mobile view
  // Digunakan untuk responsive design - sidebar tersembunyi di mobile
  const [showCart, setShowCart] = useState(false);

  // STATE 3: HOVER EFFECT MANAGEMENT
  // Menyimpan ID item yang sedang di-hover untuk efek visual
  // null = tidak ada yang di-hover, number = ID item yang di-hover
  const [hoveredCard, setHoveredCard] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
  });

  // ===== CART MANIPULATION FUNCTIONS =====

  /**
   * FUNGSI 1: ADD TO CART
   * Line-by-line explanation:
   * 1. Terima parameter item (object menu item)
   * 2. setCart dengan function updater untuk immutability
   * 3. Spread prevCart untuk copy existing state
   * 4. Update/create entry dengan ID sebagai key
   * 5. Jika item sudah ada, tambah quantity; jika tidak, set quantity = 1
   */
  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart, // Spread operator untuk immutable update
      [item.id]: {
        // Computed property name dengan ID sebagai key
        ...item, // Copy semua properti item (name, price, etc.)
        quantity: (prevCart[item.id]?.quantity || 0) + 1, // Optional chaining + fallback
      },
    }));
  };

  /**
   * FUNGSI 2: REMOVE FROM CART (DECREASE QUANTITY)
   * Line-by-line explanation:
   * 1. Terima itemId untuk identifikasi item
   * 2. Buat copy baru dari cart state
   * 3. Cek apakah item ada di cart
   * 4. Jika quantity > 1, kurangi 1; jika quantity = 1, hapus item
   * 5. Return updated cart state
   */
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }; // Shallow copy untuk immutability
      if (newCart[itemId]) {
        // Cek keberadaan item
        if (newCart[itemId].quantity > 1) {
          // Kurangi quantity jika masih > 1
          newCart[itemId] = {
            ...newCart[itemId], // Copy existing item properties
            quantity: newCart[itemId].quantity - 1, // Decrease quantity
          };
        } else {
          // Hapus item jika quantity = 1
          delete newCart[itemId]; // Remove item completely
        }
      }
      return newCart; // Return updated state
    });
  };

  /**
   * FUNGSI 3: DELETE FROM CART (REMOVE COMPLETELY)
   * Menghapus item sepenuhnya tanpa peduli quantity
   */
  const deleteFromCart = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }; // Immutable copy
      delete newCart[itemId]; // Remove item completely
      return newCart; // Return updated state
    });
  };

  // ===== COMPUTED VALUES FUNCTIONS =====

  /**
   * FUNGSI 4: CALCULATE TOTAL PRICE
   * Menghitung total harga semua item dalam cart
   * Menggunakan Object.values() dan reduce() untuk iterasi
   */
  const calculateTotal = () => {
    return Object.values(cart)
      .reduce((total, item) => {
        return total + item.price * item.quantity; // Accumulate price × quantity
      }, 0)
      .toLocaleString("id-ID"); // Format to Indonesian number format
  };

  /**
   * FUNGSI 5: GET TOTAL ITEMS COUNT
   * Menghitung total jumlah item (quantity) dalam cart
   */
  const getTotalItems = () => {
    return Object.values(cart).reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  /**
   * FUNGSI 6: FORMAT CURRENCY
   * Utility function untuk format rupiah
   */
  const formatRupiah = (amount) => {
    return "Rp" + amount.toLocaleString("id-ID");
  };

  /**
   * FUNGSI 7: GROUP ITEMS BY CATEGORY
   * Mengelompokkan menu items berdasarkan kategori
   * Menggunakan reduce untuk create object dengan kategori sebagai key
   */
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []; // Initialize array jika kategori belum ada
    }
    acc[item.category].push(item); // Push item ke kategori yang sesuai
    return acc;
  }, {});

  // ===== MAIN RENDER WITH FLEXBOX LAYOUT =====
  return (
    <div style={styles.container}>
      {/* HEADER COMPONENT - Tidak ada useState/flexbox di sini (passed via props) */}
      <Header
        calculateTotal={calculateTotal}
        getTotalItems={getTotalItems}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <ModalsForm
        userData={formData} // Send current data down
        setUserData={setFormData} // Send update function down
      />
      {/* CART SIDEBAR - CONDITIONAL RENDERING + FLEXBOX */}
      <CartSidebar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteFromCart={deleteFromCart}
        calculateTotal={calculateTotal}
        formatRupiah={formatRupiah}
        showCart={showCart}
      />
      {/* MAIN CONTENT CONTAINER - FLEXBOX IMPLEMENTATION */}
      {/* 
        FLEXBOX USAGE 1: MAIN LAYOUT CONTAINER
        - display: flex → Membuat horizontal layout
        - gap: '32px' → Space antara menu dan cart
        - flexWrap: 'wrap' → Responsive wrapping untuk mobile
      */}
      <div style={styles.mainContent}>
        {/* MENU SECTION - FLEXBOX HEAVY COMPONENT */}
        <MenuSection
          groupedItems={groupedItems}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          formatRupiah={formatRupiah}
        />
      </div>
    </div>
  );
};

export default FoodOrderingApp;
