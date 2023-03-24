import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import rewardsData from '../data/rewardsData';

const RewardsScreen = () => {
  const tableData = rewardsData.map(data => {
    return [data.coins, data.reward]
  })
  const state = {
    tableHead: ['Tokens', 'Rewards'],
    tableData: [...tableData]
  }

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={state.tableHead} style={styles.head} />
        <Rows data={state.tableData} textStyle={styles.text} />
      </Table>

      <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#fff' }}>
        <Text style={{fontWeight: '400', padding: 5 }}>*You may avail the benefits of listed rewards in exchange of the following number of tokens. Offer lasts until sponsored. Hurry!</Text>
      </View>
    </View>
  )
}

export default RewardsScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});