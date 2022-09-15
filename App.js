import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Details from './Screens/Details';
import Home from './Screens/Home';

const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    background : "transparent"
  }
}
export default function App() {
  const Stack = createNativeStackNavigator();
  const [loading] = useFonts({
    InterBold : require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold : require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium : require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular : require("./assets/fonts/Inter-Regular.ttf"),
    InterLight : require("./assets/fonts/Inter-Light.ttf"),
  }) ;

  if(!loading) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
