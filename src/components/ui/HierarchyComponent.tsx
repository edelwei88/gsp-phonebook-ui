import React from 'react';

interface Item {
  ID: string;
  Name: string;
  Children?: Item[];
}

interface HierarchyComponentProps {
  data: Item[];
}

const HierarchyComponent: React.FC<HierarchyComponentProps> = ({ data }) => {
  const renderItems = (items: Item[]) => {
    return items.map((item) => (
      <div key={item.ID} style={{ marginLeft: '20px' }}>
        <div>{item.Name}</div>
        {item.Children && renderItems(item.Children)}
      </div>
    ));
  };

  return <div>{renderItems(data)}</div>;
};

export default HierarchyComponent;