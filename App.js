// Library Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OpenAI from 'openai';

// Screen Imports
import { HomeScreen } from './screens/HomeScreen';
import { PhotoSubmissionScreen } from './screens/PhotoSubmissionScreen';
import { ResultsScreen } from './screens/ResultsScreen';

// API Imports
import Config from './api/Config';

const Stack = createNativeStackNavigator();
global.openai = new OpenAI(Config);

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
          <Stack.Screen
            name='Results'
            component={ResultsScreen}
            options={{
              title: 'Results'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}