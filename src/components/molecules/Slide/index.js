import React from "react";
import { View, Text, Image  } from "react-native";

const Slide = (props) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={props.img}
          style={{resizeMode: 'contain'}}
        />
        <View>
          <Text >{props.title}</Text>
          <Text >{props.subtitle}</Text>
        </View>
      </View>
    );
  };

export default Slide;