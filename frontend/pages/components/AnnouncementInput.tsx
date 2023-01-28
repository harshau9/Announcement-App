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
    <Card bgColor={"black"}>
      <CardBody>
        <Flex direction={"column"} gap={2}>
          <Input
            placeholder="new Announcement..."
            size="md"
            // maxLength={20}
            value={value}
            onChange={handleChange}
            data-cy="input-announcer"
            color="white"
          />
          <Flex justify="space-between" flexWrap="wrap">
            <Button
              flex="1"
              variant="ghost"
              onClick={handleSave}
              data-cy="save-announcer-btn"
              backgroundColor="rgb(64, 229, 75)"
              marginRight="10px"
            >
              Create
            </Button>
            <Button
              flex="1"
              variant="ghost"
              onClick={onCancel}
              data-cy="cancel-add-announcer-btn"
              backgroundColor="red"
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
