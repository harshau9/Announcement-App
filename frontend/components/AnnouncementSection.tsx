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
import { Announcer, announcerInfo, AnnouncerType } from "../lib/constants";
import AnnouncerItem from "./AnnouncementItem";
import AnnouncerInput from "./AnnouncementInput";

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
    <Card bgColor={info.sectionBgColor}>
      <CardHeader>
        <Heading
          size="md"
          display="flex"
          padding="10px"
          justifyContent="center"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          color="white"
          fontSize={{ base: "15px", sm: "18px" }}
        >
          {info.title}
        </Heading>
      </CardHeader>
      <CardBody fontSize={{ base: "13px", sm: "16px" }}>
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
          width={{ base: "100%", sm: "70%" }}
          variant="ghost"
          margin="auto"
          disabled={addNew}
          onClick={() => setAddNew(true)}
          color="black"
          backgroundColor="white"
          fontSize={{ base: "10px", sm: "18px" }}
        >
          Create New Announcement
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnnouncerSection;
