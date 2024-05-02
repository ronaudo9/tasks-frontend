import { Payload } from "@/types/payload";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState<{
    checked: boolean;
    isAuthenticated: boolean;
  }>({ checked: false, isAuthenticated: false });

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const decodedToken = jwtDecode<Payload>(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setAuthInfo({ checked: true, isAuthenticated: true });
        } else {
          setAuthInfo({ checked: true, isAuthenticated: false });
        }
      } else {
        setAuthInfo({ checked: true, isAuthenticated: false });
      }
    } catch (error) {
      setAuthInfo({ checked: true, isAuthenticated: false });
    }
  }, []);

  return authInfo;
};
