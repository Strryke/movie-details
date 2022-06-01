import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
} from "@chakra-ui/react";

export default function IntroModal({ isOpen, onClose }: any) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Introduction</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom={10}>
            You'll be shown a Reddit post that comes from either <br />
            <Link
              href="http://www.reddit.com/r/moviedetails"
              target={"_blank"}
              color="blue.400"
            >
              /r/moviedetails
            </Link>{" "}
            or{" "}
            <Link
              href="http://www.reddit.com/r/shittymoviedetails"
              target={"_blank"}
              color="blue.400"
            >
              /r/shittymoviedetails
            </Link>
            .
            <br />
            <br />
            Guess correctly and... I hope it gives you a sense of pride and
            accomplishment.
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
