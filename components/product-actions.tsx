'use client'

import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

interface ProductActionsProps {
  product: Product
}

export function ProductActions({ product }: ProductActionsProps) {
  const handleAddToCart = () => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    // Check if product already exists in cart
    const existingItemIndex = existingCart.findIndex((item: any) => item.id === product.id)
    
    if (existingItemIndex >= 0) {
      // Increase quantity if item exists
      existingCart[existingItemIndex].quantity += 1
    } else {
      // Add new item to cart
      const cartItem = {
        id: product.id,
        name: product.name,
        price: Math.round(product.price_in_cents / 100), // Convert to dollars
        quantity: 1,
        image: product.image_url,
        store: '店家資訊', // Default store info
        available: true
      }
      existingCart.push(cartItem)
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart))
    
    // Dispatch custom event to update cart counter
    window.dispatchEvent(new Event('cartUpdated'))
    
    // Show success feedback and navigate to cart
    alert(`${product.name} 已加入購物車！`)
    
    // Navigate to cart page
    window.location.href = '/cart'
  }

  const handleAddToWishlist = () => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    // Check if product already exists in cart
    const existingItemIndex = existingCart.findIndex((item: any) => item.id === product.id)
    
    if (existingItemIndex >= 0) {
      // Increase quantity if item exists
      existingCart[existingItemIndex].quantity += 1
    } else {
      // Add new item to cart
      const cartItem = {
        id: product.id,
        name: product.name,
        price: Math.round(product.price_in_cents / 100), // Convert to dollars
        quantity: 1,
        image: product.image_url,
        store: '店家資訊', // Default store info
        available: true
      }
      existingCart.push(cartItem)
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart))
    
    // Dispatch custom event to update cart counter
    window.dispatchEvent(new Event('cartUpdated'))
    
    // Show success feedback
    alert(`${product.name} 已加入購物清單！`)
  }

  return (
    <div className="space-y-3">
      <Button 
        size="lg" 
        className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white font-semibold h-14 text-lg"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        立即下單代買
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50 h-12"
        onClick={handleAddToWishlist}
      >
        加入購物清單
      </Button>
    </div>
  )
}