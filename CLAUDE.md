# CLAUDE.md - QuickBite Express

## Project Overview

**QuickBite Express** is a React-based food ordering web application that allows users to browse menu items by category, add items to a shopping cart, and manage their orders. The project demonstrates modern React patterns including state management with hooks, component composition, and responsive design.

**Project Name:** `mini-project-group1`
**Tech Stack:** React 19.1.1, Create React App, JavaScript (not TypeScript)
**Styling Approach:** CSS-in-JS (inline styles) + CSS Modules for modals
**UI Library:** lucide-react for icons

---

## Codebase Structure

```
quickbite-express/
├── public/                    # Static assets
│   ├── index.html            # HTML template
│   ├── favicon.ico           # Site favicon
│   └── manifest.json         # PWA manifest
├── src/
│   ├── components/           # React components
│   │   ├── Modals/
│   │   │   ├── ModalsForm.js        # User info form modal
│   │   │   └── Modals.module.css    # Modal-specific styles
│   │   ├── CartItem.js              # Individual cart item component
│   │   ├── CartSidebar.js           # Shopping cart sidebar
│   │   ├── CategorySection.js       # Single category menu display
│   │   ├── Header.js                # App header with cart button
│   │   ├── MenuCard.js              # Individual menu item card
│   │   └── MenuSection.js           # Menu with category tabs
│   ├── data/
│   │   └── menuData.js       # Static menu items data (50 items)
│   ├── styles/
│   │   └── styles.js         # CSS-in-JS style definitions
│   ├── utils/
│   │   └── helpers.js        # Utility functions
│   ├── App.js                # Main application component
│   ├── App.css               # Application styles
│   ├── index.js              # React entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies and scripts
├── .gitignore               # Git ignore rules
└── README.md                # CRA default documentation
```

---

## Tech Stack & Dependencies

### Core Dependencies
- **react** (^19.1.1): UI library
- **react-dom** (^19.1.1): React DOM rendering
- **react-scripts** (5.0.1): Create React App build tools
- **lucide-react** (^0.544.0): Icon library

### Testing Libraries
- **@testing-library/react** (^16.3.0)
- **@testing-library/jest-dom** (^6.8.0)
- **@testing-library/user-event** (^13.5.0)
- **@testing-library/dom** (^10.4.1)

### Development Tools
- Create React App toolchain (Webpack, Babel, ESLint)
- No TypeScript (pure JavaScript)
- No CSS preprocessors (Sass/Less)

---

## Component Architecture

### Component Hierarchy

```
App (Main Container)
├── ModalsForm (User welcome modal)
├── Header (Sticky header with cart info)
├── MenuSection (Menu display with tabs)
│   └── CategorySection (Single category)
│       └── MenuCard (Individual menu items)
└── CartSidebar (Shopping cart)
    └── CartItem (Cart item with controls)
```

### Key Components

#### 1. **App.js** - Main Application Component
**Location:** `src/App.js`
**Purpose:** Root component managing global state and layout

**State Management:**
```javascript
const [cart, setCart] = useState({});           // Cart items (object-based)
const [showCart, setShowCart] = useState(false); // Mobile cart visibility
const [hoveredCard, setHoveredCard] = useState(null); // Hover effects
const [formData, setFormData] = useState({ name: "", gender: "" }); // User data
```

**Key Functions:**
- `addToCart(item)` - Add/increment item in cart
- `removeFromCart(itemId)` - Decrement/remove item from cart
- `deleteFromCart(itemId)` - Remove item completely
- `calculateTotal()` - Calculate total cart price
- `getTotalItems()` - Get total item count
- `formatRupiah(amount)` - Format currency

**Data Structures:**
- Cart uses object-based structure `{ itemId: { ...itemData, quantity } }` for O(1) lookup performance
- Menu items are grouped by category using `reduce()`

#### 2. **MenuSection.js** - Menu Display with Category Tabs
**Location:** `src/components/MenuSection.js`
**Purpose:** Tabbed navigation for menu categories

