import React from "react";
import _map from 'lodash/map';

// Styles
import './columnConfig.scss';

const onColumnChange = (columns, setColumns) => event => {
    const id = event.target.id;
    const updatedColumn = Object.assign({}, columns[id]);
    updatedColumn.visible = event.target.checked;
    const newColumns = columns.slice();
    newColumns[id] = updatedColumn;
    setColumns(newColumns);
}

const makeColumns = (columns, setColumns) => (column, index) => {
    return (
        <div className="columnItem">
            <input type="checkbox" id={index} checked={column.visible} onChange={onColumnChange(columns, setColumns)} />
            <p>{column.header}</p>
        </div>
    )
}

const ColumnConfig = ({ columnConfigVisible, columns, setColumns }) => {
    return  columnConfigVisible && (
        <div className="columnConfig">{_map(columns, makeColumns(columns, setColumns))}</div>
    );
};

export default ColumnConfig;

