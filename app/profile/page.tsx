import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar' 
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Package, 
  Truck,
  Heart,
  Settings,
  Camera,
  Shield,
  CreditCard,
  Bell
} from 'lucide-react'

export const metadata: Metadata = {
  title: '個人資料 | 現在買 NowBuy',
  description: '管理您的個人資料、地址和偏好設定',
  openGraph: {
    title: '個人資料 | 現在買 NowBuy',
    description: '管理您的個人資料、地址和偏好設定',
    type: 'website',
  }
}

// Mock user data
const userData = {
  name: '陳小美',
  email: 'chen@example.com',
  phone: '0912-345-678',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face',
  joinDate: '2023-05-15',
  rating: 4.9,
  completedOrders: 156,
  totalSpent: 48650,
  addresses: [
    {
      id: 1,
      label: '家',
      address: '台北市大安區復興南路一段 123 號 5F',
      isDefault: true
    },
    {
      id: 2,
      label: '公司',
      address: '台北市信義區信義路五段 7 號 20F',
      isDefault: false
    }
  ],
  preferences: {
    notifications: {
      orderUpdates: true,
      proxyOpportunities: true,
      messages: true,
      promotions: false
    },
    privacy: {
      showProfile: true,
      showRating: true,
      showStats: false
    }
  }
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback>{userData.name}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-gray-600 flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {userData.rating} 分 • 加入於 {userData.joinDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Stats */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  個人統計
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={userData.avatar} />
                      <AvatarFallback>{userData.name}</AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0 bg-[#FF6B35] hover:bg-orange-600"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-gray-900">{userData.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mt-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{userData.rating}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">完成訂單</span>
                    <Badge className="bg-[#2ECC71] text-white">
                      {userData.completedOrders}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">總消費</span>
                    <span className="font-semibold text-[#FF6B35]">
                      NT${userData.totalSpent.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">會員等級</span>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      黃金會員
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>快速操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white">
                  <Package className="w-4 h-4 mr-2" />
                  查看我的訂單
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  我的收藏
                </Button>
                <Button variant="outline" className="w-full">
                  <Truck className="w-4 h-4 mr-2" />
                  成為代買者
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">基本資料</TabsTrigger>
                <TabsTrigger value="addresses">地址管理</TabsTrigger>
                <TabsTrigger value="settings">設定</TabsTrigger>
                <TabsTrigger value="security">安全</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>個人資料</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">姓名</Label>
                        <Input id="name" defaultValue={userData.name} />
                      </div>
                      <div>
                        <Label htmlFor="phone">手機號碼</Label>
                        <Input id="phone" defaultValue={userData.phone} />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">電子郵件</Label>
                      <Input id="email" type="email" defaultValue={userData.email} />
                    </div>

                    <div>
                      <Label htmlFor="bio">自我介紹</Label>
                      <Textarea 
                        id="bio" 
                        placeholder="簡單介紹一下自己，讓鄰居更了解您"
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                      儲存變更
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>我的地址</CardTitle>
                      <Button size="sm" className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                        新增地址
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {userData.addresses.map((address) => (
                      <div key={address.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-gray-900">
                                {address.label}
                              </span>
                              {address.isDefault && (
                                <Badge className="bg-[#FF6B35] text-white text-xs">
                                  預設
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm">
                              {address.address}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              編輯
                            </Button>
                            {!address.isDefault && (
                              <Button size="sm" variant="outline" className="text-red-600">
                                刪除
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      通知設定
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">訂單更新</h4>
                          <p className="text-sm text-gray-600">接收訂單狀態變更通知</p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked={userData.preferences.notifications.orderUpdates}
                          className="rounded"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">代買機會</h4>
                          <p className="text-sm text-gray-600">附近新的代買機會通知</p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked={userData.preferences.notifications.proxyOpportunities}
                          className="rounded"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">即時訊息</h4>
                          <p className="text-sm text-gray-600">收到新訊息時通知</p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked={userData.preferences.notifications.messages}
                          className="rounded"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">優惠活動</h4>
                          <p className="text-sm text-gray-600">接收促銷和活動資訊</p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked={userData.preferences.notifications.promotions}
                          className="rounded"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>隱私設定</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">顯示個人資料</h4>
                        <p className="text-sm text-gray-600">其他用戶可以查看您的基本資料</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked={userData.preferences.privacy.showProfile}
                        className="rounded"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">顯示評分</h4>
                        <p className="text-sm text-gray-600">公開顯示您的評分和評價</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked={userData.preferences.privacy.showRating}
                        className="rounded"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      帳戶安全
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">密碼</h4>
                          <p className="text-sm text-gray-600">上次更新：2024-01-10</p>
                        </div>
                        <Button size="sm" variant="outline">
                          變更密碼
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">兩步驟驗證</h4>
                          <p className="text-sm text-gray-600">為您的帳戶增加額外保護</p>
                        </div>
                        <Button size="sm" className="bg-[#2ECC71] hover:bg-green-600 text-white">
                          已啟用
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">手機驗證</h4>
                          <p className="text-sm text-gray-600">{userData.phone}</p>
                        </div>
                        <Badge className="bg-[#2ECC71] text-white">
                          已驗證
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      付款方式
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">•••• •••• •••• 1234</p>
                          <p className="text-sm text-gray-600">到期 12/26</p>
                        </div>
                      </div>
                      <Badge className="bg-[#FF6B35] text-white">預設</Badge>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      新增付款方式
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}