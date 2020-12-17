import React, { useState, useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
//importações
import './styles.scss';
import './types.scss';
import logo from '../../images/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Pokemon } from '../../services/types';
import Row from 'react-bootstrap/Row';
import { useSnackbar } from 'notistack';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

//interfaces

interface Neighborhoods {
  zone: number;
  neighborhood: any;
}

interface Neighborhood {
  id: number;
  name: string;
  location: [number, number];
}

interface User {
  id: string;
  token: string;
  name: string;
  email: string;
  password: string;
}

const SearchPage: React.FC = () => {
  //selector para pegar informações do usuário logado
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);
  //declarações de constantes
  const [ModalChoice, setModalChoice] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<any>();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchText, setSearchText] = useState('');
  const [zone, setZone] = useState(0);
  const [neighborhoodId, setNeighborhoodId] = useState(0);
  const [choice, setChoice] = useState<string>('');
  const [modalLogin, setModalLogin] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    //$("#trump").css("transition", "border 0.1s linear");
    axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
      console.log(response.data.results);
    });
  }, []);

  const search = async () => {
    const formattedText = searchText.toLowerCase().trim();
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${formattedText}`,
    );

    if (response.data.id !== '') {
      console.log('setei');
      setPokemon({
        id: response.data.id !== undefined ? response.data.id : '',
        name: response.data.name !== undefined ? response.data.name : '',
        height: response.data.height !== undefined ? response.data.height : '',
        weight: response.data.weight !== undefined ? response.data.weight : '',
        sprite:
          response.data.sprites.front_default !== undefined
            ? response.data.sprites.front_default
            : '',
        type: response.data.types !== undefined ? response.data.types : '',
      });
    }
    console.log(pokemon);
    //setstuff();
  };

  //handleClose para modais
  const handleClose = () => {
    setModalChoice(false);
  };
  const handleLogin = () => {
    setModalLogin(false);
  };

  return (
    <div id="background">
      <div className={showMap ? 'search active' : 'search'}>
        <img className="logo" src={logo} />
        <a>Pokefinder</a>

        <div className="d-flex">
          <div>
            <Form.Group className="form-search">
              <Form.Control
                className="form-control form-control-lg"
                placeholder="Type a pokemon name"
                onChange={(e: any) => {
                  setSearchText(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className="ml-3">
            <Button
              onClick={() => search()}
              style={{ boxShadow: 'none' }}
              id="ir"
              className="btn-lg pb-4"
              variant="primary"
              type="submit"
            >
              <SearchIcon style={{ fontSize: 28 }} />
            </Button>
          </div>
        </div>
      </div>

      {pokemon && (
        <div
          className="d-flex"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="pokemon-container">
            <img src={pokemon?.sprite} />

            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <img
                  src="https://icon-library.com/images/pokeball-icon-png/pokeball-icon-png-12.jpg"
                  style={{ width: '20px', height: '20px' }}
                />
                <span>{pokemon.id}</span>
              </div>
              <h3>{pokemon.name}</h3>
            </Row>

            <Row style={{ height: '30px', justifyContent: 'center' }}>
              {pokemon.type.map(typeIndex => (
                <div className={`${typeIndex.type.name}`}>
                  <span>{typeIndex.type.name}</span>
                </div>
              ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
