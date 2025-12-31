import { useEffect, useState, useRef } from "react";

// Christmas lights that flicker
function ChristmasLight({ letter, index }) {
  const [brightness, setBrightness] = useState(0.3);
  const [isFlickering, setIsFlickering] = useState(false);
  
  useEffect(() => {
    // Random flickering effect
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsFlickering(true);
        setBrightness(Math.random() * 0.5 + 0.5);
        setTimeout(() => {
          setBrightness(Math.random() * 0.3 + 0.2);
          setTimeout(() => {
            setIsFlickering(false);
            setBrightness(0.3);
          }, 100);
        }, 80);
      }
    }, 300);
    
    return () => clearInterval(flickerInterval);
  }, []);

  const lightColor = isFlickering 
    ? `rgba(255, ${150 + Math.random() * 50}, 100, ${brightness})` 
    : `rgba(255, 180, 120, ${brightness})`;
  
  const glowIntensity = brightness * 40;

  return (
    <div className="flex flex-col items-center gap-2">
      {/* The light bulb */}
      <div 
        className="relative w-3 h-3 rounded-full transition-all duration-75"
        style={{
          backgroundColor: lightColor,
          boxShadow: `0 0 ${glowIntensity}px ${glowIntensity / 2}px ${lightColor}`,
        }}
      >
        {/* Wire going up */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gray-800" />
      </div>
      
      {/* Letter below */}
      <div 
        className="text-2xl font-bold tracking-wider"
        style={{
          color: '#d4af37',
          textShadow: isFlickering ? `0 0 10px ${lightColor}` : 'none',
          fontFamily: 'serif'
        }}
      >
        {letter}
      </div>
    </div>
  );
}

export default function MonsterScene() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [activeMessage, setActiveMessage] = useState([]);
  const [staticNoise, setStaticNoise] = useState(false);
  
  // Spell out messages occasionally
  useEffect(() => {
    const messages = ["RUN", "HELP", "WILL", "CLOSE GATE", "DANGER"];
    let messageIndex = 0;
    
    const spellMessage = () => {
      const message = messages[messageIndex % messages.length];
      messageIndex++;
      
      setActiveMessage([]);
      
      message.split("").forEach((char, i) => {
        setTimeout(() => {
          setActiveMessage(prev => [...prev, char]);
          
          // Flash effect when letter activates
          setStaticNoise(true);
          setTimeout(() => setStaticNoise(false), 100);
        }, i * 800);
      });
      
      // Clear message after showing
      setTimeout(() => {
        setActiveMessage([]);
      }, message.length * 800 + 3000);
    };
    
    // Spell first message immediately, then every 15 seconds
    spellMessage();
    const interval = setInterval(spellMessage, 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
      {/* Dark wall background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e0e] via-[#0d0606] to-[#000000]" />
      
      {/* Wood texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, 
            rgba(101, 67, 33, 0.1) 0px, 
            rgba(101, 67, 33, 0.1) 2px, 
            transparent 2px, 
            transparent 10px)`,
        }}
      />
      
      {/* Wire running across the top */}
      <div className="absolute top-20 left-0 right-0 h-1 bg-gray-900" />
      
      {/* Alphabet wall with christmas lights */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full max-w-6xl px-8">
        <div className="grid grid-cols-13 gap-x-6 gap-y-8 justify-items-center">
          {alphabet.map((letter, index) => (
            <div 
              key={letter}
              className={`transition-all duration-300 ${
                activeMessage.includes(letter) ? 'scale-110' : 'scale-100'
              }`}
            >
              <ChristmasLight 
                letter={letter} 
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Current message display */}
      {activeMessage.length > 0 && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center">
          <div className="text-5xl font-bold tracking-widest" style={{
            color: '#ffcc00',
            textShadow: '0 0 20px rgba(255, 200, 100, 0.8), 0 0 40px rgba(255, 150, 50, 0.4)',
            fontFamily: 'serif'
          }}>
            {activeMessage.join("")}
          </div>
        </div>
      )}
      
      {/* TV static flash effect */}
      {staticNoise && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
      
      {/* Subtle film grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}