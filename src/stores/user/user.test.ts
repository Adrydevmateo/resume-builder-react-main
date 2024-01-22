import { expect, test } from 'vitest'

test('User can Sign Into the application with it\'s email and password', async () => {
    // Use the Sign In method
    // Example:
    const SignIn = (email: string, password: string): boolean => (email == 'user' && password == 'user') ? true : false
    expect(SignIn('user', 'user')).toBe(true)
})