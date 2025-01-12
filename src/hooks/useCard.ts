import { useEffect, useState } from "react";
import { validateEquation } from "../utils/validate";

const useCard = (
  inputValue: number | null,
  xValue: number | null,
  handleEquationResult: (result: number) => void
) => {
  const [error, setError] = useState(false);
  const [expression, setExpression] = useState("");

  const calculateResult = (equation: string) => {
    if (equation) {
      try {
        if (!validateEquation(equation)) {
          setError(true);
          return;
        }

        if (xValue !== null) {
          // Replace implicit expression
          let formattedExpression = equation.replace(/(\d)(x)/g, "$1*$2");

          // Replace exponent operator
          formattedExpression = formattedExpression.replace(/\^/g, "**");

          // Replace 'x' with the actual value of x
          const expressionWithX = formattedExpression.replace(
            /x/g,
            `(${xValue})`
          );

          // Evaluate the mathematical expression
          const calcResult = eval(expressionWithX);
          handleEquationResult(calcResult);
        }

        // Clear any previous error
        setError(false);
      } catch (e) {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const handleChange = (value: string) => {
    setExpression(value);
    calculateResult(value);
  };

  useEffect(() => {
    if (xValue !== null && inputValue !== null) {
      calculateResult(expression);
    }
  }, [xValue, inputValue]);

  return {
    error,
    handleChange,
  };
};

export default useCard;
