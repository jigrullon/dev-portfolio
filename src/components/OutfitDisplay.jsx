import { useState, useEffect } from 'react';

function OutfitDisplay() {
  const [outfit, setOutfit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/outfit.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch outfit');
        }
        return response.json();
      })
      .then(data => {
        setOutfit(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="outfit-display">Loading today's outfit...</div>;
  if (error) return <div className="outfit-display error">Error: {error}</div>;
  if (!outfit) return null;

  return (
    <div className="outfit-display">
      <h2>Today's Outfit 👔</h2>
      <div className="outfit-card">
        <div className="outfit-header">
          <span className="date">{outfit.date}</span>
          <span className="day-number">Day #{outfit.dayNumber}</span>
        </div>
        
        <div className="outfit-details">
          <div className="item">
            <strong>Top:</strong> {outfit.outfit.top}
          </div>
          <div className="item">
            <strong>Bottom:</strong> {outfit.outfit.bottom}
          </div>
          <div className="item">
            <strong>Shoes:</strong> {outfit.outfit.shoes}
          </div>
          {outfit.outfit.accessories && outfit.outfit.accessories.length > 0 && (
            <div className="item">
              <strong>Accessories:</strong> {outfit.outfit.accessories.join(', ')}
            </div>
          )}
        </div>

        <div className="outfit-meta">
          <div className="weather">☁️ {outfit.weather}</div>
          <div className="mood">😊 {outfit.mood}</div>
        </div>

        {outfit.notes && (
          <div className="notes">
            <em>{outfit.notes}</em>
          </div>
        )}
      </div>

      <style>{`
        .outfit-display {
          max-width: 500px;
          margin: 20px auto;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .outfit-display h2 {
          text-align: center;
          color: #333;
        }

        .outfit-card {
          background: #f9f9f9;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .outfit-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #e0e0e0;
        }

        .date {
          font-size: 1.1em;
          color: #666;
        }

        .day-number {
          background: #007bff;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9em;
          font-weight: bold;
        }

        .outfit-details {
          margin: 20px 0;
        }

        .item {
          margin: 12px 0;
          font-size: 1.05em;
          line-height: 1.6;
        }

        .item strong {
          color: #444;
          margin-right: 8px;
        }

        .outfit-meta {
          display: flex;
          gap: 20px;
          margin: 20px 0;
          padding: 12px;
          background: white;
          border-radius: 8px;
        }

        .weather, .mood {
          flex: 1;
          font-size: 0.95em;
        }

        .notes {
          margin-top: 16px;
          padding: 12px;
          background: #fff9e6;
          border-left: 3px solid #ffd700;
          border-radius: 4px;
          color: #666;
        }

        .error {
          color: #d32f2f;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

export default OutfitDisplay;