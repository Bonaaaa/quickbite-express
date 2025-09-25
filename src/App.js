import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, X, Coffee, Pizza, Salad, IceCream, Sandwich } from 'lucide-react';

// CSS Styles dalam JavaScript Object
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #fff7ed, #fef2f2)',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 40
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ea580c',
    margin: 0
  },
  tagline: {
    color: '#666',
    fontSize: '14px',
    margin: '4px 0 0 0'
  },
  cartButton: {
    position: 'relative',
    backgroundColor: '#f97316',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.3s'
  },
  cartBadge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#ef4444',
    color: 'white',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px'
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 20px',
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap'
  },
  menuSection: {
    flex: '2',
    minWidth: '300px'
  },
  menuTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  categoryTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#374151',
    borderBottom: '2px solid #fdba74',
    paddingBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoryCount: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#6b7280'
  },
  menuGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '32px'
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '16px',
    flex: '1 1 calc(50% - 8px)',
    minWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 0.3s',
    cursor: 'pointer'
  },
  menuCardHover: {
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  cardHeader: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px'
  },
  iconWrapper: {
    color: '#f97316',
    flexShrink: 0
  },
  itemName: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 4px 0'
  },
  itemDescription: {
    color: '#6b7280',
    fontSize: '14px',
    margin: 0
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '16px'
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#16a34a'
  },
  addButton: {
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.3s'
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#fed7aa',
    borderRadius: '8px',
    padding: '4px 8px'
  },
  quantityButton: {
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  quantityText: {
    fontWeight: '600',
    minWidth: '32px',
    textAlign: 'center'
  },
  cartSidebar: {
    flex: '1',
    minWidth: '300px',
    position: 'sticky',
    top: '100px',
    height: 'fit-content'
  },
  cartContainer: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '24px'
  },
  cartTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  emptyCart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  cartItemsList: {
    maxHeight: '384px',
    overflowY: 'auto',
    marginBottom: '16px'
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#f9fafb',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px'
  },
  cartItemDetails: {
    flex: 1
  },
  cartItemName: {
    fontWeight: '600',
    marginBottom: '4px'
  },
  cartItemPrice: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px'
  },
  cartItemPriceText: {
    color: '#6b7280'
  },
  cartItemSubtotal: {
    fontWeight: '600',
    color: '#16a34a'
  },
  cartItemControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  cartControlButton: {
    backgroundColor: '#d1d5db',
    color: '#374151',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  deleteButton: {
    marginLeft: '8px',
    color: '#ef4444',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartFooter: {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '16px'
  },
  totalSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  totalLabel: {
    fontSize: '18px',
    fontWeight: '600'
  },
  totalAmount: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#16a34a'
  },
  checkoutButton: {
    width: '100%',
    backgroundColor: '#16a34a',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s'
  },
  mobileCartButton: {
    display: 'none',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    zIndex: 50
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    mainContent: {
      flexDirection: 'column'
    },
    menuSection: {
      flex: '1',
      width: '100%'
    },
    cartSidebar: {
      display: 'none'
    },
    mobileCartButton: {
      display: 'flex'
    }
  }
};

