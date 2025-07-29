import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, Users, ShoppingBag, Shield, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: '關於我們 | 現在買 NowBuy',
  description: '了解現在買 NowBuy 的故事、使命與團隊，打造溫暖的社區共享購物平台',
  openGraph: {
    title: '關於我們 | 現在買 NowBuy',
    description: '了解現在買 NowBuy 的故事、使命與團隊',
    type: 'website',
  }
}

const stats = [
  { icon: Users, label: '活躍用戶', value: '50,000+', color: 'text-[#FF6B35]' },
  { icon: ShoppingBag, label: '成功代買', value: '500,000+', color: 'text-[#2ECC71]' },
  { icon: Heart, label: '社區滿意度', value: '98%', color: 'text-red-500' },
  { icon: Shield, label: '交易保障', value: '100%', color: 'text-blue-500' }
]

const features = [
  {
    icon: Users,
    title: '鄰里互助',
    description: '連結社區鄰居，創造溫暖的互助網絡',
    color: 'bg-orange-50 text-[#FF6B35]'
  },
  {
    icon: ShoppingBag,
    title: '便民服務',
    description: '提供高效便民的代買服務，節省時間成本',
    color: 'bg-green-50 text-[#2ECC71]'
  },
  {
    icon: Shield,
    title: '安全保障',
    description: '完善的交易保障機制，確保用戶權益',
    color: 'bg-blue-50 text-blue-600'
  }
]

const team = [
  {
    name: '張執行長',
    role: '創辦人 & CEO',
    description: '致力於打造更美好的社區生活',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&crop=face'
  },
  {
    name: '李技術長',
    role: 'CTO',
    description: '10年+技術經驗，專注用戶體驗',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=face'
  },
  {
    name: '王營運長',
    role: 'COO',
    description: '社區營運專家，深耕用戶關係',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              鄰里互助，便民生活
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              現在買 NowBuy 是一個專為社區居民設計的即時代買與共享購物平台，
              我們相信透過鄰里間的互助合作，能夠創造更便利、更溫暖的社區生活。
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-8"
            >
              加入我們的社區
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              我們的使命
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              透過科技連結鄰里，讓社區居民能夠互相幫助，共享購物行程，
              不僅節省時間成本，更重要的是創造溫暖的社區連結，
              讓每個社區都成為一個互助友愛的大家庭。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${feature.color} mx-auto mb-4 flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              認識我們的團隊
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              我們是一群熱愛社區、相信科技能讓生活更美好的夥伴
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-[#FF6B35] font-medium">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              我們的核心價值
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-[#FF6B35] flex items-center gap-3">
                    <Heart className="w-8 h-8" />
                    以人為本
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    我們始終將用戶需求放在第一位，不斷優化產品體驗，
                    確保每一次的代買服務都能真正解決生活中的實際問題。
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-[#2ECC71] flex items-center gap-3">
                    <Users className="w-8 h-8" />
                    社區共好
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    透過平台連結鄰里關係，促進社區互助合作，
                    讓每個參與者都能在幫助他人的同時，也獲得所需的協助。
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-blue-600 flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    安全可靠
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    建立完善的安全保障機制，保護用戶隱私與交易安全，
                    讓每一次的代買體驗都安心可靠。
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-purple-600 flex items-center gap-3">
                    <Star className="w-8 h-8" />
                    持續創新
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    不斷探索新技術與服務模式，持續優化平台功能，
                    為用戶提供更便利、更高效的代買體驗。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            加入現在買 NowBuy 大家庭
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            成為社區的一份子，體驗鄰里互助的溫暖，享受便利的代買服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-8"
            >
              我要下單
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#FF6B35] font-semibold px-8"
            >
              成為代買者
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}