import React, {Component} from 'react';
import DoneItems from '../DoneItems/DoneItems.jsx';
import NotDoneItemsYet from  '../NotDoneItemsYet/NotDoneItemsYet.jsx';
import styles from './style.scss';

export default class ListItems extends Component {
	render(){
		let titleClass = styles.title;

		if(this.props.items.length)
			titleClass = [titleClass, styles.showTitle].join(' ');

		return(
			<div className={styles.grid}>
				<div className={styles.col}>
					<h2 className={titleClass}>Stuff I have to do</h2>
					<div className={styles.inner}>
						<NotDoneItemsYet {...this.props}/>
					</div>
				</div>
				<div className={styles.col}>
					<h2 className={titleClass}>Awesomely done stuff</h2>
					<div className={styles.inner}>
						<DoneItems {...this.props}/>
					</div>
				</div>
			</div>
		);
	}
}
