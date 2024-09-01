import { View, Text } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import {Button} from 'react-native-paper'

const index = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Button icon="mouse" buttonColor='blue' mode="contained" onPress={() => router.replace("/browse")}>
    Press me
  </Button>
    </View>
  )
}

export default index