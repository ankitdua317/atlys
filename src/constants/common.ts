// Data objects of functions in chain which will store ->
// value : Calculated value from the equation.
// next : Index of next function in chain. Will be null for the last function in chain.
// prev : Index of previous function in chain. Will be null for the first function in chain.

export const INITIAL_FUNCTION_CHAIN = [
  {
    value: 0,
    next: 1,
    prev: null,
  },
  {
    value: 0,
    next: 3,
    prev: 0,
  },
  {
    value: 0,
    next: null,
    prev: 4,
  },
  {
    value: 0,
    next: 4,
    prev: 1,
  },
  {
    value: 0,
    next: 2,
    prev: 3,
  },
];
