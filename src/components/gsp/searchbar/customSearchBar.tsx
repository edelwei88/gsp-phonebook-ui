"use client";
import { useState, useEffect, SVGProps } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { User } from "@/lib/types/user";
import HintBlock from "./hintBlock";

function SearchSelect({
  className,
  onSelectChange,
}: {
  className?: string;
  onSelectChange: (value: string) => void;
}) {
  const [selectedOption, setSelectedOption] = useState("name");
  return (
    <Select
      defaultValue={selectedOption}
      onValueChange={(value) => {
        setSelectedOption(value);
        onSelectChange(value);
      }}
    >
      <SelectTrigger className={className}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="name">ФИО</SelectItem>
          <SelectItem value="phone">Телефон</SelectItem>
          <SelectItem value="email">E-mail</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchValue) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    const response = await fetch(
      `/search?attribute=${searchType}&value=${searchValue}`,
    );
    const result = await response.json();
    const first10users = result.items.slice(0, 10);
    setSearchResults(first10users);
    setHasSearched(true);
    console.log("Search Results:", first10users);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue, searchType]);

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full h-[50px] bg-uran rounded-[20px] dark:bg-davysgray dark:text-aliceblue transition-all duration-500 ease-in-out">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="h-5 w-5 text-black dark:text-aliceblue" />
        </div>
        <Input
          type="search"
          placeholder="Search..."
          className="block w-full h-[50px] pl-10 border-none text-center rounded-[20px] py-2 focus:border-primary focus:outline-none"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <SearchSelect
          className="border-none rounded-r-[15px] absolute right-0 top-0 h-full rounded-l-none dark:text-aliceblue transition-all duration-500 ease-in-out"
          onSelectChange={setSearchType}
        />
      </div>
      {isFocused && (
        <HintBlock users={searchResults} hasSearched={hasSearched} />
      )}
    </div>
  );
}
