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
        />
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {props.title}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button onClick={(e) => handleSubmit(e, "shitty")}>💩</Button>
          <Button onClick={(e) => handleSubmit(e, "detail")}>🔥</Button>
        </Stack>
      </Box>
      {/* <Button onClick={props.nextQuestion}>Next</Button> */}
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
