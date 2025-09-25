import React from 'react';
import MenuCard from './MenuCard';
import { styles } from '../styles/styles';

/**
 * CATEGORY SECTION COMPONENT
 * Fungsi: Menampilkan satu kategori menu (misal: Main Course, Beverages, dll)
 * Props yang diterima dari MenuSection:
 * - category: string nama kategori
 * - items: array berisi menu items dalam kategori ini
 * - cart: object berisi items dalam keranjang
 * - addToCart: function untuk tambah item
 * - removeFromCart: function untuk kurangi item
 * - hoveredCard: state untuk hover effect
 * - setHoveredCard: function untuk update hover state
 * - formatRupiah: function untuk format rupiah
 */
const CategorySection = ({
  category,
  items,
  cart,
  addToCart,
  removeFromCart,
  hoveredCard,
  setHoveredCard,
  formatRupiah
}) => {

  return (
    <div>
      {/* CATEGORY HEADER */}
      {/* 
        FLEXBOX IMPLEMENTATION 6: CATEGORY TITLE LAYOUT
        categoryTitle style properties:
        - display: 'flex' → Horizontal layout
        - justifyContent: 'space-between' → Category name di kiri, count di kanan
        - alignItems: 'center' → Vertical center alignment
        - borderBottom: '2px solid #fdba74' → Visual separator
        - paddingBottom: '8px' → Space above border
      */}
      <h3 style={styles.categoryTitle}>
        {/* LEFT: Category Name */}
        <span>{category}</span>
        
        {/* RIGHT: Items Count */}
        {/* 
          DYNAMIC CONTENT: Jumlah items dalam kategori ini
          items.length → Calculate items count in this category
        */}
        <span style={styles.categoryCount}>
          ({items.length} items)
        </span>
      </h3>
      
      {/* MENU ITEMS GRID */}
      {/* 
        FLEXBOX IMPLEMENTATION 7: MENU GRID LAYOUT
        menuGrid style properties:
        - display: 'flex' → Flex container untuk cards
        - flexWrap: 'wrap' → Cards bisa wrap ke baris baru
        - gap: '16px' → Space antara cards (horizontal dan vertical)
        - marginBottom: '32px' → Space setelah setiap kategori
        
        RESPONSIVE BEHAVIOR:
        - Cards akan otomatis wrap jika tidak cukup space horizontal
        - Setiap card punya flex: '1 1 calc(50% - 8px)' → 2 columns on desktop
        - Pada mobile width kecil, bisa jadi 1 column karena minWidth
      */}
      <div style={styles.menuGrid}>
        
        {/* MENU CARDS LOOP */}
        {/* 
          MAPPING OVER ITEMS:
          - items.map() untuk render setiap menu item sebagai MenuCard
          - Key menggunakan item.id untuk React optimization
          - Semua props di-pass down ke MenuCard component
        */}
        {items.map(item => (
          <MenuCard
            key={item.id} // Unique key untuk React reconciliation
            item={item} // Object menu item (id, name, price, etc.)
            cart={cart} // Cart state untuk cek apakah item sudah di cart
            addToCart={addToCart} // Function add to cart (useState setter)
            removeFromCart={removeFromCart} // Function remove from cart
            hoveredCard={hoveredCard} // Current hovered card ID (useState value)
            setHoveredCard={setHoveredCard} // Set hover state (useState setter)
            formatRupiah={formatRupiah} // Currency formatter utility
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;