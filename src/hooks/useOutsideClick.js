import { useEffect, useRef } from "react";

export const useOuterClick = (
  callback,
  eventType,
) => {
  const innerRef = useRef(null);
  const callbackRef = useRef();

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    // FIXME: le click outside ne fonctionne plus
    // console.log("innerRef.current : ", innerRef.current);
    
    if (innerRef.current && typeof innerRef.current.closest === 'function') {
      // Target closest portal if there is one, otherwise the event handler is ignored in portals
      const rootEl = innerRef.current.closest(".portal") || document;
      
      rootEl.addEventListener(
        eventType || "mousedown",
        handleClick,
      );

      return () =>
        rootEl.removeEventListener(
          eventType || "mousedown",
          handleClick,
        );
    } /* else {
      console.error("innerRef.current n'est pas un élément DOM valide ou la méthode .closest() n'est pas disponible");
    } */

    // read most recent callback and innerRef dom node from refs
    function handleClick(e) {
      if (
        e?.target &&
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, [eventType]); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
};
