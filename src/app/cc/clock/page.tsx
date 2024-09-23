"use client"

import * as React from "react"
import dynamic from 'next/dynamic'
import p5 from "p5";

const P5Canvas = dynamic(() => import('@/app/cc/sketches/P5Canvas'), { ssr: false });

export default function WordClock() {
    const sketch = (p: p5) => {

        let minSize: number;
        let maxSize: number;

        function calibrateSize() {
            minSize = p.map(p.windowWidth, 0, 5000, 150, 600);
            maxSize = minSize * 1.3;
        }

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            p.angleMode(p.DEGREES);
            calibrateSize()
        }

        p.windowResized = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            calibrateSize()
        }

        let currentTime: number;
        let sizeScale: number;
        let sizeWavelength = 10000;
        let rotationWavelength = 10000;

        p.draw = () => {
            p.background(0, 150, 255);

            p.push()
            currentTime = p.millis() % sizeWavelength;
            sizeScale = p.map(Math.sin(currentTime / sizeWavelength * Math.PI * 2), -1, 1, minSize, maxSize);

            p.noStroke();
            p.translate(p.width / 2, p.height / 2);

            let rotationAngle = Math.sin(currentTime / rotationWavelength * Math.PI * 2) * 180;
            p.rotate(rotationAngle);
            halo();

            seconds();
            flowerCenter();
            minutesHours();
            p.pop();

            p.fill('white');
            p.textSize(20);
            p.textStyle(p.BOLD)
            let hour = p.hour() % 12 || 12;
            p.text(hour + ":" + p.nf(p.minute(), 2) + ":" + p.nf(p.second(), 2), p.mouseX, p.mouseY);
        }

        function halo() {
            let haloW = Math.max(p.width / 1.5, 700);
            p.fill(255, 255, 255, 100);
            p.ellipse(0, 0, haloW, haloW);
        }

        function seconds() {
            let numLeaves = Math.floor(p.second() / 10) + 2

            let w = p.map(numLeaves, 2, 10, sizeScale * .95, sizeScale * .45)

            numLeaves *= 2;

            p.rectMode(p.CENTER)

            for (let i = 0; i < numLeaves; i++) {
                p.rotate(360 / numLeaves);
                p.fill('white');
                p.rect(0, 0, w, sizeScale * 2, 500);
            }
        }


        function minutesHours() {
            let tensMinutes = Math.floor(p.minute() / 10) + 1;
            let numCircles = tensMinutes * 2;
            let currentHour = p.hour() % 12 + 1;

            let distance = p.map(currentHour, 1, 12, sizeScale * 0.8, 0);

            if (numCircles > 0) {
                let angleStep = 360 / numCircles;

                for (let i = 0; i < numCircles; i++) {
                    p.push();
                    p.rotate(angleStep * i);
                    p.translate(0, distance);
                    p.fill('red');
                    p.ellipse(0, 0, sizeScale * 0.1, sizeScale * .3);
                    p.pop();
                }
            }
        }

        function flowerCenter() {
            p.push();
            p.fill(248, 220, 117);
            p.ellipse(0, 0, sizeScale / 2, sizeScale / 2);
            p.pop();
        }
    }

    return <div className="flex flex-wrap items-center">
        <P5Canvas sketch={sketch} />
    </div>
}