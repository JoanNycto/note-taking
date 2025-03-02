'use strict';

var users = [];
function authenticateUser(username, password) {
  var user = users.find(function (u) {
    return u.username === username && u.password === password;
  });
  return user || undefined;
}
function registerUser(username, password) {
  var existingUser = users.find(function (u) {
    return u.username === username;
  });
  if (existingUser) {
    return 'User already exists';
  }
  var newUser = {
    username: username,
    password: password
  };
  users.push(newUser);
  return newUser;
}

// For testing purposes
function clearUsers() {
  users = [];
}

exports.authenticateUser = authenticateUser;
exports.clearUsers = clearUsers;
exports.registerUser = registerUser;
