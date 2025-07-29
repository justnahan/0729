import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '隱私政策 | 現在買 NowBuy',
  description: '現在買 NowBuy 隱私政策，了解我們如何保護您的個人資料',
  openGraph: {
    title: '隱私政策 | 現在買 NowBuy',
    description: '現在買 NowBuy 隱私政策',
    type: 'website',
  }
}

export default function PrivacyPage() {
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
              <Shield className="w-6 h-6 text-[#2ECC71]" />
              <h1 className="text-2xl font-bold text-gray-900">隱私政策</h1>
            </div>
          </div>
          <p className="text-gray-600">
            最後更新日期：2024年7月29日
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Commitment */}
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#2ECC71] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="font-bold text-gray-900 mb-2">我們的隱私承諾</h2>
                  <p className="text-gray-700">
                    現在買 NowBuy 致力於保護您的隱私權。本政策說明我們如何收集、使用、
                    儲存和保護您的個人資料，以及您對個人資料享有的權利。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* 資料收集 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  1. 我們收集的資料
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.1 帳戶資料</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>姓名、電話號碼、電子郵件地址</li>
                    <li>身份驗證資料（僅限代買者）</li>
                    <li>配送地址和偏好設定</li>
                    <li>支付方式資訊（經加密處理）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.2 交易資料</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>訂單內容和交易記錄</li>
                    <li>代買服務評價與回饋</li>
                    <li>客服對話記錄</li>
                    <li>爭議處理相關資料</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.3 技術資料</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>設備資訊（IP位址、瀏覽器類型）</li>
                    <li>使用行為資料（頁面瀏覽、點擊記錄）</li>
                    <li>位置資訊（用於媒合附近代買者）</li>
                    <li>Cookie 和類似技術收集的資料</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 資料使用 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#FF6B35]" />
                  2. 資料使用目的
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2.1 服務提供</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>處理代買訂單和交易</li>
                    <li>媒合購買者與代買者</li>
                    <li>提供客服支援</li>
                    <li>處理爭議和退款</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2.2 服務改善</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>分析使用模式以優化用戶體驗</li>
                    <li>開發新功能和服務</li>
                    <li>個人化推薦內容</li>
                    <li>防範詐欺和安全威脅</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2.3 法律合規</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>遵守相關法律法規要求</li>
                    <li>配合政府機關調查</li>
                    <li>保護平台和用戶權益</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 資料分享 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  3. 資料分享與揭露
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.1 服務所需分享</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>與配對的代買者分享必要的訂單資訊</li>
                    <li>與支付服務商分享交易必要資訊</li>
                    <li>與物流合作夥伴分享配送資訊</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.2 法律要求</h4>
                  <p className="text-gray-700">
                    在以下情況下，我們可能需要揭露您的個人資料：
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside mt-2">
                    <li>法院命令或政府機關要求</li>
                    <li>調查違法行為</li>
                    <li>保護平台或用戶安全</li>
                    <li>履行法律義務</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.3 不會進行的分享</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>不會販售個人資料給第三方</li>
                    <li>不會用於未經同意的行銷活動</li>
                    <li>不會與競爭對手分享商業敏感資訊</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 資料保護 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  4. 資料保護措施
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.1 技術安全</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>使用 SSL/TLS 加密傳輸</li>
                    <li>資料庫加密儲存</li>
                    <li>定期安全性檢測</li>
                    <li>存取權限控制</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.2 組織安全</h4>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>員工資料處理訓練</li>
                    <li>簽署保密協議</li>
                    <li>最小權限原則</li>
                    <li>定期安全稽核</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 用戶權利 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#2ECC71]" />
                  5. 您的權利
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.1 存取權</h4>
                  <p className="text-gray-700">
                    您有權要求查看我們持有的您的個人資料副本。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.2 更正權</h4>
                  <p className="text-gray-700">
                    您可以要求更正不準確或不完整的個人資料。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.3 刪除權</h4>
                  <p className="text-gray-700">
                    在特定情況下，您可以要求刪除您的個人資料。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.4 限制處理權</h4>
                  <p className="text-gray-700">
                    您可以要求限制某些個人資料的處理。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.5 資料可攜權</h4>
                  <p className="text-gray-700">
                    在技術可行的情況下，您可以要求將資料轉移給其他服務提供商。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookie 政策 */}
            <Card>
              <CardHeader>
                <CardTitle>6. Cookie 和追蹤技術</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  我們使用 Cookie 和類似技術來改善您的使用體驗：
                </p>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li><strong>必要 Cookie：</strong>維持基本功能運作</li>
                  <li><strong>功能 Cookie：</strong>記住您的偏好設定</li>
                  <li><strong>分析 Cookie：</strong>了解網站使用情況</li>
                  <li><strong>行銷 Cookie：</strong>提供相關廣告內容</li>
                </ul>
                <p className="text-gray-700">
                  您可以透過瀏覽器設定管理 Cookie 偏好。
                </p>
              </CardContent>
            </Card>

            {/* 資料保存 */}
            <Card>
              <CardHeader>
                <CardTitle>7. 資料保存期間</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li><strong>帳戶資料：</strong>帳戶存續期間及刪除後6個月</li>
                  <li><strong>交易記錄：</strong>交易完成後5年（稅務法規要求）</li>
                  <li><strong>客服記錄：</strong>處理完成後2年</li>
                  <li><strong>技術日誌：</strong>產生後12個月</li>
                </ul>
              </CardContent>
            </Card>

            {/* 聯絡方式 */}
            <Card>
              <CardHeader>
                <CardTitle>8. 聯絡我們</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  如對本隱私政策有任何疑問，或希望行使您的權利，請聯絡我們：
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>資料保護負責人：</strong>隱私權保護小組</p>
                  <p><strong>電子郵件：</strong>privacy@nowbuy.com</p>
                  <p><strong>郵寄地址：</strong>台北市信義區信義路五段7號35樓</p>
                  <p><strong>客服專線：</strong>0800-123-456</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-gray-500">
              本隱私政策的解釋與適用以中華民國法律為準
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/legal/terms">
                <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
                  使用條款
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-[#2ECC71] hover:bg-green-600 text-white">
                  聯絡我們
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}