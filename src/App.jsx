import { RegistrationPage } from 'pages/Registration';
import { LoginPage } from 'pages/Login';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HomePage } from 'pages/Home';
import { Layout } from 'components/Layout/Layout';
import { ContactsPage } from 'pages/Contacts';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
