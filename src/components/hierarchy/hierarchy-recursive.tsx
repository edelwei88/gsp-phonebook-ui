'use client';
import { TreeItem } from '@/types/api/tree-item';
import { HierarchyItem } from './hierarchy-item';
import { useHierarchyStore } from '@/stores/hierarchy-store';
import { useRouter } from 'next/navigation';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs-store';
import { generateBreadcrumbs } from '@/lib/generate-breadcrumbs';
import { routeGen } from '@/lib/route-gen';

export function HierarchyRecursive({
  items,
  allItems,
}: {
  items: TreeItem[];
  allItems: TreeItem[];
}) {
  const selectedId = useHierarchyStore(state => state.selectedId);
  const openedIds = useHierarchyStore(state => state.openedIds);
  const setSelectedId = useHierarchyStore(state => state.setSelectedId);
  const setOpenedIds = useHierarchyStore(state => state.setOpenedIds);
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);
  const router = useRouter();

  return (
    <div className='flex flex-col ml-6'>
      {items.map(item => (
        <div className='flex flex-col' key={item.ID}>
          <HierarchyItem
            item={item}
            selected={selectedId === item.ID}
            opened={openedIds.includes(item.ID)}
            parent={item.Children.length > 0}
            onClick={() => {
              setSelectedId(item.ID);
              const breadcrumbs = generateBreadcrumbs(item.ID, allItems);
              setBreadcrumbs(breadcrumbs);
              if (breadcrumbs.length > 1) {
                router.push(routeGen(item.ID, breadcrumbs[0].id, 1));
              } else {
                router.push(routeGen(null, item.ID, 1));
              }
            }}
            onToggle={() => {
              if (openedIds.includes(item.ID))
                setOpenedIds([...openedIds.filter(value => value !== item.ID)]);
              else setOpenedIds([...openedIds, item.ID]);
            }}
          />
          <div className={openedIds.includes(item.ID) ? 'block' : 'hidden'}>
            {item.Children.length > 0 && openedIds.includes(item.ID) && (
              <HierarchyRecursive items={item.Children} allItems={allItems} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
