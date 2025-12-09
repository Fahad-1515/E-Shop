# E-Commerce
# Vue 3 + Vite

This is the frontend for the e-commerce application built using Vue 3 and Vite.

Features include:

1. Navigation & Layout

Responsive Navbar with links to Home, Cart, Login, and Register.

Footer component for consistent site layout.

Container & Grid layout for responsive product displays using Tailwind CSS.

2. Product Listing & Cards

Display of featured products in a grid.

Product Card showing:

Product image.

Product title (title).

Short description (truncated for long texts).

Price and discount price (if applicable).

“Add to Cart” button.

Link to product detail page.

Hover effects for cards (shadow and slight lift on hover).

3. Product Detail Page

Full product display:

Large image, multiple images (gallery support).

Product title, description, price, discount.

“Add to Cart” button.

Stock status and delivery information.

Organized with flex layout for image + details side by side on larger screens.

4. Shopping Cart

Display of all cart items with:

Product image.

Product title.

Price and discount price.

Quantity controls (+ / - buttons).

Remove item button.

Total number of items and total billing amount.

Persisted in localStorage to maintain cart between sessions.

Responsive layout for mobile and desktop.

5. Search Functionality

Search bar in Navbar with:

v-model binding for query.

Search triggered by Enter key or search button.

Redirect to /search page with query params.

Dynamic filtering of products based on search input.

Displays search results or fallback message if no products found.

6. Responsive Design

Mobile-first design using Tailwind CSS.

Flexible grid layouts: 1 column on mobile, up to 4 columns on large screens.

Flex and spacing utilities for proper alignment and padding.

Hover transitions for better UX.

7. User Interaction & Feedback

Alerts when trying to add out-of-stock items.

Buttons have hover states and clear visual feedback.

Quantity cannot go below 1 or exceed stock.
