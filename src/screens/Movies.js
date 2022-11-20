import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    FlatList

  } from 'react-native';

import Itens from "../components/itens/Item";
import { movieDBKeyAPI } from '../configs/MovieDBkeyAPI';



export default function Movies() {
    
  

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieDBKeyAPI.apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])


  const renderItem = ({ item }) => (
      <Itens 
        title={item.title} link={item.link} poster_path={item.poster_path} preview={item.preview} release_date={item.release_date}/>
    );

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}