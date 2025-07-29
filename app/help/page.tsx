import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  ArrowLeft, 
  HelpCircle, 
  MessageCircle, 
  Phone,
  Mail,
  User,
  CreditCard,
  Truck,
  Settings,
  Shield,
  Book,
  Video,
  ArrowRight,
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: '幫助中心 | 現在買 NowBuy',
  description: '現在買 NowBuy 幫助中心，快速找到解答和教學資源',
  openGraph: {
    title: '幫助中心 | 現在買 NowBuy',
    description: '現在買 NowBuy 幫助中心',
    type: 'website',
  }
}

const helpCategories = [
  {
    id: 'getting-started',
    title: '新手入門',
    icon: User,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    description: '了解如何開始使用現在買',
    articles: [
      { title: '如何註冊帳戶', href: '/register' as const },
      { title: '平台介紹與功能', href: '/about' as const },
      { title: '安全須知', href: '/legal/terms' as const },
      { title: '首次下單教學', href: '/products' as const }
    ]
  },
  {
    id: 'buying',
    title: '購買指南',
    icon: CreditCard,
    color: 'text-[#FF6B35] bg-orange-50 border-orange-200',
    description: '關於下單和付款的完整指南',
    articles: [
      { title: '如何發起代買需求', href: '/products' as const },
      { title: '選擇代買者技巧', href: '/order' as const },
      { title: '付款方式說明', href: '/contact/faq' as const },
      { title: '訂單狀態追蹤', href: '/orders' as const }
    ]
  },
  {
    id: 'proxy-service',
    title: '代買服務',
    icon: Truck,
    color: 'text-[#2ECC71] bg-green-50 border-green-200',
    description: '成為代買者的完整指南',
    articles: [
      { title: '如何成為代買者', href: '/register' as const },
      { title: '接單流程說明', href: '/contact/faq' as const },
      { title: '收益計算方式', href: '/contact/faq' as const },
      { title: '代買者評價系統', href: '/contact/faq' as const }
    ]
  },
  {
    id: 'account',
    title: '帳戶管理',
    icon: Settings,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
    description: '管理個人資料和帳戶設定',
    articles: [
      { title: '修改個人資料', href: '/profile' as const },
      { title: '地址管理', href: '/profile' as const },
      { title: '通知設定', href: '/notifications' as const },
      { title: '帳戶安全設定', href: '/profile' as const }
    ]
  },
  {
    id: 'payment-refund',
    title: '付款退款',
    icon: Shield,
    color: 'text-red-600 bg-red-50 border-red-200',
    description: '付款問題和退款申請',
    articles: [
      { title: '支援的付款方式', href: '/contact/faq' as const },
      { title: '如何申請退款', href: '/contact/faq' as const },
      { title: '交易爭議處理', href: '/contact' as const },
      { title: '發票開立說明', href: '/legal/terms' as const }
    ]
  },
  {
    id: 'technical',
    title: '技術支援',
    icon: HelpCircle,
    color: 'text-gray-600 bg-gray-50 border-gray-200',
    description: '解決技術問題和故障排除',
    articles: [
      { title: '常見技術問題', href: '/contact/faq' as const },
      { title: 'App 使用問題', href: '/contact/faq' as const },
      { title: '網站相容性', href: '/contact/faq' as const },
      { title: '帳戶登入問題', href: '/contact' as const }
    ]
  }
] as const

const quickActions = [
  {
    title: '聯絡客服',
    description: '立即與客服團隊對話',
    icon: MessageCircle,
    color: 'bg-[#2ECC71] hover:bg-green-600',
    href: '/contact' as const
  },
  {
    title: '常見問題',
    description: '快速找到常見問題解答',
    icon: Book,
    color: 'bg-[#FF6B35] hover:bg-orange-600',
    href: '/contact/faq' as const
  },
  {
    title: '使用教學',
    description: '觀看詳細操作教學影片',
    icon: Video,
    color: 'bg-blue-600 hover:bg-blue-700',
    href: '/contact/faq' as const
  }
] as const

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2ECC71] to-green-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white hover:bg-opacity-20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回首頁
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                幫助中心
              </h1>
              <p className="text-xl opacity-90 mb-8">
                找到您需要的解答，或聯絡我們的專業團隊
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="搜尋幫助文章，例如：如何下單、退款流程..."
                  className="pl-12 pr-4 py-3 text-lg bg-white border-0 text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">快速服務</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${action.color} mx-auto mb-4 flex items-center justify-center text-white`}>
                      <action.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-gray-600 text-sm">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">幫助分類</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {helpCategories.map((category) => (
              <Card key={category.id} className={`border-2 ${category.color.split(' ').slice(-1)[0]} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl">{category.title}</div>
                      <div className="text-sm font-normal text-gray-600 mt-1">
                        {category.description}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.articles.map((article, index) => (
                      <Link key={index} href={article.href}>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                          <span className="text-gray-700 group-hover:text-gray-900">
                            {article.title}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 text-[#FF6B35] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              找不到您要的答案？
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              我們的客服團隊隨時為您提供協助
            </p>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">電話客服</h3>
                  <p className="text-gray-600 text-sm mb-4">0800-123-456</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>每日 09:00-21:00</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-[#2ECC71] mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">線上客服</h3>
                  <p className="text-gray-600 text-sm mb-4">即時對話</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>24小時服務</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">電子郵件</h3>
                  <p className="text-gray-600 text-sm mb-4">support@nowbuy.com</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>24小時內回覆</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#FF6B35] hover:bg-orange-600 text-white font-semibold px-8 py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  立即聯絡客服
                </Button>
              </Link>
              <Link href="/contact/faq">
                <Button size="lg" variant="outline" className="border-[#2ECC71] text-[#2ECC71] hover:bg-green-50 font-semibold px-8 py-3">
                  <Book className="w-5 h-5 mr-2" />
                  查看常見問題
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}