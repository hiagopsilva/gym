import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Text, View } from 'react-native'
import 'react-native-reanimated'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      {fontsLoaded ? <Text>Hello world!</Text> : <></>}
    </View>
  )
}
