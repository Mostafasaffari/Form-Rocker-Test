export const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
export const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{8,}/;

export const removeLastSlashFromUrl = (url: string) => {
  return url.replace(/\/$/, "");
};
