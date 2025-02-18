// AUTO-GENERATED by typescript-type-def

export type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | {
      [key: string]: JSONValue;
    };
export type Params = JSONValue[] | Record<string, JSONValue>;
export type U32 = number;

/**
 * Request identifier as found in Request and Response objects.
 */
export type Id = U32 | string;

/**
 * Request object.
 */
export type Request = {
  /**
   * JSON-RPC protocol version.
   */
  jsonrpc?: "2.0";

  /**
   * Name of the method to be invoked.
   */
  method: string;

  /**
   * Method parameters.
   */
  params?: Params;

  /**
   * Request identifier.
   */
  id?: Id;
};
export type I32 = number;

/**
 * Error object returned in response to a failed RPC call.
 */
export type Error = {
  /**
   * Error code indicating the error type.
   */
  code: I32;

  /**
   * Short error description.
   */
  message: string;

  /**
   * Additional information about the error.
   */
  data?: JSONValue;
};

/**
 * Response object.
 */
export type Response = {
  /**
   * JSON-RPC protocol version.
   */
  jsonrpc: "2.0";

  /**
   * Request identifier.
   */
  id: Id | null;

  /**
   * Return value of the method.
   */
  result?: JSONValue;

  /**
   * Error occured during the method invocation.
   */
  error?: Error;
};
export type Message = Request | Response;
