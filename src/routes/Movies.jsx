import { gql, useApolloClient } from '@apollo/client';
import React, { useEffect, useState } from 'react'

function Movies() {
  const client = useApolloClient();
  const [movies, setMovies] = useState(null);
  const [apiLoaded, setApiStatus] = useState(false);
  useEffect(() => {
    client.query({
      query: gql`
        {
          allMovies {
            title_english
            id
          }
        }
      `
    }).then(results => {
      setMovies(results.data.allMovies);
    });
  }, []);
  useEffect(() => {
    if(!movies) return;
    setApiStatus(true);
  }, [movies]);
  return (
    <ul>
      {apiLoaded ? movies?.map(movie => (<li key={movie.id}>{movie.title_english}</li>)) : <h2>now loading...</h2>}
    </ul>
  )
}

export default Movies
