import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
    return(
      <TouchableOpacity
        style={styles.girdItem}
        onPress={() => {
          props.navigation.navigate({routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          }});
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  girdItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen;