import { Stack } from "expo-router";

export default function AccountLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "My Account" }}
      />
      <Stack.Screen
        name="profile1"
        options={{ title: "Profile 1" }}
      />
      <Stack.Screen
        name="profile2"
        options={{ title: "Profile 2" }}
      />
    </Stack>
  );
}