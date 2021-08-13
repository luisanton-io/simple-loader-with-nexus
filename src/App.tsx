import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";
import Main from 'components/Main';
import Loader from 'components/Loader';

function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Main />
      <Loader />
    </RecoilRoot>
  );
}

export default App;
