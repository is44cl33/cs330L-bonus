import { useCallback, useState } from 'react';
import Modal from './Modal';

const cards = [
  {
    title: 'Limbus Company',
    text: 'Limbus Company follows thirteen sinners on a bus and their adventure to gather golden boughs in a dystopian place called "The City".',
    modalText: 'Limbus Company is available on Steam and mobile.',
    image: '/limbus.png',
  },
  {
    title: 'Destiny 2',
    text: 'Destiny 2 is an MMO looter shooter from the same developers of Halo which follows your guardian fighting various enemies from other planets.',
    modalText: 'This game is available on Steam, Xbox, and PlayStation.',
    image: '/destiny2.png',
  },
  {
    title: 'Mycopunk',
    text: 'Mycopunk is a multiplayer looter shooter where you work for a company to gather materials and level up your wepons with perks and materials.',
    modalText: 'This game is available on Steam.',
    image: '/mycopunk.png',
  },
];

function Card() {
  const [selectedCard, setSelectedCard] = useState(null);
  const closeModal = useCallback(() => setSelectedCard(null), []);

  return (
    <>
      <div
        className="card-group"
        style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
      >
        {cards.map((card, index) => (
          <div
            className="card bg-white text-dark"
            style={{ flex: '0 1 18rem', maxWidth: '18rem' }}
            key={index}
          >
            <img
              src={card.image}
              className="card-img-top"
              alt={`${card.title} placeholder cover art`}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
              <button
                className="btn btn-primary mt-2"
                type="button"
                onClick={() => setSelectedCard(card)}
              >
                Where to get it?
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedCard && (
        <Modal
          title={selectedCard.title}
          onClose={closeModal}
        >
          {selectedCard.modalText}
        </Modal>
      )}
    </>
  );
}

export default Card;