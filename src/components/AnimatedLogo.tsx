import { motion, Transition, Variants } from "framer-motion";
import React from "react";

const variants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(28, 59, 30, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(28, 59, 30, 1)",
  },
};

const transition: Transition = {
  default: { duration: 2, ease: "easeInOut" },
  fill: { duration: 2.5, ease: [1, 0, 0.8, 1] },
};

export default function AnimatedLogo() {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1211.9 423">
      <motion.path
        stroke="#1c3b1e"
        id="svg_1"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m252.88,1.28c-0.17,0.82 -0.43,7.21 -0.6,14.32s-0.37,14.62 -0.53,16.73s-0.38,7.57 -0.54,12.1c-0.7,26.73 -1,34 -1.51,34.6s-3.71,0.67 -13.49,0.67c-7.1,0 -13.23,-0.2 -13.61,-0.41c-0.64,-0.41 -4.24,-7.57 -10.1,-20.18c-3,-6.34 -10.44,-21.94 -12.59,-26.32a18.19,18.19 0 0 0 -2.47,-4.06c-0.86,-0.67 -1.13,-0.52 -8.06,5.4c-2,1.8 -9.68,8.14 -16.94,14.16c-11.94,9.89 -22.91,19 -24.41,20.34c-0.33,0.31 -1.45,1.19 -2.48,2s-3.44,2.78 -5.37,4.43s-5.59,4.63 -8.12,6.74c-8.82,7.26 -16.35,13.55 -16.62,13.86c-0.16,0.15 -5,4.22 -10.75,9s-11.56,9.62 -12.9,10.76s-3.45,2.93 -4.57,3.91s-3.5,2.94 -5.17,4.38s-5.1,4.32 -7.74,6.43s-7.58,6.29 -11,9.27s-7.9,6.8 -10,8.45s-4,3.34 -4.3,3.65s-3.66,3.25 -7.53,6.44s-7.85,6.59 -8.87,7.47s-3.33,2.88 -5.11,4.42s-3.33,2.84 -3.49,3s-2.32,2 -4.84,4.12s-4.68,3.92 -4.84,4.12s-2,1.8 -4.25,3.61c-9.22,7.68 -13.68,12.57 -6.08,6.85c1.78,-1.34 6,-4.43 9.36,-6.9s11,-8.13 16.88,-12.56l15.04,-11.18c2.36,-1.69 6.5,-4.78 9.14,-6.79s7.15,-5.41 10,-7.52c7.21,-5.3 14.84,-11.07 28.71,-21.57c6.51,-5 15.81,-12 20.7,-15.66s10.49,-8 12.59,-9.52s4.35,-3.35 5.16,-3.92s5.05,-3.81 9.46,-7.21s9.3,-7.15 10.92,-8.34s5.91,-4.43 9.51,-7.21s9.68,-7.36 13.44,-10.16s9,-6.85 11.67,-9l4.78,-3.86l0.92,1.13a55.66,55.66 0 0 1 3.23,6.73c3.6,8.24 8.6,19.67 9.73,22c0.59,1.13 1.5,3.35 2.15,4.89s1.88,4.33 2.79,6.23l1.62,3.4l6,0.31c3.28,0.16 12.85,0.52 21.29,0.83s17.91,0.66 21,0.82c4.25,0.2 5.87,0.1 6.19,-0.36a56.23,56.23 0 0 0 0.8,-8.39c0.22,-4.28 0.7,-11.95 1,-17c0.7,-10.76 0.91,-14.47 1,-20c0.05,-5.15 0.86,-5.56 4,-2.11c1.23,1.34 3.33,3.66 4.67,5.1c4,4.38 5.17,5.66 9.79,10.92c2.42,2.78 4.95,5.61 5.59,6.33l4.63,5.15c1.93,2.11 8.55,9.52 14.73,16.42s12.58,14.11 14.14,16s5.38,6.07 8.33,9.32s6.3,6.84 7.32,8c3.12,3.6 10.37,11.79 10.75,12c0.16,0.15 1.72,1.85 3.5,3.86s3.49,3.81 3.81,4.12s1.4,1.54 2.48,2.83s3.33,3.86 5.05,5.72s4.25,4.63 5.59,6.18c2.1,2.36 6.67,7.41 7.53,8.18c0.16,0.16 2.31,2.58 4.84,5.41s6.94,7.77 9.84,11l5.32,5.82l-0.86,5.25c-0.43,2.88 -1.45,9.63 -2.2,15s-1.72,12.1 -2.15,14.94c-1.44,9.55 -1.78,11.83 -2.62,17.83c-0.49,3.24 -1.08,7.42 -1.35,9.27s-0.64,4.38 -0.8,5.66s-0.54,3.71 -0.81,5.41s-1,6.9 -1.72,11.53l-1.24,8.45l-7.24,6.45c-4,3.55 -11,9.73 -15.6,13.69s-9.62,8.4 -11.24,9.84s-4.62,4.07 -6.61,5.77l-3.6,3.19l-2.58,-1.08c-1.4,-0.57 -5.22,-2.42 -8.5,-4s-20.65,-10.18 -38.72,-18.87s-33.15,-16.06 -33.61,-16.31s-4.89,-2.37 -9.94,-4.79s-10.33,-4.89 -11.83,-5.66c-16.19,-7.93 -41.94,-19.88 -43,-19.88a19,19 0 0 0 -5.27,2.27c-2.15,1.24 -7.32,4.17 -11.46,6.49s-9.57,5.46 -12.09,6.95s-8.82,5.05 -14,7.93s-10,5.71 -10.76,6.18c-1.4,0.87 -32.8,19 -55.27,31.82c-7,4 -13.82,8 -15.16,8.8c-3.71,2.42 -7.53,4.18 -8.23,3.92a3.74,3.74 0 0 1 -1.4,-1.91c-0.75,-1.64 -3,-6.33 -7.31,-15c-1.24,-2.58 -3,-6 -3.77,-7.73s-3.11,-6.39 -5.05,-10.39s-4.19,-8.44 -4.84,-9.78s-3,-6.13 -5.32,-10.66s-5.43,-10.71 -6.84,-13.7c-18.17,-36.56 -27.74,-55 -28,-54c-0.16,0.62 7.69,20.18 11.62,29c0.27,0.57 0.91,2.06 1.39,3.35c1.19,2.93 2.37,5.61 3,6.95c0.27,0.56 1.67,3.91 3.17,7.46s4.74,11.44 7.32,17.51s5.7,13.49 7,16.48c2.25,5.41 8,18.95 8.87,20.85c0.27,0.57 1.34,3.09 2.42,5.67s2.42,5.66 3,6.95s2.84,6.64 5.16,11.94s4.41,10.1 4.78,10.56c0.65,0.82 1.08,0.67 5.7,-1.65c2.8,-1.34 5.92,-2.93 6.94,-3.5s3.71,-2 5.91,-3.09s5.86,-3 8.07,-4.22s6,-3.14 8.33,-4.38s9.9,-5.15 16.67,-8.75s14.3,-7.52 16.67,-8.75s6.72,-3.45 9.68,-5c12.15,-6.39 15.75,-8.29 19.08,-10c6.89,-3.55 10,-5.2 11.94,-6.44c1.13,-0.61 2.15,-1.18 2.26,-1.18s5.65,-2.88 15.65,-8.24c1.77,-1 4.89,-2.63 6.93,-3.66l3.77,-1.9l5.1,2.57c2.85,1.45 8,4.07 11.4,5.87s8.18,4.23 10.49,5.41s6,3 8,4.07l7.8,4c2.2,1.14 7.31,3.71 11.29,5.77s9.3,4.79 11.83,6.08c6.23,3.14 20.91,10.61 25.81,13.13c2.2,1.13 6.72,3.4 9.94,5c6,3 22,11.07 29.31,14.83c13.22,6.8 17.58,8.91 18.71,9.22c0.86,0.21 1.88,-0.26 3.76,-1.7a39.26,39.26 0 0 0 3.07,-2.57c0.32,-0.36 5.27,-4.59 11,-9.48s12.42,-10.55 14.79,-12.61s5.37,-4.64 6.72,-5.72s3.65,-3.09 5.1,-4.38c7,-6.18 11.51,-10 14.09,-11.94a11.49,11.49 0 0 0 3.07,-3.2c0.16,-0.56 1.29,-7.41 2.47,-15.19c3.5,-23.11 8,-52.36 8.82,-58.18c0.48,-3 1.07,-7.16 1.4,-9.27s1.23,-8.6 2.15,-14.42s1.55,-11.11 1.55,-11.7c0,-1.13 -0.43,-1.64 -7.8,-9.62c-2.36,-2.58 -5.64,-6.18 -7.26,-8s-3.87,-4.37 -5.1,-5.66s-3.5,-3.86 -5.17,-5.66s-4.83,-5.31 -7,-7.73s-7.2,-8 -11.13,-12.36s-8.71,-9.63 -10.54,-11.58c-4.14,-4.48 -24.3,-26.47 -32.26,-35.27c-7,-7.73 -12.63,-13.86 -17.2,-18.8c-1.83,-2 -5,-5.46 -7,-7.72s-4.79,-5.31 -6.13,-6.7c-2.64,-2.78 -3.23,-3.45 -12.59,-13.64c-3.28,-3.55 -6.29,-6.8 -6.77,-7.26s-1.94,-2.06 -3.28,-3.55c-2.26,-2.58 -14.95,-16.43 -15.59,-17c-0.16,-0.15 -1.72,-1.9 -3.44,-3.86s-3.55,-4 -4,-4.38s-2,-2.11 -3.44,-3.75c-2.97,-3.29 -3.99,-3.65 -4.42,-1.59z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_2"
        d="m189.81,126.92a49.1,49.1 0 0 0 -3,4.79c-1,1.85 -2.58,4.48 -3.5,5.92a33.24,33.24 0 0 0 -2,3.61c-0.48,1.18 -1,88 -0.53,89.44c0.27,0.77 1,0.92 5,0.92c3,0 4.89,-0.2 5.16,-0.56c0.43,-0.67 0.49,-104.94 0.06,-105.3c-0.07,-0.16 -0.66,0.36 -1.19,1.18z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_3"
        d="m122.81,131.61l-2,0.15l0.16,5l0.16,5l18,0.26c9.9,0.15 18.07,0.36 18.18,0.41c0.37,0.31 0,1.18 -0.86,2s-7.69,9.37 -17.32,21.68c-1.93,2.47 -4.62,5.87 -6,7.56a15.79,15.79 0 0 0 -2.58,3.61a9.5,9.5 0 0 0 1.93,2.52c2,2.11 2,2.11 7.21,0.83a24.71,24.71 0 0 1 6.51,-0.36a21.25,21.25 0 0 1 19.8,17.14c1.29,6 -1.29,13.18 -6.34,18a21.74,21.74 0 0 1 -29.63,-0.2c-2.47,-2.27 -6,-7.88 -6,-9.48c0,-1.28 -1.24,-1.34 -3.77,-0.15c-1.34,0.62 -3.28,1.44 -4.3,1.85c-3.06,1.19 -3.06,1.08 0.22,7.73c2.58,5.25 8.44,10.6 15,13.64c4.89,2.32 5.49,2.42 10.7,2.68c7.42,0.36 11.78,-0.36 17.26,-2.89a31.48,31.48 0 0 0 14.73,-14.05a26.07,26.07 0 0 0 2.26,-5.2a27,27 0 0 1 0.81,-3.81c2.31,-8.35 -2.21,-20.86 -10.06,-27.76c-3.87,-3.4 -11.77,-7.41 -14.67,-7.41c-1.56,0 -0.76,-2.06 2.41,-6c6.62,-8.18 9.58,-11.89 15.33,-19.2c3.22,-4.12 6.77,-8.55 8,-9.94s2,-2.73 1.82,-3.14c-0.26,-0.57 -4.89,-0.72 -27.63,-0.67c-14.97,-0.01 -28.2,0.09 -29.33,0.2z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_4"
        d="m202,132.07c-0.33,0.31 -0.49,2.63 -0.38,5.15l0.16,4.53l17.75,0.15c9.73,0.06 17.9,0.31 18.17,0.57s-3.33,5.15 -8,10.92s-10,12.56 -12,15.08s-4.25,5.36 -5.05,6.23a6,6 0 0 0 -1.51,2.37a8.93,8.93 0 0 0 1.88,2.78l1.83,2.06l3.66,-0.92c6.93,-1.7 12.58,-0.93 18.17,2.47a20.53,20.53 0 0 1 7.91,8.65c1.39,2.68 1.72,3.91 1.93,7.72c0.27,4.59 0.22,4.69 -2.31,10.4c-1.29,3 -5.54,6.85 -9.57,8.76a21.85,21.85 0 0 1 -24.2,-3.81c-2.15,-2 -5.37,-7.06 -6,-9.48c-0.21,-0.77 -0.59,-1.39 -0.86,-1.39c-0.91,0 -9,4 -9.41,4.69c-0.21,0.31 0.7,2.68 2,5.3a29.06,29.06 0 0 0 6.13,8.24a32.67,32.67 0 0 0 4.73,4a27.85,27.85 0 0 1 2.69,1.44a33,33 0 0 0 5.11,2.21c4.73,1.6 15.86,1.75 20.43,0.21a33.89,33.89 0 0 0 15.27,-10c6.5,-8 8.76,-17.77 6.18,-27.14c-2.79,-10.3 -10.43,-18.64 -19.84,-21.57c-5.11,-1.6 -5.48,-1.76 -5.16,-2.63s5.43,-7.31 18.87,-24.1c10.7,-13.28 10.16,-12.61 9.73,-13.08c-0.61,-0.69 -57.82,-0.48 -58.31,0.19z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_5"
        d="m285,132.74a34.8,34.8 0 0 0 -4.84,1.7c-0.86,0.41 -2.37,1.18 -3.39,1.65a41.2,41.2 0 0 0 -6.18,5.09c-5,4.84 -7.42,9.12 -8.77,15.35c-1,4.58 -0.7,5.25 2.64,6.07c1,0.26 2.85,0.72 4.14,1.09c1.5,0.41 2.52,0.41 2.85,0.1a12.58,12.58 0 0 0 1.07,-4.07c1.45,-8.86 8.6,-15.7 18.07,-17.2c4.19,-0.67 7.26,-0.2 11.72,1.8c7.31,3.35 11.94,9.43 12.47,16.43a22.58,22.58 0 0 1 -0.37,6.54c-1.19,4.89 -2.42,6.59 -12.91,17.71c-1.61,1.75 -4.14,4.53 -5.64,6.18c-3.77,4.28 -7.91,8.65 -8.66,9.27c-0.38,0.26 -2.15,2.27 -4,4.38s-5.16,5.76 -7.37,8.13s-4.62,5 -5.32,5.87a13.75,13.75 0 0 1 -1.67,1.91a37.51,37.51 0 0 0 -3,3c-2.25,2.48 -2.47,2.94 -2.36,5.15l0.11,2.48l30.11,0.15c16.56,0.05 30.64,0 31.34,-0.15c1.13,-0.26 1.19,-0.52 1.19,-4.9c0,-2.62 -0.22,-4.73 -0.54,-4.89s-9.57,-0.41 -20.59,-0.41c-19.31,-0.1 -20,-0.15 -20.17,-1.08a1.62,1.62 0 0 1 0.54,-1.55c0.43,-0.31 3,-3 5.81,-6.12s6.56,-7.11 8.33,-9.07s4.84,-5.2 6.78,-7.31c13.61,-14.64 15.31,-16.75 17.35,-21.54c4.79,-11.33 2,-24.51 -7.09,-33.68c-2.32,-2.31 -8.23,-6.12 -10.87,-7c-6.99,-2.37 -14.84,-2.82 -20.78,-1.08z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        id="svg_6"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m387.24,348.69c-1.45,0.36 -4.62,1.09 -7,1.55c-16.18,3.35 -20.64,4.43 -35.21,8.6c-10.11,2.88 -18.5,5.92 -19.47,7c-0.48,0.57 -0.48,1.19 0.06,2.63c2.63,7.1 11.66,23.89 19.62,36.3c1.94,3.09 3.55,5.71 3.55,5.87a14.92,14.92 0 0 0 1.61,2.21a12.39,12.39 0 0 1 1.67,2.37c0.05,0.77 5,7.57 5.64,7.78c1.08,0.36 16.19,-29.82 22.8,-45.42c4.37,-10.25 6.49,-15.58 6.49,-16.17a3.53,3.53 0 0 1 0.53,-1.49a84.82,84.82 0 0 0 4.3,-11.23c-0.02,-0.87 -0.98,-0.87 -4.59,0zm-21.34,18.59c0.16,0.16 0,0.78 -0.32,1.44c-1.67,3.15 -6.62,14 -8.18,17.87a23.78,23.78 0 0 1 -2.74,5.36c-0.91,1 -1,0.92 -3.76,-2.06c-3.88,-4.12 -20.87,-20.24 -22.37,-21.17c-3.07,-1.9 -1.94,-2.05 18,-1.85c10.47,0.13 19.26,0.26 19.37,0.41z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_7"
        d="m503.51,106.59l-24.16,0l0,79.06l-4.46,0l0,-79.06l-24.05,0l0,-4.45l52.67,0l0,4.45z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_8"
        d="m555.88,146.12l-44.1,0l0,39.53l-4.45,0l0,-83.51l4.45,0l0,39.53l44.1,0l0,-39.53l4.45,0l0,83.51l-4.45,0l0,-39.53z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_9"
        d="m613.6,102.14l4.46,0l0,59.24a24.28,24.28 0 0 1 -48.55,0l0,-59.24l4.49,0l0,59.24a19.82,19.82 0 0 0 39.64,0l-0.04,-59.24z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_10"
        d="m627.23,102.14l4.45,0l54.9,75.86l0,-75.86l4.42,0l0,83.51l-4.46,0l-54.9,-75.72l0,75.72l-4.45,0l0.04,-83.51z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_11"
        d="m700.43,102.14l18.15,0a41.76,41.76 0 1 1 0,83.51l-18.15,0l0,-83.51zm18.15,4.45l-13.7,0l0,74.61l13.7,0a37.31,37.31 0 1 0 0,-74.61z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_12"
        d="m767,102.14l48.4,0l0,4.45l-44,0l0,35.08l35.07,0l0,4.45l-35.05,0l0,35.08l44,0l0,4.45l-48.42,0l0,-83.51z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_13"
        d="m842.05,166.28a16.6,16.6 0 0 0 -11.7,-5.13l-6.68,0l0,24.5l-4.45,0l0,-83.51l19,0a29.5,29.5 0 0 1 4.34,58.68l2.56,2.23l22.61,22.6l-6.35,0l-19.33,-19.37zm-18.38,-9.58l14.59,0a25.06,25.06 0 1 0 0,-50.11l-14.59,0l0,50.11z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_14"
        d="m901.17,102.14l18.15,0a41.76,41.76 0 1 1 0,83.51l-18.15,0l0,-83.51zm18.15,4.45l-13.69,0l0,74.61l13.69,0a37.31,37.31 0 1 0 0,-74.61z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_15"
        d="m1007,102.14a41.76,41.76 0 1 1 -41.76,41.75a41.76,41.76 0 0 1 41.76,-41.75zm0,79.06a37.31,37.31 0 1 0 -37.31,-37.31a37.45,37.45 0 0 0 37.31,37.31z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_16"
        d="m1096.41,118.51l-19.41,67.14l-4.68,0l-23.94,-83.51l4.68,0l21.6,75.38l20.38,-70.93l2.56,0l20.49,70.93l21.61,-75.38l4.67,0l-23.94,83.51l-4.68,0l-19.34,-67.14z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_17"
        d="m1148.1,102.14l4.46,0l54.9,75.83l0,-75.83l4.45,0l0,83.51l-4.45,0l-54.9,-75.72l0,75.72l-4.46,0l0,-83.51z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_18"
        d="m494.94,235.76l4.45,0l0,59.24a24.28,24.28 0 1 1 -48.55,0l0,-59.24l4.45,0l0,59.24a19.83,19.83 0 0 0 39.65,0l0,-59.24z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_19"
        d="m508.56,235.76l4.44,0l54.9,75.83l0,-75.83l4.45,0l0,83.52l-4.45,0l-54.9,-75.73l0,75.73l-4.46,0l0.02,-83.52z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_20"
        d="m581.76,235.76l18.15,0a41.76,41.76 0 0 1 0,83.52l-18.15,0l0,-83.52zm18.15,4.45l-13.69,0l0,74.61l13.69,0a37.31,37.31 0 1 0 0,-74.61z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_21"
        d="m648.3,235.76l48.44,0l0,4.45l-44,0l0,35.08l35.08,0l0,4.45l-35.07,0l0,35.08l44,0l0,4.46l-48.45,0l0,-83.52z"
      />
      <motion.path
        stroke="#1c3b1e"
        fill="#000000"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        id="svg_22"
        d="m723.38,299.9a16.58,16.58 0 0 0 -11.69,-5.12l-6.69,0l0,24.5l-4.46,0l0,-83.52l19,0a29.5,29.5 0 0 1 4.35,58.68l2.56,2.23l22.6,22.61l-6.34,0l-19.33,-19.38zm-18.38,-9.58l14.58,0a25.06,25.06 0 1 0 0,-50.11l-14.58,0l0,50.11z"
      />
    </motion.svg>
  );
}
