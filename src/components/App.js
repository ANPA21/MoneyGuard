import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/DashboardPage/Dashboard';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
import { Suspense } from 'react';
// import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks/useAuth';

// const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));

import Modal from './Modal/Modal';
import AddTransaction from './Add/Add';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from 'redux/transactions/selectors';
import { toggleModal } from 'redux/modal/ModalSlice';

export const App = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalState);

  return (
    <Suspense fallback={<div>Спиннер тут</div>}>
      <button type="button" onClick={() => dispatch(toggleModal())}>
        Add transaction
      </button>
      {isModalOpen && <Modal children={AddTransaction()} />}

      <Routes>
        <Route path="/" element={<div>Login page</div>} />
        <Route path="login" element={<div>Login page</div>} />
        <Route path="register" element={<div>Register page</div>} />
        <Route element={<Dashboard />}>
          <Route path="/home" element={<div>Home page</div>} />
          <Route path="/statistics" element={<div>Statisctics page</div>} />

          <Route path="/currency" element={<div>Currency page</div>} />
        </Route>

        <Route path="*" element={<div>Wrong Page</div>} />
      </Routes>
    </Suspense>
  );
};

//!готовые  роуты, когда будут готов store/selectors и настроена логика приватных / закрытых роутов, можно подключать
//  <Routes>
//         <Route element={<RestrictedRoute />}>
//           <Route path="/" element={<div>Login page</div>} />
//           <Route path="login" element={<div>Login page</div>} />
//           <Route path="register" element={<div>Register page</div>} />
//         </Route>
//         <Route element={<Dashboard />}>
//           <Route
//             path="/home"
//             element={
//               <PrivateRoute>
//                 <div>Home page</div>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/statistics"
//             element={
//               <PrivateRoute>
//                 <div>Statisctics page</div>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/currency"
//             element={
//               <PrivateRoute>
//                 <div>Statistics page</div>
//               </PrivateRoute>
//             }
//           />
//         </Route>

//         <Route path="*" element={<div>Wrong Page</div>} />
//       </Routes>
//     </Suspense>
//   );
