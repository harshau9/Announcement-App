import React from "react";
import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import Protect from "./Protect";

const Navbar = () => {
  return (
    <Box>
      <Flex gap={6}>
        <Link href="/announcer">Announcements</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
