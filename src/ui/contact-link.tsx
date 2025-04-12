import { Link } from '@mui/material';
import IconText from './icon-text';

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: string
}

export default function ContactLink({ href, icon, text, download }: ContactLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" download={download}>
      <IconText icon={icon} text={text} />
    </Link>
  );
}