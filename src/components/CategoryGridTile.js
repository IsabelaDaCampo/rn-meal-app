import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

import Colors from '../constants/colors';

const CategoryGridTile = props => {
  let TouchableComponent = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.girdItem}>
      <TouchableComponent
        style={styles.touchable}
        onPress={props.onSelect}
      >
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  girdItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 5,
    overflow: 'hidden',
  },
  container:{
    flex: 1,
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 4,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  },
  touchable: {
    flex: 1,
  }
});

export default CategoryGridTile;