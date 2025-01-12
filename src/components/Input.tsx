import Badge from "./Badge";

interface Props {
  setInputValue: React.Dispatch<React.SetStateAction<number | null>>;
}

const Input = ({ setInputValue }: Props) => {
  return (
    <div className="flex flex-col align-bottom h-[251px]">
      <Badge text="Initial value of x" className="bg-[#E29A2D]" />
      <div className="border-2 h-[50px] w-[111px] border-[#ffc267] flex rounded-2xl justify-center items-center">
        <input
          type="number"
          id="value_fields"
          className="rounded-l-2xl h-[40px] w-[80px] text-lg text-center font-bold"
          onChange={(e) =>
            setInputValue(e.target.value ? Number(e.target.value) : null)
          }
        />
        <div
          className="border-l flex justify-center items-center border-l-[#ffc267] h-[47px]"
          id="inputDot"
        >
          <input type="radio" defaultChecked id="input" className="ml-1 dot" />
        </div>
      </div>
    </div>
  );
};

export default Input;
