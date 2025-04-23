// 'use client';
// import { Box, Grid } from "@mui/material";
// import { useState } from "react";
// import Square, { SquareProps, Color } from "./square";

// export type DecorationVariant = 'dot' | 'circle';
// export type ChessBoard = SquareProps[][];

// type Vec = { x: number, y: number };

// type Move = (board: ChessBoard, currLoc: Vec, destLoc: Vec) => boolean;

// export type Piece = {
//   char: PieceChar,
//   moves: Move[],
// }

// export const PieceChar = {
//   WhiteKing: 9812,
//   WhiteQueen: 9813,
//   WhiteRook: 9814,
//   WhiteBishop: 9815,
//   WhiteKnight: 9816,
//   WhitePawn: 9817,
//   BlackKing: 9818,
//   BlackQueen: 9819,
//   BlackRook: 9820,
//   BlackBishop: 9821,
//   BlackKnight: 9822,
//   BlackPawn: 9823 
// } as const; export type PieceChar = typeof PieceChar[keyof typeof PieceChar];

// export default function Board() {

//   return (
//     <Grid container justifyContent="center" padding={1}>
//       <Box>
//         {board.map((_, i) => (
//           <Grid key={i} container flexWrap="nowrap">
//             {board[i].map((square, j) => (
//               <Square key={j} {...square} />
//             ))}
//           </Grid>
//         ))}
//       </Box>
//     </Grid>
//   );
// }