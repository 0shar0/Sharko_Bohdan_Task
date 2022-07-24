import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: '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'
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
