import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, Backdrop, CircularProgress } from "@mui/material";
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { RootState } from "src/redux/store";
import { prop } from "src/types/AllTypes";
import { applicants, } from "src/types/Job";

function ApplicantsOfJob() {

  const context = useOutletContext<prop>() || {};
  const { open } = context;
  const jobState = useSelector((state: RootState) => state.job)
  const navigate = useNavigate()

  const columns: ColumnDef<applicants>[] = [
    {
      id: 'image',
      accessorKey: 'user?.coverImage',
      header: () => <div>Image</div>,
      cell: ({ row }) => {
        return <div className='text-left w-16 h-16'>
          {
            row?.original?.user?.coverImage ? (
              <img className='rounded-full bg-transparent' src={row?.original?.user?.coverImage} />
            ) : (
              <Avatar sx={{ width: 60, height: 60 }}> {row.original?.user?.name?.charAt(0)} </Avatar>
            )
          }
        </div>
      }
    },
    {
      id: 'name',
      accessorKey: 'user?.name',
      header: () => <div>Name</div>,
      cell: ({ row }) => {
        return <div className='text-left capitalize'>
          {row?.original?.user?.name}
        </div>
      }
    },
    {
      id: 'status',
      accessorKey: 'hiring_status',
      header: () => <div className="text-left">hiring stage</div>,
      cell: ({ row }) => {
        return <span className={`border border-solid px-2 py-1 rounded-full`}>{row.original.hiring_status}</span>
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
      id: "actions",
      header: 'Actions',
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <Link to={`/company/applicants/${row.original.user?._id}`}>
            <Button
              className='rounded-none hover:bg-white bg-gray-50 font-bold text-indigo-600 border-2 border-indigo-600'>
              See application
            </Button>
          </Link>
        )
      },
    },
  ]

  const table = useReactTable({
    data: jobState?.job?.jobs?.applicants || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  function handleNavigation () {
    return navigate(-1)
  }

  return (
    <div className={`flex flex-col ml-1 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0  py-5 max-md:w-full text-zinc-800 `}>
      <div className="w-full">
        <div>
          <div className="flex gap-4 items-center">
            <ArrowLeft onClick={() => handleNavigation()} />
            <div className="text-2xl capitalize">
              <h3 className="font-bold">
                {jobState?.job?.job?.jobTitle}
              </h3>
              <p className="text-xl font-sans"> {jobState?.job?.job?.employmentDetails?.name} </p>
            </div>
          </div>
        </div>
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
                table.getRowModel().rows
                  .length > 0 ? (
                  table.getRowModel().rows
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

export default ApplicantsOfJob