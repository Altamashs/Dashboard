import React from 'react';

const data = [
  {
    orderNo: 'S0000146',
    line: 1000,
    product: '22331',
    description: 'CO2 Cartridges, 16g, 2-Pack',
    deliveryDate: '',
  },
  {
    orderNo: 'S0000147',
    line: 1000,
    product: '22331',
    description: 'CO2 Cartridges, 16g, 2-Pack',
    deliveryDate: '', 
  },
  {
    orderNo: 'S0000148',
    line: 1000,
    product: '22331',
    description: 'CO2 Cartridges, 16g, 2-Pack',
    deliveryDate: '', 
  },
  {
    orderNo: 'S0000168',
    line: 1000,
    product: '11101',
    description: 'Standard Mouse',
    deliveryDate: '',
  },
  {
    orderNo: 'S0000168',
    line: 3000,
    product: '11105',
    description: 'Cordless Standard Mouse',
    deliveryDate: '', 
  },
  {
    orderNo: 'S0000168',
    line: 4000,
    product: '11106',
    description: 'Standard Keyboard',
    deliveryDate: '', 
  },
  {
    orderNo: 'S0000168',
    line: 5000,
    product: '11106',
    description: 'Cordless Professional Mouse',
    deliveryDate: '', 
  },
  {
    orderNo: 'S0000168',
    line: 6000,
    product: '11107',
    description: 'Cordless Professional Keyboard',
    deliveryDate: '', 
  },
  {
    orderNo: 'S0000170',
    line: 5000,
    product: '11106',
    description: 'Cordless Standard Keyboard',
    deliveryDate: '',  
  },
];

const OrderShipped = () => {
  return (
    <div className="overflow-x-auto w-full">
        <h3 className='text-lg text-textColor dark:text-white font-semibold pb-2'>Late Order to be Shipped</h3>
      <table className="min-w-full bg-white">
        <thead className="bg-[#3f51b5] dark:bg-[#1f2937] text-white">
          <tr>
            <th className="py-3 px-6 text-left">Order No</th>
            <th className="py-3 px-6 text-left">Line</th>
            <th className="py-3 px-6 text-left">Product</th>
            <th className="py-3 px-6 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-[#e5e7eb]' : 'bg-white'}`}
            >
              <td className="py-3 px-6 text-textColor">{item.orderNo}</td>
              <td className="py-3 px-6 text-textColor">{item.line}</td>
              <td className="py-3 px-6 text-textColor">{item.product}</td>
              <td className="py-3 px-6 text-textColor">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderShipped;
