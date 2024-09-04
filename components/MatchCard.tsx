import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export const MatchCard = ({ match }:{match:any}) => (
  <View className="m-2 items-start">
    <Image source={
      {uri: match.image}
    } 
    style={{width: 150, height: 230, borderRadius: 10}}
    />
    <MaterialCommunityIcons name="cards-heart" 
     size={24} color="black" 
      className="absolute top-2 left-2" />
    <Text className="mt-2 left-2 text-xl font-extrabold text-white">{match.name}</Text>
    <Text className="text-sm left-2 text-gray-500">{match.distance}</Text>
  </View>
);

export const MatchCard2 = ({ match }:{match:any}) => (
  <View className="m-2 items-start">
  <Image source={
    {uri: match.image}
  }
  style={{width: 150, height: 160, borderRadius: 10}}
  />
      <MaterialCommunityIcons name="cards-heart" 
     size={24} color="black" 
      className="absolute top-2 left-2" />
  <Text className="mt-2 left-2 text-xl font-extrabold text-white">{match.name}</Text>
  <Text className="text-sm left-2 text-gray-500">{match.distance}</Text>
</View>
);
