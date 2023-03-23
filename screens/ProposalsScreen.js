import { StyleSheet, Text, View } from 'react-native'
import proposalData from '../data/proposalData'
import { Entypo } from '@expo/vector-icons'; 


const ProposalsScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: '700', textDecorationLine: 'underline' }}>Trending discussions in teh Community:</Text>

      <View style={{ margin: 10 }}>
        {proposalData.map((data, index) =>
          <View style={{ height: 135, marginTop: 5, borderWidth: 1, padding: 5, borderRadius: 6, flexDirection: 'column', padding: 15 }} key={index}>
            <Text style={{ fontWeight: '700', fontSize: 16 }}>{`#${data.id} ${data.proposalHeading}`}</Text>
            <Text style={{fontSize: 15}}>Description: {data.proposalDetails}</Text>
            <Text style={{ fontWeight: '500' }}>Category: {data.proposalType}</Text>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
              <Text style={{ fontWeight: '600' }}>Discussions: {data.discussionsCount}</Text>
              <Text>Expected: {data.maybe ? 
                <Entypo name="squared-plus" size={20} color="green" />
                : 
                <Entypo name="squared-cross" size={20} color="red" />
            }</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

export default ProposalsScreen

const styles = StyleSheet.create({})