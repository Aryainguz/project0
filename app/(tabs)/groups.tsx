import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const GroupsScreen = () => {
  return (
    <ScrollView className="bg-white flex-1 px-4 py-16">
      {/* Groups Header */}
      <View className="bg-purple-200 rounded-3xl p-4 mb-6">
        <Text className="text-xl font-bold text-black">Groups</Text>
        <Text className="text-gray-600">From Tobias Franco</Text>
      </View>

      {/* Group Card - Coworking Spaces */}
      <View className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-4">
            <View className="rounded-full bg-orange-200 w-12 h-12 flex items-center justify-center">
              <MaterialCommunityIcons name="laptop" size={24} color="orange" />
            </View>
            <View className='px-4'>
              <Text className="text-lg font-bold text-black">Coworking Spaces</Text>
              <Text className="text-gray-500">By Tobias Franco</Text>
            </View>
          </View>
        <Button mode="contained" style={{ borderRadius: 20 }}>
          Join
        </Button>
        </View>

        {/* Image Row */}
        <View className="flex-row mt-8">
          <Image
            source={{ uri: 'https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            className="w-32 h-32 rounded-lg"
          />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1725695952266-be3eadfe7c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8' }}
            className="w-32 h-32 rounded-lg ml-2"
          />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1725656470769-7c00b65d5c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8' }}
            className="w-32 h-32 rounded-lg ml-2"
          />
        </View>

        {/* Description */}
        <Text className="text-gray-600 mt-4">
          Most coworking spaces provide a range of amenities, such as high speed internet, meeting rooms, and ...
        </Text>

        {/* Stats */}
        <View className="flex-row mt-4 space-x-4">
          <View className="flex-row items-center">
          <MaterialCommunityIcons name="account" size={24} color="#E5E7EB" />
            <Text className="text-gray-500 p-2">5,830</Text>
          </View>
          <View className="flex-row items-center ml-2">
          <MaterialCommunityIcons name="widgets" size={24} color="#E5E7EB" />
            <Text className="text-gray-500 p-2">560</Text>

          </View>
          <View className="flex-row items-center ml-2">
            <MaterialCommunityIcons name="comment" size={24} color="#E5E7EB" />
            <Text className="text-gray-500 p-2">275</Text>
          </View>
        </View>
      </View>

      {/* Group Card - Photognesia */}
      <View className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-4">
            <View className="rounded-full bg-purple-200 w-12 h-12 flex items-center justify-center">
              <MaterialCommunityIcons name="camera" size={24} color="purple" />
            </View>
            <View className='px-4'>
              <Text className="text-lg font-bold text-black">Photognesia</Text>
              <Text className="text-gray-500">By Samantha William</Text>
            </View>
          </View>
         <Button mode="contained" style={{ borderRadius: 20 }}
         buttonColor='#E5E7EB' textColor='black'
         >
          Joined
        </Button>
        </View>

        {/* Image Row */}
        <View className="flex-row mt-4 space-x-2">
        <Image
            source={{ uri: 'https://images.unsplash.com/photo-1725661501337-e003364c1ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3DD' }}
            className="w-32 h-32 rounded-lg"
          />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1725206725667-90a47389d0b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D' }}
            className="w-32 h-32 rounded-lg ml-2"
          />
          <Image
            source={{ uri: 'https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            className="w-32 h-32 rounded-lg ml-2"
          />
        </View>

        {/* Description */}
        <Text className="text-gray-600 mt-4">
          Photognesia is a community of professional and aspiring photographers. Join us to share tips and tricks, and showcase your work!
        </Text>
      </View>
    </ScrollView>
  );
};

export default GroupsScreen;
