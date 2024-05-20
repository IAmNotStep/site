"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const images = [
    "/20240329114256_IMG_4951.JPG",
    "/20240329114420_IMG_4953.JPG"
  ]
  const text = [
    "blurb about image 1",
    "blurb about image 2"
  ]

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <main className="relative h-screen bg-gradient-to-b from-indigo-500 to-orange-600">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '0 0 40%', marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: '24px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>This is random text say hi or something lol.</h1>
        </div>
        <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
          {images.map((image, index) => (
            <div key={index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)} style={{ position: 'relative' }}>
              <Image src={image} alt={`Image ${index + 1}`} width={500} height={300} style={{ filter: hoverIndex === index ? 'blur(5px)' : 'none', border: '2px solid black' }} />
              {hoverIndex === index && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  {text[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}