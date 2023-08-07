import { View, SafeAreaView } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'

export default function HomeDetails() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.black, paddingTop: 16 }}>
            <PlanetHeader backBtn={true} />

            <Text preset='h4' style={{color: "white"}}>details</Text>
        </SafeAreaView>
    )
}