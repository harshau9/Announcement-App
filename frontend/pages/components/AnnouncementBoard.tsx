import React, { useContext } from "react";
import {
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Button,
  Box
} from "@chakra-ui/react";

import { TopicsContext } from "../context/AnnouncmentContext";
import TopicSection from "./AnnouncementSection";

import { Topic, TopicType } from "../constants";
import Example from "../components/mode"
const TopicsBoard = () => {
  const { topics } = useContext(TopicsContext);
  return (
    
    <Container maxW="container.xl" data-cy="topics-board" marginTop="50px">
      <Box style={{justifyContent:"space-between",display:"flex"}}>
      <Button style={{width:"200px",fontSize:"20px",backgroundColor:"teal",color:"white"}}>Announcements:{topics.length}</Button>
      <Example/>
      </Box>
     
      <Center flexDirection="column">
        {/* <Heading as="h2" data-cy="total-topics">
          Total topics: {topics.length}
        </Heading> */}
      </Center>
      <Divider my={4} />
      <SimpleGrid spacing={4} templateColumns="repeat(2, 1fr)" width="100%">
        {Object.values(TopicType).map((topic) => (
          <TopicSection
            key={topic}
            topicType={topic}
            topics={topics.filter(
              (topicItem: Topic) => topicItem.type === topic
            )}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default TopicsBoard;
