import React from "react";
import {Box} from "@chakra-ui/react"
import homeimg from "./components/images/home.png"
import Image from "next/image";
const Homepage = () => {
  return (
    <>
  <Box style={{width:"50%",height:"500px",margin:"auto",marginTop:"50px"}}>
      <Image src={homeimg} alt="home" style={{width:"100%"}}></Image>

  </Box>
  </>
  )
};

export default Homepage;
