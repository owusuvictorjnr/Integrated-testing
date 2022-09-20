const { fetchData } = require('./fetchData');

describe('Testing Post', () => {
  it('Should create a new post', async () => {
    const posts = await fetchData('posts');
    expect(posts.length).toBe(100);
  });

  it('Should contain ID of 3', async () => {
    const posts = await fetchData('posts');

    expect(posts).toContainEqual({
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    });
  });
});
