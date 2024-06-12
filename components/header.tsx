import Link from 'next/link';

interface HeaderProps {
  description: string;
}

export function Header(props: HeaderProps) {
  return (
    <header>
      <h1>
        {props.description}
      </h1>

      <Link href="/">
        Voltar para home
      </Link>

      <hr />
    </header>
  );
}
