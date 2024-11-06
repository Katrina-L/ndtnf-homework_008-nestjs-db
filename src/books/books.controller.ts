/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Put, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './schema/book.schema';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    create(@Body() book: Book): Promise<Book> {
        return this.booksService.create(book);
    }

    @Get()
    findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() book: Book): Promise<Book> {
        return this.booksService.update(id, book);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.booksService.delete(id);
    }
}
