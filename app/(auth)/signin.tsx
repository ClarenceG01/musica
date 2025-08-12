import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View className="bg-primary min-h-screen font-inter flex-1">
      <View className="my-auto px-8">
        <View className="mb-8">
          <Text className="text-2xl text-center text-white mb-4">
            Create Account
          </Text>
          <TouchableOpacity
            accessibilityLabel="Sign in with Google"
            className="flex flex-row items-center justify-center gap-4 bg-white border border-gray-300 p-4 rounded-lg mb-4"
          >
            <Image
              source={require("../../assets/images/google.png")}
              className="size-6"
            />
            <Text className="font-bold text-lg">Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-5">
          <TextInput
            className="border border-gray-300 rounded-lg py-4 px-3 text-white text-lg"
            placeholder="Enter your Email"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
        </View>
        <View className="relative">
          <TextInput
            className="border border-gray-300 rounded-lg py-4 px-3 text-white text-lg"
            placeholder="Create Password"
            placeholderTextColor="white"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            className="absolute top-4 right-4"
            onPress={() => setPasswordVisible((prev) => !prev)}
          >
            <Feather
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="mt-7 w-full py-4 bg-secondary rounded-lg">
          <Text className="text-white text-center font-semibold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
