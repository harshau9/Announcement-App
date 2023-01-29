import React, { useContext } from "react";
import { Button, Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import { BiLike, BiTrash } from "react-icons/bi";

import { AnnouncersContext } from "../context/AnnouncementContext";
import { Announcer, announcerInfo } from "../lib/constants";

interface AnnouncerItemProps extends Announcer {}

const AnnouncerItem = (props: AnnouncerItemProps) => {
  const info = announcerInfo[props.type];
  const { likeAnnouncer, deleteAnnouncer } = useContext(AnnouncersContext);
  const updateLikeCountHandle = async () => {
    likeAnnouncer && likeAnnouncer(props.id, props.likes + 1);
  };
  const onDeleteHandle = async () => {
    deleteAnnouncer && deleteAnnouncer(props.id);
  };
  return (
    <Card bgColor={info.itemBgColor}>
      <CardBody>
        <h3 style={{ color: "white" }}>{props.message}</h3>
        <Flex flexDirection="column" flexWrap="wrap" gap={2}>
          <Button
            flex="1"
            variant="ghost"
            onClick={onDeleteHandle}
            width="auto"
            backgroundColor="#3B71CA"
            margin="auto"
            border="1px solid white"
            padding="10px 15px"
            marginTop="10px"
            borderRadius="10px"
            color="white"
          >
            Delete
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AnnouncerItem;
