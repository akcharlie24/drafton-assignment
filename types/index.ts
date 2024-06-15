import { navItem } from "@/constants/navitems";

export const ItemTypes = {
  FILE: "file",
  FOLDER: "folder",
};

export interface FolderType {
  name: string;
  type: string;
  children: Array<FolderType>;
  moveItem: any;
}
