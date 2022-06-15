import { SerializedError } from '@reduxjs/toolkit';

interface ResponseError extends Error {
	status?: number;
	code?: string;
}

interface ResponseErrorSerialized extends SerializedError {
	status?: number;
}

export type ErrorType = ResponseError | ResponseErrorSerialized | undefined;
