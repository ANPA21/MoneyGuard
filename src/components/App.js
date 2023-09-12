import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinnerLoader } from '../components/Spinner/Spinner';
import { refreshUser } from 'redux/authReducer/operations';
import { PrivateRoute, RestrictedRoute } from './Routes';
import GlobalStyles from 'styles/GlobalStyles';
import { useAuth } from 'hooks';
import { useMediaQuery } from 'react-responsive';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Login = lazy(() => import('pages/LoginPage/Login'));
const Register = lazy(() => import('pages/RegisterPage/Register'));
const StatiscticsPage = lazy(() => import('pages/StatisticsPage/Statistics'));
const WrongPage = lazy(() => import('../pages/WrongPage/WrongPage'));
const Dashboard = lazy(() => import('../pages/dashboard_page/Dashboard'));
const CurrencyPage = lazy(() =>
  import('../pages/CurrencyMobilePage/CurrencyMobile')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useAuth();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
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

            <Route
              path="/currency"
              element={
                isMobile ? (
                  <PrivateRoute>
                    <CurrencyPage />
                  </PrivateRoute>
                ) : (
                  <Navigate to={'/home'} />
                )
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
