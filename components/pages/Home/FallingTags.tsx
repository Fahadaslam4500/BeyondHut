'use client'

import React, { useEffect, useRef } from 'react';
import {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Mouse,
  MouseConstraint,
  Events,
  Body // Import Body for type annotations
} from 'matter-js';

// Main component for the physics animation
const FallingButtons = () => {
  // Refs for the component and engine to manage them across re-renders
  // Specify the type for the refs to satisfy TypeScript
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Engine | null>(null);

  useEffect(() => {
    // Check if the component ref exists
    const sceneElement = sceneRef.current;
    if (!sceneElement) {
      return;
    }

    // Define the dimensions of the physics canvas
    const containerWidth = sceneElement.offsetWidth;
    const containerHeight = sceneElement.offsetHeight;

    // Create a Matter.js engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Create a renderer for the engine, linking it to the component's div
    const render = Render.create({
      element: sceneElement,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: 'transparent' // Set background to transparent
      },
    });

    // Create and add the ground body (a static rectangle at the bottom)
    const ground = Bodies.rectangle(
      containerWidth / 2,
      containerHeight + 25,
      containerWidth,
      50, {
        isStatic: true,
        render: {
          fillStyle: 'transparent' // Make the ground invisible
        }
      }
    );
    Composite.add(world, [ground]);

    // An array of button configurations
    const fallingButtons = [{
      text: 'Faster Closures',
      width: 160,
      height: 40
    }, {
      text: 'More Time',
      width: 120,
      height: 40
    }, {
      text: 'Proven ROI',
      width: 130,
      height: 40
    }, {
      text: 'No Long-Term Contract',
      width: 200,
      height: 40
    }, {
      text: 'Scalable',
      width: 100,
      height: 40
    }, {
      text: 'Plug-and-Play',
      width: 140,
      height: 40
    }, {
      text: 'Full Admin Support',
      width: 180,
      height: 40
    }, {
      text: '£25K/year',
      width: 120,
      height: 40
    }, ];

    // Function to create a button body with explicit types
    const createButton = (text: string, width: number, height: number, x: number, y: number, color: string): Body => {
      const body = Bodies.rectangle(x, y, width, height, {
        chamfer: {
          radius: height / 2 // Create rounded corners
        },
        restitution: 0.5, // How "bouncy" the body is
        friction: 0.1, // How much the body rubs against others
        density: 0.001, // Mass of the body
        render: {
          fillStyle: color,
        },
      });

      // Add text label to the body for custom rendering
      (body as any).label = text;
      (body as any).width = width;
      (body as any).height = height;

      return body;
    };

    // A function to handle the creation and dropping of elements
    const dropElements = () => {
      let delay = 0;
      const xOffset = containerWidth / 4;
      const colors = ['#00BFFF', '#5F9EA0', '#8FBC8F', '#20B2AA'];

      // Loop through the buttons and drop them with a delay
      fallingButtons.forEach((button, index) => {
        setTimeout(() => {
          const x = xOffset + Math.random() * (containerWidth / 2);
          const y = -50; // Start off-screen at the top
          const color = colors[index % colors.length];
          const newButton = createButton(button.text, button.width, button.height, x, y, color);
          Composite.add(world, [newButton]);
        }, delay);
        delay += 500; // Increase delay for the next button
      });
    };

    // Add a custom event listener to render the text on each body
    Events.on(render, 'afterRender', () => {
      const bodies = Composite.allBodies(engine.world);
      const context = render.context;

      context.save();
      context.font = '12px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#1e1e1e';

      bodies.forEach((body) => {
        // Check if the body has our custom label property
        if ((body as any).label) {
          context.fillText((body as any).label, body.position.x, body.position.y);
        }
      });

      context.restore();
    });

    // Create a mouse constraint to allow interaction with the elements
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(world, mouseConstraint);

    // Run the engine and the renderer
    Render.run(render);
    const runner = Runner.run(engine);

    // Initial drop of the elements
    dropElements();

    // Clean up function to stop the engine and renderer when the component unmounts
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      Events.off(render, 'afterRender');
      sceneElement.innerHTML = ''; // Clean up the DOM
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div
      ref={sceneRef}
      className="w-full h-96 border border-gray-300 rounded-xl overflow-hidden bg-gray-50 shadow-inner"
    >
      {/* The Matter.js canvas will be appended here */}
    </div>
  );
};

export default FallingButtons;
