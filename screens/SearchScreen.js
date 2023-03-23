import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import searchData from '../data/searchData'

const SearchScreen = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 18, fontWeight: '700', textDecorationLine: 'underline'}}>Listing  nearest locations to submit your trash:</Text>
      
      <View style={{margin: 10}}>
        {searchData.map((data, index) =>
          <View style={{marginTop: 5, borderWidth: 1, padding: 5, borderRadius: 6}} key={index}>
            <Text style={{fontSize: 15, textAlign: 'center', fontWeight: '500'}}>{`${data.location}    -    ${data.kilometer}`}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})