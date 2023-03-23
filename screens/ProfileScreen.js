import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', padding: 10, alignItems: 'flex-start' }}>
      {/* profile data */}
      <View style={{ flex: 1, flexDirection: 'row', maxHeight: 150, justifyContent: 'space-around', alignItems: 'center' }}>
        <MaterialIcons name="account-circle" size={100} color="black" />

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 35, fontWeight: '500' }}>Kevin Owocki</Text>
          <Text style={{ fontWeight: '300', fontSize: 20 }}>Metamask Address: 3K8KJKHDSI...</Text>
        </View>
      </View>

      {/* PROPOSALS WRITTEN */}
      <View style={{ flex: 1, flexDirection: 'column', maxHeight: 240 }}>
        <Text style={{ fontSize: 25, fontWeight: '500', marginBottom: 7, textDecorationLine: 'underline' }}>Contributions:</Text>

        <View style={{ flex: 1, maxHeight: 100, padding: 5}}>
          <Text style={{fontWeight: '500', fontSize: 20}}>To contribute to the welfare of...</Text>
          <Text>- Commits: 30</Text>
          <Text>- Upvotes: 23/30</Text>
          <Text>- Downvotes: 3/30</Text>
          <Text>- Neutral: 4/30</Text>
        </View>

        <View style={{ flex: 1, maxHeight: 100, padding: 5 }}>
          <Text style={{ fontWeight: '500', fontSize: 20 }}>Minimize pollution in the...</Text>
          <Text>- Commits: 10</Text>
          <Text>- Upvotes: 13/30</Text>
          <Text>- Downvotes: 12/30</Text>
          <Text>- Neutral: 5/30</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 25, fontWeight: '500', marginBottom: 7, textDecorationLine: 'underline' }}>Supported Organizations:</Text>

        <Text>1. CNCF - 21 Tokens</Text>
        <Text>2. ReFi Movement - 21 Tokens</Text>
        <Text>3. Google Summer of Code - 13 Tokens</Text>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})