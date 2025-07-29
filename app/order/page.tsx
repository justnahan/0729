'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShoppingCart, 
  MapPin, 
  Clock, 
  CreditCard,
  Shield,
  Truck,
  Phone,
  MessageCircle,
  ArrowLeft,
  CheckCircle,
  Package
} from 'lucide-react'

// Metadata handled by layout for client component

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  store: string
  available: boolean
}

// Mock order data - would come from cart/state management in real app
const orderData = {
  items: [
    {
      id: 1,
      name: '經典白色運動鞋',
      price: 2980,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&auto=format&fit=crop'
    },
    {
      id: 2,
      name: '北歐風格陶瓷馬克杯',
      price: 359,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&auto=format&fit=crop'
    }
  ],
  store: '全聯福利中心',
  storeAddress: '台北市大安區復興南路一段 100 號',
  subtotal: 3698,
  deliveryFee: 30,
  serviceFee: 50,
  total: 3778
}

const availableProxies = [
  {
    id: 1,
    name: '陳小美',
    rating: 4.9,
    completedOrders: 156,
    distance: '300m',
    estimatedTime: '20分鐘',
    commission: 50,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face',
    description: '經驗豐富的代買者，熟悉各大賣場商品位置，服務親切迅速。',
    verified: true
  },
  {
    id: 2,
    name: '王大哥',
    rating: 4.8,
    completedOrders: 203,
    distance: '500m',
    estimatedTime: '25分鐘',
    commission: 45,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=face',
    description: '退休教師，時間彈性，特別細心挑選商品，深受鄰居信賴。',
    verified: true
  },
  {
    id: 3,
    name: '李同學',
    rating: 4.7,
    completedOrders: 89,
    distance: '400m',
    estimatedTime: '30分鐘',
    commission: 40,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&crop=face',
    description: '大學生代買者，價格實惠，服務認真負責。',
    verified: false
  }
]

function formatPrice(price: number): string {
  return `NT$${price.toLocaleString()}`
}

export default function OrderPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProxy, setSelectedProxy] = useState<string>('')
  const [specialRequests, setSpecialRequests] = useState<string>('')
  const [submitting, setSubmitting] = useState(false)

  // Load cart items from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      const items = JSON.parse(savedCart)
      const availableItems = items.filter((item: CartItem) => item.available)
      setCartItems(availableItems)
    }
    setLoading(false)
  }, [])

  const handleOrderSubmit = async () => {
    if (!selectedProxy) {
      alert('請選擇代買者')
      return
    }

    setSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      // Create order data for success page
      const orderInfo = {
        orderId: `NOW${Date.now()}`,
        items: cartItems,
        totalAmount: subtotal + deliveryFee + serviceFee,
        selectedProxy: suggestedProxies.find(p => p.id.toString() === selectedProxy),
        specialRequests,
        timestamp: new Date().toISOString()
      }
      
      // Save order info and clear cart
      localStorage.setItem('lastOrder', JSON.stringify(orderInfo))
      localStorage.removeItem('cart')
      
      // Redirect to success page
      window.location.href = '/order/success'
    }, 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35] mx-auto mb-4"></div>
          <p className="text-gray-600">載入訂單資訊...</p>
        </div>
      </div>
    )
  }

  // Redirect to cart if no items
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">沒有可下單的商品</h2>
          <Link href="/cart">
            <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
              返回購物車
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = 30
  const serviceFee = Math.max(subtotal * 0.05, 20)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回購物車
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-[#FF6B35]" />
              <h1 className="text-2xl font-bold text-gray-900">確認訂單</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  配送地址
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">陳小美</div>
                    <div className="text-gray-600 mb-1">0912-345-678</div>
                    <div className="text-gray-600">
                      台北市大安區復興南路一段 123 號 5F
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    變更
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Store Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  購買地點
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">全</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{orderData.store}</div>
                    <div className="text-gray-600 text-sm">{orderData.storeAddress}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>訂購商品</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-2">
                          數量：{item.quantity}
                        </div>
                        <div className="font-bold text-[#FF6B35]">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Select Proxy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  選擇代買者
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedProxy} onValueChange={setSelectedProxy} className="space-y-4">
                  {availableProxies.map((proxy) => (
                    <div key={proxy.id} className="relative">
                      <div className="flex items-center space-x-2 absolute top-4 left-4 z-10">
                        <RadioGroupItem value={proxy.id.toString()} id={proxy.id.toString()} />
                      </div>
                      <Label 
                        htmlFor={proxy.id.toString()} 
                        className="block p-4 pl-12 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={proxy.avatar} />
                              <AvatarFallback>{proxy.name}</AvatarFallback>
                            </Avatar>
                            {proxy.verified && (
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2ECC71] rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{proxy.name}</h4>
                              <Badge className="bg-yellow-100 text-yellow-800">
                                ⭐ {proxy.rating}
                              </Badge>
                              {proxy.verified && (
                                <Badge className="bg-[#2ECC71] text-white text-xs">
                                  已驗證
                                </Badge>
                              )}
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2">
                              {proxy.description}
                            </p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Package className="w-3 h-3" />
                                <span>{proxy.completedOrders} 單</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{proxy.distance}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{proxy.estimatedTime}</span>
                              </div>
                              <div className="text-[#2ECC71] font-semibold">
                                +{formatPrice(proxy.commission)}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              聊天
                            </Button>
                            <Button size="sm" variant="outline">
                              <Phone className="w-3 h-3 mr-1" />
                              通話
                            </Button>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>特殊需求</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="如有特殊需求請註明，例如：商品挑選標準、配送時間要求等..."
                  className="min-h-[100px]"
                />
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
                    <span>{formatPrice(orderData.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>外送費</span>
                    <span>{formatPrice(orderData.deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>代買費</span>
                    <span>{formatPrice(orderData.serviceFee)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>總計</span>
                    <span className="text-[#FF6B35]">{formatPrice(orderData.total)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={handleOrderSubmit}
                    disabled={submitting || !selectedProxy}
                    className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white font-semibold py-3 disabled:bg-gray-400"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        處理中...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        確認下單
                      </>
                    )}
                  </Button>
                  
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3" />
                      <span>交易安全保障</span>
                    </div>
                    <p>• 代買完成前資金暫時保管</p>
                    <p>• 支援 7 天無理由退貨</p>
                    <p>• 商品品質保證</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estimated Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  預計時程
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full" />
                    <span className="text-gray-600">接單確認</span>
                    <span className="text-gray-400 ml-auto">立即</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span className="text-gray-600">前往商店</span>
                    <span className="text-gray-400 ml-auto">5分鐘後</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span className="text-gray-600">購買商品</span>
                    <span className="text-gray-400 ml-auto">15分鐘後</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span className="text-gray-600">送達地址</span>
                    <span className="text-gray-400 ml-auto">25分鐘後</span>
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