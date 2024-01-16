#1.1 ~ #1.2

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
```
