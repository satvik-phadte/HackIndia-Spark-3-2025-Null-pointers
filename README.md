# AI Presentation Generator 🎯

An innovative tool that automatically generates professional PowerPoint presentations using AI technology. This project leverages multiple AI models to create engaging presentations with content generation and image creation capabilities. Perfect for quickly creating professional presentations for meetings, lectures, or any speaking engagement.

## 🌟 Features

- **Automated Presentation Creation**: Generate complete PowerPoint presentations from simple prompts
- **Custom Image And Content Generation**: Creates relevant images and content for slides using Replicate AI
- **Professional Formatting**: Automatically formats slides with proper layouts and design elements
- **Express.js Backend**: Robust backend architecture for handling presentation generation requests
- **Modern Slide Design**: 16:9 widescreen format with clean, professional layouts
- **Intelligent Content Structure**: Automatically organizes content with proper hierarchy and formatting
- **Real-time Processing**: Generate presentations in minutes instead of hours


# Frontend

Built with Next.js and Tailwind CSS

## 📋Prerequisites

Make sure you have Node.js installed.

## Getting Started

To view the page in the browser, download the whole repository and open the file `page.tsx` in the `app` folder.

Run the following command:

```sh
npm run dev
```

or run it on Node.js.

## Folder Structure

```
/app      - Contains the main application pages and components
/public   - Some assets
/styles   - Global styles and Tailwind CSS config
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - Icon library



# Backend Framework: 
- **Express.js**
- **AI Services**:
  - Replicate AI (Llama 2 70B) for structured content creation
- **Presentation Generation**: pptxgenjs for programmatic PowerPoint creation
- **Image Processing**: Sharp for optimizing and handling generated images
- **Other Tools**:
  - Axios for HTTP requests and API communication
  - dotenv for secure environment variable management

## 📋 Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn package manager
- API keys for:
  - Replicate
- Sufficient storage space for image processing and presentation generation

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-presentation-generator-replicate.git
cd ai-presentation-generator-replicate
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
REPLICATE_API_TOKEN=your_replicate_api_token
```

4. Start the server:
```bash
node backend/index.js
```

## Project Structure for backend

```
ai-presentation-generator-replicate/
├── backend/
│   ├── contentAgent.js      # Handles AI content generation using Llama 2
│   ├── imageAgent.js        # Manages AI image generation with Replicate
│   ├── generatePresentation.js  # Core presentation creation logic
│   ├── index.js            # Express server setup and routing
│   ├── debug/              # Debug information and logs
│   └── temp/               # Temporary file storage
├── package.json            # Project dependencies and scripts
└── .env                    # Environment variables configuration
```

## 💡 How It Works

### 1. Content Generation
- User submits a topic or prompt for the presentation
- The contentAgent uses Llama 2 70B model to generate structured content
- Content is automatically organized into 5 slides with:
  - Clear, concise titles (2-5 words)
  - 3-4 bullet points per slide
  - Proper spacing and formatting

### 2. Image Generation
- For each slide, the imageAgent generates a relevant image based on the slide title
- Images are optimized and processed using Sharp
- Images are positioned on the right side of each slide

### 3. Presentation Assembly
- The generatePresentation module creates a 16:9 widescreen presentation
- Each slide follows a consistent layout:
  - Title with professional background (left side)
  - Content with bullet points (left side)
  - Generated image (right side)
- Slides include proper spacing, formatting, and visual elements

### 4. Output
- The final presentation is saved as a PowerPoint file
- Unique filename includes timestamp for easy identification
- Debug information is stored for troubleshooting

## 🎨 Slide Design

Each slide follows a professional layout:
- Left 60% contains text content
- Right 40% displays AI-generated image
- Clean typography with:
  - 28pt titles
  - 18pt body text
  - 1.3 line spacing for readability
- Professional color scheme:
  - Light backgrounds (F5F5F5 for titles, FFFFFF for content)
  - Dark gray text (363636 for titles, 666666 for content)
  - Subtle borders for visual separation

## 🔑 Environment Variables
Generative AI
- `REPLICATE_API_TOKEN`: API token for Replicate AI
