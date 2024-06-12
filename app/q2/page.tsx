import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { ParentComponent } from './parent-component';

export default function Page() {
  return (
    <div>
      <Header description={QUESTIONS.q2} />

      <p>
        Utilizando a ferramenta de desenvolvimento do React (React Dev Tools) para visualizar a árvore de componentes e
        identificar quais estão sendo renderizados a cada atualização. Ativando o modo &quot;Highlight Updates&quot; para
        visualizar os componentes que estão sendo re-renderizados.
      </p>

      <ParentComponent />
    </div>
  );
}
