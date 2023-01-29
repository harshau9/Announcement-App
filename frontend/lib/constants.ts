export enum AnnouncerType {
  General = "General",
  Coding = "Coding",
  DSA = "DSA",
  CSBT = "CSBT",
}

export type Announcer = {
  id: number;
  type: AnnouncerType;
  message: string;
  likes: number;
};

export type AnnouncerInfo = {
  title: string;
  sectionBgColor: string;
  itemBgColor: string;
};

export const announcerInfo: Record<AnnouncerType, AnnouncerInfo> = {
  General: {
    title: "General Announcements",
    sectionBgColor: "#ea9c1b",
    itemBgColor: "#5f685a",
  },
  Coding: {
    title: "Coding Announcement",
    sectionBgColor: "#f3bc77",
    itemBgColor: "#a55233",
  },
  DSA: {
    title: "DSA Announcement",
    sectionBgColor: "blue.500",
    itemBgColor: "#65589c",
  },
  CSBT: {
    title: "CSBT Announcement",
    sectionBgColor: "#8b104e",
    itemBgColor: "#520556",
  },
};
