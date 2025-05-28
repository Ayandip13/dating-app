import { Tabs } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60, //less height
          paddingBottom: 9, // ekdom bottom e thakar jonno
          backgroundColor: "#fff",
          // borderTopWidth: 1,
          borderTopColor: "#ddd",
          elevation: 0.2, // Android elevation remove
          shadowOpacity: 0, // iOS shadow remove
        },
      }}
    >
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
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="chatbubble-ellipses-outline"
                color="black"
                size={24}
              />
            ) : (
              <Ionicons
                name="chatbox-ellipses-outline"
                color="gray"
                size={24}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="bio"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="man-outline" color="black" size={24} />
            ) : (
              <Ionicons name="man-outline" color="gray" size={24} />
            ),
        }}
      />
    </Tabs>
  );
}
