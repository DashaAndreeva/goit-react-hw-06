import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialContact = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};
