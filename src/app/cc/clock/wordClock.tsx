"use client"

import * as React from "react"
import dynamic from 'next/dynamic'
import p5 from "p5";

const P5Canvas = dynamic(() => import('@/app/cc/sketches/P5Canvas'), { ssr: false });

const secondActivities = [
    "Blink", "Breathe", "Tap your finger", "Snap your fingers", "Glance at your phone",
    "Stretch your fingers", "Adjust your posture", "Flick your hair", "Look around the room",
    "Take a sip of water", "Scratch an itch", "Nod your head", "Shift in your chair", "Hum a note",
    "Wiggle your toes", "Check the time", "Smile", "Crack your knuckles", "Swivel in your chair",
    "Sigh", "Move your mouse", "Scroll down", "Roll your eyes", "Yawn", "Rub your eyes",
    "Tilt your head", "Stretch your neck", "Clench your fists", "Raise your eyebrows",
    "Shuffle your feet", "Snap a photo", "Look out the window", "Pop your ears", "Swallow",
    "Clear your throat", "Scratch your head", "Take a deep breath", "Tap your foot",
    "Roll your shoulders", "Look at your nails", "Drum your fingers", "Sneeze", "Exhale loudly",
    "Tap a key", "Rub your temples", "Stretch your back", "Tilt your head back",
    "Blink twice", "Click your mouse", "Pinch your nose", "Swat at the air", "Frown",
    "Grin", "Pout", "Twist a ring", "Spin in your chair", "Tug your sleeve", "Wave your hand",
    "Nudge something", "Look at the ceiling", "Examine an object", "Lick your lips", "Narrow your eyes"
];


const minuteActivities = [
    "Brush your teeth", "Brew a cup of coffee", "Write an email", "Send a text message",
    "Walk around the block", "Tidy up your desk", "Read a short article", "Take a quick stretch break",
    "Fold a t-shirt", "Water a plant", "Eat a snack", "Do a short breathing exercise",
    "Organize a drawer", "Put on makeup", "Solve a crossword puzzle clue", "Refill your water bottle",
    "Take a photo", "Wash your hands", "Make a to-do list", "Listen to a short song",
    "Wipe your glasses", "Prepare a snack", "Respond to a message", "Do a quick stretch",
    "Check your schedule", "Check the weather", "Skim the news", "Clip your nails",
    "Sharpen a pencil", "Sweep the floor", "Unload the dishwasher", "Draw a doodle",
    "Clean your phone screen", "Organize your bag", "Check social media", "Find a recipe",
    "Do a puzzle", "Rearrange a shelf", "Tie your shoes", "Clean your keyboard", "Fix your hair",
    "Refill a pet's water bowl", "Choose an outfit", "Pour a glass of water", "Update your calendar",
    "Set a timer", "Water your garden", "Write a thank-you note", "Look for a recipe",
    "Turn on the lights", "Watch a short video", "Send a voice message", "Read a poem",
    "Write down an idea", "Look up a word", "Do a short meditation", "Check your fitness app",
    "Fold a towel", "Jot down a shopping list", "Check your emails", "Find a podcast episode",
    "Adjust a thermostat", "Pack a snack"
];


const hourActivities = [
    "Watch an episode of your favorite show",
    "Take a nap",
    "Do a workout",
    "Cook a meal",
    "Finish a book chapter",
    "Go grocery shopping",
    "Play a board game",
    "Have a meeting",
    "Go for a hike",
    "Bake cookies",
    "Write in a journal",
    "Paint a picture",
    "Complete a DIY project",
    "Listen to a podcast",
    "Visit a friend",
    "Go for a run",
    "Deep clean a room",
    "Take a long bath",
    "Start a new hobby",
    "Attend a class",
    "Read a book",
    "Plan a day trip",
    "Host a dinner",
    "Go to the movies"
];



export default function WordClock() {
    const sketch = (p: p5) => {

        let headerHeight = 0;

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);

            p.angleMode(p.DEGREES);
        }

        p.windowResized = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
        }

        p.draw = () => {
            p.background(255);

            header();
            drawSeconds();
            drawMinutes();
            drawHours();
        }

        function header() {
            p.push();
            let textSizeFactor = 0.08; // Adjust this value to control the size
            let proportionalTextSize = p.width * textSizeFactor;
            p.textSize(proportionalTextSize);
            p.textStyle(p.BOLD)

            // Display text in the center of the canvas
            p.text("Since 9am this morning", 25, proportionalTextSize);

            headerHeight = proportionalTextSize * 2;
            p.pop();
        }

        function drawSeconds() {
            for (let i = 0; i < p.second(); i++) {
                p.push();
                p.translate(25, headerHeight + 40 + i * 20);
                p.text(secondActivities[i], 0, 0);
                p.pop();
            }
        }

        function drawMinutes() {
            for (let i = 0; i < p.minute(); i++) {
                p.push();
                p.translate(p.width / 3 + 25, headerHeight + 40 + i * 20);
                p.text(minuteActivities[i], 0, 0);
                p.pop();
            }
        }

        function drawHours() {
            console.log(p.hour())
            for (let i = 0; i < p.hour(); i++) {
                p.push();
                p.translate(2 * p.width / 3 + 25, headerHeight + 40 + i * 20);
                p.text(hourActivities[i], 0, 0);
                p.pop();
            }
        }

    }
    return <div className="flex flex-wrap items-center">
        <P5Canvas sketch={sketch} />
    </div>
}