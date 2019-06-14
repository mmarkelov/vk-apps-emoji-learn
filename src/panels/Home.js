import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		<Group title="Navigation Example">
			<Div>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
