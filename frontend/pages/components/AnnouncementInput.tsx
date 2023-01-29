import React, { useContext, useState } from "react";
import { Button, Card, CardBody, Flex, Input } from "@chakra-ui/react";

import { AnnouncerType } from "../constants";
import { AnnouncersContext } from "../context/AnnouncementContext";

type AnnouncerInputProps = {
  type: AnnouncerType;
  onCancel: () => void;
};
const AnnouncerInput = ({ type, onCancel }: AnnouncerInputProps) => {
  const [value, setValue] = useState<string>("");
  const { addAnnouncer } = useContext(AnnouncersContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    addAnnouncer && addAnnouncer(value, type);
  };
  return (
    <Card bgColor={"white"}>
      <CardBody>
        <Flex direction={"column"} gap={2}>
          <Input
            placeholder="Enter Here"
            size="md"
            // maxLength={20}
            value={value}
            onChange={handleChange}
            color="white"
            fontSize={{ base: "14px", sm: "15px" }}
          />
          <Flex justify="space-between" flexWrap="wrap">
            <Button
              flex="1"
              variant="ghost"
              onClick={handleSave}
              backgroundColor="#14A44D"
              marginRight="10px"
              color="white"
              fontSize={{ base: "12px", sm: "15px" }}
            >
              Create
            </Button>
            <Button
              flex="1"
              variant="ghost"
              onClick={onCancel}
              backgroundColor="#DC4C64"
              color="white"
              fontSize={{ base: "12px", sm: "15px" }}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AnnouncerInput;
