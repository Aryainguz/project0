import { MatchCard } from '@/components/MatchCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Slider from "@react-native-community/slider";
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

  const matches = [
    { id: '1', name: 'Olivia', distance: '6 KM Away', image: 'https://images.unsplash.com/photo-1654512697704-89cf740323a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Nancy', distance: 'Near You', image: 'https://images.unsplash.com/photo-1654512504066-e5af36ceaa27?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', name: 'Jinny', distance: '2 KM Away', image: 'https://images.unsplash.com/photo-1654512463040-2226d9df854d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Terrance', distance: '2 KM Away', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '5', name: 'Samuel', distance: '6 KM Away', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '6', name: 'Jake', distance: 'Near You', image: 'https://images.unsplash.com/photo-1685661241913-84a6468c8ff2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '7', name: 'Jake', distance: 'Near You', image: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '8', name: 'Jake', distance: 'Near You', image: 'https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];





const Matches = () => {
  const sheerRef = React.useRef<BottomSheet>(null);
  const [isOpened, setIsOpened] = React.useState(false);
  const [ageRange, setAgeRange] = React.useState<object | any>(18);
  const [distance, setDistance] = React.useState(10);
  const [showOnline, setShowOnline] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);

  const snapPoints = React.useMemo(() => ["60%"], []);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="justify-center items-center flex-1 bg-primary">
        

        {/* matches screen */}
        <ScrollView className='bg-primary'>
      <View className='flex justify-center px-16 pt-16 pb-6'>
        <Text className='text-2xl text-center font-bold text-white'>MATCHES</Text>
        <MaterialCommunityIcons
          name='filter'
          size={24}
          color='white'
          className='absolute top-12 right-3'
          onPress={() => {
            sheerRef.current?.expand();
            setIsOpened(true);
          }}
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

        <View className='flex-row justify-evenly gap-4 bottom-6'>
          <MatchCard match={matches[6]} width={150} height={160} />
          <MatchCard match={matches[7]} width={150} height={230}
          bottom={60}
                    />
        </View>
    </ScrollView>

        <BottomSheet
          ref={sheerRef}
          snapPoints={snapPoints}
          enablePanDownToClose
          onClose={() => setIsOpened(false)}
          backgroundStyle={{ backgroundColor: "#fff" }}
        >
          <BottomSheetView className="px-6">

<View className="mb-6">
<Text className="text-gray-400 text-sm">LOCATION</Text>
<View className="flex-row justify-between items-center">
  <Text className="text-black text-2xl">MELBOURNE</Text>
  <MaterialCommunityIcons name="map-marker" size={24} color="black" />
</View>
</View>
          
              {/* Distance Filter */}
              <View className="mb-4">
              <Text className="text-black">Distance (in KM)</Text>
              <Text className="text-black">{distance} KM</Text>
              <Slider
                minimumValue={1}
                maximumValue={100}
                step={1}
                value={distance}
                onValueChange={(value) => setDistance(value)}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#000000"
                thumbTintColor="#FF0000"
              />
            </View>

            {/* Age Range Filter */}
            <View className="mb-4">
              <Text className="text-black">Age</Text>
              <Text className="text-black">{ageRange}</Text>
              <Slider
                minimumValue={18}
                maximumValue={60}
                step={1}
                onValueChange={(value) => setAgeRange(value)}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#000000"
                thumbTintColor="#FF0000"
              />
            </View>

          

            {/* Show Online Only */}
            <View className="mb-2 flex-row justify-between items-center">
              <Text className="text-black">NEAR ME</Text>
              <Switch
                value={showOnline}
                onValueChange={setShowOnline}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={showOnline ? "#FF0000" : "#f4f3f4"}
              />
            </View>

            <View className="mb-4 flex-row justify-between items-center">
              <Text className="text-black">NOTIFICATION</Text>
              <Switch
                value={showNotification}
                onValueChange={setShowNotification}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={showNotification ? "#FF0000" : "#f4f3f4"}
              />
            </View>

            {/* Apply Filter Button */}
            <Pressable
              onPress={() => sheerRef.current?.close()}
              className="bg-red-500 py-2 px-4 rounded-lg mt-4"
            >
              <Text className="text-white text-center font-bold">Apply Filters</Text>
            </Pressable>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default Matches;
