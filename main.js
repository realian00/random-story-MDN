// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let storyText = `It was 94 fahrenheit outside, so :insertx: 
went for a walk. When they got to :inserty:, 
they stared in horror for a few moments, then :insertz:. 
Bob saw the whole thing, but was not surprised — :insertx: 
weighs 300 pounds, and it was a hot day.`

  storyText = storyText.replace(/:insertx:/g, randomValueFromArray(insertX))
  storyText = storyText.replace(':inserty:', randomValueFromArray(insertY))
  storyText = storyText.replace(':insertz:', randomValueFromArray(insertZ))

  if (customName.value !== '') {
    let name = customName.value;
    storyText = storyText.replace('Bob', name)

  }

  if (document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature = Math.round((94 - 32) * 5 / 9) + ' celsius';

    storyText = storyText.replace('300 pounds', weight)
    storyText = storyText.replace('94 fahrenheit', temperature)
  }

  story.textContent = storyText;
  story.style.visibility = 'visible';
}