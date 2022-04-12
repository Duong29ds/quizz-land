import { Box, UseRadioProps, useRadio, Text } from "@chakra-ui/react";
import React from "react";

interface RadioCardProps {
  radioProps: UseRadioProps;
  children: string;
  disabled?: boolean;
  isCorrect: boolean;
}

export default function TopicCard({
  radioProps,
  children,
  disabled,
  isCorrect,
}: RadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" h="10%" w="90%">
      <input {...input} disabled={disabled} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={
          isCorrect
            ? {
                bg: "teal.600",
                color: "white",
                borderColor: "teal.600",
              }
            : {
                bg: "red.600",
                color: "white",
                borderColor: "red.600",
              }
        }
        px={5}
        py={3}
        w="full"
        h="full"
      >
        <Text fontSize={20} fontWeight="bold">
          {children}
        </Text>
      </Box>
    </Box>
  );
}
