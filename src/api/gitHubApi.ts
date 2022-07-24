import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN
});

export const searchUsers = async (name: string) => {
  const { data } = await octokit.request('GET /search/users', { q: name });
  return data;
};

export const getUserRepos = async (name: string) => {
  const { data } = await octokit.request(`GET /users/${name}/repos`);
  return data;
};

export const getUserData = async (name: string) => {
  const { data } = await octokit.request(`GET /users/${name}`);
  return data;
};
