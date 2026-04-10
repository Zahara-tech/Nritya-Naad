import { useState } from "react";

const theme = {
  color: "#00897B",
  bg: "rgba(0,137,123,0.08)",
  gradient: "linear-gradient(135deg, #00897B, #004D40)",
  border: "rgba(0,137,123,0.2)",
};

const STATES = [
  {
    id: "jk", name: "Jammu & Kashmir", x: 118, y: 28,
    dance: "Rouf", description: "A graceful folk dance performed by women during festive seasons, especially Eid. Dancers form rows and move in rhythmic patterns to traditional Kashmiri music.",
    region: "North",
  },
  {
    id: "hp", name: "Himachal Pradesh", x: 168, y: 65,
    dance: "Nati", description: "One of the world's largest folk dances, listed in the Guinness World Records. Performed in long rows with swaying hand and body movements to folk tunes.",
    region: "North",
  },
  {
    id: "pb", name: "Punjab", x: 120, y: 90,
    dance: "Bhangra", description: "A vibrant harvest folk dance originating from Punjab. Known for its high energy, dhol beats, and exuberant jumps — now a global phenomenon.",
    region: "North",
  },
  {
    id: "uk", name: "Uttarakhand", x: 210, y: 82,
    dance: "Langvir Nritya", description: "An acrobatic folk dance from Garhwal where performers balance on bamboo poles. It showcases extraordinary balance and strength.",
    region: "North",
  },
  {
    id: "hr", name: "Haryana", x: 148, y: 108,
    dance: "Phag Dance", description: "A folk dance performed during the Holi festival. Women dance in circles singing Phag songs while men play dholak and other folk instruments.",
    region: "North",
  },
  {
    id: "dl", name: "Delhi", x: 162, y: 128,
    dance: "Kathak", description: "Delhi is a major center for Kathak — the classical dance of North India known for rapid spins (chakkar), intricate footwork, and expressive storytelling.",
    region: "North",
  },
  {
    id: "rj", name: "Rajasthan", x: 108, y: 162,
    dance: "Ghoomar", description: "A traditional Rajput women's dance performed for royalty. Dancers twirl gracefully in flowing ghagras, creating beautiful spiraling patterns.",
    region: "West",
  },
  {
    id: "up", name: "Uttar Pradesh", x: 222, y: 140,
    dance: "Kathak", description: "The Lucknow gharana of Kathak flourished under Nawabi patronage, emphasizing grace, expressiveness, and subtle abhinaya over athleticism.",
    region: "North",
  },
  {
    id: "br", name: "Bihar", x: 290, y: 158,
    dance: "Jat-Jatin", description: "A couple dance from Bihar depicting the bittersweet relationship between a husband and wife. Performed during the monsoon season under moonlight.",
    region: "East",
  },
  {
    id: "jh", name: "Jharkhand", x: 283, y: 194,
    dance: "Chhau", description: "A semi-classical martial dance with elaborate masks and warrior movements. Seraikella Chhau is the most prominent style from Jharkhand.",
    region: "East",
  },
  {
    id: "wb", name: "West Bengal", x: 332, y: 182,
    dance: "Rabindra Nritya", description: "A dance form inspired by Rabindranath Tagore's songs and philosophy. It blends classical elements with expressive storytelling and lyrical movement.",
    region: "East",
  },
  {
    id: "as", name: "Assam", x: 382, y: 128,
    dance: "Bihu", description: "The vibrant harvest dance of Assam performed during the Bihu festival. Characterised by rapid hand movements, hip sways, and energetic footwork.",
    region: "Northeast",
  },
  {
    id: "mn", name: "Manipur", x: 400, y: 168,
    dance: "Manipuri", description: "One of India's eight classical dance forms. Known for its fluid, soft movements and the iconic Ras Lila depicting Krishna's dance with the gopis.",
    region: "Northeast",
  },
  {
    id: "od", name: "Odisha", x: 302, y: 228,
    dance: "Odissi", description: "One of India's oldest classical dance forms. Known for the tribhangi posture (three-body-bend), sculpturesque poses, and devotional themes.",
    region: "East",
  },
  {
    id: "cg", name: "Chhattisgarh", x: 248, y: 212,
    dance: "Panthi", description: "A devotional dance of the Satnami community performed on Guru Ghasidas Jayanti. Dancers move in spiraling circles with increasing speed and energy.",
    region: "Central",
  },
  {
    id: "mp", name: "Madhya Pradesh", x: 192, y: 192,
    dance: "Tertali", description: "A unique folk dance where women sit on the ground and attach manjiras (cymbals) to their bodies, playing them while balancing pots on their heads.",
    region: "Central",
  },
  {
    id: "gj", name: "Gujarat", x: 88, y: 218,
    dance: "Garba", description: "A circular devotional dance performed during Navratri in honor of Goddess Durga. Dancers clap and move in concentric circles in colorful traditional attire.",
    region: "West",
  },
  {
    id: "mh", name: "Maharashtra", x: 162, y: 268,
    dance: "Lavani", description: "A powerful and expressive dance-song tradition. Lavani is known for its vigorous rhythm performed to the beat of dholki, with bold and assertive themes.",
    region: "West",
  },
  {
    id: "tg", name: "Telangana", x: 228, y: 285,
    dance: "Perini Shivatandavam", description: "An ancient warrior dance performed before battles to invoke Lord Shiva's blessings. Recently revived, it is known as the 'Dance of Warriors.'",
    region: "South",
  },
  {
    id: "ap", name: "Andhra Pradesh", x: 262, y: 312,
    dance: "Kuchipudi", description: "A classical dance-drama from Andhra Pradesh featuring expressive abhinaya and acrobatics, including the famous tarangam — dancing on a brass plate rim.",
    region: "South",
  },
  {
    id: "ga", name: "Goa", x: 132, y: 308,
    dance: "Fugdi", description: "A women's circle dance from Goa performed during religious festivals. Dancers form circles and execute rapid, interlocked movements in perfect sync.",
    region: "West",
  },
  {
    id: "ka", name: "Karnataka", x: 182, y: 332,
    dance: "Yakshagana", description: "A traditional theatre form combining dance, music, dialogue, and costume. Performed overnight in coastal Karnataka, depicting stories from Hindu epics.",
    region: "South",
  },
  {
    id: "kl", name: "Kerala", x: 178, y: 390,
    dance: "Kathakali", description: "A major classical dance-drama renowned for elaborate costumes and vivid face paint. Performers enact stories from Ramayana and Mahabharata.",
    region: "South",
  },
  {
    id: "tn", name: "Tamil Nadu", x: 232, y: 378,
    dance: "Bharatanatyam", description: "One of India's oldest classical dance forms originating in Tamil Nadu's temples. It combines nritta (pure dance), nritya (expressive dance), and natya (drama).",
    region: "South",
  },
];

