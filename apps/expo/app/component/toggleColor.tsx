import { XGroup, XStack, SwitchProps, Paragraph, Button } from 'tamagui'
import { Moon, Sun } from '@tamagui/lucide-icons'

export default function ToggleColor({ changeColor }) {
  return (
    <XStack jc='space-between' padding="$4">
      <Paragraph>Change Color: </Paragraph>
      <XGroup>
    <XGroup.Item>
      <Button bc={'$color.error600'} onPress={() => changeColor('error')}></Button>
    </XGroup.Item>
    <XGroup.Item>
    <Button bc={'$color.brand600'} onPress={() => changeColor('brand')}></Button>
    </XGroup.Item>
    <XGroup.Item>
    <Button bc={'$color.success600'} onPress={() => changeColor('success')}></Button>
    </XGroup.Item>
    <XGroup.Item>
    <Button bc={'$color.warning600'} onPress={() => changeColor('warning')}></Button>
    </XGroup.Item>
    <XGroup.Item>
    <Button bc={'$color.neutral600'} onPress={() => changeColor('neutral')}></Button>
    </XGroup.Item>
  </XGroup>
    </XStack>
  )
}