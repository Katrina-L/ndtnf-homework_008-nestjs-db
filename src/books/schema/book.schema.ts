/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop( {required: true} )
    title: string;

    @Prop()
    description: string;

    @Prop( {required: true} )
    author: string;

    @Prop()
    favorite: boolean;

    @Prop()
    fileCover: string;

    @Prop()
    fileName: string;
};

export const BookSchema = SchemaFactory.createForClass(Book);