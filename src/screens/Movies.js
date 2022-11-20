import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
  } from 'react-native';

import Itens from "../components/itens/Item";
import MoviesTopRated from '../components/itens/MoviesTopRated';
import { movieDBKeyAPI } from '../configs/MovieDBkeyAPI';
import ListFlat from '../components/flatlist/ListFlat';

import Styles from '../styles/patternStyles/Styles';

export default function Movies() {  

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieDBKeyAPI.apiKey}&language=en-US`)
    .then(response => response.json())
    .then(dataPopular => {
      setMovies(dataPopular.results)
    })
  }, [])

  const [moviesTopRanted, setMoviesTopRanted] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${movieDBKeyAPI.apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(dataTopRated => {
      setMoviesTopRanted(dataTopRated.results)
    })
  }, [])


  const renderItem = ({ item }) => (
      <Itens 
        title={item.title} link={item.link} poster_path={item.poster_path} preview={item.preview} release_date={item.release_date}/>
    );
  
  const renderMoviesTopRated = ({ item }) => (
    <MoviesTopRated 
      title={item.title} link={item.link} poster_path={item.poster_path} preview={item.preview} release_date={item.release_date}/>
  );

  return (
    <View style={Styles.containerPattern}>
      <ScrollView>
        <Text style={Styles.inputMethodTitle}>Popular Movies</Text>
        <ListFlat
          flatListData={movies}
          flatListRenderItem={renderItem}
          flatListKeyExtractor={item => item.id}
          flatListHorizontal={true}
        /> 
         <Text style={Styles.inputMethodTitle}>Popular Movies 2</Text>
        <ListFlat
          flatListData={moviesTopRanted}
          flatListRenderItem={renderMoviesTopRated}
          flatListKeyExtractor={item => item.id}
          flatListHorizontal={true}
        /> 
      </ScrollView>    
    </View>
  );
}