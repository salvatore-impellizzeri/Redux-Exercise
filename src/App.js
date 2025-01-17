import { useSelector } from 'react-redux';
import { Fragment } from 'react';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const auth = useSelector(state => state.auth.isAuthenticated); //false

  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
