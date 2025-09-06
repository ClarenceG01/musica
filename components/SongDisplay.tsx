import { View, Text, Image } from 'react-native'
import React from 'react'

type SongDisplayProps = {
  item: {
    track: {
      name: string;
      album: {
        images: { url: string }[];
      };
    };
  };
};

export default function SongDisplay({ item }: SongDisplayProps) {
  return (
  <View className="w-[170px]">
                  <Image
                    source={{ uri: item.track.album.images[0].url }}
                    className="w-full h-32 mb-3 rounded-md"
                  />
                  <View>
                    <Text
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: "Nunito_400Regular" }}
                    >
                      {item.track.name}
                    </Text>
                  </View>
                </View>
  )
}