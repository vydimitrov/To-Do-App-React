import React, {Component} from 'react';
import styles from './style.scss';

export default class CookiePolicy extends Component{
	constructor(){
		super();
		this.state = {
			buttonClicked: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({buttonClicked: !this.state.buttonClicked});
	}

	render(){
		return(
			<div className={[styles.cookieBox, this.state.buttonClicked ? styles.buttonClicked : ''].join(' ')}>
				<span className={styles.cookieText}>The App uses the browser local storage to save your To-Do items.</span>
				<button className={'btn btn-info'} onClick={this.handleClick}>Got it!</button>
			</div>
		)
	}
}
