"use client";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3333/auth", {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Usuário não autenticado");

        const data = await res.json();
        setUser(data);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const res = await fetch("http://localhost:3333/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Erro ao fazer logout");

      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
