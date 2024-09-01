import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';


const TabIcon = ({ icon, color, name, focused }:
  { icon: string | any; color: string; name: string; focused: boolean }
) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={color}
      />
      <Text style={{ color, fontSize: 12, fontWeight: '500' }}>
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="browse"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"guy-fawkes-mask"}
              color={color}
              name="Browse"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="interest"
        options={{
          title: 'Interest',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"fire"}
              color={color}
              name="Interest"
              focused={focused}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"message"}
              color={color}
              name="Inbox"
              focused={focused}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="faves"
        options={{
          title: 'Faves',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"star"}
              color={color}
              name="Faves"
              focused={focused}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="store"
        options={{
          title: 'Store',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"infinity"}
              color={color}
              name="Store"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
