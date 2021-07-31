import React from 'react';
import styled from '@emotion/styled';
import About, { IAboutProps } from './components/About/About';
import Header from './components/Header/Header';
import WorkExperience, { IWorkExperienceProps } from './components/WorkExperience/WorkExperience';
import WhatIKnow, { IWhatIKnowProps } from './components/WhatIKnow/WhatIKnow';
import { ChakraProvider } from '@chakra-ui/react';
import VolunteerWork, { IVolunteerWorkProps } from './components/VolunteerWork/VolunteerWork';
import data from './data.json';

const StyledApp = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export enum Module {
  ABOUT = "about",
  WORK_EXPERIENCE = "workExperience",
  WHAT_I_KNOW = "whatIKnow",
  VOLUNTEERING = "volunteering"
}

function App() {
  return (
    <ChakraProvider>
      <StyledApp>
        <Header data={data.header} modules={data.modules} />
        {data.modules.map((module, index) => {
          console.log(module);
          switch (module.type) {
            case Module.ABOUT:
              return <About {...module as IAboutProps} index={index} key={index} />
            case Module.WORK_EXPERIENCE:
              return <WorkExperience {...module as IWorkExperienceProps} index={index} key={index} />
            case Module.WHAT_I_KNOW:
              return <WhatIKnow {...module as IWhatIKnowProps} index={index} key={index} />
            case Module.VOLUNTEERING:
              return <VolunteerWork {...module as unknown as IVolunteerWorkProps} index={index} key={index} />
            default:
              return <></>
          }
        })}
      </StyledApp>
    </ChakraProvider>
  );
}

export default App;
