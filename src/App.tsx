import useFunctionChain from "./hooks/useFunctionChain";
import Card from "./components/card";
import Input from "./components/Input";
import Output from "./components/Output";

const App = () => {
  const {
    svgRef,
    inputValue,
    setInputValue,
    functionChain,
    handleEquationResult,
    outputFunctionIndex,
  } = useFunctionChain();

  return (
    <>
      <main className="flex justify-center p-5 m-5">
        <Input setInputValue={setInputValue} />
        <div className="flex w-3/4 flex-wrap justify-center gap-[131px]">
          {functionChain.map(({ prev, next }, index) => (
            <Card
              key={index}
              functionNumber={index + 1}
              nextFuntionNumber={next ? next + 1 : null}
              inputValue={inputValue}
              xValue={prev === null ? inputValue : functionChain[prev].value}
              handleEquationResult={(result) =>
                handleEquationResult(result, index)
              }
            />
          ))}
        </div>
        <Output
          value={
            inputValue !== null
              ? functionChain[outputFunctionIndex].value.toFixed(2)
              : ""
          }
        />
      </main>
      <svg ref={svgRef} className="connections"></svg>
    </>
  );
};

export default App;
