import { SafeAreaView, Text, View } from "react-native"
import * as Location from 'expo-location'
import { useEffect, useState } from "react"
import { Alert } from "react-native";

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
    <SafeAreaView>
        <View>
            <Text>
                Home Screen - {currentAddress}
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen