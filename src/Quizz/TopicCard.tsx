import { Box, UseRadioProps, useRadio, Text } from "@chakra-ui/react";
import React from "react";

interface RadioCardProps {
  radioProps: UseRadioProps;
  children: string;
  disabled?: boolean;
}

export default function TopicCard({
  radioProps,
  children,
  disabled,
}: RadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" h="20%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
        w={80}
        h="full"
      >
        <Text fontSize={20} fontWeight="bold">
          {children}
        </Text>
      </Box>
    </Box>
  );
}
