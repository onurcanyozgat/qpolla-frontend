import * as React from 'react';
import { Text, View } from 'react-native';
import PollService from '../services/PollService';

export default function CategoryScreen() {
    const [categoryList, setCategoryList] = React.useState([]);

    const getCategoryList = () => {}

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Kategoriler!</Text>
      </View>
    );
  }