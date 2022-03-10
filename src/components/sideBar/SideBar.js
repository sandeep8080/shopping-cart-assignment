import React from 'react';
import './SideBar.css';
const SideBar = ({ sideBarData, handleClickProduct }) => {
  return (
    <aside className='sideBar-container'>
      {(sideBarData || []).map(({ id, name }) =>
        <div
          key={id}
          className='sideBar-items'
          onClick={() => handleClickProduct(id)}
        >{name}
        </div>
      )}
    </aside>
  )
};

export default React.memo(SideBar);