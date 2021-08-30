import React from "react";
import * as S from "./styled";
import RepositoryItem from "../repository-item";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab> Repositories</S.WrapperTab>
        <S.WrapperTab> Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="01-js-foundations-solution"
          linkToRepo="https://github.com/GuilhermeCandeia/01-js-foundations-solution"
          fullName="GuilhermeCandeia/01-js-foundations-solution"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="02-js-oop-solution"
          linkToRepo="https://github.com/GuilhermeCandeia/02-js-oop-solution"
          fullName="GuilhermeCandeia/02-js-oop-solution"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
