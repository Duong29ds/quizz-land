import React from "react";
import { HStack, VStack, Text } from "@chakra-ui/react";

export default function GloryUser(props: { name: string; index: number }) {
  return (
    <HStack
      bgGradient="linear(to-r,#F76B1C,#FBAB7E, #F4D03F,)"
      my={3}
      h={10}
      borderRadius={5}
      px={4}
      color="#fff"
    >
      <Text>Top {props.index}</Text>
      <Text>{props.name}</Text>
    </HStack>
  );
}
