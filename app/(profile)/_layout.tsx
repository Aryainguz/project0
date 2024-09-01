import { AntDesign } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Layout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="profile" 
        options={{
          title: 'Nicoalas Angelo',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ marginHorizontal: 10 }}>
              <AntDesign name="arrowleft" size={25} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => router.replace("/browse")} style={{ marginHorizontal: 10 }}>
              <AntDesign name="setting" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
