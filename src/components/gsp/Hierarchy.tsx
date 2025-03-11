"use client";
import React, { useState } from "react";

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
  const [selectedPath, setSelectedPath] = useState<Item[]>([]);

  const findPath = (
    items: Item[],
    targetId: string,
    path: Item[] = [],
  ): Item[] | null => {
    for (const item of items) {
      const newPath = [...path, item];
      if (item.ID === targetId) {
        return newPath;
      }
      if (item.Children) {
        const result = findPath(item.Children, targetId, newPath);
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
      <div key={item.ID} style={{ marginLeft: "20px", position: "relative" }}>
        <div
          onClick={() => item.Children && toggleItem(item.ID)}
          style={{
            cursor: item.Children ? "pointer" : "default",
            userSelect: "none",
            color: selectedItemId === item.ID ? "blue" : "black",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {item.Children && (
            <span style={{ marginRight: "8px" }}>
              {expandedItems.has(item.ID) ? "−" : "+"}
            </span>
          )}
          {item.Name}
        </div>
        {item.Children &&
          expandedItems.has(item.ID) &&
          renderItems(item.Children)}
      </div>
    ));
  };

  return <div>{renderItems(data)}</div>;
};
export default HierarchyComponent;
