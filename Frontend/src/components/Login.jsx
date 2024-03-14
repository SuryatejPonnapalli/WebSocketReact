import { useState } from "react";

const Login = (props) => {
  const [info, setInfo] = useState("");

  function changeInfo(e) {
    setInfo(e.target.value);
  }

  return (
    <section>
      <input
        type="text"
        value={info}
        onChange={changeInfo}
        className="m-5 rounded-lg"
      ></input>
      <button
        type="submit"
        className=" bg-cyan-700 p-2 rounded-md"
        onClick={props.setId(info)}
      >
        Submit
      </button>
    </section>
  );
};

export default Login;
