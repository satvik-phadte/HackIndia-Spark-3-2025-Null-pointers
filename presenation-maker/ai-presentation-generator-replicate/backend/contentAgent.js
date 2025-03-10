const Replicate = require('replicate');

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function generateSlideContent(topic) {
  try {
    const systemPrompt = `You are an AI that generates structured slide content for presentations.
    Generate exactly 5 slides for the presentation.
    Each slide must start with a short, clear title (2-5 words) on its own line.
    Do not include any prefixes like "Slide:" or "Title:".
    Do not include slide numbers.
    After each title, include 3-4 bullet points.
    Separate slides with double newlines.
    Format exactly like this example:

    Introduction
    - Key point one
    - Key point two
    - Key point three

    Main Features
    - Feature one details
    - Feature two details
    - Feature three details`;

    const userPrompt = `Create a 5-slide presentation about: ${topic}`;

    const output = await replicate.run(
      "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
      {
        input: {
          prompt: `${systemPrompt}\n\n${userPrompt}`,
          temperature: 0.7,
          max_tokens: 1000,
          top_p: 0.9
        }
      }
    );

    // Replicate returns an array of strings, we join them
    let content = output.join('');
    
    // Clean up the content
    content = content
      // Remove any "Here's a presentation..." or similar prefix
      .replace(/^(Here('s| is)|Sure,|I'll create|Let me|Now I'll).*?\n/i, '')
      // Remove any numbered prefixes
      .replace(/^\d+\.\s*/gm, '')
      // Remove "Slide:" or "Title:" prefixes
      .replace(/^(Slide|Title):\s*/gmi, '')
      // Ensure proper spacing between slides
      .split(/\n\s*\n/)
      .map(slide => slide.trim())
      .filter(slide => slide)
      .join('\n\n');

    if (!content.trim()) {
      throw new Error('Empty content received from Replicate.');
    }

    return content;
  } catch (error) {
    console.error('Error generating slide content:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { generateSlideContent };
