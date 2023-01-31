import React, { createContext, useState } from "react";

import { Announcer, AnnouncerType } from "../lib/constants";
import initialAnnouncers from "../pages/initialData.json";

type AnnouncersContextProps = {
  announcers: Announcer[];
  addAnnouncer?: (value: string, type: AnnouncerType) => void;
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
      },
    ]);
  };

  const deleteAnnouncer = (id: number) => {
    let updatedAnnouncers = announcers.filter(
      (announcer) => announcer.id !== id
    );
    setAnnouncers(updatedAnnouncers);
  };

  return (
    <AnnouncersContext.Provider
      value={{ announcers, addAnnouncer, deleteAnnouncer }}
    >
      {children}
    </AnnouncersContext.Provider>
  );
};

export default AnnouncerProvider;
