이번 시간에 뭘 배웠는지 간략히 요약하는 노트(커밋 별 내용 달라질 예정).
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
