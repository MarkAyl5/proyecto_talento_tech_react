import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

const SESSION_DURATION = 30 * 60 * 1000; // 30 minutos en ms

type UserRole = "admin" | "user" | null;

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (role: "admin" | "user") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { isAuthenticated, userRole, timestamp } = JSON.parse(storedAuth);
      if (isAuthenticated && timestamp && Date.now() - timestamp < SESSION_DURATION) {
        setIsAuthenticated(true);
        setUserRole(userRole);
      } else {
        localStorage.removeItem("auth");
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("auth", JSON.stringify({ isAuthenticated, userRole, timestamp: Date.now() }));
    } else {
      localStorage.removeItem("auth");
    }
  }, [isAuthenticated, userRole]);

  // Auto-logout después de 30 minutos
  useEffect(() => {
    if (!isAuthenticated) return;
    const timeout = setTimeout(() => {
      setIsAuthenticated(false);
      setUserRole(null);
      localStorage.removeItem("auth");
    }, SESSION_DURATION);
    return () => clearTimeout(timeout);
  }, [isAuthenticated]);

  function login(role: "admin" | "user") {
    setIsAuthenticated(true);
    setUserRole(role);
  }

  function logout() {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext debe usarse dentro de AuthProvider");
  return context;
} 