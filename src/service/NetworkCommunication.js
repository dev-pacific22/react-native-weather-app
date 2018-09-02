/**
 * Centralize server communication handler
 */
import axios from "axios";
/**
 * Handle all the get request in app.
 * @param {url} url endpoint to hit.
 * @param {params} params required for request.
 */
export const fetchRequest = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        // handle success
        resolve(response);
      })
      .catch(error => {
        // handle error
        reject(error.message);
        console.error(error);
      });
  });
};
