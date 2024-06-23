import { Modal, ModalContent, ModalHeader, ModalOverlay, ModalBody, ModalCloseButton, FormControl, FormLabel, RadioGroup, Radio, ModalFooter, Button, Input } from "@chakra-ui/react"
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ onClose, isOpen }) {

    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);



    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        handleFormSubmit(formData)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Add New Transaction
                    </ModalHeader>
                    <ModalCloseButton />
    
                        <ModalBody>
                            <FormControl>
                                <FormLabel>
                                    Enter Description
                                </FormLabel>
                                <Input placeholder="Enter Transaction Description" type="text" name="description" onChange={handleFormChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>
                                    Enter Amount
                                </FormLabel>
                                <Input placeholder="Enter Transaction Amount" type="number" name="amount" onChange={handleFormChange} />
                            </FormControl>
                            <RadioGroup mt={5} onChange={setValue}>
                                <Radio value="income" colorScheme="blue" name="type" checked={formData.type === 'income'} onChange={handleFormChange}>
                                    Income
                                </Radio>
                                <Radio value="expense" colorScheme="red" name="type" ml={4} checked={formData.type === 'expense'} onChange={handleFormChange}
                                >
                                    Expense
                                </Radio>
                            </RadioGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} mr={3}>
                                Cancel
                            </Button>
                            <Button onClick={onClose} type="submit" colorScheme="blue">
                                Add
                            </Button>
                        </ModalFooter>
                    
                </ModalContent>
            </form>
        </Modal>
    );
}
