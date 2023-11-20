import { HomeScreen } from 'app/features/home/screen'
import { XStack, useTheme, Paragraph, Label, Switch, Theme } from 'tamagui'
import { Stack } from 'expo-router'
import ChangeThemes from './component/changeTheme'
import { useState } from 'react'
import ToggleColor from './component/toggleColor'

export default function Screen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [color, setColor] = useState('error')
  //const theme = useTheme()
  return (
    <>
      <Theme name={isDarkTheme ? `light_${color}` : `dark_${color}`}>
        <Stack.Screen
          options={{
            title: 'Home',
          }}
        />
        <ToggleColor changeColor={setColor} />
        <ChangeThemes onCheckedChange={setIsDarkTheme} />
        <HomeScreen />
      </Theme>
    </>
  )
}
