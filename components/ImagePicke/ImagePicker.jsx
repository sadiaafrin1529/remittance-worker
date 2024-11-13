import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const ImagePickerComponent = ({ setImageUri, setVideoUri }) => {
  const pickMedia = async (type) => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        type === "video"
          ? ImagePicker.MediaTypeOptions.Videos
          : ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (type === "image") setImageUri(result.uri);
      else setVideoUri(result.uri);
    }
  };

  return (
    <View className="gap-4 items-center">
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#007AFF",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => pickMedia("image")}
      >
        <Ionicons name="image" size={20} color="#000" />
        <Text style={{ color: "white", marginLeft: 8 }}>Pick an Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#007AFF",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => pickMedia("video")}
      >
        <Ionicons name="videocam" size={20} color="white" />
        <Text style={{ color: "white", marginLeft: 8 }}>Pick a Video</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;
