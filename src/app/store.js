import { configureStore } from "@reduxjs/toolkit";
import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import filterSlice from "../features/filter/filterSlice";
import langSlice from "../features/lang/langSlice";
import propertiesSlice from "../features/properties/propertiesSlice";
import datetofilterslice from "../features/datetofilter/datetofilterslice";
import pageSlice from "../features/page/pageSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    properties: propertiesSlice,
    filter: filterSlice,
    agent: agentSlice,
    lang: langSlice,
    datetofilter: datetofilterslice,
    page: pageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