const REGION_COLORS = {
  North: "#3949AB",
  Northeast: "#00897B",
  East: "#C2185B",
  Central: "#FF6B00",
  West: "#8E24AA",
  South: "#E53935",
};

export default function IndiaMap() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const active = selected || hovered;

  return (
    <div>
      <p style={{ fontSize: "15px", color: "#5D3A1A", lineHeight: 1.7, marginBottom: "24px", fontWeight: 300 }}>
        Explore India's rich dance heritage — click any state to discover its iconic classical or folk dance tradition.
      </p>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
        {Object.entries(REGION_COLORS).map(([region, color]) => (
          <span key={region} style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontSize: "12px", color: "#5D3A1A", fontWeight: 500,
          }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, display: "inline-block" }} />
            {region}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "flex-start" }}>
        {/* SVG Map */}
        <div style={{
          flex: "0 0 auto",
          background: "#fff",
          borderRadius: "20px",
          border: `1.5px solid ${theme.border}`,
          padding: "16px",
          overflow: "hidden",
        }}>
          <svg
            viewBox="0 0 490 490"
            width="100%"
            style={{ maxWidth: "460px", display: "block" }}
          >
            {/* India rough outline */}
            <path
              d="M118,18 L135,10 L165,12 L205,18 L250,15 L310,22 L370,55 L420,105 L435,145 L415,168 L405,195 L378,215 L350,225 L338,248 L320,262 L308,255 L298,270 L285,278 L272,295 L262,318 L255,340 L248,362 L238,385 L225,400 L210,415 L195,428 L185,440 L172,448 L158,442 L148,430 L138,415 L128,398 L118,378 L108,355 L98,332 L88,308 L78,282 L68,258 L58,232 L52,205 L45,178 L38,155 L35,130 L42,108 L55,88 L70,68 L88,48 L105,32 Z"
              fill="rgba(0,137,123,0.06)"
              stroke="rgba(0,137,123,0.3)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* State dots */}
            {STATES.map((state) => {
              const color = REGION_COLORS[state.region];
              const isActive = active?.id === state.id;
              const isSelected = selected?.id === state.id;
              return (
                <g
                  key={state.id}
                  onClick={() => setSelected(isSelected ? null : state)}
                  onMouseEnter={() => setHovered(state)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulse ring on selected */}
                  {isSelected && (
                    <circle cx={state.x} cy={state.y} r={14} fill={color} opacity={0.2}>
                      <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={state.x} cy={state.y}
                    r={isActive ? 8 : 6}
                    fill={color}
                    stroke="#fff"
                    strokeWidth={isActive ? 2.5 : 1.5}
                    style={{ transition: "r 0.15s ease" }}
                  />
                  {/* State label on hover/select */}
                  {isActive && (
                    <text
                      x={state.x} y={state.y - 13}
                      textAnchor="middle"
                      fontSize="9"
                      fill={color}
                      fontWeight="600"
                      style={{ pointerEvents: "none" }}
                    >
                      {state.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
          <p style={{ textAlign: "center", fontSize: "11px", color: "#aaa", marginTop: "4px" }}>
            Click a dot to explore its dance tradition
          </p>
        </div>

        {/* Info Panel */}
        <div style={{ flex: "1 1 260px" }}>
          {active ? (
            <div style={{
              background: "#fff",
              borderRadius: "20px",
              border: `1.5px solid ${REGION_COLORS[active.region]}40`,
              overflow: "hidden",
            }}>
              {/* Header */}
              <div style={{
                background: `linear-gradient(135deg, ${REGION_COLORS[active.region]}, ${REGION_COLORS[active.region]}bb)`,
                padding: "24px",
                color: "#fff",
              }}>
                <p style={{ fontSize: "12px", opacity: 0.85, marginBottom: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>
                  {active.region} India
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>
                  {active.name}
                </h3>
                <div style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.2)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}>
                  🎭 {active.dance}
                </div>
              </div>
              {/* Body */}
              <div style={{ padding: "20px 24px" }}>
                <p style={{ fontSize: "14px", color: "#5D3A1A", lineHeight: 1.75, fontWeight: 300 }}>
                  {active.description}
                </p>
              </div>
            </div>
          ) : (
            <div style={{
              background: theme.bg,
              borderRadius: "20px",
              border: `2px dashed ${theme.border}`,
              padding: "40px 24px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>🗺️</div>
              <p style={{ color: "#8B6452", fontSize: "14px", lineHeight: 1.6 }}>
                Click any dot on the map to discover<br />the dance tradition of that state
              </p>
            </div>
          )}

          {/* All states list */}
          <div style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              All states
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {STATES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(selected?.id === s.id ? null : s)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    border: `1.5px solid ${selected?.id === s.id ? REGION_COLORS[s.region] : "rgba(0,0,0,0.1)"}`,
                    background: selected?.id === s.id ? REGION_COLORS[s.region] : "#fff",
                    color: selected?.id === s.id ? "#fff" : "#5D3A1A",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
