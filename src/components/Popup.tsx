import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
useDisclosure;

export default function Popup({
  isOpen,
  onClose,
  result,
  link,
  nextQuestion,
}: any) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {result ? "✅ You're right!" : "❌ You're wrong!"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {result ? (
              <>
                Maybe you're smart, maybe the question was too easy, maybe your
                finger slipped and clicked the right option. Either way,
                congratulations! You're right, try another question!
                <br />
                <br />
                Or check out the full post{" "}
                <Link
                  target="_blank"
                  href={`http://reddit.com${link}`}
                  color="teal.500"
                >
                  here
                </Link>
              </>
            ) : (
              <>
                You must not be very discerning... It was 50/50 and you got it
                wrong? Try another question!
                <br />
                <br />
                Or check out the full post{" "}
                <Link
                  target="_blank"
                  href={`http://reddit.com${link}`}
                  color="teal.500"
                >
                  here
                </Link>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                onClose();
                nextQuestion();
              }}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
