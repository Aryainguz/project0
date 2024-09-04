import { MatchCard } from '@/components/MatchCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Matches = () => {
  const matches = [
    { id: '1', name: 'Olivia', distance: '6 KM Away', image: 'https://images.unsplash.com/photo-1654512697704-89cf740323a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Nancy', distance: 'Near You', image: 'https://images.unsplash.com/photo-1654512504066-e5af36ceaa27?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', name: 'Jinny', distance: '2 KM Away', image: 'https://images.unsplash.com/photo-1654512463040-2226d9df854d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Terrance', distance: '2 KM Away', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '5', name: 'Samuel', distance: '6 KM Away', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '6', name: 'Jake', distance: 'Near You', image: 'https://images.unsplash.com/photo-1685661241913-84a6468c8ff2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  return (
    <ScrollView className='bg-black'>
      <View className='flex justify-center px-16 pt-16 pb-6'>
        <Text className='text-2xl text-center font-bold text-white'>MATCHES</Text>
        <MaterialCommunityIcons
          name='filter'
          size={24}
          color='white'
          className='absolute top-12 right-3'
        />
      </View>

      <View className='p-6'>
        {/* First Row */}
        <View className='flex-row justify-evenly gap-4'>
          <MatchCard match={matches[0]} width={150} height={230} />
          <MatchCard match={matches[1]} width={150} height={160}  />
        </View>

        {/* Second Row */}
        <View className='flex-row justify-evenly gap-4 mt-8'>
          <MatchCard match={matches[2]} width={150} height={160} />
          <MatchCard match={matches[3]} width={150} height={230}
          bottom={60}
                    />
        </View>

        {/* Third Row */}
        <View className='flex-row justify-evenly gap-4 relative bottom-12'>
          <MatchCard match={matches[4]} width={150} height={230} />
          <MatchCard match={matches[5]} width={150} height={160} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Matches;
