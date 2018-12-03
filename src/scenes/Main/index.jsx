import React from 'react';
import {Grid, Col, Row} from "react-bootstrap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Style
import "./animation.scss";
import "./style.scss";

//Components
import Card from "../../components/Card";

export default class Main extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid>
				<ReactCSSTransitionGroup
			          transitionName="main-animation"
			          transitionAppear={true}
			          transitionAppearTimeout={200}
			          transitionEnterTimeout={200}
			          transitionLeaveTimeout={200}>
					<Row className="cabinet-main">
						<Col xs={4}>
							<Card 
								title="Личные данные" 
								description="Введите или измените свои личные данные" 
								className="user-profile"
								icon="faIdCard"/>
						</Col>

						<Col xs={4}>
							<Card 
								title="История болезней" 
								description="Здесь вы можете посмотреть свою историю болезней" 
								className="history"/>
						</Col>

						<Col xs={4}>
							<Card 
								title="Рекомендации врачей" 
								description="Ознакомтесь с рекомендациями врачей" 
								className="recomendation"/>
						</Col>
					</Row>

					<Row>
						<Col xs={4}>
							<Card 
								title="Личные данные" 
								description="Введите или измените свои личные данные" 
								className="three"/>
						</Col>

						<Col xs={4}>
							<Card 
								title="История болезней" 
								description="Здесь вы можете посмотреть свою историю болезней" 
								className="four"/>
						</Col>

						<Col xs={4}>
							<Card 
								title="Помощь" 
								description="У вас возник вопрос? Обратитесь в нашу службу поддержки" 
								className="fifth"/>
						</Col>
					</Row>
				</ReactCSSTransitionGroup>
			</Grid>
		);
	}
}
