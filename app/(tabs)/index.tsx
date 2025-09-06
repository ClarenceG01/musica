import { Nunito_400Regular, useFonts } from "@expo-google-fonts/nunito";

import SongDisplay from "@/components/SongDisplay";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { useRecentlyPlayed } from "../../hooks/useSpotify.js";
export default function index() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular });
  const { data, error, isLoading } = useRecentlyPlayed();
  if (!fontsLoaded) {
    return null;
  }
  if (error) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-lg text-white">Failed to load data</Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-lg text-white">Loading...</Text>
      </View>
    );
  }
  console.log(data);
  return (
    <SafeAreaView className="flex-1 px-4 py-4 bg-primary">
      <ScrollView>
        {/* header */}
        <Header />
        {/* recently played */}
        <View className="mt-8 ">
          <Text
            className="mb-4 text-3xl font-semibold text-white"
            style={{ fontFamily: "Nunito_400Regular" }}
          >
            Recently Played
          </Text>
          {isLoading ? (
            <Text className="text-lg text-white">Loading...</Text>
          ) : error ? (
            <View className="flex items-center bg-red-700">
              <Text className="text-lg text-white">Failed to load data</Text>
            </View>
          ) : Array.isArray(data) && data.length > 0 ? (
            <FlatList
              data={data}
              keyExtractor={(item) => item.played_at}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-5" />}
              className="w-full"
              renderItem={({ item }) => <SongDisplay item={item} />}
            />
          ) : (
            <View className="flex items-center">
              <Text className="text-lg text-white">
                Oops! No recently played tracks found.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
