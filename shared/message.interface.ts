export enum ClientMessageType {
  CHANGE_DIRECTION = 'change_direction',
  START_GAME = 'start_game',
}

export enum ServerMessageType {
  UPDATE_FIELD = 'update_field',
  FINISH_ROUND = 'finish_round',
  START_NEW_ROUND = 'start_new_round',
  GAME_OVER = 'game_over',
  NEW_FOOD = 'new_food',
}

export interface BaseMessage<T, D = any> {
  type: T,
  data: D
}

export type ClientMessage<D = any> = BaseMessage<ClientMessageType, D>
export type ServerMessage<D = any> = BaseMessage<ServerMessageType, D>

export type Message<D = any> = ClientMessage<D> | ServerMessage<D>
