const getInputs = (inputNumber, title, placeHolder, onChange) => {
  return (
    <div className="input d-flex text-light">
      <div className="input-number d-flex">{"0" + inputNumber}</div>
      <div className="input-main d-flex flex-column align-items-start">
        <div className="title" style={{ color: "#ffffffac" }}>
          {title}
        </div>
        <input
          type="number"
          className="fs-5"
          // value={nitrogen}
          onChange={(e) => {
            onChange(e.target.value);
            // console.log(nitrogen);
          }}
          placeholder={placeHolder}
          name=""
          id=""
        />
      </div>
    </div>
  );
};
export default getInputs;