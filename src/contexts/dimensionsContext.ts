import { createContext } from 'react';
import type { Dimensions } from '../types';

const DimensionsContext = createContext<Dimensions>({ width: 0, height: 0 });

export const DimensionsProvider = DimensionsContext.Provider;

export default DimensionsContext;
