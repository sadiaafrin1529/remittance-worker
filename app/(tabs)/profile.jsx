import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import person from "../../assets/images/agent.jpg";

const Profile = () => {
  const profileInfo = {
    name: "Kafi Hasan",
    image: person,
    profession: "Chief Psychiatrist and Neuroscientist",
    experience: "12+ years",
    rating: "4.5",
    reviews: "513",
    phoneNum: "0182645793",
    address: "123 Main Street, Los Angeles",
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="p-6 rounded-lg ">
        <Image source={profileInfo.image} className="w-32 h-32  mx-auto" />
        <Text className="text-2xl font-bold text-center mt-4">
          {profileInfo.name}
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          {profileInfo.profession}
        </Text>
        <View className="mt-4">
          <Text
            style={{ fontFamily: "outfit-bold" }}
            className="text-center text-gray-800 font-semibold"
          >
            Contact Information
          </Text>
          <Text
            style={{ fontFamily: "outfit-bold" }}
            className="text-center text-gray-700 mt-2"
          >
            {profileInfo.phoneNum}
          </Text>
          <Text className="text-center text-gray-700">
            {profileInfo.address}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
