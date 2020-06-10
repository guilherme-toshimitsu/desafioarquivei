import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import { actions } from "@store/User";
import Card from "@components/Card";
import Loading from "@components/Loading";

import { LoginForm, LoginContentBox } from "./components";

const Login = () => {
  const { auth, isLoading, currentPath } = useSelector(
    (state) => state.userStore
  );
  const [localLoading, setLocalLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLocalLoading(true);
    dispatch(actions.validateToken());
    if (auth) {
      setLocalLoading(false);
      console.log("loginuseffect", currentPath);
      Router.push(currentPath);
    }
    setLocalLoading(false);
  }, [auth]);

  const onSubmit = (values) => {
    dispatch(actions.doLogin(values));
  };

  return (
    <LoginContentBox>
      <Card>
        {!localLoading && !auth ? (
          <LoginForm onSubmit={onSubmit} />
        ) : (
          <Loading />
        )}
      </Card>
    </LoginContentBox>
  );
};

export default Login;
