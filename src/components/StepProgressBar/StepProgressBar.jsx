
import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard
} from 'lucide-react';
import SkipSelector from '../SkipSelector/SkipSelector';
import SkipReceipt from '../SkipReceipt/SkipReceipt';

import './style.css';

import React, { useState } from 'react';


export default function StepProgressBar({
  selectedSkip,
  onSelect,
  onCancel,
  onBack,
  onContinue,
  currentStep,
  goToStep
}) {
  const [hoveredStep, setHoveredStep] = useState(null); // <== هنا نضيف الحالة

  const steps = [
    { label: 'Postcode', icon: <MapPin size={16} /> },
    { label: 'Waste Type', icon: <Trash2 size={16} /> },
    { label: 'Select Skip', icon: <Truck size={16} /> },
    { label: 'Permit Check', icon: <Shield size={16} /> },
    { label: 'Choose Date', icon: <Calendar size={16} /> },
    { label: 'Payment', icon: <CreditCard size={16} /> }
  ];

  return (
    <div className="page-layout">
      <div className="left-column">
        <div className="vertical-step-bar stepped">
          <ul className="vertical-step-list">
            {steps.map((step, index) => {
              let status = '';
              if (index < currentStep) status = 'completed';
              else if (index === currentStep) status = 'active';

              const isFuture = index > currentStep;

              return (
                <li
                  key={index}
                  className={`step-item ${status}`}
                  onClick={() => {
                    if (index < currentStep) goToStep(index);
                  }}
                  onMouseEnter={() => {
                    if (isFuture) setHoveredStep(index);
                  }}
                  onMouseLeave={() => {
                    if (isFuture) setHoveredStep(null);
                  }}
                  style={{ cursor: index < currentStep ? 'pointer' : isFuture ? 'not-allowed' : 'default' }}
                >
                  <div className="step-line" />
                  <div className="step-circle">
                    {hoveredStep === index && isFuture ? (
                      <span style={{ fontSize: 16 }}>🚫</span>
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="step-text">
                    <span className="step-label">{step.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="receipt-wrapper sticky-receipt">
          <SkipReceipt
            selectedSkip={selectedSkip}
            onCancel={onCancel}
            onBack={onBack}
            onContinue={onContinue}
          />
        </div>
      </div>

      <div className="content-area">
        <SkipSelector selectedSkip={selectedSkip} onSelect={onSelect} />
      </div>
    </div>
  );
}
