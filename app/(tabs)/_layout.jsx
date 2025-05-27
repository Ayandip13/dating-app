import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="eye" color="black" size={24} />
            ) : (
              <Feather name="eye" color="gray" size={24} />
            ),
        }}
      />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="bio" />
    </Tabs>
  );
}
