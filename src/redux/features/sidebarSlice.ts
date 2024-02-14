import { createSlice } from "@reduxjs/toolkit";

interface SidebarContextType {
  isOpen: boolean;
  isScroll: boolean;
}

const initialState: SidebarContextType = {
  isOpen: true,
  isScroll: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setNavbarScroll: (state, action) => {
        state.isScroll = action.payload;
    },
    switchSidebar: (state) => {
        state.isOpen = !state.isOpen
    }
  },
});

export const {setNavbarScroll, switchSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;
