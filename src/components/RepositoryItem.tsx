import { RepositoryProps } from "../types";

export function RepositoryItem(props: RepositoryProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? 'Sem descrição'}</p>

      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}
