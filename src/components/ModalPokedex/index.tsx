import React from 'react';
import './styles.scss';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from 'react-bootstrap/Modal';
import { removeFavorite } from '../../store/ducks/favorites/actions';
import { useSnackbar } from 'notistack';
import { Pokemon } from '../../services/types';

// props received to active modal
interface ModalProps {
  value: boolean;
  handleClose(): any;
}

const ModalPokedex: React.FC<ModalProps> = props => {
  const { enqueueSnackbar } = useSnackbar();

  //selector to get favorites from redux state
  const favorites: any = useSelector(
    (state: RootStateOrAny) => state.favorites,
  );
  const dispatch = useDispatch();

  return (
    <Modal show={props.value} onHide={props.handleClose} centered>
      <Modal.Header className="text-center" closeButton>
        <Modal.Title style={{ color: 'white' }}>My Pokedex</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-content">
        <ul>
          {favorites.favorites.map((favoriteItem: Pokemon) => (
            <li>
              <div className="pokemon-container">
                <div className="sprite-container">
                  <Button
                    onClick={() => {
                      dispatch(removeFavorite(Number(favoriteItem.id)));
                      enqueueSnackbar('Pokemon withdrawn from your Pokedex!', {
                        variant: 'success',
                      });
                    }}
                    style={{
                      marginTop: '5px',
                      marginRight: '5px',
                      padding: 0,
                      boxShadow: 'none',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '10%',
                    }}
                    id="ir"
                    variant="danger"
                    type="submit"
                  >
                    <DeleteIcon style={{ fontSize: 18 }} />
                  </Button>

                  <img src={favoriteItem?.sprite} alt="pokemon-sprite" />
                </div>
                <Row className="row-id">
                  <div>
                    <img
                      className="img-id"
                      src="https://www.pngkit.com/png/full/19-190666_pokeball-graphic-by-maratuna-on-deviantart-banner-free.png"
                      alt="pokeball"
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
    </Modal>
  );
};

export default ModalPokedex;
