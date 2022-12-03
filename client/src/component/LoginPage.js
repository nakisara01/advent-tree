import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

function LoginPage() {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  // const [Nickname, setNickname] = useState('');
  const [Password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      id: Id,
      password: Password,
    };
    // console.log(body.id);
    axios.post("api/login", body).then((res) => {
      console.log(res.data);
    });

    navigate("/");
  };
  return (
    <>
      <form className="form">
        {/* <form> */}
        <p className="b">
          <input
            type="id"
            value="Id"
            onChange={(e) => setId(e.target.value)}
          ></input>
        </p>
        <p className="b">
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        {/* </form> */}

        <Button
          // className={styles.b}
          type="button"
          color="primary"
          variant="contained"
          className="form__custom-button"
          onClick={onSubmitHandler}
        >
          Sign in
        </Button>
      </form>
    </>
  );
}
export default LoginPage;
