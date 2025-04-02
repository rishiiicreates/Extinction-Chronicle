import { SVGProps } from "react";

// Flying birds component for animation
export const FlyingBirds = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 25C50 25 40 20 30 25C20 30 25 35 25 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 25C50 25 40 30 30 35C20 40 25 45 25 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 25L70 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 25C70 25 80 20 90 25C100 30 95 35 95 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 25C70 25 80 30 90 35C100 40 95 45 95 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="60" cy="25" rx="12" ry="5" fill="currentColor" />
    </svg>
  );
};

// Crystal component for animation
export const Crystal = (props: SVGProps<SVGSVGElement> & { color?: string }) => {
  const { color = "#a5c4d4", ...rest } = props;
  
  return (
    <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M30 0L10 40L30 120L50 40L30 0Z" fill={color} fillOpacity="0.8" />
      <path d="M30 0L30 120" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M10 40L50 40" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="30" cy="120" rx="20" ry="5" fill="white" fillOpacity="0.3" />
    </svg>
  );
};

// Raindrop animation component
export const RainDrop = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 0L4 10L2 20L0 10L2 0Z" fill="white" fillOpacity="0.4" />
    </svg>
  );
};

// SVG Illustrations for each scene
export const IllustratedLandscape = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="800" height="400" fill="#F5D0D0" />
      
      {/* Sky & Clouds */}
      <path d="M0 0H800V250H0V0Z" fill="#F5D0D0" />
      <ellipse cx="150" cy="100" rx="80" ry="40" fill="white" fillOpacity="0.8" />
      <ellipse cx="100" cy="90" rx="60" ry="30" fill="white" fillOpacity="0.8" />
      <ellipse cx="200" cy="110" rx="60" ry="30" fill="white" fillOpacity="0.8" />
      
      <ellipse cx="650" cy="80" rx="70" ry="35" fill="white" fillOpacity="0.8" />
      <ellipse cx="600" cy="70" rx="50" ry="25" fill="white" fillOpacity="0.8" />
      <ellipse cx="700" cy="90" rx="50" ry="25" fill="white" fillOpacity="0.8" />
      
      {/* Ocean */}
      <path d="M0 250H800V400H0V250Z" fill="#A5C4D4" />
      
      {/* Mountains */}
      <path d="M0 250L100 180L200 220L300 150L400 200L500 120L600 180L700 130L800 250H0Z" fill="#C08497" />
      <path d="M0 250L50 220L150 240L250 200L350 230L450 190L550 210L650 170L750 210L800 250H0Z" fill="#75B9A4" />
      
      {/* Texture elements */}
      {Array(50).fill(0).map((_, i) => (
        <circle 
          key={i}
          cx={Math.random() * 800} 
          cy={Math.random() * 400} 
          r={Math.random() * 1.5} 
          fill="#000" 
          fillOpacity="0.3" 
        />
      ))}
    </svg>
  );
};

