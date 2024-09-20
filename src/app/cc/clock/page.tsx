"use client"

import * as React from "react"

// import p5 from "p5";
// import P5Canvas from "../sketches/P5Canvas";

export default function Clock() {
    // const sketch = (p: p5) => {

    //     let rotationSpeed = 7;
    //     let circleSize = 40;
    //     let totalCircles: number;
    //     let numCols: number;
    //     let numRows: number;
    //     let circlesPerSecond: number;
    //     let rotations: number[] = [];
    //     let flipColor: boolean[] = [];

    //     p.setup = () => {
    //         p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    //         p.angleMode(p.DEGREES);

    //         numCols = Math.floor(p.windowWidth / circleSize);
    //         numRows = Math.floor(p.windowHeight / circleSize);
    //         totalCircles = numRows * numCols
    //         circlesPerSecond = totalCircles / 60;

    //         resetSeconds();
    //     }

    //     p.windowResized = () => {
    //         p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    //         numCols = Math.floor(p.windowWidth / circleSize);
    //         numRows = Math.floor(p.windowHeight / circleSize);
    //         totalCircles = numRows * numCols
    //         circlesPerSecond = totalCircles / 60;

    //         resetSeconds();
    //     }

    //     function resetSeconds() {
    //         for (let i = 0; i < totalCircles; i++) {
    //             rotations[i] = 0;
    //             flipColor[i] = i < p.second() * circlesPerSecond;
    //         }
    //     }

    //     p.draw = () => {
    //         p.background(255);

    //         if (p.second() === 0) {
    //             resetSeconds();
    //         }

    //         for (let i = 0; i < numRows; i++) {
    //             for (let j = 0; j < numCols; j++) {
    //                 let circleIndex = (numRows - 1 - i) * numCols + j;

    //                 p.push();
    //                 p.translate(
    //                     j * circleSize - p.width / 2 + circleSize / 2,
    //                     i * circleSize - p.height / 2 + circleSize / 2
    //                 );


    //                 if (circleIndex <= p.second() * circlesPerSecond && circleIndex > (p.second() - 1) * circlesPerSecond) {
    //                     flipTile(circleIndex)
    //                 }

    //                 if (flipColor[circleIndex]) {
    //                     p.fill(0, 255, 150); // "Set" color
    //                 } else {
    //                     p.fill(0); // "Unset" color (black)
    //                 }

    //                 p.noStroke();
    //                 p.ellipse(0, 0, circleSize, circleSize); // Draw the circle

    //                 p.pop();
    //             }
    //         }

    //         p.push()
    //         let pg = p.createGraphics(p.windowWidth, p.windowHeight);

    //         // Now draw the 2D text using the 2D graphics buffer
    //         pg.clear(); // Clear the buffer for each frame
    //         pg.textSize(100);
    //         pg.fill('white');
    //         pg.textAlign(pg.CENTER, pg.CENTER);
    //         pg.text(`${p.hour()} ${p.minute()} ${p.second()}`, pg.width / 2, pg.height / 2);

    //         // Overlay the 2D graphics on top of the 3D canvas
    //         p.image(pg, -p.width / 2, -p.height / 2);
    //         p.pop()
    //     }

    //     function flipTile(tileIndex: number) {
    //         rotations[tileIndex] += rotationSpeed; // Increment its rotation

    //         p.rotateY(rotations[tileIndex]);

    //         if (rotations[tileIndex] >= 180 + 1) {
    //             rotations[tileIndex] = 180;
    //         }

    //         if (rotations[tileIndex] >= 90) {
    //             flipColor[tileIndex] = true;
    //         }
    //     }
    // }

    return <div className="flex flex-wrap items-center">
        {/* <P5Canvas sketch={sketch} /> */}
    </div>
}