import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';


const TabIcon = ({ icon, color, name, focused }:
  { icon: string | any; color: string; name: string; focused: boolean }
) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    { name === "Profile" ? 
     (
    <Image
    source={require("@/assets/images/avatar.jpg")}
    className="rounded-full"
      style={{
        width: 24,
        height: 24,
        tintColor: color,
      }}
    />
    ):(
      (  <MaterialCommunityIcons
        name={icon}
        size={24}
        color={color}
      /> )
    )
    }
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
        tabBarStyle: {
          backgroundColor: "#161622",
        },
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
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"fire"}
              color={color}
              name="Matches"
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
        name="groups"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"account-group"}
              color={color}
              name="Groups"
              focused={focused}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="(profile)"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"face-man"}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
