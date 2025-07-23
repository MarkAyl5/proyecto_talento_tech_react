import React, { type JSX } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from './Layout'
import NotFoundPage from './components/NotFoundPage'
import Products from './components/Products/Products..tsx'
import AdminManagement from './components/AdminManagement'
import DetailedProduct from './components/DetailedProduct'
import HomePage from './components/HomePage'
import LoginPage from './pages/LoginPage'
import { AuthProvider, useAuthContext } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import CartPage from './pages/CartPage';
import ContactForm from './components/ContactForm';
import { ProductsProvider } from './contexts/ProductsContext';

function ProtectedRoute({ children, adminOnly = false }: { children: JSX.Element, adminOnly?: boolean }) {
  const { isAuthenticated, userRole } = useAuthContext();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (adminOnly && userRole !== "admin") return <Navigate to="/" replace />;
  return children;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'products', element: <Products /> },
      { path: 'producto/:id', element: <DetailedProduct /> },
      { path: 'cart', element: <ProtectedRoute><CartPage /></ProtectedRoute> },
      { path: 'admin', element: <ProtectedRoute adminOnly={true}><AdminManagement /></ProtectedRoute> },
      { path: 'contacto', element: <ContactForm /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <RouterProvider router={router} />
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
)
