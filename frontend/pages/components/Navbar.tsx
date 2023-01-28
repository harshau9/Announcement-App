import React from "react";
import Link from "next/link";
import { Box, Button, Flex } from "@chakra-ui/react";
import Protect from "./Protect";

const Navbar = () => {
  return (
    <Box style={{width:"80%",margin:"auto",justifyContent:"space-around",display:"flex",marginTop:"20px",height:"70px",padding:"10px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <Link href="/"><Button style={{height:"50px",width:"100px",backgroundColor:"#005792",color:"white"}}>Home</Button></Link>
        <Link href="/register"><Button style={{height:"50px",width:"100px",backgroundColor:"#005792",color:"white"}}>Register</Button></Link>
        <Link href="/login"><Button style={{height:"50px",width:"100px",backgroundColor:"#005792",color:"white"}}>Login</Button></Link>
    </Box>
  );
};

export default Navbar;
