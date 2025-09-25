import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { styles } from '../styles/styles';

/**
 * HEADER COMPONENT
 * Fungsi: Menampilkan logo, tagline, dan cart button
 * Props yang diterima dari App.js:
 * - calculateTotal: function untuk hitung total harga
 * - getTotalItems: function untuk hitung total item
 * - showCart: boolean state untuk toggle cart visibility
 * - setShowCart: function untuk update showCart state
 */
const Header = ({ calculateTotal, getTotalItems, showCart, setShowCart }) => {
  
  // ===== EVENT HANDLERS =====
  
  /**
   * CART BUTTON CLICK HANDLER
   * Toggle visibility cart untuk mobile view
   * Menggunakan functional update untuk toggle boolean
   */
  const handleCartToggle = () => {
    setShowCart(!showCart); // Toggle boolean state
  };

  /**
   * HOVER HANDLERS UNTUK CART BUTTON
   * Memberikan efek visual hover pada tombol cart
   * Menggunakan inline event handlers untuk perubahan style langsung
   */
  const handleCartHover = (e, isHovering) => {
    e.target.style.backgroundColor = isHovering ? '#ea580c' : '#f97316';
  };

  return (
    /* 
      FLEXBOX IMPLEMENTATION 1: HEADER CONTAINER
      - position: 'sticky' → Header tetap terlihat saat scroll
      - top: 0 → Menempel di atas viewport
      - zIndex: 40 → Layer di atas konten lain
    */
    <header style={styles.header}>
      {/* 
        FLEXBOX IMPLEMENTATION 2: HEADER CONTENT LAYOUT
        - display: 'flex' → Horizontal layout
        - justifyContent: 'space-between' → Logo di kiri, cart di kanan
        - alignItems: 'center' → Vertical center alignment
        - maxWidth: '1200px' → Container width limit
        - margin: '0 auto' → Center alignment horizontal
      */}
      <div style={styles.headerContent}>
        
        {/* LEFT SECTION: LOGO & TAGLINE */}
        {/* 
          FLEXBOX BEHAVIOR: Flex item yang mengambil space di kiri
          Tidak ada flexbox properties khusus, mengikuti default flex behavior
        */}
        <div>
          <h1 style={styles.logo}>🍔 QuickBite Express</h1>
          <p style={styles.tagline}>Order your favorite meals online!</p>
        </div>
        
        {/* RIGHT SECTION: CART BUTTON */}
        {/* 
          FLEXBOX BEHAVIOR: Flex item yang mengambil space di kanan
          Button menggunakan flexbox internal untuk layout icon + text + badge
        */}
        <button
          style={styles.cartButton} // Base styling dari styles.js
          onClick={handleCartToggle} // Toggle cart visibility (useState update)
          onMouseEnter={(e) => handleCartHover(e, true)} // Hover effect start
          onMouseLeave={(e) => handleCartHover(e, false)} // Hover effect end
        >
          {/* 
            FLEXBOX IMPLEMENTATION 3: BUTTON INTERNAL LAYOUT
            cartButton style properties:
            - display: 'flex' → Horizontal layout untuk icon + text
            - alignItems: 'center' → Vertical center alignment
            - gap: '8px' → Space antara icon, text, dan badge
          */}
          
          {/* CART ICON */}
          <ShoppingCart size={20} />
          
          {/* TOTAL PRICE TEXT */}
          {/* 
            DYNAMIC CONTENT: Text berubah berdasarkan cart state
            calculateTotal() dipanggil setiap re-render untuk update harga
          */}
          <span>Rp{calculateTotal()}</span>
          
          {/* CART BADGE (CONDITIONAL RENDERING) */}
          {/* 
            CONDITIONAL RENDERING: Badge hanya muncul jika ada item di cart
            getTotalItems() > 0 → Boolean check untuk render badge
          */}
          {getTotalItems() > 0 && (
            <span style={styles.cartBadge}>
              {/* 
                FLEXBOX IMPLEMENTATION 4: BADGE LAYOUT
                cartBadge style properties:
                - display: 'flex' → Flex container untuk centering
                - alignItems: 'center' → Vertical center
                - justifyContent: 'center' → Horizontal center
                - position: 'absolute' → Positioning relative to button
              */}
              {getTotalItems()} {/* Dynamic item count dari state */}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;