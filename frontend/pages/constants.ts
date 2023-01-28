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
    title: "General Announcements",
    sectionBgColor: "#ea9c1b",
    itemBgColor: "#5f685a"
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
