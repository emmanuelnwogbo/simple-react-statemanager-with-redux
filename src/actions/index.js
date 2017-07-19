export function selectBook(book) {
  //selectBook is an ActionCreator, it needs to return an action:
  //which is simply an object with a *type property
  //actions usually have two values: a type and a payload(THE PIECE OF DATA THAT DESCRIBES THE ACTION BEING UNDERTAKEN)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
