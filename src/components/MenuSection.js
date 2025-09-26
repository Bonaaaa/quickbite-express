import React, { useState } from "react";
import CategorySection from "./CategorySection";
import { styles } from "../styles/styles";

// Additional tab-specific styles (can be moved to styles.js)
const tabStyles = {
  tabsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "24px",
    borderBottom: "2px solid #f3f4f6",
    paddingBottom: "16px",
  },

  tabButton: {
    backgroundColor: "#f3f4f6",
    color: "#6b7280",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    minWidth: "fit-content",
  },

  tabButtonActive: {
    backgroundColor: "#f97316",
    color: "white",
    fontWeight: "600",
    boxShadow: "0 2px 4px rgba(249, 115, 22, 0.3)",
  },

  tabItemCount: {
    fontSize: "14px",
    opacity: 0.8,
  },
};

/**
 * MENU SECTION COMPONENT - UPDATED WITH CATEGORY TABS
 * Fungsi: Container utama untuk semua kategori menu dengan tab navigation
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
  formatRupiah,
}) => {
  // ===== NEW STATE: ACTIVE TAB MANAGEMENT =====

  /**
   * ACTIVE TAB STATE
   * Menyimpan kategori yang sedang aktif/dipilih
   * Default: kategori pertama yang tersedia
   */
  const categories = Object.keys(groupedItems);
  const [activeTab, setActiveTab] = useState(categories[0] || "");

  /**
   * TAB CLICK HANDLER
   * Mengubah kategori aktif ketika tab diklik
   */
  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  /**
   * GET ACTIVE CATEGORY ITEMS
   * Mendapatkan items dari kategori yang sedang aktif
   */
  const activeItems = groupedItems[activeTab] || [];

  return (
    <div style={styles.menuSection}>
      {/* MENU TITLE */}
      <h2 style={styles.menuTitle}>
        <span>📋</span>
        <span>Our Menu</span>
      </h2>

      {/* NEW: CATEGORY TABS NAVIGATION */}
      <div style={tabStyles.tabsContainer}>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              ...tabStyles.tabButton,
              ...(activeTab === category ? tabStyles.tabButtonActive : {}),
            }}
            onClick={() => handleTabClick(category)}
            onMouseEnter={(e) => {
              if (activeTab !== category) {
                e.target.style.backgroundColor = "#fed7aa";
                e.target.style.color = "#ea580c";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== category) {
                e.target.style.backgroundColor = "#f3f4f6";
                e.target.style.color = "#6b7280";
              }
            }}
          >
            {category}
            <span style={tabStyles.tabItemCount}>
              ({groupedItems[category].length})
            </span>
          </button>
        ))}
      </div>

      {/* ACTIVE CATEGORY CONTENT */}
      {activeTab && (
        <CategorySection
          key={activeTab} // Force re-render when tab changes
          category={activeTab}
          items={activeItems}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          formatRupiah={formatRupiah}
        />
      )}
    </div>
  );
};

export default MenuSection;
