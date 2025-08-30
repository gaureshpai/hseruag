export function verifyEmailAddress(email: string) {
  const regex = /^[^@]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{1,}$/;
  return regex.test(email);
}
