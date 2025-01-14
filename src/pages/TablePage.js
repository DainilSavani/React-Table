import React, { useEffect, useState } from "react";
import axios from "axios";
import _filter from 'lodash/filter';

// Components
import TableManager from "./components/TableManager";
import TableHeader from "./components/TableHeader";
import TableFooter from "./components/TableFooter";

// Hooks
import useTable from "./hooks/useTable";

// Constants
import COLUMNS from "./constants/columns";

const TablePage = () => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filters, setFilters] = useState({});
    const [sortDetails, setSortDetails] = useState({ key: 'id', order: 'asc' });
    const [columns, setColumns] = useState(COLUMNS);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users?limit=150`).then(res => res.data.users).then(users => {
            setUsers(users);
        }).catch(err => console.log(err));;
    }, []);

    const handleSort = columnId => {
        console.log()
        if (sortDetails.key === columnId) {
            setSortDetails({ key: columnId, order: sortDetails.order === 'asc' ? 'desc' : 'asc' });
        } else {
            setSortDetails({ key: columnId, order: 'asc' });
        }
    };

    const filteredData = _filter(users, item => (item.firstName.toLowerCase().includes(searchText.toLowerCase()) || item.lastName.toLowerCase().includes(searchText.toLowerCase())) && (item.gender === filters.gender || !filters.gender) && (!filters.age || filters.age === item.age));

    const { paginatedData, tableRange } = useTable({ data: filteredData, page, rowsPerPage: 40 });

    const sortedData = [...paginatedData].sort((a, b) => {
        if (a[sortDetails.key] < b[sortDetails.key]) {
            return sortDetails.order === 'asc' ? -1 : 1;
        }
        if (a[sortDetails.key] > b[sortDetails.key]) {
            return sortDetails.order === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div className="page">
            <TableHeader searchText={searchText} setSearchText={setSearchText} setFilters={setFilters} columns={columns} setColumns={setColumns} />
            <TableManager data={sortedData} sortDetails={sortDetails} handleSort={handleSort} columns={columns} />
            <TableFooter range={tableRange} slice={paginatedData} setPage={setPage} page={page} />
        </div>
    )
};

export default TablePage;
