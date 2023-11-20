import { Toast, useToastController, useToastState } from '@tamagui/toast'
import React from 'react'
import { Button, Label, Switch, XStack, YStack } from 'tamagui'

export default function AlerDialog() {
    const [native, setNative] = React.useState(false)
  return (
    <YStack space alignItems="center">
      <ToastControl native={native} />
      {/* <CurrentToast />

      <NativeOptions native={native} setNative={setNative} /> */}
    </YStack>
  )
}

function ToastControl({ native }: { native: boolean }) {
  const toast = useToastController()
  return (
    <XStack space="$2" justifyContent="center">
      <Button
      bc={'$backgroundHover'}
        onPress={() => {
          toast.show('Successfully saved!', {
            message: "Don't worry, we've got your data.",
            native,
          })
        }}
      >
        Show
      </Button>
      <Button
      bc={'$backgroundHover'}
        onPress={() => {
          toast.hide()
        }}
      >
        Hide
      </Button>
    </XStack>
  )


    
}
const NativeOptions = ({
    native,
    setNative,
  }: {
    native: boolean
    setNative: (native: boolean) => void
  }) => {
    return (
      <XStack space="$3">
        <Label size="$1" onPress={() => setNative(false)}>
          Custom
        </Label>
        <Switch
          id="native-toggle"
          nativeID="native-toggle"
          theme="active"
          size="$1"
          checked={!!native}
          onCheckedChange={(val) => setNative(val)}
        >
          <Switch.Thumb
            animation={[
              'quick',
              {
                transform: {
                  overshootClamping: true,
                },
              },
            ]}
          />
        </Switch>
  
        <Label size="$1" onPress={() => setNative(true)}>
          Native
        </Label>
      </XStack>
    )
  }