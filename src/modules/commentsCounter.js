const commentsCounter = (counter, link) => {
  link.innerHTML = `Comments (${counter})`;
  return counter;
};

export default commentsCounter;