'use client';

import React, {useState} from 'react';

import {Search} from 'lucide-react';
import {Input} from '@/components/ui/input';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

function SearchSelect({className}: {className?: string}) {
    const [selectedOption, setSelectedOption] = useState('fio');

    return (
        <Select
            defaultValue={selectedOption}
            onValueChange={(value) => {
                setSelectedOption(value);
            }}
        >
            <SelectTrigger className={className}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value='fio'>ФИО</SelectItem>
                    <SelectItem value='phone'>Телефон</SelectItem>
                    <SelectItem value='email'>E-mail</SelectItem>
                    <SelectItem value='authority'>Должность</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export function SearchBar({className}: {className: string}) {
    return (
        <div className={`relative ${className}`}>
            <Search className='absolute left-2 h-full w-4 text-muted-foreground' />
            <Input
                placeholder='Поиск'
                className='pl-8 pr-32 h-full rounded-[15px]'
            />
            <SearchSelect className='border-none rounded-r-[15px] absolute right-0 top-0 h-full rounded-l-none' />
        </div>
    );
}
