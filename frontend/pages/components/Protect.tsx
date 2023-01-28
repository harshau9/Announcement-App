import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Protect({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null;
}
