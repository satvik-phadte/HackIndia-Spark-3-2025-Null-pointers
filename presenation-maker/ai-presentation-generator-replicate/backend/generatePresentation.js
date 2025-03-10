const pptxgen = require('pptxgenjs');
const { generateSlideContent } = require('./contentAgent');
const { generateSlideImage } = require('./imageAgent');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

// Function to create a PowerPoint presentation with text and images
async function createPresentation(topic) {
  try {
    console.log('Starting presentation generation for topic:', topic);
    const slideContent = await generateSlideContent(topic);
    const pptx = new pptxgen();
    
    // Set default slide size to 16:9
    pptx.layout = 'LAYOUT_16x9';
    
    // Split content into slides using double newlines
    const slides = slideContent.split(/\n\s*\n/).filter(slide => slide.trim());
    console.log(`Generated ${slides.length} slides`);

    for (const [index, slideText] of slides.entries()) {
      console.log(`\nProcessing slide ${index + 1}/${slides.length}`);
      const slide = pptx.addSlide();
      
      // Get the first line as the title and rest as content
      const lines = slideText.split('\n').map(line => line.trim()).filter(line => line);
      const slideTitle = lines[0];
      const slideContent = lines.slice(1).join('\n');

      // Only proceed if we have a valid title
      if (slideTitle) {
        console.log(`Slide ${index + 1} title: "${slideTitle}"`);
        
        // Generate image first so it can be placed in the background
        const imageData = await generateSlideImage(slideTitle);
        
        if (imageData) {
          console.log(`Image generated successfully for slide ${index + 1}`);
          
          try {
            // Save debug info
            const debugDir = path.join(__dirname, 'debug');
            await fs.mkdir(debugDir, { recursive: true });
            const debugPath = path.join(debugDir, `slide_${index + 1}_debug.txt`);
            await fs.writeFile(debugPath, `Image Data Length: ${imageData.length}\nFirst 100 chars: ${imageData.substring(0, 100)}`);
            
            // Add image to the right side of the slide
            slide.addImage({
              data: imageData,
              x: '60%',     // Start from 60% of slide width
              y: '10%',     // Start from 10% of slide height
              w: '35%',     // Take up 35% of slide width
              h: '80%',     // Take up 80% of slide height
              sizing: { type: 'contain' }
            });
            console.log(`Added image to slide ${index + 1}`);

            // Add a border rectangle around the image area (for debugging)
            slide.addShape(pptx.ShapeType.rect, {
              x: '60%',
              y: '10%',
              w: '35%',
              h: '80%',
              line: { color: 'CCCCCC', width: 1 },
              fill: { transparency: 100 }
            });

          } catch (imageError) {
            console.error(`Error adding image to slide ${index + 1}:`, imageError);
          }

          // Add title with background
          slide.addShape(pptx.ShapeType.rect, {
            x: '5%',
            y: '10%',
            w: '50%',
            h: '15%',
            fill: { color: 'F5F5F5' },
            line: { color: 'CCCCCC', width: 1 }
          });

          slide.addText(slideTitle, {
            x: '7%',        // Inside the background shape
            y: '12%',       // Inside the background shape
            w: '46%',       // Leave some padding
            fontSize: 28,
            bold: true,
            color: '363636'
          });

          // Add content with background
          if (slideContent) {
            slide.addShape(pptx.ShapeType.rect, {
              x: '5%',
              y: '30%',
              w: '50%',
              h: '60%',
              fill: { color: 'FFFFFF' },
              line: { color: 'CCCCCC', width: 1 }
            });

            slide.addText(slideContent, {
              x: '7%',      // Inside the background shape
              y: '32%',     // Inside the background shape
              w: '46%',     // Leave some padding
              fontSize: 18,
              color: '666666',
              breakLine: true,
              lineSpacing: 1.3
            });
          }
        } else {
          // If no image, use full width for content
          slide.addShape(pptx.ShapeType.rect, {
            x: '5%',
            y: '10%',
            w: '90%',
            h: '15%',
            fill: { color: 'F5F5F5' },
            line: { color: 'CCCCCC', width: 1 }
          });

          slide.addText(slideTitle, {
            x: '7%',
            y: '12%',
            w: '86%',
            fontSize: 28,
            bold: true,
            color: '363636'
          });

          if (slideContent) {
            slide.addShape(pptx.ShapeType.rect, {
              x: '5%',
              y: '30%',
              w: '90%',
              h: '60%',
              fill: { color: 'FFFFFF' },
              line: { color: 'CCCCCC', width: 1 }
            });

            slide.addText(slideContent, {
              x: '7%',
              y: '32%',
              w: '86%',
              fontSize: 18,
              color: '666666',
              breakLine: true,
              lineSpacing: 1.3
            });
          }
        }
      } else {
        console.warn(`Skipping slide ${index + 1} due to missing title`);
      }
    }

    // Save the presentation
    const fileName = `presentation_${Date.now()}.pptx`;
    await pptx.writeFile(fileName);
    console.log(`\nPresentation saved successfully: ${fileName}`);

    return fileName;
  } catch (error) {
    console.error('Error creating presentation:', error);
    throw error;
  }
}

module.exports = { createPresentation };
