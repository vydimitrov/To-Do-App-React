import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ListItems from '../ListItems/ListItems.jsx';
import InputItem from '../InputItem/InputItem.jsx';
import getUniqueId, {setStartId} from './uniqueId.js';
import styles from './styles.scss';
import {getCookie, setCookie} from './cookie.js';
import CookiePolicy from '../CookiePolicy/CookiePolicy.jsx';


export default class TodoApp extends Component {
  constructor(props){
    super(props);
    setStartId(this.props.items);
    this.updateItemState = this.updateItemState.bind(this);
    this.updateItemText = this.updateItemText.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(title, desc){
    this.props.items.unshift(
      Object.assign({id: getUniqueId()}, title, desc, {done: false})
    );
    setCookie(this.props.items);
    this.forceUpdate();
  }

  updateItemState(id){
    const itemsLen = this.props.items.length;
    for(let i=0; i<itemsLen; i++){
      if(this.props.items[i].id === id && this.props.items[i].done === false){
        const item = this.props.items[i];
        item.done = true;
        this.props.items.splice(i,1);
        this.props.items.unshift(item);
        break;
      }
      if(this.props.items[i].id === id && this.props.items[i].done === true){
        this.props.items.splice(i,1);
        break;
      }
    }
    setCookie(this.props.items);
    this.forceUpdate();
  }

  updateItemText(id, title, desc){
    this.props.items.map(i => {
        if(i.id === id){
          const currentItem = i;
          title && (currentItem.title = title);
          desc && (currentItem.desc = desc);
        }
    });
    setCookie(this.props.items);
  }

  render() {
    let props = {};
    props.items = this.props.items;
    props.updateItemState = this.updateItemState;
    props.updateItemText = this.updateItemText;
    return (
      <div>
        <h1 className={styles.appTitle}>To-Do List</h1>
        <InputItem onAddNewItem={this.addNewItem}/>
        <ListItems {...props}/>
        <CookiePolicy />
      </div>
    )
  }
}

TodoApp.defaultProps = {
  items: getCookie()
}
