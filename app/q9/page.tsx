import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';

export default function Page() {
  return (
    <div>
      <Header description={QUESTIONS.q9} />

      <p>
        Tanto o React.memo quanto o useMemo são ferramentas importantes para otimizar o desempenho de aplicações React,
        evitando renderizações desnecessárias de componentes e cálculos repetitivos.
      </p>

      <h2>
        React.memo
      </h2>

      <p>
        É um Higher Order Component (HOC) que envolve um componente React e evita sua re-renderização se as props não
        tiverem mudado. Funciona através de uma comparação superficial (shallow comparison) das props.
      </p>

      <p>
        Exemplo:
      </p>

      <pre >
        {`
          export const MyComponent = React.memo((props: Props) => {
            // lógica do componente
          });

          MyComponent.displayName = 'MyComponent';
        `}
      </pre>

      <hr />

      <h2>
        useMemo
      </h2>

      <p>
        É um hook que permite memorizar o resultado de um cálculo entre renderizações. Ele recebe uma função de cálculo
        e um array de dependências.
      </p>

      <p>
        Exemplo:
      </p>

      <pre>
        {`
          function MyComponent(props: Props) {
            const processedData = useMemo(() => {
              // lógica de processamento de dados
            }, [props]);

            return (
              // exibição do componente
            );
          }
        `}
      </pre>
    </div>
  );
}
