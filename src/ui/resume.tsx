import { Grid } from "@mui/material";
import IconText from "./icon-text";
import SchoolIcon from "@mui/icons-material/School";
import ResumeSection from "./resume-section";
import ResumeSectionItem from "./resume-section-item";

export default function Resume() {
  return (
    <Grid container spacing={1} width="100%">
      <Grid size={{xs: 12, sm: 6, md: 4}}>
        <ResumeSection title="Education">
          <ResumeSectionItem
            title="Bachelor's Degree"
            subtitle="Computer Science (ongoing)"
            date="2022 - Current"
            location="Ogden, UT"
            locationHref="https://www.google.com/maps/place/Ogden,+UT/@41.2230469,-111.9738406,13z/data=!3m1!4b1!4m6!3m5!1s0x87537c29f0270001:0x4262942b1280650!8m2!3d41.2230469!4d-111.9738406!16zL20vMDEwZHQw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            organization="Weber State University"
            organizationHref="https://www.weber.edu/"
            descriptions={["Outstanding Student Award",
              "High Academic Excellence"
            ]}
          optionalItem={
            <IconText icon={<SchoolIcon fontSize="small" />} text="4.0 GPA" />
          }
        />
        <ResumeSectionItem
          title="High School Diploma"
          subtitle="Viewmont High School"
          date="2017 - 2020"
          location="Bountiful, UT"
          locationHref="https://www.google.com/maps/place/Bountiful,+UT/@40.8977778,-111.8774972,13z/data=!3m1!4b1!4m6!3m5!1s0x874d9823f0835733:0x387840e06759776!8m2!3d40.8798851!4d-111.8764416!16zL20vMDEwZHQw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          organization="Viewmont High School"
          organizationHref="https://davis.k12.ut.us/viewmont"
          descriptions={[
            "Captain of varsity soccer team",
            "Excellence in Mathematics, Citizenship, and Fitness"
          ]}
        />
        <ResumeSectionItem
          title="Additional Skills"
          descriptions={[
            "C++",
            "SQL",
            "Git",
            "Cursor",
            "JavaScript",
            "Microsoft Excel (VBA)",
            "Finance"
          ]}
        />
        </ResumeSection>
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 4}}>
        <ResumeSection title="Work Experience">
          <ResumeSectionItem
            title="Parks Maintenance Worker"
            subtitle="Centerville City"
            date="May 2023 - August 2024"
            location="Centerville, UT"
            locationHref="https://www.google.com/maps/place/Centerville,+UT/@40.9200000,-111.8500000,13z/data=!3m1!4b1!4m6!3m5!1s0x874d9823f0835733:0x387840e06759776!8m2!3d40.9200000!4d-111.8500000!16zL20vMDEwZHQw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            organizationHref="https://www.centervilleutah.gov/"
            organization="Centerville City"
            descriptions={[
              "Team lead",
              "Landscape and prepare public venues"
            ]}
          />
          <ResumeSectionItem
            title="Customer Service Representative"
            date="January 2022 - August 2022"
            location="Salt Lake City, UT"
            locationHref="https://www.google.com/maps/place/Salt+Lake+City,+UT/@40.7607796,-111.8910474,13z/data=!3m1!4b1!4m6!3m5!1s0x874d9823f0835733:0x387840e06759776!8m2!3d40.7607796!4d-111.8910474!16zL20vMDEwZHQw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            organization="Regions | EnerBankUSA"
            organizationHref="https://www.enerbank.com/"
            descriptions={[
              "Assist customers with making payments",
              "Explain loan terms",
              "Calculate information about their payments"
            ]}
          />
          <ResumeSectionItem
            title="Programming Intern"
            date="June 2019 - August 2019"
            location="North Salt Lake, UT"
            locationHref="https://www.google.com/maps/place/North+Salt+Lake,+UT/@40.8443395,-111.919973,13z/data=!3m1!4b1!4m6!3m5!1s0x8752f71d7f60bc5b:0x72295629e1a2a90!8m2!3d40.8485564!4d-111.9068824!16zL20vMDEwZHQw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            organization="RSP Supply"
            organizationHref="https://www.rspsupply.com/"
            descriptions={[
              "Program Microsoft Excel spreadsheets with VBA",
            ]}        
          />
        </ResumeSection>
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 4}}>
        <ResumeSection title="Projects">
          <ResumeSectionItem
            title="Software Requirement Specification"
            organization="Weber State University"
            organizationHref="https://www.weber.edu/"
            date="October 2024 - December 2024"
            location="Ogden, UT"
            locationHref="https://www.google.com/maps/place/Ogden,+UT/@41.2230469,-111.9738406,13z/data=!3m1!4b1!4m6!3m5!1s0x87537c29f0270001:0x4262942b1280650!8m2!3d41.2230469!4d-111.9738406!16zL20vMDEwZHQw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            descriptions={["Team Lead", "Work remotely in team of 4",
              "Zoom meetings with client", "Prepare 60+ pages with"]}
          />
          <ResumeSectionItem
            title="This Website"
            organization="Personal"
            organizationHref="https://github.com/logannance/logannance.github.io"
            date="April 2025 - Current"
            descriptions={["GitHub Actions Automated Deployment", "React", "Typescript", "MUI", "Next.js", "Cursor"]}
          />
        </ResumeSection>
      </Grid>
    </Grid>
  );
}