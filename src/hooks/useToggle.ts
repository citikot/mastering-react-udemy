import { useReducer } from 'react';

export type ToggleReducer = (state: boolean) => boolean;

export function useToggle(initialValue: boolean) {
    return useReducer((state) => !state, initialValue || false);
}
