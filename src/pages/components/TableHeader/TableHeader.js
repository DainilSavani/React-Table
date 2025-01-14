import React, { useState } from "react";

// Components
import ColumnConfig from "../ColumnConfig";

// Styles
import './tableHeader.scss';

const onSearch = setSearchText => event => {
    setSearchText(event.target.value);
}

const onFilterChange = setFilters => event => {
    const filter = event.target.id;
    const value = event.target.value;
    if (filter === 'gender') {
        setFilters(prevFilters => ({...prevFilters, gender: value}));
    } else if (filter === 'age') {
        setFilters(prevFilters => ({...prevFilters, age: parseInt(value)}));
    }
}

const TableHeader = ({ searchText, setSearchText, setFilters, columns, setColumns }) => {
    const [columnConfigVisible, setColumnConfigVisible] = useState(false);

    return (
        <>
            <div className="header">
                <input className="search" type="text" placeholder="search" value={searchText} onChange={onSearch(setSearchText)} />
                <div className="filterSection">
                    <p>Gender:</p>
                    <select id='gender' placeholder='Select gender' onChange={onFilterChange(setFilters)}>
                        <option key='all' value=''>All</option>
                        <option key='male' value='male'>Male</option>
                        <option key='female' value='female'>Female</option>
                    </select>
                    <p>Age:</p>
                    <input id='age' type="number" min={0} max={100} onChange={onFilterChange(setFilters)} />
                </div>

                <button onClick={() => setColumnConfigVisible(!columnConfigVisible)}>Customise Columns</button>
            </div>
            <ColumnConfig columnConfigVisible={columnConfigVisible} columns={columns} setColumns={setColumns} />
        </>
    )
};

export default TableHeader;
