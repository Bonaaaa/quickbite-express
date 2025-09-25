import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';
import { styles } from '../styles/styles';

/**
 * CART SIDEBAR COMPONENT
 * Fungsi: Menampilkan sidebar berisi items yang ada di cart
 * Props yang diterima dari App.js:
 * - cart: object berisi items dalam keranjang (useState from App.js)
 * - addToCart: function untuk tambah item
 * - removeFromCart: function untuk kurangi item  
 * - deleteFromCart: function untuk hapus item sepenuhnya
 * - calculateTotal: function untuk hitung total harga
 * - formatRupiah: function untuk format currency
 * - showCart: boolean untuk toggle visibility di mobile
 */
const CartSidebar = ({
  cart,
  addToCart,
  removeFromCart,
  deleteFromCart,
  calculateTotal,
  formatRupiah,
  showCart
}) => {

  // ===== COMPUTED VALUES =====
  
  /**
   * CONVERT CART OBJECT TO ARRAY
   * cart adalah object dengan struktur { itemId: itemData }
   * Object.values() mengkonversi ke array untuk mapping
   * Array dibutuhkan untuk .map() rendering
   */
  const cartItems = Object.values(cart); // Convert object to array
  
  /**
   * CHECK IF CART IS EMPTY
   * Boolean check untuk conditional rendering
   * Empty cart → show empty state message
   * Has items → show cart items list
   */
  const isCartEmpty = cartItems.length === 0;

  /**
   * RESPONSIVE VISIBILITY LOGIC
   * Pada mobile: sidebar hidden by default, toggle dengan showCart state
   * Pada desktop: always visible
   * window.innerWidth <= 768 → mobile breakpoint
   */
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const shouldHide = isMobile && !showCart;

  return (
    /* 
      FLEXBOX CONTAINER: CART SIDEBAR WRAPPER
      cartSidebar style properties:
      - flex: '1' → Mengambil 1 bagian dari 3 total flex space (1:2 ratio dengan menu)
      - minWidth: '300px' → Minimum width untuk content readability
      - position: 'sticky' → Sticky positioning saat scroll
      - top: '100px' → Offset dari header yang sticky
      - height: 'fit-content' → Height menyesuaikan content
      
      RESPONSIVE BEHAVIOR:
      - Desktop: Sticky sidebar di sebelah kanan menu
      - Mobile: Hidden by default, toggle dengan button
      - Conditional display berdasarkan showCart state
    */
    <div style={{
      ...styles.cartSidebar,
      ...(shouldHide ? { display: 'none' } : {}) // Conditional visibility
    }}>
      
      {/* CART CONTAINER */}
      {/* 
        STYLING: White background container dengan shadow
        - backgroundColor: 'white' → White background
        - borderRadius: '8px' → Rounded corners
        - boxShadow → Drop shadow untuk elevation
        - padding: '24px' → Internal spacing
      */}
      <div style={styles.cartContainer}>
        
        {/* CART TITLE */}
        {/* 
          FLEXBOX IMPLEMENTATION 14: CART TITLE LAYOUT
          cartTitle style properties:
          - display: 'flex' → Horizontal layout
          - alignItems: 'center' → Vertical center alignment
          - gap: '8px' → Space antara icon dan text
          - fontSize: '20px' → Large title font
          - fontWeight: 'bold' → Bold text
          - marginBottom: '16px' → Space ke content berikutnya
        */}
        <h3 style={styles.cartTitle}>
          <ShoppingCart size={24} />
          <span>Your Order</span>
        </h3>
        
        {/* CONDITIONAL RENDERING: EMPTY CART vs CART WITH ITEMS */}
        {isCartEmpty ? (
          // EMPTY CART STATE
          /* 
            FLEXBOX IMPLEMENTATION 15: EMPTY CART LAYOUT
            emptyCart style properties:
            - display: 'flex' → Flex container
            - flexDirection: 'column' → Vertical stacking
            - alignItems: 'center' → Horizontal center alignment
            - justifyContent: 'center' → Vertical center alignment
            - padding: '32px 0' → Vertical padding untuk spacing
          */
          <div style={styles.emptyCart}>
            <p style={styles.emptyCartText}>Your cart is empty</p>
            <p style={styles.emptyCartSubtext}>Add items to get started!</p>
          </div>
        ) : (
          // CART WITH ITEMS
          <>
            {/* CART ITEMS LIST */}
            {/* 
              SCROLLABLE CONTAINER untuk cart items
              cartItemsList properties:
              - maxHeight: '384px' → Fixed max height
              - overflowY: 'auto' → Vertical scroll jika content overflow
              - marginBottom: '16px' → Space ke footer
              
              FLEXBOX BEHAVIOR:
              - Container ini bukan flex container
              - Children (CartItem components) akan di-render secara vertical (default block)
            */}
            <div style={styles.cartItemsList}>
              {/* 
                MAPPING CART ITEMS:
                - cartItems.map() untuk render setiap cart item
                - Key menggunakan item.id untuk React optimization
                - Pass semua necessary props ke CartItem component
              */}
              {cartItems.map(item => (
                <CartItem
                  key={item.id} // Unique key untuk React reconciliation
                  item={item} // Cart item object dengan quantity
                  addToCart={addToCart} // useState setter function
                  removeFromCart={removeFromCart} // useState setter function  
                  deleteFromCart={deleteFromCart} // useState setter function
                  formatRupiah={formatRupiah} // Currency formatter utility
                />
              ))}
            </div>
            
            {/* CART FOOTER */}
            {/* 
              STYLING: Footer dengan border separator
              cartFooter properties:
              - borderTop: '1px solid #e5e7eb' → Top border separator
              - paddingTop: '16px' → Space above border
            */}
            <div style={styles.cartFooter}>
              
              {/* TOTAL SECTION */}
              {/* 
                FLEXBOX IMPLEMENTATION 16: TOTAL SECTION LAYOUT
                totalSection style properties:
                - display: 'flex' → Horizontal layout
                - justifyContent: 'space-between' → Label di kiri, amount di kanan
                - alignItems: 'center' → Vertical center alignment
                - marginBottom: '16px' → Space ke checkout button
              */}
              <div style={styles.totalSection}>
                {/* LEFT: Total Label */}
                <span style={styles.totalLabel}>Total Amount:</span>
                
                {/* RIGHT: Total Amount */}
                {/* 
                  DYNAMIC CONTENT: Total price dari cart state
                  calculateTotal() dipanggil untuk compute total harga
                */}
                <span style={styles.totalAmount}>
                  Rp{calculateTotal()}
                </span>
              </div>
              
              {/* CHECKOUT BUTTON */}
              {/* 
                FLEXBOX IMPLEMENTATION 17: CHECKOUT BUTTON LAYOUT
                checkoutButton style properties:
                - width: '100%' → Full width button
                - display: 'flex' → Flex container
                - alignItems: 'center' → Vertical center alignment
                - justifyContent: 'center' → Horizontal center alignment
                - gap: '8px' → Space antara text dan arrow
                - padding: '12px' → Internal padding
                - borderRadius: '8px' → Rounded corners
              */}
              <button 
                style={styles.checkoutButton}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
              >
                <span>Proceed to Checkout</span>
                <span>→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;