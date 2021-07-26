import React from 'react';
import styled from '@emotion/styled';
import About from './components/About/About';
import Header from './components/Header/Header';
import WorkExperience from './components/WorkExperience/WorkExperience';
import WhatIKnow from './components/WhatIKnow/WhatIKnow';
import { ChakraProvider } from '@chakra-ui/react';
import VolunteerWork from './components/VolunteerWork/VolunteerWork';

const StyledApp = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ChakraProvider>
      <StyledApp>
        <Header name="Nir Tzezana" title="Full Stack Software Engineer" />
        <About />
        <WorkExperience />
        <WhatIKnow />
        <VolunteerWork />
      </StyledApp>
    </ChakraProvider>
  );
}

export default App;
