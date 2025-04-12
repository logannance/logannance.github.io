import Grid from "@mui/material/Grid";
import ContactLink from "./contact-link";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactHeader() {
    return (
      <Grid container alignItems="baseline" spacing={2} justifyContent="space-between">
        <ContactLink href="/resume.pdf" icon={<DownloadIcon fontSize="small" />} text="Resume" download="logan-nance-resume.pdf" />
        <ContactLink href="mailto:ldnance10@gmail.com" icon={<EmailIcon fontSize="small" />} text="ldnance10@gmail.com" />
        <ContactLink href="tel:385-306-1087" icon={<PhoneIcon fontSize="small" />} text="385-306-1087" />
        <ContactLink href="https://www.google.com/maps/place/Centerville,+UT/" icon={<LocationOnIcon fontSize="small" />} text="Centerville, UT" />
        <ContactLink href="https://www.linkedin.com/in/logan-nance/" icon={<LinkedInIcon fontSize="small" />} text="LinkedIn" />
        <ContactLink href="https://github.com/logannance" icon={<GitHubIcon fontSize="small" />} text="GitHub" />
      </Grid>
    )
}
