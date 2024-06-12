import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { MyComponent } from './my-component';

export default function Page() {
  return (
    <div>
      <Header description={QUESTIONS.q6} />

      <MyComponent />
    </div>
  );
}
