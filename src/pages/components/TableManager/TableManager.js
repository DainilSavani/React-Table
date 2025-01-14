import React from "react";
import _map from 'lodash/map';

// Styles
import './tableManager.scss';

const TableManager = ({ data, sortDetails, handleSort, columns }) => {
    return (
    <div>
        <table border="1">
            <thead>
                <tr>
                {_map(columns, column => column.visible ? <th onClick={() => handleSort(column.id)}>{column.header} {sortDetails.key === column.id && (sortDetails.order === 'asc' ? '↑' : '↓')}</th> : null)}
                </tr>
            </thead>
            <tbody>
                {_map(data, row => (
                    <tr key={row.id}>
                        {_map(columns, column => column.visible ? <td>{column.acessor(row)}</td> : null)}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
};

export default TableManager;
