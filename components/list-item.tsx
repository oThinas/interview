import Link from 'next/link';

interface ListItemProps {
  description: string;
  link: string;
}

export function ListItem(props: ListItemProps) {
  return (
    <div>
      <li>
        {props.description}


      </li>
      <Link href={props.link}>
        Resposta
      </Link>
    </div>
  );
}
