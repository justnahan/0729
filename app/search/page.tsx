'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { ProductCard } from '@/components/product-card'
import { Search, Filter, ArrowLeft, X } from 'lucide-react'

interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

const categories = [
  { id: 'all', label: '全部商品' },
  { id: 'food', label: '食品飲料' },
  { id: 'daily', label: '生活用品' },
  { id: 'personal', label: '個人護理' },
  { id: 'fashion', label: '服飾配件' },
  { id: 'electronics', label: '3C電子' }
]

const sortOptions = [
  { id: 'relevance', label: '相關性' },
  { id: 'price-low', label: '價格低到高' },
  { id: 'price-high', label: '價格高到低' },
  { id: 'newest', label: '最新商品' }
]

async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products')
    if (!response.ok) throw new Error('Failed to fetch')
    return response.json()
  } catch (error) {
    // Fallback to local JSON if API fails
    const response = await fetch('/products.json')
    return response.json()
  }
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSort, setSelectedSort] = useState('relevance')

  // Load products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (error) {
        console.error('Failed to load products:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  // Filter and sort products based on search criteria
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query)
      )
    }

    // Filter by category (simplified - in real app would have product categories)
    if (selectedCategory !== 'all') {
      // Mock category filtering based on product name keywords
      const categoryKeywords: Record<string, string[]> = {
        food: ['飲料', '食品', '零食', '咖啡', '茶', '水', '牛奶'],
        daily: ['清潔', '洗衣', '衛生紙', '垃圾袋', '生活'],
        personal: ['護膚', '洗髮', '牙膏', '面膜', '香水'],
        fashion: ['衣服', '鞋子', '包包', '配件', '運動'],
        electronics: ['手機', '電腦', '耳機', '充電', '3C']
      }
      
      const keywords = categoryKeywords[selectedCategory] || []
      filtered = filtered.filter(product =>
        keywords.some(keyword => product.name.includes(keyword))
      )
    }

    // Sort products
    switch (selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price_in_cents - b.price_in_cents)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price_in_cents - a.price_in_cents)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        // Keep original order for relevance
        break
    }

    return filtered
  }, [products, searchQuery, selectedCategory, selectedSort])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Update URL with search query
    const url = new URL(window.location.href)
    if (searchQuery.trim()) {
      url.searchParams.set('q', searchQuery.trim())
    } else {
      url.searchParams.delete('q')
    }
    window.history.replaceState({}, '', url.toString())
  }

  const clearSearch = () => {
    setSearchQuery('')
    const url = new URL(window.location.href)
    url.searchParams.delete('q')
    window.history.replaceState({}, '', url.toString())
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首頁
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-xl font-bold text-gray-900">商品搜尋</h1>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋商品名稱..."
              className="pl-12 pr-12 py-3 text-lg"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">分類：</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    size="sm"
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? 'bg-[#FF6B35] hover:bg-orange-600 text-white'
                        : 'hover:border-[#FF6B35] hover:text-[#FF6B35]'
                    }
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm font-medium text-gray-700">排序：</span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            {loading ? (
              <Skeleton className="h-5 w-32" />
            ) : (
              <>
                找到 <span className="font-semibold text-gray-900">{filteredProducts.length}</span> 件商品
                {searchQuery && (
                  <>
                    ，關鍵字：
                    <Badge variant="secondary" className="ml-1 text-[#FF6B35] bg-orange-50">
                      {searchQuery}
                    </Badge>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="p-0">
                  <Skeleton className="aspect-square rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              沒有找到相關商品
            </h2>
            <p className="text-gray-600 mb-8">
              請嘗試調整搜尋關鍵字或分類篩選條件
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={clearSearch}
                variant="outline"
                className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50"
              >
                清除搜尋條件
              </Button>
              <Link href="/products">
                <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                  瀏覽所有商品
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}