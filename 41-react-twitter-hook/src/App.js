import Main from "./components/Main";
import PlaceholderProvider from "./utils/context";
import {defaultNameUser} from "./utils/const";

const App = () => {
	return (
		<PlaceholderProvider>
			<Main/>
		</PlaceholderProvider>
	)
}


export default App