export const IllustratedCrystals = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="800" height="600" fill="#A5C4D4" />
      
      {/* Sky & Clouds */}
      <path d="M0 0H800V400H0V0Z" fill="#A5C4D4" />
      <ellipse cx="200" cy="100" rx="100" ry="50" fill="white" fillOpacity="0.6" />
      <ellipse cx="150" cy="90" rx="70" ry="40" fill="white" fillOpacity="0.6" />
      <ellipse cx="250" cy="110" rx="70" ry="40" fill="white" fillOpacity="0.6" />
      
      <ellipse cx="600" cy="150" rx="90" ry="45" fill="white" fillOpacity="0.6" />
      <ellipse cx="550" cy="140" rx="60" ry="35" fill="white" fillOpacity="0.6" />
      <ellipse cx="650" cy="160" rx="60" ry="35" fill="white" fillOpacity="0.6" />
      
      {/* Water */}
      <path d="M0 400H800V600H0V400Z" fill="#8BA3B4" />
      
      {/* Crystal 1 */}
      <path d="M200 450L250 300L300 450L250 550L200 450Z" fill="#B8C4D9" stroke="#6E7A94" strokeWidth="2" />
      <path d="M250 300L250 550" stroke="#6E7A94" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="250" cy="550" rx="30" ry="10" fill="white" fillOpacity="0.5" />
      
      {/* Crystal 2 */}
      <path d="M400 450L430 250L500 400L470 550L400 450Z" fill="#B8C4D9" stroke="#6E7A94" strokeWidth="2" />
      <path d="M430 250L470 550" stroke="#6E7A94" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="470" cy="550" rx="40" ry="12" fill="white" fillOpacity="0.5" />
      
      {/* Crystal 3 */}
      <path d="M600 470L620 350L650 470L630 530L600 470Z" fill="#B8C4D9" stroke="#6E7A94" strokeWidth="2" />
      <path d="M620 350L630 530" stroke="#6E7A94" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="630" cy="530" rx="25" ry="8" fill="white" fillOpacity="0.5" />
      
      {/* Robed Figures */}
      <path d="M230 500C230 500 220 520 220 540C220 560 230 560 240 560C250 560 260 560 260 540C260 520 250 500 250 500" fill="#454545" />
      <circle cx="240" cy="495" r="10" fill="#454545" />
      
      <path d="M450 510C450 510 440 530 440 550C440 570 450 570 460 570C470 570 480 570 480 550C480 530 470 510 470 510" fill="#454545" />
      <circle cx="460" cy="505" r="10" fill="#454545" />
      
      <path d="M615 490C615 490 605 510 605 530C605 550 615 550 625 550C635 550 645 550 645 530C645 510 635 490 635 490" fill="#454545" />
      <circle cx="625" cy="485" r="10" fill="#454545" />
      
      {/* Waterfall */}
      <path d="M50 0V400" stroke="white" strokeWidth="40" strokeOpacity="0.7" />
      <path d="M50 400C50 400 30 500 50 550C70 600 70 600 50 550" fill="#8BA3B4" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      
      {/* Random Plants */}
      <path d="M100 550C100 550 110 530 120 550C130 570 140 550 140 550" stroke="#75B9A4" strokeWidth="3" />
      <path d="M110 550C110 550 110 530 110 520" stroke="#75B9A4" strokeWidth="3" />
      <path d="M130 550C130 550 130 530 130 520" stroke="#75B9A4" strokeWidth="3" />
      
      <path d="M700 560C700 560 710 540 720 560C730 580 740 560 740 560" stroke="#75B9A4" strokeWidth="3" />
      <path d="M710 560C710 560 710 540 710 530" stroke="#75B9A4" strokeWidth="3" />
      <path d="M730 560C730 560 730 540 730 530" stroke="#75B9A4" strokeWidth="3" />
      
      <path d="M750 550C750 550 760 520 770 540" stroke="#C27F7F" strokeWidth="3" />
      <ellipse cx="770" cy="535" rx="15" ry="10" fill="#E57373" />
      
      {/* Text box */}
      <rect x="170" y="580" width="460" height="60" rx="10" fill="#F8F5F0" fillOpacity="0.85" />
    </svg>
  );
};

