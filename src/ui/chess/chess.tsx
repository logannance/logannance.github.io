'use client';

import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Board, Vec } from "./board";

export default function Chess() {
  const [board, setBoard] = useState<Board>(new Board());

  return <>
    <Grid container justifyContent="center" paddingTop={1}>
      <Box>
        {board.squares.map((row, i) => (
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
                  board.handleClick({
                    sqr: square,
                    vec: new Vec(j, i)
                  });

                  setBoard(new Board(board));
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
  </>
}