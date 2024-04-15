export const isValidEmail = (email: string): boolean => {
  if (/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
    return true;
  }
  return false;
};