export const IllustratedBirds = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="800" height="600" fill="#2B4162" />
      
      {/* Stars/Light streaks */}
      {Array(100).fill(0).map((_, i) => (
        <g key={i}>
          <line 
            x1={Math.random() * 800} 
            y1={Math.random() * 600} 
            x2={Math.random() * 800} 
            y2={Math.random() * 600} 
            stroke="white" 
            strokeOpacity={Math.random() * 0.5 + 0.1} 
            strokeWidth={Math.random() * 2 + 0.5} 
          />
        </g>
      ))}
      
      {/* Moon */}
      <circle cx="700" cy="100" r="60" fill="#F0F0F0" fillOpacity="0.9" />
      <circle cx="670" cy="90" r="10" fill="#2B4162" fillOpacity="0.2" />
      <circle cx="710" cy="120" r="15" fill="#2B4162" fillOpacity="0.2" />
      <circle cx="680" cy="130" r="12" fill="#2B4162" fillOpacity="0.1" />
      
      {/* Bird 1 */}
      <path d="M200 300C200 300 150 280 120 320C90 360 100 380 100 380" stroke="#A5C4D4" strokeWidth="8" strokeLinecap="round" />
      <path d="M200 300C200 300 150 320 120 360C90 400 100 420 100 420" stroke="#A5C4D4" strokeWidth="8" strokeLinecap="round" />
      <path d="M200 300L300 300" stroke="#A5C4D4" strokeWidth="15" strokeLinecap="round" />
      <path d="M300 300C300 300 350 280 380 320C410 360 400 380 400 380" stroke="#A5C4D4" strokeWidth="8" strokeLinecap="round" />
      <path d="M300 300C300 300 350 320 380 360C410 400 400 420 400 420" stroke="#A5C4D4" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="250" cy="300" rx="60" ry="25" fill="#A5C4D4" />
      <path d="M280 280L290 290L300 280" stroke="#2B4162" strokeWidth="2" />
      
      {/* Bird 2 - Far away */}
      <path d="M500 200C500 200 480 190 470 200C460 210 460 220 460 220" stroke="#A5C4D4" strokeWidth="4" strokeLinecap="round" />
      <path d="M500 200C500 200 480 210 470 220C460 230 460 240 460 240" stroke="#A5C4D4" strokeWidth="4" strokeLinecap="round" />
      <path d="M500 200L530 200" stroke="#A5C4D4" strokeWidth="8" strokeLinecap="round" />
      <path d="M530 200C530 200 550 190 560 200C570 210 570 220 570 220" stroke="#A5C4D4" strokeWidth="4" strokeLinecap="round" />
      <path d="M530 200C530 200 550 210 560 220C570 230 570 240 570 240" stroke="#A5C4D4" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="515" cy="200" rx="30" ry="12" fill="#A5C4D4" />
      <path d="M530 190L535 195L540 190" stroke="#2B4162" strokeWidth="1" />
      
      {/* Bird 3 - Closest */}
      <path d="M350 400C350 400 300 380 270 420C240 460 250 480 250 480" stroke="#A5C4D4" strokeWidth="10" strokeLinecap="round" />
      <path d="M350 400C350 400 300 420 270 460C240 500 250 520 250 520" stroke="#A5C4D4" strokeWidth="10" strokeLinecap="round" />
      <path d="M350 400L450 400" stroke="#A5C4D4" strokeWidth="20" strokeLinecap="round" />
      <path d="M450 400C450 400 500 380 530 420C560 460 550 480 550 480" stroke="#A5C4D4" strokeWidth="10" strokeLinecap="round" />
      <path d="M450 400C450 400 500 420 530 460C560 500 550 520 550 520" stroke="#A5C4D4" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="400" cy="400" rx="80" ry="30" fill="#A5C4D4" />
      <path d="M430 375L445 390L460 375" stroke="#2B4162" strokeWidth="3" />
      
      {/* Text box */}
      <rect x="400" y="500" width="350" height="60" rx="10" fill="#F8F5F0" fillOpacity="0.85" />
    </svg>
  );
};

