import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ScheduleTable from './components/ScheduleTable';

import Container from 'react-bootstrap/Container';

const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<ScheduleTable />
			</Container>
		</Provider>
	);
};

export default App;
