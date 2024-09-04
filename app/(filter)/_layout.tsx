import { AntDesign } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Layout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="filter" 
        options={{
          title: 'Filters',
                    headerStyle: {
            backgroundColor: '#161622',
         
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity onPress={() =>router.replace("/matches")} style={{ marginHorizontal: 10 }}>
              <AntDesign name="arrowleft" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
