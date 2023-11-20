
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, Text, Theme } from "tamagui"
import config from "../tamagui.config"
import { useState } from 'react'
import ChangeThemes from './component/changeTheme'

export default function HomeLayout() {
  const colorScheme = useColorScheme()
  // const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <TamaguiProvider config={config}>
      {/* <Theme name={isDarkTheme ? 'light' : 'dark'}> */}
      <ThemeProvider
									value={colorScheme === "light" ? DefaultTheme : DarkTheme}
								>
                
        <Stack/>
       
          
      </ThemeProvider>
      {/* </Theme> */}
      </TamaguiProvider>
    </Provider>
  )
}
