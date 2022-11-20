import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Styles
 from '../styles/patternStyles/Styles';

const Stack = createNativeStackNavigator();
const title = 'BLUEFLIX'

export default function RouteStack() {
  return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ 
                  headerShown: false,
                }} 
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ 
                  title: title,
                  headerStyle: {
                    backgroundColor: '#1C1B1B',
                  },
                  headerTintColor: '#1ABEE2',
                  headerTitleAlign: 'center',
             }}
            /> 
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ 
                  title: title,
                  headerStyle: {
                    backgroundColor: '#1C1B1B',
                  },
                  headerTintColor: '#1ABEE2',
                  headerTitleAlign: 'center',
            }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ 
                    title: title,
                    headerStyle: {
                      backgroundColor: '#1C1B1B',
                    },
                    headerTintColor: '#1ABEE2',
                    headerTitleAlign: 'center',                    
            }}
            />           
        </Stack.Navigator>
      </NavigationContainer>

  );
}