**Local State:**
```javascript
const [activeTab, setActiveTab] = useState(categories[0]); // Active category
```

**Features:**
- Category tabs with item counts
- Single category display at a time
- Hover effects on inactive tabs

#### 3. **CartSidebar.js** - Shopping Cart
**Location:** `src/components/CartSidebar.js`
**Purpose:** Display cart items and total

**Behavior:**
- Hidden when cart is empty (returns `null`)
- Sticky positioning on desktop
- Mobile toggle visibility via `showCart` prop
- Converts cart object to array for rendering

#### 4. **ModalsForm.js** - User Information Modal
**Location:** `src/components/Modals/ModalsForm.js`
**Purpose:** Collect user name and gender on app load

**Local State:**
```javascript
const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility
```

**Features:**
- CSS Modules for styling (`Modals.module.css`)
- Form with name input and gender radio buttons
- Welcome message display after submission

---

## State Management Patterns

### Global State (lifted to App.js)
1. **Cart State** - Object-based for performance
   - Structure: `{ [itemId]: { ...item, quantity: number } }`
   - Rationale: O(1) lookups and updates vs O(n) array operations

2. **UI State** - Mobile cart visibility, hover effects

3. **Form State** - User data (name, gender)

### Local State (component-specific)
- `activeTab` in MenuSection (category selection)
- `isModalOpen` in ModalsForm (modal visibility)

### State Update Patterns
```javascript
// Immutable updates using spread operator
setCart((prevCart) => ({
  ...prevCart,
  [item.id]: {
    ...item,
    quantity: (prevCart[item.id]?.quantity || 0) + 1
  }
}));

// Functional updates for derived state
setShowCart(prev => !prev);
```

---

## Styling Conventions

### Primary Approach: CSS-in-JS
**File:** `src/styles/styles.js`

All component styles are defined as JavaScript objects and imported:
```javascript
import { styles } from './styles/styles';
<div style={styles.container}>
```

**Benefits:**
- No CSS class naming conflicts
- Dynamic styling based on state
- Colocated with component logic

### CSS Modules (Limited Use)
**File:** `src/components/Modals/Modals.module.css`

Only used for ModalsForm component:
```javascript
import styles from './Modals.module.css';
<div className={styles.modalOverlay}>
```

### Inline Style Overrides
Used for dynamic styles (hover, conditional):
```javascript
style={{
  ...styles.menuCard,
  ...(hoveredCard === item.id ? styles.menuCardHover : {})
}}
```

### Design System

**Colors:**
- Primary Orange: `#f97316`
- Dark Orange: `#ea580c`
- Green (success): `#16a34a`
- Red (error): `#ef4444`
- Gray scale: `#1f2937`, `#374151`, `#6b7280`, `#9ca3af`

**Layout:**
- Max content width: `1200px`
- Flexbox for layouts
- Grid for menu cards: `repeat(auto-fit, minmax(300px, 1fr))`

**Responsive Breakpoint:**
- Mobile: `<= 768px`
- Desktop: `> 768px`

---

## Data Structure

### Menu Items
**File:** `src/data/menuData.js`

**Structure:**
```javascript
{
  id: number,           // Unique identifier (1-50)
  name: string,         // Item name
  category: string,     // "Main Course" | "Appetizers" | "Beverages" | "Desserts"
  price: number,        // Price in IDR
  description: string,  // Item description
  image: string        // Unsplash image URL
}
```

**Categories:**
- Main Course: 20 items (id: 1-20)
- Appetizers: 12 items (id: 21-32)
- Beverages: 10 items (id: 33-42)
- Desserts: 8 items (id: 43-50)

**Total:** 50 menu items

---

## Development Workflows

### Available NPM Scripts

```bash
npm start       # Development server (localhost:3000)
npm test        # Run test suite in watch mode
npm run build   # Production build to /build folder
npm run eject   # Eject from CRA (irreversible)
```

