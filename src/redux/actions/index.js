export const saveUsername = (username) => ({
  type: 'SAVE_USERNAME',
  payload: username,
})

export const actionSavePost = ({title, content, username, createdDate}) => ({
  type: 'SAVE_POST',
  payload: {
    title,
    content, 
    username,
    createdDate: new Date().toISOString(),
  }
})