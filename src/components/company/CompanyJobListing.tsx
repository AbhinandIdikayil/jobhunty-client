import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Backdrop, CircularProgress } from '@mui/material'
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ChevronDown, ChevronLeftIcon, ChevronRightIcon, MoreHorizontal } from 'lucide-react'
import { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { UseDebounce } from 'src/hooks/Debounce'
import { getAllJob, removeJob } from 'src/redux/actions/jobAction'
import { setJobById } from 'src/redux/reducers/jobSlice'
import { AppDispatch, RootState } from 'src/redux/store'
import { prop } from 'src/types/AllTypes'
import { getAllJobsEntity } from 'src/types/Job'

function CompanyJobListing() {

    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const jobState = useSelector((state: RootState) => state?.job)
    const userState = useSelector((state: RootState) => state?.user)
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [searchQuery,setSearchquery] = useState<string | null>(null)
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const debounceSearchQuery = UseDebounce(searchQuery,500)

    function handleRemove(id: string) {
        try {
            dispatch(removeJob(id)).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    function handleEdit(id: string) {
        dispatch(setJobById(id))
        navigate(`/company/job-list/${id}`)
    }
    const fetchData = async (page: number, pageSize: number, name?: string, category?: string, employment?: string) => {
        try {
            setLoading(true)
            await dispatch(getAllJob(
                {
                    _id: userState?.user?._id,
                    page,
                    pageSize,
                    name,
                    employment,
                    category
                }
            )).unwrap()

            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }




    function handleNavigation(id: string) {
        dispatch(setJobById(id))
        navigate('applicants/' + id)
    }

    const columns: ColumnDef<getAllJobsEntity>[] = [
        {
            id: 'jobTitle',
            accessorKey: 'job?.jobTitle',
            header: () => <div>Role</div>,
            cell: ({ row }) => {
                return <div className='text-left capitalize'> {row?.original?.job?.jobTitle}  </div>
            }
        },
        {
            id: 'statusExpiry',
            accessorKey: 'job?.expiry',
            header: () => <div className="text-left">status</div>,
            cell: ({ row }) => {
                let date = new Date(String(row?.original?.job?.expiry));
                let now = new Date();
                let data = date > now ? true : false;
                return (
                    <span className={`border border-solid px-2 py-1 rounded-full ${data ? 'border-green-600 text-green-600' : 'border-red-600 text-red-600'}`}>
                        {data ? 'Live' : 'Closed'}
                    </span>
                );
            }
        },
        {
            id: 'expiryDate',
            accessorKey: `job?.expiry`,
            header: () => <div className="text-left">Due Date</div>,
            cell: ({ row }) => {
                const givenDate = new Date(String(row?.original?.job?.expiry));
                if (isNaN(givenDate.getTime())) {
                    return <div>Invalid Date</div>;
                }
                const formattedDate = format(givenDate, 'dd-MMM-yy');
                return <div>{formattedDate ?? ''}</div>;
            }
        },
        {
            id: 'createdAt',
            accessorKey: `createdAt`,
            header: () => <div className="text-left">Date Posted</div>,
            cell: ({ row }) => {
                const givenDate = new Date(String(row.original?.job?.createdAt));
                if (isNaN(givenDate.getTime())) {
                    return <div>Invalid Date</div>;
                }
                const formattedDate = format(givenDate, 'dd-MMM-yy');
                return <div>{formattedDate || ''}</div>;
            }
        },
        {
            id: 'category',
            accessorKey: `job?.category`,
            header: () => <div className="text-left">Category</div>,
            cell: ({ row }) => {
                return <div className='capitalize'>{row.original?.job?.categoryDetails?.name}</div>;
            }
        },
        {
            id: 'employment',
            accessorKey: 'job?.employment',
            header: () => <div className="text-left">Job Type</div>,
            cell: ({ row }) => {
                return <span className='border border-solid text-indigo-600 border-indigo-600 px-2 py-1 rounded-full capitalize'>{row.original?.job?.employmentDetails?.name}</span>;
            }
        },
        {
            id: 'applicantCount',
            accessorKey: 'applicantCount',
            header: () => <div className="text-left">Applicants</div>,
            cell: ({ row }) => {
                return <span className='border border-solid text-indigo-600 border-indigo-600 px-2 py-1 rounded-full capitalize'>{row.original?.applicantCount}</span>;
            }
        },
        {
            id: 'actions',
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
                            <DropdownMenuItem
                                className='border font-bold bg-red-600 text-white'
                                onClick={() => handleRemove(row.original?._id)}
                            >
                                Remove
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className='border font-bold'
                                onClick={() => handleEdit(row.original?._id)}
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className='border font-bold'
                                onClick={() => handleNavigation(row.original?._id)}
                            >
                                Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    const table = useReactTable({
        data: jobState?.jobs?.jobs || [],
        columns,
        pageCount: Math.ceil((jobState?.jobs?.totalCount?.[0]?.count || 5) / pagination.pageSize),
        state: {
            pagination
        },
        onPaginationChange: setPagination,
        manualPagination: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });
    
    useEffect(() => {
        setLoading(true)
        fetchData(pagination.pageIndex + 1, pagination.pageSize,debounceSearchQuery);
        console.log(jobState?.jobs?.jobs)
    }, [pagination.pageIndex, pagination.pageSize,debounceSearchQuery]);

    if (loading) {
        return (
            <Backdrop
                open={loading}
                sx={{ color: 'white', backgroundColor: 'rgba( 9,9,9,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }

    return (
        <div className={`flex flex-col ml-1 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0  py-5 max-md:w-full text-zinc-800 `}>
            <div className="w-full">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Search jobs..."
                        value={searchQuery}
                        onChange={(e) => setSearchquery(e.target.value)}
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
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows
                                    // .filter(row => row.original?.job?.status === false)
                                    .length > 0 ? (
                                    table.getRowModel().rows
                                        .map((row, rowIndex) => (
                                            <TableRow
                                                key={`row-${row.id}-${rowIndex}`} // Ensure unique key for each row
                                            >
                                                {
                                                    console.log(row.original),
                                                row.getVisibleCells().map((cell, cellIndex) => (
                                                    <TableCell key={`cell-${cell.id}-${cellIndex}`}> {/* Ensure unique key for each cell */}
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
                                            colSpan={columns?.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns?.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                console.log('hiii')
                                table.previousPage()
                            }}
                            disabled={!table.getCanPreviousPage()}
                            className='border-solid border-slate-900'
                        >
                            Previous
                            <ChevronLeftIcon className="h-4 w-4" />
                        </Button>
                        <span>
                            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className='border-solid border-slate-900'
                        >
                            Next
                            <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default memo(CompanyJobListing)