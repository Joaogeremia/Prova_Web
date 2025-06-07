const API_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Busca a lista de todos os posts.
 * @returns {Promise<any>}
 */
export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Falha ao buscar os posts.');
  }
  return response.json();
};

/**
 * Busca os detalhes de um post específico pelo seu ID.
 * @param {string | number} id - O ID do post.
 * @returns {Promise<any>}
 */
export const getPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Falha ao buscar os detalhes do post.');
  }
  return response.json();
};
