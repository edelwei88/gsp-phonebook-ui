import {
    Pagination as PaginationRoot,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface PaginationProps {
    currentPage: number;
    maxPage: number;
    className?: string;
    pageClickHandler(page: number): void;
}

function generatePages(currentPage: number, maxPage: number): number[] {
    const pages: number[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(maxPage, currentPage + 2);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
}

export function Pagination(props: PaginationProps) {
    return (
        <PaginationRoot className={props.className}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => {
                            props.pageClickHandler(props.currentPage - 1);
                        }}
                        isActive={props.currentPage > 1 ? true : false}
                        className={
                            props.currentPage === 1
                                ? 'pointer-events-none opacity-50'
                                : ''
                        }
                    />
                </PaginationItem>

                {generatePages(props.currentPage, props.maxPage).map((item) => (
                    <PaginationItem key={item}>
                        <PaginationLink
                            onClick={() => {
                                props.pageClickHandler(item);
                            }}
                            className={
                                props.currentPage == item ? 'font-bold' : ''
                            }
                        >
                            {item}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        onClick={() => {
                            props.pageClickHandler(props.currentPage + 1);
                        }}
                        isActive={
                            props.currentPage === props.maxPage ? false : true
                        }
                        className={
                            props.currentPage === props.maxPage
                                ? 'pointer-events-none opacity-50'
                                : ''
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </PaginationRoot>
    );
}
