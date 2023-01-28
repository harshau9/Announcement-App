import React, { useContext, useState } from "react";
import { Button, Card, CardBody, Flex, Input } from "@chakra-ui/react";
import { BiSave } from "react-icons/bi";


import { TopicType } from "../constants";
import { TopicsContext } from "../context/AnnouncmentContext";

type TopicInputProps = {
  type: TopicType;
  onCancel: () => void;
};
const TopicInput = ({ type, onCancel }: TopicInputProps) => {
  const [value, setValue] = useState<string>("");
  const { addTopic } = useContext(TopicsContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    addTopic && addTopic(value, type);
  };
  return (
    <Card bgColor={"black"} >
      <CardBody >
        <Flex direction={"column"} gap={2}>
          <Input
            placeholder="new Announcement..."
            size="md"
            // maxLength={20}
            value={value}
            onChange={handleChange}
            data-cy="input-topic"
            color="white"
          />
          <Flex justify="space-between" flexWrap="wrap">
            <Button
              flex="1"
              variant="ghost"
              onClick={handleSave}
              data-cy="save-topic-btn"
              backgroundColor="rgb(64, 229, 75)"
              marginRight="10px"
            >
              Create
            </Button>
            <Button
              flex="1"
              variant="ghost"
              onClick={onCancel}
              data-cy="cancel-add-topic-btn"
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

export default TopicInput;
