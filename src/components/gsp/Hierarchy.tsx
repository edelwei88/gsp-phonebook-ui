'use client';
import React, {useState} from 'react';

interface Item {
    id: string;
    name: string;
    children?: Item[];
}

interface HierarchyComponentProps {
    data: Item[];
}

const HierarchyComponent: React.FC<HierarchyComponentProps> = ({data}) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [selectedPath, setSelectedPath] = useState<Item[]>([]);

    const findPath = (
        items: Item[],
        targetId: string,
        path: Item[] = [],
    ): Item[] | null => {
        for (const item of items) {
            const newPath = [...path, item];
            if (item.id === targetId) {
                return newPath;
            }
            if (item.children) {
                const result = findPath(item.children, targetId, newPath);
                if (result) return result;
            }
        }
        return null;
    };

    const toggleItem = (id: string) => {
        setExpandedItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
                setSelectedItemId(null);
                setSelectedPath([]);
            } else {
                newSet.add(id);
                setSelectedItemId(id);
                const path = findPath(data, id);
                if (path) {
                    setSelectedPath(path);
                }
            }
            return newSet;
        });
    };

    const renderItems = (items: Item[]) => {
        return items.map((item) => (
            <div
                key={item.id}
                style={{marginLeft: '20px', position: 'relative'}}
            >
                <div
                    onClick={() => item.children && toggleItem(item.id)}
                    style={{
                        cursor: item.children ? 'pointer' : 'default',
                        userSelect: 'none',
                        color: selectedItemId === item.id ? 'blue' : 'black',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {item.children && (
                        <span style={{marginRight: '8px'}}>
                            {expandedItems.has(item.id) ? '−' : '+'}
                        </span>
                    )}
                    {item.name}
                </div>
                {item.children &&
                    expandedItems.has(item.id) &&
                    renderItems(item.children)}
            </div>
        ));
    };

    return <div>{renderItems(data)}</div>;
};

export default HierarchyComponent;
