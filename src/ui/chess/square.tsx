// import { Grid, Box } from "@mui/material";

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

// export type Piece = {
//   char: PieceChar,
//   moves: { x: number, y: number }[]
// }

// export const Color = {
//   Light: '#ebecd0',
//   Dark: '#779556',
// } as const; type Color = typeof Color[keyof typeof Color];

// export default function Square({
//   color,
//   piece,
//   decoration
// }: {
//   color: Color,
//   piece?: Piece,
//   decoration?: 'dot' | 'circle'
// }) {
//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       width="4rem"
//       height="4rem"
//       fontSize="3rem"
//       sx={{
//         backgroundColor: color,
//         cursor: piece && 'pointer',
//         ':hover': piece && {
//           fontSize: "4rem",
//         }
//       }}
//       // onClick={{}}
//     >
//       {decoration === 'dot' ? (
//         <Box
//           width="1rem"
//           height="1rem"
//           borderRadius="100%"
//           sx={{ backgroundColor: 'black', opacity: '50%' }}
//         />
//       ) : decoration === 'circle' && (
//         <Box
//           width="3rem"
//           height="3rem"
//           border={4}
//           borderRadius="100%"
//           borderColor='#00000088'
//         />
//       )}
//       {piece && (
//         <Box position="absolute">
//           {String.fromCharCode(piece.char)}
//         </Box>
//       )}
//     </Grid>
//   )
// }


























// // import { Box, Grid } from "@mui/material";
// // import Decoration from "./decoration";
// // import { DecorationVariant, Piece } from "./board";

// // export const Color = {
// //   Light: '#ebecd0',
// //   Dark: '#779556',
// // } as const; type Color = typeof Color[keyof typeof Color];

// // export type SquareProps = {
// //   color: Color,
// //   decoration?: DecorationVariant,
// //   piece?: Piece,
// // }

// // export default function Square({ color, decoration, piece }: SquareProps) {
// //   return (
// //     <Grid
// //       container
// //       justifyContent="center"
// //       alignItems="center"
// //       fontSize="3rem"
// //       width="4rem"
// //       height="4rem"
// //       flexShrink={0}
// //       sx={{
// //         userSelect: "none",
// //         backgroundColor: color,
// //         ":hover": {
// //           fontSize: "4rem",
// //         },
// //         cursor: 'pointer',
// //       }}
// //       onClick={() => {
// //         piece?.moves.forEach(move => {
          
// //         })
// //       }}
// //     >
// //       {decoration && (
// //         <Decoration variant={decoration} />
// //       )}
// //       {piece && (
// //         <Box position="absolute">
// //           {String.fromCharCode(piece.char)}
// //         </Box>
// //       )}
// //     </Grid>
// //   );
// // }