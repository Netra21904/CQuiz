import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from './src/quiz'; 
import Playground from './src/playground'; 
import Levels from './src/level'; 
import Home from './src/home'; 
import Login from './src/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="login"> 
      <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Quiz' component={Quiz}/>
        <Stack.Screen name='Levels' component={Levels}/>
        <Stack.Screen name='Playground' component={Playground}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


{/* npm install expo-checkbox */}
{/* npm install @react-navigation/native */}
{/* npx install-expo-modules@latest */}
{/* npm install react-native-gesture-handler */}
{/* npx expo install babel-plugin-module-resolver */}
{/* npm install react-native-safe-area-context */}
