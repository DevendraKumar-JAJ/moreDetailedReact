
function Pass(charChange,numChange,passLen){
  let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numChange) {
    str = str + '0123456789'
  }
  if (charChange) {
    str += '!@#$%^&*?~|'
  }


  let pass = "";
  let Len = str.length;
  for (var i = 0; i < passLen; i++) {
    pass = pass + str[(Math.floor(Math.random() * Len))]
  }
  return pass;
}

export default Pass;