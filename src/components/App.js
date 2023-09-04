import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard_page/Dashboard';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
import { Suspense } from 'react';
import { Home } from '../pages/home_page/Home';
import { Statistics } from '../pages/statistics_page/Statistics';
import CurrencyPage from 'pages/CurrencyMobilePage/CurrencyMobile';
// import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks/useAuth';

// const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <Suspense fallback={<div>Спиннер тут</div>}>
      <Routes>
        <Route path="/" element={<div>Login page</div>} />
        <Route path="login" element={<div>Login page</div>} />
        <Route path="register" element={<div>Register page</div>} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route  path="home" index element={<Home />} />
          <Route path="statistics" element={<Statistics />} />

          <Route path="currency" element={<CurrencyPage />} />
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
