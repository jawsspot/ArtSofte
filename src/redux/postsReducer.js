const postsReducer = (state = [], action) => {
  
  switch (action.type) {
    case "CREATE_HISTORY_ITEMS":
      let historyItems = localStorage.getItem("historyItems");
      historyItems = JSON.parse(historyItems);

      const addCommentObj = {
        senderNumber: action.senderNumber,
        validity: action.validity,
        cvc: action.cvc,
        recipientNumber: action.recipientNumber,
        transferAmount: action.transferAmount,
        date: action.date,
        id: action.id,
      };

      historyItems.push(addCommentObj);
      let toLocalStor = JSON.stringify(historyItems);
      localStorage.setItem("historyItems", toLocalStor);

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

    case "DELETE_HISTORY_ITEMS":
      console.log(action.index);
      let newState = state;

      newState.splice(--action.index, 1);

      let newLocalStor = JSON.stringify(newState);
      localStorage.setItem("historyItems", newLocalStor);

      return [...newState];

    case "REPEAT_HISTORY_ITEMS":
      console.log(action.recipientNumber);
      localStorage.removeItem("repeat");
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
