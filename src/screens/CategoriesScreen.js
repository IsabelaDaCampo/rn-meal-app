import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
    return(
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          }});
        }}
        color={itemData.item.color}
      />
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



export default CategoriesScreen;