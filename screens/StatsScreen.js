import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import statsData from '../data/statsData';

const StatsScreen = () => {
  const tableData = statsData.map(data => {
    return [data.rank, data.company, data.months, data.totalPoints]
  })
  const state = {
    tableHead: ['Rank', 'Org. Name', 'Months', 'Total Points (lifetime)'],
    tableData: [...tableData]
  }

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={state.tableData} textStyle={styles.text} />
      </Table>

      <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 20, fontWeight: '400' }}>Stats updates after every 5 minutes based on the recent rewards and redeems</Text>
      </View>
    </View>
  )
}

export default StatsScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
