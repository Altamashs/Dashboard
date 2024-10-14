'use client';
import React, { useState } from "react";
import Image from "next/image";
import view from '../assests/shipment-icon/view.png'
import c1 from '../assests/Palltet-img/c1.jpg';
import c2 from '../assests/Palltet-img/c2.jpg';
import c3 from '../assests/Palltet-img/c3.jpg';
import c4 from '../assests/Palltet-img/c4.jpg';
import c5 from '../assests/Palltet-img/c5.jpg';
import c6 from '../assests/Palltet-img/c6.jpg';
import c7 from '../assests/Palltet-img/c6.jpg';
import c8 from '../assests/Palltet-img/c8.jpg';
import c9 from '../assests/Palltet-img/c9.jpg';
import p1 from '../assests/Palltet-img/p1.jpg';
import p2 from '../assests/Palltet-img/p2.jpg';
import p3 from '../assests/Palltet-img/p3.jpg';
import p4 from '../assests/Palltet-img/p4.jpg';
import p5 from '../assests/Palltet-img/p5.jpg';
import p6 from '../assests/Palltet-img/p6.jpg';
import x1 from '../assests/Palltet-img/x1.jpg';
import x2 from '../assests/Palltet-img/x2.jpg';
import x3 from '../assests/Palltet-img/x3.jpg';




const patterns = [
  { id: 'C1', imgSrc: c1 },
  { id: 'C2', imgSrc: c2 }, 
  { id: 'C3', imgSrc: c3 }, 
  { id: 'C4', imgSrc: c4 }, 
  { id: 'C5', imgSrc: c5 }, 
  { id: 'C6', imgSrc: c6 }, 
  { id: 'C7', imgSrc: c7 },
  { id: 'C8', imgSrc: c8 }, 
  { id: 'C9', imgSrc: c9 }, 
  { id: 'p1', imgSrc: p1 }, 
  { id: 'p2', imgSrc: p2 }, 
  { id: 'p3', imgSrc: p3 }, 
  { id: 'p4', imgSrc: p4 }, 
  { id: 'p5', imgSrc: p5 }, 
  { id: 'p6', imgSrc: p6 }, 
  { id: 'x1', imgSrc: x1 }, 
  { id: 'x2', imgSrc: x2 },
  { id: 'x3', imgSrc: x3 }, 

];

const PalletPattern = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState(null);

  const openModal = (pattern) => {
    setSelectedPattern(pattern);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPattern(null);
  };

  return (
        <div className="container !mt-8 p-4 pb-8 !mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform">
            <h3 className="text-lg text-textColor dark:text-white font-semibold py-10">Pallet Pattern</h3>
                <div className="grid grid-cols-6 gap-4 gap-y-16">
      {patterns.map((pattern) => (
        <div key={pattern.id} className="relative group">
          <Image src={pattern.imgSrc} alt={pattern.id} className="border" width={80} height={200} />

          <div
            className="absolute w-[80px] inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 cursor-pointer"
            onClick={() => openModal(pattern)}
          >
            <Image src={view} width={30}/>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isOpen && selectedPattern && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black"
            >
              X
            </button>
            <Image
              src={selectedPattern.imgSrc}
              alt={selectedPattern.id}
              className="w-full h-auto"
              width={600}
              height={600} // Adjust size if needed
            />
          </div>
        </div>
      )}
    </div>
        </div>
  );
};

export default PalletPattern;
