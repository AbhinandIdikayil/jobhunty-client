import { AppDispatch } from './store';

let globalDispatch: AppDispatch | null = null;

export const setGlobalDispatch = (dispatch: AppDispatch) => {
  globalDispatch = dispatch;
};

export const getGlobalDispatch = () => globalDispatch;