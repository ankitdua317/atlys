interface Props {
  nextFuntionNumber: number | null;
}

const NextFunction = ({ nextFuntionNumber }: Props) => {
  return (
    <div className="dropdown flex flex-col">
      <label htmlFor="function" className="mb-1 text-xs">
        Next Function
      </label>
      <select
        name="function"
        id="function"
        defaultValue={1}
        className="border p-2 text-xs rounded-lg pointer-events-none bg-[#f5f5f5] border-[#d3d3d3] text-gray-400"
      >
        <option value={1} disabled>
          {nextFuntionNumber ? `Function: ${nextFuntionNumber}` : "-"}
        </option>
      </select>
    </div>
  );
};

export default NextFunction;
