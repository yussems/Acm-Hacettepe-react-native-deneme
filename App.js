/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Posts from './components/Posts';




const App = () => {
  return (
    
    <SafeAreaView style={styles.container}>
        {/*<Posts/>*/}
        <FlatList
        data={[
          {
            profileImage: 'https://via.placeholder.com/300',
            userName: 'Belkız Türkoğlu',
            handle: '@hawk435',
            textLorem: 'lorem ipsum haleluya denemeye devam',
            textImage:'https://via.placeholder.com/300',
          },
        ]}
        renderItem={({item}) => <Posts data={item}/>}
      />
        
    </SafeAreaView>    
    
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
  },


})
export default App;
