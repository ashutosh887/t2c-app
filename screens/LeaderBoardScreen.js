import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import leaderBoardData from '../data/leaderboardData';

const LeaderBoardScreen = () => {
  const tableData = leaderBoardData.map(data => {
    return [data.rank, data.username, data.currentPoints]
  })
  const state = {
      tableHead: ['Rank', 'Username', 'Points'],
      tableData: [...tableData]
    }

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={state.tableHead} style={styles.head} />
        <Rows data={state.tableData} textStyle={styles.text} />
      </Table>
 
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#fff' }}>
        <Text style={{fontSize: 20, fontWeight: '400', padding: 5}}>Leaderboard updates after every 5 minutes based on the recent rewards and redeems</Text>
      </View>
    </View>
  )
}

export default LeaderBoardScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});