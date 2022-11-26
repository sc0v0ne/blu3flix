import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
  } from 'react-native';

import MoviesPopular from "../components/itens/MoviesPopular";
import MoviesTopRated from '../components/itens/MoviesTopRated';
import { movieDBKeyAPI } from '../config/MovieDBkeyAPI';
import ListFlat from '../components/flatlist/ListFlat';

import Styles from '../styles/patternStyles/Styles';



export default function Movies() {  

  const [moviesPopular, setMoviesPopular] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieDBKeyAPI.apiKey}&language=en-US`)
    .then(response => response.json())
    .then(dataPopular => {
      setMoviesPopular(dataPopular.results)
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


  const renderMoviesPopular = ({ item }) => (
      <MoviesPopular 
        title={item.title}
        link={item.link}
        poster_path={item.poster_path}
        preview={item.preview}
        release_date={item.release_date}
        overview={item.overview}        
      />
    );
  
  const renderMoviesTopRated = ({ item }) => (
    <MoviesTopRated 
      title={item.title}
      link={item.link}
      poster_path={item.poster_path}
      preview={item.preview}
      release_date={item.release_date}
      overview={item.overview}  
      />
  );

  return (
    <View style={Styles.containerPattern}>
      <ScrollView>
        <Text style={Styles.flatListTitle}>Popular Movies</Text>
        <View>
        <ListFlat
          flatListData={moviesPopular}
          flatListRenderItem={renderMoviesPopular }
          flatListKeyExtractor={item => item.id}
          flatListHorizontal={true}
        />
        </View> 
        <Text style={Styles.flatListTitle}>Top Ranted</Text>
        <View>
          <ListFlat
            flatListData={moviesTopRanted}
            flatListRenderItem={renderMoviesTopRated}
            flatListKeyExtractor={item => item.id}
            flatListHorizontal={true}
          /> 
        </View>
      </ScrollView>    
    </View>
  );
}