import Dummy from "@/components/Dummy";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View
} from "react-native";
import { Button } from "react-native-paper";

const ProfileScreen = () => {

  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-row px-7 py-9">
        <View>
          <View className="flex-row items-center">
          <Image
            source={require("@/assets/images/avatar.jpg")}
            className="h-24 w-24 rounded-full"
          />
          <View className="flex-row left-28">
          {/* <StatCard icon="power" /> */}
          {/* <StatCard icon="power" /> */}
          {/* <StatCard icon="power" /> */}
</View>
         </View>

         <View className="flex-row justify-between">
          <Text className="text-white mt-5 right-2 text-4xl font-extrabold">
           NICOLAS
          </Text>
          <View className="flex-row left-8">
       <Button mode="text" buttonColor="black" textColor="white" style={{width: 100, height: 40, borderRadius: 20, marginTop: 10,
        borderColor:"gray", borderWidth: 1, backgroundColor: "black"
       }}>
          Edit Profile
       </Button>
       <MaterialCommunityIcons name="dots-vertical" size={24} color="white"
       className="mt-5 mx-2"
       />
</View>
        </View>

          <Text className="text-gray-400 right-2 mt-1 text-lg font-bold">
            @nicolasangelo
          </Text>

          <Text className="text-white right-2 mt-2 text-base font-bold">
            AI Engineer | Buddhist 🍁 | Neurodivergent 🧠 | Pilot in Training ✈️ 
          </Text>

          <View className="flex-row mt-4 right-2">
            <Text className="text-white mr-2">100</Text>
            <Text className="text-gray-400 mr-2">guide</Text>
            <Text className="text-white">.</Text>
            <Text className="text-white mx-2">100</Text>
            <Text className="text-gray-400 mr-2">buddies</Text>
            <Text className="text-white">.</Text>
            <Text className="text-white mx-2">100</Text>
            <Text className="text-gray-400">followers</Text>
          </View>




            {/* followers and following */}
          {/* <View className="flex-row mt-4">
            <Text className="text-white mr-2">100</Text>

            <TouchableOpacity onPress={() => router.navigate("following")}>
              <Text className="text-gray-400 mr-2">Following</Text>
            </TouchableOpacity>

            <Text className="text-white mx-2">100</Text>
            <TouchableOpacity onPress={() => router.navigate("followers")}>
              <Text className="text-gray-400">Followers</Text>
            </TouchableOpacity>
          </View> */}


        </View>

            {/* send follow request button   */}
        {/* <View className="absolute right-0 mr-6 mt-4">
          
          <Feather name="settings" size={24} color="white" />

          <AntDesign name="adduser" size={28} color="white" />
        </View> */}
        
      </View>
      <View className="flex-1 mt-3">
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            tabBarIndicatorStyle: { backgroundColor: "red" },
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: "#161622" },
          }}
        >
          <Tab.Screen name="NOTES" component={Dummy}
          />
           <Tab.Screen name="ABOUT" component={Dummy}
          /> 
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};



export default ProfileScreen;
