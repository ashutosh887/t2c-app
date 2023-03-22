import React from 'react'
import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import servicesData from '../data/servicesData'
import globalStyles from '../data/globals'

const Services = () => {
  return (
    <View style={{padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 7}}>Services Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {servicesData.map((service, index) => {
                return (
                    <Pressable key={index}>
                        <MaterialIcons name={service.serviceIcon} size={45} color={`${globalStyles.primary}`} style={{margin: 10, backgroundColor: 'white', padding: 20, borderRadius: 8}} />

                        <Text style={{textAlign: "center",}}>{service.serviceName}</Text>
                </Pressable>
                )
            })}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Services