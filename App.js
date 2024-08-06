// Library Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Screen Imports
import { HomeScreen } from './screens/HomeScreen';
import { PhotoSubmissionScreen } from './screens/PhotoSubmissionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='PhotoSubmission'
            component={PhotoSubmissionScreen}
            options={{
              title: 'Submit Photo'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}