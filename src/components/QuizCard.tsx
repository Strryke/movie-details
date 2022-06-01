import {
  Heading,
  Image,
  Box,
  Center,
  Text,
  Stack,
  Button,
  ButtonGroup,
  Link,
  Badge,
  useColorModeValue,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import Popup from "./Popup";

export default function QuizCard(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [correct, setCorrect] = useState(Boolean);

  const handleSubmit = (e: any, choice: string) => {
    e.preventDefault();
    const answer = props.subreddit === "MovieDetails" ? "detail" : "shitty";
    setCorrect(answer === choice ? true : false);
    onOpen();
  };

  return (
    <Center py={6}>
      <Box
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Image
          src={`${props.url}`}
          alt={"Image Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
          marginX="auto"
        />
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {props.title}
        </Text>

        <Flex mt={8} direction={"row"} justifyContent="center">
          <Button mx={2} onClick={(e) => handleSubmit(e, "shitty")}>
            💩 Shit
          </Button>
          <Button mx={2} onClick={(e) => handleSubmit(e, "detail")}>
            ✅ Legit
          </Button>
        </Flex>
      </Box>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        result={correct}
        nextQuestion={props.nextQuestion}
        link={props.permalink}
      />
    </Center>
  );
}
