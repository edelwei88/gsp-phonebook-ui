'use client';

import React, { useState } from 'react';

interface Item {
  ID: string;
  Name: string;
  Children?: Item[];
}

interface HierarchyComponentProps {
  data: Item[];
}

const HierarchyComponent: React.FC<HierarchyComponentProps> = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id); 
        setSelectedItemId(null); 
      } else {
        newSet.add(id); 
        setSelectedItemId(id); 
      }
      return newSet;
    });
  };

  const renderItems = (items: Item[]) => {
    return items.map((item) => (
      <div key={item.ID} style={{ marginLeft: '20px' }}>
        <div
          onClick={() => item.Children && toggleItem(item.ID)} 
          style={{
            cursor: item.Children ? 'pointer' : 'default',
            userSelect: 'none',
            color: selectedItemId === item.ID ? 'blue' : 'black', 
          }}
        >
          {item.Name}
        </div>
        {item.Children && expandedItems.has(item.ID) && renderItems(item.Children)}
      </div>
    ));
  };

  return <div>{renderItems(data)}</div>;
};

export default HierarchyComponent;