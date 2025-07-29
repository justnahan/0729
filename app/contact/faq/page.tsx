import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  Search, 
  ArrowLeft, 
  HelpCircle, 
  MessageCircle, 
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Clock,
  Shield,
  CreditCard,
  Truck,
  Users,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: '常見問題 | 現在買 NowBuy',
  description: '現在買 NowBuy 常見問題解答，快速找到您需要的答案',
  openGraph: {
    title: '常見問題 | 現在買 NowBuy',
    description: '現在買 NowBuy 常見問題解答',
    type: 'website',
  }
}

const faqCategories = [
  {
    id: 'getting-started',
    title: '新手入門',
    icon: Users,
    color: 'text-blue-600 bg-blue-50',
    description: '如何開始使用現在買平台',
    faqs: [
      {
        question: '如何註冊成為現在買的用戶？',
        answer: '點擊網站右上角的「註冊」按鈕，填寫基本資料並驗證手機號碼，即可完成註冊。註冊完成後可選擇成為購買者或代買者角色。'
      },
      {
        question: '購買者和代買者有什麼區別？',
        answer: '購買者可以發佈代買需求，請代買者協助採購商品；代買者則可以接受代買委託，為他人採購商品並賺取代買費用。一個帳號可以同時擁有兩種身份。'
      },
      {
        question: '平台如何確保交易安全？',
        answer: '我們提供多重安全保障：實名認證、交易保險、第三方支付、評價系統等。所有交易都有平台監管，遇到問題可隨時聯絡客服協助處理。'
      },
      {
        question: '需要支付平台使用費嗎？',
        answer: '註冊和基本使用完全免費。平台僅在交易成功時收取少量服務費（通常為交易金額的3-5%），用於維護平台運營和提供更好的服務。'
      }
    ]
  },
  {
    id: 'buying',
    title: '購買相關',
    icon: CreditCard,
    color: 'text-[#FF6B35] bg-orange-50',
    description: '關於下單和付款的問題',
    faqs: [
      {
        question: '如何發起代買需求？',
        answer: '在商品頁面點擊「立即下單」，選擇代買者後填寫配送資訊和特殊需求，確認訂單並完成付款即可。代買者會在確認接單後開始採購。'
      },
      {
        question: '支援哪些付款方式？',
        answer: '我們支援信用卡、LINE Pay、Apple Pay、Google Pay等多種付款方式。所有付款都經過加密處理，確保您的資訊安全。'
      },
      {
        question: '如果商品缺貨怎麼辦？',
        answer: '代買者會立即通知您商品缺貨狀況，並提供替代方案或退款選擇。若選擇退款，我們會在1-3個工作天內將款項退回您的付款帳戶。'
      },
      {
        question: '可以修改或取消已下的訂單嗎？',
        answer: '在代買者開始採購前，您可以聯絡代買者或客服修改訂單。若代買者已開始採購，則需要雙方協商處理。取消訂單可能產生部分手續費。'
      },
      {
        question: '配送時間大概多久？',
        answer: '一般代買時間為1-3小時，具體時間取決於商品類型、代買者距離和交通狀況。緊急代買服務可在30分鐘內完成，但會收取額外費用。'
      }
    ]
  },
  {
    id: 'proxy-buying',
    title: '代買服務',
    icon: Truck,
    color: 'text-[#2ECC71] bg-green-50',
    description: '關於代買者服務的問題',
    faqs: [
      {
        question: '如何成為代買者？',
        answer: '完成身份驗證後，在個人資料中開啟代買者功能。通過簡單的服務測試後，即可開始接受代買委託。建議先從熟悉的商店和商品類型開始。'
      },
      {
        question: '代買費用如何計算？',
        answer: '代買費用由代買者自行設定，通常包含代買服務費（10-20%）和配送費（20-50元）。特殊商品或緊急代買可能有額外費用。'
      },
      {
        question: '如何選擇可靠的代買者？',
        answer: '可以參考代買者的評分、完成訂單數、距離遠近、預估時間等指標。建議選擇評分4.5分以上且完成訂單較多的代買者。'
      },
      {
        question: '代買者如何收取報酬？',
        answer: '交易完成後，代買費用會在1-2個工作天內轉入代買者帳戶。平台會扣除少量手續費，剩餘金額可提現到銀行帳戶或電子錢包。'
      }
    ]
  },
  {
    id: 'payment-refund',
    title: '付款退款',
    icon: Shield,
    color: 'text-purple-600 bg-purple-50',
    description: '關於付款和退款的問題',
    faqs: [
      {
        question: '什麼情況下可以申請退款？',
        answer: '商品品質問題、代買者無法完成服務、商品與描述不符等情況下可申請退款。我們會在收到申請後24小時內處理。'
      },
      {
        question: '退款多久能到帳？',
        answer: '信用卡退款需3-7個工作天，電子錢包退款通常在24小時內完成。實際到帳時間可能因銀行處理速度而有所差異。'
      },
      {
        question: '如何查看交易記錄？',
        answer: '登入帳戶後，在「我的訂單」中可查看所有交易記錄，包含訂單狀態、付款資訊、代買者資訊等詳細內容。'
      },
      {
        question: '發現多扣款怎麼辦？',
        answer: '請立即聯絡客服並提供交易憑證。我們會盡快核實並處理，確認多扣款項會在3-5個工作天內退還。'
      }
    ]
  },
  {
    id: 'technical',
    title: '技術問題',
    icon: HelpCircle,
    color: 'text-gray-600 bg-gray-50',
    description: '使用平台時遇到的技術問題',
    faqs: [
      {
        question: '無法登入帳戶怎麼辦？',
        answer: '請檢查帳號密碼是否正確，確認網路連線穩定。如果忘記密碼，可點擊「忘記密碼」重設。若仍無法解決，請聯絡客服協助。'
      },
      {
        question: 'App 閃退或無法使用怎麼辦？',
        answer: '請先嘗試重啟App或手機，確認App版本是否為最新版本。如果問題持續，可以重新安裝App，或透過網頁版繼續使用服務。'
      },
      {
        question: '收不到驗證簡訊怎麼辦？',
        answer: '請檢查手機號碼是否正確，確認手機訊號正常。簡訊可能因電信業者延遲，請稍等3-5分鐘。若仍收不到，可改用語音驗證。'
      },
      {
        question: '如何更新個人資料？',
        answer: '登入後點擊右上角頭像，進入「個人資料」頁面即可修改。部分重要資訊（如手機號碼）修改時需要重新驗證。'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/contact">
                <Button variant="ghost" className="text-white hover:bg-white hover:bg-opacity-20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回聯絡我們
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                常見問題
              </h1>
              <p className="text-xl opacity-90 mb-8">
                快速找到您需要的答案，或聯絡我們的客服團隊
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="搜尋問題關鍵字，例如：註冊、付款、退款..."
                  className="pl-12 pr-4 py-3 text-lg bg-white border-0 text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4 text-[#FF6B35]" />
              <span>客服專線：</span>
              <span className="font-medium text-gray-900">0800-123-456</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MessageCircle className="w-4 h-4 text-[#2ECC71]" />
              <span>線上客服：</span>
              <span className="font-medium text-gray-900">即時聊天</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>信箱：</span>
              <span className="font-medium text-gray-900">support@nowbuy.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {faqCategories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div>{category.title}</div>
                    <div className="text-sm font-normal text-gray-600 mt-1">
                      {category.description}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="font-semibold text-gray-900 flex-1 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Still Need Help */}
      <div className="bg-gradient-to-r from-[#2ECC71] to-green-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">
              還是找不到答案？
            </h2>
            <p className="text-xl opacity-90 mb-8">
              我們的客服團隊隨時為您提供專業協助
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#2ECC71] hover:bg-gray-100 font-semibold px-8 py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  聯絡客服
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2ECC71] font-semibold px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                撥打專線
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-green-400 text-sm opacity-75">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-4 h-4" />
                <span>客服時間：每日 09:00 - 21:00</span>
              </div>
              <p>緊急問題請撥打 24 小時專線：0800-999-888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}