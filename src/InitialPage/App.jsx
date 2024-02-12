import React, { Component, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import SignIn from './SignIn';
import ForgetPassword from './ForgetPassword';
import SignUp from './SignUp';
import Pos from './pos/pos';
import DefaultLayout from './Sidebar/DefaultLayout';

import Error404 from '../MainPage/ErrorPage/Error404';
import Error500 from '../MainPage/ErrorPage/Error500';
import HomeThree from '../MainPage/Home/home3';

import { setAuthToken } from '../utils/api';
import { OrderContextProvider } from '../context/OrderContext';
import ProductProvider from '../context/ProductContext';
import { Product } from '../EntryFile/imagePath';
import { UserContextProvider } from '../context/UserContext';

// if (localStorage.token) {
//   // if there is a token set axios headers for all requests
//   setAuthToken(localStorage.token);
// }

export default function App(props) {
  useEffect(() => {
    if (
      location.pathname.includes('signIn') ||
      location.pathname.includes('signUp') ||
      location.pathname.includes('index-three') ||
      location.pathname.includes('forgetPassword')
    ) {
      $('body').addClass('account-page');
    }
  }, []);
  const { location } = props;

  if (location.pathname === '/') {
    return <Redirect to={'/signIn'} />;
  }

  return (
    <Switch>
      <UserContextProvider>
        <OrderContextProvider>
          <ProductProvider>
            <Route path="/signIn" component={SignIn} />
            <Route path="/forgetPassword" component={ForgetPassword} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/main" component={DefaultLayout} />
            <Route path="/error-404" component={Error404} />
            <Route path="/error-500" component={Error500} />
            <Route path="/pos" component={Pos} />
            <Route path="/index-three" component={HomeThree} />
          </ProductProvider>
        </OrderContextProvider>
      </UserContextProvider>
    </Switch>
  );
}

// export default class App extends Component {
//     componentDidMount() {
//         if (location.pathname.includes("signIn") || location.pathname.includes("signUp") || location.pathname.includes("index-three") || location.pathname.includes("forgetPassword")) {
//             $('body').addClass('account-page');
//         }
//         if (localStorage.token) {
//           // if there is a token set axios headers for all requests
//           setAuthToken(localStorage.token);
//         }
//     }
//     render() {
//         const { location } = this.props;

//         if (location.pathname === "/") {
//             return (<Redirect to={'/signIn'} />)
//         }

//         return (
//             <Switch>
//                 <OrderContextProvider>
//                     <Route path="/signIn" component={SignIn} />
//                     <Route path="/forgetPassword" component={ForgetPassword} />
//                     <Route path="/signUp" component={SignUp} />
//                     <Route path="/dream-pos" component={DefaultLayout} />

//                     <Route path="/error-404" component={Error404} />
//                     <Route path="/error-500" component={Error500} />
//                     <Route path="/pos" component={Pos} />
//                     <Route path="/index-three" component={HomeThree} />
//                 </OrderContextProvider>

//             </Switch>
//         )
//     }
// }
