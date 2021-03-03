const isEvenNumber = (value) => {
  if (value && !isNaN(value) && parseInt(value) % 2 == 0) {
    return true;
  }
  return false;
};

module.exports = {
  isEvenNumber: isEvenNumber,
};
