import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import Coins from './components/Coins/Coins';
import CoinDisplay from './components/CoinDisplay/CoinDisplay';
import { Route, Routes } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

const App = () => {
  return (
    <>
      <Navbar />
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Routes>
          <Route path='/' element={<Coins />} />
          <Route path='/:id' element={<CoinDisplay />} />
        </Routes>
      </SkeletonTheme>
    </>
  );
};

export default App;
