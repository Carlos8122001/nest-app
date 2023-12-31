/* eslint-disable react/prop-types */
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function CustomMessage({severity,message}) {
  return (
    <Stack sx={{ width: '100%', m:1}} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  )
}
