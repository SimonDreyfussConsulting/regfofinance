const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Brand colors
const DEEP_BLUE = '#1E3A8A';
const TEAL = '#14B8A6';
const WHITE = '#FFFFFF';

// Dimensions (OG image standard)
const WIDTH = 1200;
const HEIGHT = 630;

// Create canvas
const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

// Fill background with deep blue
ctx.fillStyle = DEEP_BLUE;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Create subtle gradient overlay
const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
gradient.addColorStop(0, 'rgba(20, 184, 166, 0.15)'); // Teal with low opacity
gradient.addColorStop(0.5, 'rgba(30, 58, 138, 0)');    // Transparent
gradient.addColorStop(1, 'rgba(20, 184, 166, 0.1)');   // Teal with low opacity
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Draw geometric pattern (subtle grid of dots)
ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
const dotSpacing = 40;
const dotRadius = 2;
for (let x = dotSpacing; x < WIDTH; x += dotSpacing) {
  for (let y = dotSpacing; y < HEIGHT; y += dotSpacing) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Draw decorative teal accent lines
ctx.strokeStyle = TEAL;
ctx.lineWidth = 3;
ctx.globalAlpha = 0.3;

// Top-left corner accent
ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(150, 0);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();

// Bottom-right corner accent
ctx.beginPath();
ctx.moveTo(WIDTH - 150, HEIGHT);
ctx.lineTo(WIDTH, HEIGHT - 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(WIDTH - 200, HEIGHT);
ctx.lineTo(WIDTH, HEIGHT - 200);
ctx.stroke();

ctx.globalAlpha = 1;

// Draw centered logo mark (stylized "RF" in a circle)
const centerX = WIDTH / 2;
const centerY = HEIGHT / 2 - 30;
const circleRadius = 80;

// Outer circle
ctx.strokeStyle = TEAL;
ctx.lineWidth = 4;
ctx.beginPath();
ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
ctx.stroke();

// Inner filled circle with slight transparency
ctx.fillStyle = 'rgba(20, 184, 166, 0.15)';
ctx.beginPath();
ctx.arc(centerX, centerY, circleRadius - 4, 0, Math.PI * 2);
ctx.fill();

// "RF" text inside circle
ctx.fillStyle = WHITE;
ctx.font = 'bold 60px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('RF', centerX, centerY);

// Brand name below
ctx.fillStyle = WHITE;
ctx.font = 'bold 36px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('RegularFolkFinance', centerX, centerY + 130);

// Tagline
ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
ctx.font = '20px Arial, sans-serif';
ctx.fillText('Data-Driven Financial Insights', centerX, centerY + 175);

// Save as JPG
const outputDir = path.join(__dirname, '..', 'public', 'images', 'articles');
const outputPath = path.join(outputDir, 'placeholder.jpg');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write file
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.92 });
fs.writeFileSync(outputPath, buffer);

console.log(`Placeholder image created at: ${outputPath}`);
console.log(`Dimensions: ${WIDTH}x${HEIGHT}`);
console.log(`File size: ${(buffer.length / 1024).toFixed(1)} KB`);
