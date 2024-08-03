import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Backdrop, CircularProgress } from '@mui/material'
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ChevronDown, MoreHorizontal } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import { getAllJob } from 'src/redux/actions/jobAction'
import { AppDispatch, RootState } from 'src/redux/store'
import { prop } from 'src/types/AllTypes'
import { IListJob } from 'src/types/Job'

function CompanyJobListing() {

    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const jobState = useSelector((state: RootState) => state?.job)
    const dispatch: AppDispatch = useDispatch()

    function handleRemove(id: string) {

    }
    useEffect(() => {
        dispatch(getAllJob()).unwrap()
    }, [])

    const columns: ColumnDef<IListJob>[] = [
        {
            id: 'jobTitle',
            accessorKey: 'jobTitle',
            header: () => <div>Role</div>,
            cell: ({ row }) => {
                return <div className='text-left capitalize'> {row?.original?.jobTitle}  </div>
            }
        },
        {
            id: 'status',
            accessorKey: 'expiry',
            header: () => <div className="text-left">status</div>,
            cell: ({ row }) => {
                let date = new Date(row.original.expiry)
                let now = new Date()
                let status = date > now ? true : false;
                return <span className={`border border-solid px-2 py-1 rounded-full ${status ? 'border-green-600 text-green-600' : 'border-red-600 text-red-600'}`}>{status ? 'Live' : 'Closed'}</span>
            }
        },
        {
            id: 'expriry',
            accessorKey: `expiry`,
            header: () => <div className="text-left">due date</div>,
            cell: ({ row }) => {
                const givenDate = new Date(row.original.expiry);
                const formattedDate = format(givenDate, 'dd-MMM-yy');
                return <div>{formattedDate}</div>
            }
        },
        {
            id: 'createdAt',
            accessorKey: `createdAt`,
            header: () => <div className="text-left">Date posted</div>,
            cell: ({ row }) => {
                const givenDate = new Date(row.original.createdAt);
                const formattedDate = format(givenDate, 'dd-MMM-yy');
                return <div>{formattedDate}</div>
            }
        },
        {
            id: 'name',
            accessorKey: `category`,
            header: () => <div className="text-left">category</div>,
            cell: ({ row }) => {
                return <div className='capitalize'>{row.original?.category?.name}</div>
            }
        },
        {
            id: 'status',
            accessorKey: 'employment',
            header: () => <div className="text-left">job type</div>,
            cell: ({ row }) => {
                return <span className='border border-solid text-indigo-600 border-indigo-600 px-2 py-1 rounded-full capitalize'>{row.original.employment?.name}</span>
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
                                row.original.status ? (
                                    <DropdownMenuItem
                                        className='
                                      border
                                      font-bold
                                      bg-indigo-600
                                      text-white
                                      '
                                        onClick={() => handleRemove(row.original._id)}
                                    >
                                        undo
                                    </DropdownMenuItem>
                                ) : (
                                    <DropdownMenuItem
                                        className='
                                      border
                                      font-bold
                                      bg-red-600
                                      '
                                        onClick={() => handleRemove(row.original._id)}
                                    >
                                        remove
                                    </DropdownMenuItem>

                                )
                            }

                            <DropdownMenuItem
                                className='
                                      border
                                      font-bold
                                      '
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    const table = useReactTable({
        data: jobState?.jobs,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className={`flex flex-col ml-1 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0  py-5 max-md:w-full text-zinc-800 `}>
            <div className="w-full">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter emails..."
                        value={(table.getColumn("jobTitle")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("jobTitle")?.setFilterValue(event.target.value)
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
            <Backdrop
                open={false}
                sx={{ color: 'white', backgroundColor: 'rgba( 9,9,9,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default CompanyJobListing