import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Backdrop, CircularProgress } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { listSectors } from 'src/redux/actions/commonAction';
import { AppDispatch, RootState } from 'src/redux/store';
import { prop } from 'src/types/AllTypes';
import { ISectors } from 'src/types/category';

function ListSector() {

    const navigate = useNavigate();
    const state = useSelector((state:RootState) => state?.category)
    const dispatch:AppDispatch = useDispatch()
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const [loading,setLoading] = useState<boolean>(false);



    const fetchSectors = async () => {
        setLoading(true)
        try {
            let data = await dispatch(listSectors()).unwrap()
            if (data || !data) {
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }


    const columns: ColumnDef<ISectors>[] = [
        {
            accessorKey: 'image',
            header: () => <div>Image</div>,
            cell: ({ row }) => {
                return <div className='w-16 h-16'> <img src={row.original.image} className='rounded-full bg-transparent' alt="" /> </div>
            }
        },
        {
            id: 'name',
            accessorKey: 'name',
            header: () => <div className="text-left">Name</div>,
            cell: ({ row }) => {
                return <div>{row.original.name}</div>
            }
        },
        {
            id: 'status',
            accessorKey: 'status',
            header: () => <div className="text-left">deleted</div>,
            cell: ({ row }) => {
                return <div>{row.original.status ? "true" : "false"}</div>
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
                                        // onClick={() => handleRemove(row.original._id)}
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
                                        // onClick={() => handleRemove(row.original._id)}
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
                                onClick={() => navigate(
                                    '/admin/home/update',
                                    {
                                        state: {
                                            _id: row.original._id,
                                            name: row.original.name,
                                            image: row.original.image,
                                        }
                                    }
                                )}
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

    useEffect(() => {
        fetchSectors();
    },[])
   

    const table = useReactTable({
        data: state?.sectors ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0 sm:px-10 py-5 max-md:w-full text-zinc-800 `}>
            <div className="w-full">
                <Link className='bg-indigo-600 p-2 rounded text-white font-bold' to={'/admin/home/add-sector'}>add sectors</Link>
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
            <Backdrop
                open={loading}
                sx={{ color: 'white', backgroundColor: 'rgba( 9,9,9,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default ListSector