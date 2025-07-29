'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Plus } from 'lucide-react'

interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

interface ProductCardProps {
  product: Product
}

function formatPrice(cents: number): string {
  return `NT$${(cents / 100).toLocaleString()}`
}

export function ProductCard({ product }: ProductCardProps) {
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

  const handleQuickView = () => {
    // Navigate to product detail page
    window.location.href = `/products/${product.id}`
  }

  return (
    <Card className="group hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden rounded-t-lg cursor-pointer" onClick={handleQuickView}>
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={false}
            unoptimized={false}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
              <Plus className="w-5 h-5 text-[#FF6B35]" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-[#FF6B35] transition-colors" onClick={handleQuickView}>
          {product.name}
        </CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Badge variant="secondary" className="text-[#FF6B35] bg-orange-50 w-fit">
              預估價格
            </Badge>
            <span className="text-2xl font-bold text-[#FF6B35]">
              {formatPrice(product.price_in_cents)}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Button 
              onClick={handleAddToCart}
              className="bg-[#FF6B35] hover:bg-orange-600 text-white font-medium px-6"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              立即下單
            </Button>
            <Button 
              variant="outline"
              onClick={handleQuickView}
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50 text-sm px-6"
            >
              查看詳情
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}