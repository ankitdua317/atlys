// Validate equation to contain only allowed characters
export const validateEquation = (input: string) => {
  const regex = /^[\d\+\-\*/\^x\s]+$/;
  return regex.test(input);
};
