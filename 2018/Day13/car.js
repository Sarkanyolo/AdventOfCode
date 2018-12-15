class Car {
  constructor(x, y, char) {
    this.removed = false;
    this.x = x;
    this.y = y;
    this.direction = Car.symbolToDirection(char);
    this.setDirection();
    this.generator = Car.nextTurnGenerator();
    this.getNextTurn = () => this.generator.next().value;
  }

  static symbolToDirection(char) {
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

  static compareCars(x, y) {
    const res = x.y - y.y;
    return res !== 0 ? res : x.x - y.x;
  }

  static* nextTurnGenerator() {
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

  goUp(char) {
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

  goDown(char) {
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

  goLeft(char) {
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

  goRight(char) {
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

module.exports = Car;
