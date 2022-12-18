// // Створити функцію generateCrad, яка буде приймати об'єкт з наступною стурктурою
// {
//     title: "Title 1",
//     imageUrl: "Some url",
//     description: "Eu ut non sint ullamco minim anim laboris sit nulla."
//    }

//    <div class="card">
//    <h4>Title 1</h4>
//    <br>
//    <img src="Some url" alt="alternative text was not provided">
//    <p>
//     Eu ut non sint ullamco minim anim laboris sit nulla.
//    </p>
//    </div> 

const card = {
    title: "Title",
    imageUrl: "https://i.kym-cdn.com/photos/images/original/002/137/503/9c9.png",
    description: "description"
};

let generateCrad = (card) => {
    const elem = document.createElement('elem');
    elem.setAttribute('id', 'card')

    const title = document.createElement('h4');
    title.innerText = card.title;
    elem.appendChild(title);

    const br = document.createElement('br');
    elem.appendChild(br);

    const image = document.createElement('img');
    image.src = card.imageUrl;
    elem.appendChild(image);

    const description = document.createElement('p');
    description.innerText = card.description;
    elem.appendChild(description);

    let cards = document.getElementById('cards');
    cards.appendChild(elem);
}

generateCrad(card);
