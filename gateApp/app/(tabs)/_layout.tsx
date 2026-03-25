import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2F80ED',
        tabBarStyle: { height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'index') iconName = 'home';
          else if (route.name === 'notifications') iconName = 'notifications';
          else if (route.name === 'residents') iconName = 'people';
          else if (route.name === 'security') iconName = 'shield-checkmark';
          else if (route.name === 'marketplace') iconName = 'cart';
          else if (route.name === 'amenities') iconName = 'calendar';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="notifications" options={{ title: 'Notifications' }} />
      <Tabs.Screen name="residents" options={{ title: 'Residents' }} />
      <Tabs.Screen name="security" options={{ title: 'Security' }} />
      <Tabs.Screen name="marketplace" options={{ title: 'Market' }} />
      <Tabs.Screen name="amenities" options={{ title: 'Amenities' }} />
    </Tabs>
  );
}