import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  MapPin,
  MessageCircle,
  Star,
  Phone,
  Eye,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: '我的訂單 | 現在買 NowBuy',
  description: '查看您的購買訂單和代買記錄',
  openGraph: {
    title: '我的訂單 | 現在買 NowBuy',
    description: '查看您的購買訂單和代買記錄',
    type: 'website',
  }
}

// Mock order data
const orders = {
  active: [
    {
      id: 'ORD-001',
      status: 'shopping',
      progress: 60,
      items: [
        {
          name: '經典白色運動鞋',
          quantity: 1,
          price: 2980,
          image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&auto=format&fit=crop'
        }
      ],
      proxy: {
        name: '陳小美',
        rating: 4.9,
        phone: '0912-345-678',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face'
      },
      store: '全聯福利中心',
      orderTime: '2024-01-15 14:30',
      estimatedDelivery: '2024-01-15 16:00',
      total: 3080,
      timeline: [
        { step: '訂單確認', completed: true, time: '14:30' },
        { step: '代買者接單', completed: true, time: '14:35' },
        { step: '前往商店', completed: true, time: '14:45' },
        { step: '購買中', completed: false, time: '預計 15:30' },
        { step: '配送中', completed: false, time: '預計 15:45' },
        { step: '已送達', completed: false, time: '預計 16:00' }
      ]
    },
    {
      id: 'ORD-002',
      status: 'delivering',
      progress: 85,
      items: [
        {
          name: '北歐風格陶瓷馬克杯',
          quantity: 2,
          price: 359,
          image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&auto=format&fit=crop'
        }
      ],
      proxy: {
        name: '王大哥',
        rating: 4.8,
        phone: '0923-456-789',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=face'
      },
      store: '7-Eleven',
      orderTime: '2024-01-15 13:00',
      estimatedDelivery: '2024-01-15 15:30',
      total: 748,
      timeline: [
        { step: '訂單確認', completed: true, time: '13:00' },
        { step: '代買者接單', completed: true, time: '13:05' },
        { step: '前往商店', completed: true, time: '13:15' },
        { step: '購買完成', completed: true, time: '13:45' },
        { step: '配送中', completed: false, time: '正在進行' },
        { step: '已送達', completed: false, time: '預計 15:30' }
      ]
    }
  ],
  completed: [
    {
      id: 'ORD-003',
      status: 'completed',
      items: [
        {
          name: '手工編織羊毛圍巾',
          quantity: 1,
          price: 1280,
          image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&auto=format&fit=crop'
        }
      ],
      proxy: {
        name: '李媽媽',
        rating: 5.0,
        phone: '0934-567-890',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&crop=face'
      },
      store: '家樂福',
      orderTime: '2024-01-14 10:00',
      deliveryTime: '2024-01-14 12:30',
      total: 1380,
      rated: true
    },
    {
      id: 'ORD-004',
      status: 'completed',
      items: [
        {
          name: '復古圓框太陽眼鏡',
          quantity: 1,
          price: 899,
          image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&auto=format&fit=crop'
        }
      ],
      proxy: {
        name: '張先生',
        rating: 4.7,
        phone: '0945-678-901',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&crop=face'
      },
      store: '屈臣氏',
      orderTime: '2024-01-13 16:20',
      deliveryTime: '2024-01-13 18:45',
      total: 999,
      rated: false
    }
  ]
}

function getStatusColor(status: string) {
  switch (status) {
    case 'shopping':
      return 'bg-yellow-100 text-yellow-800'
    case 'delivering':
      return 'bg-blue-100 text-blue-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'shopping':
      return '購買中'
    case 'delivering':
      return '配送中'
    case 'completed':
      return '已完成'
    default:
      return '未知狀態'
  }
}

function formatPrice(price: number): string {
  return `NT$${price.toLocaleString()}`
}

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Package className="w-7 h-7 text-[#FF6B35]" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">我的訂單</h1>
              <p className="text-gray-600">
                追蹤您的購買訂單和代買記錄
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              進行中 ({orders.active.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              已完成 ({orders.completed.length})
            </TabsTrigger>
          </TabsList>

          {/* Active Orders */}
          <TabsContent value="active" className="space-y-6">
            {orders.active.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">訂單 #{order.id}</CardTitle>
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      查看詳情
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    下單時間：{order.orderTime} • 預計送達：{order.estimatedDelivery}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">訂單進度</span>
                      <span className="font-medium">{order.progress}%</span>
                    </div>
                    <Progress value={order.progress} className="h-2" />
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">配送進度</h4>
                    <div className="space-y-2">
                      {order.timeline.map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${
                            step.completed 
                              ? 'bg-[#2ECC71]' 
                              : 'bg-gray-300'
                          }`} />
                          <span className={`text-sm ${
                            step.completed 
                              ? 'text-gray-900' 
                              : 'text-gray-500'
                          }`}>
                            {step.step}
                          </span>
                          <span className="text-xs text-gray-400 ml-auto">
                            {step.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Order Items */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">訂購商品</h4>
                      {order.items.map((item, index) => (
                        <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              數量：{item.quantity} • 單價：{formatPrice(item.price)}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{order.store}</span>
                      </div>
                    </div>

                    {/* Proxy Info */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">代買者資訊</h4>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={order.proxy.avatar} />
                          <AvatarFallback>{order.proxy.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            {order.proxy.name}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{order.proxy.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          訊息
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          通話
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-medium text-gray-900">訂單總額</span>
                    <span className="text-xl font-bold text-[#FF6B35]">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Orders */}
          <TabsContent value="completed" className="space-y-6">
            {orders.completed.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">訂單 #{order.id}</CardTitle>
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      查看詳情
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    下單時間：{order.orderTime} • 送達時間：{order.deliveryTime}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Order Items */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">訂購商品</h4>
                      {order.items.map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              數量：{item.quantity}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{order.store}</span>
                      </div>
                    </div>

                    {/* Proxy Info */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">代買者</h4>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={order.proxy.avatar} />
                          <AvatarFallback>{order.proxy.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {order.proxy.name}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{order.proxy.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">操作</h4>
                      <div className="space-y-2">
                        {!order.rated ? (
                          <Button 
                            size="sm" 
                            className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white"
                          >
                            <Star className="w-4 h-4 mr-2" />
                            評價代買者
                          </Button>
                        ) : (
                          <div className="text-sm text-green-600 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            已評價
                          </div>
                        )}
                        <Button size="sm" variant="outline" className="w-full">
                          再次購買
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-medium text-gray-900">訂單總額</span>
                    <span className="text-xl font-bold text-[#FF6B35]">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                需要幫助或想要新的購物體驗？
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                    <Package className="w-4 h-4 mr-2" />
                    繼續購物
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
                    聯絡客服
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline">
                    <Truck className="w-4 h-4 mr-2" />
                    成為代買者
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}