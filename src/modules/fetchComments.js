import commentsCounter from './commentsCounter.js';

const InvolvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bTEn2aJ1AxwKWzc1t6qt/comments';

const AddComments = async () => {
  /* Selecting the cards */
  const cardContainers = document.querySelectorAll('.myCard');
  cardContainers.forEach((card) => {
    /* Selecting cards components (btns - title) */
    const modal = card.querySelectorAll('.submit');
    const commentsCount = card.querySelectorAll('.comments-number');
    modal.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        const commentForm = card.querySelectorAll('.form');
        /* Getting the values from the form */
        commentForm.forEach(async (form) => {
          const data = {
            item_id: `${card.id}`,
            username: form.querySelector('#name').value,
            comment: form.querySelector('#textarea').value,
          };
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow',
          };
          await fetch(InvolvementApi, requestOptions);
          /* Reset the form */
          form.querySelector('#name').value = '';
          form.querySelector('#textarea').value = '';
          /* Reload comments */
          const res = await fetch(`${InvolvementApi}?item_id=${card.id}`);
          const comments = await res.json();
          const commentCounter = comments.length;
          const div = card.querySelector('.commentsList');
          div.innerHTML = '';
          comments.forEach((comment) => {
            const li = document.createElement('li');
            li.innerHTML = `${comment.creation_date} ${comment.username}: "${comment.comment}"`;
            div.appendChild(li);
          });
          commentsCount.forEach((count) => {
            if (commentCounter > 0) {
              commentsCounter(commentCounter, count);
            }
          });
        });
      });
    });
  });
};

export default AddComments;