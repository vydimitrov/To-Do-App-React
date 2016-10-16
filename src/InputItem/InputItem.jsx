import React, {Component} from 'react';
import styles from './styles.scss';

export default class InputItem extends Component {
	constructor(){
		super();
		this.state = {
			openForm: false
		};
		this.onClickButton = this.onClickButton.bind(this);
	}

	onClickButton(){
		this.setState({openForm: !this.state.openForm});

		if(this.state.openForm && (this.refs.titleInput.value || this.refs.descInput.value)){
			this.props.onAddNewItem({title: this.refs.titleInput.value}, {desc: this.refs.descInput.value});
		}
		this.refs.titleInput.value = '';
		this.refs.descInput.value = '';
	}

	render(){
		let wrapperStyles = styles.inputWrapper;
		if(this.state.openForm){
			wrapperStyles = styles.inputWrapperOpened;
		}

		return(
			<div className={wrapperStyles}>
				<input ref="titleInput" className={styles.text + " form-control"} type="text" placeholder="add item title ..."/>
				<textarea ref="descInput" className={styles.textarea + " form-control"} rows={5} placeholder="add item description"></textarea>
				<div className={styles.cover}>
					<button className={styles.btnPrimary + " btn btn-primary"} onClick={this.onClickButton}>Add New Item</button>
				</div>
			</div>
		);
	}
}
