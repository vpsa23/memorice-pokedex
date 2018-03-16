import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClass';

const NUMBER_OF_CARDS = 10;

export default () => {
  //console.log(FontAwesomeClasses);
  const fontAwesomeClass = FontAwesomeClasses();
  let cards = [];

  while (cards.length < NUMBER_OF_CARDS) {
    const index = Math.floor(Math.random() * fontAwesomeClass.length);
    const card = {
      icon: fontAwesomeClass.splice(index, 1)[0],
      adivination: false
    };

    cards.push(card);
    cards.push({...card});
  }

  return shuffle(card);
