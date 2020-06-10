import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import Loading from "@components/Loading";
import { actions } from "@store/User";

const AuthRoute = (Component) => (pageProps) => {
  const Route = useRouter();
  const dispatch = useDispatch();
  const { auth, checked } = useSelector((state) => state.userStore);
  useEffect(() => {
    if (!auth && !checked) {
      dispatch(actions.selectCurrentPath(Route.pathname));
      Route.push("/login");
    }
    // Treat if token expires etc...
    // else {
    //   if (dispatch(actions.validateToken())) {
    //     Router.push("/login");
    //   }
    // }
  }, [auth, checked]);

  return auth ? <Component {...pageProps} /> : <Loading />;
};

export default AuthRoute;
