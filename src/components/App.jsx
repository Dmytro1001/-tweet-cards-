import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import GlobalStyles from './GlobalStyles/GlobalStyles';

const HomePage = lazy(() => import('../pages/Home/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets/Tweets'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
