import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,   // ✅ SHOW HEADER (Back button will come)
      }}
    />
  );
}