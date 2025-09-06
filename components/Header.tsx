import { View, Text, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { Nunito_400Regular, useFonts } from "@expo-google-fonts/nunito";

export default function Header() {
	const [fontsLoaded] = useFonts({ Nunito_400Regular });
	if (!fontsLoaded) {
		return null;
	}
  return (
	<View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Image
              source={require("../assets/images/google.png")}
              className="rounded-full h-14 w-14"
            />
            <View className="gap-2">
              <Text
                className="text-2xl font-semibold leading-5 tracking-tight text-[#f2f2f2]"
                style={{ fontFamily: "Nunito_400Regular" }}
              >
                Sarwar Jahan
              </Text>
              <Text
                className="text-lg font-normal leading-5 tracking-tight text-[#dedede]"
                style={{ fontFamily: "Nunito_400Regular" }}
              >
                Gold Member
              </Text>
            </View>
          </View>
          <Ionicons name="notifications-outline" size={24} color="#8E8E8E" />
        </View>
  )
}