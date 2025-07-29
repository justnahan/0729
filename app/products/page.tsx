import { Metadata } from 'next'
import { Suspense } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ReloadButton } from '@/components/reload-button'
import { ProductCard } from '@/components/product-card'

export const metadata: Metadata = {
  title: '商品列表 | 現在買 NowBuy',
  description: '瀏覽社區共享購物平台的精選商品，找到最適合您的選擇',
  openGraph: {
    title: '商品列表 | 現在買 NowBuy',
    description: '瀏覽社區共享購物平台的精選商品',
    type: 'website',
  }
}

interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

async function fetchProducts(): Promise<Product[]> {
  try {
    // Server-side: read directly from JSON file for better performance
    const { promises: fs } = await import('fs')
    const path = await import('path')
    const jsonPath = path.join(process.cwd(), 'public', 'products.json')
    const fileContents = await fs.readFile(jsonPath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    // Fallback to API call if file read fails
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
      cache: 'no-store'
    })
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return response.json()
  }
}

function formatPrice(cents: number): string {
  return `NT$${(cents / 100).toLocaleString()}`
}


function LoadingGrid() {
  return (
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
  )
}

async function ProductGrid() {
  try {
    const products = await fetchProducts()
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  } catch {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">無法載入商品資訊</div>
        <ReloadButton />
      </div>
    )
  }
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頁面標題區 */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              社區共享購物
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              發現鄰里推薦的優質商品，享受便利的代買服務
            </p>
          </div>
        </div>
      </header>

      {/* 快速篩選區 */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {['全部商品', '食品飲料', '生活用品', '個人護理', '服飾配件', '3C電子'].map((category) => (
              <Button
                key={category}
                variant={category === '全部商品' ? 'default' : 'outline'}
                className={category === '全部商品' 
                  ? 'bg-[#FF6B35] hover:bg-orange-600 text-white' 
                  : 'border-gray-300 hover:border-[#FF6B35] hover:text-[#FF6B35]'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 主要內容區 */}
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<LoadingGrid />}>
          <ProductGrid />
        </Suspense>
      </main>

      {/* 底部CTA */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">找不到想要的商品？</h2>
          <p className="text-xl mb-6 opacity-90">
            發起自訂代買需求，讓鄰居幫您採購！
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-8"
          >
            自訂代買需求
          </Button>
        </div>
      </section>
    </div>
  )
}