import React from 'react';
import CategorySection from './CategorySection';
import { styles } from '../styles/styles';

/**
 * MENU SECTION COMPONENT
 * Fungsi: Container utama untuk semua kategori menu
 * Props yang diterima dari App.js:
 * - groupedItems: object berisi menu items yang dikelompokkan per kategori
 * - cart: object berisi items dalam keranjang (untuk cek quantity)
 * - addToCart: function untuk tambah item ke cart
 * - removeFromCart: function untuk kurangi/hapus item dari cart
 * - hoveredCard: state untuk track card yang sedang di-hover
 * - setHoveredCard: function untuk update hover state
 * - formatRupiah: function untuk format currency
 */
const MenuSection = ({
  groupedItems,
  cart,
  addToCart,
  removeFromCart,
  hoveredCard,
  setHoveredCard,
  formatRupiah
}) => {

  return (
    /* 
      FLEXBOX CONTAINER: MENU SECTION WRAPPER
      menuSection style properties:
      - flex: '2' → Mengambil 2 bagian dari 3 total flex space (2:1 ratio dengan cart)
      - minWidth: '300px' → Minimum width untuk responsive behavior
      
      FLEXBOX BEHAVIOR:
      - Ini adalah flex item dari mainContent container
      - Akan menyusut/membesar berdasarkan available space
      - Pada mobile, akan mengambil full width karena flex-direction berubah ke column
    */
    <div style={styles.menuSection}>
      
      {/* MENU TITLE */}
      {/* 
        FLEXBOX IMPLEMENTATION 5: MENU TITLE LAYOUT
        menuTitle style properties:
        - display: 'flex' → Horizontal layout
        - alignItems: 'center' → Vertical center alignment
        - gap: '8px' → Space antara emoji dan text
      */}
      <h2 style={styles.menuTitle}>
        <span>📋</span>
        <span>Our Menu</span>
      </h2>
      
      {/* CATEGORIES LOOP */}
      {/* 
        MAPPING OVER GROUPED ITEMS:
        - Object.entries() mengubah object menjadi array [key, value] pairs
        - Setiap kategori di-render sebagai CategorySection component
        - Key menggunakan category name untuk React reconciliation
      */}
      {Object.entries(groupedItems).map(([category, items]) => (
        <CategorySection
          key={category} // React key untuk efficient re-rendering
          category={category} // Nama kategori (string)
          items={items} // Array items dalam kategori ini
          cart={cart} // Cart state untuk cek item quantities
          addToCart={addToCart} // Function untuk add item
          removeFromCart={removeFromCart} // Function untuk remove item
          hoveredCard={hoveredCard} // Hover state untuk visual effect
          setHoveredCard={setHoveredCard} // Function untuk update hover
          formatRupiah={formatRupiah} // Currency formatter function
        />
      ))}
    </div>
  );
};

export default MenuSection;