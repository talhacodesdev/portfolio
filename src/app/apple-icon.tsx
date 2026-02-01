import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse render element
      <div
        style={{
          fontSize: 100,
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Outer dashed border */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '8px dashed rgba(255, 255, 255, 0.2)',
          }}
        />
        
        {/* TC Monogram */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* T Shape */}
          <path
            d="M2 6H12M7 6V18"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="square"
          />
          {/* C Shape */}
          <path
            d="M20 6H15C13.5 6 12 7 12 9V15C12 17 13.5 18 15 18H20"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="square"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
