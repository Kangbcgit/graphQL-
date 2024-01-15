import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000", //graphQL서버 주소
  cache: new InMemoryCache(), // 준 필수적인 .. 나중에 다룰 것
});

// client.query({ // 클라이언트&서버 테스트 코드
//   query: gql`
//   {
//     allMovies {
//       title_english
//     }
//   }
//   `
// }).then(data => console.log(data));

export default client