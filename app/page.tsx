import { ListItem } from '@/components/list-item';
import { QUESTIONS } from '@/config/questions';

export default function Home() {
  return (
    <main>
      <h2>
        Ciclos de vida
      </h2>

      <ul className="list-inside list-disc">
        <ListItem
          description={QUESTIONS.q1}
          link="/q1"
        />

        <ListItem
          description={QUESTIONS.q2}
          link="/q2"
        />
      </ul>

      <hr />

      <h2>
        Hooks
      </h2>

      <ul className="list-inside list-disc">
        <ListItem
          description={QUESTIONS.q3}
          link="/q3"
        />

        <ListItem
          description={QUESTIONS.q4}
          link="/q4"
        />

        <ListItem
          description={QUESTIONS.q5}
          link="/q5"
        />

        <ListItem
          description={QUESTIONS.q6}
          link="/q6"
        />

        <ListItem
          description={QUESTIONS.q7}
          link="/q7"
        />
      </ul>

      <hr />

      <h2>
        Gerenciamento de estados
      </h2>

      <ul className="list-inside list-disc">
        <ListItem
          description={QUESTIONS.q8}
          link="/q8"
        />
      </ul>

      <hr />

      <h2>
        Performance e otimização
      </h2>

      <ul className="list-inside list-disc">
        <ListItem
          description={QUESTIONS.q9}
          link="/q9"
        />

        <ListItem
          description={QUESTIONS.q10}
          link="/q10"
        />
      </ul>
    </main>
  );
}
