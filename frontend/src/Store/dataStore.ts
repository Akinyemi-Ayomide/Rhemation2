import { create } from "zustand";
import { data as initialData } from "../assets/data"; // Import static data

interface Link {
  id: number;
  link: string;
  name: string;
  title: string;
  position: string;
}

interface Store {
  data: Link[];
  loading: boolean;
  error: string | null;
  setData: (newData: Link[]) => void;
}

const useStore = create<Store>((set) => ({
  data: initialData,
  loading: false,
  error: null,

  setData: (newData) => {
    set({ loading: true, error: null }); // Start loading

    try {
      if (!Array.isArray(newData)) {
        throw new Error("Invalid data format: Expected an array.");
      }

      newData.forEach((item) => {
        if (!item.id || !item.link || !item.name) {
          throw new Error("Invalid data entry detected.");
        }
      });

      set({ data: newData, loading: false }); // Update store and stop loading
    } catch (error) {
      console.error("Error updating store:", error);
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default useStore;
