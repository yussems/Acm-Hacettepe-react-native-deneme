import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Posts = (props) => {
    console.log(props);
    const tweet = props.data
    return (
        <View style={styles.postsa}>
        <Image style={styles.profileImage} source={{uri: tweet.profileImage}}/>
        <View style={styles.tweetContainer}> 
          <View style={styles.header}>
            <Text style={styles.userName}>{tweet.userName}</Text>
            <Text style={styles.icon} >*</Text>
            <Text style={styles.handle}>{tweet.handle}</Text>
          </View>
          <Text style={styles.textLorem}>{tweet.textLorem}</Text>
          <Image style={styles.textImage} source={{uri:tweet.textImage}}/>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      flex:1,
    },
    postsa:{
      flexDirection:'row',
      backgroundColor:'white',
      padding:12,
      
    },
    profileImage:{
      width:100,
      height:100,
      borderRadius:50,
    },  
    tweetContainer:{
      flex:1,
      height:200,
      paddingVertical:0,
      paddingStart:12,
    },
    header:{
      flexDirection:'row',
      backgroundColor:'white',
      
    },
    userName:{
      fontSize:20,
      marginEnd: 8,
      
    },
    icon:{
      color:'dodgerblue',
      fontSize:20,
      marginEnd: 8,
      
    },
  
    handle: {
      fontSize:20,
      color:'black',
      opacity: .5,
      
    },
    textLorem:{
      fontSize:18,
    },
    textImage:{
      flex:1,
      marginTop:3,
      
    }
  
  
  })

export default Posts