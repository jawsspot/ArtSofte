export const createItems = (post) => {
  return {
    type: "CREATE_HISTORY_ITEMS",
    senderNumber: post.senderNumber,
    validity: post.validity,
    cvc: post.cvc,
    recipientNumber: post.recipientNumber,
    transferAmount: post.transferAmount,
    date: new Date().toLocaleTimeString(),
    id: post.id,
  };
};

export const deleteItems = (index) => {
  return {
    type: "DELETE_HISTORY_ITEMS",
    index: index,
  };
};
export const repeat = (li) => {
  return {
    type: "REPEAT_HISTORY_ITEMS",
    senderNumber: li.senderNumber,
    validity: li.validity,
    cvc: li.cvc,
    recipientNumber: li.recipientNumber,
    transferAmount: li.transferAmount,
  };
};
