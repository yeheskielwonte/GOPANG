import * as React from 'react';
import {View, useWindowDimensions, StatusBar, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TabOrderOngoing from '../TabOrder2';
import TabOrderHistory from '../TabOder3';
import firebase from '../../../config/Firebase';

const FirstRoute = props => {
  const uid = props.uid;
  console.log('ini uid di tabOrder', uid);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TabOrderOngoing uid={uid} style={{flex: 1}} />
    </View>
  );
};

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <TabOrderHistory style={{flex: 1}} />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#38A7D0'}}
    style={{backgroundColor: 'white'}}
    activeColor="black"
    inactiveColor="#C7C7C7"
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Ongoing'},
    {key: 'second', title: 'History'},
  ]);

  return (
    <View style={{flex: 1}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
}
