

import { Stack } from 'expo-router';



// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {

  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="cep" />
        <Stack.Screen name="index" />
      </Stack>
  );
}
