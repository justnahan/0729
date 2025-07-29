import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Shield,
  Heart,
  Users,
  Clock
} from 'lucide-react'

const footerLinks = {
  platform: [
    { label: '關於現在買', href: '/about' as const },
    { label: '商品列表', href: '/products' as const },
    { label: '聯絡我們', href: '/contact' as const },
  ],
  services: [
    { label: '代買服務', href: '#' as const },
    { label: '團購功能', href: '#' as const },
    { label: '緊急代買', href: '#' as const },
    { label: '商家合作', href: '#' as const },
  ],
  support: [
    { label: '幫助中心', href: '#' as const },
    { label: '聯絡客服', href: '/contact' as const },
    { label: '常見問題', href: '#' as const },
    { label: '使用教學', href: '#' as const },
  ],
  legal: [
    { label: '使用條款', href: '#' as const },
    { label: '隱私政策', href: '#' as const },
    { label: '退款政策', href: '#' as const },
    { label: '爭議處理', href: '#' as const },
  ]
}

const trustBadges = [
  {
    icon: Shield,
    title: '交易保障',
    description: '100% 安全交易'
  },
  {
    icon: Users,
    title: '實名認證',
    description: '用戶身份驗證'
  },
  {
    icon: Clock,
    title: '24/7 客服',
    description: '全天候服務'
  },
  {
    icon: Heart,
    title: '社區互信',
    description: '鄰里互助精神'
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Badges Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <badge.icon className="w-8 h-8 text-[#FF6B35] mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">{badge.title}</h4>
                <p className="text-sm text-gray-400">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] to-orange-500">
                <span className="text-white font-bold">現</span>
              </div>
              <div className="font-bold text-xl">
                現在買 <span className="text-[#FF6B35]">NowBuy</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              連結鄰里情感，創造便利生活。透過社區共享購物平台，
              讓每個人都能成為彼此生活中的小幫手。
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">訂閱最新消息</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="輸入您的電子信箱"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FF6B35]"
                />
                <Button className="bg-[#FF6B35] hover:bg-orange-600 text-white whitespace-nowrap">
                  訂閱
                </Button>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">平台服務</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">服務項目</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">客戶支援</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">法律條款</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#FF6B35]" />
              <div>
                <p className="text-sm text-gray-400">客服專線</p>
                <p className="text-white font-medium">0800-123-456</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#FF6B35]" />
              <div>
                <p className="text-sm text-gray-400">電子信箱</p>
                <p className="text-white font-medium">support@nowbuy.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#FF6B35]" />
              <div>
                <p className="text-sm text-gray-400">公司地址</p>
                <p className="text-white font-medium">台北市信義區</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-[#FF6B35]" />
              <div>
                <p className="text-sm text-gray-400">服務時間</p>
                <p className="text-white font-medium">每日 9:00-21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 現在買 NowBuy. All rights reserved. | Made with ❤️ for community
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}