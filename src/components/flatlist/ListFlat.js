import React, { useState } from 'react';
import {
    View,    
    FlatList,
  } from 'react-native';

export default function ListFlat(props) {
  
  return (
    <View>
        <FlatList            
            data={props.flatListData}
            renderItem={props.flatListRenderItem}
            keyExtractor={props.flatListKeyExtractor}
            horizontal={props.flatListHorizontal}
            style={props.flatListStyle}
        />
    </View>
  );
}

