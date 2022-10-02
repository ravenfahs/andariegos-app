import React from "react";
import { AppRegistry, View, Text, Image, ScrollView, StyleSheet,StatusBar} from "react-native";

const Separator = () => (
    <View style={styles.separator} />
  );

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#fffffa',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Separator;
