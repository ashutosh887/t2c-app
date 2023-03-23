import React from 'react'
import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import servicesData from '../data/servicesData'
import globalStyles from '../data/globals'

const Services = ({navigation}) => {
  return (
    <View style={{padding: 10, flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: '500', marginBottom: 7}}>Services Available</Text>
        <View style={styles.cardsView}>
            {servicesData.map((service, index) => {
                return (
                    <Pressable key={index} style={{margin: 10, backgroundColor: 'white', padding: 20, borderRadius: 8, alignItems: 'center', height: 120, width: 160}} onPress={() => navigation.navigate(`${service.serviceName}`)}>
                        <MaterialIcons name={service.serviceIcon} size={60} color={`${globalStyles.primary}`} />

                        <Text style={{textAlign: "center", marginTop: 10, fontWeight: '500'}}>{service.serviceName}</Text>
                </Pressable>
                )
            })}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "wrap"
  }
})

export default Services