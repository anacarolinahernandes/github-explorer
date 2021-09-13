import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { RepositoryProps } from "../types";

import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/Rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem
            key={repository.repository.id}
            repository={repository.repository}
          />
        ))}
      </ul>
    </section>
  );
}
