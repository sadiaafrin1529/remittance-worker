import React, { useState } from "react";
import { View, TextInput, Button, Image, Text } from "react-native";
import ImagePickerComponent from "../../components/ImagePicke/ImagePicker";

const HomeScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [videoUri, setVideoUri] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = () => {

    console.log("Submitted:", { imageUri, videoUri, text });
  };

  return (
    <View className=" py-20 px-4">
      <Text style={{ fontFamily: "outfit" }} className="text-2xl ">
        Report an Issue
      </Text>

      <TextInput
        className="border border-gray-300 p-2 mt-5 mb-4"
        placeholder="Describe your issue..."
        value={text}
        onChangeText={setText}
        multiline={true} 
        numberOfLines={4}
      />

      <ImagePickerComponent
        setImageUri={setImageUri}
        setVideoUri={setVideoUri}
      />

      {imageUri && <Image source={{ uri: imageUri }} />}
      {videoUri && <Text>Video Selected: {videoUri}</Text>}

      <View className="mt-4">
        <Button
          className="rounded-lg"
          title="Submit Report"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
