'use client';
import { SearchSelectProps } from '@/types/components/search-bar';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SearchSelect({ classname, onSelectChange }: SearchSelectProps) {
  return (
    <Select defaultValue='name' onValueChange={onSelectChange}>
      <SelectTrigger size='default' className={classname}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='name'>ФИО</SelectItem>
          <SelectItem value='phone'>Телефон</SelectItem>
          <SelectItem value='email'>E-mail</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
