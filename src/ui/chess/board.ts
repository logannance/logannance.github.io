import { Piece } from "./piece";

export const SquareColor = {
  Light: '#ebecd0',
  Dark: '#779556',
} as const; type SquareColor = typeof SquareColor[keyof typeof SquareColor];

export type Vec = {
  x: number,
  y: number
}

export type Square = {
  color: SquareColor,
  decoration?: 'dot' | 'circle',
  piece?: Piece
}

export type Board = Square[][];

export const starting: Board = [
  [
    {
      color: SquareColor.Light,
      piece: Piece.WhiteKing,
    },
    {
      color: SquareColor.Dark,
      piece: Piece.WhiteQueen,
    },
    {
      color: SquareColor.Light,
      piece: Piece.WhiteRook
    },

    ...Array.from({ length: 5 }, (_, i) => ({
      color: i % 2 === 1 ? SquareColor.Light : SquareColor.Dark,
    }))
  ],

  ...Array.from( {length: 7 }, (_, i) => (
    Array.from({ length: 8 }, (_, j) => ({
      color: (i + j) % 2 === 1 ? SquareColor.Light : SquareColor.Dark,
    }))
  ))
];