import React from "react";
import { connect } from "react-redux";
import {createItems} from "../redux/actions";
import Validate from './validate/Validate'
import style from "./Add.scss"


class addComment extends React.Component {
  constructor(props) {
    super(props);

    let state;
    let repeat = localStorage.getItem("repeat");
    if(repeat !== null){
      repeat = JSON.parse(repeat)
      state = ({senderNumber: repeat.nowSenderNumber, validity: repeat.nowValidity,  cvc: repeat.nowCvc,
      recipientNumber: repeat.nowRecipientNumber, transferAmount: repeat.nowTransferAmount, validate:''})
    }else {
     state = { 
      senderNumber:"",
      validity:"",  
      cvc:"",
      recipientNumber:"", 
      transferAmount:"",
      validate:''
    }
    }
    
    this.state = state;    
  }
  

  submitHandler = (event) => {

    event.preventDefault();

    const { senderNumber, validity, cvc, recipientNumber, transferAmount } = this.state;
    
     if (!senderNumber.trim() || !validity.trim() || !cvc.trim() ||!recipientNumber.trim() || !transferAmount.trim()) {
       return this.setState({validate:"Данные введены не верно, внесите изменения"});
     }
    
    const newPost = {
      senderNumber,
      validity,
      cvc,
      recipientNumber,
      transferAmount,
      id: Date.now(),
    };
    
    localStorage.removeItem('repeat')
    this.props.createItems(newPost);
    this.setState({ senderNumber: "", validity: "", cvc:"", recipientNumber:"", transferAmount:"" });
  };


  render() {
    return (
      <form onSubmit={this.submitHandler} 
      className={style.container}>
        <Validate state={this.state.validate}/>
        <div className={style.card_container}>
        <fieldset className={style.card}>
          <input
            className={style.number}
            type="text"
            name="number"
            required
            value={this.state.senderNumber}
            placeholder="Номер карты отправителя"
            pattern="[0-9]{13,19}"
            onChange={(e) => {
              this.setState({ senderNumber: e.target.value, validate:"" });
            }}          
            
          />
          <div className={style.number_container}>
          <input
            className={style.number}
            type="date"  
            required
            name="validity"
            placeholder="Срок действия карты"
            value={this.state.validity}
            onChange={(e) => {
              this.setState({ validity: e.target.value, validate: "" });
            }}
          />
          <input
            className={style.number}
            required
            type="text"
            pattern="[0-9]{3,4}"
            name="cvc/cvv2"
            placeholder="cvc/cvv2"
            value={this.state.cvc}
            onChange={(e) => {
              this.setState({ cvc: e.target.value, validate: "" });
            }}
          />
          
          </div>
        </fieldset>
      
        <fieldset className={style.card}>
          <input
            className={style.number}
            type="text"
            pattern="[0-9]{13,19}"
            required
            name="recipientNumber"
            value={this.state.recipientNumber}
            placeholder="Номер карты получателя"
            onChange={(e) => {
              this.setState({ recipientNumber: e.target.value, validate:"" });
            }}          
          />
          <input  
            className={style.number}
            type="text"
            pattern="[0-9]{1,10}"
            required
            name="transferAmount"
            value= {this.state.transferAmount}
            placeholder="Сумма перевода"
            onChange={(e) => {
              this.setState({ transferAmount: e.target.value, validate:"" });
          }}          
          />
        </fieldset>
            </div>
          <button className={style.btn} type="submit" >Перевести</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    newPosts: state
  };
};

const mapDispatchToProps = {
  createItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(addComment);
