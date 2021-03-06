/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from '../../navigation/AuthFlowNavigator';
type CalendarScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Calendar>;
interface CalendarScreenProps {
    navigation: CalendarScreenNavigationProps;
}

class CalendarScreen extends React.Component {
  rowHasChanged(r1, r2) {

const CalendarScreen: React.FunctionComponent<CalendarScreenProps> = (props) => {
  const { navigation } = props;
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  renderItem(item) {
    const labels =
      item.labels &&
      item.labels.map(label => (
        <View
          key={`label-${label}`}
          style={{
            padding: 5,
            backgroundColor:
              label === 'Urgent' ? '#f1f1e6' : '#d4a418',
            borderRadius: 3,
          }}
        >
          <Text style={{ color: 'white' }}>{label}</Text>
        </View>
      ));
    return (
      <View style={styles.item}>
        <View>
          <Text
            style={{
              color: '#48506B',
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ color:'#254176'}}>
            {item.time}
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Logout" onPress={() => navigation.navigate(AppScreens.Welcome)} />
          </View>
        </View>
      </View>
      
    );
  }

  render() {
    const { items, loadItems } = this.props;
    return (
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        theme={{
          dotColor: '#f1f1e6',
          selectedDayBackgroundColor: '#b8caff',
          agendaDayTextColor: '#f1f1e6',
          agendaDayNumColor: '#f1f1e6',
          agendaTodayColor: '#4f44b6',
          backgroundColor: '#f1f1f8',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8caff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default CalendarScreen;

