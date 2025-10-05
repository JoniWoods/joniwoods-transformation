'use client';

export default function ThankYouPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
      <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
            color: #333;
            line-height: 1.6;
            min-height: 100vh;
            padding: 40px 20px;
          }
          
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          }
          
          .hero {
            background: linear-gradient(135deg, #CC3333 0%, #991111 100%);
            padding: 60px 40px;
            text-align: center;
            position: relative;
          }
          
          .hero::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 40px solid transparent;
            border-right: 40px solid transparent;
            border-top: 20px solid #991111;
          }
          
          .hero h1 {
            font-family: 'Libre Baskerville', serif;
            font-size: 48px;
            font-weight: 700;
            color: #F4C430;
            margin-bottom: 15px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          
          .hero .subtitle {
            font-size: 20px;
            color: white;
            font-weight: 600;
            letter-spacing: 2px;
          }
          
          .content {
            padding: 60px 40px 40px;
          }
          
          .intro {
            text-align: center;
            margin-bottom: 50px;
            padding: 30px;
            background: #f9f9f9;
            border-left: 6px solid #F4C430;
            border-right: 6px solid #F4C430;
            border-radius: 4px;
          }
          
          .intro .question {
            font-size: 28px;
            font-weight: 800;
            color: #CC3333;
            margin-bottom: 15px;
            line-height: 1.3;
          }
          
          .intro p {
            font-size: 16px;
            color: #333;
            line-height: 1.8;
          }
          
          .intro .bold {
            font-weight: 700;
            color: #CC3333;
          }
          
          .roadmap {
            margin-bottom: 50px;
          }
          
          .phase {
            background: #f9f9f9;
            border-left: 6px solid #F4C430;
            padding: 20px 25px;
            margin-bottom: 25px;
            position: relative;
            border-radius: 4px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .phase:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          
          .phase.start {
            background: #2a2a2a;
            border-left-color: #999;
            color: white;
          }
          
          .phase.end {
            background: #CC3333;
            border-left-color: #F4C430;
            color: white;
          }
          
          .phase-number {
            display: inline-flex;
            background: #F4C430;
            color: #2a2a2a;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 18px;
            border: 3px solid white;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            margin-right: 12px;
            flex-shrink: 0;
            vertical-align: middle;
          }
          
          .phase.start .phase-number,
          .phase.end .phase-number {
            background: white;
            color: #CC3333;
          }
          
          .phase-header {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
          }
          
          .phase-title {
            font-size: 20px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #CC3333;
            margin: 0;
          }
          
          .phase.start .phase-title,
          .phase.end .phase-title {
            color: #F4C430;
          }
          
          .phase-content {
            font-size: 15px;
            line-height: 1.6;
          }
          
          .phase-content .key-actions {
            margin-top: 10px;
            font-weight: 600;
            font-size: 14px;
            opacity: 0.9;
          }
          
          .cta-section {
            text-align: center;
            padding: 40px;
            background: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 40px;
          }
          
          .cta-buttons {
            display: flex;
            gap: 20px;
            justify-center;
            flex-wrap: wrap;
          }
          
          .cta-button {
            display: inline-block;
            background: #CC3333;
            color: white;
            padding: 18px 40px;
            font-size: 18px;
            font-weight: 800;
            text-decoration: none;
            border-radius: 6px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          
          .cta-button:hover {
            background: #991111;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
          }
          
          .cta-button.secondary {
            background: #F4C430;
            color: #2a2a2a;
          }
          
          .cta-button.secondary:hover {
            background: #d4a820;
          }
          
          .footer {
            text-align: center;
            padding: 30px;
            border-top: 3px solid #F4C430;
          }
          
          .footer .name {
            font-size: 24px;
            font-weight: 800;
            color: #CC3333;
            margin-bottom: 10px;
            letter-spacing: 1px;
          }
          
          .footer .tagline {
            font-size: 14px;
            color: #666;
            font-style: italic;
            margin-bottom: 10px;
          }
          
          .footer .website {
            font-size: 16px;
            font-weight: 600;
            color: #333;
          }
          
          .footer .website a {
            color: #CC3333;
            text-decoration: none;
          }
          
          .footer .website a:hover {
            text-decoration: underline;
          }
          
          @media (max-width: 768px) {
            body {
              padding: 20px 10px;
            }
            
            .hero {
              padding: 40px 20px;
            }
            
            .hero h1 {
              font-size: 32px;
            }
            
            .hero .subtitle {
              font-size: 14px;
            }
            
            .content {
              padding: 40px 20px 30px;
            }
            
            .intro {
              padding: 20px 15px;
              margin-bottom: 30px;
            }
            
            .intro .question {
              font-size: 20px;
            }
            
            .intro p {
              font-size: 14px;
            }
            
            .phase {
              padding: 15px;
              margin-bottom: 15px;
            }
            
            .phase-number {
              width: 35px;
              height: 35px;
              font-size: 16px;
              margin-right: 10px;
            }
            
            .phase-title {
              font-size: 16px;
            }
            
            .phase-content {
              font-size: 14px;
            }
            
            .phase-content .key-actions {
              font-size: 12px;
            }
            
            .cta-section {
              padding: 25px 15px;
            }
            
            .cta-buttons {
              flex-direction: column;
              gap: 15px;
            }
            
            .cta-button {
              padding: 15px 30px;
              font-size: 16px;
            }
          }
        `}</style>
        <div className="container">
          <div className="hero">
            <h1>Your Journey Starts Here</h1>
            <div className="subtitle">FROM SILENCE TO STRENGTH</div>
          </div>
          
          <div className="content">
            <div className="intro">
              <div className="question">ARE YOU TIRED OF STAYING SILENT?</div>
              <p>This roadmap guides you through the <span className="bold">5 essential phases</span> of reclaiming your voice, setting boundaries, and building the relationships you deserve. No more performing peace. No more abandoning yourself to keep others comfortable.</p>
            </div>
            
            <div className="roadmap">
              <div className="phase start">
                <div className="phase-header">
                  <div className="phase-number">★</div>
                  <div className="phase-title">Where You Are Now</div>
                </div>
                <div className="phase-content">
                  You&apos;re tired of staying silent. Tired of people-pleasing. Tired of relationships that leave you feeling unheard, disrespected, or invisible. You know something needs to change—and you&apos;re ready.
                </div>
              </div>
              
              <div className="phase">
                <div className="phase-header">
                  <div className="phase-number">1</div>
                  <div className="phase-title">Awareness: See What&apos;s True</div>
                </div>
                <div className="phase-content">
                  Begin by noticing your patterns. When do you stay silent? Where do you abandon yourself to keep peace? 
                  <div className="key-actions">✓ Ask: &quot;Am I being heard? Respected? Considered?&quot; | ✓ Identify your triggers and default responses</div>
                </div>
              </div>
              
              <div className="phase">
                <div className="phase-header">
                  <div className="phase-number">2</div>
                  <div className="phase-title">Voice: Speak Your Truth</div>
                </div>
                <div className="phase-content">
                  Practice using &quot;I noticed,&quot; &quot;I felt,&quot; and &quot;I need&quot; statements. Stop performing peace—say what you need without fear.
                  <div className="key-actions">✓ Pause before responding | ✓ Replace blame with clarity | ✓ Ask clarifying questions before reacting</div>
                </div>
              </div>
              
              <div className="phase">
                <div className="phase-header">
                  <div className="phase-number">3</div>
                  <div className="phase-title">Boundaries: Honor Your Needs</div>
                </div>
                <div className="phase-content">
                  Define what&apos;s acceptable and what&apos;s not. Boundaries aren&apos;t walls—they&apos;re bridges to healthier connection.
                  <div className="key-actions">✓ Practice saying &quot;no&quot; without guilt | ✓ Communicate your limits clearly | ✓ Hold space for your own needs</div>
                </div>
              </div>
              
              <div className="phase">
                <div className="phase-header">
                  <div className="phase-number">4</div>
                  <div className="phase-title">Connection: Build With Intention</div>
                </div>
                <div className="phase-content">
                  Healthy relationships require dialogue, not monologue. Listen actively, respond with empathy, and seek mutual understanding.
                  <div className="key-actions">✓ Focus on resolution over being right | ✓ Listen to understand, not to win | ✓ Show up as your authentic self</div>
                </div>
              </div>
              
              <div className="phase end">
                <div className="phase-header">
                  <div className="phase-number">✓</div>
                  <div className="phase-title">Living Authentically</div>
                </div>
                <div className="phase-content">
                  You&apos;re no longer performing. You&apos;re present. You&apos;re honest. You&apos;re connected—to yourself and others. This isn&apos;t the end of your journey; it&apos;s the beginning of living fully aligned with who you really are.
                </div>
              </div>
            </div>
            
            <div className="cta-section">
              <div className="cta-buttons">
                <a href="https://calendly.com/joniwoods/virtual-coffee" className="cta-button" target="_blank" rel="noopener noreferrer">LET&apos;S GET COFFEE!</a>
                <a href="/Joni_Woods_Transformation_Roadmap.pdf" className="cta-button secondary" download>DOWNLOAD PDF</a>
              </div>
            </div>
            
            <div className="footer">
              <div className="name">JONI WOODS</div>
              <div className="tagline">Cultural Strategist | Life Coach | Author of <i>Burned, Blocked, and Better Than Ever</i></div>
              <div className="website"><a href="https://joniwoods.com" target="_blank" rel="noopener noreferrer">JONIWOODS.COM</a></div>
            </div>
          </div>
        </div>
        
        <script dangerouslySetInnerHTML={{ __html: `
          // Add subtle animation on scroll
          const phases = document.querySelectorAll('.phase');
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }
            });
          }, { threshold: 0.1 });
          
          phases.forEach(phase => {
            phase.style.opacity = '0';
            phase.style.transform = 'translateY(20px)';
            phase.style.transition = 'all 0.6s ease';
            observer.observe(phase);
          });
        `}} />
    </>
  );
}
