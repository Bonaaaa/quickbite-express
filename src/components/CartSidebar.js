import React from "react";
import { ShoppingCart } from "lucide-react";
import CartItem from "./CartItem";
import { styles } from "../styles/styles";

/**
 * CART SIDEBAR COMPONENT - UPDATED TO HIDE WHEN EMPTY
 * Fungsi: Menampilkan sidebar berisi items yang ada di cart, tersembunyi jika kosong
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
  showCart,
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
   * UPDATED: Now used to hide entire component instead of showing empty state
   */
  const isCartEmpty = cartItems.length === 0;

  /**
   * RESPONSIVE VISIBILITY LOGIC
   * Pada mobile: sidebar hidden by default, toggle dengan showCart state
   * Pada desktop: always visible (when cart has items)
   * UPDATED: Also hide when cart is empty
   */
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const shouldHide = (isMobile && !showCart) || isCartEmpty; // Hide if mobile+closed OR if empty

  // EARLY RETURN: Hide component completely when cart is empty
  if (isCartEmpty) {
    return null;
  }

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
      - Desktop: Sticky sidebar di sebelah kanan menu (only when cart has items)
      - Mobile: Hidden by default, toggle dengan button
      - Conditional display berdasarkan showCart state dan cart content
    */
    <div
      id="cart-sidebar"
      style={{
        ...styles.cartSidebar,
        ...(shouldHide ? { display: "none" } : {}), // Conditional visibility
      }}
    >
      {/* CART CONTAINER */}
      <div style={styles.cartContainer}>
        {/* CART TITLE */}
        <h3 style={styles.cartTitle}>
          <ShoppingCart size={24} />
          <span>Your Order</span>
        </h3>

        {/* CART ITEMS LIST */}
        {/* 
          REMOVED: Empty cart conditional rendering
          Component only renders when cart has items
        */}
        <div style={styles.cartItemsList}>
          {cartItems.map((item) => (
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
        <div style={styles.cartFooter}>
          {/* TOTAL SECTION */}
          <div style={styles.totalSection}>
            {/* LEFT: Total Label */}
            <span style={styles.totalLabel}>Total Amount:</span>

            {/* RIGHT: Total Amount */}
            <span style={styles.totalAmount}>Rp{calculateTotal()}</span>
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            style={styles.checkoutButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#15803d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#16a34a")}
          >
            <span>Proceed to Checkout</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
