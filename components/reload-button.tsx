'use client'

import { Button } from '@/components/ui/button'

export function ReloadButton() {
  return (
    <Button variant="outline" onClick={() => window.location.reload()}>
      重新載入
    </Button>
  )
}