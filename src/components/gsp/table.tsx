import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect } from 'react';
import { useGlobalStore } from '@/lib/stores/globalStore';
import { Users } from '@/app/search/route';
import { BriefcaseMedicalIcon } from 'lucide-react';
import EmployeeModal from './employeeModal';

export function Table() {
  const items = useGlobalStore(state => state.items);
  const setItems = useGlobalStore(state => state.setItems);
  const page = useGlobalStore(state => state.page);
  const setMaxPage = useGlobalStore(state => state.setMaxPage);
  const size = useGlobalStore(state => state.size);
  const selectedId = useGlobalStore(state => state.selectedId);
  const breadcrumbs = useGlobalStore(state => state.breadcrumbs);
  const selectedUser = useGlobalStore(state => state.selectedUser);
  const setSelectedUser = useGlobalStore(state => state.setSelectedUser);
  const searchData = useGlobalStore(state => state.searchData);

  useEffect(() => {
    async function fetchDataHierarchy() {
      let data;
      if (breadcrumbs.length === 1) {
        data = await fetch(
          `/users?page=${page}&organization_id=${selectedId}&size=${size}`,
        );
      } else if (breadcrumbs.length > 1) {
        data = await fetch(
          `/users?page=${page}&organization_id=${breadcrumbs[0].id}&department_id=${selectedId}&size=${size}`,
        );
      } else {
        data = await fetch(`/users?page=${page}&size=${size}`);
      }
      const json: Users = await data.json();
      setItems(json.items);
      setMaxPage(json.pages);
    }
    async function fetchDataSearch() {
      const data = await fetch(
        `/search?attribute=${searchData.attribute}&value=${searchData.value}&page=${page}&size=${size}`,
      );
      const json: Users = await data.json();
      setItems(json.items);
      setMaxPage(json.pages);
    }
    if (searchData.attribute === '' || searchData.value === '') {
      fetchDataHierarchy();
    } else {
      fetchDataSearch();
    }
  }, [selectedId, page, searchData.attribute, searchData.value]);

  return (
    <>
      <TableRoot data-testid='table'>
        <TableHeader className='text-center bg-columbia dark:bg-charcoal'>
          <TableRow>
            <TableHead className='text-white text-left pl-14'>ФИО</TableHead>
            <TableHead className='text-white'>Должность</TableHead>
            <TableHead className='text-white text-right'>Почта</TableHead>
            <TableHead className='text-white text-right pr-15'>
              Телефон
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='dark:bg-onyx'>
          {items.map(item => (
            <TableRow
              className='select-none cursor-pointer'
              key={item.ID}
              onClick={() => {
                setSelectedUser(item);
              }}>
              <TableCell className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-5'>
                  {item.Photo.length > 0 ? (
                    <img
                      alt='photo'
                      className='w-12 h-12 ml-12'
                      src={'data:image/jpg;base64,' + item.Photo}
                    />
                  ) : (
                    <img
                      alt='photo'
                      className='w-12 h-12 ml-12'
                      src='https://global.discourse-cdn.com/turtlehead/original/2X/c/c830d1dee245de3c851f0f88b6c57c83c69f3ace.png'
                    />
                  )}
                  <span className='justify-self-center'>
                    {item.FullNameRus}
                  </span>
                </div>
                <div className='mr-12'>
                  {item.Boleet === 1 && (
                    <BriefcaseMedicalIcon className='ml-12' />
                  )}
                </div>
              </TableCell>
              <TableCell className='text-center'>{item.Workplace}</TableCell>
              <TableCell className='text-right'>{item.Email}</TableCell>
              <TableCell className='text-right pr-15'>{item.Phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      {selectedUser !== null && (
        <EmployeeModal
          employee={selectedUser}
          onClose={() => {
            setSelectedUser(null);
          }}
        />
      )}
    </>
  );
}
