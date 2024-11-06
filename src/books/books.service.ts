/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    ) {}

    create(book: Book): Promise<BookDocument> {
        const newBook = new this.bookModel(book);
        return newBook.save();
    }

    findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    update(id: string, book: Book): Promise<Book> {
        return this.bookModel.findOneAndUpdate(
            {_id: id}, 
            book
        );
    }

    delete(id: string): Promise<void> {
        return this.bookModel.findOneAndDelete({_id: id});
        
    }
}
