import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { AdminLogin } from './pages/AdminLogin'
import { AdminPanel } from './pages/AdminPanel'
import { WhatsAppButton } from './components/ui/WhatsAppButton'
import { CartDrawer } from './components/cart/CartDrawer'
import { useState } from 'react'
import type { ReactNode } from 'react'

function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAdmin = localStorage.getItem('ricatipa_admin') === 'true'
  return isAdmin ? <>{children}</> : <Navigate to="/admin" replace />
}

function ShopLayout() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col bg-linen">
      <Header onCartOpen={function() { setCartOpen(true) }} />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer isOpen={cartOpen} onClose={function() { setCartOpen(false) }} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopLayout />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/panel" element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App