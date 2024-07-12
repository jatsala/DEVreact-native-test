import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import appartments from '@assets/data/day5/appartments.json';

const AirbnbScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {appartments.map((appartment) => (
          <Marker
            key={appartment.id}
            coordinate={{
              latitude: appartment.latitude,
              longitude: appartment.longitude,
            }}
            title={appartment.title}
            description={'Hello there'}
          >
            <Text>$ {appartment.price}</Text>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default AirbnbScreen;
