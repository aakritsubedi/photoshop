import React from "react";

import SidebarItem from "components/SidebarItems";

function Sidebar({ options, selectedOptionIndex, handleClick }) {
  return (
    <div className="sidebar">
      {options.map((option, index) => {
        return <SidebarItem key={index} name={option.name} active={index === selectedOptionIndex} handleClick={handleClick} index={index} />;
      })}
    </div>
  );
}

export default Sidebar;
