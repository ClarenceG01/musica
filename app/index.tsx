import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Initialize Spotify connection here if needed
    // Then redirect to main app after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="items-center justify-center flex-1 bg-secondary">
      {/* App Logo/Icon */}
      <View className="items-center mb-8">
        <View className="items-center justify-center w-24 h-24 mb-4 rounded-full">
          <Text className="text-4xl text-primary">🎵</Text>
        </View>
        <Text className="mb-2 text-3xl font-bold text-white">Musica 😂</Text>
        <Text className="text-lg text-white opacity-80">
          Collection of my Music
        </Text>
      </View>

      {/* Loading indicator */}
      <View className="items-center">
        <View className="mb-4">
          <ActivityIndicator size="large" color="#fff" />
        </View>
        <View className="flex-row space-x-2">
          <Text className="text-2xl animate-pulse">🎵</Text>
          <Text
            className="text-2xl animate-pulse"
            style={{ animationDelay: "0.2s" }}
          >
            🎶
          </Text>
          <Text
            className="text-2xl animate-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            🎷
          </Text>
        </View>
      </View>
    </View>
  );
}
