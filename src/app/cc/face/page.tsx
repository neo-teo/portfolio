"use client"

import * as React from "react"

import P5Canvas from "../sketches/P5Canvas";

type FallingObject = {
    x: any;
    y: any;
    speedY: any;
    draw: (drawX: any, drawY: any) => void;
}

type BoundObject = {
    object: FallingObject,
    relativeX: number,
    relativeY: number,
    boundRotation: number
}

export default function Face() {
    const sketch = (p: p5) => {
        let fallingObject: FallingObject | null;
        let boundObjects: BoundObject[] = [];
        let dropInterval = 5000; // milliseconds
        let lastDropTime = 0;

        let rotation = 0;
        let rotationSpeed = 6;
        let moveSpeed = 6;
        let ballX: number;

        let ballColor: p5.Color;

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);

            ballX = p.width / 2; // Initial position of the ball
            fallingObject = createRandomObject(); // Start with a single falling object

            ballColor = p.color(p.random(255), p.random(255), p.random(255));
        }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }

        p.mouseClicked = () => {
            boundObjects = [];
            ballColor = p.color(p.random(255), p.random(255), p.random(255));
        }

        p.keyPressed = () => {
            if (p.key === 'S' || p.key === 's') {
                p.saveCanvas('banana_face', 'png');
            }
        }

        p.draw = () => {
            p.background(255);

            let now = p.millis();

            // Handle dropping a new object every 10 seconds
            if (now - lastDropTime > dropInterval) {
                fallingObject = createRandomObject();
                lastDropTime = now;
            }

            // Handle the rolling ball and the bound objects
            rollingBall();

            // Handle the falling object
            if (fallingObject) {
                fallingObject.y += fallingObject.speedY;
                fallingObject.draw(fallingObject.x, fallingObject.y); // Pass x and y as parameters

                // Check if the falling object intersects with the ball
                if (fallingObject.y + 20 >= p.height - 50 && p.dist(fallingObject.x, fallingObject.y, ballX, p.height - 50) < 50) {
                    // Calculate the object's position relative to the ball's current rotation
                    let angle = p.atan2(fallingObject.y - (p.height - 50), fallingObject.x - ballX) - p.radians(rotation);
                    let distance = p.dist(fallingObject.x, fallingObject.y, ballX, p.height - 50);

                    boundObjects.push({
                        object: fallingObject,
                        relativeX: p.cos(angle) * distance,
                        relativeY: p.sin(angle) * distance,
                        boundRotation: p.radians(rotation) // Store the current rotation of the ball
                    });
                    fallingObject = null; // Remove the falling object
                }

                if (fallingObject && fallingObject.y > p.height) {
                    fallingObject = createRandomObject();
                    lastDropTime = now;
                }
            }
        }

        function rollingBall() {
            if (p.mouseX > ballX + 10) {
                if (ballX < p.width - 50) {
                    ballX += moveSpeed;
                    rotation += rotationSpeed;
                }
            } else if (p.mouseX < ballX - 10) {
                if (ballX > 50) {
                    ballX -= moveSpeed;
                    rotation -= rotationSpeed;
                }
            }

            // Draw the ball with rotation first
            p.push();
            p.translate(ballX, p.height - 50); // Place the ball at the bottom
            p.rotate(p.radians(rotation)); // Apply the rotation
            p.fill(ballColor);
            p.ellipse(0, 0, 100, 100); // Draw the ball
            p.pop();

            // Draw the bound objects second, on top of the ball
            p.push();
            p.translate(ballX, p.height - 50);
            p.rotate(p.radians(rotation)); // Apply the same rotation to the bound objects
            for (let bound of boundObjects) {
                p.push();
                p.translate(bound.relativeX, bound.relativeY); // Use the saved position relative to the ball's center
                p.rotate(-bound.boundRotation); // Apply the object's stored rotation, counter-rotating
                bound.object.draw(0, 0); // Draw each bound object
                p.pop();
            }
            p.pop();
        }

        // Function to create a random object (eye, banana, or other shapes)
        function createRandomObject() {
            let objectType = p.random(['eye', 'banana']);
            let x = p.random(p.width);
            let y = 0;
            let speedY = 3;

            switch (objectType) {
                case 'eye':
                    return createEye(x, y, speedY);
                case 'banana':
                    return createBanana(x, y, speedY);
                default:
                    return createEye(x, y, speedY);
            }
        }

        // Function to create an eye object
        function createEye(x: number, y: number, speedY: number) {
            return {
                x: x,
                y: y,
                speedY: speedY,
                eyeballR: 15,
                irisR: 7,
                draw: function (drawX: number, drawY: number) {
                    p.fill(255);
                    p.ellipse(drawX, drawY, this.eyeballR * 2);
                    p.fill(0);
                    p.ellipse(drawX, drawY, this.irisR * 2);
                }
            };
        }

        // Function to create a banana object
        function createBanana(x: number, y: number, speedY: number) {
            return {
                x: x,
                y: y,
                speedY: speedY,
                draw: function (drawX: number, drawY: number) {
                    p.fill(255, 204, 0);
                    p.arc(drawX, drawY, 50, 20, 0, -p.PI);

                    // Top covering line
                    p.line(drawX - 25, drawY, drawX + 25, drawY); // Simple straight line covering the arc

                    p.push()
                    // Brown stem at the end
                    p.stroke(139, 69, 19); // Brown color for stem
                    // strokeWeight(4);
                    p.arc(drawX, drawY, 40, 10, 0, -p.PI); // Smaller arc inside the banana

                    p.fill('brown')
                    p.rect(drawX + 25, drawY, 5, 3); // Short line for the stem
                    p.pop()
                }
            };
        }
    };

    return <div className="flex flex-wrap items-center">
        <P5Canvas sketch={sketch} />
    </div>
}