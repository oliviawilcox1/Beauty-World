import apiUrl from '../apiConfig';
import axios from 'axios';

// POST -> create function
export const createReview = (user, productId, newReview) => {
  console.log('user', user);
  console.log('this is newProduct', newReview);
  return axios({
    url: `${apiUrl}/reviews/${productId}`,
    method: 'POST',
    data: { review: newReview },
  });
};

// PATCH -> update function
export const updateReview = (user, productId, reviewId, updatedReview) => {
  console.log('user', user);
  console.log('this is newProduct', updatedReview);
  return axios({
    url: `${apiUrl}/reviews/${productId}/${reviewId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${user.token}`,
    },
    data: { review: updatedReview },
  });
};

// DELETE -> remove function
export const deleteReview = (user, productId, reviewId) => {
  console.log('user', user);
  return axios({
    url: `${apiUrl}/reviews/${productId}/${reviewId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${user.token}`,
    },
  });
};
