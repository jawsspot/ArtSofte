import React from "react";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {deleteComments} from '../redux/actions'
import {repeat} from '../redux/actions'
import style from "./UlRemittance.scss"



class UlRemittance extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){

   if (!this.props.newPosts.length) return <p>Нет новых комментариев</p>;
   return this.props.newPosts.map((li, index) => {
     return (
       
        
        <li key={++index} className={style.li}>
          <div className={style.index}>{index}</div>
          <p className={style.number}>{li.senderNumber}</p>
          <p className={style.number}>{li.recipientNumber}</p>
          <p className={style.amount}>{li.transferAmount}</p>
          <p className={style.date}>{li.date}</p>
          <div className={style.buttons}> 
           <button className={style.btn} onClick={(e) => this.props.repeat(li)}><NavLink to="/AddRemittance" exact>Повторить перевод</NavLink></button>
           <button className={style.btn} onClick={(e) => this.props.deleteComments(index)}>Удалить</button>
          </div>
         
        </li>  
     );
   })
  } 
}



const mapStateToProps = (state) => {
  console.log(state);
  return {
    newPosts: state
  };
};

const mapDispatchToProps = {
  deleteComments,
  repeat
};


export default connect(mapStateToProps, mapDispatchToProps)(UlRemittance);
