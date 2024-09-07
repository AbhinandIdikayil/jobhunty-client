
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom';
import { listRequest, updateApproval } from 'src/redux/actions/adminAction';
import { AppDispatch, RootState } from 'src/redux/store'
import { prop } from 'src/types/AllTypes';
import {
    ColumnDef, createColumnHelper,
    flexRender,
    getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable
} from '@tanstack/react-table'
import { CompanyRequest } from 'src/types/Admin';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

function Requests() {
    const { open } = useOutletContext<prop>()

    const state = useSelector((state: RootState) => state?.admin);
    const dispatch: AppDispatch = useDispatch()


    useEffect(() => {
        dispatch(listRequest(undefined)).unwrap()
    }, [])


    async function handleAcceptRequest(id: string) {
        const req = {
            id,
            status: 'Accepted'
        }
        await dispatch(updateApproval(req)).unwrap()
        await dispatch(listRequest(undefined)).unwrap()
    }
    async function handleRejectRequest(id: string) {
        const req = {
            id,
            status: 'Rejected'
        }
        await dispatch(updateApproval(req)).unwrap()
        await dispatch(listRequest(undefined)).unwrap()
    }

    const columns: ColumnDef<CompanyRequest>[] = [
        {
            id:'name',
            accessorKey: 'companyId.name',
            header: () => <div className="text-left">Name</div>,
            cell: ({ row }) => {
                return <div>{row.original.companyId.name}</div>
            }
        },
        {
            id:'email',
            accessorKey: 'companyId.email',
            header: () => <div className="text-left">Email</div>,
            cell: ({ row }) => {
                return <div>{row.original.companyId.email}</div>
            }
        },
        {
            accessorKey: 'companyId.approvalStatus',
            header: () => <div>Status</div>,
            cell: ({ row }) => {
                return <div>{row.original.companyId.approvalStatus}</div>
            }
        },
        {
            id: "actions",
            header: 'Actions',
            enableHiding: false,
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            {
                                row.original.companyId.approvalStatus == 'Rejected'
                                    && (
                                        <DropdownMenuItem
                                            className='
                                        border
                                        font-bold
                                        '
                                            onClick={() => handleAcceptRequest(row.original.companyId._id)}
                                        >
                                            Accept request
                                        </DropdownMenuItem>
                                    ) 
                            }

                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='font-bold bg-[#011aff] text-white'>Message and block</DropdownMenuItem>
                            <DropdownMenuItem>View company details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]


    const table = useReactTable({
        data: state?.request ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })

    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>
            <div className="w-full">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter emails..."
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="rounded-md border" >
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Requests