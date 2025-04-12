import { Link, List, Typography } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import React from "react";
import IconText from "./icon-text";
import ContactLink from "./contact-link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ResumeSectionItem({
    title,
    organization,
    organizationHref,
    date,
    location,
    locationHref,
    descriptions,
    subtitle,
    optionalItem,
}: {
    title?: string,
    organization?: string,
    organizationHref?: string,
    date?: string,
    location?: string,
    locationHref?: string,
    descriptions?: string[],
    subtitle?: string,
    optionalItem?: React.ReactNode
}) {
  return (
    <ListItem>
      <ListItemText>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="caption">{subtitle}</Typography>
        {organization && (
          <Link href={organizationHref} target="_blank" rel="noopener noreferrer">
            <Typography variant="body1">{organization}</Typography>
          </Link>
        )}
        {date && (
          <IconText icon={<CalendarMonthIcon fontSize="small" />} text={date} />
        )}
        {location && locationHref && (
          <ContactLink href={locationHref}
            icon={<LocationOnIcon fontSize="small" />} text={location}
          />
        )}
        {optionalItem}
        {descriptions && descriptions.map((description, i) => (
            <Typography key={i} variant="body2">{description}</Typography>
        ))}
      </ListItemText>
    </ListItem>
  );
}
      
