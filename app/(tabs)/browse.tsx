import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Browse = () => {
  return (
    <View className='justify-center items-center flex-1'>
       <Button icon="mouse" buttonColor='yellow' textColor='black' mode="contained" onPress={() => router.replace("/profile")}>
    Press me
  </Button>
    </View>
  )
}

export default Browse