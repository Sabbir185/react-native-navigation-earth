import { FlatList, SafeAreaView, View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planets'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.black, paddingTop: 16 }}>
            <PlanetHeader />
            <FlatList
                contentContainerStyle={styles.list}
                data={PLANET_LIST}
                keyExtractor={(item, index) => item.name}
                renderItem={({ item, index }) => {
                    const { name, color } = item;
                    return (
                        <Pressable
                            onPress={() => {
                                navigation.navigate("HomeDetails", {item: item});
                            }}
                            style={styles.item}
                        >
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <View style={[styles.circle, { backgroundColor: color }]} />
                                <Text preset='h4' style={styles.itemName}>{name}</Text>
                            </View>
                            <AntDesign name="right" size={14} color="white" />
                        </Pressable>
                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4],
        borderBottomColor: colors.white
    },
    list: {
        padding: 6
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[6]
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.5
    }
})