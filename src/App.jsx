import { useState } from "react";
import { Container } from "./components/styles/Container.styled";
import { ResultStyled } from "./components/styles/Result.styled";
import { SummaryStyled } from "./components/styles/Summary.styled";
import Summary from "./components/Summary";
import Result from "./components/Result";

import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ResultStyled>
          <Result />
        </ResultStyled>
        <SummaryStyled>
          <Summary />
        </SummaryStyled>
      </Container>
    </>
  );
}

export default App;
