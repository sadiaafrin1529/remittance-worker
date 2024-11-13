import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { router } from "expo-router";

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (userEmail === "sadia@gmail.com" && password === "1234") {
      Alert.alert(`Thank You ${userEmail}`);
    } else {
      Alert.alert("Email and password are not correct");
    }
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={require("./../../assets/images/login.jpg")}
          className="w-full h-72"
        />
        <View className="bg-gray-100 px-5 pt-12">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            Login Form
          </Text>
          <Text className="text-base text-gray-600 mb-8">
            You can reach us at webCodeCare.com
          </Text>

          <View className="w-full mb-6">
            <Text className="text-sm text-gray-800 mb-2">Enter Your Email</Text>
            <TextInput
              className="h-12 border border-gray-300 rounded-md px-3 text-lg text-gray-800 bg-white"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={userEmail}
              onChangeText={(e) => setUserEmail(e)}
            />
          </View>

          <View className="w-full mb-6">
            <Text className="text-sm text-gray-800 mb-2">
              Enter Your Password
            </Text>
            <TextInput
              className="h-12 border border-gray-300 rounded-md px-3 text-lg text-gray-800 bg-white"
              placeholder="Enter your password"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </View>

          <TouchableOpacity
            onPress={() => router.replace("(tabs)/home")}
            className="bg-purple-600 py-3 rounded-md flex items-center justify-center mt-6"
          >
            <Text className="text-white font-semibold text-lg">Login</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-6">
            <Text className="text-sm text-gray-800">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.replace("signup")}>
              <Text className="text-sm font-bold text-green-600">Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Example Button with custom styling */}
          <TouchableOpacity
            className="py-4 rounded-[12px] flex-row items-center gap-2 justify-center mt-6"
            onPress={() => router.replace("onboard")}
          >
            <Text className="font-poppins text-[18px] text-[#333] font-medium text-center">
              Skip for now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
