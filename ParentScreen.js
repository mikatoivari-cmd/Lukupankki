import React from "react";
import { View, Text } from "react-native";

export default function ParentScreen() {
  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 26 }}>Vanhempien näkymä</Text>
      <Text>Tähän tulee PIN, tilastot ja tavoitteet</Text>
    </View>
  );
}
