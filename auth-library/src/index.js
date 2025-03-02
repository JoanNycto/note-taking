let users = [];

export function authenticateUser(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user || undefined;
}

export function registerUser(username, password) {
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return 'User already exists';
  }
  const newUser = { username, password };
  users.push(newUser);
  return newUser;
}

// For testing purposes
export function clearUsers() {
  users = [];
}
