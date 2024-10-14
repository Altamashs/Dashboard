import Counter from './Counter';

import Image from 'next/image';
import prepareIcon from '../assests/shipment-icon/shipment.png'
import prepareWhtIcon from '../assests/shipment-icon/shipment-wht.png'
import ticket from '../assests/shipment-icon/ticket.png'
import ticketwht from '../assests/shipment-icon/ticket-wht.png'
import shipped from '../assests/shipment-icon/cargo-ship.png'
import shippedWht from '../assests/shipment-icon/cargo-ship-wht.png'
import bill from '../assests/shipment-icon/bill.png'
import billWht from '../assests/shipment-icon/bill-wht.png'
import work from '../assests/shipment-icon/work-table.png'
import workWht from '../assests/shipment-icon/work-table-wht.png'
import pick from '../assests/shipment-icon/picking.png'
import pickWht from '../assests/shipment-icon/picking-wht.png'
import edit from '../assests/shipment-icon/edit.png'
import editwht from '../assests/shipment-icon/edit-wht.png'


// css import  //
import './shipment.css'



export default function Shipment() {
    return (
      <div className="container">
        <div className="grid grid-cols-4 gap-4 p-4">
          {/* Card 1: Shipment Preparation */}
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
            <div className="flex items-center space-x-3">
              <div>
                <Image src={prepareIcon} alt="Icon" className="block dark:hidden lght-img" />
              </div>
              <div className="!ml-0">
                <Image src={prepareWhtIcon} alt="White Icon" className="hidden dark:block drk-img" />
              </div>
              <div>
                <h3 className="text-lg text-textColor dark:text-white font-semibold">Shipment Preparation</h3>
                <Counter className="text-2xl text-textColor dark:text-white font-bold" number={11250} />
                <span className="text-sm text-green-500">0.43% ⬆</span>
              </div>
            </div>
          </div>
  
          {/* Card 2: Pick Ticket */}
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
            <div className="flex items-center space-x-3">
              <div>
                <Image src={ticket} alt="Icon" className="block dark:hidden lght-img" />
              </div>
              <div className="!ml-0">
                <Image src={ticketwht} alt="White Icon" className="hidden dark:block drk-img" />
              </div>
              <div>
                <h3 className="text-lg text-textColor dark:text-white font-semibold">Pick Ticket</h3>
                <Counter className="text-2xl text-textColor dark:text-white font-bold" number={1540} />
                <span className="text-sm text-green-500">4.35% ⬆</span>
              </div>
            </div>
          </div>
  
          {/* Card 3: Shipped */}
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
            <div className="flex items-center space-x-3">
              <div>
                <Image src={shipped} alt="Icon" className="block dark:hidden lght-img" />
              </div>
              <div className="!ml-0">
                <Image src={shippedWht} alt="White Icon" className="hidden dark:block drk-img" />
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-white text-textColor">Shipped</h3>
                <Counter className="text-2xl text-textColor dark:text-white font-bold" number={150} />
                <span className="text-sm text-green-500">2.59% ⬆</span>
              </div>
            </div>
          </div>
  
          {/* Card 4: Bill of Lading */}
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
            <div className="flex items-center space-x-3">
              <div>
                <Image src={bill} alt="Icon" className="block dark:hidden lght-img" />
              </div>
              <div className="!ml-0">
                <Image src={billWht} alt="White Icon" className="hidden dark:block drk-img" />
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-white text-textColor">Bill of Lading</h3>
                <Counter className="text-2xl text-textColor dark:text-white font-bold" number={2250} />
                <span className="text-sm text-green-500">0.59% ⬆</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {/* Card 5: Total Users */}
          <div className="py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
            <div className="text-center">
            <div className='flex justify-center'>
                <Image src={work} alt="Icon" className="block dark:hidden lght-img" />
              </div>
              <div className="!ml-0 flex justify-center">
                <Image src={workWht} alt="White Icon" className="hidden dark:block drk-img" />
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-white text-textColor pt-4">Directed Picking Workbench</h3>
                <Counter className="text-2xl text-textColor dark:text-white font-bold" number={10} />
                <button className="mt-2 px-4 mt-6 py-2 dark:bg-[#e5e7eb] dark:text-textColor bg-blue-500 text-white m-[auto] rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors">
                <span>Deliver List</span>
                </button>
              </div>
            </div>
          </div>
  
          {/* Card 6: Total Users */}
          <div className="py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
            <div className="text-center space-x-3">
            <div className='flex justify-center'>
                <Image src={pick} alt="Icon" className="block dark:hidden lght-img" />
              </div>
              <div className="!ml-0 flex justify-center">
                <Image src={pickWht} alt="White Icon" className="hidden dark:block drk-img" />
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-white text-textColor pt-4">Directed Picking Maint</h3>
                <Counter className="text-2xl text-textColor dark:text-white font-bold" number={125} />
                <button className="mt-2 px-4 mt-6 py-2 dark:bg-[#e5e7eb] dark:text-textColor bg-blue-500 text-white m-[auto] rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors">
                <span>Picking Ticket Equiry</span>
                </button>
              </div>
            </div>
          </div>
  
          {/* Card 7: Total Users */}
          <div className="py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out">
            <div className="text-center space-x-3">
            <div className='flex justify-center'>
                <Image src={edit} alt="Icon" className="block dark:hidden lght-img" />
              </div>
              <div className="!ml-0 flex justify-center">
                <Image src={editwht} alt="White Icon" className="hidden dark:block drk-img" />
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-white text-textColor pt-4">Directed Picking Edited</h3>
                <Counter className="text-2xl text-textColor dark:text-white font-bold" number={25} />
                <button className="mt-2 px-4 mt-6 py-2 bg-blue-500 dark:bg-[#e5e7eb] dark:text-textColor text-white m-[auto] rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors">
                <span>Parcel Content</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  