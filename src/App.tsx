import { Box, Flex } from "@chakra-ui/react";
import Begin from "./User/Begin";
import { Route, Routes } from "react-router-dom";
import Topic from "./Quizz/Topic";
import Quizz from "./Quizz/Quizz";

export const App = () => {
  return (
    <Flex
      bgGradient="linear(to-b, #FF3CAC,#784BA0,#2B86C5)"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex w="40%" h="80vh" boxShadow="dark-lg" rounded="md">
        <Routes>
          <Route path="/" element={<Begin />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/quizz" element={<Quizz />} />
        </Routes>
      </Flex>
    </Flex>
  );
};
