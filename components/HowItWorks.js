import { StyleSheet } from "react-native"
import { View, Text } from "react-native"
import { FlatList } from "react-native"

const HowItWorks = () => {
  return (
    <View style={{padding: 10, flex: 1}}>
      <Text style={{fontSize: 18, fontWeight: '500', marginBottom: 7}}>What's T2C?</Text>

      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {}
})

export default HowItWorks