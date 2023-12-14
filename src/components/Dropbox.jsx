import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Dropdown } from '../utils/Date'

const Dropbox = () => {
  return (
    <View style={{marginTop:20}}>
      <FlatList data={Dropdown} renderItem={({item,index})=>(
        <View>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
        </View>
  )} />
    </View>
  )
}

export default Dropbox