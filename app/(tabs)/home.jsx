import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { ScrollView } from "react-native-web";

const HomeScreen = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [textInput, setTextInput] = useState("");
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageSrc(result.assets[0].uri);
    }
  };

  const pickVideo = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setVideoSrc(result.assets[0].uri);
    }
  };
  const handleTextSubmit = () => {
    console.log("User Text:", textInput);
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginTop: 50,
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            padding: 10,
            borderRadius: 8,
            marginBottom: 20,
          }}
          onPress={pickImage}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Pick an Image</Text>
        </TouchableOpacity>

        {imageSrc ? (
          <Image
            source={{ uri: imageSrc }}
            style={{
              width: 330,
              height: 250,
              borderRadius: 8,
              resizeMode: "contain",
            }}
          />
        ) : (
          <Text>No image loaded yet</Text>
        )}

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#007AFF",
              padding: 10,
              borderRadius: 8,
              marginTop: 20,
            }}
            onPress={pickVideo}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Pick a Video</Text>
          </TouchableOpacity>
          {videoSrc ? (
            <Video
              source={{ uri: videoSrc }}
              style={{
                width: 330,
                height: 250,
                borderRadius: 8,
                marginTop: 20,
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
          ) : (
            <Text>No video loaded yet</Text>
          )}
        </View>

        <View>
          <TextInput
            className="h-10 border border-gray-300 rounded-lg mt-5 px-3 w-full"
            placeholder="Enter some text"
            value={textInput}
            onChangeText={setTextInput}
          />
          <TouchableOpacity
            className="bg-blue-500 p-3 rounded-lg mt-3"
            onPress={handleTextSubmit}
          >
            <Text className="text-white text-lg">Submit Text</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
