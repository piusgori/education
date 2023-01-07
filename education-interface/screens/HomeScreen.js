import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#8c7afc', '#5d42fe']} style={styles.topContainer}>
            <View style={styles.introContainer}>
                <Text style={styles.name}>Hi Pius,</Text>
                <View style={styles.iconsContainer}>
                    <View style={styles.icon}>
                        <Ionicons name='cart' size={30}></Ionicons>
                        <View style={styles.iconNotification}></View>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons name='notifications' size={30}></Ionicons>
                        <View style={styles.iconNotification}></View>
                    </View>
                </View>
            </View>
            <Text style={styles.bottomText}>Continue from where you left.</Text>
        </LinearGradient>
      <View style={styles.bottomContainer}></View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    bottomContainer: {
        flex: 2,
        width: '100%'
    },
    bottomText: {
        marginHorizontal: 24,
        fontSize: 24
    },
    container: {
        flex: 1,
        width: '100%'
    },
    icon: {
        padding: 12,
        backgroundColor: '#564bad',
        borderRadius: 16,
        marginLeft: 20,
    },
    iconNotification: {
        position: 'absolute',
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#ef8c2d',
        right: 10,
        top: 12
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    introContainer: {
        marginHorizontal: 24,
        marginBottom: 20,
        marginTop: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 35,
    },
    topContainer: {
        flex: 1,
        backgroundColor: 'green',
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    }
})