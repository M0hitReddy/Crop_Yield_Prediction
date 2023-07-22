import Header from "./Header";
import Navbar from "./Navbar";
import Form from "./Form";
export default function Main(props) {
  return (
    <>
      <div className="container main rounded my-5 px-5 pb-5">
        <Navbar />
        <Header />
        <Form
          setPhAlert={props.setPhAlert}
          setFieldsAlert={props.setFieldsAlert}
        />
      </div>
    </>
  );
}
