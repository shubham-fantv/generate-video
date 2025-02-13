import axiosInstance from "./axiosInterceptor";

const getAxiosInstance = (type) => {
  switch (type) {
    default:
      return axiosInstance;
  }
};

const fetcher = {
  /**
   * @function get Fetches a resource (GET request)
   * @param {string} url API endpoint
   * @param {object} config Optional Axios config
   * @param {string} axiosType Specify custom axios instance (default or others)
   * @returns {Promise} Axios response
   */
  get: async (url, config = {}, axiosType = "default", log = false) => {
    const instance = getAxiosInstance(axiosType);
    if (log) console.log(`GET request to ${url} with config: `, config);
    return instance
      .request({
        url,
        method: "GET",
        ...config,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },

  /**
   * @function post Creates a new resource (POST request)
   * @param {string} url API endpoint
   * @param {object} data Request body
   * @param {object} config Optional Axios config
   * @param {string} axiosType Specify custom axios instance (default or others)
   * @returns {Promise} Axios response
   */
  post: async (url, data, config = {}, axiosType = "default", log = false) => {
    const instance = getAxiosInstance(axiosType);
    if (log) console.log(`POST request to ${url} with data: `, data);
    return instance
      .request({
        url,
        method: "POST",
        data,
        ...config,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },

  /**
   * @function put Updates an existing resource (PUT request)
   * @param {string} url API endpoint
   * @param {object} data Request body
   * @param {object} config Optional Axios config
   * @param {string} axiosType Specify custom axios instance (default or others)
   * @returns {Promise} Axios response
   */
  put: async (url, data, config = {}, axiosType = "default", log = false) => {
    const instance = getAxiosInstance(axiosType);
    if (log) console.log(`PUT request to ${url} with data: `, data);
    return instance
      .request({
        url,
        method: "PUT",
        data,
        ...config,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },

  /**
   * @function patch Partially updates a resource (PATCH request)
   * @param {string} url API endpoint
   * @param {object} data Request body
   * @param {object} config Optional Axios config
   * @param {string} axiosType Specify custom axios instance (default or others)
   * @returns {Promise} Axios response
   */
  patch: async (url, data, config = {}, axiosType = "default", log = false) => {
    const instance = getAxiosInstance(axiosType);
    if (log) console.log(`PATCH request to ${url} with data: `, data);
    return instance
      .request({
        url,
        method: "PATCH",
        data,
        ...config,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },
  /**
   * @function delete Deletes a resource (DELETE request)
   * @param {string} url API endpoint
   * @param {object} config Optional Axios config
   * @param {string} axiosType Specify custom axios instance (default or others)
   * @returns {Promise} Axios response
   */
  delete: async (url, config = {}, axiosType = "default", log = false) => {
    const instance = getAxiosInstance(axiosType);
    if (log) console.log(`DELETE request to ${url}`);
    return instance
      .request({
        url,
        method: "DELETE",
        ...config,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },

  /**
   * @function upload Uploads files (PUT request for files)
   * @param {string} url API endpoint
   * @param {FormData} formData Files or data to be uploaded
   * @param {object} config Optional Axios config
   * @param {string} axiosType Specify custom axios instance (default or others)
   * @returns {Promise} Axios response
   */
  upload: async (
    url,
    formData,
    config = {},
    axiosType = "default",
    log = false
  ) => {
    const instance = getAxiosInstance(axiosType);
    if (log) console.log(`Uploading to ${url} with formData: `, formData);
    return instance
      .request({
        url,
        method: "PUT",
        data: formData,
        ...config,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default fetcher;
