import { View, Text, Image, Alert } from 'react-native';
import React from 'react';
import { Link } from '@react-navigation/native';

const StartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <Image
        source={require("../assets/cover(9).png")}
        style={{
          width: 700, 
          height: 900, 
          resizeMode: 'contain'
        }}
      />

      <View style={{
        position: "absolute"
      }} >
        <Text style={{
          fontSize: 39,
          paddingHorizontal: 40,
          textAlign: "center",
          fontWeight: '900',
          color: "#4d6147",
          fontFamily: "sora"
        }}>
          matcha is delicious for those who like it.
        </Text>

        <Text style={{
          fontSize: 25,
          textAlign: "center",
          fontWeight: '500',
          color: "#afc2a8",
          marginVertical: 8,
          fontFamily: 'fantasy'
        }}>
          let's try!
        </Text>

        <View style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Link style={{
            backgroundColor: "#afc2a8",
            textAlign: "center",
            fontSize: 22,
            marginBottom: 300,
            width: 280,
            borderRadius: 25,
            fontWeight: 'bold',
            paddingVertical: 7,
            color: '#4d6147',
            fontFamily: "fantasy"
          }} to="/Main">


            <Text>Get Start </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;
