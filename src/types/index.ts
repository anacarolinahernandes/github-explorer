export interface RepositoryProps {
  repository: {
    id?: number;
    name: string;
    description?: string;
    html_url: string;
  }
}
