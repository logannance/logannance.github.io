'use client';

import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Board, Square, starting, Vec } from "./board";

export default function Chess() {
  const [board, setBoard] = useState<Board>(starting);

  const [active, setActive] = useState<
    { sqr: Square } & Vec | null
  >(null);

  return (
    <Grid container justifyContent="center">
      <Grid container>
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
                      remove?: true
                    ) => {
                      vecSqr.sqr.piece!.moves.forEach(move => {
                        for (const m of move()) {
                          const x = vecSqr.x + m.x;
                          const y = vecSqr.y + m.y;
                    
                          if (x < 0 || y < 0 || x > 7 || y > 7) {
                            return;
                          }
                    
                          const dest = board[y][x];

                          if (dest.piece) {
                            dest.decoration = remove ? undefined : 'circle';
                            return;
                          }

                          dest.decoration = remove ? undefined: 'dot';
                        }
                      });

                      setBoard([...board]);
                    };

                    const capture = (active: { sqr: Square } & Vec) => {
                      console.log('yo');
                      decorate(active, true);
                      square.decoration = undefined;
                      square.piece = active.sqr.piece;
                      active.sqr.piece = undefined;
                      setActive(null);
                    }

                    if (square.piece) {
                      // if the square has a piece and a decoration,
                      // it is a circle
                      if (square.decoration) {
                        capture(active!);
                        return;
                      }
                      
                      if (active) return;
                      setActive({ sqr: square, x: j, y: i });
                      decorate({ sqr: square, x: j, y: i });
                      return;
                    }
                
                    // If clicked on square with no piece and no decoration, an
                    // empty square was clicked and nothing should be done
                    if (!square.decoration) return;
                    // no piece, yes decoration
                    capture(active!);
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
    </Grid>
  )
}