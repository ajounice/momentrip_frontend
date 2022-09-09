import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

import auth from "./auth";

export const WithProtectedRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) { //로그인 상태 판단
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export const PrivateRoute = () =>{
  // TODO BE로 auth 체크
  const auth = true;
  // const auth = null;

  // 로그인 성공 시 자식 요소 반환, 아니면 login 페이지로 이동
  return auth ? <Outlet></Outlet> : <Navigate to="/"/>;
}