export const IllustratedIsland = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="800" height="600" fill="#75B9A4" />
      
      {/* Sky */}
      <path d="M0 0H800V300H0V0Z" fill="#A5C4D4" />
      <ellipse cx="200" cy="100" rx="100" ry="50" fill="white" fillOpacity="0.6" />
      <ellipse cx="150" cy="90" rx="70" ry="40" fill="white" fillOpacity="0.6" />
      <ellipse cx="250" cy="110" rx="70" ry="40" fill="white" fillOpacity="0.6" />
      
      <ellipse cx="600" cy="150" rx="90" ry="45" fill="white" fillOpacity="0.6" />
      <ellipse cx="550" cy="140" rx="60" ry="35" fill="white" fillOpacity="0.6" />
      <ellipse cx="650" cy="160" rx="60" ry="35" fill="white" fillOpacity="0.6" />
      
      {/* Land mass - Island */}
      <ellipse cx="400" cy="350" rx="300" ry="150" fill="#75B9A4" />
      
      {/* Grass Texture */}
      {Array(1000).fill(0).map((_, i) => (
        <line 
          key={i}
          x1={200 + Math.random() * 400} 
          y1={250 + Math.random() * 200} 
          x2={200 + Math.random() * 400} 
          y2={260 + Math.random() * 200} 
          stroke="#5A9283" 
          strokeOpacity="0.5"
          strokeWidth="0.5" 
        />
      ))}
      
      {/* Red rocks */}
      <ellipse cx="200" cy="300" rx="50" ry="80" fill="#C08497" />
      <ellipse cx="600" cy="320" rx="40" ry="60" fill="#C08497" />
      <ellipse cx="400" cy="400" rx="20" ry="30" fill="#C08497" />
      
      {/* Blue-green bushes */}
      <circle cx="150" cy="250" r="40" fill="#8ECFD6" />
      <circle cx="650" cy="280" r="50" fill="#8ECFD6" />
      <circle cx="500" cy="350" r="30" fill="#8ECFD6" />
      <circle cx="300" cy="330" r="45" fill="#8ECFD6" />
      
      {/* Twisted plants */}
      <path d="M350 400C350 400 360 380 350 360C340 340 360 320 360 320" stroke="#5A9283" strokeWidth="3" />
      <path d="M450 420C450 420 470 410 460 390C450 370 480 350 480 350" stroke="#5A9283" strokeWidth="3" />
      <path d="M250 380C250 380 270 370 260 350C250 330 280 310 280 310" stroke="#5A9283" strokeWidth="3" />
      <path d="M550 400C550 400 570 390 560 370C550 350 580 330 580 330" stroke="#5A9283" strokeWidth="3" />
      
      {/* Vines hanging from top */}
      <path d="M100 0C100 0 90 50 110 100C130 150 90 200 90 200" stroke="#5A9283" strokeWidth="4" />
      <path d="M700 0C700 0 690 70 710 140C730 210 690 280 690 280" stroke="#5A9283" strokeWidth="4" />
      
      {/* Plants with clusters */}
      <g>
        <path d="M150 430C150 430 150 400 150 390" stroke="#5A9283" strokeWidth="3" />
        <circle cx="150" cy="380" r="10" fill="#FFFFFF" />
        <circle cx="160" cy="375" r="8" fill="#FFFFFF" />
        <circle cx="140" cy="375" r="8" fill="#FFFFFF" />
      </g>
      
      <g>
        <path d="M650 450C650 450 650 420 650 410" stroke="#5A9283" strokeWidth="3" />
        <circle cx="650" cy="400" r="10" fill="#FFFFFF" />
        <circle cx="660" cy="395" r="8" fill="#FFFFFF" />
        <circle cx="640" cy="395" r="8" fill="#FFFFFF" />
      </g>
      
      {/* Flowers */}
      <g>
        <path d="M200 450C200 450 200 430 200 420" stroke="#5A9283" strokeWidth="2" />
        <circle cx="200" cy="415" r="8" fill="#E57373" />
        <circle cx="205" cy="410" r="3" fill="#FFECB3" />
      </g>
      
      <g>
        <path d="M600 430C600 430 600 410 600 400" stroke="#5A9283" strokeWidth="2" />
        <circle cx="600" cy="395" r="8" fill="#E57373" />
        <circle cx="605" cy="390" r="3" fill="#FFECB3" />
      </g>
      
      {/* Text box */}
      <rect x="200" y="500" width="400" height="60" rx="10" fill="#F8F5F0" fillOpacity="0.85" />
    </svg>
  );
};

