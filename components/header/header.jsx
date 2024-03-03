import { View, Text, Image } from "react-native";
import { S } from "./header.style";
import logo from "./../../assets/logo.png";
export function Header() {
  return (
    <>
      <Image source={logo} style={S.logo} />
    </>
  );
}
