import { Nunito_400Regular, useFonts } from "@expo-google-fonts/nunito";

import SongDisplay from "@/components/SongDisplay";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { useRecentlyPlayed, useTopArtists } from "../../hooks/useSpotify.js";
export default function index() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular });
  const { data, error, isLoading } = useRecentlyPlayed();
  const {
    data: topArtists,
    error: artistError,
    isLoading: artistLoading,
  } = useTopArtists();
  if (!fontsLoaded) {
    return null;
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
                Oops🥲! No recently played tracks found.
              </Text>
            </View>
          )}
        </View>
        {/* my top artist */}
        <View className="mt-8 mb-4">
          <Text
            className="mb-4 text-3xl font-semibold text-white"
            style={{ fontFamily: "Nunito_400Regular" }}
          >
            My Top Artists
          </Text>
          {artistLoading ? (
            <Text className="text-lg text-white">Loading...</Text>
          ):
            artistError ? (
            <View className="flex items-center bg-red-700">
              <Text className="text-lg text-white">Failed to load data</Text>
            </View>
          ): Array.isArray(topArtists) && topArtists.length > 0 ? (
            <FlatList
              data={topArtists}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-5" />}
              className="w-full"
              renderItem={({ item }) => <SongDisplay item={{track:{name:item.name,album:{images:item.images}}}} />}
            />
          
          ):(
            <View className="flex items-center">
              <Text className="text-lg text-white">
                Oops🥲! No top artists found.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
