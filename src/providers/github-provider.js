// TODAS AS CHAMADAS DA API FICARÃO AQUI

import React, { createContext } from "react";

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = () => {
  const [githubState, setGithubState] = useState({
    user: {},
    repositories: [],
    starred: [],
  });
  return <div></div>;
};
