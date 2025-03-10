'use client'
import { useState } from "react"
import Image from "next/image"
import CloseIcon from "@/components/gsp/Close"
import TrashIcon from "@/components/gsp/TrashBin"
import CopyIcon from "@/components/gsp/Copy"
import SaveChanges from "@/components/gsp/SaveChanges"
import { string } from "zod"

export default function EmployeeModal({ employee, onClose }: { employee: any, onClose: () => void }) {
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [code, setCode] = useState('');

    const handleSave = () => {
        //тут надо потом как-то сделать
        setShowCodeInput(true);
    };

    const handleSendCode = () => {
        //тут надо потом как-то сделать
        
        console.log('Введенный код:', code);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex place-content-center w-4/5">
                <div className="w-2/3 rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl mt-20 relative">
                    <div className="absolute top-4 right-4 flex space-x-4">
                        <button onClick={handleSave} className="text-gray-600 hover:text-gray-800">
                            <SaveChanges />
                        </button>
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="flex p-6 justify-start bg-alice rounded-t-xl">
                        <div className="relative h-20 w-20 ml-10 overflow-hidden rounded-full border-4 border-gray-400">
                            <Image
                                src="/"
                                alt="Фото"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <div className="px-20 py-4 text-center">
                            <h3 className="text-xl font-bold text-gray-800">ФИО</h3>
                            <div className="flex justify-start space-x-2 text-sm text-gray-500"> 
                                <p>Должность</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-4 m-10">
                        <div className="flex flex-col space-y-4">
                            
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800">Мобильный телефон (личный)</h3>
                                <div className="flex items-center space-x-28">
                                <input
                                        type="text"
                                        placeholder="+ 7 999 888 77 66"
                                        className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600"
                                />
                                    <button>
                                        <TrashIcon />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800">Городской телефон</h3>
                                <div className="flex items-center space-x-28">
                                <input
                                        type="text"
                                        placeholder="+ 7 999 888 77 66"
                                        className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600"
                                />
                                    <button>
                                        <TrashIcon />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800">Рабочее место</h3>
                                <div className="flex items-center space-x-28">
                                <input
                                        type="text"
                                        placeholder="1"
                                        className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600"
                                />
                                    <button>
                                        <TrashIcon />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800">Адрес</h3>
                                <div className="flex items-center space-x-28">
                                <input
                                        type="text"
                                        placeholder="Адрес"
                                        className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600"
                                />
                                    <button> 
                                        <TrashIcon />
                                    </button>
                                </div>
                            </div>

                            {showCodeInput && (
                                <div className="flex justify-center items-center">
                                    <input
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        placeholder="Введите код"
                                        className="border border-gray-300 rounded-lg p-2"
                                    />
                                    <button
                                        onClick={handleSendCode}
                                        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    >
                                        Отправить
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}