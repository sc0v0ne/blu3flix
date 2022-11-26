import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
  } from 'react-native';

import TVPopular from "../components/itens/TVPopular";
import TVTopRated from '../components/itens/MoviesTopRated';
import { movieDBKeyAPI } from '../config/MovieDBkeyAPI';
import ListFlat from '../components/flatlist/ListFlat';

import Styles from '../styles/patternStyles/Styles';

export default function Movies() {  

  const [tvPopular, setTvPopular] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${movieDBKeyAPI.apiKey}&language=en-US`)
    .then(response => response.json())
    .then(dataPopular => {
        setTvPopular(dataPopular.results)
    })
  }, [])

  const [tvTopRated, setTVTopRated] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${movieDBKeyAPI.apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(dataTopRated => {
        setTVTopRated(dataTopRated.results)
    })
  }, [])


  const renderTVPopular = ({ item }) => (
      <TVPopular 
        original_name={item.original_name}
        link={item.link}
        poster_path={item.poster_path}
        preview={item.preview}
        release_date={item.release_date}
        overview={item.overview}        
      />
    );
  
  const renderTVTopRated = ({ item }) => (
    <TVTopRated 
      original_name={item.original_name}
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
        <Text style={Styles.flatListTitle}>Popular TV Shows</Text>
        <ListFlat
          flatListData={tvPopular}
          flatListRenderItem={renderTVPopular}
          flatListKeyExtractor={item => item.id}
          flatListHorizontal={true}
        /> 
         <Text style={Styles.flatListTitle}>TV Top Ranted</Text>
        <ListFlat
          flatListData={tvTopRated}
          flatListRenderItem={renderTVTopRated}
          flatListKeyExtractor={item => item.id}
          flatListHorizontal={true}
        /> 
      </ScrollView>    
    </View>
  );
}