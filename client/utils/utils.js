const isInteger = (value) => {
  if (!value || isNaN(value) || !Number.isInteger(Number(value))) {
    return false;
  }
  return true;
};

export { isInteger };
