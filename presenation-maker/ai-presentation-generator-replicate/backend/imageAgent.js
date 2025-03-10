const axios = require('axios');
const Replicate = require('replicate');
const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
require('dotenv').config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function generateSlideImage(slideTitle) {
  try {
    console.log(`Starting image generation for: "${slideTitle}"`);
    
    // Generate image using Flux Schnell
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: `Professional presentation slide image of ${slideTitle}, minimalist, clean design, corporate style, high quality`,
          negative_prompt: "text, watermark, signature, blurry, low quality, distorted",
          scheduler: "K_EULER",
          num_inference_steps: 4,
          guidance_scale: 7.5
        }
      }
    );

    console.log('Replicate response:', output);

    if (!output || !output[0]) {
      console.error('No image URL received from Replicate');
      return null;
    }

    const imageUrl = output[0];
    console.log('Image URL received:', imageUrl);

    // Create temp directory if it doesn't exist
    const tempDir = path.join(__dirname, 'temp');
    await fs.mkdir(tempDir, { recursive: true });

    // Download the image
    const imageResponse = await axios.get(imageUrl, { 
      responseType: 'arraybuffer',
      timeout: 30000
    });

    // Convert to PNG using Sharp
    const pngBuffer = await sharp(imageResponse.data)
      .resize(1024, 768, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();

    // Save PNG to temporary file for debugging
    const tempFilePath = path.join(tempDir, `slide_${Date.now()}.png`);
    await fs.writeFile(tempFilePath, pngBuffer);
    console.log(`Saved PNG image to temporary file: ${tempFilePath}`);

    // Convert PNG to base64
    const base64Image = pngBuffer.toString('base64');
    console.log(`Successfully converted image to PNG base64 (length: ${base64Image.length})`);

    // Clean up the temporary file
    await fs.unlink(tempFilePath).catch(console.error);

    // Return as a PNG data URL
    return `data:image/png;base64,${base64Image}`;
  } catch (error) {
    console.error('Error generating image:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    return null;
  }
}

module.exports = { generateSlideImage };
