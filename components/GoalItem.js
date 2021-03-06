import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const GoalItem=props=>{
    return ( 
      <TouchableOpacity onPress={props.onDelete}>
        <View  style={styles.listItems}>
          <Text >{props.title}</Text>
        </View>
      </TouchableOpacity>);
};

const styles=StyleSheet.create({
    listItems:{
    padding:10,
    marginVertical:10,
    backgroundColor:"yellow",
    borderColor:'black',
    borderWidth:1  }
});

export default GoalItem;