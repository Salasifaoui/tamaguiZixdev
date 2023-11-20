import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import ActionSheet from '../zixdev-libs/ActionSheet/src/components/ActionSheet'
import AlerDialog from '../zixdev-libs/AlertDialog/src/components/AlerDialog'
import { ZixButton } from '../zixdev-libs/Button/ZixButton'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/cards',
  })

 

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space bc={'$background'}>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Salah.</H1>
        <Paragraph ta="center">
          
        </Paragraph>

        <AlerDialog />
      </YStack>

      <XStack>
        <ZixButton {...linkProps}>List Products</ZixButton>
      </XStack>

      <ActionSheet />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="lazy"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
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
