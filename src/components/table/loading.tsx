import { TABLE } from '@/consts/table';
import { Skeleton } from '../ui/skeleton';

export function LoadingState() {
  return [...Array(TABLE.SIZE)].map((_, index) => (
    <Skeleton
      className='w-[calc(100%-40px)] h-[calc((100%-40px*11)/20)] rounded-4 m-5'
      key={index}
    />
  ));
}
