// HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View, Text, Button, RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  console.log(data)
  const Item = ({title}) => (
    
      <Text style={styles.title}>{title}</Text>
    

  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
  <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={(item) => item.id.toString()} // Convert the id to a string
        />      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
