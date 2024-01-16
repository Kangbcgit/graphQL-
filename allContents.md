#1.1

```js
// in ./src/apolloClient.js
const client = new apolloClient({
	uri: "서버 주소",
	cache: new InMemoryCache(), // 캐시 관리?? 나중에 배울 예정
});
// in ./src/index.js
import client from "./apolloClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
); //App 컴포넌트 내부의 모든 컴포넌트들은 client에 접근 가능.

//./src/Movies.jsx   ver1.0
import { gql, useApolloClient } from "@apollo/client";
import React, { useEffect, useState } from "react";

function Movies() {
	const client = useApolloClient();
	const [movies, setMovies] = useState();
	useEffect(() => {
		client
			.query({
				query: gql`
					{
						allMovies {
							title_english
							id
						}
					}
				`,
			})
			.then((results) => {
				setMovies(results.data.allMovies);
			});
	}, []);
	return; //... 생략
}
```

#1.2

```js
// ./src/Movies
// useState와, useEffect, client.query등을 하나 하나 작성하던 명령형 코드 배제
import { useQuery, gql } from "@apollo-client";
const GET_allMovies = gql`
	{
		allMovies {
			id
			title_english
		}
	}
`;
function Movies() {
	/*
  useQuery hook
  선언형(declarative) 코드는 원하는 것을 설명하기 위한 것만 작성하는 코드 작성 방법.
  명령형(imperative) 코드는 모든 단계의 코드를 작성.
  */
	const client = useQuery(GET_allMovies); //이 한 줄로 선언형 코드를 작성할 수 있음.
	//컴포넌트가 마운트되면, useEffect, useState처럼 작동.
	return; // ...
}
```

#1.3
