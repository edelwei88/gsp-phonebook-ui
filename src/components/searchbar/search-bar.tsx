'use client';

import { useState, useEffect } from 'react';

import { SearchSelect } from '@/components/searchbar/search-select';
import { HintBlock } from '@/components/searchbar/hint';
import { Button } from '@/components/ui/button';

import { Search } from '@/api/search';
import { User } from '@/types/api/user';
import { SearchIcon } from 'lucide-react';

type SearchType = 'name' | 'phone' | 'email';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('name');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const setSearchData = ({
    attribute,
    value,
  }: {
    attribute: string;
    value: string;
  }) => {};
  const setSelectedIdAndBreadcrumbs = (rofl: any, asdf: any) => {};
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const performSearch = async () => {
        if (!searchValue) {
          setSearchResults([]);
          setHasSearched(false);
          return;
        }

        const results = await Search(searchValue, searchType);
        setSearchResults(results.items);
        setHasSearched(true);
      };

      performSearch();
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue, searchType]);

  const handleSearchSubmit = () => {
    setSearchData({
      attribute: searchType,
      value: searchValue,
    });
    setSelectedIdAndBreadcrumbs(null, []);
  };

  return (
    <div className='flex gap-2 my-2 w-full'>
      <div className='flex-1'>
        <div className='h-[50px] rounded-[15px] bg-input ease-in-out'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <SearchIcon />
            </div>
            <input
              type='search'
              className='pr-28 block w-full h-[50px] pl-10 border-none text-center rounded-[20px] py-2 focus:border-primary focus:outline-none bg-transparent'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder='Поиск...'
            />
            <SearchSelect
              classname='bg-inputborder-none rounded-r-[15px] absolute right-0 top-0 rounded-l-none ease-in-out'
              onSelectChange={setSearchType}
            />
          </div>
          {isFocused && (
            <div className='relative'>
              <HintBlock users={searchResults} hasSearched={hasSearched} />
            </div>
          )}
        </div>
      </div>
      <Button
        onClick={handleSearchSubmit}
        className='cursor-pointer w-1/8 h-[50px] rounded-[15px]'>
        Найти
      </Button>
    </div>
  );
}
