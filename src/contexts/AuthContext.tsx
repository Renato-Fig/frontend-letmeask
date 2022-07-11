import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { parseCookies, setCookie } from 'nookies';
import { useNavigate } from 'react-router-dom'

type User = {
  user_email: string;
  user_id: string;
  user_name?: string;
  user_password?: string;
}

type SignInData = {
  user_email: string;
  user_password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  let navigate = useNavigate()

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'letmeask.token': token } = parseCookies();

    if (token) {
      index().then((response) => {
        console.log("response:",response);
        setUser(response);
      }).catch((error) => {
        console.log("errrrou:",error);
      })
    }
  }, []);

   // função para retornar os dadosdo usuario logado
  async function index() {
    const response = await api.get('/user_unique');
    return response.data;
  }

  async function signIn(data: SignInData) {
    const { user_email, user_password } = data;

    const response = await api.post('/auth', {
      user_email,
      user_password,
    });
    const {token, user} = response.data

    if(!token){
      alert(response.data.failed)
    }
    if (token) { 
         setCookie(undefined, 'letmeask.token', token, {
      maxAge: 60 * 60 * 24, //1 dia em segundos
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //atualizando o token quando o usuário se autentica
    
    setUser(user)// parsed email and id 
    navigate('/home')
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}