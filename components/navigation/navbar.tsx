'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CartCounter } from '@/components/cart-counter'
import { 
  Menu, 
  User, 
  Bell, 
  Search,
  LogOut,
  Settings,
  Package,
  Truck,
  Heart
} from 'lucide-react'

const navigationItems = [
  { href: '/' as const, label: '首頁', active: false },
  { href: '/products' as const, label: '商品', active: false },
  { href: '/about' as const, label: '關於我們', active: false },
  { href: '/contact' as const, label: '聯絡我們', active: false },
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Mock login state
  const [notificationCount] = useState(2) // Mock notifications

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] to-orange-500">
              <span className="text-white font-bold text-sm">現</span>
            </div>
            <div className="font-bold text-xl text-gray-900">
              現在買 <span className="text-[#FF6B35]">NowBuy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Hidden on mobile */}
            <Link href="/search">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex text-gray-600 hover:text-[#FF6B35]"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Link>

            {/* Shopping Cart */}
            <CartCounter />

            {/* Notifications */}
            {isLoggedIn && (
              <Link href="/notifications">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative text-gray-600 hover:text-[#FF6B35]"
                >
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <Badge 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-red-500 hover:bg-red-600"
                    >
                      {notificationCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            )}

            {/* User Menu */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face" />
                      <AvatarFallback>用戶</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">陳小美</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        chen@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/profile">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>個人資料</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/orders">
                    <DropdownMenuItem>
                      <Package className="mr-2 h-4 w-4" />
                      <span>我的訂單</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>
                    <Truck className="mr-2 h-4 w-4" />
                    <span>代買記錄</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Heart className="mr-2 h-4 w-4" />
                    <span>收藏清單</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>帳戶設定</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-600 focus:text-red-600"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>登出</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Button 
                  variant="ghost"
                  onClick={() => setIsLoggedIn(true)}
                  className="text-gray-700 hover:text-[#FF6B35]"
                >
                  登入
                </Button>
                <Button 
                  className="bg-[#FF6B35] hover:bg-orange-600 text-white"
                  onClick={() => setIsLoggedIn(true)}
                >
                  註冊
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden text-gray-600 hover:text-[#FF6B35]"
                  size="sm"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Search */}
                  <Link href="/search">
                    <Button
                      variant="outline"
                      className="justify-start border-gray-200 hover:border-[#FF6B35] hover:text-[#FF6B35] w-full"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      搜尋商品...
                    </Button>
                  </Link>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile User Actions */}
                  {isLoggedIn ? (
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center space-x-3 px-4 py-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&auto=format&fit=crop&crop=face" />
                          <AvatarFallback>用戶</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">陳小美</div>
                          <div className="text-sm text-gray-500">chen@example.com</div>
                        </div>
                      </div>
                      
                      <Link href="/profile">
                        <button
                          className="w-full text-left px-4 py-3 text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <User className="inline mr-2 h-4 w-4" />
                          個人資料
                        </button>
                      </Link>
                      <Link href="/orders">
                        <button
                          className="w-full text-left px-4 py-3 text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Package className="inline mr-2 h-4 w-4" />
                          我的訂單
                        </button>
                      </Link>
                      <button
                        className="w-full text-left px-4 py-3 text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Truck className="inline mr-2 h-4 w-4" />
                        代買記錄
                      </button>
                      <button
                        className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        onClick={() => {
                          setIsLoggedIn(false)
                          setIsOpen(false)
                        }}
                      >
                        <LogOut className="inline mr-2 h-4 w-4" />
                        登出
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-4 border-t">
                      <Button 
                        className="w-full bg-[#FF6B35] hover:bg-orange-600 text-white"
                        onClick={() => {
                          setIsLoggedIn(true)
                          setIsOpen(false)
                        }}
                      >
                        立即註冊
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-gray-200 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                        onClick={() => {
                          setIsLoggedIn(true)
                          setIsOpen(false)
                        }}
                      >
                        登入帳戶
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}