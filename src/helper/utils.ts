const convertDate = (timestamp: number) => {
  if (timestamp) {
    return new Date(timestamp).toDateString();
  }
  return '';
};

export { convertDate };
