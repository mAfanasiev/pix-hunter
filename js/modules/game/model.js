import {INITIAL_GAME, GAME_ROUNDS, times} from '../../data/gameParams';
import {TASKS} from '../../data/structure';
import createTimer from '../../data/timer';

export default class GameModel {
  constructor(playerName) {
    this._playerName = playerName;
  }

  get state() {
    return this._state;
  }

  init() {
    this._state = Object.assign({}, INITIAL_GAME, {
      tasks: [...TASKS]
    });
  }

  nextTask() {
    this._state = Object.assign({}, this._state, {
      task: this._state.tasks.pop()
    });
    this._resetTime();
    this._timer = createTimer(this._state.time);
  }

  addAnswer(answer) {
    this._state = Object.assign({}, this._state, {
      answers: [...this._state.answers, {isCorrect: answer, time: times.start - this._state.time}]
    });
  }

  die() {
    const lives = this._state.lives - 1;

    this._state = Object.assign({}, this._state, {
      lives
    });
  }

  canContinue() {
    const {lives, answers} = this._state;
    return (lives > -1) && answers.length < GAME_ROUNDS;
  }

  tick() {
    const result = this._timer.tick();

    this._state = Object.assign({}, this._state, {
      time: result.time
    });

    return result;
  }

  _resetTime() {
    this._state = Object.assign({}, this._state, {
      time: times.start
    });
  }
}