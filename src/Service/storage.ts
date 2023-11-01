export const read = (key: string) => {
  const data = localStorage.getItem(key);
  return data;
};

export const readObj = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
};

export const write = (key: string, value: string | object) => {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

export const clear = (key: string) => localStorage.removeItem(key);

export const clearAll = () => localStorage.clear();
