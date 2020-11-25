export class CustomError extends Error {
   constructor(
      public statusCode: number,
      message: string
   ) {
      super(message);
   }
}

export class UnauthorizedError extends Error {
   public statusCode: number = 401
   constructor(
      message: string
   ) {
      super(message);
   }
}

export class NotFoundError extends Error {
   public statusCode: number = 404
   constructor(
      message: string
   ) {
      super(message);
   }
}
