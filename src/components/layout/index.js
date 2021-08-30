import React from "react";
import * as S from "./slyled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <header>header</header>
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
