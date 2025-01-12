import useCard from "../../hooks/useCard";
import Connectors from "./Connectors";
import Header from "./Header";
import NextFunction from "./NextFunction";

interface Props {
  functionNumber: number;
  nextFuntionNumber: number | null;
  inputValue: number | null;
  xValue: number | null;
  handleEquationResult: (result: number) => void;
}

const Card = ({
  functionNumber,
  nextFuntionNumber,
  inputValue,
  xValue,
  handleEquationResult,
}: Props) => {
  const { handleChange, error } = useCard(
    inputValue,
    xValue,
    handleEquationResult
  );

  return (
    <div
      id={`card${functionNumber}`}
      className="card border py-[15px] border-[#dfdfdf] px-5 rounded-[15px] shadow w-[235px]"
    >
      <Header functionNumber={functionNumber} />
      <div className="card-body">
        <div className="input-group flex flex-col mb-4">
          <label htmlFor={`equation${functionNumber}`} className="mb-1 text-xs">
            Equation
          </label>
          <input
            id={`equation${functionNumber}`}
            type="text"
            className={`border py-1 px-2 rounded-lg ${
              error ? "border-red-600" : "border-[#d3d3d3]"
            }`.trim()}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <NextFunction nextFuntionNumber={nextFuntionNumber} />
        <Connectors />
      </div>
    </div>
  );
};

export default Card;
