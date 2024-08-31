import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Link href={'/explore'}>
      <Text className='text-2xl font-bold'>Go To Tabs</Text>
      </Link>
    </View>
  )
}

export default index