const FoodOrderingApp = () => {
  // State management for cart items
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Menu data with more than 5 items (requirement #2)
  const menuItems = [
    {
      id: 1,
      name: "Classic Burger",
      category: "Main Course",
      price: 12.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      icon: <Sandwich size={32} />
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Main Course",
      price: 18.50,
      description: "Traditional Italian pizza with fresh mozzarella and basil",
      icon: <Pizza size={32} />
    },
    {
      id: 3,
      name: "Caesar Salad",
      category: "Appetizers",
      price: 8.99,
      description: "Crispy romaine lettuce with parmesan and croutons",
      icon: <Salad size={32} />
    },
    {
      id: 4,
      name: "Grilled Chicken",
      category: "Main Course",
      price: 16.99,
      description: "Herb-marinated chicken breast with seasonal vegetables",
      icon: <Sandwich size={32} />
    },
    {
      id: 5,
      name: "Cappuccino",
      category: "Beverages",
      price: 4.50,
      description: "Rich espresso topped with steamed milk foam",
      icon: <Coffee size={32} />
    },
    {
      id: 6,
      name: "Chocolate Ice Cream",
      category: "Desserts",
      price: 6.99,
      description: "Creamy Belgian chocolate ice cream with chocolate chips",
      icon: <IceCream size={32} />
    },
    {
      id: 7,
      name: "Fish & Chips",
      category: "Main Course",
      price: 14.99,
      description: "Beer-battered fish with crispy fries and tartar sauce",
      icon: <Sandwich size={32} />
    },
    {
      id: 8,
      name: "Vanilla Milkshake",
      category: "Beverages",
      price: 5.99,
      description: "Thick and creamy vanilla milkshake with whipped cream",
      icon: <Coffee size={32} />
    }
  ];

  // Function to add item to cart
  const addToCart = (item) => {
    setCart(prevCart => ({
      ...prevCart,
      [item.id]: {
        ...item,
        quantity: (prevCart[item.id]?.quantity || 0) + 1
      }
    }));
  };

  // Function to decrease quantity or remove item from cart
  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[itemId]) {
        if (newCart[itemId].quantity > 1) {
          newCart[itemId] = {
            ...newCart[itemId],
            quantity: newCart[itemId].quantity - 1
          };
        } else {
          delete newCart[itemId];
        }
      }
      return newCart;
    });
  };

  // Function to completely remove item from cart
  const deleteFromCart = (itemId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[itemId];
      return newCart;
    });
  };

  // Calculate total amount (requirement #5)
  const calculateTotal = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  // Get total items in cart
  const getTotalItems = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  // Group items by category
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div style={styles.container}>
      {/* Header with Flexbox */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.logo}>🍔 QuickBite Express</h1>
            <p style={styles.tagline}>Order your favorite meals online!</p>
          </div>
          
          <button
            style={styles.cartButton}
            onClick={() => setShowCart(!showCart)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
          >
            <ShoppingCart size={20} />
            <span>${calculateTotal()}</span>
            {getTotalItems() > 0 && (
              <span style={styles.cartBadge}>
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area with Flexbox */}
      <div style={styles.mainContent}>
        
        {/* Menu Section */}
        <div style={styles.menuSection}>
          <h2 style={styles.menuTitle}>
            <span>📋</span>
            <span>Our Menu</span>
          </h2>
          
          {/* Display menu items by category */}
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category}>
              <h3 style={styles.categoryTitle}>
                <span>{category}</span>
                <span style={styles.categoryCount}>({items.length} items)</span>
              </h3>
              
              <div style={styles.menuGrid}>
                {items.map(item => (
                  <div 
                    key={item.id} 
                    style={{
                      ...styles.menuCard,
                      ...(hoveredCard === item.id ? styles.menuCardHover : {})
                    }}
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div style={styles.cardHeader}>
                      <div style={styles.iconWrapper}>{item.icon}</div>
                      <div>
                        <h4 style={styles.itemName}>{item.name}</h4>
                        <p style={styles.itemDescription}>{item.description}</p>
                      </div>
                    </div>
                    
                    <div style={styles.cardFooter}>
                      <span style={styles.price}>${item.price}</span>
                      <div>
                        {cart[item.id] ? (
                          <div style={styles.quantityControls}>
                            <button
                              style={styles.quantityButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(item.id);
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
                            >
                              <Minus size={14} />
                            </button>
                            <span style={styles.quantityText}>{cart[item.id].quantity}</span>
                            <button
                              style={styles.quantityButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        ) : (
                          <button
                            style={styles.addButton}
                            onClick={() => addToCart(item)}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
                          >
                            <Plus size={16} />
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cart Sidebar */}
        <div style={{...styles.cartSidebar, ...(window.innerWidth <= 768 && !showCart ? {display: 'none'} : {})}}>
          <div style={styles.cartContainer}>
            <h3 style={styles.cartTitle}>
              <ShoppingCart size={24} />
              <span>Your Order</span>
            </h3>
            
            {Object.keys(cart).length === 0 ? (
              <div style={styles.emptyCart}>
                <p style={styles.emptyCartText}>Your cart is empty</p>
                <p style={styles.emptyCartSubtext}>Add items to get started!</p>
              </div>
            ) : (
              <>
                <div style={styles.cartItemsList}>
                  {Object.values(cart).map(item => (
                    <div key={item.id} style={styles.cartItem}>
                      <div style={styles.cartItemDetails}>
                        <h4 style={styles.cartItemName}>{item.name}</h4>
                        <div style={styles.cartItemPrice}>
                          <span style={styles.cartItemPriceText}>
                            ${item.price} × {item.quantity}
                          </span>
                          <span style={styles.cartItemSubtotal}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      
                      <div style={styles.cartItemControls}>
                        <button
                          style={styles.cartControlButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(item.id);
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#9ca3af'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#d1d5db'}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={styles.quantityText}>{item.quantity}</span>
                        <button
                          style={styles.cartControlButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#9ca3af'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#d1d5db'}
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          style={styles.deleteButton}
                          onClick={() => deleteFromCart(item.id)}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={styles.cartFooter}>
                  <div style={styles.totalSection}>
                    <span style={styles.totalLabel}>Total Amount:</span>
                    <span style={styles.totalAmount}>${calculateTotal()}</span>
                  </div>
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
      </div>
    </div>
  );
};

export default FoodOrderingApp;