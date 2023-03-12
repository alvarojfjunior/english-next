import { useRouter } from "next/router";
import {
  createContext,
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextProps {
  children: React.ReactNode;
}

interface IAuthContextData {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  verifyAuth(): boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    verifyAuth()
  }, [isAuth]);

  const verifyAuth = () => {
    const accessToken = Boolean(localStorage.getItem('accessToken'))
    !accessToken && router.push('/');

    return accessToken;
  };
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, verifyAuth }}>
      { children }
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
