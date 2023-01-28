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

import { AnnouncersContext } from "./context/AnnouncementContext";
import AnnouncerSection from "./components/AnnouncementSection";

import { Announcer, AnnouncerType } from "./constants";
import Example from "./components/mode"
const Announcer = () => {
  const { announcers } = useContext(AnnouncersContext);
  return (
    <Container maxW="container.xl" data-cy="announcers-board" marginTop="50px">
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
        <Example/>
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
