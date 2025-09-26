import React from "react";
import { Plus, Minus } from "lucide-react";
import { styles } from "../styles/styles";

/**
 * MENU CARD COMPONENT - UPDATED WITH IMAGE DISPLAY
 * Fungsi: Menampilkan individual card untuk setiap menu item dengan proper food images
 * Props yang diterima dari CategorySection:
 * - item: object menu item (id, name, price, description, image, category)
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
  formatRupiah,
}) => {
  // ===== COMPUTED VALUES =====

  /**
   * CHECK IF ITEM IS IN CART
   * Mengecek apakah item ini sudah ada di cart
   * Digunakan untuk conditional rendering: show "Add" button atau quantity controls
   */
  const itemInCart = cart[item.id];
  const currentQuantity = itemInCart ? itemInCart.quantity : 0;

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
   */
  const handleMouseEnter = () => {
    setHoveredCard(item.id);
  };

  /**
   * MOUSE LEAVE HANDLER
   * Reset hover state ketika mouse keluar dari card area
   */
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  /**
   * ADD BUTTON CLICK HANDLER
   */
  const handleAddClick = () => {
    addToCart(item);
  };

  /**
   * QUANTITY INCREASE HANDLER
   */
  const handleQuantityIncrease = (e) => {
    e.stopPropagation();
    addToCart(item);
  };

  /**
   * QUANTITY DECREASE HANDLER
   */
  const handleQuantityDecrease = (e) => {
    e.stopPropagation();
    removeFromCart(item.id);
  };

  /**
   * BUTTON HOVER HANDLERS
   */
  const handleButtonHover = (e, isHovering, hoverColor, normalColor) => {
    e.target.style.backgroundColor = isHovering ? hoverColor : normalColor;
  };

  return (
    /* 
      FLEXBOX IMPLEMENTATION: UPDATED MENU CARD CONTAINER
      Enhanced layout to accommodate image display
    */
    <div
      style={{
        ...styles.menuCard,
        ...(isHovered ? styles.menuCardHover : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* NEW: CARD IMAGE SECTION */}
      {/* 
        IMAGE CONTAINER with fixed dimensions for uniform appearance
        - Fixed aspect ratio (4:3) for consistency
        - Object-fit cover to maintain aspect ratio while filling container
        - Border radius for visual consistency with card
      */}
      <div style={styles.cardImageContainer}>
        <img
          src={item.image}
          alt={item.name}
          style={styles.cardImage}
          onError={(e) => {
            // Fallback in case image fails to load
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback content when image fails to load */}
        <div style={styles.imageFallback}>
          <span style={styles.fallbackText}>🍽️</span>
        </div>
      </div>

      {/* CARD CONTENT SECTION */}
      {/* 
        UPDATED: Removed icon from header, now focusing on text content
        The image above serves as the primary visual element
      */}
      <div style={styles.cardContent}>
        {/* CARD HEADER - TEXT ONLY */}
        <div style={styles.cardHeader}>
          <h4 style={styles.itemName}>{item.name}</h4>
          <p style={styles.itemDescription}>{item.description}</p>
        </div>

        {/* CARD FOOTER SECTION */}
        <div style={styles.cardFooter}>
          {/* LEFT: PRICE DISPLAY */}
          <span style={styles.price}>{formatRupiah(item.price)}</span>

          {/* RIGHT: ACTION CONTROLS (CONDITIONAL RENDERING) */}
          <div>
            {itemInCart ? (
              // QUANTITY CONTROLS (ITEM SUDAH DI CART)
              <div style={styles.quantityControls}>
                {/* MINUS BUTTON */}
                <button
                  style={styles.quantityButton}
                  onClick={handleQuantityDecrease}
                  onMouseEnter={(e) =>
                    handleButtonHover(e, true, "#ea580c", "#f97316")
                  }
                  onMouseLeave={(e) =>
                    handleButtonHover(e, false, "#ea580c", "#f97316")
                  }
                >
                  <Minus size={14} />
                </button>

                {/* QUANTITY DISPLAY */}
                <span style={styles.quantityText}>{currentQuantity}</span>

                {/* PLUS BUTTON */}
                <button
                  style={styles.quantityButton}
                  onClick={handleQuantityIncrease}
                  onMouseEnter={(e) =>
                    handleButtonHover(e, true, "#ea580c", "#f97316")
                  }
                  onMouseLeave={(e) =>
                    handleButtonHover(e, false, "#ea580c", "#f97316")
                  }
                >
                  <Plus size={14} />
                </button>
              </div>
            ) : (
              // ADD BUTTON (ITEM BELUM DI CART)
              <button
                style={styles.addButton}
                onClick={handleAddClick}
                onMouseEnter={(e) =>
                  handleButtonHover(e, true, "#ea580c", "#f97316")
                }
                onMouseLeave={(e) =>
                  handleButtonHover(e, false, "#ea580c", "#f97316")
                }
              >
                <Plus size={16} />
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
