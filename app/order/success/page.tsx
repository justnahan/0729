'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { 
  CheckCircle, 
  Package, 
  Clock, 
  MessageCircle, 
  Phone,
  MapPin,
  ShoppingBag,
  ArrowRight,
  Download
} from 'lucide-react'

interface OrderInfo {
  orderId: string
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
    image: string
  }>
  totalAmount: number
  selectedProxy: {
    id: number
    name: string
    avatar: string
    phone?: string
  }
  specialRequests: string
  timestamp: string
}

function formatPrice(price: number): string {
  return `NT$${price.toLocaleString()}`
}

function formatDateTime(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function OrderSuccessPage() {
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder')
    if (savedOrder) {
      setOrderInfo(JSON.parse(savedOrder))
    }
    setLoading(false)
  }, [])

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

  if (!orderInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">找不到訂單資訊</h2>
          <Link href="/">
            <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
              回到首頁
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-[#2ECC71] to-green-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              訂單提交成功！
            </h1>
            <p className="text-xl opacity-90 mb-6">
              您的訂單已成功送出，代買者將盡快為您處理
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <span>訂單編號：</span>
              <span className="font-mono font-bold bg-white bg-opacity-20 px-3 py-1 rounded">
                {orderInfo.orderId}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FF6B35]" />
                  處理進度
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-[#2ECC71] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">訂單已提交</div>
                      <div className="text-sm text-gray-600">{formatDateTime(orderInfo.timestamp)}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">等待代買者確認</div>
                      <div className="text-sm text-gray-600">預計 5-10 分鐘內回覆</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 opacity-50">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Package className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-500">開始採購</div>
                      <div className="text-sm text-gray-500">確認接單後開始</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 opacity-50">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-500">配送完成</div>
                      <div className="text-sm text-gray-500">預計 1-2 小時內送達</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proxy Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#2ECC71]" />
                  代買者資訊
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={orderInfo.selectedProxy.avatar} />
                    <AvatarFallback>{orderInfo.selectedProxy.name}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{orderInfo.selectedProxy.name}</h4>
                    <p className="text-gray-600 mb-3">您的專屬代買者</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-[#2ECC71] hover:bg-green-600 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        傳送訊息
                      </Button>
                      <Button size="sm" variant="outline" className="border-[#2ECC71] text-[#2ECC71] hover:bg-green-50">
                        <Phone className="w-4 h-4 mr-2" />
                        撥打電話
                      </Button>
                    </div>
                  </div>
                </div>

                {orderInfo.specialRequests && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900 mb-2">特殊需求</div>
                    <p className="text-gray-700 text-sm">{orderInfo.specialRequests}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Ordered Items */}
            <Card>
              <CardHeader>
                <CardTitle>訂購商品</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderInfo.items.map((item, index) => (
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
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <div className="text-sm text-gray-600 mt-1">
                          數量：{item.quantity} 件
                        </div>
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
                    {index < orderInfo.items.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>快速操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/orders">
                  <Button className="w-full justify-between bg-[#FF6B35] hover:bg-orange-600 text-white">
                    查看所有訂單
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                
                <Button variant="outline" className="w-full justify-between border-[#2ECC71] text-[#2ECC71] hover:bg-green-50">
                  下載訂單憑證
                  <Download className="w-4 h-4" />
                </Button>

                <Link href="/products">
                  <Button variant="outline" className="w-full justify-between">
                    繼續購物
                    <ShoppingBag className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>訂單摘要</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>商品金額</span>
                    <span>{formatPrice(orderInfo.totalAmount - 50)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>服務費用</span>
                    <span>NT$50</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>總計</span>
                    <span className="text-[#FF6B35]">{formatPrice(orderInfo.totalAmount)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>需要協助？</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FF6B35]" />
                    <span>客服專線：0800-123-456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#2ECC71]" />
                    <span>線上客服：24小時服務</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button variant="outline" className="w-full text-sm">
                    聯絡客服中心
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}