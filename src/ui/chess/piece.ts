import { Board, Vec } from "./board";

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

type Move = (start: Vec, board: Board, piece: Piece) => Generator<void>;

function normalMove(vec: Vec) {
  return function*(start: Vec, board: Board) {
    const dest = start.add(vec);
    if (!dest.inBounds()) return;
    const destSqr = board.getSquareAtVec(dest);
    destSqr.decoration = board.active ?
      destSqr.piece ? 'circle' : 'dot' :
      undefined;

    yield;
  }
}

function slideMove(vec: Vec) {
  return function*(start: Vec, board: Board) {
    for (let i = 1; i < 8; ++i) {
      const slideVec = new Vec(vec.x * i, vec.y * i);
      const dest = start.add(slideVec);
      if (!dest.inBounds()) return;
      const destSqr = board.getSquareAtVec(dest);

      if (destSqr.piece) {
        destSqr.decoration = board.active ? 'circle' : undefined;
        return;
      }

      destSqr.decoration = board.active ? 'dot' : undefined;
      yield;
    }
  }
}

function pieceMove(vec: Vec) {
  return function*(start: Vec, board: Board) {
    const dest = start.add(vec);
    if (!dest.inBounds()) return;
    const destSqr = board.getSquareAtVec(dest);

    if (destSqr.piece) {
      destSqr.decoration = board.active ? 'circle' : undefined;
      yield;
    }
  }
}

export abstract class Piece {
  private _char: PieceChar;
  private _moved: boolean;
  protected _moves: Move[];

  constructor (char: PieceChar, moves: Move[]) {
    this._char = char;
    this._moved = false;
    this._moves = moves;
  }

  get char() {
    return this._char;
  }

  get moved() {
    return this._moved;
  }

  move() {
    this._moved = true;
  }

  processMoves(start: Vec, board: Board) {
    this._moves.forEach(move => move(start, board, this).forEach(() => {}));
  }

  sameColor(other: Piece) {
    return (this.char < 9817 && other.char < 9817) ||
      (this.char > 9817 && other.char > 9817);
  }
}

export class WhiteKing extends Piece {
  constructor() {
    super(PieceChar.WhiteKing, [
      normalMove(new Vec(0, -1)),
      normalMove(new Vec(1, -1)),
      normalMove(new Vec(1, 0)),
      normalMove(new Vec(1, 1)),
      normalMove(new Vec(0, 1)),
      normalMove(new Vec(-1, 1)),
      normalMove(new Vec(-1, 0)),
      normalMove(new Vec(-1, -1))
    ]);
  }
}

export class WhiteQueen extends Piece {
  constructor() {
    super(PieceChar.WhiteQueen, [
      slideMove(new Vec(0, -1)),
      slideMove(new Vec(1, -1)),
      slideMove(new Vec(1, 0)),
      slideMove(new Vec(1, 1)),
      slideMove(new Vec(0, 1)),
      slideMove(new Vec(-1, 1)),
      slideMove(new Vec(-1, 0)),
      slideMove(new Vec(-1, -1))
    ])
  }
}

export class WhiteRook extends Piece {
  constructor() {
    super(PieceChar.WhiteRook, [
      slideMove(new Vec(0, -1)),
      slideMove(new Vec(1, 0)),
      slideMove(new Vec(0, 1)),
      slideMove(new Vec(-1, 0)),
    ])
  }
}

export class WhiteBishop extends Piece {
  constructor() {
    super(PieceChar.WhiteBishop, [
      slideMove(new Vec(1, -1)),
      slideMove(new Vec(1, 1)),
      slideMove(new Vec(-1, 1)),
      slideMove(new Vec(-1, -1)),
    ])
  }
}

export class WhiteKnight extends Piece {
  constructor() {
    super(PieceChar.WhiteKnight, [
      normalMove(new Vec(1, -2)),
      normalMove(new Vec(2, -1)),
      normalMove(new Vec(2, 1)),
      normalMove(new Vec(1, 2)),
      normalMove(new Vec(-1, 2)),
      normalMove(new Vec(-2, 1)),
      normalMove(new Vec(-2, -1)),
      normalMove(new Vec(-1, -2)),
    ])
  }
}

export class WhitePawn extends Piece {
  constructor() {
    super(PieceChar.WhitePawn, [
      function*(start: Vec, board: Board, piece: Piece) {
        for (let i = 0; i < 2; ++i) {
          const dest = start.add(new Vec(0, 1 + i));
          if (!dest.inBounds()) return;

          const destSqr = board.getSquareAtVec(dest);
          if (destSqr.piece) return;

          destSqr.decoration = board.active ? 'dot' : undefined;
          yield;
          if (piece.moved) return;
        }
      },

      pieceMove(new Vec(1, 1)),
      pieceMove(new Vec(-1, 1)),
    ]);
  }
}

export class BlackKing extends Piece {
  constructor() {
    super(PieceChar.BlackKing, [
      normalMove(new Vec(0, -1)),
      normalMove(new Vec(1, -1)),
      normalMove(new Vec(1, 0)),
      normalMove(new Vec(1, 1)),
      normalMove(new Vec(0, 1)),
      normalMove(new Vec(-1, 1)),
      normalMove(new Vec(-1, 0)),
      normalMove(new Vec(-1, -1))
    ]);
  }
}

export class BlackQueen extends Piece {
  constructor() {
    super(PieceChar.BlackQueen, [
      slideMove(new Vec(0, -1)),
      slideMove(new Vec(1, -1)),
      slideMove(new Vec(1, 0)),
      slideMove(new Vec(1, 1)),
      slideMove(new Vec(0, 1)),
      slideMove(new Vec(-1, 1)),
      slideMove(new Vec(-1, 0)),
      slideMove(new Vec(-1, -1))
    ])
  }
}

export class BlackRook extends Piece {
  constructor() {
    super(PieceChar.BlackRook, [
      slideMove(new Vec(0, -1)),
      slideMove(new Vec(1, 0)),
      slideMove(new Vec(0, 1)),
      slideMove(new Vec(-1, 0)),
    ])
  }
}

export class BlackBishop extends Piece {
  constructor() {
    super(PieceChar.BlackBishop, [
      slideMove(new Vec(1, -1)),
      slideMove(new Vec(1, 1)),
      slideMove(new Vec(-1, 1)),
      slideMove(new Vec(-1, -1)),
    ])
  }
}

export class BlackKnight extends Piece {
  constructor() {
    super(PieceChar.BlackKnight, [
      normalMove(new Vec(1, -2)),
      normalMove(new Vec(2, -1)),
      normalMove(new Vec(2, 1)),
      normalMove(new Vec(1, 2)),
      normalMove(new Vec(-1, 2)),
      normalMove(new Vec(-2, 1)),
      normalMove(new Vec(-2, -1)),
      normalMove(new Vec(-1, -2)),
    ])
  }
}

export class BlackPawn extends Piece {
  constructor() {
    super(PieceChar.BlackPawn, [
      function*(start: Vec, board: Board, piece: Piece) {
        for (let i = 0; i < 2; ++i) {
          const dest = start.add(new Vec(0, -1 - i));
          if (!dest.inBounds()) return;
          const destSqr = board.getSquareAtVec(dest);
          if (destSqr.piece) return;
          destSqr.decoration = board.active ? 'dot' : undefined;

          yield;
          if (piece.moved) return;
        }
      },

      pieceMove(new Vec(1, -1)),
      pieceMove(new Vec(-1, -1)),
    ]);
  }
}