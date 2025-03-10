import { useState } from 'react';
import axios from 'axios';

export default function SlidePreviewApp() {
  const [topic, setTopic] = useState('');
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGeneratePreview = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/preview', { topic });
      setSlides(response.data.slides);
    } catch (error) {
      console.error('Error generating slide preview:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">AI Presentation Preview</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter a topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleGeneratePreview}
          disabled={!topic || loading}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {loading ? 'Generating...' : 'Generate Preview'}
        </button>
      </div>

      <div className="space-y-6">
        {slides.map((slide, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">{slide.title}</h2>
            <p className="text-gray-700">{slide.content}</p>
            {slide.image && (
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="mt-4 max-w-full rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
