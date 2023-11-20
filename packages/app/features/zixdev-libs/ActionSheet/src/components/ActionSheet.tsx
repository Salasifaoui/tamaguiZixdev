import { Toast, useToastController, useToastState } from '@tamagui/toast'
import { Sheet, Button } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { ZixCercleButton } from 'app/features/zixdev-libs/Button/ZixButtonCercle'

export default function ActionSheet() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()
  return (
    <>
      <ZixCercleButton onPress={() => setOpen((x) => !x)}>
        Open
      </ZixCercleButton>
      <Sheet
        modal
        animation="lazy"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[30]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
