import { AxiosResponse } from 'axios';
import { Farm } from '../../types';
import { FarmResponse } from './adapters';

export const getFarmsFromFarmsResponse = ({ data: { items } }: AxiosResponse<FarmResponse>): Array<Farm> => items;
