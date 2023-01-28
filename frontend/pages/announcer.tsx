import React, { useContext } from "react";
import {
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Button,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { AnnouncersContext } from "./context/AnnouncementContext";
import AnnouncerSection from "./components/AnnouncementSection";
import { useToast } from "@chakra-ui/react";
import { Announcer, AnnouncerType } from "./constants";
import Example from "./components/mode"
import moment from 'moment';
const Announcer = () => {
  const currentDate = moment().format('MMMM Do YYYY, h:mm a')
  const toast = useToast();
  const { announcers } = useContext(AnnouncersContext);
  
  return (
    <Container maxW="container.xl" data-cy="announcers-board" marginTop="50px">
    <Box width="100%" height="50px"margin="auto" display="flex" justifyContent="end" marginBottom="20px"><Heading style={{textAlign:"end",fontSize:"20px",color:"#7c064d"}}>{currentDate}</Heading></Box>
      <Box style={{ justifyContent: "space-between", display: "flex" }}>
        <Button
          style={{
            width: "200px",
            fontSize: "20px",
            backgroundColor: "teal",
            color: "white",
          }}
        >
          Announcements:{announcers.length}
        </Button>
        <Link href="/">
                <Button  style={{
            backgroundColor: "purple",
            color: "white",
          }}
                >
                  Home
                </Button>
              </Link>
        <Example/>
        <Link href="/login">
                <Button
                  style={{ width: "90%", margin: "5%",backgroundColor:"green",color:"white"}}
                  onClick={() => {
                    toast({
                      title: "Logout Successfull.",
                      description: "You logged out Successfully",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                      position: "top",
                    });
                  }}
                >
                  Logout
                </Button>
              </Link>
      </Box>

      <Center flexDirection="column">
        {/* <Heading as="h2" data-cy="total-announcers">
          Total announcers: {announcers.length}
        </Heading> */}
      </Center>
      <Divider my={4} />
      <SimpleGrid spacing={4} templateColumns="repeat(2, 1fr)" width="100%">
        {Object.values(AnnouncerType).map((announcer) => (
          <AnnouncerSection
            key={announcer}
            announcerType={announcer}
            announcers={announcers.filter(
              (announcerItem: Announcer) => announcerItem.type === announcer
            )}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Announcer;
