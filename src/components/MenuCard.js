import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { styles } from '../styles/styles';

/**
 * MENU CARD COMPONENT - KOMPONEN DENGAN FLEXBOX PALING KOMPLEKS
 * Fungsi: Menampilkan individual card untuk setiap menu item
 * Props yang diterima dari CategorySection:
 * - item: object menu item (id, name, price, description, icon, category)
 * - cart: object berisi items dalam keranjang
 * - addToCart: function untuk tambah item ke cart
 * - removeFromCart: function untuk kurangi item dari cart
 * - hoveredCard: state untuk track card yang sedang di-hover
 * - setHoveredCard: function untuk update hover state
 * - formatRupiah: function untuk format currency
 */
const MenuCard = ({
  item,
  cart,
  addToCart,
  removeFromCart,
  hoveredCard,
  setHoveredCard,
  formatRupiah
}) => {

  // ===== COMPUTED VALUES =====
  
  /**
   * CHECK IF ITEM IS IN CART
   * Mengecek apakah item ini sudah ada di cart
   * Digunakan untuk conditional rendering: show "Add" button atau quantity controls
   */
  const itemInCart = cart[item.id]; // Object atau undefined
  const currentQuantity = itemInCart ? itemInCart.quantity : 0; // Fallback ke 0

  /**
   * CHECK IF CARD IS HOVERED
   * Boolean check apakah card ini sedang di-hover
   * Digunakan untuk conditional styling (shadow effect)
   */
  const isHovered = hoveredCard === item.id;

  // ===== EVENT HANDLERS =====

  /**
   * MOUSE ENTER HANDLER
   * Set hover state ketika mouse masuk ke card area
   * Update useState hoveredCard dengan ID item ini
   */
  const handleMouseEnter = () => {
    setHoveredCard(item.id); // useState setter untuk hover effect
  };

  /**
   * MOUSE LEAVE HANDLER  
   * Reset hover state ketika mouse keluar dari card area
   * Set hoveredCard kembali ke null
   */
  const handleMouseLeave = () => {
    setHoveredCard(null); // Reset useState hover state
  };

  /**
   * ADD BUTTON CLICK HANDLER
   * Handler ketika tombol "Add" diklik
   * Memanggil addToCart function yang di-pass dari App.js
   */
  const handleAddClick = () => {
    addToCart(item); // useState setter di App.js via props
  };

  /**
   * QUANTITY INCREASE HANDLER
   * Handler ketika tombol plus (+) diklik pada quantity controls
   * Same function dengan Add button, tapi konteks berbeda
   */
  const handleQuantityIncrease = (e) => {
    e.stopPropagation(); // Prevent event bubbling ke parent elements
    addToCart(item); // useState setter via props
  };

  /**
   * QUANTITY DECREASE HANDLER
   * Handler ketika tombol minus (-) diklik pada quantity controls
   * Memanggil removeFromCart yang bisa kurangi quantity atau hapus item
   */
  const handleQuantityDecrease = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    removeFromCart(item.id); // useState setter via props
  };

  /**
   * BUTTON HOVER HANDLERS
   * Inline style changes untuk hover effects pada buttons
   */
  const handleButtonHover = (e, isHovering, hoverColor, normalColor) => {
    e.target.style.backgroundColor = isHovering ? hoverColor : normalColor;
  };

  return (
    /* 
      FLEXBOX IMPLEMENTATION 8: MENU CARD CONTAINER
      menuCard style properties (COMPLEX FLEXBOX):
      - display: 'flex' → Main flex container
      - flexDirection: 'column' → Vertical layout (header → content → footer)
      - flex: '1 1 calc(50% - 8px)' → Flexible sizing (50% width minus gap)
      - minWidth: '250px' → Minimum width untuk responsive behavior
      - padding: '16px' → Internal spacing
      - borderRadius: '8px' → Rounded corners
      - boxShadow → Dynamic shadow berdasarkan hover state
      
      RESPONSIVE BEHAVIOR:
      - Pada desktop: 2 columns (50% width each)
      - Pada tablet: Bisa jadi 1-2 columns tergantung screen width
      - Pada mobile: 1 column (minWidth 250px memaksa single column)
    */
    <div
      style={{
        ...styles.menuCard, // Base styling dari styles.js
        ...(isHovered ? styles.menuCardHover : {}) // Conditional hover styling
      }}
      onMouseEnter={handleMouseEnter} // Set hover state (useState)
      onMouseLeave={handleMouseLeave} // Reset hover state (useState)
    >
      
      {/* CARD HEADER SECTION */}
      {/* 
        FLEXBOX IMPLEMENTATION 9: CARD HEADER LAYOUT
        cardHeader style properties:
        - display: 'flex' → Horizontal layout
        - gap: '12px' → Space antara icon dan text content
        - marginBottom: '12px' → Space ke content berikutnya
      */}
      <div style={styles.cardHeader}>
        
        {/* ICON WRAPPER */}
        {/* 
          FLEXBOX BEHAVIOR: Icon sebagai flex item
          iconWrapper properties:
          - flexShrink: 0 → Icon tidak menyusut ketika space terbatas
          - color: '#f97316' → Orange color untuk consistency
        */}
        <div style={styles.iconWrapper}>
          {item.icon} {/* React component icon dari menuData */}
        </div>
        
        {/* TEXT CONTENT */}
        {/* 
          FLEXBOX BEHAVIOR: Text container sebagai flex item
          Tidak ada explicit flex properties, mengambil remaining space
        */}
        <div>
          <h4 style={styles.itemName}>{item.name}</h4>
          <p style={styles.itemDescription}>{item.description}</p>
        </div>
      </div>
      
      {/* CARD FOOTER SECTION */}
      {/* 
        FLEXBOX IMPLEMENTATION 10: CARD FOOTER LAYOUT
        cardFooter style properties:
        - display: 'flex' → Horizontal layout
        - justifyContent: 'space-between' → Price di kiri, controls di kanan
        - alignItems: 'center' → Vertical center alignment
        - marginTop: 'auto' → Push ke bottom (karena parent punya flex-direction: column)
        - paddingTop: '16px' → Space dari content atas
      */}
      <div style={styles.cardFooter}>
        
        {/* LEFT: PRICE DISPLAY */}
        {/* 
          DYNAMIC CONTENT: Harga dari item.price yang diformat
          formatRupiah() function untuk format currency Indonesian style
        */}
        <span style={styles.price}>
          {formatRupiah(item.price)}
        </span>
        
        {/* RIGHT: ACTION CONTROLS (CONDITIONAL RENDERING) */}
        <div>
          {/* 
            CONDITIONAL RENDERING berdasarkan cart state:
            - Jika item SUDAH di cart → Show quantity controls
            - Jika item BELUM di cart → Show "Add" button
            
            Logic: cart[item.id] akan return object jika ada, undefined jika tidak ada
          */}
          {itemInCart ? (
            // QUANTITY CONTROLS (ITEM SUDAH DI CART)
            /* 
              FLEXBOX IMPLEMENTATION 11: QUANTITY CONTROLS LAYOUT
              quantityControls style properties:
              - display: 'flex' → Horizontal layout
              - alignItems: 'center' → Vertical center alignment
              - gap: '8px' → Space antara minus, quantity, plus
              - backgroundColor: '#fed7aa' → Light orange background
              - borderRadius: '8px' → Rounded corners
              - padding: '4px 8px' → Internal padding
            */
            <div style={styles.quantityControls}>
              
              {/* MINUS BUTTON */}
              {/* 
                FLEXBOX IMPLEMENTATION 12: CIRCULAR BUTTON
                quantityButton properties:
                - display: 'flex' → Flex container untuk centering icon
                - alignItems: 'center' → Vertical center
                - justifyContent: 'center' → Horizontal center
                - borderRadius: '50%' → Perfect circle
                - width: '24px', height: '24px' → Square dimensions
              */}
              <button
                style={styles.quantityButton}
                onClick={handleQuantityDecrease} // useState update via removeFromCart
                onMouseEnter={(e) => handleButtonHover(e, true, '#ea580c', '#f97316')}
                onMouseLeave={(e) => handleButtonHover(e, false, '#ea580c', '#f97316')}
              >
                <Minus size={14} />
              </button>
              
              {/* QUANTITY DISPLAY */}
              {/* 
                FLEXBOX BEHAVIOR: Text element di tengah quantity controls
                quantityText properties:
                - fontWeight: '600' → Semi-bold text
                - minWidth: '32px' → Minimum width untuk stability
                - textAlign: 'center' → Center aligned text
              */}
              <span style={styles.quantityText}>
                {currentQuantity} {/* Dynamic value dari cart state */}
              </span>
              
              {/* PLUS BUTTON */}
              <button
                style={styles.quantityButton}
                onClick={handleQuantityIncrease} // useState update via addToCart
                onMouseEnter={(e) => handleButtonHover(e, true, '#ea580c', '#f97316')}
                onMouseLeave={(e) => handleButtonHover(e, false, '#ea580c', '#f97316')}
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            // ADD BUTTON (ITEM BELUM DI CART)
            /* 
              FLEXBOX IMPLEMENTATION 13: ADD BUTTON LAYOUT
              addButton style properties:
              - display: 'flex' → Horizontal layout
              - alignItems: 'center' → Vertical center alignment
              - gap: '4px' → Space antara icon dan text
              - padding: '8px 16px' → Internal padding
              - borderRadius: '8px' → Rounded corners
            */
            <button
              style={styles.addButton}
              onClick={handleAddClick} // useState update via addToCart
              onMouseEnter={(e) => handleButtonHover(e, true, '#ea580c', '#f97316')}
              onMouseLeave={(e) => handleButtonHover(e, false, '#ea580c', '#f97316')}
            >
              <Plus size={16} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;