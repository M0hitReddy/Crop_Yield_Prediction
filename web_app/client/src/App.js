import Alert from "./components/Alert";
import "./styles/style.css";
import Main from "./components/Main";
import { useState } from "react";
function App() {
  const [phAlert, setPhAlert] = useState(false);
  const [fieldsAlert, setFieldsAlert] = useState(false);
  return (
    <div className="App relative pt-5">
      {/* <Navbar/> */}
      <div className="position-fixed top-0">
        {phAlert && <Alert msg={"Ph value must range from 0 to 14 !"} />}
        {fieldsAlert && (
          <Alert msg={"Enter the values in all required fields !"} />
        )}
      </div>
      <Main setPhAlert={setPhAlert} setFieldsAlert={setFieldsAlert} />
    </div>
  );
}
export default App;