export const IllustratedDesert = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="800" height="600" fill="#F4D6CC" />
      
      {/* Sky */}
      <path d="M0 0H800V300H0V0Z" fill="#F4D6CC" />
      <circle cx="700" cy="100" r="50" fill="#FFECB3" fillOpacity="0.8" /> {/* Sun */}
      
      <ellipse cx="200" cy="100" rx="60" ry="30" fill="#FAD6D5" fillOpacity="0.8" />
      <ellipse cx="150" cy="90" rx="40" ry="20" fill="#FAD6D5" fillOpacity="0.8" />
      <ellipse cx="250" cy="110" rx="40" ry="20" fill="#FAD6D5" fillOpacity="0.8" />
      
      <ellipse cx="500" cy="120" rx="50" ry="25" fill="#FAD6D5" fillOpacity="0.8" />
      <ellipse cx="450" cy="110" rx="30" ry="15" fill="#FAD6D5" fillOpacity="0.8" />
      <ellipse cx="550" cy="130" rx="30" ry="15" fill="#FAD6D5" fillOpacity="0.8" />
      
      {/* Desert floor */}
      <rect x="0" y="300" width="800" height="300" fill="#E9C4B4" />
      
      {/* Sand texture */}
      {Array(300).fill(0).map((_, i) => (
        <circle 
          key={i}
          cx={Math.random() * 800} 
          cy={300 + Math.random() * 300} 
          r={Math.random() * 2} 
          fill="#C4A99A" 
          fillOpacity="0.5" 
        />
      ))}
      
      {/* Left mountain range */}
      <path d="M0 300L50 200L100 250L150 180L200 230L250 180L300 300H0Z" fill="#C08497" />
      
      {/* Right mountain peaks */}
      <path d="M500 300L550 220L600 260L650 200L700 240L750 210L800 300H500Z" fill="#C08497" />
      
      {/* Desert rocks */}
      <ellipse cx="150" cy="350" rx="20" ry="10" fill="#C08497" />
      <ellipse cx="400" cy="380" rx="15" ry="8" fill="#C08497" />
      <ellipse cx="600" cy="360" rx="25" ry="12" fill="#C08497" />
      <ellipse cx="250" cy="420" rx="10" ry="5" fill="#C08497" />
      <ellipse cx="550" cy="410" rx="12" ry="6" fill="#C08497" />
      
      {/* Small desert plants */}
      <g>
        <path d="M100 450C100 450 100 430 100 425" stroke="#75B9A4" strokeWidth="1" />
        <path d="M100 425C100 425 95 420 90 425C85 430 90 435 90 435" stroke="#75B9A4" strokeWidth="1" />
        <path d="M100 425C100 425 105 420 110 425C115 430 110 435 110 435" stroke="#75B9A4" strokeWidth="1" />
      </g>
      
      <g>
        <path d="M700 430C700 430 700 410 700 405" stroke="#75B9A4" strokeWidth="1" />
        <path d="M700 405C700 405 695 400 690 405C685 410 690 415 690 415" stroke="#75B9A4" strokeWidth="1" />
        <path d="M700 405C700 405 705 400 710 405C715 410 710 415 710 415" stroke="#75B9A4" strokeWidth="1" />
      </g>
      
      {/* Desert flower */}
      <g>
        <path d="M200 470C200 470 200 450 200 445" stroke="#75B9A4" strokeWidth="1" />
        <circle cx="200" cy="440" r="5" fill="#E57373" />
      </g>
      
      <g>
        <path d="M650 460C650 460 650 440 650 435" stroke="#75B9A4" strokeWidth="1" />
        <circle cx="650" cy="430" r="5" fill="#E57373" />
      </g>
      
      {/* Distant travelers */}
      <g transform="translate(400, 200)">
        <ellipse cx="0" cy="0" rx="50" ry="5" fill="#E9C4B4" fillOpacity="0.5" />
        <path d="M-30 -10C-30 -10 -25 -30 -20 -20C-15 -10 -15 0 -15 0" fill="#3A3A3A" />
        <path d="M-15 -10C-15 -10 -10 -30 -5 -20C0 -10 0 0 0 0" fill="#3A3A3A" />
        <path d="M0 -10C0 -10 5 -30 10 -20C15 -10 15 0 15 0" fill="#3A3A3A" />
        <path d="M15 -10C15 -10 20 -30 25 -20C30 -10 30 0 30 0" fill="#3A3A3A" />
      </g>
      
      {/* Text box */}
      <rect x="200" y="520" width="400" height="60" rx="10" fill="#F8F5F0" fillOpacity="0.85" />
    </svg>
  );
};

