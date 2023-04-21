const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bTEn2aJ1AxwKWzc1t6qt/likes';

const likesDisplay = async () => {
  const likeBtns = document.querySelectorAll('.likeBtn');
  const likesCounter = document.querySelectorAll('.likeCounter');
  const cards = document.querySelectorAll('.myCard');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      likesCounter[index].innerHTML = Number(likesCounter[index].innerHTML) + 1;
      await fetch(involvementApi, {
        method: 'POST',
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};
const likes = async () => {
  const likeCount = document.querySelectorAll('.likeCounter');
  const cards = document.querySelectorAll('.myCard');
  await fetch(involvementApi)
    .then((response) => response.json())
    .then((data) => {
      const cardsArray = Array.from(cards);
      cardsArray.forEach((myCard, index) => {
        data.map((item) => {
          if (item.item_id === myCard.id) {
            likeCount[index].innerHTML = item.likes;
          }
          return likeCount[index].innerHTML;
        });
      });
    });
};

export { likes, likesDisplay };