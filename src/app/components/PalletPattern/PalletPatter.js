'use client';
import React, { useState } from "react";
import Image from "next/image";
import view from '../assets/shipment-icon/view.png'
import c1 from '../assets/PalletImage/c1.jpg';
import c2 from '../assets/PalletImage/c2.jpg';
import c3 from '../assets/PalletImage/c3.jpg';
import c4 from '../assets/PalletImage/c4.jpg';
import c5 from '../assets/PalletImage/c5.jpg';
import c6 from '../assets/PalletImage/c6.jpg';
import c7 from '../assets/PalletImage/c6.jpg';
import c8 from '../assets/PalletImage/c8.jpg';
import c9 from '../assets/PalletImage/c9.jpg';





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
