import * as React from 'react';
import { createContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';
import { api, setAuthToken } from '../utils/api';
import { useHistory } from 'react-router-dom';
export const AuthContext = createContext({
  isAuthenticated: false,
  isInitialized: false,
  user: {},
  signOut: () => {},
});

const verifyToken = (token) => {
  if (!token) {
    return false;
  }
  const decoded = jwtDecode(token);
  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  return decoded.exp > Date.now() / 1000;
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [user, setUser] = React.useState({});
  const history = useHistory();
  React.useEffect(() => {
    const init = async () => {
      try {
        const token = window.localStorage.getItem('token');
        if (token && verifyToken(token)) {
          // setSession(token);
          setAuthToken(token);
          const response = await api.get('/users/me');
          const user123 = response.data;
          setUser(user123);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setUser({});
        }
      } catch (err) {
        console.log(err);
        console.error(err);
      } finally {
        setIsInitialized(true);
      }
    };
    init();
  }, []);

  // React.useEffect(() => {
  //   console.log(user, 'this is user info in authcontext');
  // }, [user]);

  const signOut = () => {
    setIsAuthenticated(false);
    setUser({});
    setAuthToken();
  };
  const login = (data) =>
    new Promise((resolve, reject) => {
      api
        .post('/users/login', data)
        .then((res) => {
          if (!res.data.token) {
            history.push('/signIn');
          } else {
            setAuthToken(res.data.token);
            setUser(res.data.user);
            setIsAuthenticated(true);
            resolve();
          }
        })
        .catch((err) => reject(err));
    });
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signOut, isInitialized }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
