import {
  closest,
  getAttribute,
  getDocument,
  querySelector,
} from "@thednp/shorty";

import dataBsTarget from "../strings/dataBsTarget";
import dataBsParent from "../strings/dataBsParent";
import dataBsContainer from "../strings/dataBsContainer";

/**
 * Returns the `Element` that THIS one targets
 * via `data-bs-target`, `href`, `data-bs-parent` or `data-bs-container`.
 *
 * @param element the target element
 * @returns the query result
 */
const getTargetElement = <T extends Element = HTMLElement>(element: T) => {
  const targetAttr = [dataBsTarget, dataBsParent, dataBsContainer, "href"];
  const doc = getDocument(element);

  return targetAttr
    .map((att) => {
      const attValue = getAttribute(element, att);
      if (attValue) {
        return att === dataBsParent
          ? closest<T>(element, attValue)
          : querySelector<T>(attValue, doc);
      }
      return null;
    })
    .filter((x) => x)[0];
};

export default getTargetElement;
