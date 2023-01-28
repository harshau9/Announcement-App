import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from 'next/router'

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    router.push('/')
  };

  const handleLogin = () => {
    if (login) {
      handleLogout()
    } else {
      router.push('/login')
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) setLogin(true);
  }, []);

  return (
    <Box
      style={{
        width: "80%",
        margin: "auto",
        justifyContent: "space-around",
        display: "flex",
        marginTop: "20px",
        height: "70px",
        padding: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Link href="/">
        <Button
          style={{
            height: "50px",
            width: "100px",
            backgroundColor: "#005792",
            color: "white",
          }}
        >
          Home
        </Button>
      </Link>
      <Link href="/register">
        <Button
          style={{
            height: "50px",
            width: "100px",
            backgroundColor: "#005792",
            color: "white",
          }}
        >
          Register
        </Button>
      </Link>
      <Button
        style={{
          height: "50px",
          width: "100px",
          backgroundColor: "#005792",
          color: "white",
        }}
        onClick={handleLogin}
      >
        {login ? "Logout" : "Login"}
      </Button>
    </Box>
  );
};

export default Navbar;