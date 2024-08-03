import {
    Controller,
    Body,
    Delete,
    Get,
    Post,
    Put,
    HttpException,
    HttpStatus,
    Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { error } from 'console';
import { create } from 'domain';

@Controller('api/books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('/test')
    test() {
        return this.bookService.test();
    }

    @Get('/')
    async findAll() {
        try {
            return this.bookService.findAll();
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No books found',
                },
                HttpStatus.NOT_FOUND,
                { cause: error },
            );
        }
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        try {
            return this.bookService.findOne(id);
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No books found',
                },
                HttpStatus.NOT_FOUND,
                { cause: error },
            );
        }
    }

    @Post('/')
    async addBook(@Body() createBookDto: CreateBookDto) {
        try {
            await this.bookService.create(createBookDto);
            return { message: 'Book added successfully' };
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Unable to add this book.',
                },
                HttpStatus.BAD_REQUEST,
                { cause: error },
            );
        }
    }

    @Put('/:id')
    async updateBook(
        @Param('id') id: string,
        @Body() createBookDto: CreateBookDto,
    ) {
        try {
            await this.bookService.update(id, createBookDto);
            return { message: 'Book updated successfully' };
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Unable to update this book.',
                },
                HttpStatus.BAD_REQUEST,
                { cause: error },
            );
        }
    }

    @Delete('/:id')
    async deleteBook(@Param('id') id: string) {
        try {
            await this.bookService.delete(id);
            return { message: 'Book updated successfully' };
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No such book',
                },
                HttpStatus.NOT_FOUND,
                { cause: error },
            );
        }
    }
}
