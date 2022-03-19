import { FC, useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getLaunches } from './store/actions';
import { Reducer } from './store/store';
import Container from '@mui/material/Container';
import MainPage from './pages/Main';
import { Header } from './components';
import { AppRoute } from './const';

const Details = lazy(() => import('./pages/Details'));

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector((state) => state[Reducer.Launches].isLoaded);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(getLaunches());
    }
  }, [isLoaded, dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Details}
            element={
              <Suspense fallback={<div style={{ color: '#fff', padding: '2rem 0' }}>Loading...</div>}>
                <Details />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={<Navigate to={AppRoute.Main} />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
