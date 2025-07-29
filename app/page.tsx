'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  ShoppingCart, 
  MapPin, 
  Clock, 
  Star, 
  Truck, 
  Coffee, 
  ShoppingBag, 
  Heart,
  Zap,
  Navigation,
  Phone
} from 'lucide-react'

export default function HomePage() {
  const [activeRole, setActiveRole] = useState<'buyer' | 'proxy'>('buyer')

  const quickCategories = [
    { name: '食品飲料', icon: Coffee, color: 'bg-orange-50 text-orange-600' },
    { name: '生活用品', icon: ShoppingBag, color: 'bg-blue-50 text-blue-600' },
    { name: '個人護理', icon: Heart, color: 'bg-pink-50 text-pink-600' },
    { name: '緊急代買', icon: Zap, color: 'bg-red-50 text-red-600' }
  ]

  const nearbyOpportunities = [
    {
      id: 1,
      store: '全聯福利中心',
      distance: '300m',
      time: '20分鐘內',
      orders: 3,
      earnings: 'NT$150'
    },
    {
      id: 2,
      store: '7-Eleven',
      distance: '150m', 
      time: '15分鐘內',
      orders: 2,
      earnings: 'NT$80'
    },
    {
      id: 3,
      store: '家樂福',
      distance: '800m',
      time: '45分鐘內', 
      orders: 5,
      earnings: 'NT$300'
    }
  ]

  const recentActivities = [
    {
      user: '陳小美',
      action: '成功完成代買',
      item: '北歐風格陶瓷馬克杯',
      time: '5分鐘前',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face'
    },
    {
      user: '王大哥',
      action: '接受代買訂單',
      item: '經典白色運動鞋',
      time: '12分鐘前',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=face'
    },
    {
      user: '李媽媽',
      action: '發起團購',
      item: '手工編織羊毛圍巾',
      time: '25分鐘前',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Role Switcher */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">
              現在買 NowBuy
            </h1>
            <p className="text-xl opacity-90 mb-8">
              鄰里互助，便民生活 - 社區共享購物平台
            </p>
            
            {/* Role Switcher */}
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 inline-flex mb-8">
              <Button
                onClick={() => setActiveRole('buyer')}
                className={`rounded-full px-8 py-3 font-semibold transition-all ${
                  activeRole === 'buyer'
                    ? 'bg-white text-[#FF6B35] shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                variant={activeRole === 'buyer' ? 'secondary' : 'ghost'}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                我要下單
              </Button>
              <Button
                onClick={() => setActiveRole('proxy')}
                className={`rounded-full px-8 py-3 font-semibold transition-all ${
                  activeRole === 'proxy'
                    ? 'bg-white text-[#FF6B35] shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                variant={activeRole === 'proxy' ? 'secondary' : 'ghost'}
              >
                <Truck className="w-5 h-5 mr-2" />
                我要代買
              </Button>
            </div>
          </div>

          {/* Role-specific CTA */}
          <div className="text-center">
            {activeRole === 'buyer' ? (
              <div>
                <h2 className="text-2xl font-semibold mb-4">需要什麼？鄰居幫您買！</h2>
                <p className="text-lg opacity-90 mb-6">
                  快速找到附近的代買者，享受便利的購物體驗
                </p>
                <Link href="/products">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                  >
                    立即開始購物
                  </Button>
                </Link>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold mb-4">賺取零用錢，幫助好鄰居！</h2>
                <p className="text-lg opacity-90 mb-6">
                  利用空閒時間，為社區提供代買服務並獲得收入
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                >
                  成為代買者
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeRole === 'buyer' ? (
            <>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                熱門分類
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {quickCategories.map((category, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full ${category.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                附近的代買機會
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {nearbyOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{opportunity.store}</CardTitle>
                        <Badge className="bg-[#2ECC71] text-white">
                          {opportunity.orders} 筆訂單
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{opportunity.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{opportunity.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#2ECC71]">
                          {opportunity.earnings}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-[#FF6B35] hover:bg-orange-600 text-white"
                        >
                          立即接單
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {activeRole === 'buyer' ? '附近的代買者' : '代買路線規劃'}
          </h2>
          
          <Card className="h-96 bg-gray-100">
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center">
                <Navigation className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  即時地圖功能
                </h3>
                <p className="text-gray-500 mb-4">
                  {activeRole === 'buyer' 
                    ? '顯示附近可用的代買者位置與路線'
                    : '智能規劃最佳代買路線，提高效率'
                  }
                </p>
                <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35]">
                  啟用地圖功能
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-[#34495E] to-gray-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">50K+</div>
              <div className="text-gray-300">活躍用戶</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2ECC71] mb-2">500K+</div>
              <div className="text-gray-300">成功代買</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">滿意度</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">服務時間</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Activity Feed */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            社區動態
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {recentActivities.map((activity, index) => (
              <Card key={index} className="mb-4 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{activity.user}</span>
                        <span className="text-gray-600">{activity.action}</span>
                      </div>
                      <div className="text-[#FF6B35] font-medium mb-1">{activity.item}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-auto" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
              查看更多動態
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            加入現在買社區
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            成為溫暖鄰里關係的一部分，享受便利生活，創造額外收入
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-8"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                開始購物
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#FF6B35] font-semibold px-8"
            >
              <Truck className="w-5 h-5 mr-2" />
              成為代買者
            </Button>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#FF6B35] font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                聯絡客服
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}