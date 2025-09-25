import React from 'react';
import { Plus, Minus, X } from 'lucide-react';
import { styles } from '../styles/styles';

/**
 * CART ITEM COMPONENT
 * Fungsi: Menampilkan individual item dalam cart dengan controls
 * Props yang diterima dari CartSidebar:
 * - item: object cart item dengan quantity (dari useState cart di App.js)
 * - addToCart: function untuk increase quantity
 * - removeFromCart: function untuk decrease quantity
 * - deleteFromCart: function untuk remove item completely
 * - formatRupiah: function untuk format currency
 */
const CartItem = ({
  item,
  addToCart,
  removeFromCart,
  deleteFromCart,
  formatRupiah
}) => {

  // ===== COMPUTED VALUES =====
  
  /**
   * CALCULATE SUBTOTAL FOR THIS ITEM
   * Subtotal = price × quantity
   * Digunakan untuk display harga total per item
   */
  const subtotal = item.price * item.quantity;

  // ===== EVENT HANDLERS =====

  /**
   * INCREASE QUANTITY HANDLER
   * Ketika tombol plus (+) diklik
   * Memanggil addToCart function yang akan update useState di App.js
   */
  const handleIncrease = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    addToCart(item); // useState update: tambah quantity di cart object
  };

  /**
   * DECREASE QUANTITY HANDLER
   * Ketika tombol minus (-) diklik
   * Memanggil removeFromCart yang bisa kurangi quantity atau hapus item
   */
  const handleDecrease = (e) => {
    e.stopPropagation(); // Prevent event bubbling  
    removeFromCart(item.id); // useState update: kurangi quantity atau hapus item
  };

  /**
   * DELETE ITEM HANDLER
   * Ketika tombol X diklik - hapus item sepenuhnya
   * Memanggil deleteFromCart untuk remove item dari cart state
   */
  const handleDelete = () => {
    deleteFromCart(item.id); // useState update: delete item[id] dari cart object
  };

  /**
   * BUTTON HOVER HANDLERS
   * Inline style changes untuk hover effects
   */
  const handleButtonHover = (e, isHovering, hoverColor, normalColor) => {
    e.target.style.backgroundColor = isHovering ? hoverColor : normalColor;
  };

  return (
    /* 
      FLEXBOX IMPLEMENTATION 18: CART ITEM CONTAINER
      cartItem style properties:
      - display: 'flex' → Main horizontal layout
      - justifyContent: 'space-between' → Content di kiri, controls di kanan
      - alignItems: 'flex-start' → Align ke atas (important untuk multi-line content)
      - backgroundColor: '#f9fafb' → Light gray background
      - padding: '12px' → Internal spacing
      - borderRadius: '8px' → Rounded corners
      - marginBottom: '12px' → Space ke item berikutnya
    */
    <div style={styles.cartItem}>
      
      {/* LEFT SECTION: ITEM DETAILS */}
      {/* 
        FLEXBOX BEHAVIOR: Flex item yang mengambil available space
        cartItemDetails properties:
        - flex: 1 → Take remaining space setelah controls di kanan
        
        Content: Item name, price info, dan subtotal
      */}
      <div style={styles.cartItemDetails}>
        
        {/* ITEM NAME */}
        <h4 style={styles.cartItemName}>{item.name}</h4>
        
        {/* PRICE INFO SECTION */}
        {/* 
          FLEXBOX IMPLEMENTATION 19: PRICE INFO LAYOUT
          cartItemPrice style properties:
          - display: 'flex' → Horizontal layout
          - alignItems: 'center' → Vertical center alignment
          - gap: '8px' → Space antara price info dan subtotal
          - fontSize: '14px' → Smaller font untuk secondary info
        */}
        <div style={styles.cartItemPrice}>
          {/* LEFT: Price × Quantity */}
          <span style={styles.cartItemPriceText}>
            {/* 
              DYNAMIC CONTENT dari cart state:
              - item.price dari menu data
              - item.quantity dari cart state (useState)
              - formatRupiah untuk currency formatting
            */}
            {formatRupiah(item.price)} × {item.quantity}
          </span>
          
          {/* RIGHT: Subtotal Amount */}
          <span style={styles.cartItemSubtotal}>
            {/* 
              COMPUTED VALUE: subtotal = price × quantity
              Recalculated setiap kali component re-render
            */}
            {formatRupiah(subtotal)}
          </span>
        </div>
      </div>
      
      {/* RIGHT SECTION: ITEM CONTROLS */}
      {/* 
        FLEXBOX IMPLEMENTATION 20: CART ITEM CONTROLS LAYOUT
        cartItemControls style properties:
        - display: 'flex' → Horizontal layout untuk controls
        - alignItems: 'center' → Vertical center alignment
        - gap: '4px' → Small space antara buttons
      */}
      <div style={styles.cartItemControls}>
        
        {/* MINUS BUTTON */}
        {/* 
          FLEXBOX IMPLEMENTATION 21: CONTROL BUTTON LAYOUT
          cartControlButton style properties:
          - display: 'flex' → Flex container untuk centering icon
          - alignItems: 'center' → Vertical center
          - justifyContent: 'center' → Horizontal center
          - borderRadius: '50%' → Perfect circle
          - width: '24px', height: '24px' → Square dimensions
        */}
        <button
          style={styles.cartControlButton}
          onClick={handleDecrease} // useState update via removeFromCart
          onMouseEnter={(e) => handleButtonHover(e, true, '#9ca3af', '#d1d5db')}
          onMouseLeave={(e) => handleButtonHover(e, false, '#9ca3af', '#d1d5db')}
        >
          <Minus size={12} />
        </button>
        
        {/* QUANTITY DISPLAY */}
        {/* 
          FLEXBOX BEHAVIOR: Text element di tengah controls
          quantityText properties:
          - fontWeight: '600' → Semi-bold
          - minWidth: '32px' → Fixed width untuk stability
          - textAlign: 'center' → Center aligned
        */}
        <span style={styles.quantityText}>
          {/* 
            DYNAMIC CONTENT dari cart state:
            item.quantity di-update setiap kali useState cart berubah
          */}
          {item.quantity}
        </span>
        
        {/* PLUS BUTTON */}
        <button
          style={styles.cartControlButton}
          onClick={handleIncrease} // useState update via addToCart
          onMouseEnter={(e) => handleButtonHover(e, true, '#9ca3af', '#d1d5db')}
          onMouseLeave={(e) => handleButtonHover(e, false, '#9ca3af', '#d1d5db')}
        >
          <Plus size={12} />
        </button>
        
        {/* DELETE BUTTON */}
        {/* 
          STYLING: Different style untuk delete action
          deleteButton properties:
          - marginLeft: '8px' → Extra space dari quantity controls
          - color: '#ef4444' → Red color untuk destructive action
          - background: 'none' → Transparent background
          - display: 'flex' → Flex container untuk centering icon
        */}
        <button
          style={styles.deleteButton}
          onClick={handleDelete} // useState update via deleteFromCart
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;