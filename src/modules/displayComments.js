import commentsCounter from './commentsCounter.js';

const InvolvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bTEn2aJ1AxwKWzc1t6qt/comments';
const displayComments = async () => {
  const cardContainers = document.querySelectorAll('.myCard');
  cardContainers.forEach((card) => {
    const commentsCount = card.querySelectorAll('.comments-number');
    const modal = card.querySelectorAll('[data-modal-target]');
    modal.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          const res = await fetch(`${InvolvementApi}?item_id=${btn.id}`);
          const data = await res.json();
          const commentCounter = data.length;
          const div = card.querySelector('.commentsList');
          div.innerHTML = '';
          data.forEach((comment) => {
            const li = document.createElement('li');
            li.innerHTML = `${comment.creation_date} ${comment.username}: "${comment.comment}"`;
            div.appendChild(li);
          });
          commentsCount.forEach((count) => {
            if (commentCounter > 0) {
              commentsCounter(commentCounter, count);
            }
          });
          return true;
        } catch (error) {
          return error;
        }
      });
    });
  });
};

export default displayComments;