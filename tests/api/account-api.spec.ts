import { test, expect } from '../../src/fixtures/test-fixtures';
import { TestDataGenerator } from '../../src/utils/TestDataGenerator';

test.describe('Account API', () => {
  test('should reject authorization with invalid credentials', async ({ accountApi }) => {
    const response = await accountApi.isAuthorized({
      userName: 'nonexistent_user',
      password: 'WrongPass123!',
    });
    expect(response.status).toBe(200);
    expect(response.body).toBe(false);
  });

  test('should generate token for valid user', async ({ accountApi }) => {
    // Note: requires a pre-registered user; skip if not available
    const response = await accountApi.generateToken({
      userName: 'TestUser2024',
      password: 'Test@12345!',
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  test('should fail to create user with weak password', async ({ accountApi }) => {
    const response = await accountApi.createUser({
      userName: TestDataGenerator.username(),
      password: 'weak',
    });
    expect(response.status).toBe(400);
  });
});
