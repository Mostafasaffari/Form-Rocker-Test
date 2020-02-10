const handleApiError = (err: any) => {
  if (err && err.response && err.response.status) {
    throw new Error(err.response.data.error); // it depends on your api response
  }
  throw new Error(
    "Oops! Somting went wrong! Please contact to our support team!"
  );
};

export default handleApiError;
