const generateRandomString = function() {
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueID = '';
  for (let i = 0; i < 6; i++) {
    uniqueID += string.charAt(Math.floor(Math.random() * string.length));
  }
  return uniqueID;
};



module.exports = {
  generateRandomString
}