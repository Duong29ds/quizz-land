import React, { useState, ChangeEvent } from "react";
import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { addUser } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Begin() {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmitName = () => {
    localStorage.removeItem("user");
    localStorage.setItem("user", input);
    navigate("/topic");
    dispatch(addUser({ name: input, userRes: 0 }));
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const isError = input === "";

  return (
    <VStack w="full" spacing={40} px={4}>
      <Text color="white" fontSize="40px" fontWeight="bold">
        Quizz-Land
      </Text>
      <HStack w="full">
        <Input
          py={4}
          color="white"
          placeholder={isError ? "Please enter name" : ""}
          _placeholder={{ opacity: 1, color: "gray.200" }}
          name="name"
          value={input}
          onChange={handleInputChange}
          borderColor={isError ? "red" : "none"}
        />
        <Button
          type="submit"
          colorScheme="blue"
          onClick={handleSubmitName}
          disabled={isError}
        >
          Button
        </Button>
      </HStack>
    </VStack>
  );
}