### Development Server
- Auto-reloads on file changes
- ESLint integration for linting
- Hot module replacement

### Common Development Tasks

#### Adding a New Component
1. Create component file in `src/components/`
2. Use functional component pattern with hooks
3. Import styles from `styles.js`
4. Export default at bottom
5. Import and use in parent component

```javascript
import React from 'react';
import { styles } from '../styles/styles';

const NewComponent = ({ prop1, prop2 }) => {
  return (
    <div style={styles.someStyle}>
      {/* Component content */}
    </div>
  );
};

export default NewComponent;
```

#### Adding Menu Items
Edit `src/data/menuData.js`:
- Follow existing data structure
- Use sequential IDs
- Assign to existing category or create new one
- Use Unsplash URLs for images

#### Modifying Styles
Edit `src/styles/styles.js`:
- Add new style objects to `styles` export
- Follow naming convention: camelCase
- Document complex layouts with comments

#### State Management Changes
- Identify if state should be local or lifted
- Use functional updates for derived state
- Maintain immutability with spread operators
- Consider performance (object vs array structures)

---

## Key Conventions for AI Assistants

### Code Style
1. **No TypeScript** - This is a pure JavaScript project
2. **Functional Components** - Always use function components with hooks
3. **Detailed Comments** - Code includes extensive educational comments
4. **Props Destructuring** - Extract props in function parameters
5. **Named Exports for Data** - `export const menuItems`
6. **Default Exports for Components** - `export default ComponentName`

### State Management Rules
1. **Object-based cart** - Never convert to array structure
2. **Immutable updates** - Always use spread operators
3. **Functional updates** - Use when new state depends on old
4. **Lift state judiciously** - Keep local when possible

### Component Patterns
1. **Props documentation** - Document all props in component comments
2. **Event handlers** - Define before return statement
3. **Computed values** - Calculate before render
4. **Conditional rendering** - Use early returns for cleaner code

### Styling Guidelines
1. **CSS-in-JS primary** - Add new styles to `styles.js`
2. **Inline for dynamic** - Use inline styles for state-dependent styling
3. **Hover effects** - Use onMouseEnter/onMouseLeave handlers
4. **Responsive** - Consider mobile-first approach

### File Organization
1. **Components** - One component per file
2. **Data** - Static data in `/data` folder
3. **Styles** - Centralized in `/styles/styles.js`
4. **Utils** - Helper functions in `/utils`

### Naming Conventions
1. **Components** - PascalCase (MenuCard.js)
2. **Functions** - camelCase (addToCart, calculateTotal)
3. **Constants** - camelCase for exports (menuItems)
4. **Style objects** - camelCase (menuCard, cartSidebar)

---

## Testing

### Test Setup
- Jest + React Testing Library
- Test files: `*.test.js` or `*.spec.js`
- Run with: `npm test`

### Testing Approach
- Focus on component behavior
- Use semantic queries (getByRole, getByText)
- Test user interactions
- Mock external dependencies

---

## Build & Deployment

### Production Build
```bash
npm run build
```
- Creates optimized bundle in `/build`
- Minifies JavaScript and CSS
- Includes source maps
- Ready for static hosting

### Build Output
- `/build/static/js` - JavaScript bundles
- `/build/static/css` - CSS bundles
- `/build/static/media` - Assets

### Deployment Targets
- Static hosting: Netlify, Vercel, GitHub Pages
- Traditional: Any web server serving static files

---

## Git Workflow

### Branch Strategy
- Main branch: Production-ready code
- Feature branches: `claude/` prefix for AI-generated changes
- Current branch: `claude/claude-md-mibnyhjraof37sx3-01JzrJKSM3gv6Wjgg4zKmW1e`

### Commit Conventions
- Use clear, descriptive commit messages
- Focus on "why" rather than "what"
- Keep commits atomic and focused

### Ignored Files
- `/node_modules` - Dependencies
- `/build` - Build output
- `.env.*` - Environment variables
- Coverage reports

