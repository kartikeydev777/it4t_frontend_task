import React from 'react'

export default function Powered() {
    return (
        <>
            <div className="bg-white py-10 my-14 ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


                    <div className="flex flex-col gap-4  items-start bg-gray-50 p-6 rounded">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="ATOL & TTA" className="w-12  object-contain" />
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1 nata-sans-700">ATOL & TTA trusted</h3>
                            <p className="text-sm text-gray-600">
                                Holiday protection has never been so important and we offer the best protection possible!
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4  items-start bg-gray-50 p-6 rounded">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Planet Holidays" className="w-12 object-contain" />
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1 nata-sans-700">Powered by Planetholidays</h3>
                            <p className="text-sm text-gray-600">
                                Adventrus is... Some text about Adventru in the planetholiday system.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4  items-start bg-gray-50 p-6 rounded">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Payment Security" className="w-12 object-contain" />
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1 nata-sans-700">Payment Security</h3>
                            <p className="text-sm text-gray-600">
                                We have partnered with Opayo and Barclays to protect and encrypt any payment details you provide to us.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
