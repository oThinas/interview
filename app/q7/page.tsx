import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';

export default function Page() {
  return (
    <div>
      <Header description={QUESTIONS.q7} />

      <p>
        Ver a pasta __test__ e rodar &quot;npm run test&quot; para a solução
      </p>
    </div>
  );
}
