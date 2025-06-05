import React, { useState } from 'react';
import StepProgressBar from './components/StepProgressBar/StepProgressBar';

export default function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [currentStep, setCurrentStep] = useState(2); // مثال: حاليًا في "Select Skip"

  return (
    <StepProgressBar
      selectedSkip={selectedSkip}
      onSelect={setSelectedSkip}
      onCancel={() => setSelectedSkip(null)}
      onBack={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
      onContinue={() => setCurrentStep((prev) => Math.min(prev + 1, 5))}
      currentStep={currentStep}
      goToStep={setCurrentStep}
    />
  );
}
