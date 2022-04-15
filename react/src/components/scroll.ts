type Listener = (to: string) => void;

let listeningRoutesFuncs: Listener[] = [];

export const addListener = (listener: Listener) =>
  listeningRoutesFuncs.push(listener);

export const removeListener = (listener: Listener) => {
  listeningRoutesFuncs = listeningRoutesFuncs.filter((f) => f !== listener);
};

/**
 * Looks for the first path including `to`
 * and scrolls to it.
 * @param to path
 */
const scroll = (to: string) => {
  listeningRoutesFuncs.forEach((f) => f(to));
};

export default scroll;
