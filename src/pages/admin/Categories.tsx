import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { ChevronDown, MoreHorizontal } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import { listCategory } from 'src/redux/actions/adminAction'
import { AppDispatch, RootState } from 'src/redux/store'
import { ICategories } from 'src/types/Admin'
import { prop } from 'src/types/AllTypes'





function Categories() {

    const state = useSelector((state: RootState) => state?.admin)
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const dispatch: AppDispatch = useDispatch();

    const columns: ColumnDef<ICategories>[] = [
        {
            accessorKey: 'image',
            header: () => <div>Image</div>,
            cell: ({ row }) => {
                return <div className='w-16 h-16'> <img src={row.original.image} className='rounded-full' alt="" /> </div>
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
            id: 'description',
            accessorKey: 'description',
            header: () => <div className="text-left">Email</div>,
            cell: ({ row }) => {
                return <div>{row.original.description}</div>
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
                                      '
                                    // onClick={() => handleAcceptRequest(row.original.companyId._id)}
                                    >

                                    </DropdownMenuItem>
                                ) : (
                                    <DropdownMenuItem
                                        className='
                                      border
                                      font-bold
                                      bg-red-600
                                      '
                                    // onClick={() => handleAcceptRequest(row.original.companyId._id)}
                                    >
                                        remove
                                    </DropdownMenuItem>
                                )
                            }

                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    const table = useReactTable({
        data: state?.category ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                await dispatch(listCategory(undefined)).unwrap()
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategories()
    }, [])

    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>
            <div className="w-full">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter emails..."
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("email")?.setFilterValue(event.target.value)
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

export default Categories