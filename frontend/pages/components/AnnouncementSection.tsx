import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Announcer, announcerInfo, AnnouncerType } from "../constants";
import AnnouncerItem from "./AnnouncementItem";
import AnnouncerInput from "./AnnouncementInput";
import { BiMessageSquareAdd } from "react-icons/bi";

type AnnouncerSectionProps = {
  announcerType: AnnouncerType;
  announcers: Announcer[];
};

const AnnouncerSection = ({
  announcerType,
  announcers,
}: AnnouncerSectionProps) => {
  const [addNew, setAddNew] = useState(false);
  const info = announcerInfo[announcerType];

  useEffect(() => {
    if (addNew) {
      setAddNew(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [announcers]);

  return (
    <Card
      bgColor={info.sectionBgColor}
      data-cy={`announcer-section-${announcerType}`}
    >
      <CardHeader>
        <Heading
          size="md"
          data-cy="announcer-title"
          display="flex"
          padding="10px"
          justifyContent="center"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          {info.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Flex direction={"column"} gap={2}>
          {announcers.map((announcer) => (
            <AnnouncerItem key={announcer.id} {...announcer} />
          ))}
          {addNew && (
            <AnnouncerInput
              type={announcerType}
              onCancel={() => setAddNew(false)}
            />
          )}
        </Flex>
      </CardBody>
      <CardFooter>
        <Button
          width={"100%"}
          variant="ghost"
          disabled={addNew}
          onClick={() => setAddNew(true)}
          data-cy="announcer-add-btn"
          // backgroundColor="rgb(239, 153, 179)"
        >
          Create New Announcement
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnnouncerSection;
