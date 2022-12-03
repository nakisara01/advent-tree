import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

function RegisterPage() {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      id: Id,
      nickname: Nickname,
      password: Password,
    };
    axios.post("api/register", body).then((res) => {
      console.log(res.data);
    });

    navigate("/"); // 페이지 이동
  };

  return (
    <>
      <form>
        <p className="b">
          <input type="id" value="Id" onChange={(e) => setId(e.target.value)} />
        </p>
        <p className="b">
          <input
            type="nickname"
            value="Nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
        </p>
        <p className="b">
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>

        <Button
          // className={styles.b}
          type="button"
          color="primary"
          variant="contained"
          className="form__custom-button"
          onClick={onSubmitHandler}
        >
          Sign up
        </Button>
      </form>
    </>
  );
}
export default RegisterPage;
