import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { AppProviders } from './app-provider';
import { Login } from './login';
import { Profile } from './profile';

export default function Page() {
  return (
    <div>
      <Header description={QUESTIONS.q5} />

      <AppProviders>
        <Login />

        <Profile />
      </AppProviders>
    </div>
  );
}
