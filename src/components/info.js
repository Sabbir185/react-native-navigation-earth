import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './text/text';

export default function PlanetInfo({label, value}) {
  return (
    <View style={styles.container}>
      <Text preset='h5' style={{color: 'white'}}>{label}</Text>
      <Text preset='h5' style={{color: 'white'}}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderWidth: 0.6,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10
  },
})