const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Projects data
const projects = [
  {
    slug: 'weather-app',
    name: 'Weather App',
    description: 'A haunting weather application that predicts storms and darkness. Built with modern web technologies to provide real-time weather updates.',
    tech: ['Angular', 'TypeScript', 'Weather API', 'RxJS'],
    year: '2023',
    status: 'completed',
    features: ['Real-time weather data', 'Location-based forecasts', 'Dark theme interface', 'Responsive design']
  },
  {
    slug: 'ai-health-assistant',
    name: 'AI Health Assistant',
    description: 'An AI that diagnoses the living... and the dead. Powered by machine learning to provide health insights and recommendations.',
    tech: ['Python', 'TensorFlow', 'Flask', 'scikit-learn'],
    year: '2023',
    status: 'completed',
    features: ['AI-powered diagnostics', 'Health tracking', 'Personalized recommendations', 'Data visualization']
  },
  {
    slug: 'js-quiz',
    name: 'JS Quiz',
    description: 'Test your JavaScript knowledge... if you dare. An interactive quiz application with challenging questions and instant feedback.',
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    year: '2022',
    status: 'completed',
    features: ['Multiple difficulty levels', 'Score tracking', 'Timed challenges', 'Progress saving']
  },
  {
    slug: 'movie-library',
    name: 'Movie Library',
    description: 'A collection of horror films and forgotten classics. Browse, search, and discover movies with detailed information and ratings.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    year: '2023',
    status: 'completed',
    features: ['Movie search and filtering', 'User ratings and reviews', 'Watchlist management', 'Recommendation engine']
  },
  {
    slug: 'face-off',
    name: 'Face Off',
    description: 'Face recognition that sees beyond the living. Advanced facial recognition system using computer vision and deep learning.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'NumPy'],
    year: '2022',
    status: 'completed',
    features: ['Real-time face detection', 'Multiple face recognition', 'Emotion detection', 'Age estimation']
  },
  {
    slug: 'echo-persona',
    name: 'Echo Persona',
    description: 'An AI that echoes your darkest thoughts. Natural language processing chatbot with personality and context awareness.',
    tech: ['Node.js', 'NLP', 'Express', 'OpenAI API'],
    year: '2023',
    status: 'completed',
    features: ['Conversational AI', 'Context awareness', 'Personality customization', 'Multi-language support']
  }
];

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Get all projects
app.get('/api/projects', (req, res) => {
  try {
    const projectList = projects.map(p => ({
      slug: p.slug,
      name: p.name,
      year: p.year,
      status: p.status
    }));
    res.json({ success: true, data: projectList });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch projects' });
  }
});

// Get project by slug
app.get('/api/projects/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const project = projects.find(p => p.slug === slug);
    
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch project' });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email address' });
    }
    
    console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() });
    
    res.json({ success: true, message: 'Your message has been sent to the spirit realm!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
