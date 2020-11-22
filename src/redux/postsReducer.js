const postsReducer = (state = [], action) => {
  
  switch (action.type) {
    case "CREATE_COMMENTS":
      let commentsState = localStorage.getItem("comments");
      commentsState = JSON.parse(commentsState);

      const addCommentObj = {
        senderNumber: action.senderNumber,
        validity: action.validity,
        cvc: action.cvc,
        recipientNumber: action.recipientNumber,
        transferAmount: action.transferAmount,
        date: action.date,
        id: action.id,
      };

      commentsState.push(addCommentObj);
      let toLocalStor = JSON.stringify(commentsState);
      localStorage.setItem("comments", toLocalStor);

      return [
        ...state,
        {
          senderNumber: action.senderNumber,
          validity: action.validity,
          date: action.date,
          cvc: action.cvc,
          recipientNumber: action.recipientNumber,
          transferAmount: action.transferAmount,
          id: action.id,
          index: action.index,
        },
      ];

    case "DELETE_COMMENTS":
      console.log(action.index);
      let newState = state;

      newState.splice(--action.index, 1);

      let newLocalStor = JSON.stringify(newState);
      localStorage.setItem("comments", newLocalStor);

      return [...newState];

    case "REPEAT_COMMENTS":
      console.log(action.recipientNumber);
      localStorage.removeItem("repeat")
      const repeatData = {
        nowSenderNumber: action.senderNumber,
        nowValidity: action.validity,
        nowCvc: action.cvc,
        nowRecipientNumber: action.recipientNumber,
        nowTransferAmount: action.transferAmount,
      };
      let toLocalStore = JSON.stringify(repeatData);
      localStorage.setItem("repeat", toLocalStore);
    default:
      return state;
  }
};

export default postsReducer;
