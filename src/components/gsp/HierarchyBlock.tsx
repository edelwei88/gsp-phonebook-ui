'use client';
import {useState} from 'react';
import HierarchyComponent from './Hierarchy';
import {Item} from '@/components/types/types';
import {CircleX} from 'lucide-react';
import {ChevronRight} from 'lucide-react';

interface HierarchyBlockProps {
    dataWithUniqueIds: Item[];
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
}

const HierarchyBlock = ({
    dataWithUniqueIds,
    isExpanded,
    setIsExpanded,
}: HierarchyBlockProps) => {
    return (
        <div className='flex flex-row w-full'>
            <div
                className={`flex flex-col bg-alice rounded-[15px] h-[75vh] transition-all duration-300 ${
                    isExpanded ? 'w-full p-4' : 'w-0 p-0'
                }`}
            >
                {isExpanded && (
                    <div className='flex flex-row w-full justify-end relative'>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className='z-100 absolute p-3 right-4 text-xl rounded text-black'
                        >
                            <CircleX size={30} />
                        </button>
                    </div>
                )}
                <div
                    className={`transition-all duration-300 overflow-auto ${
                        isExpanded ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <HierarchyComponent data={dataWithUniqueIds} />
                </div>
            </div>

            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className='p-3 bg-azul dark:text-white h-[15%] w-[40px] rounded-r-[35px] absolute left-[-20] top-[50%] text-xl rounded text-black ml-2'
                >
                    <ChevronRight size={30} />
                </button>
            )}
        </div>
    );
};

export default HierarchyBlock;
