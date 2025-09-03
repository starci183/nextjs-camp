import React from "react"
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Spinner,
    getKeyValue,
} from "@heroui/react"
import useSWR from "swr"
import axios from "axios"

export function Chidren3() {
    const [page, setPage] = React.useState(1)

    const {data, isLoading} = 
    useSWR(
        // tham so dau tien la key
        // neu key ma thay doi, thi cac em goi api/ dependencies hook
        // neu key da trung trong qua khu, thi em se goi gia tri trong qua khu 
        // thay vi fetch lai
        ["PAGINATION", page]   
        , 
        // 1 cai ham, nhan key la tham so, 
        // fetch api tra ve data
        async ([_, page]) => {
            const response = await axios.get(`https://swapi.py4e.com/api/people?page=${page}`)
            return response.data
        }, 
        // config
        {
            keepPreviousData: true,
            revalidateIfStale: true,
            revalidateOnMount: true,
            revalidateOnReconnect: true,
            revalidateOnFocus: true,
        })

    const rowsPerPage = 10

    const pages = React.useMemo(() => {
        return data?.count ? Math.ceil(data.count / rowsPerPage) : 0
    }, [data?.count, rowsPerPage])

    const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle"

    return (
        <Table
            aria-label="Example table with client async pagination"
            bottomContent={
                pages > 0 ? (
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="primary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                ) : null
            }
        >
            <TableHeader>
                <TableColumn key="name">Name</TableColumn>
                <TableColumn key="height">Height</TableColumn>
                <TableColumn key="mass">Mass</TableColumn>
                <TableColumn key="birth_year">Birth year</TableColumn>
            </TableHeader>
            <TableBody
                items={data?.results ?? []}
                loadingContent={<Spinner />}
                loadingState={loadingState}
            >
                {(item) => (
                    <TableRow key={item?.name}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
