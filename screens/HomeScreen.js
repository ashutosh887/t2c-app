import { useEffect, useState } from "react"
import { SafeAreaView, Text, View, Alert, StyleSheet, Pressable, Image, TextInput } from "react-native"
import * as Location from 'expo-location'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import headerLogo from "../assets/logo.png"
import Carousel from "../components/Carousel"
import Services from "../components/Services"
import globalStyles from "../data/globals"

const HomeScreen = () => {
    const [currentAddress, setCurrentAddress] = useState(`Hold on... We're loading your location!`);

    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

    const checkIfLocationnabled = async () => {
        let enabled = Location.hasServicesEnabledAsync();

        if(!enabled){
            Alert.alert(
                'Location services not enabled',
                'Please enable the location services',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel pressed on location services'),
                        style: 'cancel'
                    },
                    {
                        text: 'Allow',
                        onPress: () => console.log('Allowed location')
                    },
                ],
                {
                    cancelable: false
                }
            )
        } else {
            setLocationServiceEnabled(enabled);
        }
    }

    const getCurrentLocation = async () => {
        const status = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted'){
            Alert.alert(
                'Permission denied',
                'Allow the app to use the location services',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel pressed on location services'),
                        style: 'cancel'
                    },{
                        text: 'Allow',
                        onPress: () => console.log('Allowed location')
                    },
                ],
                {
                    cancelable: false
                }
            )
        }

        const { coords } = await Location.getCurrentPositionAsync();

        if(coords){
            const { latitude, longitude } = coords;

            let response = await Location.reverseGeocodeAsync({latitude, longitude})

            for(let item of response){
                let address = `${item.name} ${item.city} ${item.postalCode}`
                setCurrentAddress(address)
            }
        }
    }

  useEffect(() => {
    checkIfLocationnabled();
    getCurrentLocation()
  }, [])

  return (
    <SafeAreaView style={{paddingTop: 40, backgroundColor: '#F0F0F0', flex: 1}}>
        <View style={styles.headerView}>
            <MaterialIcons name="location-on" size={30} color={`${globalStyles.primary}`} />

            <View>
                <Text style={styles.screenHeader}>Home</Text>
                <Text>{currentAddress}</Text>
            </View>

            <Pressable style={{marginLeft: 'auto'}}>
                <Image source={headerLogo} alt="T2C" style={styles.headerLogo} />
            </Pressable>
        </View>

        {/* search bar */}
        <View style={styles.searchBarView}>
            <TextInput placeholder="Search nearby T2CHub" />
            <Feather name="search" size={24} color={`${globalStyles.primary}`} />
        </View>

        {/* image carousel */}
        <Carousel />

        {/* services */}
        <Services />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    screenHeader: {
        fontSize: 18,
        fontWeight: '600'
    },
    headerLogo: {
        width: 50,
        height: 50,
    },
    searchBarView: {
        padding: 10,
        margin: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.8,
        borderColor: '#C0C0C0',
        borderRadius: 7
    }
})

export default HomeScreen