export const IllustratedCollage = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="800" height="600" fill="#F8F5F0" />
      
      {/* Center circle with crystals */}
      <circle cx="400" cy="300" r="200" fill="#F5D0D0" />
      
      {/* Crystal formation in center */}
      <path d="M350 350L400 200L450 350L400 450L350 350Z" fill="#B8C4D9" stroke="#6E7A94" strokeWidth="2" />
      <path d="M400 200L400 450" stroke="#6E7A94" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="400" cy="450" rx="30" ry="10" fill="white" fillOpacity="0.5" />
      
      {/* Left panel - forest scene */}
      <rect x="50" y="100" width="200" height="300" fill="#A5C4D4" />
      <path d="M50 350L250 350L250 100L50 100L50 350Z" fill="#A5C4D4" stroke="#454545" strokeWidth="2" />
      
      <path d="M50 350L100 300L150 330L200 280L250 350L50 350Z" fill="#75B9A4" />
      <ellipse cx="150" cy="180" rx="50" ry="40" fill="#454545" />
      <path d="M70 220C70 220 90 180 120 220C150 260 180 220 180 220" stroke="#75B9A4" strokeWidth="3" />
      <path d="M100 260C100 260 120 220 150 260C180 300 210 260 210 260" stroke="#75B9A4" strokeWidth="3" />
      <ellipse cx="100" cy="300" rx="20" ry="10" fill="#454545" />
      <ellipse cx="200" cy="320" rx="25" ry="15" fill="#454545" />
      
      {/* Right panel - birds scene */}
      <rect x="550" y="100" width="200" height="300" fill="#2B4162" />
      <path d="M550 350L750 350L750 100L550 100L550 350Z" fill="#2B4162" stroke="#454545" strokeWidth="2" />
      
      <path d="M650 200C650 200 620 180 600 210C580 240 590 260 590 260" stroke="#A5C4D4" strokeWidth="5" strokeLinecap="round" />
      <path d="M650 200C650 200 620 220 600 250C580 280 590 300 590 300" stroke="#A5C4D4" strokeWidth="5" strokeLinecap="round" />
      <path d="M650 200L700 200" stroke="#A5C4D4" strokeWidth="10" strokeLinecap="round" />
      <path d="M700 200C700 200 730 180 750 210C770 240 760 260 760 260" stroke="#A5C4D4" strokeWidth="5" strokeLinecap="round" />
      <path d="M700 200C700 200 730 220 750 250C770 280 760 300 760 300" stroke="#A5C4D4" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="675" cy="200" rx="40" ry="20" fill="#A5C4D4" />
      
      <ellipse cx="650" cy="350" rx="80" ry="30" fill="#75B9A4" />
      <path d="M580 320C580 320 600 300 620 320C640 340 660 320 660 320" stroke="#5A9283" strokeWidth="2" />
      <path d="M620 330C620 330 640 310 660 330C680 350 700 330 700 330" stroke="#5A9283" strokeWidth="2" />
      
      {/* Bottom panels - desert and small elements */}
      <rect x="150" y="450" width="100" height="100" fill="#F4D6CC" />
      <path d="M150 550L250 550L250 450L150 450L150 550Z" fill="#F4D6CC" stroke="#454545" strokeWidth="2" />
      <path d="M150 550L180 500L210 520L250 550L150 550Z" fill="#C08497" />
      <ellipse cx="200" cy="525" rx="10" ry="5" fill="#E9C4B4" />
      
      <rect x="550" y="450" width="100" height="100" fill="#75B9A4" />
      <path d="M550 550L650 550L650 450L550 450L550 550Z" fill="#75B9A4" stroke="#454545" strokeWidth="2" />
      <circle cx="600" cy="500" r="20" fill="#8ECFD6" />
      <path d="M580 520C580 520 590 510 580 500C570 490 580 480 580 480" stroke="#5A9283" strokeWidth="2" />
      <path d="M620 520C620 520 610 510 620 500C630 490 620 480 620 480" stroke="#5A9283" strokeWidth="2" />
      
      {/* Mushrooms small panel */}
      <rect x="300" y="450" width="100" height="100" fill="#F5D0D0" />
      <path d="M300 550L400 550L400 450L300 450L300 550Z" fill="#F5D0D0" stroke="#454545" strokeWidth="2" />
      <path d="M330 520L330 540" stroke="#75B9A4" strokeWidth="2" />
      <ellipse cx="330" cy="515" rx="10" ry="5" fill="#FFECB3" />
      <path d="M350 510L350 540" stroke="#75B9A4" strokeWidth="2" />
      <ellipse cx="350" cy="505" rx="12" ry="6" fill="#FFECB3" />
      <path d="M370 515L370 540" stroke="#75B9A4" strokeWidth="2" />
      <ellipse cx="370" cy="510" rx="8" ry="4" fill="#FFECB3" />
      
      {/* Flower small panel */}
      <rect x="400" y="450" width="100" height="100" fill="#A5C4D4" />
      <path d="M400 550L500 550L500 450L400 450L400 550Z" fill="#A5C4D4" stroke="#454545" strokeWidth="2" />
      <path d="M450 520L450 540" stroke="#75B9A4" strokeWidth="2" />
      <circle cx="450" cy="515" r="10" fill="#E57373" />
      <circle cx="455" cy="510" r="3" fill="#FFECB3" />
      
      {/* Decorative elements at bottom */}
      <rect x="75" y="580" width="650" height="50" fill="#454545" />
      <text x="400" y="615" textAnchor="middle" fontFamily="serif" fontSize="30" fill="white">NOMADIC TRIBE</text>
    </svg>
  );
};
