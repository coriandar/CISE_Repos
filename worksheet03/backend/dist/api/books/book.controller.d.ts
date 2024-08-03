import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    test(): string;
    findAll(): Promise<import("./book.schema").Book[]>;
    findOne(id: string): Promise<import("./book.schema").Book>;
    addBook(createBookDto: CreateBookDto): Promise<{
        message: string;
    }>;
    updateBook(id: string, createBookDto: CreateBookDto): Promise<{
        message: string;
    }>;
    deleteBook(id: string): Promise<{
        message: string;
    }>;
}
