"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export const useHydrated = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
