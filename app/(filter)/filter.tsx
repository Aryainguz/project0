import { View, Text, Pressable, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import React from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FilterScreen = () => {
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
        <Pressable
          onPress={() => {
            sheerRef.current?.expand();
            setIsOpened(true);
          }}
        >
          
         <View className="absolute top-8 right-8 p-4">
  <MaterialCommunityIcons name="filter" size={24} color="black" />
</View>

        </Pressable>

        <BottomSheet
          ref={sheerRef}
          snapPoints={snapPoints}
          enablePanDownToClose
          onClose={() => setIsOpened(false)}
          backgroundStyle={{ backgroundColor: "#fff" }}
        >
          <BottomSheetView className="px-6 pb">

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

export default FilterScreen;
