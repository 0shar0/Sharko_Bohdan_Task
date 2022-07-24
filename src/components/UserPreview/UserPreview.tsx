import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserRepos } from '../../api/gitHubApi';
import { selectRepos, setRepos } from '../../model/repos/reposReducer';
import { UserType } from '../../types/user';
import './UserPreview.scss';

type UserPreviewPropsType = {
  user: UserType
}

export const UserPreview = ({ user }: UserPreviewPropsType): JSX.Element => {
  const { avatar_url, login } = user;
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const [userRepos] = useState(repos[login]);
  const [reposLength, setReposLength] = useState();


  useEffect(() => {
    if (!userRepos) {
      getUserRepos(login).then((response) => {
        setReposLength(response.length);
        dispatch(setRepos({ login, repos: response }));
      });
    } else {
      setReposLength(userRepos.length);
    }
  }, []);

  return <Link to={`/user/${login}`} className="UserPreview">
    <img alt={login} src={avatar_url} />
    <h2>{login}</h2>
    <p>Repo:{reposLength}</p>
  </Link>;
};
