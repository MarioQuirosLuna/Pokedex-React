import React from 'react';

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return (
        <div className="pagination">
            <button className="pagination-btn" onClick={onLeftClick}>➖</button>
            <div>{page} to {totalPages}</div>
            <button className="pagination-btn" onClick={onRightClick}>➕</button>
        </div>
    );
}

export default Pagination;