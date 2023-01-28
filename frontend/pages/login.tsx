import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const toast = useToast();
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        padding="30px"
        backgroundColor="#00204a"
      >
        <Avatar bg="blue.500" />
        <Heading color="#64c4ed">Login</Heading>
        <Box minW={{ base: "90%", md: "468px" }} style={{padding:"20px"}}>
          <form>
            <Stack
              spacing={4}
              p="20px"
              backgroundColor="#005792"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" style={{color:"white"}} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" style={{color:"white"}}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                </FormHelperText>
              </FormControl>
              <Link href="/announcer"><Button style={{width:"90%",margin:"5%"}} onClick={() => {
                  toast({
                    title: 'Login Successfull.',
                    description: "Now you can see the latest announcements of each category",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position:"top"
                  })}}>Login</Button></Link>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box style={{marginTop:"30px"}}>
        New to us?{"      "}
        <Link href="/register">Sign-Up</Link>
      </Box>
    </Flex>
  );
};

export default Login;
