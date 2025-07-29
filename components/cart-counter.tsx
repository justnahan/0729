'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'

export function CartCounter() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // Function to calculate cart count
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        const totalCount = cart.reduce((sum: number, item: any) => sum + (item.quantity || 0), 0)
        setCartCount(totalCount)
      } catch (error) {
        setCartCount(0)
      }
    }

    // Initial count
    updateCartCount()

    // Listen for storage changes (when cart is updated from other tabs/components)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cart') {
        updateCartCount()
      }
    }

    // Custom event listener for cart updates (when updated from same tab)
    const handleCartUpdate = () => {
      updateCartCount()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('cartUpdated', handleCartUpdate)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdated', handleCartUpdate)
    }
  }, [])

  return (
    <Link href="/cart">
      <Button
        variant="ghost"
        size="sm"
        className="relative text-gray-600 hover:text-[#FF6B35]"
      >
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <Badge 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-[#FF6B35] hover:bg-orange-600"
          >
            {cartCount}
          </Badge>
        )}
      </Button>
    </Link>
  )
}