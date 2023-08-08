import { View, SafeAreaView, Image, StyleSheet, ScrollView, Linking, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { typography } from '../theme/typography'
import PlanetInfo from '../components/info'

export default function HomeDetails({ route }) {
    const { name, description, avgTemp, radius, revolutionTime, rotationTime, earthImg } = route?.params?.item;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.black, paddingTop: 16 }}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: earthImg }}
                        style={styles.image}
                    />
                </View>
                <Text preset='h2' style={styles.title}>{name}</Text>
                <View>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Text style={styles.linking}>
                    More <Text onPress={()=> console.log('hi')} >WikiLink</Text>
                </Text>
                <View style={{padding: spacing[6]}}>
                    <PlanetInfo label={'Average Temperature'} value={avgTemp} />
                    <PlanetInfo label={'Radius'} value={radius} />
                    <PlanetInfo label={'Revolution Time'} value={revolutionTime} />
                    <PlanetInfo label={'Rotation Time'} value={rotationTime} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: { height: 250, width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 14 },
    image: { height: 230, width: 230, borderRadius: 230/2 },
    title: { color: "white", textAlign: 'center', marginTop: spacing[1], textTransform: 'capitalize' },
    description: { fontFamily: typography.primary, lineHeight: 20, textAlign: 'justify', padding: spacing[6] },
    linking: {textAlign: 'center'}
})