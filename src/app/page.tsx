'use client';
import { Box } from '@mui/material';
import ContactHeader from '@/ui/contact-header';
import Resume from '@/ui/resume';

export default function Home() {
  return (
    <Box padding={1}>
      <ContactHeader />
      <Resume />
    </Box>
  );
}
