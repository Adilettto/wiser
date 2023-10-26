import React from 'react';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { routeArray } from 'Routes/route-config';
import { useAuthRedirect } from 'Shared/Hooks/use-auth';
import { useSelector } from 'react-redux';
import { readObj } from 'Service/storage';
import { useAppDispatch } from 'Redux/store';
import { restoreSession } from 'Redux/Auth/reducer';
import { ToastBlock } from 'Components/Notify/notify';
import { selectAccount } from 'Redux/Auth/slice';
import { AddLoad } from 'Components/AddLoad/AddLoad';


function App() {
  const location = useLocation();
  const profile = useSelector(selectAccount);
  const dispatch = useAppDispatch();

  const routes = routeArray.map((r) => (
    <Route key={r.path} path={r.path} element={<r.page />} />
  ));
  const redirect = useAuthRedirect(location);

  if (!profile) {
    const acc = readObj("account");
    if (acc) {
      dispatch(restoreSession());
    }
  }

  if (redirect !== undefined) return <Navigate to={redirect} />;
  return (
    <>
      <ToastBlock />

      <Routes>{routes}</Routes>
    </>
  );
}

export default App;
