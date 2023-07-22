const getSelects = (
  inputNumber,
  title,
  placeHolder,
  setSearch,
  setPlaceHolder,
  options,
  search,
  setValue
) => {
  return (
    <div className="input state d-flex text-light">
      <div className="input-number d-flex">
        {inputNumber < 10 ? "0" + inputNumber : inputNumber}
      </div>
      <div className="input-main d-flex flex-column align-items-start">
        <div className="title" style={{ color: "#ffffffac" }}>
          Enter the {title} name *
        </div>
        <div className="dropdown ">
          <button
            className="drop-down text-capitalize fs-5 d-flex justify-content-between align-items-center dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {placeHolder}
          </button>
          <ul className="dropdown-menu w-100">
            <li className="w-100 mb-3 d-flex ms-3">
              <input
                className="dropdown-search p-1"
                placeholder="Search State"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
            </li>
            {getOptions(options, search, setPlaceHolder, setValue)}
          </ul>
        </div>
      </div>
    </div>
  );
};
const getOptions = (options, search, setPlaceHolder, setValue) => {
  return options
    .filter((data) => {
      if (search == null) return data;
      else if (data.name.toLowerCase().includes(search.toLowerCase())) {
        return data;
      }
      return null;
    })
    .map((data) => {
      return (
        <li key={data.id}>
          <button
            className="dropdown-item text-capitalize font-monospace"
            type="button"
            id={data.id}
            href="/"
            onClick={(e) => {
              // e.preventDefault();
              setValue(e.target.id);
              setPlaceHolder(e.target.textContent);
              console.log(e.target.id);
            }}
          >
            {data.name}
          </button>
        </li>
      );
    });
};
export default getSelects;