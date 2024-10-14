import React from 'react';
import OrderShipped from '../OrderShipped/OrderShipped.js'

const data = [
  {
    orderNo: 'SOC000001',
    line: 1,
    product: 'CC-962A',
    description: 'COQSOL-DF 100 MG',
    deliveryDate: '//',
  },
  {
    orderNo: 'SOC000001',
    line: 2,
    product: 'CC-962A',
    description: 'COQSOL-DF 100 MG',
    deliveryDate: '//',
  },
  {
    orderNo: 'SOC000017',
    line: 6000,
    product: '11007',
    description: 'Cordless Professional Keyboard',
    deliveryDate: '02/10/12',
  },
  {
    orderNo: 'SO0002027',
    line: 3000,
    product: 'MANY SIZES',
    description: 'Product sold many diff UOMs',
    deliveryDate: '03/10/12',
  },
  {
    orderNo: 'SO0002037',
    line: 3000,
    product: '11111',
    description: 'Monitor 19" Widescreen',
    deliveryDate: '09/10/12',
  },
];

const ShortStock = () => {
  return (
    <div className="container flex mx-auto p-4 space-x-4">
      <div className="overflow-x-auto w-[35%] hover:w-full transition-all duration-500 ease-in-out">
      <h3 className='text-lg text-textColor dark:text-white font-semibold pb-2'>SO's With Short Stock </h3>
        <table className="min-w-full bg-white">
          <thead className="bg-[#3f51b5] dark:bg-[#1f2937] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Planned Delivery Date</th>
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
                <td className="py-3 px-6 text-textColor">{item.deliveryDate}</td>
                <td className="py-3 px-6 text-textColor">{item.orderNo}</td>
                <td className="py-3 px-6 text-textColor">{item.line}</td>
                <td className="py-3 px-6 text-textColor">{item.product}</td>
                <td className="py-3 px-6 text-textColor">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto w-[65%] hover:w-full transition-all duration-500 ease-in-out">
        <OrderShipped />
      </div>
    </div>
  );
};

export default ShortStock;
