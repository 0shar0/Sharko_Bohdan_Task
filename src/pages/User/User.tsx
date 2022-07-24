import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserData, getUserRepos } from '../../api/gitHubApi';
import { Loader } from '../../components/Loader/Loader';
import { ReposPreview } from '../../components/ReposPreview/ReposPreview';
import { SearchBar } from '../../components/SerachBar/SearchBar';
import './User.scss';
import { selectRepos } from '../../model/repos/reposReducer';
import { selectUser, setUser } from '../../model/user/userReducer';
import { ReposType } from '../../types/repo';

export default (): JSX.Element => {
  const dispatch = useDispatch();
  const { userLogin } = useParams();
  const repos = useSelector(selectRepos);
  const [userRepos, setUserRepos] = useState<ReposType[]>(repos[userLogin as string]);
  const [filteredRepos, setFilteredRepos] = useState<ReposType[]>();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const reformatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}.${month}.${year}`;
  };

  const onSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const searchName = target.value.trim();
    if (searchName) {
      setFilteredRepos(userRepos.filter(({ name }) => name.toLowerCase().includes(searchName.toLowerCase())));
    } else {
      setFilteredRepos(userRepos);
    }
  };

  useEffect(() => {
    if (user.login !== userLogin) {
      dispatch(setUser(null));
      getUserData(userLogin as string).then(userData => dispatch(setUser(userData))).catch(() => {
        navigate('/404');
      });
    }
    if (!userRepos) {
      getUserRepos(userLogin as string).then(userRepos => {
        setUserRepos(userRepos);
      });
    }
  }, []);

  useEffect(() => {
    setFilteredRepos(userRepos);
  }, [userRepos]);

  return user && userRepos ? <div className="UserPage">
    <div className="InfoContainer">
      <img alt={user.login} src={user.avatar_url} />
      <div>
        <h2>{user.name || user.login}</h2>
        {user.email && <p>{user.email}</p>}
        {user.location && <p>{user.location}</p>}
        {user.created_at && <p>{reformatDate(new Date(user.created_at))}</p>}
        {user.followers && <p>{user.followers} Followers</p>}
        {user.following && <p>Following {user.following}</p>}
      </div>
    </div>
    {user.bio && <p className="UserBIo">{user.bio}</p>}
    <SearchBar onChangeHandler={onSearch} placeholder="Search for User`s Repositories" />
    {filteredRepos?.map(repo => <ReposPreview key={repo.id} repo={repo} />)}
  </div> : <div><Loader /></div>;
};
