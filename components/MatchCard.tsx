import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface MatchCardProps {
  match: {
    image: string;
    name: string;
    distance: string;
  };
  width?: number;
  height?: number;
  bottom?: number;
}

export const MatchCard = ({ match, width = 150, height = 230,bottom }: MatchCardProps) => (
  <View className="m-2 items-start"
  style={{
    position: 'relative',
    bottom: bottom
  }}
  >
    <Image
      source={{ uri: match.image }}
      style={{ width, height, borderRadius: 10,

      
       }}
      className="rounded-lg"
    />
    <MaterialCommunityIcons
      name="cards-heart"
      size={24}
      color="black"
      className="absolute top-2 left-2"
    />
    <Text className="mt-2 left-2 text-xl font-extrabold text-white">{match.name}</Text>
    <Text className="text-sm left-2 text-gray-500">{match.distance}</Text>
  </View>
);

