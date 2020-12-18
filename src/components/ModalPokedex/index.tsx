import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { removeFavorite } from '../../store/ducks/favorites/actions';

// import { Container } from './styles';
interface ModalProps {
  value: boolean;
  handleClose(): any;
}

const ModalPokedex: React.FC<ModalProps> = props => {
  const favorites: any = useSelector(
    (state: RootStateOrAny) => state.favorites,
  );
  const dispatch = useDispatch();
  console.log(favorites);
  return (
    <Modal show={props.value} onHide={props.handleClose} centered>
      <Modal.Header className="text-center" closeButton>
        <Modal.Title>My Pokedex</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-content">
        <ul>
          {favorites.favorites.map((favoriteItem: any) => (
            <li>
              <div id="penis" className="pokemon-container">
                <div className="sprite-container">
                  <img src={favoriteItem?.sprite} />
                </div>
                <Row className="row-id">
                  <div>
                    <img
                      className="img-id"
                      src="https://www.pngkit.com/png/full/19-190666_pokeball-graphic-by-maratuna-on-deviantart-banner-free.png"
                    />
                    <span>{favoriteItem.id}</span>
                  </div>

                  <h3>{favoriteItem.name.toLocaleUpperCase()}</h3>
                </Row>
                <Row style={{ height: '30px', justifyContent: 'center' }}>
                  {favoriteItem.type.map(
                    (typeIndex: { type: { name: React.ReactNode } }) => (
                      <div className={`${typeIndex.type.name}`}>
                        <span>{typeIndex.type.name}</span>
                      </div>
                    ),
                  )}
                </Row>
                <div className="stats">
                  <div>
                    <span>attack</span>
                    <h2>{favoriteItem.attack}</h2>
                  </div>
                  <div>
                    <span>hp</span>
                    <h1>{favoriteItem.hp}</h1>
                  </div>
                  <div>
                    <span>defense</span>
                    <h2>{favoriteItem.defense}</h2>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => dispatch(removeFavorite(3))}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPokedex;
