import axios from "axios";
async function predict(
  finalInputs,
  setPredictedValue,
  setPhAlert,
  setFieldsAlert
) {
  if (
    finalInputs.nitrogen == null ||
    finalInputs.phosporus == null ||
    finalInputs.potassium == null ||
    finalInputs.ph == null ||
    finalInputs.rainfall == null ||
    finalInputs.temperature == null ||
    finalInputs.area == null ||
    finalInputs.state == null ||
    finalInputs.crop == null ||
    finalInputs.season == null
  ) {
    setFieldsAlert(true);
    setTimeout(() => {
      setFieldsAlert(false);
    }, 3500);
    return;
  }
  if (finalInputs.ph < 0 || finalInputs.ph > 14) {
    setPhAlert(true);
    setTimeout(() => {
      setPhAlert(false);
    }, 3500);
    return;
  }
  setPredictedValue("Predicting ...");
  axios
    .post("http://localhost:8080/", finalInputs)
    .then((response) => {
      console.log(response.data);

      setTimeout(() => {
        setPredictedValue(response.data.toFixed(2) + " tons per Hectre");
      }, 500 * Math.floor(Math.random() * 6) + 2);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default predict;
