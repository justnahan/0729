import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  MapPin, 
  Clock,
  CreditCard,
  Truck,
  ArrowLeft
} from 'lucide-react'

export const metadata: Metadata = {
  title: '購物車 | 現在買 NowBuy',
  description: '查看您的購物車商品，準備下單找代買者',
  openGraph: {
    title: '購物車 | 現在買 NowBuy',
    description: '查看您的購物車商品，準備下單找代買者',
    type: 'website',
  }
}

// Mock cart data - in real app this would come from state management or API
const cartItems = [
  {
    id: 1,
    name: '經典白色運動鞋',
    price: 2980,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&auto=format&fit=crop',
    store: '全聯福利中心',
    available: true
  },
  {
    id: 2,
    name: '北歐風格陶瓷馬克杯',
    price: 359,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&auto=format&fit=crop',
    store: '7-Eleven',
    available: true
  },
  {
    id: 3,
    name: '手工編織羊毛圍巾',
    price: 1280,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&auto=format&fit=crop',
    store: '家樂福',
    available: false
  }
]

const suggestedProxies = [
  {
    id: 1,
    name: '陳小美',
    rating: 4.9,
    completedOrders: 156,
    distance: '300m',
    estimatedTime: '20分鐘',
    commission: 50,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face'
  },
  {
    id: 2,
    name: '王大哥',
    rating: 4.8,
    completedOrders: 203,
    distance: '500m',
    estimatedTime: '25分鐘',
    commission: 45,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=face'
  }
]

function formatPrice(price: number): string {
  return `NT$${price.toLocaleString()}`
}

export default function CartPage() {
  const availableItems = cartItems.filter(item => item.available)
  const unavailableItems = cartItems.filter(item => !item.available)
  
  const subtotal = availableItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = 30
  const serviceFee = Math.max(subtotal * 0.05, 20)
  const total = subtotal + deliveryFee + serviceFee

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                繼續購物
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-[#FF6B35]" />
              <h1 className="text-2xl font-bold text-gray-900">
                購物車 ({cartItems.length} 件商品)
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Available Items */}
            {availableItems.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#2ECC71] rounded-full" />
                    可購買商品 ({availableItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {availableItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{item.store}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="font-medium min-w-[40px] text-center">{item.quantity}</span>
                              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-[#FF6B35]">
                                {formatPrice(item.price * item.quantity)}
                              </div>
                              <div className="text-sm text-gray-500">
                                {formatPrice(item.price)} / 件
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      {index < availableItems.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Unavailable Items */}
            {unavailableItems.length > 0 && (
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    暫時缺貨 ({unavailableItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {unavailableItems.map((item, index) => (
                    <div key={item.id} className="opacity-60">
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg grayscale"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-700 mb-1">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{item.store}</span>
                          </div>
                          <Badge variant="secondary" className="text-red-600 bg-red-100">
                            暫時缺貨
                          </Badge>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      {index < unavailableItems.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Suggested Proxies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#2ECC71]" />
                  推薦代買者
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedProxies.map((proxy) => (
                  <div key={proxy.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={proxy.avatar}
                        alt={proxy.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{proxy.name}</h4>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          ⭐ {proxy.rating}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center gap-4">
                          <span>完成 {proxy.completedOrders} 單</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {proxy.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {proxy.estimatedTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">代買費</div>
                      <div className="font-bold text-[#2ECC71]">+{formatPrice(proxy.commission)}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>訂單摘要</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>商品小計</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>外送費</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>服務費</span>
                    <span>{formatPrice(serviceFee)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>總計</span>
                    <span className="text-[#FF6B35]">{formatPrice(total)}</span>
                  </div>
                </div>

                {availableItems.length > 0 ? (
                  <div className="space-y-3">
                    <Link href="/order">
                      <Button className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white font-semibold py-3">
                        <CreditCard className="w-5 h-5 mr-2" />
                        立即下單 ({availableItems.length} 件)
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
                      自訂代買需求
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 mb-4">購物車內沒有可購買的商品</p>
                    <Link href="/products">
                      <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                        去購物
                      </Button>
                    </Link>
                  </div>
                )}

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• 實際價格以代買者購買為準</p>
                  <p>• 支援多種付款方式</p>
                  <p>• 提供交易安全保障</p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">配送資訊</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">預設地址</div>
                    <div className="text-sm text-gray-600">
                      台北市大安區復興南路一段 123 號 5F
                    </div>
                    <Button variant="link" className="h-auto p-0 text-[#FF6B35]">
                      修改地址
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">預計送達</div>
                    <div className="text-sm text-gray-600">
                      今日 20:00 - 21:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}