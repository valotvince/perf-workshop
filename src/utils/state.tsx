import { createContext, useContext } from "react";

export type Selector<T = any> = (state: State) => T
export type Store = {
    getState: () => State,
}

const store = { getState: () => state };
let state = { imageOptions: {width: 400, height: 200 }};

export type State = typeof state;

const SharedStore = createContext<Store>(store);

export const SharedStoreProvider = ({children}: React.PropsWithChildren) => <SharedStore.Provider value={store}>{children}</SharedStore.Provider>;

export const useSelector = (callback: Selector) => callback(useContext(SharedStore).getState());
export const useStore = () => store;
