import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setEndQuizz } from "../Quizz/quizzSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function EndTopic(props: { name: string }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.users);
  console.log(user);
  return (
    <Box>
      <Text fontSize={40} color="yellow.200" px={4} py={4}>
        You've completed topic {props.name}. Please complete the remaining
        topics
      </Text>
      <Button
        colorScheme="blue"
        mx={4}
        onClick={() => {
          navigate("/topic");
          dispatch(setEndQuizz());
        }}
      >
        Home
      </Button>
    </Box>
  );
}
