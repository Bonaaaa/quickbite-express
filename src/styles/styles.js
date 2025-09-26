/**
 * STYLES.JS - UPDATED WITH IMAGE STYLING
 *
 * Enhanced CSS-in-JS styling configuration with proper image display
 * Added new styles for uniform image display and improved card layout
 */

export const styles = {
  // ===== MAIN LAYOUT CONTAINERS =====

  container: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #fff7ed, #fef2f2)",
    fontFamily: "Arial, sans-serif",
  },

  // ===== HEADER STYLING WITH FLEXBOX =====

  header: {
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 40,
  },

  headerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ea580c",
    margin: 0,
  },

  tagline: {
    color: "#666",
    fontSize: "14px",
    margin: "4px 0 0 0",
  },

  cartButton: {
    position: "relative",
    backgroundColor: "#f97316",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },

  cartBadge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#ef4444",
    color: "white",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },

  // ===== MAIN CONTENT LAYOUT =====

  mainContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 20px",
    display: "flex",
    gap: "32px",
    flexWrap: "wrap",
  },

  // ===== MENU SECTION STYLING =====

  menuSection: {
    flex: "2",
    minWidth: "300px",
  },

  menuTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#1f2937",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  categoryTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#374151",
    borderBottom: "2px solid #fdba74",
    paddingBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryCount: {
    fontSize: "14px",
    fontWeight: "normal",
    color: "#6b7280",
  },

  /**
   * UPDATED: RESPONSIVE GRID LAYOUT
   * Enhanced grid system for better image display
   */
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },

  // ===== ENHANCED MENU CARD STYLING =====

  /**
   * UPDATED: MENU CARD WITH IMPROVED LAYOUT
   * Enhanced for better image integration and visual hierarchy
   */
  menuCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    overflow: "hidden", // Important for image container
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
    cursor: "pointer",
    height: "100%", // Ensure uniform height
  },

  menuCardHover: {
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transform: "translateY(-2px)",
  },

  /**
   * NEW: IMAGE CONTAINER STYLING
   * Fixed dimensions for uniform appearance across all cards
   */
  cardImageContainer: {
    position: "relative",
    width: "100%",
    height: "200px", // Fixed height for uniformity
    overflow: "hidden",
    backgroundColor: "#f3f4f6", // Fallback background
  },

  /**
   * NEW: CARD IMAGE STYLING
   * Ensures all images display uniformly regardless of original dimensions
   */
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Maintain aspect ratio while filling container
    objectPosition: "center", // Center the image
    transition: "transform 0.3s ease",
  },

  /**
   * NEW: IMAGE FALLBACK STYLING
   * Displays when image fails to load
   */
  imageFallback: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#f3f4f6",
    display: "none", // Hidden by default, shown on error
    alignItems: "center",
    justifyContent: "center",
  },

  fallbackText: {
    fontSize: "48px",
    opacity: 0.5,
  },

  /**
   * NEW: CARD CONTENT CONTAINER
   * Contains all text content and controls, separate from image
   */
  cardContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    flex: 1, // Takes remaining space
  },

  /**
   * UPDATED: SIMPLIFIED CARD HEADER
   * Removed icon section since image serves as visual element
   */
  cardHeader: {
    marginBottom: "16px",
  },

  itemName: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 8px 0",
    color: "#1f2937",
  },

  itemDescription: {
    color: "#6b7280",
    fontSize: "14px",
    margin: 0,
    lineHeight: "1.5",
  },

  /**
   * UPDATED: CARD FOOTER LAYOUT
   * Enhanced spacing and typography
   */
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto", // Push to bottom
    paddingTop: "16px",
    borderTop: "1px solid #f3f4f6", // Subtle separator
  },

  price: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#16a34a",
  },

  // ===== BUTTON STYLING =====

  addButton: {
    backgroundColor: "#f97316",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },

  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#fed7aa",
    borderRadius: "10px",
    padding: "6px 12px",
  },

  quantityButton: {
    backgroundColor: "#f97316",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  quantityText: {
    fontWeight: "600",
    minWidth: "24px",
    textAlign: "center",
    fontSize: "16px",
  },

  // ===== CART SIDEBAR STYLING =====

  cartSidebar: {
    flex: "1",
    minWidth: "320px",
    position: "sticky",
    top: "100px",
    height: "fit-content",
  },

  cartContainer: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "24px",
  },

  cartTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#1f2937",
  },

  // ===== EMPTY CART STATE =====

  emptyCart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 0",
    textAlign: "center",
  },

  emptyCartText: {
    color: "#6b7280",
    marginBottom: "8px",
    fontSize: "16px",
  },

  emptyCartSubtext: {
    color: "#9ca3af",
    fontSize: "14px",
  },

  // ===== CART ITEMS LIST =====

  cartItemsList: {
    maxHeight: "400px",
    overflowY: "auto",
    marginBottom: "20px",
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#f9fafb",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "12px",
  },

  cartItemDetails: {
    flex: 1,
  },

  cartItemName: {
    fontWeight: "600",
    marginBottom: "6px",
    color: "#1f2937",
  },

  cartItemPrice: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "14px",
  },

  cartItemPriceText: {
    color: "#6b7280",
  },

  cartItemSubtotal: {
    fontWeight: "600",
    color: "#16a34a",
  },

  cartItemControls: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  cartControlButton: {
    backgroundColor: "#e5e7eb",
    color: "#374151",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },

  deleteButton: {
    marginLeft: "8px",
    color: "#ef4444",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },

  // ===== CART FOOTER =====

  cartFooter: {
    borderTop: "2px solid #e5e7eb",
    paddingTop: "20px",
  },

  totalSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  totalLabel: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1f2937",
  },

  totalAmount: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#16a34a",
  },

  checkoutButton: {
    width: "100%",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "all 0.3s ease",
  },

  // ===== RESPONSIVE MOBILE STYLING =====

  mobileCartButton: {
    display: "none",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#f97316",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    cursor: "pointer",
    zIndex: 50,
  },

  // ===== RESPONSIVE OVERRIDES =====

  mobileOverrides: {
    mainContent: {
      flexDirection: "column",
    },
    menuGrid: {
      gridTemplateColumns: "1fr", // Single column on mobile
    },
    menuSection: {
      flex: "1",
      width: "100%",
    },
    cartSidebar: {
      display: "none",
    },
    mobileCartButton: {
      display: "flex",
    },
  },
};
