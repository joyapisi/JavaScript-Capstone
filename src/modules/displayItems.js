import itemsCounter from './counter.js';
import { likes, likesDisplay } from './likesCount.js';
import commentsPopup from './comments.js';
import AddComments from './fetchComments.js';
import displayComments from './displayComments.js';

const counter = document.getElementById('add-new-link');
const container = document.getElementById('smoothie-container');
const fetchData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=42');
    const data = await response.json();
    const myArray = data.results;
    const LoadMyArray = myArray.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      const myCard = document.createElement('div');
      myCard.classList = 'myCard';
      myCard.id = `${data.id}`;
      myCard.innerHTML = `<div class="cardContent">
    <img src="${data.sprites.front_default}" alt="${data.name}" class="cardImg">
    <div class="cardTitle">
    <h2>${data.name}</h2>
    </div>
    <div class="interation">
    <button class='likeBtn' id="likeBtn"><i class="fa-regular fa-thumbs-up"></i></button>
    <span class='likeCounter'>0</span>
    <button data-modal-target="#popup${data.id}" class="comments-btn" id='${data.id}'>Comments</button>
    </div>
    <dialog id='popup${data.id}' class='comments-popup'>
    <button data-close-button id='closeBtn' class='closeBtn' title ='closing button' type='button'>
     <a> &times;</a>
    </button>
    <img src="${data.sprites.front_default}" alt="${data.name}" id="popup-img">
    <div class="comments-topic">
      <h2>${data.name}</h2>
    </div>
    <div class="popup-content">
      <div class="contents">
        <div class="first-contents" >
        <p>Order: ${data.order}</p>
        <p>Weight: ${data.weight}</p>
        </div>
        <div class="second-contents">       
          <p>Height: ${data.height}</p>
          <p>Base experience: ${data.base_experience}</p>
        </div>
      </div>
      <div class="comments-display" id="comments-display">
      <h3 class="comments-number" id="comments-number">Comments (0)</h3>
      <div class="commentsList" id="commentsList">
      </div>
    <div id = "add-comments">
      <form id = 'comments-form' action = '' class = 'form'>
      <h4>Add a comment</h4> 
        <input id="name" class = "name" type="text" placeholder="Your Name" required/>
        <textarea id="textarea" class = "textarea" name="your-insights" placeholder="your-insights"></textarea>
        <button class="submit" id="submit" type="button">Comment</button>
      </form>
    </div>
  </div> 
  </dialog>
    `;
      container.appendChild(myCard);
    });
    await Promise.all(LoadMyArray);
    likes();
    likesDisplay();
    commentsPopup();
    displayComments();
    AddComments();
    itemsCounter(myArray.length, counter);
  } catch (error) {
    const errorMessage = 'Error, try again later.';
    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    document.body.appendChild(errorElement);
  }
};
export default fetchData;