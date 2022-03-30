import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from "./Home";

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</React.Fragment>
	)
}

export default App;