import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { Login } from './login';
import { Profile } from './profile';
import { UserProvider } from './user-context';

export default function Page() {
  return (
    <div>
      <Header description={QUESTIONS.q4} />

      <UserProvider>
        <Login />

        <Profile />
      </UserProvider>
    </div>
  );
}
