import { useEffect } from "react";
import vanshawaliData from "../../data/vanshawali.json";
import VanshawaliType from "../../shared/types/vanshawali";
import vanshawaliStyles from "./Vanshawali.module.css";

const data: VanshawaliType = vanshawaliData;

const makeNodeContainer = () => {
  let ul = document.createElement("ul");
  return ul;
};

const makeNode = (name: string) => {
  const li = document.createElement("li");
  li.setAttribute("id", name);
  const text = document.createTextNode(name);
  const a = document.createElement("a");
  a.appendChild(text);
  a.className = "collapsible";
  a.setAttribute("href", "javascript:void();");
  li.appendChild(a);
  return li;
};

const makeNodes = (nodes: VanshawaliType[], parentNodeId: string) => {
  nodes.forEach(node => {
    let li = makeNode(node.name);
    parentNodeId = parentNodeId || "main";
    if (document.getElementById(parentNodeId)?.firstElementChild) {
      if (!document.getElementById(parentNodeId)?.childNodes[1]) {
        let ul = makeNodeContainer();
        document.getElementById(parentNodeId)?.appendChild(ul);
      }
      const nodes = document.getElementById(parentNodeId)?.childNodes;
      if (nodes!?.length > 1) {
        document.getElementById(parentNodeId)?.childNodes[1]?.appendChild(li);
      } else {
        document.getElementById(parentNodeId)?.childNodes[0]?.appendChild(li);
      }
    } else {
      let ul = makeNodeContainer();
      ul.appendChild(li);
      document.getElementById(parentNodeId)?.appendChild(ul);
    }

    if (node.children?.length) {
      node.children.forEach((child: VanshawaliType) => {
        makeNodes([child], node.name);
      });
    }
  });
};

const init = () => {
  let collapsible_elements = document.getElementsByClassName("collapsible"); //selects all the HTML Elements having class 'collapsible'
  for (let elem of collapsible_elements) {
    // for loop for going through every collapsible html elements
    if (elem.nextElementSibling != null) {
      // check if the elements have any sibling elements
      let content = elem.nextElementSibling;
      content.classList.add(vanshawaliStyles.hide); // hides the siblings elements
    }
  }

  for (let elem of collapsible_elements) {
    // for loop for going through every collapsible elements
    if (elem.nextElementSibling != null) {
      // We are taking just those elements which have a child, so we won't be doing anything with the leaf(end) nodes.
      elem.classList.add(vanshawaliStyles['bg-orange']); // Change the background color of those elements which have a sibling to see which elements are expandable/collapsable
      elem.addEventListener("click", function() {
        // adding a click event listener to every nodes except the leaf nodes. (nodes and elements are the same thing)
        elem.classList.toggle('active');
        let content = elem.nextElementSibling;
        content?.classList.toggle(vanshawaliStyles.hide);
      });
    }
  }
};

const VanshawaliComponent: React.FC = () => {
  useEffect(() => {
    makeNodes([data], "main");
    init();
  });
  return (
    <>
      <div className={vanshawaliStyles.box}>
        <div className={vanshawaliStyles.tree} id="main"></div>
      </div>
    </>
  );
};

export default VanshawaliComponent;
