import {
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export const SimpleModal = ({
  isOpen,
  onClose,
  headerText,
  description,
  children,
}: {
  isOpen: boolean;
  onClose: any;
  headerText: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"md"} isCentered>
      <ModalOverlay />
      <ModalContent
        className="p-6 border-radius flex flex-col justify-center align-center bg-first text-second"
        style={{ backgroundColor: "#0b0b0b", color: "#fffffb" }}
      >
        <ModalBody className="text-center">
          <Text className="logo mb-8"> {headerText} </Text>
          {description}
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
