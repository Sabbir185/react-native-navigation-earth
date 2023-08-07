import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing'
import Text from './text/text'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"


export default function PlanetHeader({backBtn=false, title='THE PLANETS'}) {
  const nagivation = useNavigation();

  return (
    <View style={styles.container}>
      { 
        backBtn && 
        <Pressable onPress={()=> nagivation.goBack()}>
          <AntDesign name="left" size={24} color="white" style={{marginRight: 10}} />
        </Pressable>
      }
      <Text preset='h2'>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    }
})