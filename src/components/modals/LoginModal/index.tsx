"use client"
import { useLoginDiscloresureSingleton } from "@/hooks";
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
  
  export function LoginModal() {
    const { isOpen, onOpen, onOpenChange, onClose } = useLoginDiscloresureSingleton()
  
    return (
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
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