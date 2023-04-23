import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Main.styles';

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<p>Please wait ...</p>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Main;
