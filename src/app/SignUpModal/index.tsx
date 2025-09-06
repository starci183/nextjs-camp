import { useSignUpDiscloresureSingleton } from "@/hooks";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
  } from "@heroui/react";
  
  export default function SignUpModal() {
    const { isOpen, onOpen, onOpenChange, onClose } = useSignUpDiscloresureSingleton()
  
    return (
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
                <ModalBody>
                  <Input label="Email" placeholder="Enter your email" />
                  <Input label="Password" placeholder="Enter your password" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }