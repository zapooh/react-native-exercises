import {
  Dimensions,
  useWindowDimensions,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  View,
  Button,
  Alert,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />

      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "absolute",
        }}
      />

      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