---

## Common Pitfalls & Solutions

### 1. Cart State Not Updating
**Problem:** Direct mutation of cart object
**Solution:** Always use spread operator for immutable updates

### 2. React Key Warnings
**Problem:** Missing or non-unique keys in lists
**Solution:** Use item.id for menu items, ensure uniqueness

### 3. Hover Effects Not Working
**Problem:** Event handlers not properly bound
**Solution:** Use arrow functions or bind in event handler

### 4. Mobile Cart Not Showing
**Problem:** `showCart` state not toggling correctly
**Solution:** Verify `setShowCart` is called with functional update

### 5. Image Loading Issues
**Problem:** Unsplash URLs may be slow or blocked
**Solution:** Consider local images or CDN alternatives for production

---

## Performance Considerations

### Optimizations in Place
1. **Object-based cart** - O(1) lookups instead of O(n) array searches
2. **Conditional rendering** - Cart hidden when empty
3. **Lazy evaluation** - Calculations only when needed
4. **Minimal re-renders** - State lifted only when necessary

### Future Optimization Opportunities
1. **React.memo** - Memoize MenuCard components
2. **useMemo** - Memoize expensive calculations (category grouping)
3. **useCallback** - Memoize event handlers
4. **Code splitting** - Split by route if adding routing
5. **Image optimization** - Use next-gen formats, lazy loading

---

## Extending the Application

### Adding New Features

#### Routing
Recommend: React Router
- Add pages (Menu, Cart, Checkout)
- Preserve cart state across routes

#### Backend Integration
- Replace menuData.js with API calls
- Add loading states
- Error handling for failed requests

#### Authentication
- Expand ModalsForm for login/signup
- Persist user session
- User-specific carts

#### Checkout Flow
- Multi-step checkout form
- Payment integration
- Order confirmation

#### Persistence
- localStorage for cart persistence
- Session management
- Order history

---

## Dependencies Management

### Installing New Packages
```bash
npm install <package-name>
```

### Updating Dependencies
```bash
npm update                 # Update all packages
npm install <package>@latest  # Update specific package
```

### Checking for Updates
```bash
npm outdated
```

---

## Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
PORT=3001 npm start
```

**Module Not Found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Fails**
```bash
# Clear build cache
rm -rf build
npm run build
```

---

## Resources

### Official Documentation
- [React Docs](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Lucide React Icons](https://lucide.dev/)

### Project-Specific Files
- `README.md` - Create React App documentation
- `package.json` - Dependencies and scripts
- `src/data/menuData.js` - Menu items structure reference
- `src/styles/styles.js` - Complete style definitions

---

## AI Assistant Guidelines

### When Modifying This Codebase

1. **Preserve Educational Comments** - This codebase has extensive comments for learning purposes. Maintain this pattern when adding code.

2. **Respect Data Structures** - The cart uses an object structure for performance. Don't convert to arrays without good reason.

3. **Follow Existing Patterns** - Match the coding style, component structure, and naming conventions already in place.

4. **Test Changes** - Always run `npm start` to verify changes work in the browser.

5. **Document Changes** - Update this CLAUDE.md file when adding significant features or changing architecture.

6. **Consider Responsiveness** - All UI changes should work on both mobile and desktop.

7. **Maintain Type Consistency** - No TypeScript, keep using PropTypes comments or JSDoc if adding type info.

8. **CSS-in-JS First** - Add styles to `styles.js` rather than creating new CSS files.

9. **State Management** - Think carefully about where state belongs (local vs lifted).

10. **Git Workflow** - Commit frequently with clear messages, push to the correct branch.

---

## Changelog

**2025-11-23** - Initial CLAUDE.md creation
- Documented complete codebase structure
- Added development workflows and conventions
- Included component architecture and state management patterns
- Provided AI assistant guidelines

---

*This document should be updated whenever significant changes are made to the codebase architecture, component structure, or development workflows.*
