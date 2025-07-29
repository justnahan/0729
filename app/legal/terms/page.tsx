import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Scale, AlertTriangle, Users, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: '使用條款 | 現在買 NowBuy',
  description: '現在買 NowBuy 平台使用條款，請詳細閱讀相關條款規定',
  openGraph: {
    title: '使用條款 | 現在買 NowBuy',
    description: '現在買 NowBuy 平台使用條款',
    type: 'website',
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首頁
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#FF6B35]" />
              <h1 className="text-2xl font-bold text-gray-900">使用條款</h1>
            </div>
          </div>
          <p className="text-gray-600">
            最後更新日期：2024年7月29日
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Important Notice */}
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[#FF6B35] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-bold text-gray-900 mb-2">重要提醒</h2>
                  <p className="text-gray-700">
                    請仔細閱讀本使用條款。使用現在買 NowBuy 平台服務即表示您同意遵守以下條款。
                    如不同意任何條款內容，請停止使用本服務。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* 服務概述 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#2ECC71]" />
                  1. 服務概述
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.1 平台性質</h4>
                  <p className="text-gray-700">
                    現在買 NowBuy（以下簡稱「本平台」）是一個社區共享購物平台，提供用戶間代買服務的媒合功能。
                    本平台不直接販售商品，而是作為購買者與代買者之間的中介平台。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.2 服務內容</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>提供代買需求發佈與接案媒合功能</li>
                    <li>提供安全的交易支付與履約保障機制</li>
                    <li>提供用戶評價與信用管理系統</li>
                    <li>提供客服支援與爭議處理服務</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 用戶責任 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#FF6B35]" />
                  2. 用戶責任與義務
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2.1 帳戶管理</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>用戶須提供真實、準確的個人資料</li>
                    <li>保護帳戶密碼安全，不得與他人共用帳戶</li>
                    <li>對帳戶內的所有活動承擔完全責任</li>
                    <li>發現帳戶被盜用應立即通知平台</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2.2 使用規範</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>不得發佈虛假、誤導性資訊</li>
                    <li>不得從事非法商品交易</li>
                    <li>不得惡意評價或操作評分系統</li>
                    <li>尊重其他用戶，不得有騷擾行為</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 交易規則 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  3. 交易規則
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.1 費用結構</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>平台服務費：交易金額的3-5%</li>
                    <li>代買服務費：由代買者自行設定</li>
                    <li>配送費：依距離和商品類型計算</li>
                    <li>所有費用將在下單前明確顯示</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.2 付款與退款</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>支持信用卡、電子錢包等多種付款方式</li>
                    <li>款項將暫時保管直到交易完成</li>
                    <li>符合條件的退款申請將在3-7個工作天處理</li>
                    <li>惡意退款申請可能導致帳戶限制</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 責任限制 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  4. 責任限制
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.1 平台責任</h4>
                  <p className="text-gray-700">
                    本平台僅提供媒合服務，不對以下情況承擔責任：
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside mt-2">
                    <li>商品品質、真偽或適用性</li>
                    <li>代買者的服務品質或配送延遲</li>
                    <li>因不可抗力因素導致的服務中斷</li>
                    <li>用戶間的直接糾紛或損失</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.2 損害賠償限制</h4>
                  <p className="text-gray-700">
                    在法律允許的最大範圍內，本平台對任何間接、偶然或懲罰性損害不承擔責任。
                    直接損害的賠償責任不超過該筆交易的平台服務費金額。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 智慧財產權 */}
            <Card>
              <CardHeader>
                <CardTitle>5. 智慧財產權</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  本平台的所有內容，包括但不限於文字、圖片、標誌、程式碼等，均受智慧財產權法保護。
                  用戶僅獲得使用許可，不得擅自複製、修改或商業使用。
                </p>
              </CardContent>
            </Card>

            {/* 條款修改 */}
            <Card>
              <CardHeader>
                <CardTitle>6. 條款修改</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  本平台保留隨時修改使用條款的權利。重大修改將透過平台通知或電子郵件告知用戶。
                  繼續使用服務視為同意修改後的條款。
                </p>
              </CardContent>
            </Card>

            {/* 聯絡資訊 */}
            <Card>
              <CardHeader>
                <CardTitle>7. 聯絡資訊</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>公司名稱：</strong>現在買科技股份有限公司</p>
                  <p><strong>地址：</strong>台北市信義區信義路五段7號35樓</p>
                  <p><strong>客服電話：</strong>0800-123-456</p>
                  <p><strong>客服信箱：</strong>legal@nowbuy.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-gray-500">
              本條款受中華民國法律管轄，如有爭議以台北地方法院為第一審管轄法院
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/legal/privacy">
                <Button variant="outline" className="border-[#2ECC71] text-[#2ECC71] hover:bg-green-50">
                  隱私政策
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                  聯絡客服
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}