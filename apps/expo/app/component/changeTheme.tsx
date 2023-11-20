import { Switch, XStack, SwitchProps, Paragraph, Label } from 'tamagui'
import { Moon, Sun } from '@tamagui/lucide-icons'

export default function ChangeThemes({ ...res }: SwitchProps) {
  return (
    <XStack jc='space-between' padding="$4">
      <Paragraph>Change theme: </Paragraph>
      <XStack alignItems="center" justifyContent="space-between" space="$4">
        <Sun size={30} />
        <Switch id="switch-demo" size="$4" {...res}>
          <Switch.Thumb animation="quick" />
        </Switch>
        <Moon size={30} />
      </XStack>
    </XStack>
  )
}
