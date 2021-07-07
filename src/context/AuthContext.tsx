import { createContext, useCallback, useContext, useState } from 'react';
import { cache } from 'swr';
import api from 'src/api';

// Local history
export const LH_TOKEN_NAME = '@Sagu:token';

interface AuthContextState {
  token: TokenState;
  signIn({ username, password }: UserData): Promise<void>;
  signOut(): void;
  userLogged(): boolean;
}

// provalvemente isso será cpf
interface UserData {
  username: string;
  password: string;
}

interface TokenState {
  token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  // Nota Mental: Legal isso aqui
  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem(LH_TOKEN_NAME);

    if (token) {
      // TODO: implementar a api, quando tiver uma.
      // api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signIn = useCallback(async ({ username, password }: UserData) => {
    // TODO: implementar a api, quando tiver uma.
    // const response = await api.post('/sessions', {
    //   username,
    //   password,
    // });

    // const { token } = response.data;

    // Valor para teste
    setToken({ token: 'dasjgdjaskldjkaksdhjkas' });

    // TODO: colocar aqui o retrono da api, quando tiver
    localStorage.setItem(LH_TOKEN_NAME, 'dasjgdjaskldjkaksdhjkas');

    api.defaults.headers.authorization = 'Bearer dasjgdjaskldjkaksdhjkas';
  }, []);

  const signOut = useCallback(async () => {
    setToken({} as TokenState);

    // Limpa o cache do SWR
    cache.clear();
    // Remove a local history da token
    localStorage.removeItem(LH_TOKEN_NAME);
    // Remove authorization do header
    api.defaults.headers.authorization = undefined;
  }, []);

  const userLogged = useCallback(() => {
    const token = localStorage.getItem(LH_TOKEN_NAME);
    if (token) {
      return true;
    }
    return false;
  }, []);

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, userLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
