/**
 * STYLES.JS - CSS-IN-JS STYLING CONFIGURATION
 * 
 * CSS-in-JS Pattern Explanation:
 * - Semua styling disimpan dalam JavaScript object
 * - Properties menggunakan camelCase (backgroundColor bukan background-color)
 * - Values menggunakan strings untuk CSS values
 * - Keuntungan: Dynamic styling, component-scoped, JavaScript variables
 * - Diimport dan digunakan via styles.propertyName
 */

export const styles = {
  
  // ===== MAIN LAYOUT CONTAINERS =====
  
  /**
   * MAIN APP CONTAINER
   * Base container untuk entire application
   */
  container: {
    minHeight: '100vh', // Full viewport height minimum
    background: 'linear-gradient(to bottom right, #fff7ed, #fef2f2)', // Gradient background
    fontFamily: 'Arial, sans-serif' // Font family untuk entire app
  },

  // ===== HEADER STYLING WITH FLEXBOX =====
  
  /**
   * HEADER CONTAINER
   * Sticky header dengan shadow
   */
  header: {
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Drop shadow
    position: 'sticky', // Sticky positioning
    top: 0, // Stick to top
    zIndex: 40 // Layer above other content
  },

  /**
   * FLEXBOX IMPLEMENTATION 1: HEADER CONTENT LAYOUT
   * Main flexbox container untuk header layout
   */
  headerContent: {
    maxWidth: '1200px', // Maximum container width
    margin: '0 auto', // Horizontal centering
    padding: '16px 20px', // Internal padding
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox
    justifyContent: 'space-between', // Logo kiri, cart kanan
    alignItems: 'center' // Vertical center alignment
  },

  /**
   * HEADER TEXT STYLING
   */
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ea580c', // Orange brand color
    margin: 0
  },

  tagline: {
    color: '#666', // Gray text color
    fontSize: '14px',
    margin: '4px 0 0 0'
  },

  /**
   * FLEXBOX IMPLEMENTATION 2: CART BUTTON LAYOUT
   * Button dengan flexbox internal untuk icon + text + badge
   */
  cartButton: {
    position: 'relative', // Untuk absolute positioning badge
    backgroundColor: '#f97316', // Orange background
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox untuk internal layout
    alignItems: 'center', // Vertical center alignment
    gap: '8px', // Space antara icon, text, dan badge
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.3s' // Smooth hover transition
  },

  /**
   * FLEXBOX IMPLEMENTATION 3: CART BADGE POSITIONING
   * Absolute positioned badge dengan flexbox centering
   */
  cartBadge: {
    position: 'absolute', // Absolute positioning relative to cartButton
    top: '-8px',
    right: '-8px',
    backgroundColor: '#ef4444', // Red background
    color: 'white',
    borderRadius: '50%', // Perfect circle
    width: '24px',
    height: '24px',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox untuk centering
    alignItems: 'center', // Vertical center
    justifyContent: 'center', // Horizontal center
    fontSize: '12px'
  },

  // ===== MAIN CONTENT LAYOUT =====

  /**
   * FLEXBOX IMPLEMENTATION 4: MAIN CONTENT CONTAINER
   * Primary layout container dengan responsive flexbox
   */
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 20px',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox layout
    gap: '32px', // Space antara menu section dan cart sidebar
    flexWrap: 'wrap' // Allow wrapping untuk responsive behavior
  },

  // ===== MENU SECTION STYLING =====

  /**
   * FLEXBOX IMPLEMENTATION 5: MENU SECTION CONTAINER
   * Main area untuk menu items
   */
  menuSection: {
    // === FLEXBOX PROPERTIES ===
    flex: '2', // Take 2 parts dari available space (2:1 ratio dengan cart)
    minWidth: '300px' // Minimum width untuk responsive breakpoint
  },

  /**
   * FLEXBOX IMPLEMENTATION 6: MENU TITLE LAYOUT
   * Title dengan icon dan text horizontal
   */
  menuTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#1f2937',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    alignItems: 'center', // Vertical center alignment
    gap: '8px' // Space antara emoji dan text
  },

  /**
   * FLEXBOX IMPLEMENTATION 7: CATEGORY TITLE LAYOUT
   * Category header dengan nama dan count
   */
  categoryTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#374151',
    borderBottom: '2px solid #fdba74', // Bottom border separator
    paddingBottom: '8px',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    justifyContent: 'space-between', // Category name kiri, count kanan
    alignItems: 'center' // Vertical center alignment
  },

  categoryCount: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#6b7280' // Gray color
  },

  /**
   * FLEXBOX IMPLEMENTATION 8: MENU GRID LAYOUT
   * Grid container untuk menu cards dengan responsive behavior
   */
  menuGrid: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox grid
    flexWrap: 'wrap', // Allow wrapping ke baris baru
    gap: '16px', // Uniform spacing antara cards
    marginBottom: '32px' // Space setelah setiap kategori
  },

  // ===== MENU CARD STYLING =====

  /**
   * FLEXBOX IMPLEMENTATION 9: MENU CARD CONTAINER
   * Individual card dengan complex flexbox layout
   */
  menuCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Default shadow
    padding: '16px',
    // === FLEXBOX PROPERTIES ===
    flex: '1 1 calc(50% - 8px)', // Flexible sizing: grow/shrink, 50% base width minus gap
    minWidth: '250px', // Minimum width memaksa single column pada mobile
    display: 'flex', // Enable flexbox
    flexDirection: 'column', // Vertical stacking: header → content → footer
    transition: 'box-shadow 0.3s', // Smooth shadow transition
    cursor: 'pointer'
  },

  /**
   * HOVER STATE untuk menu card
   * Enhanced shadow saat di-hover
   */
  menuCardHover: {
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)' // Enhanced shadow
  },

  /**
   * FLEXBOX IMPLEMENTATION 10: CARD HEADER LAYOUT
   * Layout untuk icon dan text content
   */
  cardHeader: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    gap: '12px', // Space antara icon dan text
    marginBottom: '12px'
  },

  /**
   * ICON WRAPPER STYLING
   */
  iconWrapper: {
    color: '#f97316', // Orange color consistency
    // === FLEXBOX PROPERTIES ===
    flexShrink: 0 // Prevent icon dari shrinking
  },

  /**
   * CARD TEXT STYLING
   */
  itemName: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 4px 0'
  },

  itemDescription: {
    color: '#6b7280', // Gray text
    fontSize: '14px',
    margin: 0
  },

  /**
   * FLEXBOX IMPLEMENTATION 11: CARD FOOTER LAYOUT
   * Layout untuk price dan controls
   */
  cardFooter: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    justifyContent: 'space-between', // Price kiri, controls kanan
    alignItems: 'center', // Vertical center alignment
    marginTop: 'auto', // Push to bottom (karena parent column flex)
    paddingTop: '16px'
  },

  /**
   * PRICE STYLING
   */
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#16a34a' // Green color untuk price
  },

  // ===== BUTTON STYLING =====

  /**
   * FLEXBOX IMPLEMENTATION 12: ADD BUTTON LAYOUT
   * Button dengan icon dan text
   */
  addButton: {
    backgroundColor: '#f97316', // Orange background
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    alignItems: 'center', // Vertical center alignment
    gap: '4px', // Space antara icon dan text
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.3s'
  },

  /**
   * FLEXBOX IMPLEMENTATION 13: QUANTITY CONTROLS LAYOUT
   * Container untuk minus, quantity, plus buttons
   */
  quantityControls: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    alignItems: 'center', // Vertical center alignment
    gap: '8px', // Space antara buttons
    backgroundColor: '#fed7aa', // Light orange background
    borderRadius: '8px',
    padding: '4px 8px'
  },

  /**
   * FLEXBOX IMPLEMENTATION 14: CIRCULAR QUANTITY BUTTON
   * Perfect circle buttons dengan flexbox centering
   */
  quantityButton: {
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '50%', // Perfect circle
    width: '24px',
    height: '24px',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox
    alignItems: 'center', // Vertical center
    justifyContent: 'center', // Horizontal center
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },

  /**
   * QUANTITY TEXT STYLING
   */
  quantityText: {
    fontWeight: '600',
    minWidth: '32px', // Fixed width untuk layout stability
    textAlign: 'center' // Center aligned text
  },

  // ===== CART SIDEBAR STYLING =====

  /**
   * FLEXBOX IMPLEMENTATION 15: CART SIDEBAR CONTAINER
   * Sticky sidebar dengan flex properties
   */
  cartSidebar: {
    // === FLEXBOX PROPERTIES ===
    flex: '1', // Take 1 part dari available space (1:2 ratio dengan menu)
    minWidth: '300px',
    position: 'sticky', // Sticky positioning
    top: '100px', // Offset dari header
    height: 'fit-content' // Height sesuai content
  },

  /**
   * CART CONTAINER STYLING
   */
  cartContainer: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '24px'
  },

  /**
   * FLEXBOX IMPLEMENTATION 16: CART TITLE LAYOUT
   * Title dengan shopping cart icon
   */
  cartTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    alignItems: 'center', // Vertical center alignment
    gap: '8px' // Space antara icon dan text
  },

  // ===== EMPTY CART STATE =====

  /**
   * FLEXBOX IMPLEMENTATION 17: EMPTY CART LAYOUT
   * Centered empty state message
   */
  emptyCart: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox
    flexDirection: 'column', // Vertical stacking
    alignItems: 'center', // Horizontal center alignment
    justifyContent: 'center', // Vertical center alignment
    padding: '32px 0'
  },

  emptyCartText: {
    color: '#6b7280',
    marginBottom: '8px'
  },

  emptyCartSubtext: {
    color: '#9ca3af',
    fontSize: '14px'
  },

  // ===== CART ITEMS LIST =====

  /**
   * CART ITEMS SCROLLABLE CONTAINER
   */
  cartItemsList: {
    maxHeight: '384px', // Fixed max height
    overflowY: 'auto', // Vertical scroll
    marginBottom: '16px'
  },

  /**
   * FLEXBOX IMPLEMENTATION 18: CART ITEM LAYOUT
   * Individual cart item dengan controls layout
   */
  cartItem: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    justifyContent: 'space-between', // Content kiri, controls kanan
    alignItems: 'flex-start', // Top alignment untuk multi-line content
    backgroundColor: '#f9fafb', // Light gray background
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px'
  },

  /**
   * CART ITEM DETAILS SECTION
   */
  cartItemDetails: {
    // === FLEXBOX PROPERTIES ===
    flex: 1 // Take remaining space
  },

  cartItemName: {
    fontWeight: '600',
    marginBottom: '4px'
  },

  /**
   * FLEXBOX IMPLEMENTATION 19: CART ITEM PRICE INFO
   * Layout untuk price × quantity dan subtotal
   */
  cartItemPrice: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    alignItems: 'center', // Vertical center alignment
    gap: '8px', // Space antara price info dan subtotal
    fontSize: '14px'
  },

  cartItemPriceText: {
    color: '#6b7280' // Gray text
  },

  cartItemSubtotal: {
    fontWeight: '600',
    color: '#16a34a' // Green color
  },

  /**
   * FLEXBOX IMPLEMENTATION 20: CART ITEM CONTROLS
   * Layout untuk quantity controls dan delete button
   */
  cartItemControls: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    alignItems: 'center', // Vertical center alignment
    gap: '4px' // Small space antara buttons
  },

  /**
   * FLEXBOX IMPLEMENTATION 21: CART CONTROL BUTTON
   * Circular buttons dengan flexbox centering
   */
  cartControlButton: {
    backgroundColor: '#d1d5db', // Gray background
    color: '#374151',
    border: 'none',
    borderRadius: '50%', // Perfect circle
    width: '24px',
    height: '24px',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox
    alignItems: 'center', // Vertical center
    justifyContent: 'center', // Horizontal center
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },

  /**
   * DELETE BUTTON STYLING
   */
  deleteButton: {
    marginLeft: '8px', // Extra space dari quantity controls
    color: '#ef4444', // Red color untuk destructive action
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Enable flexbox
    alignItems: 'center', // Vertical center
    justifyContent: 'center' // Horizontal center
  },

  // ===== CART FOOTER =====

  /**
   * CART FOOTER STYLING
   */
  cartFooter: {
    borderTop: '1px solid #e5e7eb', // Top border separator
    paddingTop: '16px'
  },

  /**
   * FLEXBOX IMPLEMENTATION 22: TOTAL SECTION LAYOUT
   * Layout untuk total label dan amount
   */
  totalSection: {
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    justifyContent: 'space-between', // Label kiri, amount kanan
    alignItems: 'center', // Vertical center alignment
    marginBottom: '16px'
  },

  totalLabel: {
    fontSize: '18px',
    fontWeight: '600'
  },

  totalAmount: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#16a34a' // Green color
  },

  /**
   * FLEXBOX IMPLEMENTATION 23: CHECKOUT BUTTON LAYOUT
   * Full width button dengan flexbox centering
   */
  checkoutButton: {
    width: '100%', // Full width
    backgroundColor: '#16a34a', // Green background
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    // === FLEXBOX PROPERTIES ===
    display: 'flex', // Horizontal layout
    alignItems: 'center', // Vertical center alignment
    justifyContent: 'center', // Horizontal center alignment
    gap: '8px', // Space antara text dan arrow
    transition: 'background-color 0.3s'
  },

  // ===== RESPONSIVE MOBILE CART BUTTON =====

  /**
   * MOBILE CART FLOATING BUTTON
   */
  mobileCartButton: {
    display: 'none', // Hidden by default, shown in mobile CSS
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '50%', // Perfect circle
    width: '60px',
    height: '60px',
    // === FLEXBOX PROPERTIES ===
    alignItems: 'center', // Will be flex when display changes
    justifyContent: 'center', // Will be flex when display changes
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    zIndex: 50
  },

  // ===== RESPONSIVE MEDIA QUERIES SIMULATION =====
  // Note: CSS-in-JS doesn't support real media queries
  // Responsive behavior dihandle via JavaScript window.innerWidth checks
  
  /**
   * MOBILE RESPONSIVE OVERRIDES
   * Styles ini akan diterapkan via JavaScript untuk mobile view
   */
  mobileOverrides: {
    mainContent: {
      flexDirection: 'column' // Stack vertically pada mobile
    },
    menuSection: {
      flex: '1', // Full width
      width: '100%'
    },
    cartSidebar: {
      display: 'none' // Hidden pada mobile, toggle dengan showCart state
    },
    mobileCartButton: {
      display: 'flex' // Show floating cart button pada mobile
    }
  }
};