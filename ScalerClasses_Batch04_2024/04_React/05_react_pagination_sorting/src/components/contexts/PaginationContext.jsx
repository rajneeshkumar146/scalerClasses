import React from 'react'
import { useState } from 'react'

export default function PaginationProvider() {
    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);

    const pageProps = {
        pageSize, pageNum, setPageSize, setPageNum
    }
}

export const usePaginationContext = () => {
    console.log("PaginationContext");
}
