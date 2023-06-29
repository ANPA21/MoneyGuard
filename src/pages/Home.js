import {
  HPMediaText,
  HPMediaTitle,
  HomePageMedia,
  HomePageSection,
} from 'components/utils/Home.styled';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <HomePageSection>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomePageMedia>
        <HPMediaTitle>Welcome to your phonebook</HPMediaTitle>
        <HPMediaText>Keep your contacts safe with us</HPMediaText>
      </HomePageMedia>
    </HomePageSection>
  );
};
