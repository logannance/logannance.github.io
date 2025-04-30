import { BlackBishop, BlackKing, BlackKnight, BlackPawn, BlackQueen, BlackRook, Piece, WhiteBishop, WhiteKing, WhiteKnight, WhitePawn, WhiteQueen, WhiteRook } from "./piece";

export const SquareColor = {
  Light: '#ebecd0',
  Dark: '#779556',
} as const; type SquareColor = typeof SquareColor[keyof typeof SquareColor];

export class Vec {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  equals(other: Vec) {
    return this._x == other._x && this._y == other._y;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  add(other: Vec) {
    return new Vec(this._x + other._x, this._y + other._y);
  }

  inBounds() {
    return this._x >= 0 && this._x <= 7 && this._y >= 0 && this._y <= 7;
  }
}

export class Square {
  private _color: SquareColor;
  private _decoration?: 'dot' | 'circle';
  private _piece?: Piece;

  constructor(
    color: SquareColor,
    decoration?: 'dot' | 'circle',
    piece?: Piece
  ) {
    this._color = color;
    this._decoration = decoration;
    this._piece = piece;
  }

  get color() {
    return this._color;
  }

  get decoration() {
    return this._decoration;
  }

  set decoration(value) {
    this._decoration = value;
  }

  get piece() {
    return this._piece;
  }

  set piece(value) {
    this._piece = value;
  }
}

type VecSquare = {
  sqr: Square,
  vec: Vec,
}

export class Board {
  private _squares: Square[][];
  private _active: VecSquare | undefined;

  constructor();
  constructor(other: Board);
  constructor(other?: Board) {
    if (other) {
      this._squares = [...other._squares];
      this._active = other._active;
      return;
    }

    this._squares = [
      [
        new Square(SquareColor.Light, undefined, new WhiteRook()),
        new Square(SquareColor.Dark, undefined, new WhiteKnight()),
        new Square(SquareColor.Light, undefined, new WhiteBishop()),
        new Square(SquareColor.Dark, undefined, new WhiteKing()),
        new Square(SquareColor.Light, undefined, new WhiteQueen()),
        new Square(SquareColor.Dark, undefined, new WhiteBishop()),
        new Square(SquareColor.Light, undefined, new WhiteKnight()),
        new Square(SquareColor.Dark, undefined, new WhiteRook()),
      ],

      Array.from({ length: 8 }, (_, i) => new Square(
        i % 2 === 1 ? SquareColor.Light : SquareColor.Dark,
        undefined, new WhitePawn()
      )),
    
      ...Array.from( {length: 4 }, (_, i) => (
        Array.from({ length: 8 }, (_, j) => new Square(
          (i + j) % 2 === 0 ? SquareColor.Light : SquareColor.Dark
        ))
      )),

      Array.from({ length: 8 }, (_, i) => new Square(
        i % 2 === 0 ? SquareColor.Light : SquareColor.Dark,
        undefined, new BlackPawn()
      )),
      
      [
        new Square(SquareColor.Dark, undefined, new BlackPawn()),
        new Square(SquareColor.Light, undefined, new BlackKnight()),
        new Square(SquareColor.Dark, undefined, new BlackBishop()),
        new Square(SquareColor.Light, undefined, new BlackKing()),
        new Square(SquareColor.Dark, undefined, new BlackQueen()),
        new Square(SquareColor.Light, undefined, new BlackBishop()),
        new Square(SquareColor.Dark, undefined, new BlackKnight()),
        new Square(SquareColor.Light, undefined, new BlackRook()),
      ]
    ];
  }

  getSquareAtVec(vec: Vec) {
    return this._squares[vec.y][vec.x];
  }

  get active() {
    return this._active;
  }

  get squares() {
    return this._squares;
  }

  undecorate() {
    const piece = this._active!.sqr.piece!;
    const vec = this._active!.vec;
    this._active = undefined;
    piece.processMoves(vec, this);
  }

  decorate({ sqr, vec }: VecSquare) {
    this._active = { sqr, vec };
    sqr.piece!.processMoves(vec, this);
  }

  move(dest: Square) {
    const { sqr, vec } = this.active!;
    this._active = undefined;
    sqr.piece!.processMoves(vec, this);
    dest.piece = sqr.piece;
    dest.piece!.move();
    sqr.piece = undefined;
  }

  handleClick({ sqr, vec }: VecSquare) {
    if (sqr.decoration) {
      this.move(sqr);
      return;
    }

    if (sqr.piece) {
      if (this._active) {
        this.undecorate();
      }
      
      this.decorate({ sqr: sqr, vec: vec });
      return;
    }

    if (this._active) {
      this.undecorate();
    }
  }
}