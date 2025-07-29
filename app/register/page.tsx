import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingCart, 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Shield,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: '用戶註冊 | 現在買 NowBuy',
  description: '加入現在買社區，享受便利的鄰里代買服務',
  openGraph: {
    title: '用戶註冊 | 現在買 NowBuy',
    description: '加入現在買社區，享受便利的鄰里代買服務',
    type: 'website',
  }
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            加入現在買社區
          </h1>
          <p className="text-xl text-gray-600">
            選擇您的身份，開始溫暖的鄰里互助之旅
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Buyer Registration */}
          <Card className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-[#FF6B35]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                我要購物
              </CardTitle>
              <p className="text-gray-600">
                享受便利的鄰里代買服務
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">快速找到附近代買者</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">多樣商品選擇</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">安全交易保障</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">即時訂單追蹤</span>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">填寫基本資料</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="buyer-name">姓名</Label>
                      <Input id="buyer-name" placeholder="請輸入真實姓名" />
                    </div>
                    <div>
                      <Label htmlFor="buyer-phone">手機號碼</Label>
                      <Input id="buyer-phone" placeholder="09XX-XXX-XXX" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="buyer-email">電子郵件</Label>
                    <Input id="buyer-email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="buyer-address">收貨地址</Label>
                    <Textarea 
                      id="buyer-address" 
                      placeholder="請輸入詳細地址（包含樓層、門牌號）"
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="buyer-terms" />
                    <Label htmlFor="buyer-terms" className="text-sm text-gray-600">
                      我同意 <a href="#" className="text-[#FF6B35] underline">服務條款</a> 和 <a href="#" className="text-[#FF6B35] underline">隱私政策</a>
                    </Label>
                  </div>
                  
                  <Button className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white font-semibold py-3">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    立即註冊為購買者
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Proxy Registration */}
          <Card className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-[#2ECC71]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2ECC71] to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                我要代買
              </CardTitle>
              <p className="text-gray-600">
                賺取收入，幫助鄰居
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">彈性工作時間</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">額外收入來源</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">幫助社區鄰居</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  <span className="text-gray-700">建立信譽評分</span>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">代買者申請</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="proxy-name">姓名</Label>
                      <Input id="proxy-name" placeholder="請輸入真實姓名" />
                    </div>
                    <div>
                      <Label htmlFor="proxy-phone">手機號碼</Label>
                      <Input id="proxy-phone" placeholder="09XX-XXX-XXX" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="proxy-email">電子郵件</Label>
                    <Input id="proxy-email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="proxy-area">服務區域</Label>
                    <Input id="proxy-area" placeholder="例：大安區、信義區" />
                  </div>
                  
                  <div>
                    <Label htmlFor="proxy-vehicle">交通工具</Label>
                    <Input id="proxy-vehicle" placeholder="機車、汽車、步行等" />
                  </div>
                  
                  <div>
                    <Label htmlFor="proxy-intro">自我介紹</Label>
                    <Textarea 
                      id="proxy-intro" 
                      placeholder="簡單介紹自己，讓鄰居更了解您"
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="proxy-id-verify" />
                      <Label htmlFor="proxy-id-verify" className="text-sm text-gray-600">
                        我同意進行身份驗證
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="proxy-terms" />
                      <Label htmlFor="proxy-terms" className="text-sm text-gray-600">
                        我同意 <a href="#" className="text-[#FF6B35] underline">代買者條款</a> 和 <a href="#" className="text-[#FF6B35] underline">隱私政策</a>
                      </Label>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#2ECC71] hover:bg-green-600 text-white font-semibold py-3">
                    <Truck className="w-5 h-5 mr-2" />
                    申請成為代買者
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust & Security */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#34495E] to-gray-700 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">安全保障</h3>
              <p className="text-gray-300">
                我們重視每位用戶的安全與隱私
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <User className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">身份認證</h4>
                <p className="text-sm text-gray-300">實名制註冊，確保用戶真實性</p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">交易保障</h4>
                <p className="text-sm text-gray-300">資金託管，安全無憂</p>
              </div>
              <div>
                <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">24/7 客服</h4>
                <p className="text-sm text-gray-300">隨時提供協助與支援</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}