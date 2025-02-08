import { useState, useMemo } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Card,
    CardHeader,
    CardBody,
    Spinner,
    getKeyValue,
} from "@heroui/react";

const dummyData = {
    count: 10,
    results: [
        { address: "0xAbC123456789dEfG1234567890aBcDEF12345678", amount: 2500, percent: "25%" },
        { address: "0x1234AbCdEf567890ABCdEF1234567890abcdef12", amount: 1500, percent: "15%" },
        { address: "0xaBcDeF1234567890abcdef1234567890ABCDEF12", amount: 1200, percent: "12%" },
        { address: "0x9876543210abcdef1234567890ABCDEFabcdef12", amount: 1000, percent: "10%" },
        { address: "0x567890abcdef1234567890ABCDEFabcdef123456", amount: 900, percent: "9%" },
        { address: "0xABCDEF1234567890abcdef1234567890abcdef34", amount: 800, percent: "8%" },
        { address: "0xabcdef1234567890ABCDEFabcdef123456789012", amount: 700, percent: "7%" },
        { address: "0x34567890ABCDEFabcdef1234567890abcdef5678", amount: 600, percent: "6%" },
        { address: "0x1234567890abcdefABCDEFabcdef123456789045", amount: 500, percent: "5%" },
        { address: "0xabcdef1234567890ABCDEFabcdef123456789078", amount: 300, percent: "3%" },
    ],
};

export default function HoldersDetails() {
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    // Compute total pages
    const pages = Math.ceil(dummyData.count / rowsPerPage);

    // Paginate data
    const paginatedData = useMemo(() => {
        const startIndex = (page - 1) * rowsPerPage;
        return dummyData.results.slice(startIndex, startIndex + rowsPerPage);
    }, [page]);

    return (
        <Card className="flex-row justify-between w-full p-4 mt-6 border rounded-sm bg-grey-100 border-border/70">
            <div className="w-full">
                <CardHeader className="flex-col items-start">
                    <h2 className="font-bold">Funds Holders</h2>
                    <p className="text-sm text-gray-500">
                        Here's a breakdown of how many people and how much they have in this fund.
                    </p>
                </CardHeader>
                <CardBody className="">
                    <Table
                        removeWrapper
                        aria-label="Example table with client async pagination"
                        bottomContent={
                            pages > 1 && (
                                <div className="flex w-full justify-center">
                                    <Pagination
                                        isCompact
                                        showControls
                                        showShadow
                                        color="primary"
                                        page={page}
                                        total={pages}
                                        onChange={setPage}
                                    />
                                </div>
                            )
                        }
                    >
                        <TableHeader>
                            <TableColumn key="address">Address</TableColumn>
                            <TableColumn key="amount">Amount</TableColumn>
                            <TableColumn key="percent">% Holding</TableColumn>
                        </TableHeader>
                        <TableBody
                            items={paginatedData}
                            loadingContent={<Spinner />}
                            loadingState={paginatedData.length === 0 ? "loading" : "idle"}
                        >
                            {(item) => (
                                <TableRow key={item.address} className="hover:bg-grey-200">
                                    {(columnKey) => (
                                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                                    )}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardBody>
            </div>
        </Card>
    );
}
