import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { Company } from 'src/types/Company'

function AllCompanies() {


    const columns: ColumnDef<Company>[] = [
        {
            accessorKey:'name'
        },
        {
            accessorKey:'email'
        },
        {
            accessorKey:'foundedDate'
        },
        {
            accessorKey:'employees'
        }
    ]

    return (
        <div>AllCompanies</div>
    )
}

export default AllCompanies