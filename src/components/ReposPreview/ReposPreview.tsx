import { ReposType } from '../../types/repo';
import './ReposPreview.scss';

type ReposPropsType = {
  repo: ReposType;
}

export const ReposPreview = ({
                               repo: {
                                 name,
                                 forks_count,
                                 stargazers_count,
                                 html_url
                               }
                             }: ReposPropsType): JSX.Element => {
  return <a className="ReposPreview" href={html_url}>
    <h3>{name}</h3>
    <div>
      <p>{forks_count} Forks</p>
      <p>{stargazers_count} Stars</p>
    </div>
  </a>;
};
