import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Backdrop, CircularProgress } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { listApplications } from 'src/redux/actions/jobAction';
import { AppDispatch, RootState } from 'src/redux/store';
import { prop } from 'src/types/AllTypes';
import { JobApplication } from 'src/types/applicationApplicants';

function Applications() {

    const state = useSelector((state: RootState) => state?.job)
    const dispatch:AppDispatch = useDispatch()
    const context = useOutletContext<prop>() || {};
    const { open } = context;

    const columns: ColumnDef<JobApplication>[] = [
        {
            id: 'image',
            accessorKey: 'companyId?.images',
            header: () => <div>Logo</div>,
            cell: ({ row }) => {
                return <div className='w-16 h-16'> <img src={row.original?.companyId?.images} className='rounded-full bg-transparent' alt="" /> </div>
            }
        },
        {
            id: 'name',
            accessorKey: 'companyId?.name',
            header: () => <div>Name</div>,
            cell: ({ row }) => {
                return <div className='text-left capitalize'> {row?.original?.companyId?.name}  </div>
            }
        },
        {
            id: 'status',
            accessorKey: 'hiring_status',
            header: () => <div className="text-left">hiring status</div>,
            cell: ({ row }) => {
                return (
                    <span
                        className={`
                            ${row.original.hiring_status === 'hired' ? 'border border-green-500 text-green-500': ''}
                            ${row.original.hiring_status === 'shortlisted' ? 'border border-orange-500 text-orange-500': ''}
                            ${row.original.hiring_status === 'in-review' ? 'border border-indigo-500 text-indigo-500': ''}
                            border border-solid px-2 py-1 rounded-full`}
                    >
                        {row.original.hiring_status}
                    </span>
                )
            }
        },
        {
            id: 'data',
            accessorKey: `createdAt`,
            header: () => <div className="text-left">applied date</div>,
            cell: ({ row }) => {
                const givenDate = new Date(row.original.createdAt);
                const formattedDate = format(givenDate, 'dd-MMM-yy');
                return <div>{formattedDate}</div>
            }
        },
        {
            id: 'role',
            accessorKey: 'jobId.jobTitle',
            header: () => <div>Role</div>,
            cell: ({ row }) => {
                return <div className='text-left capitalize'> {row?.original?.jobId?.jobTitle}  </div>
            }
        },
        {
            id: "actions",
            header: 'Actions',
            enableHiding: false,
            cell: () => {
                return (
                    <MoreHorizontal />
                )
            },
        },
    ]


    const table = useReactTable({
        data: state?.applications || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    useEffect(() => {
        dispatch(listApplications()).unwrap()
    }, [])

    return (
        <div className={`flex flex-col  ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0  max-md:w-full text-zinc-800 `}>
            <div className="w-full px-4">
                <div className="flex items-center py-2">
                    <Input
                        placeholder="Filter applications..."
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
                            {
                                table
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
                <div className="rounded-md border">
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
                                table.getRowModel().rows
                                    // .filter(row => row.original.status === false)
                                    .map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) =>
                                            (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            )
                                            )}
                                        </TableRow>
                                    )
                                    )

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

export default Applications