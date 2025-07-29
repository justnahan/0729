import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Bell, 
  Package, 
  Truck, 
  MessageCircle, 
  Star, 
  Gift,
  AlertCircle,
  CheckCircle,
  Clock,
  Settings
} from 'lucide-react'

export const metadata: Metadata = {
  title: '通知中心 | 現在買 NowBuy',
  description: '查看您的訂單更新、代買通知和系統消息',
  openGraph: {
    title: '通知中心 | 現在買 NowBuy',
    description: '查看您的訂單更新、代買通知和系統消息',
    type: 'website',
  }
}

// Mock notification data
const notifications = {
  all: [
    {
      id: 1,
      type: 'order',
      title: '訂單已完成',
      message: '您的訂單「經典白色運動鞋」已送達，請確認收貨',
      time: '5分鐘前',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face',
      userName: '陳小美'
    },
    {
      id: 2,
      type: 'proxy',
      title: '新的代買機會',
      message: '附近有 3 筆新的代買訂單，預計收益 NT$150',
      time: '12分鐘前',
      read: false,
      avatar: null,
      userName: null
    },
    {
      id: 3,
      type: 'message',
      title: '代買者訊息',
      message: '王大哥：「商品已購買完成，正在前往您的地址」',
      time: '25分鐘前',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=face',
      userName: '王大哥'
    },
    {
      id: 4,
      type: 'rating',
      title: '收到新評價',
      message: '李媽媽給您 5 星好評：「服務很棒，商品新鮮！」',
      time: '1小時前',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&crop=face',
      userName: '李媽媽'
    },
    {
      id: 5,
      type: 'system',
      title: '系統更新',
      message: '新增團購功能，邀請鄰居一起購買享更多優惠！',
      time: '3小時前',
      read: true,
      avatar: null,
      userName: null
    },
    {
      id: 6,
      type: 'promotion',
      title: '限時優惠',
      message: '本週代買免服務費，立即體驗鄰里代買服務！',
      time: '1天前',
      read: true,
      avatar: null,
      userName: null
    }
  ]
}

function getNotificationIcon(type: string) {
  switch (type) {
    case 'order':
      return <Package className="w-5 h-5 text-[#FF6B35]" />
    case 'proxy':
      return <Truck className="w-5 h-5 text-[#2ECC71]" />
    case 'message':
      return <MessageCircle className="w-5 h-5 text-blue-500" />
    case 'rating':
      return <Star className="w-5 h-5 text-yellow-500" />
    case 'promotion':
      return <Gift className="w-5 h-5 text-purple-500" />
    case 'system':
      return <AlertCircle className="w-5 h-5 text-gray-500" />
    default:
      return <Bell className="w-5 h-5 text-gray-400" />
  }
}

function getNotificationBg(type: string, read: boolean) {
  if (read) return 'bg-white'
  
  switch (type) {
    case 'order':
      return 'bg-orange-50 border-orange-200'
    case 'proxy':
      return 'bg-green-50 border-green-200'
    case 'message':
      return 'bg-blue-50 border-blue-200'
    case 'rating':
      return 'bg-yellow-50 border-yellow-200'
    case 'promotion':
      return 'bg-purple-50 border-purple-200'
    case 'system':
      return 'bg-gray-50 border-gray-200'
    default:
      return 'bg-gray-50'
  }
}

export default function NotificationPage() {
  const unreadCount = notifications.all.filter(n => !n.read).length
  const orderNotifications = notifications.all.filter(n => n.type === 'order')
  const proxyNotifications = notifications.all.filter(n => n.type === 'proxy')
  const messageNotifications = notifications.all.filter(n => n.type === 'message')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-7 h-7 text-[#FF6B35]" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">通知中心</h1>
                <p className="text-gray-600">
                  {unreadCount > 0 ? `您有 ${unreadCount} 則未讀通知` : '所有通知已讀'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                全部標為已讀
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              全部 ({notifications.all.length})
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              訂單 ({orderNotifications.length})
            </TabsTrigger>
            <TabsTrigger value="proxy" className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              代買 ({proxyNotifications.length})
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              訊息 ({messageNotifications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.all.map((notification) => (
              <Card 
                key={notification.id} 
                className={`cursor-pointer hover:shadow-md transition-all ${getNotificationBg(notification.type, notification.read)}`}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      {notification.avatar ? (
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={notification.avatar} />
                          <AvatarFallback>{notification.userName}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          {getNotificationIcon(notification.type)}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {notification.time}
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            {orderNotifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`cursor-pointer hover:shadow-md transition-all ${getNotificationBg(notification.type, notification.read)}`}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={notification.avatar || undefined} />
                        <AvatarFallback>{notification.userName || 'U'}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                        )}
                        <Badge className="bg-[#FF6B35] text-white">訂單</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          {notification.time}
                        </div>
                        <Button size="sm" className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                          查看訂單
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="proxy" className="space-y-4">
            {proxyNotifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`cursor-pointer hover:shadow-md transition-all ${getNotificationBg(notification.type, notification.read)}`}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Truck className="w-6 h-6 text-[#2ECC71]" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                        )}
                        <Badge className="bg-[#2ECC71] text-white">代買</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          {notification.time}
                        </div>
                        <Button size="sm" className="bg-[#2ECC71] hover:bg-green-600 text-white">
                          查看機會
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            {messageNotifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`cursor-pointer hover:shadow-md transition-all ${getNotificationBg(notification.type, notification.read)}`}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={notification.avatar || undefined} />
                        <AvatarFallback>{notification.userName || 'U'}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                        )}
                        <Badge variant="secondary" className="text-blue-600 bg-blue-100">訊息</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          {notification.time}
                        </div>
                        <Button size="sm" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                          回覆訊息
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Notification Settings */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              通知設定
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">推送通知</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-gray-700">訂單狀態更新</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-gray-700">新的代買機會</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-gray-700">即時訊息</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">營銷活動</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">郵件通知</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-gray-700">每日摘要</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">每週報告</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">優惠活動</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white">
                儲存設定
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}