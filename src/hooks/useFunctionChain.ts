import { useEffect, useRef, useState } from "react";
import { INITIAL_FUNCTION_CHAIN } from "../constants/common";
import { connectAllDots } from "../utils/chain";

const useFunctionChain = () => {
  const [functionChain, setFunctionChain] = useState(INITIAL_FUNCTION_CHAIN);
  const [inputValue, setInputValue] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const inputFunctionIndex = INITIAL_FUNCTION_CHAIN.findIndex(
    (item) => item.prev === null
  );
  const outputFunctionIndex = INITIAL_FUNCTION_CHAIN.findIndex(
    (item) => item.next === null
  );

  const handleEquationResult = (result: number, index: number) => {
    const currentFunctionChain = [...functionChain];
    currentFunctionChain[index].value = result;
    setFunctionChain(currentFunctionChain);
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    connectAllDots(svg, inputFunctionIndex, outputFunctionIndex);
  }, []);

  return {
    svgRef,
    inputValue,
    setInputValue,
    functionChain,
    handleEquationResult,
    outputFunctionIndex,
  };
};

export default useFunctionChain;
