import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, MapPin, Clock } from 'lucide-react'
import { ProductActions } from '@/components/product-actions'

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

async function getProduct(id: string): Promise<Product | null> {
  const products = await fetchProducts()
  return products.find((product) => product.id === parseInt(id)) || null
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  
  if (!product) {
    return {
      title: '商品不存在 | 現在買 NowBuy',
      description: '找不到指定的商品'
    }
  }
  
  return {
    title: `${product.name} | 現在買 NowBuy`,
    description: `購買 ${product.name} - 社區共享購物平台`,
    openGraph: {
      title: product.name,
      description: `購買 ${product.name}`,
      images: [product.image_url],
    }
  }
}

function formatPrice(cents: number): string {
  return `NT$${(cents / 100).toLocaleString()}`
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 商品圖片 */}
          <div className="aspect-square relative overflow-hidden rounded-lg bg-white p-4">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
              unoptimized={false}
            />
          </div>

          {/* 商品資訊 */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="text-[#2ECC71] bg-green-50">
                  有代買者
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500">(127 評價)</span>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-6">
                {formatPrice(product.price_in_cents)}
                <span className="text-lg font-normal text-gray-500 ml-2">預估價格</span>
              </div>
            </div>

            {/* 代買者資訊 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">推薦代買者</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face" />
                    <AvatarFallback>陳小美</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">陳小美</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      距離您 500 公尺
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">4.9</span>
                    </div>
                    <div className="text-sm text-gray-500">成功代買 156 次</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>預計 2 小時內完成採購</span>
                </div>
              </CardContent>
            </Card>

            {/* 行動按鈕 */}
            <ProductActions product={product} />

            {/* 服務保障 */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">服務保障</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✓ 代買過程實時追蹤</li>
                <li>✓ 商品品質保證</li>
                <li>✓ 7天無理由退換</li>
                <li>✓ 平台交易保障</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 商品詳情 */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>商品詳情</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>這是一個優質的商品，由鄰居精心挑選並推薦。商品具有優良的品質保證，深受社區居民喜愛。</p>
                <h4>商品特色：</h4>
                <ul>
                  <li>優質材料製作</li>
                  <li>設計精美實用</li>
                  <li>性價比超高</li>
                  <li>適合日常使用</li>
                </ul>
                <h4>購買須知：</h4>
                <p>代買者會根據您的需求進行採購，如有特殊要求請在下單時備註說明。</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>其他代買者</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: '王大哥', rating: 4.7, distance: '800m', orders: 89 },
                    { name: '李媽媽', rating: 4.6, distance: '1.2km', orders: 156 },
                  ].map((buyer, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                      <div>
                        <div className="font-medium">{buyer.name}</div>
                        <div className="text-sm text-gray-500">{buyer.distance}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{buyer.rating}</span>
                        </div>
                        <div className="text-xs text-gray-500">{buyer.orders} 次</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}