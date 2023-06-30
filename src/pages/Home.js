import {
  HPMediaText,
  HPMediaTitle,
  HomePageMedia,
  HomePageSection,
} from 'components/utils/Home.styled';
import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HomePageSection isLoggedIn={isLoggedIn}>
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
