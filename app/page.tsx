"use client";
import React, { useState } from "react";
import Folder from "@/components/Folder";
import { navItems as initialNavItems, navItem } from "@/constants/navitems";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  const [navItems, setNavItems] = useState(initialNavItems);

  const moveItem = (item: navItem, targetFolderName: string) => {
    const findAndRemoveItem: any = (items: navItem[], name: string) => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.name === name) {
          items.splice(i, 1);
          return item;
        }
        if (item.children) {
          const removedItem = findAndRemoveItem(item.children, name);
          if (removedItem) {
            return removedItem;
          }
        }
      }
    };

    const addItem = (
      items: navItem[],
      targetFolderName: string,
      item: navItem,
    ) => {
      for (const folder of items) {
        if (folder.name === targetFolderName && folder.type === "folder") {
          folder.children = folder.children
            ? [...folder.children, item]
            : [item];
          return;
        }
        if (folder.children) {
          addItem(folder.children, targetFolderName, item);
        }
      }
    };

    setNavItems((prevItems) => {
      const newItems = [...prevItems];
      const itemToMove = findAndRemoveItem(newItems, item.name);
      if (itemToMove) {
        addItem(newItems, targetFolderName, itemToMove);
      }
      return newItems;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex items-center flex-col gap-5 justify-center pt-8 border-black">
        <div>
          {navItems.map((item, index) => (
            // @ts-ignore
            <Folder {...item} key={index} moveItem={moveItem} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
