import React, { useContext } from "react";
import { Button, Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import { BiLike, BiTrash } from "react-icons/bi";

import { AnnouncersContext } from "../context/AnnouncementContext";
import { Announcer, announcerInfo } from "../constants";

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
    <Card bgColor={info.itemBgColor} data-cy="announcer-item">
      <CardBody>
        <h3 data-cy="announcer-message" style={{ color: "white" }}>
          {props.message}
        </h3>
        <Flex flexDirection="column" flexWrap="wrap" gap={2}>
          {/* <Button
            flex="1"
            variant="ghost"
            leftIcon={<BiLike />}
            onClick={updateLikeCountHandle}
            data-cy="like-announcer-btn"
          >
            ({props.likes}) Likes
          </Button> */}
          <Button
            flex="1"
            variant="ghost"
            onClick={onDeleteHandle}
            data-cy="delete-announcer-btn"
            width="auto"
            backgroundColor="red"
            margin="auto"
            border="1px solid white"
            padding="5px"
            marginTop="10px"
          >
            Delete
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AnnouncerItem;
