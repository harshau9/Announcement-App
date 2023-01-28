export enum TopicType {
  General = "General",
  Coding = "Coding",
  DSA = "DSA",
  CSBT = "CSBT",
}

export type Topic = {
  id: number;
  type: TopicType;
  message: string;
  likes: number;
};

export type TopicInfo = {
  title: string;
  sectionBgColor: string;
  itemBgColor: string;
};

export const topicInfo: Record<TopicType, TopicInfo> = {
  General: {
    title: "General Announcement...",
    sectionBgColor: "rgb(217, 221, 99)",
    itemBgColor: "rgb(197, 204, 20)",
  },
  Coding: {
    title: "Coding Announcement...",
    sectionBgColor: "green.200",
    itemBgColor: "green.500",
  },
  DSA: {
    title: "DSA Announcement...",
    sectionBgColor: "blue.200",
    itemBgColor: "blue.500",
  },
  CSBT: {
    title: "CSBT Announcement....",
    sectionBgColor: "yellow.200",
    itemBgColor: "yellow.500",
  },
};
