import { View, Text } from 'react-native'
import React from 'react'
import { MyColors } from '../utils/MyColors'

const ProductTitles = ({titles}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={{fontSize:18,fontWeight:'600'}}>{titles}</Text>
      <Text style={{fontSize:16,color:MyColors.primary}}>See more</Text>
    </View>
  )
}

export default ProductTitles