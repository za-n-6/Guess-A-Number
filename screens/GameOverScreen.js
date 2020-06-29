import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over Dumb ass!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          //   fadeDuration={1000}
          //   source={{
          //     uri:
          //       "https://www.google.com/search?q=mountain+peak&tbm=isch&ved=2ahUKEwizt-iX2afqAhVSQRoKHSJ-DdwQ2-cCegQIABAA&oq=mountain+peak&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEENQuhZYzyBg8iJoAHAAeACAAaACiAHFCJIBBTAuMi4zmAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ei=pzj6XvPHH9KCaaL8teAN&bih=704&biw=1381#imgrc=wH1I-MdRaNomDM",
          //   }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>Number of Rounds:{props.roundsNumber}</Text>
      <Text>Number was:{props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
