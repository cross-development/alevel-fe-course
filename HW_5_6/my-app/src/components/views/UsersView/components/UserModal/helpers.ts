// Packages
import * as yup from 'yup';
import { HTMLInputTypeAttribute } from 'react';
// Types
import { CreateUserBody } from '../../../../../types/user';

export const validationSchema = yup.object().shape({
  email: yup.string().email().trim().required('Please fill in your email'),
  firstName: yup
    .string()
    .min(2, 'Use at least 2 characters')
    .required('Please fill in your first name'),
  lastName: yup
    .string()
    .min(2, 'Use at least 2 characters')
    .required('Please fill in your last name'),
  job: yup.string().min(5, 'Use at least 2 characters').required('Please fill in your job'),
});

interface FormField {
  type: HTMLInputTypeAttribute;
  label: string;
  name: keyof CreateUserBody;
  width: number;
}

export const userFormFields: FormField[] = [
  {
    type: 'text',
    label: 'First Name',
    name: 'firstName',
    width: 12,
  },
  {
    type: 'text',
    label: 'Last Name',
    name: 'lastName',
    width: 12,
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    width: 12,
  },
  {
    type: 'text',
    label: 'Job',
    name: 'job',
    width: 12,
  },
];
