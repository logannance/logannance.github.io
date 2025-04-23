'use client';

import { Box, Grid } from "@mui/material";
import { useState } from "react";

const SquareColor = {
  Light: '#ebecd0',
  Dark: '#779556',
} as const; type SquareColor = typeof SquareColor[keyof typeof SquareColor];

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

type Vec = {
  x: number,
  y: number
}

const Piece = {
  WhiteKing: {
    char: 9812,
    moves: [
      function* upOne() {
        yield { x: 0, y: -1 };
      },

      function* rightOne() {
        yield { x: 1, y: 0 };
      },

      function* downOne() {
        yield { x: 0, y: 1 };
      },

      function* leftOne() {
        yield { x: -1, y: 0 };
      }
    ]
  }
} as const; type Piece = typeof Piece[keyof typeof Piece];

type Square = {
  color: SquareColor,
  decoration?: 'dot' | 'circle',
  piece?: Piece
}

type Board = Square[][];

// function isWhite(piece: Piece) {
//   return piece.char < 9818;
// }

export default function Chess() {
  const [board, setBoard] = useState<Board>([
    [
      {
        color: SquareColor.Light,
        piece: Piece.WhiteKing,
      },
      ...Array.from({ length: 7 }, (_, i) => ({
        color: i % 2 === 1 ? SquareColor.Light : SquareColor.Dark,
      }))
    ],
    
    Array.from({ length: 8 }, (_, i) => ({
      color: i % 2 === 1 ? SquareColor.Light : SquareColor.Dark,
    }))
  ]);

  const [active, setActive] = useState<
    { sqr: Square } & Vec | null
  >(null);

  return (
    <Grid container justifyContent="center">
      <Box>
        {board.map((row, i) => (
          <Grid key={i} container flexWrap="nowrap">
            {row.map((square, j) => (
              <Grid
                key={j}
                container
                justifyContent="center"
                alignItems="center"
                width="4rem"
                height="4rem"
                fontSize="3rem"

                sx={{
                  userSelect: 'none',
                  backgroundColor: square.color,
                  ':hover': square.piece && {
                    fontSize: '4rem',
                    cursor: 'pointer',
                  }
                }}

                onClick={() => {
                  const decorate = (
                    vecSqr: { sqr: Square } & Vec,
                    dot?: 'dot'
                  ) => {
                    vecSqr.sqr.piece!.moves.forEach(move => {
                      for (const m of move()) {
                        const x = vecSqr.x + m.x;
                        const y = vecSqr.y + m.y;
                  
                        if (x < 0 || y < 0 || x > 7 || y > 1) {
                          return;
                        }
                  
                        const dest = board[y][x];
                  
                        if (!dest.piece) {
                          dest.decoration = dot;
                          setBoard([...board]);
                        }
                      }
                    });
                  };

                  if (square.piece) {
                    // if the square has a piece and a decoration,
                    // it is a circle
                    if (square.decoration) {
                      square.decoration = undefined;
                      square.piece = active!.sqr.piece;
                      active!.sqr.piece = undefined;
                      setActive(null);
                      return;
                    }
                  
                  setActive({ sqr: square, x: j, y: i });
                  decorate({ sqr: square, x: j, y: i }, 'dot');
                  return;
                }
              
                // If clicked on square with no piece and no decoration, an
                // empty square was clicked and nothing should be done
                if (!square.decoration) {
                  return;
                }
                
                // no piece, yes decoration
                square.decoration = undefined;
                square.piece = active!.sqr.piece!;
                decorate(active!);
                active!.sqr.piece = undefined;
                setActive(null);
              }}
              >
                {square.decoration === 'dot' ? (
                  <Box
                    width="1rem"
                    height="1rem"
                    borderRadius="100%"
                    sx={{ backgroundColor: 'black', opacity: '50%' }}
                  />
                ) : square.decoration === 'circle' && (
                  <Box
                    width="3rem"
                    height="3rem"
                    border={4}
                    borderRadius="100%"
                    borderColor='#00000088'
                  />
                )}
                <Box position="absolute">
                  {square.piece && String.fromCharCode(square.piece.char)}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>
    </Grid>
  )
}