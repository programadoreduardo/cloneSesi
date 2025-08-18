// src/components/CustomText.js
import { Text } from "react-native";

export default function CustomText({ style, weight = "regular", ...props }) {
  const fontFamily = weight === "bold" ? "Poppins_700Bold" : "Poppins_400Regular";
  return  <Text {...props} style={[{ fontFamily }, style]}
   />;
}
