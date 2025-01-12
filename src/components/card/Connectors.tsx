const Connectors = () => {
  return (
    <div className="connectors flex justify-between mt-10">
      <div className="radio-group flex justify-center align-middle">
        <input type="radio" defaultChecked id="input" className="input" />
        <label className="text-[10px] ml-1" htmlFor="input">
          input
        </label>
      </div>
      <div className="radio-group flex justify-center align-middle">
        <label className="text-[10px] mr-1" htmlFor="output">
          output
        </label>
        <input type="radio" defaultChecked id="output" className="output" />
      </div>
    </div>
  );
};

export default Connectors;
