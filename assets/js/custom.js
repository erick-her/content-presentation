var data = [
  {
    id: '1',
    title: 'Front End Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maiores recusandae debitis voluptatum et culpa ipsa consequuntur fugit libero, harum, reiciendis dicta, voluptatibus magnam atque aperiam! Quibusdam vero eaque placeat!',
    color: '#00b8d4'
  },
  {
    id: '2',
    title: 'Back End Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloremque suscipit natus est accusantium, voluptates amet explicabo, debitis tenetur, repudiandae qui dolorem rem ratione voluptatem magni? Rem, repudiandae magni vero?',
    color: '#69f0ae'
  },
  {
    id: '3',
    title: 'Full Stack Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sapiente aspernatur in saepe quod reprehenderit animi voluptates iusto, amet debitis, magni odit culpa maxime necessitatibus incidunt ratione accusantium harum nulla?',
    color: '#ff9100 '
  },
  {
    id: '4',
    title: 'Database Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laudantium ex similique voluptas accusantium natus illo, non distinctio explicabo, assumenda debitis, sint hic! Odio molestias magni sint, sapiente quam perferendis?',
    color: '#f50057'
  },
  {
    id: '5',
    title: 'Python Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, reprehenderit ex, enim voluptatibus numquam perferendis perspiciatis alias velit facere consectetur magni vitae sapiente sequi consequuntur ab cumque dignissimos mollitia voluptates.',
    color: '#7c4dff'
  }
];

var current;
var card = document.getElementById('content');

/**
* Load content function.
*@param index current content index to be displayed
**/
function load(index){
  // Get each element by id
  var badge = document.getElementById('badge');
  var title = document.getElementById('title');
  var description = document.getElementById('description');

  // Display info from data object
  badge.innerHTML = '['+ data[index].id + '/' + data.length + ']';
  title.innerHTML = data[index].title;
  description.innerHTML = data[index].description;
  card.style.backgroundColor = data[index].color;

  // Store in current
  current = index;
}

/**
* Initialize function.
**/
function init(){
  load(0);
}

window.onload=init;
