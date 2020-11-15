import WsServer from './wsServer';
import Game from './game';
import Field from './field';
import FoodGenerator from './foodGenerator';
import {FIELD_HEIGHT, FIELD_WIDTH, ZONES_COUNT} from '../shared/constants';

const server = new WsServer();
server.startListening();

const field = new Field(FIELD_HEIGHT, FIELD_WIDTH, ZONES_COUNT, ZONES_COUNT);
const foodGenerator = new FoodGenerator(field, 500, 500);
const game = new Game(field, server, foodGenerator);

game.start();


