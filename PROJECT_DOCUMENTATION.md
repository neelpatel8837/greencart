# GreenCart - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Frontend](#frontend)
5. [Backend](#backend)
6. [Database](#database)
7. [Authentication & Authorization](#authentication--authorization)
8. [Existing Features](#existing-features)
9. [Environment Variables](#environment-variables)
10. [Package Configuration](#package-configuration)
11. [Testing](#testing)
12. [Build Process](#build-process)
13. [Deployment](#deployment)
14. [Git & GitHub](#git--github)
15. [Potential CI/CD Setup](#potential-cicd-setup)
16. [Known Issues & Recommendations](#known-issues--recommendations)

---

## Project Overview

**Application Purpose:**
GreenCart is a full-featured e-commerce web application for grocery products. It enables users to browse products, manage shopping carts, place orders via Cash on Delivery (COD), and manage their accounts. The application includes a seller/admin panel for product management, inventory control, and order viewing.

**Features:**
- Product listing with category-based browsing
- Product search functionality
- Shopping cart management (add, update, remove items)
- User authentication (registration and login)
- Address management for shipping
- Order placement via Cash on Delivery (COD)
- Order history for users
- Seller/Admin panel for:
  - Adding new products with image uploads
  - Managing product inventory (in-stock toggle)
  - Viewing all customer orders
- Responsive UI design for mobile and desktop

**Overall Architecture:**
- **Monorepo Structure:** Frontend and backend are separate folders within the same repository
- **Frontend:** React SPA with Vite as the build tool
- **Backend:** Express.js REST API server
- **Communication:** Axios with HTTP-only cookies for authentication
- **Proxy Configuration:** Vite proxies `/api` requests to backend at `http://localhost:4000`
- **State Management:** React Context API (AppContext) for global state
- **Image Storage:** Cloudinary for product image uploads
- **Database:** MongoDB (currently configured for MongoDB Atlas but connection is failing)

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0 | UI framework |
| React DOM | 19.0.0 | React DOM renderer |
| Vite | 6.2.0 | Build tool and dev server |
| React Router DOM | 7.5.0 | Client-side routing |
| Tailwind CSS | 4.1.3 | CSS framework |
| @tailwindcss/vite | 4.1.3 | Tailwind Vite plugin |
| Axios | 1.9.0 | HTTP client for API calls |
| React Hot Toast | 2.5.2 | Toast notifications |

**Dev Dependencies:**
- @vitejs/plugin-react: 4.3.4
- @eslint/js: 9.21.0
- eslint: 9.21.0
- eslint-plugin-react-hooks: 5.1.0
- eslint-plugin-react-refresh: 0.4.19
- globals: 15.15.0
- @types/react: 19.0.10
- @types/react-dom: 19.0.4

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | - | Runtime environment |
| Express | 5.1.0 | Web framework |
| Mongoose | 8.13.2 | MongoDB ODM |
| JWT (jsonwebtoken) | 9.0.2 | Token-based authentication |
| Bcryptjs | 3.0.2 | Password hashing |
| Cookie-parser | 1.4.7 | Cookie parsing middleware |
| CORS | 2.8.5 | Cross-origin resource sharing |
| Dotenv | 16.5.0 | Environment variable management |
| Cloudinary | 2.6.0 | Cloud image storage |
| Multer | 1.4.5-lts.2 | File upload handling |
| Razorpay | 2.9.6 | Payment gateway (NOT IMPLEMENTED) |
| Stripe | 18.0.0 | Payment gateway (NOT IMPLEMENTED) |

### Database

- **MongoDB:** MongoDB Atlas (configured but currently failing to connect due to DNS resolution error)
- **ODM:** Mongoose 8.13.2

### Authentication

- **Method:** JSON Web Tokens (JWT) stored in HTTP-only cookies
- **User Token:** `token` cookie (7-day expiration)
- **Seller Token:** `sellerToken` cookie (7-day expiration)
- **Password Hashing:** Bcryptjs with salt rounds of 10

---

## Folder Structure

```
E:\grocerystoreproject\
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   │   ├── favicon.svg
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/                  # Images, icons, and static data
│   │   │   ├── assets.js            # Exported assets, categories, dummy data
│   │   │   ├── [product images].png # Product images
│   │   │   └── [icons].svg          # UI icons
│   │   ├── components/              # Reusable UI components
│   │   │   ├── BestSeller.jsx
│   │   │   ├── BottomBanner.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Login.jsx           # User login/register modal
│   │   │   ├── MainBanner.jsx
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── NewsLetter.jsx
│   │   │   ├── ProductCard.jsx     # Product display card
│   │   │   └── seller/
│   │   │       └── SellerLogin.jsx # Seller login page
│   │   ├── context/                 # React Context providers
│   │   │   └── AppContext.jsx      # Global state management
│   │   ├── pages/                   # Page components
│   │   │   ├── AddAddress.jsx      # Add shipping address
│   │   │   ├── AllProducts.jsx     # All products listing
│   │   │   ├── Cart.jsx            # Shopping cart
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── MyOrders.jsx        # User order history
│   │   │   ├── ProductCategory.jsx # Category-based products
│   │   │   ├── ProductDetails.jsx  # Single product details
│   │   │   ├── Products.jsx
│   │   │   └── seller/             # Seller/admin pages
│   │   │       ├── AddProduct.jsx  # Add new product form
│   │   │       ├── Orders.jsx      # View all orders
│   │   │       ├── ProductList.jsx # Manage product inventory
│   │   │       └── SellerLayout.jsx # Seller layout wrapper
│   │   ├── App.jsx                 # Main app component with routing
│   │   ├── index.css               # Global styles and Tailwind imports
│   │   └── main.jsx                # React entry point
│   ├── .env                        # Frontend environment variables
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html                  # HTML template
│   ├── package.json                # Frontend dependencies
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js              # Vite configuration with proxy
│
├── server/                         # Backend Express application
│   ├── configs/                   # Configuration files
│   │   ├── cloudinary.js           # Cloudinary setup
│   │   ├── db.js                   # MongoDB connection
│   │   └── multer.js              # Multer file upload config
│   ├── controllers/               # Route controllers
│   │   ├── addressController.js   # Address CRUD operations
│   │   ├── cartController.js      # Cart update operations
│   │   ├── orderController.js     # Order placement and retrieval
│   │   ├── productController.js   # Product CRUD operations
│   │   ├── sellerController.js    # Seller authentication
│   │   └── userController.js      # User authentication
│   ├── middleware/                # Custom middleware
│   │   ├── authSeller.js          # Seller authentication middleware
│   │   └── authUser.js            # User authentication middleware
│   ├── models/                    # Mongoose schemas
│   │   ├── Address.js             # Address schema
│   │   ├── Order.js               # Order schema
│   │   ├── Product.js             # Product schema
│   │   └── User.js                # User schema
│   ├── routes/                    # API route definitions
│   │   ├── addressRoute.js        # /api/address routes
│   │   ├── cartRoute.js           # /api/cart routes
│   │   ├── orderRoute.js          # /api/order routes
│   │   ├── productRoute.js        # /api/product routes
│   │   ├── sellerRoute.js         # /api/seller routes
│   │   └── userRoute.js           # /api/user routes
│   ├── .env                       # Backend environment variables
│   ├── node_modules/              # Backend dependencies
│   ├── package.json               # Backend dependencies
│   ├── package-lock.json
│   └── server.js                  # Express server entry point
│
├── README.md                      # Project overview
└── PROJECT_DOCUMENTATION.md      # This file
```

---

## Frontend

### React Architecture

**Entry Point:** `client/src/main.jsx`
- Wraps app in `BrowserRouter` for routing
- Wraps app in `AppContextProvider` for global state
- Renders `App` component

**Main Component:** `client/src/App.jsx`
- Defines all application routes using React Router
- Conditionally renders Navbar and Footer based on route (hidden on seller pages)
- Renders Login modal when `showUserLogin` is true
- Uses React Hot Toast for notifications

### Routing

**Route Structure:**
```jsx
/                           → Home
/products                   → AllProducts
/products/:category         → ProductCategory
/products/:category/:id     → ProductDetails
/cart                       → Cart
/add-address                → AddAddress
/my-orders                  → MyOrders
/seller                     → SellerLogin (if not authenticated) or SellerLayout
/seller/                    → AddProduct (default seller page)
/seller/product-list        → ProductList
/seller/orders              → Orders
```

### State Management

**Context Provider:** `client/src/context/AppContext.jsx`

**Global State:**
- `user`: Current authenticated user object
- `authLoading`: Loading state for authentication check
- `isSeller`: Seller authentication status
- `showUserLogin`: Login modal visibility
- `products`: Array of all products
- `cartItems`: Object mapping product IDs to quantities
- `searchQuery`: Search query string

**Key Functions:**
- `fetchUser()`: Checks user authentication status via `/api/user/is-auth`
- `fetchSeller()`: Checks seller authentication status via `/api/seller/is-auth`
- `fetchProducts()`: Fetches all products via `/api/product/list`
- `addToCart(itemId)`: Adds item to cart or increments quantity
- `updateCartItem(itemId, quantity)`: Updates cart item quantity
- `removeFromCart(itemId)`: Decrements quantity or removes item
- `getCartCount()`: Returns total number of items in cart
- `getCartAmount()`: Calculates total cart amount with offer prices

**Cart Persistence:**
- Cart items are stored in MongoDB User model
- On user login, cart items are loaded from database
- Cart changes are synced to database via `/api/cart/update` (with debouncing via useEffect)
- Uses `hasMounted` ref to skip sync on initial page load

### API Integration

**Axios Configuration:**
```javascript
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '';  // Empty for Vite proxy
```

**API Endpoints Called:**
- `GET /api/user/is-auth` - Check user authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/logout` - User logout
- `GET /api/seller/is-auth` - Check seller authentication
- `POST /api/seller/login` - Seller login
- `GET /api/seller/logout` - Seller logout
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (seller only)
- `POST /api/product/stock` - Update product stock (seller only)
- `POST /api/cart/update` - Update cart items
- `POST /api/address/add` - Add shipping address
- `GET /api/address/get` - Get user addresses
- `POST /api/order/cod` - Place COD order
- `GET /api/order/user` - Get user orders
- `GET /api/order/seller` - Get all orders (seller only)

### Tailwind Configuration

**Setup:** `client/src/index.css`
```css
@import "tailwindcss";
```

**CSS Variables (index.css):**
```css
:root {
    --color-primary: #4fbf8b;
    --color-primary-dull: #44ae7c;
}
```

**Usage:** Tailwind classes used throughout components for styling. Custom CSS variables referenced in components via inline styles for hover effects.

### Components

**Public Components:**
- `Navbar.jsx`: Navigation with cart count, search, user menu, responsive mobile menu
- `Footer.jsx`: Footer with links and information
- `Login.jsx`: Modal for user registration and login
- `ProductCard.jsx`: Product display with add to cart functionality
- `MainBanner.jsx`: Hero banner
- `Categories.jsx`: Category display with images
- `BestSeller.jsx`: Best seller products section
- `BottomBanner.jsx`: Promotional banner
- `NewsLetter.jsx`: Newsletter subscription

**Seller Components:**
- `SellerLogin.jsx`: Seller login page
- `SellerLayout.jsx`: Layout wrapper with sidebar for seller pages

### Pages

**User Pages:**
- `Home.jsx`: Landing page with all sections
- `AllProducts.jsx`: Lists all products with search filtering
- `ProductCategory.jsx`: Lists products by category
- `ProductDetails.jsx`: Single product details with add to cart
- `Cart.jsx`: Shopping cart with address selection and checkout
- `AddAddress.jsx`: Form to add shipping address
- `MyOrders.jsx`: User's order history

**Seller Pages:**
- `AddProduct.jsx`: Form to add new products with image upload
- `ProductList.jsx`: Table view of all products with stock toggle
- `Orders.jsx`: View all customer orders

---

## Backend

### Express Server Architecture

**Entry Point:** `server/server.js`

**Configuration:**
- Port: 4000 (or `process.env.PORT`)
- CORS: Allowed origin `http://localhost:5173` with credentials
- Middleware: express.json(), cookie-parser(), cors()
- Async startup: Connects to MongoDB and Cloudinary before starting server

**Server Structure:**
```javascript
await connectDB();           // MongoDB connection
await connectCloudinary();   // Cloudinary configuration
// Middleware setup
// Route mounting
app.listen(port);
```

### Routes

**User Routes (`/api/user`):**
- `POST /register` - User registration
- `POST /login` - User login
- `GET /is-auth` - Check authentication (protected)
- `GET /logout` - User logout (protected)

**Seller Routes (`/api/seller`):**
- `POST /login` - Seller login
- `GET /is-auth` - Check seller authentication (protected)
- `GET /logout` - Seller logout

**Product Routes (`/api/product`):**
- `POST /add` - Add new product (protected, seller only, multipart/form-data)
- `GET /list` - Get all products
- `GET /id` - Get single product by ID
- `POST /stock` - Update product stock (protected, seller only)

**Cart Routes (`/api/cart`):**
- `POST /update` - Update cart items (protected, user only)

**Address Routes (`/api/address`):**
- `POST /add` - Add address (protected, user only)
- `GET /get` - Get user addresses (protected, user only)

**Order Routes (`/api/order`):**
- `POST /cod` - Place COD order (protected, user only)
- `GET /user` - Get user orders (protected, user only)
- `GET /seller` - Get all orders (protected, seller only)

### Controllers

**userController.js:**
- `register`: Creates user, hashes password, sets JWT cookie
- `login`: Validates credentials, sets JWT cookie
- `isAuth`: Returns authenticated user data
- `logout`: Clears JWT cookie

**sellerController.js:**
- `sellerLogin`: Validates email/password against env vars, sets sellerToken cookie
- `isSellerAuth`: Returns seller authentication status
- `sellerLogout`: Clears sellerToken cookie

**productController.js:**
- `addProduct`: Uploads images to Cloudinary, creates product in database
- `productList`: Returns all products
- `productById`: Returns single product by ID
- `changeStock`: Updates product inStock status

**cartController.js:**
- `updateCart`: Updates user's cartItems in database

**orderController.js:**
- `placeOrderCOD`: Creates order with COD payment, calculates amount with 2% tax
- `getUserOrders`: Returns user's orders with populated product and address data
- `getAllOrders`: Returns all orders for seller view

**addressController.js:**
- `addAddress`: Creates new address with userId from auth middleware
- `getAddress`: Returns all addresses for authenticated user

### Middleware

**authUser.js:**
- Verifies `token` cookie
- Decodes JWT using `JWT_SECRET`
- Fetches user from database
- Attaches user to `req.user`
- Returns 401 if not authenticated

**authSeller.js:**
- Verifies `sellerToken` cookie
- Decodes JWT using `JWT_SECRET`
- Checks if email matches `SELLER_EMAIL` from environment
- Returns error if not authorized

### Services

**Cloudinary Integration (`configs/cloudinary.js`):**
- Configured with environment variables
- Used in `productController.js` for image uploads
- Uploads images with `resource_type: 'image'`
- Returns secure URLs for stored images

**Multer Configuration (`configs/multer.js`):**
- Uses disk storage without destination configuration (uses temp directory)
- Used for multipart form data handling in product upload

---

## Database

### MongoDB Connection

**Configuration:** `server/configs/db.js`
- Connection string from `process.env.MONGODB_URI`
- Uses Mongoose connect
- **CURRENT ISSUE:** DNS resolution failure for MongoDB Atlas cluster

**Connection Status:**
- ❌ **FAILING:** `querySrv ENOTFOUND _mongodb._tcp.[cluster-name].mongodb.net`
- Server starts but database operations will fail
- Need to either fix Atlas connection or switch to local MongoDB

### Models/Schemas

**User Model (`server/models/User.js`):**
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  cartItems: Object (default: {})
}
```
- Collection name: `user`
- `minimize: false` option to preserve empty objects

**Product Model (`server/models/Product.js`):**
```javascript
{
  name: String (required),
  description: Array (required),
  price: Number (required),
  offerPrice: Number (required),
  image: Array (required),
  category: String (required),
  inStock: Boolean (default: true)
}
```
- Collection name: `product`
- Timestamps enabled

**Order Model (`server/models/Order.js`):**
```javascript
{
  userId: ObjectId (ref: 'user', required),
  items: [{
    product: ObjectId (ref: 'product', required),
    quantity: Number (required)
  }],
  amount: Number (required),
  address: ObjectId (ref: 'address', required),
  status: String (default: 'Order Placed'),
  paymentType: String (required),
  isPaid: Boolean (default: false)
}
```
- Collection name: `order`
- Timestamps enabled

**Address Model (`server/models/Address.js`):**
```javascript
{
  userId: String (required),
  firstName: String (required),
  lastName: String (required),
  email: String (required),
  street: String (required),
  city: String (required),
  state: String (required),
  zipcode: Number (required),
  country: String (required),
  phone: String (required)
}
```
- Collection name: `address`
- Note: `userId` is stored as String, not ObjectId

### Relationships

**User → Cart:** Embedded in User document as `cartItems` object
**User → Orders:** One-to-many via `userId` reference in Order
**User → Addresses:** One-to-many via `userId` in Address
**Order → User:** Many-to-one via `userId` reference
**Order → Products:** Many-to-many via `items.product` references
**Order → Address:** Many-to-one via `address` reference

### Important Collections

1. **user** - User accounts with cart data
2. **product** - Product catalog
3. **order** - Customer orders
4. **address** - Shipping addresses

---

## Authentication & Authorization

### JWT Implementation

**User Authentication:**
- Token stored in HTTP-only cookie named `token`
- Secret: `process.env.JWT_SECRET`
- Expiration: 7 days
- Payload: `{ id: user._id }`
- Cookie options:
  ```javascript
  {
    httpOnly: true,
    secure: false,  // ⚠️ Should be true in production
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
  ```

**Seller Authentication:**
- Token stored in HTTP-only cookie named `sellerToken`
- Secret: `process.env.JWT_SECRET`
- Expiration: 7 days
- Payload: `{ email: sellerEmail }`
- Cookie options:
  ```javascript
  {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
  ```

### Login/Register Flow

**User Registration:**
1. Frontend: POST `/api/user/register` with `{ name, email, password }`
2. Backend: Validates input, checks for existing user
3. Backend: Hashes password with bcrypt (10 rounds)
4. Backend: Creates user in database
5. Backend: Generates JWT token
6. Backend: Sets `token` cookie
7. Backend: Returns user data
8. Frontend: Updates user state, closes login modal

**User Login:**
1. Frontend: POST `/api/user/login` with `{ email, password }`
2. Backend: Finds user by email
3. Backend: Compares password hash
4. Backend: Generates JWT token
5. Backend: Sets `token` cookie
6. Backend: Returns user data
7. Frontend: Updates user state, closes login modal

**Seller Login:**
1. Frontend: POST `/api/seller/login` with `{ email, password }`
2. Backend: Compares against `process.env.SELLER_EMAIL` and `process.env.SELLER_PASSWORD`
3. Backend: Generates JWT token with email
4. Backend: Sets `sellerToken` cookie
5. Backend: Returns success
6. Frontend: Sets `isSeller` state, navigates to seller panel

### Token Handling

**Axios Configuration:**
```javascript
axios.defaults.withCredentials = true;  // Sends cookies with requests
```

**Middleware Verification:**
- `authUser`: Extracts `token` from cookies, verifies JWT, fetches user
- `authSeller`: Extracts `sellerToken` from cookies, verifies JWT, checks email

### Protected Routes

**User Protected Routes:**
- `/api/user/is-auth`
- `/api/user/logout`
- `/api/cart/update`
- `/api/address/add`
- `/api/address/get`
- `/api/order/cod`
- `/api/order/user`

**Seller Protected Routes:**
- `/api/seller/is-auth`
- `/api/product/add`
- `/api/product/stock`
- `/api/order/seller`

### Role-Based Access

**User Role:**
- Can browse products
- Can manage cart
- Can place orders
- Can view own orders
- Can manage addresses

**Seller Role:**
- Can add products
- Can update product stock
- Can view all orders
- **Note:** Single seller account (no multi-tenant seller system)

---

## Existing Features

### 1. Product Browsing (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User loads application → `AppContext` calls `fetchProducts()`
2. Frontend: GET `/api/product/list`
3. Backend: Returns all products from database
4. Frontend: Stores in `products` state
5. Components display products (Home, AllProducts, ProductCategory)

**Related Files:**
- Frontend: `client/src/context/AppContext.jsx`, `client/src/pages/AllProducts.jsx`, `client/src/pages/ProductCategory.jsx`
- Backend: `server/controllers/productController.js`, `server/routes/productRoute.js`

### 2. Product Search (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User types in search box in Navbar
2. Frontend: Updates `searchQuery` state
3. Frontend: `AllProducts` filters `products` array by name (client-side)
4. Frontend: Displays filtered results

**Related Files:**
- Frontend: `client/src/components/Navbar.jsx`, `client/src/pages/AllProducts.jsx`

### 3. Shopping Cart (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User clicks "Add to Cart" on product
2. Frontend: `addToCart(productId)` called
3. Frontend: Updates local `cartItems` state
4. Frontend: `useEffect` detects change, calls `/api/cart/update`
5. Backend: Updates user's `cartItems` in database
6. Frontend: Shows toast notification

**Related Files:**
- Frontend: `client/src/context/AppContext.jsx`, `client/src/pages/Cart.jsx`, `client/src/components/ProductCard.jsx`
- Backend: `server/controllers/cartController.js`, `server/routes/cartRoute.js`

### 4. User Authentication (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User opens login modal
2. User enters credentials and submits
3. Frontend: POST `/api/user/login` or `/api/user/register`
4. Backend: Validates and sets `token` cookie
5. Frontend: Calls `fetchUser()` to verify authentication
6. Frontend: Updates `user` state
7. Frontend: Closes modal, updates UI

**Related Files:**
- Frontend: `client/src/components/Login.jsx`, `client/src/context/AppContext.jsx`
- Backend: `server/controllers/userController.js`, `server/routes/userRoute.js`, `server/middleware/authUser.js`

### 5. Address Management (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User navigates to `/add-address`
2. User fills address form
3. Frontend: POST `/api/address/add` with address data
4. Backend: Creates address with `userId` from auth middleware
5. Frontend: Navigates to cart page
6. On cart page, Frontend: GET `/api/address/get`
7. Backend: Returns user's addresses
8. Frontend: Displays for selection

**Related Files:**
- Frontend: `client/src/pages/AddAddress.jsx`, `client/src/pages/Cart.jsx`
- Backend: `server/controllers/addressController.js`, `server/routes/addressRoute.js`

### 6. Order Placement (COD - IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User selects address and payment method (COD)
2. User clicks "Place Order"
3. Frontend: POST `/api/order/cod` with `{ userId, items, address }`
4. Backend: Validates address and items
5. Backend: Calculates amount with 2% tax
6. Backend: Creates order in database
7. Backend: Returns success
8. Frontend: Clears cart, navigates to `/my-orders`

**Related Files:**
- Frontend: `client/src/pages/Cart.jsx`
- Backend: `server/controllers/orderController.js`, `server/routes/orderRoute.js`

### 7. Order History (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User navigates to `/my-orders`
2. Frontend: GET `/api/order/user`
3. Backend: Returns user's orders with populated products and addresses
4. Frontend: Displays order list

**Related Files:**
- Frontend: `client/src/pages/MyOrders.jsx`
- Backend: `server/controllers/orderController.js`, `server/routes/orderRoute.js`

### 8. Seller Authentication (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. User navigates to `/seller`
2. Frontend: Checks `isSeller` state
3. If not authenticated, shows `SellerLogin`
4. User enters seller credentials
5. Frontend: POST `/api/seller/login`
6. Backend: Validates against environment variables
7. Backend: Sets `sellerToken` cookie
8. Frontend: Sets `isSeller` true, navigates to seller panel

**Related Files:**
- Frontend: `client/src/components/seller/SellerLogin.jsx`, `client/src/context/AppContext.jsx`
- Backend: `server/controllers/sellerController.js`, `server/routes/sellerRoute.js`, `server/middleware/authSeller.js`

### 9. Add Product (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. Seller navigates to `/seller`
2. Seller fills product form (name, description, category, prices)
3. Seller selects up to 4 images
4. Seller submits form
5. Frontend: POST `/api/product/add` with FormData (productData JSON + images)
6. Backend: Uploads images to Cloudinary
7. Backend: Creates product in database with image URLs
8. Frontend: Shows success toast, clears form

**Related Files:**
- Frontend: `client/src/pages/seller/AddProduct.jsx`
- Backend: `server/controllers/productController.js`, `server/routes/productRoute.js`

### 10. Product Inventory Management (IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. Seller navigates to `/seller/product-list`
2. Frontend: Displays all products in table
3. Seller toggles stock checkbox
4. Frontend: POST `/api/product/stock` with `{ id, inStock }`
5. Backend: Updates product's `inStock` field
6. Frontend: Refreshes product list

**Related Files:**
- Frontend: `client/src/pages/seller/ProductList.jsx`
- Backend: `server/controllers/productController.js`, `server/routes/productRoute.js`

### 11. View All Orders (Seller - IMPLEMENTED)

**Frontend-to-Backend Workflow:**
1. Seller navigates to `/seller/orders`
2. Frontend: GET `/api/order/seller`
3. Backend: Returns all orders with populated data
4. Frontend: Displays order list

**Related Files:**
- Frontend: `client/src/pages/seller/Orders.jsx`
- Backend: `server/controllers/orderController.js`, `server/routes/orderRoute.js`

### 12. Online Payment (NOT IMPLEMENTED)

**Status:** Razorpay and Stripe packages are installed but NOT implemented
- No payment integration code exists
- No payment routes defined
- Cart page shows "Online Payment" option but it's non-functional

**Related Files:**
- `server/package.json` (dependencies only)

---

## Environment Variables

### Backend Environment Variables (`server/.env`)

| Variable Name | Purpose | Where Used |
|---------------|---------|------------|
| `JWT_SECRET` | Secret key for JWT token signing and verification | `userController.js`, `sellerController.js`, `authUser.js`, `authSeller.js` |
| `NODE_ENV` | Environment mode (development/production) | `sellerController.js` (affects cookie security settings) |
| `SELLER_EMAIL` | Seller/admin email for authentication | `sellerController.js` |
| `SELLER_PASSWORD` | Seller/admin password for authentication | `sellerController.js` |
| `MONGODB_URI` | MongoDB connection string | `configs/db.js` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name for image storage | `configs/cloudinary.js` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `configs/cloudinary.js` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `configs/cloudinary.js` |

### Frontend Environment Variables (`client/.env`)

| Variable Name | Purpose | Where Used |
|---------------|---------|------------|
| `VITE_CURRENCY` | Currency symbol for display (e.g., ₹) | `AppContext.jsx`, multiple components |
| `VITE_BACKEND_URL` | Backend API base URL | `AppContext.jsx` (currently commented out, using proxy instead) |

**Note:** Frontend uses Vite proxy configuration in `vite.config.js` to proxy `/api` requests to `http://localhost:4000`. The `VITE_BACKEND_URL` is defined but not actively used.

---

## Package Configuration

### Frontend Package.json (`client/package.json`)

**Scripts:**
- `npm run dev` - Starts Vite development server (default port: 5173)
- `npm run build` - Builds production bundle
- `npm run lint` - Runs ESLint
- `npm run preview` - Previews production build locally

**Dependencies:**
- React ecosystem: react, react-dom, react-router-dom
- Build tool: vite
- Styling: tailwindcss, @tailwindcss/vite
- HTTP client: axios
- Notifications: react-hot-toast

**Dev Dependencies:**
- Vite plugin: @vitejs/plugin-react
- Linting: eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh
- Type definitions: @types/react, @types/react-dom
- Other: globals

### Backend Package.json (`server/package.json`)

**Scripts:**
- `npm start` - Starts production server with `node server.js`
- `npm run server` - Starts development server with `nodemon server.js` (auto-restart on changes)

**Dependencies:**
- Web framework: express
- Database: mongoose
- Authentication: jsonwebtoken, bcryptjs
- Middleware: cookie-parser, cors
- Config: dotenv
- File upload: multer
- Cloud storage: cloudinary
- Payment gateways: razorpay, stripe (NOT IMPLEMENTED)

**Type:** ES Modules (`"type": "module"`)

### Development Commands

**Frontend:**
```bash
cd client
npm install        # Install dependencies (not yet installed)
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run linter
```

**Backend:**
```bash
cd server
npm install        # Install dependencies (already installed)
npm run server     # Start development server with nodemon
npm start          # Start production server
```

---

## Testing

### Testing Frameworks

**Status:** NO testing framework is currently configured or implemented.

**Findings:**
- No test files found in the codebase
- No testing dependencies in package.json files
- No test scripts configured
- No test configuration files (jest.config.js, vitest.config.js, etc.)

**Test Commands:**
- None available

**Testing Coverage:**
- 0% - No tests exist

**Recommendation:**
- Consider adding Jest or Vitest for unit testing
- Consider adding React Testing Library for component testing
- Consider adding Supertest for API endpoint testing
- Add test scripts to package.json

---

## Build Process

### Install Dependencies

**Frontend:**
```bash
cd E:\grocerystoreproject\client
npm install
```
**Note:** `node_modules` folder does not currently exist in client folder. Dependencies need to be installed.

**Backend:**
```bash
cd E:\grocerystoreproject\server
npm install
```
**Note:** Backend dependencies are already installed (node_modules exists).

### Run Application Locally

**Prerequisites:**
1. MongoDB must be running (currently failing to connect to Atlas)
2. Both frontend and backend must be running simultaneously

**Start Backend (Terminal 1):**
```bash
cd E:\grocerystoreproject\server
npm run server
```
- Runs on `http://localhost:4000`
- Uses nodemon for auto-restart on file changes
- ⚠️ Will show MongoDB connection error until database is fixed

**Start Frontend (Terminal 2):**
```bash
cd E:\grocerystoreproject\client
npm run dev
```
- Runs on `http://localhost:5173`
- Proxies `/api` requests to backend at `http://localhost:4000`
- Hot module replacement enabled

### Build Frontend for Production

```bash
cd E:\grocerystoreproject\client
npm run build
```
- Output: `client/dist/` folder
- Static files ready for deployment
- Can be served with any static file server

### Build Backend for Production

Backend has no build step (Node.js). To run in production:
```bash
cd E:\grocerystoreproject\server
NODE_ENV=production npm start
```

### Production Considerations

**Frontend:**
- After build, serve `dist/` folder with nginx, Apache, or similar
- Set `VITE_BACKEND_URL` to production backend URL
- Remove Vite proxy configuration in production

**Backend:**
- Set `NODE_ENV=production`
- Use process manager like PM2 for uptime
- Configure MongoDB connection for production instance
- Set `secure: true` for cookies in production
- Update CORS allowed origins to production domain

---

## Deployment

### Existing Hosting Configuration

**Status:** No deployment configuration exists.

**Findings:**
- No Dockerfile
- No docker-compose.yml
- No deployment scripts
- No CI/CD workflows
- No hosting platform configuration (Vercel, Netlify, Heroku, etc.)
- No production environment configuration files

### Deployment Process

**Current Process:** Manual (not documented)

**Recommended Deployment Process:**

**Option 1: Separate Frontend/Backend Deployment**

**Frontend (Vercel/Netlify):**
1. Build frontend: `cd client && npm run build`
2. Deploy `dist/` folder to Vercel/Netlify
3. Set environment variable `VITE_BACKEND_URL` to production backend URL
4. Configure custom domain (optional)

**Backend (Render/Railway/Heroku/AWS):**
1. Push code to Git repository
2. Connect to hosting platform
3. Set environment variables (all from server/.env)
4. Deploy - platform will run `npm start`
5. Configure MongoDB Atlas for production database
6. Update CORS allowed origins to frontend domain

**Option 2: Single Server Deployment**

1. Deploy both to VPS (DigitalOcean, AWS EC2, etc.)
2. Use nginx to serve frontend static files
3. Configure nginx reverse proxy for `/api` to backend port
4. Use PM2 to manage backend process
5. Configure SSL certificate (Let's Encrypt)

### Production Setup

**Required Configuration Changes:**

**Backend (`server/.env`):**
- Set `NODE_ENV=production`
- Update `MONGODB_URI` to production MongoDB instance
- Update CORS allowed origins to production frontend domain
- Ensure Cloudinary API keys are for production

**Frontend (`client/.env`):**
- Set `VITE_BACKEND_URL` to production backend URL

**Cookie Security:**
- In `userController.js`: Set `secure: true` for cookies
- In `sellerController.js`: `secure` should be true in production (already configured)

### CI/CD Status

**Status:** NOT CONFIGURED

**Findings:**
- No `.github/workflows/` folder exists in project root
- No GitHub Actions workflows
- No automated testing, building, or deployment

---

## Git & GitHub

### Current Branch Information

**Repository:** https://github.com/neelpatel8837/greencart.git

**Current Branch:** `main`

**Recent Activity:**
- Branch and origin/main have diverged
- Recent commit: `872eee1` - "readme addition"
- Successfully pushed to origin/main

### Repository Structure

**Git Repository Status:**
- Repository is initialized
- Remote origin is configured
- Main branch exists
- No `.github/` folder at project root (no workflows)

### GitHub Actions Workflows

**Status:** NO WORKFLOWS EXIST

**Findings:**
- No `.github/workflows/` directory in project root
- No CI/CD automation
- No automated testing
- No automated deployment

**Note:** Workflow files exist in `node_modules` of some dependencies (busboy, streamsearch, undefsafe) but these are for the libraries themselves, not for this project.

---

## Potential CI/CD Setup

### Recommended CI Checks

**For Frontend:**
1. **Lint Check:** Run ESLint to catch code style issues
   ```yaml
   - run: cd client && npm run lint
   ```

2. **Type Check:** If TypeScript is added in future
   ```yaml
   - run: cd client && npm run type-check
   ```

3. **Build Check:** Verify frontend builds successfully
   ```yaml
   - run: cd client && npm run build
   ```

**For Backend:**
1. **Lint Check:** Add ESLint for backend JavaScript
   ```yaml
   - run: cd server && npm run lint
   ```

2. **Dependency Audit:** Check for security vulnerabilities
   ```yaml
   - run: cd server && npm audit
   - run: cd client && npm audit
   ```

### Automated Tests

**Unit Tests (Future):**
- Test utility functions
- Test context providers
- Test controller functions
- Test model validations

**Integration Tests (Future):**
- Test API endpoints with test database
- Test authentication flows
- Test cart operations
- Test order placement

**E2E Tests (Future):**
- Test user registration/login flow
- Test product browsing
- Test add to cart
- Test checkout process
- Test seller product management

### Build Steps

**Frontend Build:**
```yaml
- name: Build Frontend
  run: |
    cd client
    npm ci
    npm run build
```

**Backend Build:**
```yaml
- name: Backend Setup
  run: |
    cd server
    npm ci
```

### Deployment Strategy

**Option 1: Separate Deployments (Recommended for MERN)**

**Frontend Deployment (Vercel):**
```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
    vercel-args: '--prod'
    working-directory: ./client
```

**Backend Deployment (Render/Railway):**
- Connect GitHub repository to platform
- Auto-deploy on push to main branch
- Set environment variables in platform dashboard

**Option 2: Docker Deployment**

**Dockerfile for Backend:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm ci --only=production
COPY server/ ./
EXPOSE 4000
CMD ["npm", "start"]
```

**Dockerfile for Frontend:**
```dockerfile
FROM node:20-alpine as build
WORKDIR /app
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  backend:
    build: ./server
    ports:
      - "4000:4000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/greencart
    depends_on:
      - mongo

  frontend:
    build: ./client
    ports:
      - "80:80"

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### Recommended GitHub Actions Workflow Structure

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install Frontend Dependencies
        run: cd client && npm ci
      - name: Install Backend Dependencies
        run: cd server && npm ci
      - name: Lint Frontend
        run: cd client && npm run lint
      - name: Lint Backend
        run: cd server && npm run lint
      - name: Build Frontend
        run: cd client && npm run build
      - name: Run Tests (when added)
        run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Deploy Backend
        # Add backend deployment steps
      - name: Deploy Frontend
        # Add frontend deployment steps
```

---

## Known Issues & Recommendations

### Critical Issues

**1. MongoDB Connection Failure (CRITICAL)**
- **Issue:** DNS resolution error for MongoDB Atlas cluster
- **Error:** `querySrv ENOTFOUND _mongodb._tcp.[cluster-name].mongodb.net`
- **Impact:** All database operations fail, application cannot function
- **Root Cause:** Cluster may not exist, connection string may be incorrect, or network issue
- **Recommendation:**
  - Verify MongoDB Atlas cluster exists and is active
  - Get correct connection string from Atlas dashboard
  - Whitelist IP address in Atlas Network Access
  - Alternatively, switch to local MongoDB for development

**2. Frontend Dependencies Not Installed**
- **Issue:** `client/node_modules` folder does not exist
- **Impact:** Frontend cannot run
- **Recommendation:** Run `cd client && npm install`

**3. Insecure Cookie Configuration in Development**
- **Issue:** User cookies have `secure: false` in both development and production
- **Impact:** Cookies sent over unencrypted HTTP in production (security risk)
- **Location:** `server/controllers/userController.js` lines 28, 63
- **Recommendation:** Set `secure: process.env.NODE_ENV === 'production'`

### Security Concerns

**1. Weak JWT Secret**
- **Issue:** JWT_SECRET in `.env` is weak and predictable
- **Impact:** If compromised, attacker can forge tokens
- **Recommendation:** Use strong, randomly generated secret (at least 32 characters)

**2. Hardcoded Seller Credentials**
- **Issue:** Seller email and password stored in `.env` file
- **Impact:** If `.env` is committed to git, credentials are exposed
- **Recommendation:**
  - Ensure `.env` is in `.gitignore` (already in client, but need server `.gitignore`)
  - Use secrets manager in production
  - Consider implementing proper multi-seller system with database authentication

**3. No Rate Limiting**
- **Issue:** No rate limiting on API endpoints
- **Impact:** Vulnerable to brute force attacks on login
- **Recommendation:** Add rate limiting middleware (express-rate-limit)

**4. No Input Validation Library**
- **Issue:** Manual validation in controllers
- **Impact:** Potential for validation bypass
- **Recommendation:** Use validation library like Joi or Zod

**5. No CSRF Protection**
- **Issue:** No CSRF tokens for state-changing operations
- **Impact:** Vulnerable to cross-site request forgery
- **Recommendation:** Implement CSRF protection (less critical with sameSite cookies)

**6. Address.userId as String Instead of ObjectId**
- **Issue:** Address model stores `userId` as String, not ObjectId
- **Impact:** Type inconsistency, potential issues with population
- **Location:** `server/models/Address.js` line 4
- **Recommendation:** Change to `mongoose.Schema.Types.ObjectId` with ref to 'user'

### Missing Features

**1. Online Payment Integration**
- **Issue:** Razorpay and Stripe packages installed but not implemented
- **Impact:** Only COD payment available
- **Recommendation:** Implement payment gateway integration or remove unused dependencies

**2. Password Reset**
- **Issue:** No password reset functionality
- **Impact:** Users cannot recover forgotten passwords
- **Recommendation:** Implement email-based password reset with tokens

**3. Email Verification**
- **Issue:** No email verification for registration
- **Impact:** Users can register with fake emails
- **Recommendation:** Implement email verification with Nodemailer

**4. Order Status Updates**
- **Issue:** Order status defaults to "Order Placed" but cannot be updated
- **Impact:** No order tracking for users
- **Recommendation:** Add order status workflow (Placed → Processing → Shipped → Delivered)

**5. Product Reviews/Ratings**
- **Issue:** No review or rating system
- **Impact:** Users cannot provide feedback
- **Recommendation:** Implement review system with ratings

**6. Search Backend Implementation**
- **Issue:** Search is client-side only
- **Impact:** Inefficient for large product catalogs
- **Recommendation:** Implement backend search with MongoDB text indexing

**7. Pagination**
- **Issue:** No pagination on product lists
- **Impact:** Performance issues with many products
- **Recommendation:** Implement pagination on product endpoints

**8. Product Filtering/Sorting**
- **Issue:** No advanced filtering or sorting options
- **Impact:** Poor user experience for large catalogs
- **Recommendation:** Add filters (price range, category, rating) and sorting options

### Code Quality Issues

**1. No Testing**
- **Issue:** Zero test coverage
- **Impact:** No confidence in code changes, potential regressions
- **Recommendation:** Add unit, integration, and E2E tests

**2. No TypeScript**
- **Issue:** Plain JavaScript used throughout
- **Impact:** No type safety, potential runtime errors
- **Recommendation:** Consider migrating to TypeScript (optional)

**3. No ESLint for Backend**
- **Issue:** Only frontend has ESLint configured
- **Impact:** Inconsistent code style, potential errors
- **Recommendation:** Add ESLint configuration for backend

**4. Inconsistent Error Handling**
- **Issue:** Some controllers return JSON errors, some may throw
- **Impact:** Inconsistent API responses
- **Recommendation:** Standardize error handling middleware

**5. No Logging**
- **Issue:** Only console.log statements
- **Impact:** Difficult to debug production issues
- **Recommendation:** Implement structured logging (Winston, Pino)

### Infrastructure Issues

**1. No CI/CD**
- **Issue:** No automated testing, building, or deployment
- **Impact:** Manual processes, prone to errors
- **Recommendation:** Set up GitHub Actions workflow

**2. No Docker Configuration**
- **Issue:** No containerization
- **Impact:** Inconsistent environments, difficult deployment
- **Recommendation:** Add Dockerfile and docker-compose.yml

**3. CORS Limited to Localhost**
- **Issue:** CORS only allows `http://localhost:5173`
- **Impact:** Cannot deploy to production without configuration change
- **Location:** `server/server.js` line 20
- **Recommendation:** Use environment variable for allowed origins

**4. No Environment-Specific Configs**
- **Issue:** Single `.env` file for all environments
- **Impact:** Risk of using development config in production
- **Recommendation:** Use `.env.development`, `.env.production`, etc.

**5. No Health Check Endpoint**
- **Issue:** No `/health` endpoint for monitoring
- **Impact:** Difficult to monitor application status
- **Recommendation:** Add health check endpoint that tests database connection

### Performance Issues

**1. No Response Compression**
- **Issue:** No compression middleware
- **Impact:** Larger payload sizes, slower load times
- **Recommendation:** Add compression middleware

**2. No Caching Strategy**
- **Issue:** No caching for static assets or API responses
- **Impact:** Unnecessary database queries, slower response times
- **Recommendation:** Implement Redis caching for frequently accessed data

**3. Image Optimization**
- **Issue:** No image optimization
- **Impact:** Large image files slow page loads
- **Recommendation:** Implement image optimization with Cloudinary transformations

### Documentation Issues

**1. No API Documentation**
- **Issue:** No Swagger/OpenAPI documentation
- **Impact:** Difficult for other developers to understand API
- **Recommendation:** Add Swagger/OpenAPI documentation

**2. No Code Comments**
- **Issue:** Minimal comments in code
- **Impact:** Difficult to understand complex logic
- **Recommendation:** Add JSDoc comments for functions

**3. No Contributing Guidelines**
- **Issue:** No CONTRIBUTING.md
- **Impact:** Difficult for contributors to know how to contribute
- **Recommendation:** Add CONTRIBUTING.md

### Database Issues

**1. No Database Indexes**
- **Issue:** No indexes defined in models
- **Impact:** Slow queries as data grows
- **Recommendation:** Add indexes on frequently queried fields (email, category, etc.)

**2. No Database Backup Strategy**
- **Issue:** No backup automation
- **Impact:** Risk of data loss
- **Recommendation:** Set up automated backups (MongoDB Atlas has built-in backups)

**3. No Migration System**
- **Issue:** No database migration tool
- **Impact:** Difficult to manage schema changes
- **Recommendation:** Add migration tool (migrate-mongo, or custom scripts)

### Priority Recommendations

**Immediate (Blockers):**
1. Fix MongoDB connection
2. Install frontend dependencies
3. Fix cookie security for production

**High Priority (Security & Stability):**
1. Strengthen JWT secret
2. Add rate limiting
3. Add backend ESLint
4. Implement input validation library
6. Add CORS environment variable

**Medium Priority (Features & Quality):**
1. Implement online payment or remove dependencies
2. Add testing framework and write tests
3. Set up CI/CD pipeline
4. Add Docker configuration
5. Implement order status updates
6. Add pagination to product lists

**Low Priority (Enhancements):**
1. Migrate to TypeScript (optional)
2. Add API documentation
3. Implement advanced search
4. Add product reviews
5. Implement caching strategy

---

## Document Information

**Generated:** 2026-11-23
**Project:** GreenCart
**Repository:** https://github.com/neelpatel8837/greencart.git
**Document Version:** 1.0
**Last Reviewed:** Project state as of analysis date

---

## Notes

- This documentation is based on actual code analysis
- Some features may be partially implemented or have bugs not yet discovered
- Environment variable values have been intentionally omitted for security
- Recommendations are based on best practices for MERN stack applications
