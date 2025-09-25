/**
 * HELPERS.JS - UTILITY FUNCTIONS
 * 
 * Kumpulan fungsi utility yang digunakan across components
 * Fungsi-fungsi ini bisa dipindahkan dari App.js ke sini untuk better organization
 * Saat ini masih di App.js, tapi bisa direfactor ke sini untuk cleaner architecture
 */

/**
 * FORMAT RUPIAH CURRENCY
 * Utility function untuk format number ke format Rupiah Indonesia
 * 
 * @param {number} amount - Amount dalam number format
 * @returns {string} - Formatted string dengan prefix "Rp" dan Indonesian number format
 * 
 * Example: formatRupiah(45000) → "Rp45.000"
 * 
 * TIDAK MENGGUNAKAN USESTATE karena:
 * - Pure function, tidak ada state yang ditrack
 * - Input → Process → Output pattern
 * - Tidak ada side effects atau state mutations
 */
export const formatRupiah = (amount) => {
  return 'Rp' + amount.toLocaleString('id-ID');
};

/**
 * CALCULATE CART TOTAL
 * Function untuk menghitung total harga dari cart object
 * 
 * @param {object} cart - Cart object dengan structure { itemId: { price, quantity, ...otherProps } }
 * @returns {string} - Formatted total amount dalam Indonesian number format
 * 
 * CARA KERJA:
 * 1. Object.values(cart) → Convert cart object ke array of items
 * 2. reduce() → Iterate array untuk accumulate total
 * 3. item.price * item.quantity → Calculate subtotal per item
 * 4. toLocaleString('id-ID') → Format ke Indonesian number format
 * 
 * TIDAK MENGGUNAKAN USESTATE karena:
 * - Pure function, same input akan menghasilkan same output
 * - Computed value berdasarkan cart state yang sudah ada
 * - Function dipanggil setiap re-render untuk fresh calculation
 */
export const calculateTotal = (cart) => {
  return Object.values(cart).reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0).toLocaleString('id-ID');
};

/**
 * GET TOTAL ITEMS COUNT
 * Function untuk menghitung total jumlah items (quantity) dalam cart
 * 
 * @param {object} cart - Cart object
 * @returns {number} - Total quantity dari semua items
 * 
 * CARA KERJA:
 * 1. Object.values(cart) → Convert ke array
 * 2. reduce() → Sum semua quantity values
 * 3. total + item.quantity → Accumulate quantities
 * 
 * USAGE: Untuk display badge di cart button, conditional rendering
 */
export const getTotalItems = (cart) => {
  return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
};

/**
 * GROUP ITEMS BY CATEGORY
 * Function untuk mengelompokkan menu items berdasarkan kategori
 * 
 * @param {array} items - Array of menu items
 * @returns {object} - Object dengan kategori sebagai key, array items sebagai value
 * 
 * CARA KERJA:
 * 1. reduce() dengan empty object {} sebagai initial value
 * 2. Check apakah category sudah ada di accumulator
 * 3. Jika belum ada, initialize dengan empty array
 * 4. Push item ke kategori yang sesuai
 * 5. Return updated accumulator
 * 
 * Example output:
 * {
 *   "Main Course": [item1, item2, item4, item7],
 *   "Beverages": [item5, item8],
 *   "Appetizers": [item3],
 *   "Desserts": [item6]
 * }
 */
export const groupItemsByCategory = (items) => {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []; // Initialize array jika kategori belum ada
    }
    acc[item.category].push(item); // Push item ke kategori yang sesuai
    return acc;
  }, {});
};

/**
 * CHECK IF CART IS EMPTY
 * Simple utility untuk check apakah cart kosong
 * 
 * @param {object} cart - Cart object
 * @returns {boolean} - true jika cart kosong, false jika ada items
 * 
 * USAGE: Conditional rendering untuk empty state vs cart with items
 */
export const isCartEmpty = (cart) => {
  return Object.keys(cart).length === 0;
};

/**
 * GET CART ITEMS AS ARRAY
 * Convert cart object ke array untuk easier iteration
 * 
 * @param {object} cart - Cart object
 * @returns {array} - Array of cart items
 * 
 * USAGE: Untuk .map() operations dalam rendering cart items
 */
export const getCartItemsArray = (cart) => {
  return Object.values(cart);
};

/**
 * CALCULATE ITEM SUBTOTAL
 * Calculate subtotal untuk individual cart item
 * 
 * @param {object} item - Cart item dengan price dan quantity
 * @returns {number} - Subtotal amount (price × quantity)
 * 
 * USAGE: Individual item subtotal display dalam cart
 */
export const calculateItemSubtotal = (item) => {
  return item.price * item.quantity;
};

/**
 * VALIDATE CART OPERATION
 * Simple validation untuk cart operations
 * 
 * @param {object} item - Menu item object
 * @param {number} quantity - Quantity untuk validation
 * @returns {boolean} - true jika valid, false jika tidak valid
 * 
 * VALIDATION RULES:
 * - Item harus ada dan memiliki id
 * - Quantity harus positive number
 * - Item harus memiliki valid price
 */
export const validateCartOperation = (item, quantity = 1) => {
  return (
    item && 
    item.id && 
    typeof item.price === 'number' && 
    item.price > 0 &&
    typeof quantity === 'number' &&
    quantity > 0
  );
};

/**
 * SEARCH ITEMS BY NAME
 * Utility untuk search/filter menu items berdasarkan nama
 * 
 * @param {array} items - Array menu items
 * @param {string} searchTerm - Search term
 * @returns {array} - Filtered items yang match search term
 * 
 * FUTURE ENHANCEMENT: Bisa digunakan untuk search functionality
 */
