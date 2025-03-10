require('dotenv').config();
const express = require('express');
const path = require('path');
const { generateSlideContent } = require('./contentAgent');
const { createPresentation } = require('./generatePresentation');
const { generateSlideImage } = require('./imageAgent');

const app = express();
const port = 3000;

app.use(express.json());

// Basic route to check server status
app.get('/', (req, res) => {
  res.send('AI Presentation Generator is running!');
});

// Route to generate a presentation
app.post('/generate', async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  try {
    console.log(`Generating presentation for topic: ${topic}`);

    // Await the presentation creation since it's an async function
    const fileName = await createPresentation(topic);
    console.log('Presentation created with file name:', fileName);

    // Return file name and download link
    res.json({ 
      success: true, 
      message: 'Presentation generated!', 
      file: fileName,
      downloadUrl: `/download/${fileName}`
    });
  } catch (error) {
    console.error('Error generating presentation:', error.message);
    res.status(500).json({ error: 'Failed to generate presentation', message: error.message });
  }
});

// Route to preview slides without saving the file
app.post('/preview', async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  try {
    console.log(`Generating preview for topic: ${topic}`);
    const slideContent = await generateSlideContent(topic);
    const slides = slideContent.split(/(?:\n{2,}|\r\n{2,})/);
    
    const previewSlides = await Promise.all(slides.map(async (slideText, index) => {
      const slideTitle = slideText.split('\n')[0] || `Slide ${index + 1}`;
      const imageUrl = await generateSlideImage(slideTitle);

      return {
        title: slideTitle,
        content: slideText,
        image: imageUrl || null,
      };
    }));

    res.json({ success: true, slides: previewSlides });
  } catch (error) {
    console.error('Error generating preview:', error.message);
    res.status(500).json({ error: 'Failed to generate preview', message: error.message });
  }
});

// Route to download the presentation
app.get('/download/:fileName', (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, 'downloads', fileName);

  res.download(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).json({ error: 'Failed to download file', message: err.message });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working!' });
});
