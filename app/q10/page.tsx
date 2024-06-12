import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { useMemo } from 'react';
import { MyComponent } from './my-component';

export default function Page() {
  const items = useMemo(() => {
    return Array.from({ length: 10000 }, (_, index) => {
      return {
        id: index + 1,
        content: `Item ${index + 1}`,
      };
    });
  }, []);

  return (
    <div>
      <Header description={QUESTIONS.q10} />

      <p>
        A virtualização de listas é um técnica de otimização que conssite em renderizar apenas os itens visíveis na
        tela (viewport) e alguns itens adjacentes como buffer. À medida que o usuário rola a lista, os itens que saem
        do viewport são removidos e novos itens são renderizados para substituí-los.
      </p>

      <p>
        Essa técnica é crucial para lidar com listas grandes, pois evita a renderização de todos os itens de uma vez,
        o que pode causar lentidão e problemas de desempenho. Ao renderizar apenas os itens necessários, a virtualização
        de listas garante uma experiência de usuário mais fluida e responsiva.
      </p>

      <MyComponent items={items} />
    </div>
  );
}