export const searchItemsByName = (items, searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return items;
  }
  
  return items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

/**
 * SORT ITEMS BY PRICE
 * Utility untuk sort items berdasarkan price
 * 
 * @param {array} items - Array items untuk di-sort
 * @param {string} order - 'asc' untuk ascending, 'desc' untuk descending
 * @returns {array} - Sorted array
 * 
 * FUTURE ENHANCEMENT: Untuk filter/sort functionality
 */
export const sortItemsByPrice = (items, order = 'asc') => {
  return [...items].sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
};

/**
 * STORAGE HELPERS (FUTURE ENHANCEMENT)
 * Functions untuk localStorage integration jika diperlukan di masa depan
 * Saat ini cart state hanya di memory (useState), tapi bisa dipersist ke localStorage
 */

/**
 * SAVE CART TO LOCALSTORAGE
 * @param {object} cart - Cart state untuk disimpan
 */
export const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem('foodOrderingCart', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

/**
 * LOAD CART FROM LOCALSTORAGE
 * @returns {object} - Cart object dari localStorage atau empty object
 */
export const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('foodOrderingCart');
    return savedCart ? JSON.parse(savedCart) : {};
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return {};
  }
};

/**
 * CLEAR CART FROM STORAGE
 */
export const clearCartFromStorage = () => {
  try {
    localStorage.removeItem('foodOrderingCart');
  } catch (error) {
    console.error('Failed to clear cart from localStorage:', error);
  }
};

/**
 * PERFORMANCE HELPERS
 */

/**
 * DEBOUNCE FUNCTION
 * Utility untuk debounce user input (future search functionality)
 * 
 * @param {function} func - Function yang akan di-debounce
 * @param {number} delay - Delay dalam milliseconds
 * @returns {function} - Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

/**
 * THROTTLE FUNCTION
 * Utility untuk throttle function calls
 * 
 * @param {function} func - Function yang akan di-throttle
 * @param {number} limit - Limit dalam milliseconds
 * @returns {function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * RESPONSIVE HELPERS
 */

/**
 * CHECK IF MOBILE VIEW
 * Utility untuk check apakah current viewport adalah mobile
 * 
 * @param {number} breakpoint - Mobile breakpoint dalam pixels (default: 768)
 * @returns {boolean} - true jika mobile view
 */
export const isMobileView = (breakpoint = 768) => {
  return typeof window !== 'undefined' && window.innerWidth <= breakpoint;
};

/**
 * GET VIEWPORT DIMENSIONS
 * @returns {object} - Object dengan width dan height viewport
 */
export const getViewportDimensions = () => {
  return {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  };
};

/**
 * ANIMATION HELPERS
 */

/**
 * SMOOTH SCROLL TO ELEMENT
 * Utility untuk smooth scroll ke element tertentu
 * 
 * @param {string} elementId - ID element target
 * @param {object} options - Scroll options
 */
export const smoothScrollToElement = (elementId, options = {}) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options
    });
  }
};

/**
 * ERROR HANDLING HELPERS
 */

/**
 * LOG ERROR
 * Centralized error logging
 * 
 * @param {string} context - Context dimana error terjadi
 * @param {Error} error - Error object
 */
export const logError = (context, error) => {
  console.error(`[${context}] Error:`, error);
  // Future: bisa integrate dengan error tracking service (Sentry, etc.)
};

/**
 * SAFE FUNCTION EXECUTION
 * Wrapper untuk safely execute function dengan error handling
 * 
 * @param {function} func - Function yang akan diexecute
 * @param {string} context - Context untuk error logging
 * @param {*} fallback - Fallback value jika function gagal
 */
export const safeExecute = (func, context = 'Unknown', fallback = null) => {
  try {
    return func();
  } catch (error) {
    logError(context, error);
    return fallback;
  }
};

/**
 * CONSTANTS
 * Exported constants yang digunakan across application
 */

export const CONSTANTS = {
  // Responsive breakpoints
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1200,
  
  // Animation durations
  HOVER_TRANSITION_DURATION: '0.3s',
  MODAL_ANIMATION_DURATION: '0.25s',
  
  // Colors (complementing CSS-in-JS styles)
  COLORS: {
    PRIMARY: '#f97316', // Orange
    SECONDARY: '#16a34a', // Green
    DANGER: '#ef4444', // Red
    GRAY_LIGHT: '#f9fafb',
    GRAY_MEDIUM: '#6b7280',
    GRAY_DARK: '#374151'
  },
  
  // Cart settings
  MAX_QUANTITY_PER_ITEM: 99,
  MIN_ORDER_AMOUNT: 10000, // Minimum order Rp 10,000
  
  // LocalStorage keys
  STORAGE_KEYS: {
    CART: 'foodOrderingCart',
    USER_PREFERENCES: 'foodOrderingPreferences'
  }
};

/**
 * SUMMARY:
 * 
 * File helpers.js ini berisi utility functions yang:
 * 1. TIDAK menggunakan useState (pure functions)
 * 2. TIDAK menggunakan flexbox (hanya logical operations)
 * 3. Bisa digunakan across multiple components
 * 4. Memisahkan business logic dari UI components
 * 5. Menyediakan reusable functions untuk common operations
 * 
 * Saat ini kebanyakan functions masih di App.js, tapi bisa direfactor ke sini
 * untuk better code organization dan reusability.
 */