import React, {useMemo} from "react";
import {useTable} from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import {COLUMNS} from "./colums_name";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(({
    table: {
        width: '60%',
        border: 'none',
        margin:'0 auto',
        borderCollapse: 'separate'
    },
    headers: {
        fontWeight: 'bold',
        textAlign: 'left',
        border: 'none',
        padding: '10px 15px',
        background: '#EDEDED',
        fontSize: '14px',
        borderTop: '1px solid #ddd'
    },
    item: {
        textAlign: 'left',
        border: 'none',
        padding: '10px 15px',
        fontSize: '14px',
        verticalAlign: 'top'
    }

}))

export const Table = () => {
    const classes = useStyles()
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns, data
    })
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
    return (
        <table {...getTableProps()} className={classes.table}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            className={classes.headers}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    className={classes.item}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}