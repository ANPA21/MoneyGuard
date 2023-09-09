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
import WrongPage from './WrongPage/WrongPage';
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
              <RestrictedRoute redirectTo="/home" component={<Register />} />
            }
          />

          <Route element={<Dashboard />}>
            <Route
              path="home"
              element={
                <PrivateRoute redirectTo="/login" component={<Home />} />
              }
            ></Route>
            <Route
              path="statistics"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<StatiscticsPage />}
                />
              }
            ></Route>
          </Route>
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

//
//          //ВАРИАНТ ДЛЯ ОТЛАДКИ КОДА  Dashboard-page БЕЗ AUTH
//import { Route, Routes } from 'react-router-dom';
//import { Dashboard } from '../pages/dashboard_page/Dashboard';
//// import { RestrictedRoute } from './RestrictedRoute';
//// import { PrivateRoute } from './PrivateRoute';
//import { Suspense } from 'react';
//import { Home } from '../pages/HomePage/Home';
//import CurrencyPage from 'pages/CurrencyMobilePage/CurrencyMobile';
//import Login from 'pages/LoginPage/Login';
//import Register from 'pages/RegisterPage/Register';
//import { StatiscticsPage } from 'pages/StatisticsPage/Statistics';
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//
//// import { useAuth } from 'hooks/useAuth';
//
//// const Home = lazy(() => import('../pages/Home'));
//// const Login = lazy(() => import('../pages/Login'));
//// const Register = lazy(() => import('../pages/Register'));
//
//import Modal from './Modal/Modal';
//import AddTransaction from './Add/Add';
//import EditTransaction from './Edit/Edit';
//import { useDispatch, useSelector } from 'react-redux';
//import { getModalTypeState } from 'redux/modal/selectors';
//import {
//  toggleAddModal,
//  toggleEditModal,
//  toggleLogOutModal,
//} from 'redux/modal/ModalSlice';
//import { getModalState } from 'redux/transactions/selectors';
//import Logout from './Logout/Logout';
//
//export const App = () => {
//  const dispatch = useDispatch();
//  const modalType = useSelector(getModalTypeState);
//  const isModalOpen = useSelector(getModalState);
//  return (
//    <>
//      <Suspense fallback={<div>Спиннер тут</div>}>
//        <button type="button" onClick={() => dispatch(toggleAddModal())}>
//          Add transaction
//        </button>
//        <button type="button" onClick={() => dispatch(toggleEditModal())}>
//          Edit transaction
//        </button>
//        <button type="button" onClick={() => dispatch(toggleLogOutModal())}>
//          Exit
//        </button>
//        {modalType === 'modal/toggleAddModal' && isModalOpen && (
//          <Modal children={AddTransaction()} />
//        )}
//        {modalType === 'modal/toggleEditModal' && isModalOpen && (
//          <Modal children={EditTransaction()} />
//        )}
//        {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
//          <Modal children={Logout()} />
//        )}
//
//        <Routes>
//          <Route path="/" element={<Login />} />
//          <Route path="login" element={<Login />} />
//          <Route path="register" element={<Register />} />
//          <Route element={<Dashboard />}>
//            <Route path="home" index element={<Home />} />
//
//            {/* <Route path="/statistics" element={<StatiscticsPage />} /> */}
//            <Route path="/currency" element={<CurrencyPage />} />
//          </Route>
//          <Route path="*" element={<div>Wrong Page</div>} />
//        </Routes>
//      </Suspense>
//      <ToastContainer />
//    </>
//  );
//};