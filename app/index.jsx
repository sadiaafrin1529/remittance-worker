import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Link href={"/login"}>
        <Text style={{ fontFamily: "outfit-bold" }} className="text-2xl">
          Go to Login Screen
        </Text>
      </Link>
    </View>
  );
}
