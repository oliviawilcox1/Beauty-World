import apiUrl from '../apiConfig';
import axios from 'axios';

// POST -> create function
export const createReview = (user, productId, newReview) => {
  return axios({
    url: `${apiUrl}/reviews/${productId}`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${user.token}`,
    },
    data: { review: newReview },
  });
};


// PATCH -> update function
export const updateReview = (user, productId, reviewId, updatedReview) => {
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
  return axios({
    url: `${apiUrl}/reviews/${productId}/${reviewId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${user.token}`,
    },
  });
};
