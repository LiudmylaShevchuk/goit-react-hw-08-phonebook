import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import { Title, Text } from 'App.styled';
import { useAuth } from 'hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Title>Your phonebook</Title>
      {!isLoggedIn && (
        <Text>
          To use the phonebook, please <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
          <AuthItem to={'/login'}>Sign in</AuthItem>
        </Text>
      )}
    </>
  );
};