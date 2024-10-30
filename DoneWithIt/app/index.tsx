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

import { SafeAreaView } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import AppButton from "./components/AppButton";
export default function HomeScreen() {
  return (
    <WelcomeScreen />
  );
}
