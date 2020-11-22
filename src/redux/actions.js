export const createComments = (post) => {
  return {
    type: "CREATE_COMMENTS",
    senderNumber: post.senderNumber,
    validity: post.validity,
    cvc: post.cvc,
    recipientNumber: post.recipientNumber,
    transferAmount: post.transferAmount,
    date: new Date().toLocaleTimeString(),
    id: post.id,
  };
};

export const deleteComments = (index) => {
  return {
    type: "DELETE_COMMENTS",
    index: index,
  };
};
export const repeat = (li) => {
  return {
    type: "REPEAT_COMMENTS",
    senderNumber: li.senderNumber,
    validity: li.validity,
    cvc: li.cvc,
    recipientNumber: li.recipientNumber,
    transferAmount: li.transferAmount,
  };
};
