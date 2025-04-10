export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Solo se permite POST' });
    }
  
    try {
      const response = await fetch('http://54.145.241.91:5001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Error en /api/register:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
  