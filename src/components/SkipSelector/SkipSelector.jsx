import React, { useEffect, useState } from 'react';
import './style.css';

export default function SkipSelector({ selectedSkip, onSelect }) {
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then(res => res.json())
      .then(data => setSkips(data))
      .catch(err => console.error(err));
  }, []);

  const calculateTotalPrice = (skip) => {
    const base = skip.price_before_vat || 0;
    // const vat = skip.vat || 0;
    // return (base * (1 + vat / 100)).toFixed(2);
    return base
  };

  return (
    <div className="skip-page-heading">
      <h2 className="skip-main-heading">Choose Your Skip Size</h2>
      <p className="skip-sub-heading">Select the skip size that best suits your needs</p>

      <div className="card-list">
        {skips.map(skip => {
          const isSelected = selectedSkip && selectedSkip.id === skip.id;
          return (
            <article
              key={skip.id}
              className={`card ${isSelected ? 'selected' : selectedSkip ? 'invisible-card' : ''
                }`}
              onClick={() => {
                if (skip.forbidden) return;
                if (selectedSkip && selectedSkip.id === skip.id) {
                  onSelect(null);
                } else {
                  onSelect(skip);
                }
              }}
            >
              <figure className="card-image">
                <img
                  src={skip.image || `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
                  alt={`${skip.size} yard skip`}
                />
                <div className={`badge ${isSelected ? 'selected-color' : 'default-color'}`}>
                  {skip.size} Yards
                </div>

              </figure>
              <div className="card-header">
                <div>{skip.hire_period_days || 14} day hire</div>
                <button className={`icon-button ${isSelected ? 'selected-color' : 'default-color'}`}>
                  £{calculateTotalPrice(skip)}
                </button>

              </div>
              <div className="card-footer">
                <div className="card-icons">
                  {!skip.allowed_on_road && (
                    <div className="icon-tooltip warning-icon" data-tooltip="Not Allowed On Road">⚠️Not Allowed On Road</div>
                  )}
                  {!skip.allows_heavy_waste && (
                    <div className="icon-tooltip danger-icon" data-tooltip="No Heavy Waste">🚫No Heavy Waste</div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
