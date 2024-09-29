import React from 'react';
import './reset.css';
import './style.css';
import './header.css';
import './character-ratings.css';
import './character-cards.css';

const characterData = [
  { name: 'Alphonse Elric', skills: 'Being Loveable, Alchemy', votes: 110 },
  { name: 'Edward Elric', skills: 'Alchemy, Human Transmutation', votes: 100 },
  { name: 'Hawkeye', skills: 'Sniper, Loyal AF', votes: 95 },
  { name: 'Mj. Armstrong', skills: 'Alchemy, Muscles', votes: 94 },
  { name: 'Nina', skills: 'Loving Dogs, Being Adorable', votes: 93 },
];

const cardsData = [
  {
    name: 'Alex Louis Armstrong',
    nickname: 'Major Armstrong',
    imgUrl: 'https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg',
    description: 'Major Armstrong may look big and strong, but deep down he’s the biggest sap in the entire show.',
  },
  {
    name: 'Alphonse Elric',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg',
    description: 'Alphonse is a walking suit of armor on a quest to find his real body.',
  },
  {
    name: 'Edward Elric',
    nickname: 'The Fullmetal Alchemist',
    imgUrl: 'https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png',
    description: 'Edward is a master alchemist and our main character... just don’t call him short!',
  },
  {
    name: 'Greed',
    imgUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg',
    description: 'Greed is one of the seven deadly sins Homunculi. He’s the most “on our side” of all of them.',
  },
  {
    name: 'Nina Tucker',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dK-tXCnVxbSeSJuCKmiX0zUbnCEV1ss54DeOYgXUHSE0WB23TAUD4a3itwFbzJ9fkg&usqp=CAU',
    description: 'Nina is an adorable little girl! If you’ve watched FMA, you know...',
  },
];

const CharacterCard = ({ name, nickname, imgUrl, description }) => (
  <div className="card">
    <div className="card-titles">
      <h3>{name}</h3>
      {nickname && <h4>{nickname}</h4>}
    </div>
    <img src={imgUrl} alt={name} />
    <p>{description}</p>
  </div>
);

const App = () => (
  <>
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        <li>About Us</li>
        <li>Info</li>
        <li>Support Us</li>
      </nav>
    </header>

    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {characterData.map((char, index) => (
            <tr key={char.name} className={index % 2 === 0 ? 'dark' : 'light'}>
              <td>{char.name}</td>
              <td>{char.skills}</td>
              <td>{char.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    <section id="character-cards">
      {cardsData.map((card) => (
        <CharacterCard key={card.name} {...card} />
      ))}
    </section>
  </>
);

export default App;