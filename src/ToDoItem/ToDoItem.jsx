import React, {Component} from 'react';
import styles from './style.scss';
import thumbUp from '../img/thumb-up.png'

export default class ToDoItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			viewDesc : false,
			checkboxChecked : this.props.done
		};
		this.onViewDesc = this.onViewDesc.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.onClickUpateState = this.onClickUpateState.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.updateItemHeight = this.updateItemHeight.bind(this);
	}

	onViewDesc(){
		this.setState({viewDesc: !this.state.viewDesc});
	}

	handleCheckboxChange(){
		this.setState({checkboxChecked: !this.state.checkboxChecked});
	}

	onClickUpateState(){
		this.props.updateItemState(this.props.id);
	}

	handleInputBlur(e){
		const title = e.target.tagName.toLowerCase() === 'input' ? e.target.value : false;
		const desc = e.target.tagName.toLowerCase() === 'textarea' ? e.target.value : false;
		this.props.updateItemText(this.props.id, title, desc);

		this.updateItemHeight();
	}

	updateItemHeight(){
		if(this.state.viewDesc){
			this.refs.itemTextArea.style.height = '1px';
			this.refs.item.style.height = 65 + this.refs.itemTextArea.scrollHeight + 'px';
			this.refs.itemTextArea.style.height = this.refs.itemTextArea.scrollHeight + 'px';
		}else if(this.refs.item){
			this.refs.item.style = '';
		}
	}

	render(){
		let buttonClass = 'btn btn-danger',
			buttnText = 'REMOVE',
			itemChecked = {};

		this.updateItemHeight();

		if(this.props.done !== true){
			buttonClass = 'btn btn-success',
			buttnText = 'DONE';
		}

		if(this.state.checkboxChecked){
			itemChecked = styles.itemChecked;
		}

		return(
			<li ref="item" className={styles.listItem}>
				<div ref="itemDesc" className={[styles.desc, this.state.viewDesc ? styles.descOpened : ''].join(' ')}>
					<textarea ref="itemTextArea" className={styles.descInput} defaultValue={this.props.desc} onBlur={this.handleInputBlur} placeholder="No description provided. Better do it now!"></textarea>
				</div>
				<div className={styles.item}>
					<label className={this.state.checkboxChecked ? styles.itemChecked : ''}>
						<span className={styles.customCheckbox}></span>
						<input className={styles.hidden} type="checkbox" onChange={this.handleCheckboxChange}/>
						<img className={styles.thumbUp} src={thumbUp} alt=""/>
					</label>
					<span className={styles.title}>
						<input className={styles.titleInput} type="text" defaultValue={this.props.title} onBlur={this.handleInputBlur} placeholder="Your item title goes here ... " />
					</span>
					<div className={styles.buttons}>
						<button className="btn btn-warning" onClick={this.onViewDesc}>View</button>
						<button className={buttonClass} onClick={this.onClickUpateState} disabled={!this.state.checkboxChecked} >{buttnText}</button>
					</div>
				</div>
			</li>
		);
	}
}
