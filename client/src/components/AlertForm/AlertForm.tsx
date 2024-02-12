import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Select,
} from '@chakra-ui/react'

import { triggerAlert } from 'src/services/socketService'

const AlertForm = () => {
  const initialFormData = {
    time: null,
    type: '',
    location: '',
  }

  const [alertDetails, setAlertDetails] = useState(initialFormData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setAlertDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    triggerAlert({ ...alertDetails, time: new Date() })
    setAlertDetails(initialFormData)
  }

  // use a better value later if/when you have a db
  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>Type</FormLabel>
          <Select
            name="type"
            value={alertDetails.type}
            placeholder="Select option"
            onChange={handleChange}
            data-testid="alertform-select-type"
          >
            <option value="option1Value">Puppy needs petting</option>
            <option value="option2Value">Clean up in isle 7</option>
            <option value="option3Value">Gas me up</option>
          </Select>
          <FormLabel>Location</FormLabel>
          <Input
            id="location"
            name="location"
            value={alertDetails.location}
            onChange={handleChange}
            placeholder="Where you are..."
            data-testid="alertform-input-location"
          ></Input>
        </FormControl>
        <Button
          colorScheme="blue"
          type="submit"
          data-testid="alertform-button-submit"
        >
          Send Alert
        </Button>
      </form>
    </Box>
  )
}

export default AlertForm
