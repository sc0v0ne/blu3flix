import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Styles
 from '../styles/patternStyles/Styles';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: 'BLUEFLIX',
                headerStyle: {
                    backgroundColor: '#1C1B1B',
                  },
                  headerTintColor: '#1ABEE2',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerMode: 'none',
                cardStyle: { shadowColor: 'transparent' },
             }}
            /> 
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: 'BLUEFLIX',
                headerStyle: {
                    backgroundColor: '#1C1B1B',
                  },
                  headerTintColor: '#1ABEE2',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerMode: 'none',
                cardStyle: { shadowColor: 'transparent' },
            }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ title: 'BLUEFLIX',
                headerStyle: {
                    backgroundColor: '#1C1B1B',
                  },
                  headerTintColor: '#1ABEE2',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerMode: 'none',
                cardStyle: { shadowColor: 'transparent' },
            }}
            />           
        </Stack.Navigator>
      </NavigationContainer>

  );
}

