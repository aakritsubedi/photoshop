import React from "react";

function SidebarItems({ name, active, handleClick, index }) {
  return (
    <button className={`sidebar-items ${active ? "active" : ""}`} onClick={() => handleClick(index)}>
      {name}
    </button>
  );
}

export default SidebarItems;
