import { createContext, useState, type ReactNode, useContext } from "react";

interface AuthContextType {
  user: string | null;
  token: string | null;
  isAdmin: boolean;
  login: (token: string, user: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem("user")
  );

  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const login = (newToken: string, newUser: string) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", newUser);
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAdmin: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
