type DirectionType = 'up' | 'down' | 'left' | 'right';
type TurnType = "left" | "right" | "straight";
export type TurnChars = 'v' | '^' | '<' | '>';
export type RoadChars = '\\' | '/' | '+';

export class Car {
  removed: boolean;
  x: number;
  y: number;
  direction: DirectionType;
  generator: Generator<TurnType>;
  getNextTurn: () => TurnType;
  go: (char: RoadChars) => void;
  getNextCoord: () => [number, number];
  constructor(x: number, y: number, char: TurnChars) {
    this.removed = false;
    this.x = x;
    this.y = y;
    this.getNextCoord = () => [0, 0];
    this.go = this.goUp;
    this.direction = Car.symbolToDirection(char);
    this.setDirection();
    this.generator = Car.nextTurnGenerator();
    this.getNextTurn = () => this.generator.next().value;
  }

  static symbolToDirection(char: TurnChars): DirectionType {
    switch (char) {
      case 'v':
        return 'down';
      case '^':
        return 'up';
      case '<':
        return 'left';
      case '>':
        return 'right';
      default:
        throw new Error('Invalid direction');
    }
  }

  static compareCars(x: Car, y: Car) {
    const res = x.y - y.y;
    return res !== 0 ? res : x.x - y.x;
  }

  static * nextTurnGenerator(): Generator<TurnType> {
    while (true) {
      yield 'left';
      yield 'straight';
      yield 'right';
    }
  }

  setDirection() {
    switch (this.direction) {
      case 'up':
        this.go = this.goUp;
        this.getNextCoord = () => [this.x, this.y - 1];
        break;
      case 'down':
        this.go = this.goDown;
        this.getNextCoord = () => [this.x, this.y + 1];
        break;
      case 'left':
        this.go = this.goLeft;
        this.getNextCoord = () => [this.x - 1, this.y];
        break;
      case 'right':
        this.go = this.goRight;
        this.getNextCoord = () => [this.x + 1, this.y];
        break;
      default:
        throw new Error('Invalid direction');
    }
  }

  goUp(char: RoadChars) {
    this.y -= 1;
    if (char === '\\') {
      this.direction = 'left';
    } else if (char === '/') {
      this.direction = 'right';
    } else if (char === '+') {
      const dir = this.getNextTurn();
      if (dir !== 'straight') {
        this.direction = dir;
      }
    }
    this.setDirection();
  }

  goDown(char: RoadChars) {
    this.y += 1;
    if (char === '\\') {
      this.direction = 'right';
    } else if (char === '/') {
      this.direction = 'left';
    } else if (char === '+') {
      const dir = this.getNextTurn();
      if (dir === 'left') {
        this.direction = 'right';
      } else if (dir === 'right') {
        this.direction = 'left';
      }
    }
    this.setDirection();
  }

  goLeft(char: RoadChars) {
    this.x -= 1;
    if (char === '\\') {
      this.direction = 'up';
    } else if (char === '/') {
      this.direction = 'down';
    } else if (char === '+') {
      const dir = this.getNextTurn();
      if (dir === 'left') {
        this.direction = 'down';
      } else if (dir === 'right') {
        this.direction = 'up';
      }
    }
    this.setDirection();
  }

  goRight(char: RoadChars) {
    this.x += 1;
    if (char === '\\') {
      this.direction = 'down';
    } else if (char === '/') {
      this.direction = 'up';
    } else if (char === '+') {
      const dir = this.getNextTurn();
      if (dir === 'left') {
        this.direction = 'up';
      } else if (dir === 'right') {
        this.direction = 'down';
      }
    }
    this.setDirection();
  }

  turnLeft() {
    switch (this.direction) {
      case 'left':
        this.direction = 'down';
        break;
      case 'down':
        this.direction = 'right';
        break;
      case 'right':
        this.direction = 'up';
        break;
      case 'up':
        this.direction = 'left';
        break;
      default:
        throw new Error('Invalid direction');
    }
    this.setDirection();
  }

  turnRight() {
    this.turnLeft();
    this.turnLeft();
    this.turnLeft();
  }
}
