import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import { actions } from "@store/User";
import { HeaderContainer, Img, SubContainer } from "./styles";
import Button from "@components/Button";

const Header = () => {
  const dispatch = useDispatch();
  const { auth, isLoading, email } = useSelector((state) => state.userStore);

  const redirectToHome = () => {
    if (auth) {
      Router.push("/home");
    } else {
      Router.push("/login");
    }
  };

  return (
    <HeaderContainer>
      <Img
        src={"/assets/logo-white-small.png"}
        onClick={() => redirectToHome()}
      />
      {/* <SubContainer> */}
      {auth ? (
        <>
          {email}
          <Button onClick={() => dispatch(actions.logout())}>Logout</Button>
        </>
      ) : (
        <Button onClick={() => Router.push("/login")}>Login</Button>
      )}
      {/* </SubContainer> */}
    </HeaderContainer>
  );
};

export default Header;
