import React, { useState, useEffect } from 'react';
import {
    View,

  } from 'react-native';

import Itens from "../components/itens/Item";
import { movieDBKeyAPI } from '../configs/MovieDBkeyAPI';
import ListFlat from '../components/flatlist/ListFlat';


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
      <ListFlat
        flatListData={movies}
        flatListRenderItem={renderItem}
        flatListKeyExtractor={item => item.id}
        flatListHorizontal={true}
      />      
    </View>
  );
}