import {
  Text,
  useRadioGroup,
  VStack,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import TopicCard from "./TopicCard";
import Glory from "../User/Glory";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getQuizzByCategory, setCategoryName } from "./quizzSlice";
import { useNavigate } from "react-router-dom";

function Topic() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const options = ["Sport", "Art", "Animals"];

  const getValues = (value: string) => {
    let category = 21;
    if (value === "Sport") {
      category = 21;
    }
    if (value === "Art") {
      category = 25;
    }
    if (value === "Animals") {
      category = 27;
    }
    dispatch(getQuizzByCategory(category));
    dispatch(setCategoryName(value));
    navigate("/quizz");
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "topic",
    onChange: getValues,
  });

  const group = getRootProps();

  return (
    <VStack w="full" h="full" bgColor="white">
      <Glory />
      <Text fontSize={40} fontWeight="bold">
        Choose a topic
      </Text>
      <VStack {...group} h="full" spacing={5}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <TopicCard key={value} radioProps={radio}>
              {value}
            </TopicCard>
          );
        })}
      </VStack>
    </VStack>
  );
}

export default Topic;
