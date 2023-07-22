import { ReactComponent as Logo2 } from "../logos/logo2.svg";
export default function Header() {
  return (
    <>
      <div className="header my-5 ">
        <div className="header-text">
          <h1 className="text-light">
            Predict Yield Of <br />
            The Crop
          </h1>
        </div>
        <div className="logo2 border border-4 p-4 rounded-circle"><Logo2/></div>
        
        {/* <img
          className="img"
          src="https://cdn.dribbble.com/users/4878986/avatars/normal/45bddc5c38a4898a993974b9fddae03c.png?1642041895&compress=1&resize=80x80"
          alt=""
        /> */}
      </div>
      <div className="caption text-light my-5 text-start">
        Let us help you to get better idea of what crop to harvest. <br /> Fill
        out the following form and submit to predict the yield of crop you want
        to harvest.
      </div>
      
    </>
  );
}
