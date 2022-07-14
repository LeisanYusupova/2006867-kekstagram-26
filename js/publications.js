const pictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');
const fragment = document.createDocumentFragment();


function renderPublications(items) {
  items.forEach((item) => {
    const element = template.cloneNode(true);
    element.querySelector('.picture__img').src=item.url;
    element.querySelector('.picture__likes').textContent=item.likes;
    element.querySelector('.picture__comments').textContent = item.comments.length;
    element.dataset.id  =  item.id;
    fragment.appendChild(element);
  });
    pictures.appendChild(fragment);
    console.log(pictures);

};


export {pictures};
export {renderPublications};
