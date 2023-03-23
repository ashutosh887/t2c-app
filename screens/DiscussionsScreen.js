import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import discussionsData from '../data/discussionsData'

const DiscussionsScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: '700', textDecorationLine: 'underline' }}>Trending discussions in teh Community:</Text>

      <View style={{ margin: 10 }}>
        {discussionsData.map((data, index) =>
          <View style={{ height: 120, marginTop: 5, borderWidth: 1, padding: 5, borderRadius: 6, flexDirection: 'column', padding: 15 }} key={index}>
            <Text style={{fontWeight: '700', fontSize: 15}}>{`#${data.id} ${data.heading}`}</Text>
            <Text>Description: {data.description}</Text>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between", marginTop: 10}}>
              <Text style={{ fontWeight: '600' }}>Conversations: {data.conversations}</Text>
              <Text style={{fontWeight: '600'}}>Category: {data.category}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

export default DiscussionsScreen

const styles = StyleSheet.create({})