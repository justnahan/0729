import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, MessageCircle, HeadphonesIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: '聯絡我們 | 現在買 NowBuy',
  description: '聯絡現在買 NowBuy 客服團隊，我們隨時為您提供協助與支援',
  openGraph: {
    title: '聯絡我們 | 現在買 NowBuy',
    description: '聯絡現在買 NowBuy 客服團隊',
    type: 'website',
  }
}

const contactMethods = [
  {
    icon: Phone,
    title: '客服專線',
    content: '0800-123-456',
    description: '免付費客服專線，週一至週日 9:00-21:00',
    color: 'text-[#FF6B35] bg-orange-50'
  },
  {
    icon: Mail,
    title: '電子信箱',
    content: 'support@nowbuy.com',
    description: '一般問題與建議，24小時內回覆',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    icon: MessageCircle,
    title: '線上客服',
    content: '即時聊天',
    description: '網站右下角聊天室，即時回應',
    color: 'text-[#2ECC71] bg-green-50'
  }
]

const faqs = [
  {
    question: '如何開始使用代買服務？',
    answer: '註冊帳號後，選擇「我要下單」，選擇商品和代買者，完成付款即可。代買者會即時為您採購並送達。'
  },
  {
    question: '代買費用如何計算？',
    answer: '代買費用包含商品原價、代買服務費（通常為商品金額的10-15%）和配送費。所有費用在下單前都會清楚顯示。'
  },
  {
    question: '如何成為代買者？',
    answer: '完成身份驗證後，即可發布代買行程。接受訂單後，按照指定地點採購商品並配送給下單者。'
  },
  {
    question: '如果商品有問題怎麼辦？',
    answer: '我們提供完整的交易保障。如遇商品問題，可透過平台申請退換貨，客服團隊會協助處理。'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              我們隨時為您服務
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              遇到任何問題或需要協助嗎？我們的客服團隊隨時為您提供專業的支援與服務
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              多種聯絡方式
            </h2>
            <p className="text-lg text-gray-600">
              選擇最適合您的聯絡方式，我們會盡快為您解決問題
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${method.color} mx-auto mb-4 flex items-center justify-center`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {method.content}
                  </div>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                發送訊息給我們
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">
                          姓名 *
                        </Label>
                        <Input 
                          id="name" 
                          placeholder="請輸入您的姓名"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-base font-medium">
                          電話
                        </Label>
                        <Input 
                          id="phone" 
                          placeholder="請輸入聯絡電話"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">
                        電子信箱 *
                      </Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="請輸入電子信箱"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-base font-medium">
                        主旨 *
                      </Label>
                      <Input 
                        id="subject" 
                        placeholder="請輸入問題主旨"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-medium">
                        詳細內容 *
                      </Label>
                      <Textarea 
                        id="message"
                        placeholder="請詳細描述您的問題或建議..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white font-semibold"
                    >
                      送出訊息
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * 為必填欄位，我們會在24小時內回覆您的訊息
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info & FAQ */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-[#FF6B35]" />
                    辦公室資訊
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <div className="font-medium">公司地址</div>
                      <div className="text-gray-600">台北市信義區信義路五段7號 35樓</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <div className="font-medium">營業時間</div>
                      <div className="text-gray-600">
                        週一至週五：09:00 - 18:00<br />
                        週六至週日：10:00 - 17:00
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <HeadphonesIcon className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <div className="font-medium">客服時間</div>
                      <div className="text-gray-600">
                        每天 09:00 - 21:00<br />
                        365天全年無休
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    常見問題
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link href="/contact/faq">
                      <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
                        查看更多問題
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-red-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                緊急聯絡
              </h3>
              <p className="text-gray-600 mb-4">
                如遇緊急狀況或交易糾紛，請立即聯絡我們
              </p>
              <div className="text-2xl font-bold text-red-600 mb-4">
                0800-999-888
              </div>
              <p className="text-sm text-gray-500">
                24小時緊急專線，專人立即處理
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}