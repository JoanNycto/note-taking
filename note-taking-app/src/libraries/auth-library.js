'use strict';

var users = [{
  username: 'user1',
  password: 'password1'
}, {
  username: 'user2',
  password: 'password2'
}];
function authenticateUser(username, password) {
  return users.find(function (user) {
    return user.username === username && user.password === password;
  });
}

exports.authenticateUser = authenticateUser;
