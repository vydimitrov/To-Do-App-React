import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ToDoItem from '../ToDoItem/ToDoItem.jsx';
import styles from './styles.scss';

export default class NotDoneItemsYet extends Component {
	render(){
		const {items} = this.props;
		const notDoneItems = items.map(
			i => {
				if(i.done === false){
					let props = {};
					for(let prop in i)
						props[prop] = i[prop];

					return <ToDoItem {...props} key={i.id}
									updateItemState={this.props.updateItemState}
									updateItemText = {this.props.updateItemText}
									/>;
				}else
					return null;
			}
		);
		return(
			<ul className={styles.list}>
				<ReactCSSTransitionGroup
					transitionName={ {
					      enter: styles.itemEnter,
  					      enterActive: styles.itemEnterActive,
  					      leave: styles.itemLeave,
  					      leaveActive: styles.itemLeaveActive,
  					      appear: styles.itemAppear,
  					      appearActive: styles.itemAppearActive
					    } }
					transitionAppear={true}
					transitionAppearTimeout={2000}
					transitionEnterTimeout={500}
		          	transitionLeaveTimeout={500}
			    >
					{notDoneItems}
				</ReactCSSTransitionGroup>
			</ul>
		);
	}
}
