import { Box, Stack } from '@mui/material';
import ContactHeader from '@/ui/contact-header';
import Resume from '@/ui/resume';

export default function Home() {
  return (
    <Stack padding={1} spacing={1}>
      <ContactHeader />
      <Resume />
    </Stack>
  );
}
