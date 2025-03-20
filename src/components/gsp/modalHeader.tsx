import { BriefcaseBusiness } from 'lucide-react';

interface ModalHeaderProps {
  employee: {
    FullNameRus: string;
    Photo: string;
  };
}
export default function ModalHeader({ employee }: ModalHeaderProps) {
  return (
    <div className='flex p-6 justify-start bg-alice dark:bg-charcoal rounded-t-xl'>
      <div className='relative h-32 w-32 ml-10 overflow-hidden rounded-[15px] border-4 border-gray-400'>
        {employee.Photo.length > 0 ? (
          <img alt='photo' src={'data:image/jpg;base64,' + employee.Photo} />
        ) : (
          <img
            alt='photo'
            src='https://global.discourse-cdn.com/turtlehead/original/2X/c/c830d1dee245de3c851f0f88b6c57c83c69f3ace.png'
          />
        )}
      </div>
      <div className='px-20 py-4'>
        <h3 className='text-xl font-bold text-gray-800 dark:text-aliceblue'>
          {employee.FullNameRus}
        </h3>
        <div className='flex justify-start text-sm text-gray-500 dark:text-aliceblue'>
          <p>Должность</p>
        </div>
        <div className='flex justify-start mt-3'>
          <BriefcaseBusiness className='text-black dark:text-aliceblue' />
        </div>
      </div>
    </div>
  );
}
