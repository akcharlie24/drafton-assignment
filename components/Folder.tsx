"use client";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import File from "./File";
import { FolderType, ItemTypes } from "@/types";

const Folder = ({ name, type, children, moveItem }: FolderType) => {
  const [{ isOver }, drop] = useDrop({
    accept: [ItemTypes.FILE, ItemTypes.FOLDER],
    drop: (item) => {
      //@ts-ignore
      if (item.name !== name) {
        moveItem(item, name);
      }
    },
    canDrop: (item) => type === "folder",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.FOLDER,
    item: { name, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      //@ts-ignore
      ref={drop}
      className={`px-3 border-black border ${isDragging ? "opacity-50" : ""} ${isOver ? "bg-blue-200" : ""}`}
    >
      <div
        //@ts-ignore
        ref={drag}
        className="border border-black"
      >
        {name}
      </div>
      {children?.map((child, index) => (
        <React.Fragment key={index}>
          {child.type === "folder" ? (
            <Folder {...child} moveItem={moveItem} />
          ) : (
            <File name={child.name} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Folder;
