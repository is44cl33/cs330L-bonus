import { useCallback, useState } from 'react';
import Modal from './Modal';

function Card() {
  const [selectedCard, setSelectedCard] = useState(null);
  const closeModal = useCallback(() => setSelectedCard(null), []);

  return (
    <>
      <div
        className="card-group"
        style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
      >
        <div className="card bg-white text-dark" style={{ flex: '0 1 18rem', maxWidth: '18rem' }}>
          <img src="/limbus.png" className="card-img-top" alt="Limbus Company cover art" />
          <div className="card-body">
            <h5 className="card-title">Limbus Company</h5>
            <p className="card-text">
              Limbus Company is a turn-based RPG that follows thirteen sinners on a bus and their adventure to gather
              golden boughs in a dystopian place called "The City". Command your sinners strategically to defeat powerful
              "abnormialities" and discover the secrets of the City.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
            <button
              className="btn btn-primary mt-2"
              type="button"
              onClick={() =>
                setSelectedCard({
                  title: 'Limbus Company',
                  modalText: 'Limbus Company is available on Steam and mobile.',
                })
              }
            >
              Where to get it?
            </button>
          </div>
        </div>

        <div className="card bg-white text-dark" style={{ flex: '0 1 18rem', maxWidth: '18rem' }}>
          <img src="/destiny2.png" className="card-img-top" alt="Destiny 2 cover art" />
          <div className="card-body">
            <h5 className="card-title">Destiny 2</h5>
            <p className="card-text">
              Destiny 2 is an MMO looter shooter from the same developers of Halo which follows
              your guardian fighting against and with various races from other planets, wielding light, a gift from the Traveler as well as your ghost to revive you.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
            <button
              className="btn btn-primary mt-2"
              type="button"
              onClick={() =>
                setSelectedCard({
                  title: 'Destiny 2',
                  modalText: 'This game is available on Steam, Xbox, and PlayStation.',
                })
              }
            >
              Where to get it?
            </button>
          </div>
        </div>

        <div className="card bg-white text-dark" style={{ flex: '0 1 18rem', maxWidth: '18rem' }}>
          <img src="/mycopunk.png" className="card-img-top" alt="Mycopunk cover art" />
          <div className="card-body">
            <h5 className="card-title">Mycopunk</h5>
            <p className="card-text">
              Mycopunk is a multiplayer looter shooter where you work for a company to gather
              materials and level up your wepons with perks and materials.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
            <button
              className="btn btn-primary mt-2"
              type="button"
              onClick={() =>
                setSelectedCard({
                  title: 'Mycopunk',
                  modalText: 'This game is available on Steam.',
                })
              }
            >
              Where to get it?
            </button>
          </div>
        </div>
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