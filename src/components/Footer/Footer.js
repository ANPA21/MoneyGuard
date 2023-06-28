import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FooterList, FooterSection, FooterText } from './Footer.styled';
export const Footer = () => {
  return (
    <FooterSection>
      <FooterText>Built by ANPA21</FooterText>
      <FooterList>
        <li>
          <a
            href="https://github.com/ANPA21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon color="icons" aria-label="Git Hub link" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anpa21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon color="icons" aria-label="LinkedIn link" />
          </a>
        </li>
      </FooterList>
    </FooterSection>
  );
};
