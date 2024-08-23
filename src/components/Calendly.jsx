import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Check if the script is already added
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) return;

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ margin: '0 auto', maxWidth: '90%', borderRadius: '30px', overflow: 'hidden' }}>
      {/* Calendly inline widget begin */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/anamika-rationaletranquillity/siscovery-session?primary_color=0064ff" 
        style={{ minWidth: '320px', height: '700px', backgroundColor: '#FFFFFF' }}
      />
      {/* Calendly inline widget end */}
    </div>
  );
};

export default CalendlyWidget;
