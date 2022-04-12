import { useState, useMemo } from "react";

import { Text, useRadioGroup, VStack, HStack, Button } from "@chakra-ui/react";
import QuizzCard from "./QuizzCard";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { resetQuizz, setEndQuizz } from "./quizzSlice";
import { useNavigate } from "react-router-dom";
import EndTopic from "../User/EndTopic";
import { addUserResults } from "../User/userSlice";

function Topic() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let [isCorrect, setIsCorrect] = useState(false);
  let [disabled, setDisabled] = useState(false);
  let [isChoose, setIsChoose] = useState(false);
  let [countCorrect, setCountCorrect] = useState(0);
  const [quizzNumber, setQuizzNumber] = useState(0);

  const { quizzes, isLoading, isEnd, categoryName } = useAppSelector(
    (state) => state.quizz
  );
  const handleChooseAnswer = (value: string) => {
    if (quizzes[quizzNumber].correct_answer === value) {
      setIsCorrect(true);
      setDisabled(true);
      setCountCorrect(countCorrect + 1);
    } else {
      setDisabled(true);
    }
    setIsChoose(true);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "topic",
    onChange: handleChooseAnswer,
  });

  const group = getRootProps();
  const correctAnswer = quizzes[quizzNumber]?.correct_answer;
  const inCorrectAnswer = quizzes[quizzNumber]?.incorrect_answers;
  const options = useMemo(() => {
    if (inCorrectAnswer) {
      return [correctAnswer, ...inCorrectAnswer].sort(
        () => Math.random() - 0.5
      );
    } else {
      return [];
    }
  }, [correctAnswer, inCorrectAnswer]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleContinue = () => {
    if (quizzNumber <= 2) {
      setQuizzNumber(quizzNumber + 1);
    } else {
      dispatch(setEndQuizz());
      console.log(countCorrect);
      if (countCorrect === 4) {
        dispatch(addUserResults(1));
      }
    }
    setIsChoose(false);
    setIsCorrect(false);
    setDisabled(false);
  };

  const handleExiting = () => {
    dispatch(resetQuizz());
    navigate("/topic");
  };

  return (
    <>
      {!isEnd ? (
        <VStack w="full" h="full" bgColor="white">
          <HStack w="full" px={4} py={4}>
            <Text fontSize={15} fontWeight="bold">
              Question {quizzNumber + 1}:
            </Text>
            <Text>{quizzes[quizzNumber].question}</Text>
          </HStack>

          <VStack {...group} h="full" spacing={5} w="full" position="relative">
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <QuizzCard
                  key={value}
                  radioProps={radio}
                  disabled={disabled}
                  isCorrect={isCorrect}
                >
                  {value}
                </QuizzCard>
              );
            })}
            <HStack
              justify="space-between"
              w="full"
              px={8}
              position="absolute"
              bottom="10%"
            >
              <Button
                colorScheme="green"
                onClick={handleContinue}
                isDisabled={isChoose ? false : true}
              >
                Continue
              </Button>
              <Button colorScheme="gray" onClick={handleExiting}>
                Exit
              </Button>
            </HStack>
            <Text fontSize={20}>
              {isChoose ? `Answer: ${correctAnswer}` : ""}
            </Text>
          </VStack>
        </VStack>
      ) : (
        <EndTopic name={categoryName} />
      )}
    </>
  );
}

export default Topic;
