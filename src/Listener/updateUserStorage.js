const updateUserStorage = (data) => {
  const user = {
    isNew : false,
    userName : data[0],
    nickName : data[1],
    password : data[2],
    language : data[3],
    icon : data[4]
  }
  localStorage.setItem('user' , JSON.stringify(user))

}
export { updateUserStorage }