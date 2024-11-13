import { Stack } from "expo-router";
import "../global.css"
import { useFonts } from "expo-font";
export default function RootLayout() {
  useFonts({
    "outfit": require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="signup/index" options={{ headerShown: false }} />
    </Stack>
  );
}
