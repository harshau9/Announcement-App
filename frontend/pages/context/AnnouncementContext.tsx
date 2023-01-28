import React, { createContext, useState } from "react";

import { Announcer, AnnouncerType } from "../constants";
import initialAnnouncers from "../initialData.json";

type AnnouncersContextProps = {
  announcers: Announcer[];
  addAnnouncer?: (value: string, type: AnnouncerType) => void;
  likeAnnouncer?: (id: number, newLikesCount: number) => void;
  deleteAnnouncer?: (id: number) => void;
};

export const AnnouncersContext = createContext<AnnouncersContextProps>({
  announcers: [],
});

const AnnouncerProvider = ({ children }: { children: React.ReactNode }) => {
  const [announcers, setAnnouncers] = useState<Announcer[]>(
    initialAnnouncers as Announcer[]
  );

  const addAnnouncer = async (message: string, type: AnnouncerType) => {
    setAnnouncers([
      ...announcers,
      {
        id: Date.now(),
        message,
        type,
        likes: 0,
      },
    ]);
  };

  const likeAnnouncer = async (id: number, newLikesCount: number) => {
    let updatedAnnouncers = announcers.map((announcer) => {
      if (announcer.id === id) {
        announcer.likes = newLikesCount;
      }
      return announcer;
    });
    setAnnouncers(updatedAnnouncers);
  };

  const deleteAnnouncer = (id: number) => {
    let updatedAnnouncers = announcers.filter(
      (announcer) => announcer.id !== id
    );
    setAnnouncers(updatedAnnouncers);
  };

  return (
    <AnnouncersContext.Provider
      value={{ announcers, addAnnouncer, likeAnnouncer, deleteAnnouncer }}
    >
      {children}
    </AnnouncersContext.Provider>
  );
};

export default AnnouncerProvider;
