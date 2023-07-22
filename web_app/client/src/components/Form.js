import { useState, useEffect } from "react";
import allCrops from "../js/AllCrops";
import allStates from "../js/AllStates";
import allSeasons from "../js/AllSeasons";
import getInputs from "../js/getInputs";
import getSelects from "../js/getSelects";
import predict from "../js/predict";
import { ReactComponent as Logo3 } from "../logos/logo3.svg";
export default function Form(props) {
  // states
  const [nitrogen, setNitrogen] = useState("");
  const [phosporus, setPhosporus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [temperature, setTemperature] = useState("");
  const [area, setArea] = useState("");
  const [state, setState] = useState("Select State");
  const [crop, setCrop] = useState("Select Crop");
  const [season, setSeason] = useState("Select Season");
  const [stateValue, setStateValue] = useState(null);
  const [cropValue, setCropValue] = useState(null);
  const [seasonValue, setSeasonValue] = useState(null);
  ////////////////////////////////////////////////////////////////
  const [stateSearch, setStateSearch] = useState("");
  const [cropSearch, setCropSearch] = useState("");
  const [seasonSearch, setSeasonSearch] = useState("");

  const [finalInputs, setFinalInputs] = useState({
    nitrogen: null,
    phosporus: null,
    potassium: null,
    ph: null,
    rainfall: null,
    temperature: null,
    area: null,
    state: null,
    crop: null,
    season: null,
  });
  const [predictedValue, setPredictedValue] = useState("");
  const handlePredict = (e) => {
    e.preventDefault();
    setFinalInputs({
      nitrogen: nitrogen,
      phosporus: phosporus,
      potassium: potassium,
      ph: ph,
      rainfall: rainfall,
      temperature: temperature,
      area: area,
      state: stateValue,
      crop: cropValue,
      season: seasonValue,
    });
    // predict(finalInputs);
  };
  const [firstTime, setFirstTime] = useState(true);
  useEffect(() => {
    if (firstTime === true) {
      setFirstTime(false);
      return;
    }
    console.log(finalInputs);
    predict(
      finalInputs,
      setPredictedValue,
      props.setPhAlert,
      props.setFieldsAlert
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalInputs]);
  return (
    <>
      <div className="form d-flex justify-content-between pt-5 my-5">
        <form className="d-flex flex-column gap-5" id="form">
          {getInputs(
            1,
            "Enter the Nitrogen amount (N) *",
            "Nitrogen",
            setNitrogen
          )}
          {getInputs(
            2,
            "Enter the Phosporus amount (P) *",
            "Phosporus",
            setPhosporus
          )}
          {getInputs(
            3,
            "Enter the Potassium amount (K) *",
            "Potassium",
            setPotassium
          )}
          {getInputs(4, "Enter the Ph value *", "Ph", setPh)}
          {getInputs(
            5,
            "Enter the Rainfall value (mm) *",
            "Rainfall",
            setRainfall
          )}
          {getInputs(
            6,
            "Enter the Temperature (°C) *",
            "Temperature",
            setTemperature
          )}
          {getInputs(
            7,
            "Enter the amount of Area (Hectres) *",
            "Area",
            setArea
          )}
          {getSelects(
            8,
            "State ",
            state,
            setStateSearch,
            setState,
            allStates,
            stateSearch,
            setStateValue
          )}
          {getSelects(
            9,
            "Crop ",
            crop,
            setCropSearch,
            setCrop,
            allCrops,
            cropSearch,
            setCropValue
          )}
          {getSelects(
            10,
            "Season ",
            season,
            setSeasonSearch,
            setSeason,
            allSeasons,
            seasonSearch,
            setSeasonValue
          )}
          <button
            className="submit float-start mt-3 px-5 py-2 d-flex align-items-center gap-2 border border-2 rounded-pill"
            form="form"
            type="submit"
            onClick={(e) => handlePredict(e)}
          >
            PREDICT
            <Logo3 />
          </button>
        </form>
      </div>
      <div
        className="result fs-3 font-monospace text-light my-5"
        style={{ letterSpacing: "2px" }}
      >
        {predictedValue}
      </div>
    </>
  );
}
