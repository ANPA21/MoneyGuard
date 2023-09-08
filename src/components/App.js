import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinnerLoader } from '../components/Spinner/Spinner';

import { refreshUser } from 'redux/authReducer/operations';
import { PrivateRoute, RestrictedRoute } from './Routes';

// const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));
import Register from 'pages/RegisterPage/Register';
import Login from 'pages/LoginPage/Login';
import { Dashboard } from '../pages/dashboard_page/Dashboard';
import { Home } from '../pages/HomePage/Home';
import StatiscticsPage from 'pages/StatisticsPage/Statistics';
import CurrencyPage from 'pages/CurrencyMobilePage/CurrencyMobile';
import GlobalStyles from 'styles/GlobalStyles';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/register"
                component={<Register />}
              />
            }
          />
          <Route
            element={
              <PrivateRoute redirectTo="/login" component={<Dashboard />} />
            }
          >
            <Route path="home" index element={<Home />} />
            <Route path="/statistics" element={<StatiscticsPage />} />
            <Route path="/currency" element={<CurrencyPage />} />
          </Route>
          <Route path="*" element={<div>Wrong Page</div>} />
        </Routes>
      </Suspense>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};