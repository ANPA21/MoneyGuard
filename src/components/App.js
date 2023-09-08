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
import Home from '../pages/HomePage/Home';
import StatiscticsPage from 'pages/StatisticsPage/Statistics';
import WrongPage from '../pages/WrongPage/WrongPage';
import GlobalStyles from 'styles/GlobalStyles';
import { useAuth } from 'hooks';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useAuth();

  useEffect(() => {
    if (!isLoggedIn && token) dispatch(refreshUser());
  }, [dispatch, isLoggedIn, token]);

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
              <RestrictedRoute redirectTo="/home" component={<Register />} />
            }
          />

          <Route element={<Dashboard />}>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute>
                  <StatiscticsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};
