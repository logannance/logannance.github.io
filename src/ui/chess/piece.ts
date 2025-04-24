export const PieceChar = {
  WhiteKing: 9812,
  WhiteQueen: 9813,
  WhiteRook: 9814,
  WhiteBishop: 9815,
  WhiteKnight: 9816,
  WhitePawn: 9817,
  BlackKing: 9818,
  BlackQueen: 9819,
  BlackRook: 9820,
  BlackBishop: 9821,
  BlackKnight: 9822,
  BlackPawn: 9823,
} as const; export type PieceChar = typeof PieceChar[keyof typeof PieceChar];

export const Piece = {
  WhiteKing: {
    char: 9812,
    moves: [
      function* upOne() {
        yield { x: 0, y: -1 };
      },

      function* upRightOne() {
        yield { x: 1, y: -1 };
      },

      function* rightOne() {
        yield { x: 1, y: 0 };
      },

      function* downRightOne() {
        yield { x: 1, y: 1 };
      },

      function* downOne() {
        yield { x: 0, y: 1 };
      },

      function* downLeftOne() {
        yield { x: -1, y: 1 };
      },

      function* leftOne() {
        yield { x: -1, y: 0 };
      },

      function* upLeftOne() {
        yield { x: -1, y: -1 };
      }
    ]
  },

  WhiteQueen: {
    char: 9813,
    moves: [
      upSlide,
      upRightSlide,
      rightSlide,
      downRightSlide,
      downSlide,
      downLeftSlide,
      leftSlide,
      upLeftSlide,
    ]
  },
  WhiteRook: {
    char: 9814,
    moves: [
      upSlide,
      rightSlide,
      downSlide,
      leftSlide
    ]
  }
} as const; export type Piece = typeof Piece[keyof typeof Piece];

function* upSlide() {
  for (let y = -1; y > -8; --y) {
    yield { x: 0, y: y };
  }
}

function* upRightSlide() {
  for (let vec = { x: 1, y: -1 }; vec.x < 8; ++vec.x, --vec.y) {
    yield vec;
  }
}

function* rightSlide() {
  for (let x = 1; x < 8; ++x) {
    yield { x: x, y: 0 };
  }
}

function* downRightSlide() {
  for (let vec = { x: 1, y: 1 }; vec.x < 8; ++vec.x, ++vec.y) {
    yield vec;
  }
}

function* downSlide() {
  for (let y = 1; y < 8; ++y) {
    yield { x: 0, y: y };
  }
}

function* downLeftSlide() {
  for (let vec = { x: -1, y: 1 }; vec.y < 8; --vec.x, ++vec.y) {
    yield vec;
  }
}

function* leftSlide() {
  for (let x = -1; x > -8; --x) {
    yield { x: x, y: 0 };
  }
}

function* upLeftSlide() {
  for (let vec = { x: -1, y: -1 }; vec.x > -8; --vec.x, --vec.y) {
    yield vec;
  }
}