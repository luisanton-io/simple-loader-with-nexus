import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header';
import Loader from 'components/Loader';
import LoaderString from 'components/LoaderString';
import ToggleButton from 'components/ToggleButton';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";

function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Header />
      <ToggleButton />
      <Loader />
      <LoaderString />
    </RecoilRoot>
  );
}

export default App;
