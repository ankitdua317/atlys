import Badge from "./Badge";

interface Props {
  value: string;
}

const Output = ({ value }: Props) => {
  return (
    <div className="flex flex-col align-bottom h-[251px]">
      <Badge text="Final Output y" className="bg-[#4caf79]" />
      <div className="border-2 p-1 h-[50px] w-[111px] border-[#2dd179] flex rounded-2xl justify-center items-center">
        <div
          className="border-r flex justify-center items-center border-r-[#2dd179] h-[47px]"
          id="outputDot"
        >
          <input type="radio" defaultChecked id="input" className="mr-1 dot" />
        </div>
        <input
          id="value_fields"
          type="text"
          className="ml-1 rounded-r-2xl text-lg text-center font-bold h-[40px] w-[80px]"
          value={value}
          disabled
        />
      </div>
    </div>
  );
};

export default Output;
