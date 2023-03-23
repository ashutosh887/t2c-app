import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import logo from "../assets/logo.png"

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 150, height: 150}} />
      
      {/* headings */}
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontWeight: '700', fontSize: 30}}>Trash2Cash</Text>
        <Text style={{fontWeight: '400', fontSize: 20}}>Incentivising sustainability</Text>

        {/* about us */}
        <View style={{marginTop: 20}}>
          <Text >
            asldfkj alksdfj asldfj asldkfj asdlfkj asldfkj sldfkj aslkdjf sdlkfj asdkfj ;asdfj lsakdjf lskadjf lasdkjf alskdf a;lsdkfj ;aksdjf lskdjf lsakdf lskajdf sakdlf s;ldjfl sdfiaweoijlskfjldj
          </Text>
        </View>
      </View>

      {/* team */}
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 15}}>
          Maintained and Developed by:
        </Text>

        <Text style={{fontSize: 20}}>
          Ashutosh, Shouryam and Dinki
        </Text>
      </View>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center'
  }
})