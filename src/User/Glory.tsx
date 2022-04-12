import { useRef } from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineCrown } from "react-icons/ai";
import GloryUser from "./GloryUser";
import { useAppSelector } from "../store/hooks";

function Glory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const userList = useAppSelector((state) => state.user.users);

  return (
    <>
      <Tooltip label="glory" placement="right">
        <IconButton
          icon={<AiOutlineCrown />}
          aria-label=""
          bgColor="white"
          fontSize={50}
          color="yellow"
          mt={5}
          onClick={onOpen}
        />
      </Tooltip>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontWeight="bold" fontSize={20} color="#FF6A88">
              Glory user
            </Text>
          </DrawerHeader>

          <DrawerBody>
            {userList.map((user, index) => {
              if (user.userRes === 3) {
                return (
                  <GloryUser key={user.name} name={user.name} index={index} />
                );
              }
            })}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Glory;
