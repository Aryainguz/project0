import { MatchCard, MatchCard2 } from '@/components/MatchCard'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Matches = () => {
  return (<ScrollView className='bg-black'>
  <View className='flex justify-center px-16 pt-16 pb-6'>
  <Text className='text-2xl text-center font-bold text-white'>MATCHES</Text>
  <MaterialCommunityIcons name='filter' size={24} color='white' className='absolute top-12 right-3' />


  </View>

<View className='flex justify-center p-6'>
    <View className='px-6 gap-10 flex-row justify-evenly'>
      <MatchCard 
      match={{ id: '1', name: 'Olivia', distance: '6 KM Away', image: "https://images.unsplash.com/photo-1654512697704-89cf740323a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
      />
      <MatchCard2 match={{ id: '2', name: 'Nancy', distance: 'Near You', image:"https://images.unsplash.com/photo-1654512504066-e5af36ceaa27?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1654512463040-2226d9df854d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
      
    </View>

    <View className='flex-row'>
    <View className='px-6 right-4'>
    <MatchCard2 match={{ id: '4', name: 'Jinny', distance: '2 KM Away', image: "https://images.unsplash.com/photo-1654512463040-2226d9df854d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} />
      </View>
      <View className='px-6 right-8 bottom-16'>
    <MatchCard match={{ id: '4', name: 'Terrance', distance: '2 KM Away', image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
      </View>
      </View>

      <View className='flex-row'>
    <View className='px-6 right-4 bottom-16'>
    <MatchCard match={{ id: '4', name: 'Samuel', distance: '6 KM Away', image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
      </View>
      <View className='px-6 right-8 bottom-16'>
      <MatchCard2 match={{ id: '4', name: 'Jake', distance: 'Near You', image: "https://images.unsplash.com/photo-1685661241913-84a6468c8ff2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} />

      </View>
      </View>

      <View className='flex-row'>
    <View className='px-6 right-4'>
    <MatchCard2 match={{ id: '4', name: 'Jinny', distance: '2 KM Away', image: "https://images.unsplash.com/photo-1654512463040-2226d9df854d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} />
      </View>
      <View className='px-6 right-8 bottom-16'>
    <MatchCard match={{ id: '4', name: 'Terrance', distance: '2 KM Away', image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
      </View>
      </View>

    </View>
    
      
    </ScrollView>
  )
}

export default Matches