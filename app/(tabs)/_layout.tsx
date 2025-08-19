import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon:()=> <Ionicons name="home" size={24} color="black" />,
      }} />
    </Tabs>
  );
}
