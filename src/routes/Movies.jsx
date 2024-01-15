import { gql, useQuery } from '@apollo/client';

const GET_allMovies = gql`
  {
    allMovies {
      id
      title_english
    },
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

function Movies() {
  const {data, loading, error} = useQuery(GET_allMovies);
  console.log(data);
  if(loading) return <h2>Is Loading...</h2>
  if(error) return <h2>Could not fetch :(</h2>
  return (
    <ul>
      <h3>allMovies</h3>
      {data.allMovies.map(movie => <li key={movie.id}>{movie.title_english}</li>)}
      <br />
      <h3>allTweets</h3>
      {data.allTweets.map(tweet => <li key={tweet.id}>{tweet.author.fullName} : {tweet.text}</li>)}
    </ul>
  )
}

export default Movies
