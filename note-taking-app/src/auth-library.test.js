import { authenticateUser, registerUser, clearUsers } from 'auth-library';

describe('auth-library', () => {
  beforeEach(() => {
    // Clear users before each test
    clearUsers();
  });

  test('should authenticate user with valid credentials', () => {
    // Add a user for testing
    registerUser('user1', 'password1');

    const user = authenticateUser('user1', 'password1');
    expect(user).toEqual({ username: 'user1', password: 'password1' });
  });

  test('should not authenticate user with invalid credentials', () => {
    const user = authenticateUser('user1', 'invalidpassword');
    expect(user).toBeUndefined();
  });

  test('should register a new user', () => {
    const newUser = registerUser('newuser', 'newpassword');
    expect(newUser).toEqual({ username: 'newuser', password: 'newpassword' });

    // Check if the user is added
    const user = authenticateUser('newuser', 'newpassword');
    expect(user).toEqual({ username: 'newuser', password: 'newpassword' });
  });

  test('should return "User already exists" when registering an existing user', () => {
    // Add a user for testing
    registerUser('existinguser', 'existingpassword');

    const result = registerUser('existinguser', 'newpassword');
    expect(result).toBe('User already exists');
  });
});
