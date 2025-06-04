import { Alert } from '@mui/material';
import React from 'react';

interface ErrorMessageProps {
  errorMessage: string;
}
export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return <Alert severity='error'>{errorMessage}</Alert>;
}
