import React from 'react';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from "formik";
import validations from "./validations";
import { fetchLogin } from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";



function Signin() {
  const {login} = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema: validations,
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({email: values.email, password: values.password});

        login(loginResponse);

        navigate('/profile', { replace: true });
      } catch (error) {
        bag.setErrors({general: error.response.data.message});
      }
    },
  });


  return (
    <div>
      <Flex align='center' width="full" justifyContent="center">
          <Box pt={10}>
              <Box textAlign="center">
                  <Heading>Sign In</Heading>
              </Box>
              <Box my={5}>
                  {
                    formik.errors.general && (<Alert status='error'>
                      {formik.errors.general}
                    </Alert>)
                  }
              </Box>
              <Box my={5} textAlign="left">
                  <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                      <FormLabel>E-mail</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.email && formik.errors.email}
                      />
                    </FormControl >


                    <FormControl mt="4">
                      <FormLabel>Password</FormLabel>
                      <Input
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.password && formik.errors.password}
                      />
                    </FormControl>


                    <Button mt={4} width="full" type='submit'>Sign In</Button>
                  </form>
              </Box>
          </Box>
      </Flex>
    </div>
  )
}

export default Signin
