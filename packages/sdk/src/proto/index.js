/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
// custom esm wrapper
// https://github.com/protobufjs/protobuf.js/tree/master/cli/wrappers
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const prpc = $root.prpc = (() => {

    /**
     * Namespace prpc.
     * @exports prpc
     * @namespace
     */
    const prpc = {};

    prpc.PrpcError = (function() {

        /**
         * Properties of a PrpcError.
         * @memberof prpc
         * @interface IPrpcError
         * @property {string|null} [message] The error description
         */

        /**
         * Constructs a new PrpcError.
         * @memberof prpc
         * @classdesc The final Error type of RPCs to be serialized to protobuf.
         * @implements IPrpcError
         * @constructor
         * @param {prpc.IPrpcError=} [properties] Properties to set
         */
        function PrpcError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The error description
         * @member {string} message
         * @memberof prpc.PrpcError
         * @instance
         */
        PrpcError.prototype.message = "";

        /**
         * Creates a new PrpcError instance using the specified properties.
         * @function create
         * @memberof prpc.PrpcError
         * @static
         * @param {prpc.IPrpcError=} [properties] Properties to set
         * @returns {prpc.PrpcError} PrpcError instance
         */
        PrpcError.create = function create(properties) {
            return new PrpcError(properties);
        };

        /**
         * Encodes the specified PrpcError message. Does not implicitly {@link prpc.PrpcError.verify|verify} messages.
         * @function encode
         * @memberof prpc.PrpcError
         * @static
         * @param {prpc.IPrpcError} message PrpcError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrpcError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified PrpcError message, length delimited. Does not implicitly {@link prpc.PrpcError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prpc.PrpcError
         * @static
         * @param {prpc.IPrpcError} message PrpcError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrpcError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrpcError message from the specified reader or buffer.
         * @function decode
         * @memberof prpc.PrpcError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prpc.PrpcError} PrpcError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrpcError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prpc.PrpcError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrpcError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prpc.PrpcError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prpc.PrpcError} PrpcError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrpcError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrpcError message.
         * @function verify
         * @memberof prpc.PrpcError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrpcError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a PrpcError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prpc.PrpcError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prpc.PrpcError} PrpcError
         */
        PrpcError.fromObject = function fromObject(object) {
            if (object instanceof $root.prpc.PrpcError)
                return object;
            let message = new $root.prpc.PrpcError();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a PrpcError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prpc.PrpcError
         * @static
         * @param {prpc.PrpcError} message PrpcError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrpcError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this PrpcError to JSON.
         * @function toJSON
         * @memberof prpc.PrpcError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrpcError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrpcError;
    })();

    return prpc;
})();

export const pruntime_rpc = $root.pruntime_rpc = (() => {

    /**
     * Namespace pruntime_rpc.
     * @exports pruntime_rpc
     * @namespace
     */
    const pruntime_rpc = {};

    pruntime_rpc.PhactoryAPI = (function() {

        /**
         * Constructs a new PhactoryAPI service.
         * @memberof pruntime_rpc
         * @classdesc Represents a PhactoryAPI
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PhactoryAPI(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (PhactoryAPI.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PhactoryAPI;

        /**
         * Creates new PhactoryAPI service using the specified rpc implementation.
         * @function create
         * @memberof pruntime_rpc.PhactoryAPI
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PhactoryAPI} RPC service. Useful where requests and/or responses are streamed.
         */
        PhactoryAPI.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#getInfo}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef GetInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.PhactoryInfo} [response] PhactoryInfo
         */

        /**
         * Calls GetInfo.
         * @function getInfo
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {pruntime_rpc.PhactoryAPI.GetInfoCallback} callback Node-style callback called with the error, if any, and PhactoryInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.getInfo = function getInfo(request, callback) {
            return this.rpcCall(getInfo, $root.google.protobuf.Empty, $root.pruntime_rpc.PhactoryInfo, request, callback);
        }, "name", { value: "GetInfo" });

        /**
         * Calls GetInfo.
         * @function getInfo
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<pruntime_rpc.PhactoryInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#syncHeader}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef SyncHeaderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.SyncedTo} [response] SyncedTo
         */

        /**
         * Calls SyncHeader.
         * @function syncHeader
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IHeadersToSync} request HeadersToSync message or plain object
         * @param {pruntime_rpc.PhactoryAPI.SyncHeaderCallback} callback Node-style callback called with the error, if any, and SyncedTo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.syncHeader = function syncHeader(request, callback) {
            return this.rpcCall(syncHeader, $root.pruntime_rpc.HeadersToSync, $root.pruntime_rpc.SyncedTo, request, callback);
        }, "name", { value: "SyncHeader" });

        /**
         * Calls SyncHeader.
         * @function syncHeader
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IHeadersToSync} request HeadersToSync message or plain object
         * @returns {Promise<pruntime_rpc.SyncedTo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#syncParaHeader}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef SyncParaHeaderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.SyncedTo} [response] SyncedTo
         */

        /**
         * Calls SyncParaHeader.
         * @function syncParaHeader
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IParaHeadersToSync} request ParaHeadersToSync message or plain object
         * @param {pruntime_rpc.PhactoryAPI.SyncParaHeaderCallback} callback Node-style callback called with the error, if any, and SyncedTo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.syncParaHeader = function syncParaHeader(request, callback) {
            return this.rpcCall(syncParaHeader, $root.pruntime_rpc.ParaHeadersToSync, $root.pruntime_rpc.SyncedTo, request, callback);
        }, "name", { value: "SyncParaHeader" });

        /**
         * Calls SyncParaHeader.
         * @function syncParaHeader
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IParaHeadersToSync} request ParaHeadersToSync message or plain object
         * @returns {Promise<pruntime_rpc.SyncedTo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#syncCombinedHeaders}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef SyncCombinedHeadersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.HeadersSyncedTo} [response] HeadersSyncedTo
         */

        /**
         * Calls SyncCombinedHeaders.
         * @function syncCombinedHeaders
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.ICombinedHeadersToSync} request CombinedHeadersToSync message or plain object
         * @param {pruntime_rpc.PhactoryAPI.SyncCombinedHeadersCallback} callback Node-style callback called with the error, if any, and HeadersSyncedTo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.syncCombinedHeaders = function syncCombinedHeaders(request, callback) {
            return this.rpcCall(syncCombinedHeaders, $root.pruntime_rpc.CombinedHeadersToSync, $root.pruntime_rpc.HeadersSyncedTo, request, callback);
        }, "name", { value: "SyncCombinedHeaders" });

        /**
         * Calls SyncCombinedHeaders.
         * @function syncCombinedHeaders
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.ICombinedHeadersToSync} request CombinedHeadersToSync message or plain object
         * @returns {Promise<pruntime_rpc.HeadersSyncedTo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#dispatchBlocks}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef DispatchBlocksCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.SyncedTo} [response] SyncedTo
         */

        /**
         * Calls DispatchBlocks.
         * @function dispatchBlocks
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IBlocks} request Blocks message or plain object
         * @param {pruntime_rpc.PhactoryAPI.DispatchBlocksCallback} callback Node-style callback called with the error, if any, and SyncedTo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.dispatchBlocks = function dispatchBlocks(request, callback) {
            return this.rpcCall(dispatchBlocks, $root.pruntime_rpc.Blocks, $root.pruntime_rpc.SyncedTo, request, callback);
        }, "name", { value: "DispatchBlocks" });

        /**
         * Calls DispatchBlocks.
         * @function dispatchBlocks
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IBlocks} request Blocks message or plain object
         * @returns {Promise<pruntime_rpc.SyncedTo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#initRuntime}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef InitRuntimeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.InitRuntimeResponse} [response] InitRuntimeResponse
         */

        /**
         * Calls InitRuntime.
         * @function initRuntime
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IInitRuntimeRequest} request InitRuntimeRequest message or plain object
         * @param {pruntime_rpc.PhactoryAPI.InitRuntimeCallback} callback Node-style callback called with the error, if any, and InitRuntimeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.initRuntime = function initRuntime(request, callback) {
            return this.rpcCall(initRuntime, $root.pruntime_rpc.InitRuntimeRequest, $root.pruntime_rpc.InitRuntimeResponse, request, callback);
        }, "name", { value: "InitRuntime" });

        /**
         * Calls InitRuntime.
         * @function initRuntime
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IInitRuntimeRequest} request InitRuntimeRequest message or plain object
         * @returns {Promise<pruntime_rpc.InitRuntimeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#getRuntimeInfo}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef GetRuntimeInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.InitRuntimeResponse} [response] InitRuntimeResponse
         */

        /**
         * Calls GetRuntimeInfo.
         * @function getRuntimeInfo
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {pruntime_rpc.PhactoryAPI.GetRuntimeInfoCallback} callback Node-style callback called with the error, if any, and InitRuntimeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.getRuntimeInfo = function getRuntimeInfo(request, callback) {
            return this.rpcCall(getRuntimeInfo, $root.google.protobuf.Empty, $root.pruntime_rpc.InitRuntimeResponse, request, callback);
        }, "name", { value: "GetRuntimeInfo" });

        /**
         * Calls GetRuntimeInfo.
         * @function getRuntimeInfo
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<pruntime_rpc.InitRuntimeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#getEgressMessages}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef GetEgressMessagesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.GetEgressMessagesResponse} [response] GetEgressMessagesResponse
         */

        /**
         * Calls GetEgressMessages.
         * @function getEgressMessages
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {pruntime_rpc.PhactoryAPI.GetEgressMessagesCallback} callback Node-style callback called with the error, if any, and GetEgressMessagesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.getEgressMessages = function getEgressMessages(request, callback) {
            return this.rpcCall(getEgressMessages, $root.google.protobuf.Empty, $root.pruntime_rpc.GetEgressMessagesResponse, request, callback);
        }, "name", { value: "GetEgressMessages" });

        /**
         * Calls GetEgressMessages.
         * @function getEgressMessages
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<pruntime_rpc.GetEgressMessagesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#contractQuery}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef ContractQueryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.ContractQueryResponse} [response] ContractQueryResponse
         */

        /**
         * Calls ContractQuery.
         * @function contractQuery
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IContractQueryRequest} request ContractQueryRequest message or plain object
         * @param {pruntime_rpc.PhactoryAPI.ContractQueryCallback} callback Node-style callback called with the error, if any, and ContractQueryResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.contractQuery = function contractQuery(request, callback) {
            return this.rpcCall(contractQuery, $root.pruntime_rpc.ContractQueryRequest, $root.pruntime_rpc.ContractQueryResponse, request, callback);
        }, "name", { value: "ContractQuery" });

        /**
         * Calls ContractQuery.
         * @function contractQuery
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IContractQueryRequest} request ContractQueryRequest message or plain object
         * @returns {Promise<pruntime_rpc.ContractQueryResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#getWorkerState}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef GetWorkerStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.WorkerState} [response] WorkerState
         */

        /**
         * Calls GetWorkerState.
         * @function getWorkerState
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IGetWorkerStateRequest} request GetWorkerStateRequest message or plain object
         * @param {pruntime_rpc.PhactoryAPI.GetWorkerStateCallback} callback Node-style callback called with the error, if any, and WorkerState
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.getWorkerState = function getWorkerState(request, callback) {
            return this.rpcCall(getWorkerState, $root.pruntime_rpc.GetWorkerStateRequest, $root.pruntime_rpc.WorkerState, request, callback);
        }, "name", { value: "GetWorkerState" });

        /**
         * Calls GetWorkerState.
         * @function getWorkerState
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IGetWorkerStateRequest} request GetWorkerStateRequest message or plain object
         * @returns {Promise<pruntime_rpc.WorkerState>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pruntime_rpc.PhactoryAPI#echo}.
         * @memberof pruntime_rpc.PhactoryAPI
         * @typedef EchoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pruntime_rpc.EchoMessage} [response] EchoMessage
         */

        /**
         * Calls Echo.
         * @function echo
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IEchoMessage} request EchoMessage message or plain object
         * @param {pruntime_rpc.PhactoryAPI.EchoCallback} callback Node-style callback called with the error, if any, and EchoMessage
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PhactoryAPI.prototype.echo = function echo(request, callback) {
            return this.rpcCall(echo, $root.pruntime_rpc.EchoMessage, $root.pruntime_rpc.EchoMessage, request, callback);
        }, "name", { value: "Echo" });

        /**
         * Calls Echo.
         * @function echo
         * @memberof pruntime_rpc.PhactoryAPI
         * @instance
         * @param {pruntime_rpc.IEchoMessage} request EchoMessage message or plain object
         * @returns {Promise<pruntime_rpc.EchoMessage>} Promise
         * @variation 2
         */

        return PhactoryAPI;
    })();

    pruntime_rpc.PhactoryInfo = (function() {

        /**
         * Properties of a PhactoryInfo.
         * @memberof pruntime_rpc
         * @interface IPhactoryInfo
         * @property {boolean|null} [initialized] PhactoryInfo initialized
         * @property {boolean|null} [registered] PhactoryInfo registered
         * @property {string|null} [genesis_block_hash] PhactoryInfo genesis_block_hash
         * @property {string|null} [public_key] PhactoryInfo public_key
         * @property {string|null} [ecdh_public_key] PhactoryInfo ecdh_public_key
         * @property {number|null} [headernum] PhactoryInfo headernum
         * @property {number|null} [para_headernum] PhactoryInfo para_headernum
         * @property {number|null} [blocknum] PhactoryInfo blocknum
         * @property {string|null} [state_root] PhactoryInfo state_root
         * @property {boolean|null} [dev_mode] PhactoryInfo dev_mode
         * @property {number|Long|null} [pending_messages] PhactoryInfo pending_messages
         * @property {number|Long|null} [score] PhactoryInfo score
         * @property {pruntime_rpc.IGatekeeperStatus|null} [gatekeeper] PhactoryInfo gatekeeper
         * @property {string|null} [version] PhactoryInfo version
         * @property {string|null} [git_revision] PhactoryInfo git_revision
         * @property {number|Long|null} [running_side_tasks] PhactoryInfo running_side_tasks
         * @property {pruntime_rpc.IMemoryUsage|null} [memory_usage] PhactoryInfo memory_usage
         */

        /**
         * Constructs a new PhactoryInfo.
         * @memberof pruntime_rpc
         * @classdesc Represents a PhactoryInfo.
         * @implements IPhactoryInfo
         * @constructor
         * @param {pruntime_rpc.IPhactoryInfo=} [properties] Properties to set
         */
        function PhactoryInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PhactoryInfo initialized.
         * @member {boolean} initialized
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.initialized = false;

        /**
         * PhactoryInfo registered.
         * @member {boolean} registered
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.registered = false;

        /**
         * PhactoryInfo genesis_block_hash.
         * @member {string|null|undefined} genesis_block_hash
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.genesis_block_hash = null;

        /**
         * PhactoryInfo public_key.
         * @member {string|null|undefined} public_key
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.public_key = null;

        /**
         * PhactoryInfo ecdh_public_key.
         * @member {string|null|undefined} ecdh_public_key
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.ecdh_public_key = null;

        /**
         * PhactoryInfo headernum.
         * @member {number} headernum
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.headernum = 0;

        /**
         * PhactoryInfo para_headernum.
         * @member {number} para_headernum
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.para_headernum = 0;

        /**
         * PhactoryInfo blocknum.
         * @member {number} blocknum
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.blocknum = 0;

        /**
         * PhactoryInfo state_root.
         * @member {string} state_root
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.state_root = "";

        /**
         * PhactoryInfo dev_mode.
         * @member {boolean} dev_mode
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.dev_mode = false;

        /**
         * PhactoryInfo pending_messages.
         * @member {number|Long} pending_messages
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.pending_messages = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PhactoryInfo score.
         * @member {number|Long} score
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.score = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PhactoryInfo gatekeeper.
         * @member {pruntime_rpc.IGatekeeperStatus|null|undefined} gatekeeper
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.gatekeeper = null;

        /**
         * PhactoryInfo version.
         * @member {string} version
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.version = "";

        /**
         * PhactoryInfo git_revision.
         * @member {string} git_revision
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.git_revision = "";

        /**
         * PhactoryInfo running_side_tasks.
         * @member {number|Long} running_side_tasks
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.running_side_tasks = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PhactoryInfo memory_usage.
         * @member {pruntime_rpc.IMemoryUsage|null|undefined} memory_usage
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        PhactoryInfo.prototype.memory_usage = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PhactoryInfo _genesis_block_hash.
         * @member {"genesis_block_hash"|undefined} _genesis_block_hash
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        Object.defineProperty(PhactoryInfo.prototype, "_genesis_block_hash", {
            get: $util.oneOfGetter($oneOfFields = ["genesis_block_hash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PhactoryInfo _public_key.
         * @member {"public_key"|undefined} _public_key
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        Object.defineProperty(PhactoryInfo.prototype, "_public_key", {
            get: $util.oneOfGetter($oneOfFields = ["public_key"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PhactoryInfo _ecdh_public_key.
         * @member {"ecdh_public_key"|undefined} _ecdh_public_key
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         */
        Object.defineProperty(PhactoryInfo.prototype, "_ecdh_public_key", {
            get: $util.oneOfGetter($oneOfFields = ["ecdh_public_key"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PhactoryInfo instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {pruntime_rpc.IPhactoryInfo=} [properties] Properties to set
         * @returns {pruntime_rpc.PhactoryInfo} PhactoryInfo instance
         */
        PhactoryInfo.create = function create(properties) {
            return new PhactoryInfo(properties);
        };

        /**
         * Encodes the specified PhactoryInfo message. Does not implicitly {@link pruntime_rpc.PhactoryInfo.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {pruntime_rpc.IPhactoryInfo} message PhactoryInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhactoryInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.initialized != null && Object.hasOwnProperty.call(message, "initialized"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.initialized);
            if (message.registered != null && Object.hasOwnProperty.call(message, "registered"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.registered);
            if (message.genesis_block_hash != null && Object.hasOwnProperty.call(message, "genesis_block_hash"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.genesis_block_hash);
            if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.public_key);
            if (message.ecdh_public_key != null && Object.hasOwnProperty.call(message, "ecdh_public_key"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ecdh_public_key);
            if (message.headernum != null && Object.hasOwnProperty.call(message, "headernum"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.headernum);
            if (message.para_headernum != null && Object.hasOwnProperty.call(message, "para_headernum"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.para_headernum);
            if (message.blocknum != null && Object.hasOwnProperty.call(message, "blocknum"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.blocknum);
            if (message.state_root != null && Object.hasOwnProperty.call(message, "state_root"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.state_root);
            if (message.dev_mode != null && Object.hasOwnProperty.call(message, "dev_mode"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.dev_mode);
            if (message.pending_messages != null && Object.hasOwnProperty.call(message, "pending_messages"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.pending_messages);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.score);
            if (message.gatekeeper != null && Object.hasOwnProperty.call(message, "gatekeeper"))
                $root.pruntime_rpc.GatekeeperStatus.encode(message.gatekeeper, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.version);
            if (message.git_revision != null && Object.hasOwnProperty.call(message, "git_revision"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.git_revision);
            if (message.running_side_tasks != null && Object.hasOwnProperty.call(message, "running_side_tasks"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.running_side_tasks);
            if (message.memory_usage != null && Object.hasOwnProperty.call(message, "memory_usage"))
                $root.pruntime_rpc.MemoryUsage.encode(message.memory_usage, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PhactoryInfo message, length delimited. Does not implicitly {@link pruntime_rpc.PhactoryInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {pruntime_rpc.IPhactoryInfo} message PhactoryInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhactoryInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhactoryInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.PhactoryInfo} PhactoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhactoryInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.PhactoryInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.initialized = reader.bool();
                    break;
                case 2:
                    message.registered = reader.bool();
                    break;
                case 4:
                    message.genesis_block_hash = reader.string();
                    break;
                case 5:
                    message.public_key = reader.string();
                    break;
                case 6:
                    message.ecdh_public_key = reader.string();
                    break;
                case 7:
                    message.headernum = reader.uint32();
                    break;
                case 8:
                    message.para_headernum = reader.uint32();
                    break;
                case 9:
                    message.blocknum = reader.uint32();
                    break;
                case 10:
                    message.state_root = reader.string();
                    break;
                case 11:
                    message.dev_mode = reader.bool();
                    break;
                case 12:
                    message.pending_messages = reader.uint64();
                    break;
                case 13:
                    message.score = reader.uint64();
                    break;
                case 14:
                    message.gatekeeper = $root.pruntime_rpc.GatekeeperStatus.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.version = reader.string();
                    break;
                case 16:
                    message.git_revision = reader.string();
                    break;
                case 17:
                    message.running_side_tasks = reader.uint64();
                    break;
                case 18:
                    message.memory_usage = $root.pruntime_rpc.MemoryUsage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhactoryInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.PhactoryInfo} PhactoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhactoryInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhactoryInfo message.
         * @function verify
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhactoryInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.initialized != null && message.hasOwnProperty("initialized"))
                if (typeof message.initialized !== "boolean")
                    return "initialized: boolean expected";
            if (message.registered != null && message.hasOwnProperty("registered"))
                if (typeof message.registered !== "boolean")
                    return "registered: boolean expected";
            if (message.genesis_block_hash != null && message.hasOwnProperty("genesis_block_hash")) {
                properties._genesis_block_hash = 1;
                if (!$util.isString(message.genesis_block_hash))
                    return "genesis_block_hash: string expected";
            }
            if (message.public_key != null && message.hasOwnProperty("public_key")) {
                properties._public_key = 1;
                if (!$util.isString(message.public_key))
                    return "public_key: string expected";
            }
            if (message.ecdh_public_key != null && message.hasOwnProperty("ecdh_public_key")) {
                properties._ecdh_public_key = 1;
                if (!$util.isString(message.ecdh_public_key))
                    return "ecdh_public_key: string expected";
            }
            if (message.headernum != null && message.hasOwnProperty("headernum"))
                if (!$util.isInteger(message.headernum))
                    return "headernum: integer expected";
            if (message.para_headernum != null && message.hasOwnProperty("para_headernum"))
                if (!$util.isInteger(message.para_headernum))
                    return "para_headernum: integer expected";
            if (message.blocknum != null && message.hasOwnProperty("blocknum"))
                if (!$util.isInteger(message.blocknum))
                    return "blocknum: integer expected";
            if (message.state_root != null && message.hasOwnProperty("state_root"))
                if (!$util.isString(message.state_root))
                    return "state_root: string expected";
            if (message.dev_mode != null && message.hasOwnProperty("dev_mode"))
                if (typeof message.dev_mode !== "boolean")
                    return "dev_mode: boolean expected";
            if (message.pending_messages != null && message.hasOwnProperty("pending_messages"))
                if (!$util.isInteger(message.pending_messages) && !(message.pending_messages && $util.isInteger(message.pending_messages.low) && $util.isInteger(message.pending_messages.high)))
                    return "pending_messages: integer|Long expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                    return "score: integer|Long expected";
            if (message.gatekeeper != null && message.hasOwnProperty("gatekeeper")) {
                let error = $root.pruntime_rpc.GatekeeperStatus.verify(message.gatekeeper);
                if (error)
                    return "gatekeeper." + error;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.git_revision != null && message.hasOwnProperty("git_revision"))
                if (!$util.isString(message.git_revision))
                    return "git_revision: string expected";
            if (message.running_side_tasks != null && message.hasOwnProperty("running_side_tasks"))
                if (!$util.isInteger(message.running_side_tasks) && !(message.running_side_tasks && $util.isInteger(message.running_side_tasks.low) && $util.isInteger(message.running_side_tasks.high)))
                    return "running_side_tasks: integer|Long expected";
            if (message.memory_usage != null && message.hasOwnProperty("memory_usage")) {
                let error = $root.pruntime_rpc.MemoryUsage.verify(message.memory_usage);
                if (error)
                    return "memory_usage." + error;
            }
            return null;
        };

        /**
         * Creates a PhactoryInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.PhactoryInfo} PhactoryInfo
         */
        PhactoryInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.PhactoryInfo)
                return object;
            let message = new $root.pruntime_rpc.PhactoryInfo();
            if (object.initialized != null)
                message.initialized = Boolean(object.initialized);
            if (object.registered != null)
                message.registered = Boolean(object.registered);
            if (object.genesis_block_hash != null)
                message.genesis_block_hash = String(object.genesis_block_hash);
            if (object.public_key != null)
                message.public_key = String(object.public_key);
            if (object.ecdh_public_key != null)
                message.ecdh_public_key = String(object.ecdh_public_key);
            if (object.headernum != null)
                message.headernum = object.headernum >>> 0;
            if (object.para_headernum != null)
                message.para_headernum = object.para_headernum >>> 0;
            if (object.blocknum != null)
                message.blocknum = object.blocknum >>> 0;
            if (object.state_root != null)
                message.state_root = String(object.state_root);
            if (object.dev_mode != null)
                message.dev_mode = Boolean(object.dev_mode);
            if (object.pending_messages != null)
                if ($util.Long)
                    (message.pending_messages = $util.Long.fromValue(object.pending_messages)).unsigned = true;
                else if (typeof object.pending_messages === "string")
                    message.pending_messages = parseInt(object.pending_messages, 10);
                else if (typeof object.pending_messages === "number")
                    message.pending_messages = object.pending_messages;
                else if (typeof object.pending_messages === "object")
                    message.pending_messages = new $util.LongBits(object.pending_messages.low >>> 0, object.pending_messages.high >>> 0).toNumber(true);
            if (object.score != null)
                if ($util.Long)
                    (message.score = $util.Long.fromValue(object.score)).unsigned = true;
                else if (typeof object.score === "string")
                    message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                    message.score = object.score;
                else if (typeof object.score === "object")
                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber(true);
            if (object.gatekeeper != null) {
                if (typeof object.gatekeeper !== "object")
                    throw TypeError(".pruntime_rpc.PhactoryInfo.gatekeeper: object expected");
                message.gatekeeper = $root.pruntime_rpc.GatekeeperStatus.fromObject(object.gatekeeper);
            }
            if (object.version != null)
                message.version = String(object.version);
            if (object.git_revision != null)
                message.git_revision = String(object.git_revision);
            if (object.running_side_tasks != null)
                if ($util.Long)
                    (message.running_side_tasks = $util.Long.fromValue(object.running_side_tasks)).unsigned = true;
                else if (typeof object.running_side_tasks === "string")
                    message.running_side_tasks = parseInt(object.running_side_tasks, 10);
                else if (typeof object.running_side_tasks === "number")
                    message.running_side_tasks = object.running_side_tasks;
                else if (typeof object.running_side_tasks === "object")
                    message.running_side_tasks = new $util.LongBits(object.running_side_tasks.low >>> 0, object.running_side_tasks.high >>> 0).toNumber(true);
            if (object.memory_usage != null) {
                if (typeof object.memory_usage !== "object")
                    throw TypeError(".pruntime_rpc.PhactoryInfo.memory_usage: object expected");
                message.memory_usage = $root.pruntime_rpc.MemoryUsage.fromObject(object.memory_usage);
            }
            return message;
        };

        /**
         * Creates a plain object from a PhactoryInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.PhactoryInfo
         * @static
         * @param {pruntime_rpc.PhactoryInfo} message PhactoryInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhactoryInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.initialized = false;
                object.registered = false;
                object.headernum = 0;
                object.para_headernum = 0;
                object.blocknum = 0;
                object.state_root = "";
                object.dev_mode = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.pending_messages = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pending_messages = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.score = options.longs === String ? "0" : 0;
                object.gatekeeper = null;
                object.version = "";
                object.git_revision = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.running_side_tasks = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.running_side_tasks = options.longs === String ? "0" : 0;
                object.memory_usage = null;
            }
            if (message.initialized != null && message.hasOwnProperty("initialized"))
                object.initialized = message.initialized;
            if (message.registered != null && message.hasOwnProperty("registered"))
                object.registered = message.registered;
            if (message.genesis_block_hash != null && message.hasOwnProperty("genesis_block_hash")) {
                object.genesis_block_hash = message.genesis_block_hash;
                if (options.oneofs)
                    object._genesis_block_hash = "genesis_block_hash";
            }
            if (message.public_key != null && message.hasOwnProperty("public_key")) {
                object.public_key = message.public_key;
                if (options.oneofs)
                    object._public_key = "public_key";
            }
            if (message.ecdh_public_key != null && message.hasOwnProperty("ecdh_public_key")) {
                object.ecdh_public_key = message.ecdh_public_key;
                if (options.oneofs)
                    object._ecdh_public_key = "ecdh_public_key";
            }
            if (message.headernum != null && message.hasOwnProperty("headernum"))
                object.headernum = message.headernum;
            if (message.para_headernum != null && message.hasOwnProperty("para_headernum"))
                object.para_headernum = message.para_headernum;
            if (message.blocknum != null && message.hasOwnProperty("blocknum"))
                object.blocknum = message.blocknum;
            if (message.state_root != null && message.hasOwnProperty("state_root"))
                object.state_root = message.state_root;
            if (message.dev_mode != null && message.hasOwnProperty("dev_mode"))
                object.dev_mode = message.dev_mode;
            if (message.pending_messages != null && message.hasOwnProperty("pending_messages"))
                if (typeof message.pending_messages === "number")
                    object.pending_messages = options.longs === String ? String(message.pending_messages) : message.pending_messages;
                else
                    object.pending_messages = options.longs === String ? $util.Long.prototype.toString.call(message.pending_messages) : options.longs === Number ? new $util.LongBits(message.pending_messages.low >>> 0, message.pending_messages.high >>> 0).toNumber(true) : message.pending_messages;
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                    object.score = options.longs === String ? String(message.score) : message.score;
                else
                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber(true) : message.score;
            if (message.gatekeeper != null && message.hasOwnProperty("gatekeeper"))
                object.gatekeeper = $root.pruntime_rpc.GatekeeperStatus.toObject(message.gatekeeper, options);
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.git_revision != null && message.hasOwnProperty("git_revision"))
                object.git_revision = message.git_revision;
            if (message.running_side_tasks != null && message.hasOwnProperty("running_side_tasks"))
                if (typeof message.running_side_tasks === "number")
                    object.running_side_tasks = options.longs === String ? String(message.running_side_tasks) : message.running_side_tasks;
                else
                    object.running_side_tasks = options.longs === String ? $util.Long.prototype.toString.call(message.running_side_tasks) : options.longs === Number ? new $util.LongBits(message.running_side_tasks.low >>> 0, message.running_side_tasks.high >>> 0).toNumber(true) : message.running_side_tasks;
            if (message.memory_usage != null && message.hasOwnProperty("memory_usage"))
                object.memory_usage = $root.pruntime_rpc.MemoryUsage.toObject(message.memory_usage, options);
            return object;
        };

        /**
         * Converts this PhactoryInfo to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.PhactoryInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhactoryInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PhactoryInfo;
    })();

    /**
     * GatekeeperRole enum.
     * @name pruntime_rpc.GatekeeperRole
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} Dummy=1 Dummy value
     * @property {number} Active=2 Active value
     */
    pruntime_rpc.GatekeeperRole = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "Dummy"] = 1;
        values[valuesById[2] = "Active"] = 2;
        return values;
    })();

    pruntime_rpc.GatekeeperStatus = (function() {

        /**
         * Properties of a GatekeeperStatus.
         * @memberof pruntime_rpc
         * @interface IGatekeeperStatus
         * @property {pruntime_rpc.GatekeeperRole|null} [role] GatekeeperStatus role
         * @property {string|null} [master_public_key] GatekeeperStatus master_public_key
         */

        /**
         * Constructs a new GatekeeperStatus.
         * @memberof pruntime_rpc
         * @classdesc Represents a GatekeeperStatus.
         * @implements IGatekeeperStatus
         * @constructor
         * @param {pruntime_rpc.IGatekeeperStatus=} [properties] Properties to set
         */
        function GatekeeperStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GatekeeperStatus role.
         * @member {pruntime_rpc.GatekeeperRole} role
         * @memberof pruntime_rpc.GatekeeperStatus
         * @instance
         */
        GatekeeperStatus.prototype.role = 0;

        /**
         * GatekeeperStatus master_public_key.
         * @member {string} master_public_key
         * @memberof pruntime_rpc.GatekeeperStatus
         * @instance
         */
        GatekeeperStatus.prototype.master_public_key = "";

        /**
         * Creates a new GatekeeperStatus instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {pruntime_rpc.IGatekeeperStatus=} [properties] Properties to set
         * @returns {pruntime_rpc.GatekeeperStatus} GatekeeperStatus instance
         */
        GatekeeperStatus.create = function create(properties) {
            return new GatekeeperStatus(properties);
        };

        /**
         * Encodes the specified GatekeeperStatus message. Does not implicitly {@link pruntime_rpc.GatekeeperStatus.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {pruntime_rpc.IGatekeeperStatus} message GatekeeperStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GatekeeperStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.role);
            if (message.master_public_key != null && Object.hasOwnProperty.call(message, "master_public_key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.master_public_key);
            return writer;
        };

        /**
         * Encodes the specified GatekeeperStatus message, length delimited. Does not implicitly {@link pruntime_rpc.GatekeeperStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {pruntime_rpc.IGatekeeperStatus} message GatekeeperStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GatekeeperStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GatekeeperStatus message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.GatekeeperStatus} GatekeeperStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GatekeeperStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.GatekeeperStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.role = reader.int32();
                    break;
                case 2:
                    message.master_public_key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GatekeeperStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.GatekeeperStatus} GatekeeperStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GatekeeperStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GatekeeperStatus message.
         * @function verify
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GatekeeperStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.master_public_key != null && message.hasOwnProperty("master_public_key"))
                if (!$util.isString(message.master_public_key))
                    return "master_public_key: string expected";
            return null;
        };

        /**
         * Creates a GatekeeperStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.GatekeeperStatus} GatekeeperStatus
         */
        GatekeeperStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.GatekeeperStatus)
                return object;
            let message = new $root.pruntime_rpc.GatekeeperStatus();
            switch (object.role) {
            case "None":
            case 0:
                message.role = 0;
                break;
            case "Dummy":
            case 1:
                message.role = 1;
                break;
            case "Active":
            case 2:
                message.role = 2;
                break;
            }
            if (object.master_public_key != null)
                message.master_public_key = String(object.master_public_key);
            return message;
        };

        /**
         * Creates a plain object from a GatekeeperStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.GatekeeperStatus
         * @static
         * @param {pruntime_rpc.GatekeeperStatus} message GatekeeperStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GatekeeperStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.role = options.enums === String ? "None" : 0;
                object.master_public_key = "";
            }
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.pruntime_rpc.GatekeeperRole[message.role] : message.role;
            if (message.master_public_key != null && message.hasOwnProperty("master_public_key"))
                object.master_public_key = message.master_public_key;
            return object;
        };

        /**
         * Converts this GatekeeperStatus to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.GatekeeperStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GatekeeperStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GatekeeperStatus;
    })();

    pruntime_rpc.MemoryUsage = (function() {

        /**
         * Properties of a MemoryUsage.
         * @memberof pruntime_rpc
         * @interface IMemoryUsage
         * @property {number|Long|null} [rust_used] MemoryUsage rust_used
         * @property {number|Long|null} [rust_peak_used] MemoryUsage rust_peak_used
         * @property {number|Long|null} [total_peak_used] MemoryUsage total_peak_used
         */

        /**
         * Constructs a new MemoryUsage.
         * @memberof pruntime_rpc
         * @classdesc Represents a MemoryUsage.
         * @implements IMemoryUsage
         * @constructor
         * @param {pruntime_rpc.IMemoryUsage=} [properties] Properties to set
         */
        function MemoryUsage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MemoryUsage rust_used.
         * @member {number|Long} rust_used
         * @memberof pruntime_rpc.MemoryUsage
         * @instance
         */
        MemoryUsage.prototype.rust_used = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MemoryUsage rust_peak_used.
         * @member {number|Long} rust_peak_used
         * @memberof pruntime_rpc.MemoryUsage
         * @instance
         */
        MemoryUsage.prototype.rust_peak_used = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MemoryUsage total_peak_used.
         * @member {number|Long} total_peak_used
         * @memberof pruntime_rpc.MemoryUsage
         * @instance
         */
        MemoryUsage.prototype.total_peak_used = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MemoryUsage instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {pruntime_rpc.IMemoryUsage=} [properties] Properties to set
         * @returns {pruntime_rpc.MemoryUsage} MemoryUsage instance
         */
        MemoryUsage.create = function create(properties) {
            return new MemoryUsage(properties);
        };

        /**
         * Encodes the specified MemoryUsage message. Does not implicitly {@link pruntime_rpc.MemoryUsage.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {pruntime_rpc.IMemoryUsage} message MemoryUsage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MemoryUsage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rust_used != null && Object.hasOwnProperty.call(message, "rust_used"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.rust_used);
            if (message.rust_peak_used != null && Object.hasOwnProperty.call(message, "rust_peak_used"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.rust_peak_used);
            if (message.total_peak_used != null && Object.hasOwnProperty.call(message, "total_peak_used"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.total_peak_used);
            return writer;
        };

        /**
         * Encodes the specified MemoryUsage message, length delimited. Does not implicitly {@link pruntime_rpc.MemoryUsage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {pruntime_rpc.IMemoryUsage} message MemoryUsage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MemoryUsage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MemoryUsage message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.MemoryUsage} MemoryUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MemoryUsage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.MemoryUsage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rust_used = reader.uint64();
                    break;
                case 2:
                    message.rust_peak_used = reader.uint64();
                    break;
                case 3:
                    message.total_peak_used = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MemoryUsage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.MemoryUsage} MemoryUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MemoryUsage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MemoryUsage message.
         * @function verify
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MemoryUsage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rust_used != null && message.hasOwnProperty("rust_used"))
                if (!$util.isInteger(message.rust_used) && !(message.rust_used && $util.isInteger(message.rust_used.low) && $util.isInteger(message.rust_used.high)))
                    return "rust_used: integer|Long expected";
            if (message.rust_peak_used != null && message.hasOwnProperty("rust_peak_used"))
                if (!$util.isInteger(message.rust_peak_used) && !(message.rust_peak_used && $util.isInteger(message.rust_peak_used.low) && $util.isInteger(message.rust_peak_used.high)))
                    return "rust_peak_used: integer|Long expected";
            if (message.total_peak_used != null && message.hasOwnProperty("total_peak_used"))
                if (!$util.isInteger(message.total_peak_used) && !(message.total_peak_used && $util.isInteger(message.total_peak_used.low) && $util.isInteger(message.total_peak_used.high)))
                    return "total_peak_used: integer|Long expected";
            return null;
        };

        /**
         * Creates a MemoryUsage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.MemoryUsage} MemoryUsage
         */
        MemoryUsage.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.MemoryUsage)
                return object;
            let message = new $root.pruntime_rpc.MemoryUsage();
            if (object.rust_used != null)
                if ($util.Long)
                    (message.rust_used = $util.Long.fromValue(object.rust_used)).unsigned = true;
                else if (typeof object.rust_used === "string")
                    message.rust_used = parseInt(object.rust_used, 10);
                else if (typeof object.rust_used === "number")
                    message.rust_used = object.rust_used;
                else if (typeof object.rust_used === "object")
                    message.rust_used = new $util.LongBits(object.rust_used.low >>> 0, object.rust_used.high >>> 0).toNumber(true);
            if (object.rust_peak_used != null)
                if ($util.Long)
                    (message.rust_peak_used = $util.Long.fromValue(object.rust_peak_used)).unsigned = true;
                else if (typeof object.rust_peak_used === "string")
                    message.rust_peak_used = parseInt(object.rust_peak_used, 10);
                else if (typeof object.rust_peak_used === "number")
                    message.rust_peak_used = object.rust_peak_used;
                else if (typeof object.rust_peak_used === "object")
                    message.rust_peak_used = new $util.LongBits(object.rust_peak_used.low >>> 0, object.rust_peak_used.high >>> 0).toNumber(true);
            if (object.total_peak_used != null)
                if ($util.Long)
                    (message.total_peak_used = $util.Long.fromValue(object.total_peak_used)).unsigned = true;
                else if (typeof object.total_peak_used === "string")
                    message.total_peak_used = parseInt(object.total_peak_used, 10);
                else if (typeof object.total_peak_used === "number")
                    message.total_peak_used = object.total_peak_used;
                else if (typeof object.total_peak_used === "object")
                    message.total_peak_used = new $util.LongBits(object.total_peak_used.low >>> 0, object.total_peak_used.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MemoryUsage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.MemoryUsage
         * @static
         * @param {pruntime_rpc.MemoryUsage} message MemoryUsage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MemoryUsage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.rust_used = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rust_used = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.rust_peak_used = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rust_peak_used = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.total_peak_used = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total_peak_used = options.longs === String ? "0" : 0;
            }
            if (message.rust_used != null && message.hasOwnProperty("rust_used"))
                if (typeof message.rust_used === "number")
                    object.rust_used = options.longs === String ? String(message.rust_used) : message.rust_used;
                else
                    object.rust_used = options.longs === String ? $util.Long.prototype.toString.call(message.rust_used) : options.longs === Number ? new $util.LongBits(message.rust_used.low >>> 0, message.rust_used.high >>> 0).toNumber(true) : message.rust_used;
            if (message.rust_peak_used != null && message.hasOwnProperty("rust_peak_used"))
                if (typeof message.rust_peak_used === "number")
                    object.rust_peak_used = options.longs === String ? String(message.rust_peak_used) : message.rust_peak_used;
                else
                    object.rust_peak_used = options.longs === String ? $util.Long.prototype.toString.call(message.rust_peak_used) : options.longs === Number ? new $util.LongBits(message.rust_peak_used.low >>> 0, message.rust_peak_used.high >>> 0).toNumber(true) : message.rust_peak_used;
            if (message.total_peak_used != null && message.hasOwnProperty("total_peak_used"))
                if (typeof message.total_peak_used === "number")
                    object.total_peak_used = options.longs === String ? String(message.total_peak_used) : message.total_peak_used;
                else
                    object.total_peak_used = options.longs === String ? $util.Long.prototype.toString.call(message.total_peak_used) : options.longs === Number ? new $util.LongBits(message.total_peak_used.low >>> 0, message.total_peak_used.high >>> 0).toNumber(true) : message.total_peak_used;
            return object;
        };

        /**
         * Converts this MemoryUsage to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.MemoryUsage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MemoryUsage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MemoryUsage;
    })();

    pruntime_rpc.SyncedTo = (function() {

        /**
         * Properties of a SyncedTo.
         * @memberof pruntime_rpc
         * @interface ISyncedTo
         * @property {number|null} [synced_to] SyncedTo synced_to
         */

        /**
         * Constructs a new SyncedTo.
         * @memberof pruntime_rpc
         * @classdesc Represents a SyncedTo.
         * @implements ISyncedTo
         * @constructor
         * @param {pruntime_rpc.ISyncedTo=} [properties] Properties to set
         */
        function SyncedTo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncedTo synced_to.
         * @member {number} synced_to
         * @memberof pruntime_rpc.SyncedTo
         * @instance
         */
        SyncedTo.prototype.synced_to = 0;

        /**
         * Creates a new SyncedTo instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {pruntime_rpc.ISyncedTo=} [properties] Properties to set
         * @returns {pruntime_rpc.SyncedTo} SyncedTo instance
         */
        SyncedTo.create = function create(properties) {
            return new SyncedTo(properties);
        };

        /**
         * Encodes the specified SyncedTo message. Does not implicitly {@link pruntime_rpc.SyncedTo.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {pruntime_rpc.ISyncedTo} message SyncedTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncedTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.synced_to != null && Object.hasOwnProperty.call(message, "synced_to"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.synced_to);
            return writer;
        };

        /**
         * Encodes the specified SyncedTo message, length delimited. Does not implicitly {@link pruntime_rpc.SyncedTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {pruntime_rpc.ISyncedTo} message SyncedTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncedTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncedTo message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.SyncedTo} SyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncedTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.SyncedTo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.synced_to = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncedTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.SyncedTo} SyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncedTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncedTo message.
         * @function verify
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncedTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.synced_to != null && message.hasOwnProperty("synced_to"))
                if (!$util.isInteger(message.synced_to))
                    return "synced_to: integer expected";
            return null;
        };

        /**
         * Creates a SyncedTo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.SyncedTo} SyncedTo
         */
        SyncedTo.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.SyncedTo)
                return object;
            let message = new $root.pruntime_rpc.SyncedTo();
            if (object.synced_to != null)
                message.synced_to = object.synced_to >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SyncedTo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.SyncedTo
         * @static
         * @param {pruntime_rpc.SyncedTo} message SyncedTo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncedTo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.synced_to = 0;
            if (message.synced_to != null && message.hasOwnProperty("synced_to"))
                object.synced_to = message.synced_to;
            return object;
        };

        /**
         * Converts this SyncedTo to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.SyncedTo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncedTo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncedTo;
    })();

    pruntime_rpc.HeadersToSync = (function() {

        /**
         * Properties of a HeadersToSync.
         * @memberof pruntime_rpc
         * @interface IHeadersToSync
         * @property {Uint8Array|null} [encoded_headers] HeadersToSync encoded_headers
         * @property {Uint8Array|null} [encoded_authority_set_change] HeadersToSync encoded_authority_set_change
         */

        /**
         * Constructs a new HeadersToSync.
         * @memberof pruntime_rpc
         * @classdesc Represents a HeadersToSync.
         * @implements IHeadersToSync
         * @constructor
         * @param {pruntime_rpc.IHeadersToSync=} [properties] Properties to set
         */
        function HeadersToSync(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeadersToSync encoded_headers.
         * @member {Uint8Array} encoded_headers
         * @memberof pruntime_rpc.HeadersToSync
         * @instance
         */
        HeadersToSync.prototype.encoded_headers = $util.newBuffer([]);

        /**
         * HeadersToSync encoded_authority_set_change.
         * @member {Uint8Array|null|undefined} encoded_authority_set_change
         * @memberof pruntime_rpc.HeadersToSync
         * @instance
         */
        HeadersToSync.prototype.encoded_authority_set_change = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * HeadersToSync _encoded_authority_set_change.
         * @member {"encoded_authority_set_change"|undefined} _encoded_authority_set_change
         * @memberof pruntime_rpc.HeadersToSync
         * @instance
         */
        Object.defineProperty(HeadersToSync.prototype, "_encoded_authority_set_change", {
            get: $util.oneOfGetter($oneOfFields = ["encoded_authority_set_change"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new HeadersToSync instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {pruntime_rpc.IHeadersToSync=} [properties] Properties to set
         * @returns {pruntime_rpc.HeadersToSync} HeadersToSync instance
         */
        HeadersToSync.create = function create(properties) {
            return new HeadersToSync(properties);
        };

        /**
         * Encodes the specified HeadersToSync message. Does not implicitly {@link pruntime_rpc.HeadersToSync.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {pruntime_rpc.IHeadersToSync} message HeadersToSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadersToSync.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_headers != null && Object.hasOwnProperty.call(message, "encoded_headers"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_headers);
            if (message.encoded_authority_set_change != null && Object.hasOwnProperty.call(message, "encoded_authority_set_change"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.encoded_authority_set_change);
            return writer;
        };

        /**
         * Encodes the specified HeadersToSync message, length delimited. Does not implicitly {@link pruntime_rpc.HeadersToSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {pruntime_rpc.IHeadersToSync} message HeadersToSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadersToSync.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeadersToSync message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.HeadersToSync} HeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadersToSync.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.HeadersToSync();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_headers = reader.bytes();
                    break;
                case 2:
                    message.encoded_authority_set_change = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeadersToSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.HeadersToSync} HeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadersToSync.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeadersToSync message.
         * @function verify
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeadersToSync.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.encoded_headers != null && message.hasOwnProperty("encoded_headers"))
                if (!(message.encoded_headers && typeof message.encoded_headers.length === "number" || $util.isString(message.encoded_headers)))
                    return "encoded_headers: buffer expected";
            if (message.encoded_authority_set_change != null && message.hasOwnProperty("encoded_authority_set_change")) {
                properties._encoded_authority_set_change = 1;
                if (!(message.encoded_authority_set_change && typeof message.encoded_authority_set_change.length === "number" || $util.isString(message.encoded_authority_set_change)))
                    return "encoded_authority_set_change: buffer expected";
            }
            return null;
        };

        /**
         * Creates a HeadersToSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.HeadersToSync} HeadersToSync
         */
        HeadersToSync.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.HeadersToSync)
                return object;
            let message = new $root.pruntime_rpc.HeadersToSync();
            if (object.encoded_headers != null)
                if (typeof object.encoded_headers === "string")
                    $util.base64.decode(object.encoded_headers, message.encoded_headers = $util.newBuffer($util.base64.length(object.encoded_headers)), 0);
                else if (object.encoded_headers.length)
                    message.encoded_headers = object.encoded_headers;
            if (object.encoded_authority_set_change != null)
                if (typeof object.encoded_authority_set_change === "string")
                    $util.base64.decode(object.encoded_authority_set_change, message.encoded_authority_set_change = $util.newBuffer($util.base64.length(object.encoded_authority_set_change)), 0);
                else if (object.encoded_authority_set_change.length)
                    message.encoded_authority_set_change = object.encoded_authority_set_change;
            return message;
        };

        /**
         * Creates a plain object from a HeadersToSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.HeadersToSync
         * @static
         * @param {pruntime_rpc.HeadersToSync} message HeadersToSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeadersToSync.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.encoded_headers = "";
                else {
                    object.encoded_headers = [];
                    if (options.bytes !== Array)
                        object.encoded_headers = $util.newBuffer(object.encoded_headers);
                }
            if (message.encoded_headers != null && message.hasOwnProperty("encoded_headers"))
                object.encoded_headers = options.bytes === String ? $util.base64.encode(message.encoded_headers, 0, message.encoded_headers.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_headers) : message.encoded_headers;
            if (message.encoded_authority_set_change != null && message.hasOwnProperty("encoded_authority_set_change")) {
                object.encoded_authority_set_change = options.bytes === String ? $util.base64.encode(message.encoded_authority_set_change, 0, message.encoded_authority_set_change.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_authority_set_change) : message.encoded_authority_set_change;
                if (options.oneofs)
                    object._encoded_authority_set_change = "encoded_authority_set_change";
            }
            return object;
        };

        /**
         * Converts this HeadersToSync to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.HeadersToSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeadersToSync.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeadersToSync;
    })();

    pruntime_rpc.ParaHeadersToSync = (function() {

        /**
         * Properties of a ParaHeadersToSync.
         * @memberof pruntime_rpc
         * @interface IParaHeadersToSync
         * @property {Uint8Array|null} [encoded_headers] ParaHeadersToSync encoded_headers
         * @property {Array.<Uint8Array>|null} [proof] ParaHeadersToSync proof
         */

        /**
         * Constructs a new ParaHeadersToSync.
         * @memberof pruntime_rpc
         * @classdesc Represents a ParaHeadersToSync.
         * @implements IParaHeadersToSync
         * @constructor
         * @param {pruntime_rpc.IParaHeadersToSync=} [properties] Properties to set
         */
        function ParaHeadersToSync(properties) {
            this.proof = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParaHeadersToSync encoded_headers.
         * @member {Uint8Array} encoded_headers
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @instance
         */
        ParaHeadersToSync.prototype.encoded_headers = $util.newBuffer([]);

        /**
         * ParaHeadersToSync proof.
         * @member {Array.<Uint8Array>} proof
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @instance
         */
        ParaHeadersToSync.prototype.proof = $util.emptyArray;

        /**
         * Creates a new ParaHeadersToSync instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {pruntime_rpc.IParaHeadersToSync=} [properties] Properties to set
         * @returns {pruntime_rpc.ParaHeadersToSync} ParaHeadersToSync instance
         */
        ParaHeadersToSync.create = function create(properties) {
            return new ParaHeadersToSync(properties);
        };

        /**
         * Encodes the specified ParaHeadersToSync message. Does not implicitly {@link pruntime_rpc.ParaHeadersToSync.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {pruntime_rpc.IParaHeadersToSync} message ParaHeadersToSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParaHeadersToSync.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_headers != null && Object.hasOwnProperty.call(message, "encoded_headers"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_headers);
            if (message.proof != null && message.proof.length)
                for (let i = 0; i < message.proof.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.proof[i]);
            return writer;
        };

        /**
         * Encodes the specified ParaHeadersToSync message, length delimited. Does not implicitly {@link pruntime_rpc.ParaHeadersToSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {pruntime_rpc.IParaHeadersToSync} message ParaHeadersToSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParaHeadersToSync.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParaHeadersToSync message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.ParaHeadersToSync} ParaHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParaHeadersToSync.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.ParaHeadersToSync();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_headers = reader.bytes();
                    break;
                case 2:
                    if (!(message.proof && message.proof.length))
                        message.proof = [];
                    message.proof.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParaHeadersToSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.ParaHeadersToSync} ParaHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParaHeadersToSync.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParaHeadersToSync message.
         * @function verify
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParaHeadersToSync.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encoded_headers != null && message.hasOwnProperty("encoded_headers"))
                if (!(message.encoded_headers && typeof message.encoded_headers.length === "number" || $util.isString(message.encoded_headers)))
                    return "encoded_headers: buffer expected";
            if (message.proof != null && message.hasOwnProperty("proof")) {
                if (!Array.isArray(message.proof))
                    return "proof: array expected";
                for (let i = 0; i < message.proof.length; ++i)
                    if (!(message.proof[i] && typeof message.proof[i].length === "number" || $util.isString(message.proof[i])))
                        return "proof: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a ParaHeadersToSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.ParaHeadersToSync} ParaHeadersToSync
         */
        ParaHeadersToSync.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.ParaHeadersToSync)
                return object;
            let message = new $root.pruntime_rpc.ParaHeadersToSync();
            if (object.encoded_headers != null)
                if (typeof object.encoded_headers === "string")
                    $util.base64.decode(object.encoded_headers, message.encoded_headers = $util.newBuffer($util.base64.length(object.encoded_headers)), 0);
                else if (object.encoded_headers.length)
                    message.encoded_headers = object.encoded_headers;
            if (object.proof) {
                if (!Array.isArray(object.proof))
                    throw TypeError(".pruntime_rpc.ParaHeadersToSync.proof: array expected");
                message.proof = [];
                for (let i = 0; i < object.proof.length; ++i)
                    if (typeof object.proof[i] === "string")
                        $util.base64.decode(object.proof[i], message.proof[i] = $util.newBuffer($util.base64.length(object.proof[i])), 0);
                    else if (object.proof[i].length)
                        message.proof[i] = object.proof[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a ParaHeadersToSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @static
         * @param {pruntime_rpc.ParaHeadersToSync} message ParaHeadersToSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParaHeadersToSync.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.proof = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.encoded_headers = "";
                else {
                    object.encoded_headers = [];
                    if (options.bytes !== Array)
                        object.encoded_headers = $util.newBuffer(object.encoded_headers);
                }
            if (message.encoded_headers != null && message.hasOwnProperty("encoded_headers"))
                object.encoded_headers = options.bytes === String ? $util.base64.encode(message.encoded_headers, 0, message.encoded_headers.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_headers) : message.encoded_headers;
            if (message.proof && message.proof.length) {
                object.proof = [];
                for (let j = 0; j < message.proof.length; ++j)
                    object.proof[j] = options.bytes === String ? $util.base64.encode(message.proof[j], 0, message.proof[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proof[j]) : message.proof[j];
            }
            return object;
        };

        /**
         * Converts this ParaHeadersToSync to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.ParaHeadersToSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParaHeadersToSync.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ParaHeadersToSync;
    })();

    pruntime_rpc.CombinedHeadersToSync = (function() {

        /**
         * Properties of a CombinedHeadersToSync.
         * @memberof pruntime_rpc
         * @interface ICombinedHeadersToSync
         * @property {Uint8Array|null} [encoded_relaychain_headers] CombinedHeadersToSync encoded_relaychain_headers
         * @property {Uint8Array|null} [authority_set_change] CombinedHeadersToSync authority_set_change
         * @property {Uint8Array|null} [encoded_parachain_headers] CombinedHeadersToSync encoded_parachain_headers
         * @property {Array.<Uint8Array>|null} [proof] CombinedHeadersToSync proof
         */

        /**
         * Constructs a new CombinedHeadersToSync.
         * @memberof pruntime_rpc
         * @classdesc Represents a CombinedHeadersToSync.
         * @implements ICombinedHeadersToSync
         * @constructor
         * @param {pruntime_rpc.ICombinedHeadersToSync=} [properties] Properties to set
         */
        function CombinedHeadersToSync(properties) {
            this.proof = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CombinedHeadersToSync encoded_relaychain_headers.
         * @member {Uint8Array} encoded_relaychain_headers
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @instance
         */
        CombinedHeadersToSync.prototype.encoded_relaychain_headers = $util.newBuffer([]);

        /**
         * CombinedHeadersToSync authority_set_change.
         * @member {Uint8Array|null|undefined} authority_set_change
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @instance
         */
        CombinedHeadersToSync.prototype.authority_set_change = null;

        /**
         * CombinedHeadersToSync encoded_parachain_headers.
         * @member {Uint8Array} encoded_parachain_headers
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @instance
         */
        CombinedHeadersToSync.prototype.encoded_parachain_headers = $util.newBuffer([]);

        /**
         * CombinedHeadersToSync proof.
         * @member {Array.<Uint8Array>} proof
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @instance
         */
        CombinedHeadersToSync.prototype.proof = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * CombinedHeadersToSync _authority_set_change.
         * @member {"authority_set_change"|undefined} _authority_set_change
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @instance
         */
        Object.defineProperty(CombinedHeadersToSync.prototype, "_authority_set_change", {
            get: $util.oneOfGetter($oneOfFields = ["authority_set_change"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CombinedHeadersToSync instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {pruntime_rpc.ICombinedHeadersToSync=} [properties] Properties to set
         * @returns {pruntime_rpc.CombinedHeadersToSync} CombinedHeadersToSync instance
         */
        CombinedHeadersToSync.create = function create(properties) {
            return new CombinedHeadersToSync(properties);
        };

        /**
         * Encodes the specified CombinedHeadersToSync message. Does not implicitly {@link pruntime_rpc.CombinedHeadersToSync.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {pruntime_rpc.ICombinedHeadersToSync} message CombinedHeadersToSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CombinedHeadersToSync.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_relaychain_headers != null && Object.hasOwnProperty.call(message, "encoded_relaychain_headers"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_relaychain_headers);
            if (message.authority_set_change != null && Object.hasOwnProperty.call(message, "authority_set_change"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.authority_set_change);
            if (message.encoded_parachain_headers != null && Object.hasOwnProperty.call(message, "encoded_parachain_headers"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.encoded_parachain_headers);
            if (message.proof != null && message.proof.length)
                for (let i = 0; i < message.proof.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.proof[i]);
            return writer;
        };

        /**
         * Encodes the specified CombinedHeadersToSync message, length delimited. Does not implicitly {@link pruntime_rpc.CombinedHeadersToSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {pruntime_rpc.ICombinedHeadersToSync} message CombinedHeadersToSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CombinedHeadersToSync.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CombinedHeadersToSync message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.CombinedHeadersToSync} CombinedHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CombinedHeadersToSync.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.CombinedHeadersToSync();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_relaychain_headers = reader.bytes();
                    break;
                case 2:
                    message.authority_set_change = reader.bytes();
                    break;
                case 3:
                    message.encoded_parachain_headers = reader.bytes();
                    break;
                case 4:
                    if (!(message.proof && message.proof.length))
                        message.proof = [];
                    message.proof.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CombinedHeadersToSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.CombinedHeadersToSync} CombinedHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CombinedHeadersToSync.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CombinedHeadersToSync message.
         * @function verify
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CombinedHeadersToSync.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.encoded_relaychain_headers != null && message.hasOwnProperty("encoded_relaychain_headers"))
                if (!(message.encoded_relaychain_headers && typeof message.encoded_relaychain_headers.length === "number" || $util.isString(message.encoded_relaychain_headers)))
                    return "encoded_relaychain_headers: buffer expected";
            if (message.authority_set_change != null && message.hasOwnProperty("authority_set_change")) {
                properties._authority_set_change = 1;
                if (!(message.authority_set_change && typeof message.authority_set_change.length === "number" || $util.isString(message.authority_set_change)))
                    return "authority_set_change: buffer expected";
            }
            if (message.encoded_parachain_headers != null && message.hasOwnProperty("encoded_parachain_headers"))
                if (!(message.encoded_parachain_headers && typeof message.encoded_parachain_headers.length === "number" || $util.isString(message.encoded_parachain_headers)))
                    return "encoded_parachain_headers: buffer expected";
            if (message.proof != null && message.hasOwnProperty("proof")) {
                if (!Array.isArray(message.proof))
                    return "proof: array expected";
                for (let i = 0; i < message.proof.length; ++i)
                    if (!(message.proof[i] && typeof message.proof[i].length === "number" || $util.isString(message.proof[i])))
                        return "proof: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a CombinedHeadersToSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.CombinedHeadersToSync} CombinedHeadersToSync
         */
        CombinedHeadersToSync.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.CombinedHeadersToSync)
                return object;
            let message = new $root.pruntime_rpc.CombinedHeadersToSync();
            if (object.encoded_relaychain_headers != null)
                if (typeof object.encoded_relaychain_headers === "string")
                    $util.base64.decode(object.encoded_relaychain_headers, message.encoded_relaychain_headers = $util.newBuffer($util.base64.length(object.encoded_relaychain_headers)), 0);
                else if (object.encoded_relaychain_headers.length)
                    message.encoded_relaychain_headers = object.encoded_relaychain_headers;
            if (object.authority_set_change != null)
                if (typeof object.authority_set_change === "string")
                    $util.base64.decode(object.authority_set_change, message.authority_set_change = $util.newBuffer($util.base64.length(object.authority_set_change)), 0);
                else if (object.authority_set_change.length)
                    message.authority_set_change = object.authority_set_change;
            if (object.encoded_parachain_headers != null)
                if (typeof object.encoded_parachain_headers === "string")
                    $util.base64.decode(object.encoded_parachain_headers, message.encoded_parachain_headers = $util.newBuffer($util.base64.length(object.encoded_parachain_headers)), 0);
                else if (object.encoded_parachain_headers.length)
                    message.encoded_parachain_headers = object.encoded_parachain_headers;
            if (object.proof) {
                if (!Array.isArray(object.proof))
                    throw TypeError(".pruntime_rpc.CombinedHeadersToSync.proof: array expected");
                message.proof = [];
                for (let i = 0; i < object.proof.length; ++i)
                    if (typeof object.proof[i] === "string")
                        $util.base64.decode(object.proof[i], message.proof[i] = $util.newBuffer($util.base64.length(object.proof[i])), 0);
                    else if (object.proof[i].length)
                        message.proof[i] = object.proof[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a CombinedHeadersToSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @static
         * @param {pruntime_rpc.CombinedHeadersToSync} message CombinedHeadersToSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CombinedHeadersToSync.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.proof = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.encoded_relaychain_headers = "";
                else {
                    object.encoded_relaychain_headers = [];
                    if (options.bytes !== Array)
                        object.encoded_relaychain_headers = $util.newBuffer(object.encoded_relaychain_headers);
                }
                if (options.bytes === String)
                    object.encoded_parachain_headers = "";
                else {
                    object.encoded_parachain_headers = [];
                    if (options.bytes !== Array)
                        object.encoded_parachain_headers = $util.newBuffer(object.encoded_parachain_headers);
                }
            }
            if (message.encoded_relaychain_headers != null && message.hasOwnProperty("encoded_relaychain_headers"))
                object.encoded_relaychain_headers = options.bytes === String ? $util.base64.encode(message.encoded_relaychain_headers, 0, message.encoded_relaychain_headers.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_relaychain_headers) : message.encoded_relaychain_headers;
            if (message.authority_set_change != null && message.hasOwnProperty("authority_set_change")) {
                object.authority_set_change = options.bytes === String ? $util.base64.encode(message.authority_set_change, 0, message.authority_set_change.length) : options.bytes === Array ? Array.prototype.slice.call(message.authority_set_change) : message.authority_set_change;
                if (options.oneofs)
                    object._authority_set_change = "authority_set_change";
            }
            if (message.encoded_parachain_headers != null && message.hasOwnProperty("encoded_parachain_headers"))
                object.encoded_parachain_headers = options.bytes === String ? $util.base64.encode(message.encoded_parachain_headers, 0, message.encoded_parachain_headers.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_parachain_headers) : message.encoded_parachain_headers;
            if (message.proof && message.proof.length) {
                object.proof = [];
                for (let j = 0; j < message.proof.length; ++j)
                    object.proof[j] = options.bytes === String ? $util.base64.encode(message.proof[j], 0, message.proof[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proof[j]) : message.proof[j];
            }
            return object;
        };

        /**
         * Converts this CombinedHeadersToSync to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.CombinedHeadersToSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CombinedHeadersToSync.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CombinedHeadersToSync;
    })();

    pruntime_rpc.HeadersSyncedTo = (function() {

        /**
         * Properties of a HeadersSyncedTo.
         * @memberof pruntime_rpc
         * @interface IHeadersSyncedTo
         * @property {number|null} [relaychain_synced_to] HeadersSyncedTo relaychain_synced_to
         * @property {number|null} [parachain_synced_to] HeadersSyncedTo parachain_synced_to
         */

        /**
         * Constructs a new HeadersSyncedTo.
         * @memberof pruntime_rpc
         * @classdesc Represents a HeadersSyncedTo.
         * @implements IHeadersSyncedTo
         * @constructor
         * @param {pruntime_rpc.IHeadersSyncedTo=} [properties] Properties to set
         */
        function HeadersSyncedTo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeadersSyncedTo relaychain_synced_to.
         * @member {number} relaychain_synced_to
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @instance
         */
        HeadersSyncedTo.prototype.relaychain_synced_to = 0;

        /**
         * HeadersSyncedTo parachain_synced_to.
         * @member {number} parachain_synced_to
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @instance
         */
        HeadersSyncedTo.prototype.parachain_synced_to = 0;

        /**
         * Creates a new HeadersSyncedTo instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {pruntime_rpc.IHeadersSyncedTo=} [properties] Properties to set
         * @returns {pruntime_rpc.HeadersSyncedTo} HeadersSyncedTo instance
         */
        HeadersSyncedTo.create = function create(properties) {
            return new HeadersSyncedTo(properties);
        };

        /**
         * Encodes the specified HeadersSyncedTo message. Does not implicitly {@link pruntime_rpc.HeadersSyncedTo.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {pruntime_rpc.IHeadersSyncedTo} message HeadersSyncedTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadersSyncedTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.relaychain_synced_to != null && Object.hasOwnProperty.call(message, "relaychain_synced_to"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.relaychain_synced_to);
            if (message.parachain_synced_to != null && Object.hasOwnProperty.call(message, "parachain_synced_to"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.parachain_synced_to);
            return writer;
        };

        /**
         * Encodes the specified HeadersSyncedTo message, length delimited. Does not implicitly {@link pruntime_rpc.HeadersSyncedTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {pruntime_rpc.IHeadersSyncedTo} message HeadersSyncedTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeadersSyncedTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeadersSyncedTo message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.HeadersSyncedTo} HeadersSyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadersSyncedTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.HeadersSyncedTo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.relaychain_synced_to = reader.uint32();
                    break;
                case 2:
                    message.parachain_synced_to = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeadersSyncedTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.HeadersSyncedTo} HeadersSyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeadersSyncedTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeadersSyncedTo message.
         * @function verify
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeadersSyncedTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.relaychain_synced_to != null && message.hasOwnProperty("relaychain_synced_to"))
                if (!$util.isInteger(message.relaychain_synced_to))
                    return "relaychain_synced_to: integer expected";
            if (message.parachain_synced_to != null && message.hasOwnProperty("parachain_synced_to"))
                if (!$util.isInteger(message.parachain_synced_to))
                    return "parachain_synced_to: integer expected";
            return null;
        };

        /**
         * Creates a HeadersSyncedTo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.HeadersSyncedTo} HeadersSyncedTo
         */
        HeadersSyncedTo.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.HeadersSyncedTo)
                return object;
            let message = new $root.pruntime_rpc.HeadersSyncedTo();
            if (object.relaychain_synced_to != null)
                message.relaychain_synced_to = object.relaychain_synced_to >>> 0;
            if (object.parachain_synced_to != null)
                message.parachain_synced_to = object.parachain_synced_to >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a HeadersSyncedTo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @static
         * @param {pruntime_rpc.HeadersSyncedTo} message HeadersSyncedTo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeadersSyncedTo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.relaychain_synced_to = 0;
                object.parachain_synced_to = 0;
            }
            if (message.relaychain_synced_to != null && message.hasOwnProperty("relaychain_synced_to"))
                object.relaychain_synced_to = message.relaychain_synced_to;
            if (message.parachain_synced_to != null && message.hasOwnProperty("parachain_synced_to"))
                object.parachain_synced_to = message.parachain_synced_to;
            return object;
        };

        /**
         * Converts this HeadersSyncedTo to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.HeadersSyncedTo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeadersSyncedTo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeadersSyncedTo;
    })();

    pruntime_rpc.Blocks = (function() {

        /**
         * Properties of a Blocks.
         * @memberof pruntime_rpc
         * @interface IBlocks
         * @property {Uint8Array|null} [encoded_blocks] Blocks encoded_blocks
         */

        /**
         * Constructs a new Blocks.
         * @memberof pruntime_rpc
         * @classdesc Represents a Blocks.
         * @implements IBlocks
         * @constructor
         * @param {pruntime_rpc.IBlocks=} [properties] Properties to set
         */
        function Blocks(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Blocks encoded_blocks.
         * @member {Uint8Array} encoded_blocks
         * @memberof pruntime_rpc.Blocks
         * @instance
         */
        Blocks.prototype.encoded_blocks = $util.newBuffer([]);

        /**
         * Creates a new Blocks instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {pruntime_rpc.IBlocks=} [properties] Properties to set
         * @returns {pruntime_rpc.Blocks} Blocks instance
         */
        Blocks.create = function create(properties) {
            return new Blocks(properties);
        };

        /**
         * Encodes the specified Blocks message. Does not implicitly {@link pruntime_rpc.Blocks.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {pruntime_rpc.IBlocks} message Blocks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Blocks.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_blocks != null && Object.hasOwnProperty.call(message, "encoded_blocks"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_blocks);
            return writer;
        };

        /**
         * Encodes the specified Blocks message, length delimited. Does not implicitly {@link pruntime_rpc.Blocks.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {pruntime_rpc.IBlocks} message Blocks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Blocks.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Blocks message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.Blocks} Blocks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Blocks.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.Blocks();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_blocks = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Blocks message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.Blocks} Blocks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Blocks.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Blocks message.
         * @function verify
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Blocks.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encoded_blocks != null && message.hasOwnProperty("encoded_blocks"))
                if (!(message.encoded_blocks && typeof message.encoded_blocks.length === "number" || $util.isString(message.encoded_blocks)))
                    return "encoded_blocks: buffer expected";
            return null;
        };

        /**
         * Creates a Blocks message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.Blocks} Blocks
         */
        Blocks.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.Blocks)
                return object;
            let message = new $root.pruntime_rpc.Blocks();
            if (object.encoded_blocks != null)
                if (typeof object.encoded_blocks === "string")
                    $util.base64.decode(object.encoded_blocks, message.encoded_blocks = $util.newBuffer($util.base64.length(object.encoded_blocks)), 0);
                else if (object.encoded_blocks.length)
                    message.encoded_blocks = object.encoded_blocks;
            return message;
        };

        /**
         * Creates a plain object from a Blocks message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.Blocks
         * @static
         * @param {pruntime_rpc.Blocks} message Blocks
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Blocks.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.encoded_blocks = "";
                else {
                    object.encoded_blocks = [];
                    if (options.bytes !== Array)
                        object.encoded_blocks = $util.newBuffer(object.encoded_blocks);
                }
            if (message.encoded_blocks != null && message.hasOwnProperty("encoded_blocks"))
                object.encoded_blocks = options.bytes === String ? $util.base64.encode(message.encoded_blocks, 0, message.encoded_blocks.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_blocks) : message.encoded_blocks;
            return object;
        };

        /**
         * Converts this Blocks to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.Blocks
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Blocks.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Blocks;
    })();

    pruntime_rpc.InitRuntimeRequest = (function() {

        /**
         * Properties of an InitRuntimeRequest.
         * @memberof pruntime_rpc
         * @interface IInitRuntimeRequest
         * @property {boolean|null} [skip_ra] InitRuntimeRequest skip_ra
         * @property {Uint8Array|null} [encoded_genesis_info] InitRuntimeRequest encoded_genesis_info
         * @property {Uint8Array|null} [debug_set_key] InitRuntimeRequest debug_set_key
         * @property {Uint8Array|null} [encoded_genesis_state] InitRuntimeRequest encoded_genesis_state
         * @property {Uint8Array|null} [encoded_operator] InitRuntimeRequest encoded_operator
         * @property {boolean|null} [is_parachain] InitRuntimeRequest is_parachain
         */

        /**
         * Constructs a new InitRuntimeRequest.
         * @memberof pruntime_rpc
         * @classdesc Represents an InitRuntimeRequest.
         * @implements IInitRuntimeRequest
         * @constructor
         * @param {pruntime_rpc.IInitRuntimeRequest=} [properties] Properties to set
         */
        function InitRuntimeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitRuntimeRequest skip_ra.
         * @member {boolean} skip_ra
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        InitRuntimeRequest.prototype.skip_ra = false;

        /**
         * InitRuntimeRequest encoded_genesis_info.
         * @member {Uint8Array} encoded_genesis_info
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        InitRuntimeRequest.prototype.encoded_genesis_info = $util.newBuffer([]);

        /**
         * InitRuntimeRequest debug_set_key.
         * @member {Uint8Array|null|undefined} debug_set_key
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        InitRuntimeRequest.prototype.debug_set_key = null;

        /**
         * InitRuntimeRequest encoded_genesis_state.
         * @member {Uint8Array} encoded_genesis_state
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        InitRuntimeRequest.prototype.encoded_genesis_state = $util.newBuffer([]);

        /**
         * InitRuntimeRequest encoded_operator.
         * @member {Uint8Array|null|undefined} encoded_operator
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        InitRuntimeRequest.prototype.encoded_operator = null;

        /**
         * InitRuntimeRequest is_parachain.
         * @member {boolean} is_parachain
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        InitRuntimeRequest.prototype.is_parachain = false;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * InitRuntimeRequest _debug_set_key.
         * @member {"debug_set_key"|undefined} _debug_set_key
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        Object.defineProperty(InitRuntimeRequest.prototype, "_debug_set_key", {
            get: $util.oneOfGetter($oneOfFields = ["debug_set_key"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitRuntimeRequest _encoded_operator.
         * @member {"encoded_operator"|undefined} _encoded_operator
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         */
        Object.defineProperty(InitRuntimeRequest.prototype, "_encoded_operator", {
            get: $util.oneOfGetter($oneOfFields = ["encoded_operator"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new InitRuntimeRequest instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {pruntime_rpc.IInitRuntimeRequest=} [properties] Properties to set
         * @returns {pruntime_rpc.InitRuntimeRequest} InitRuntimeRequest instance
         */
        InitRuntimeRequest.create = function create(properties) {
            return new InitRuntimeRequest(properties);
        };

        /**
         * Encodes the specified InitRuntimeRequest message. Does not implicitly {@link pruntime_rpc.InitRuntimeRequest.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {pruntime_rpc.IInitRuntimeRequest} message InitRuntimeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitRuntimeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skip_ra != null && Object.hasOwnProperty.call(message, "skip_ra"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.skip_ra);
            if (message.encoded_genesis_info != null && Object.hasOwnProperty.call(message, "encoded_genesis_info"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.encoded_genesis_info);
            if (message.debug_set_key != null && Object.hasOwnProperty.call(message, "debug_set_key"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.debug_set_key);
            if (message.encoded_genesis_state != null && Object.hasOwnProperty.call(message, "encoded_genesis_state"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.encoded_genesis_state);
            if (message.encoded_operator != null && Object.hasOwnProperty.call(message, "encoded_operator"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.encoded_operator);
            if (message.is_parachain != null && Object.hasOwnProperty.call(message, "is_parachain"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_parachain);
            return writer;
        };

        /**
         * Encodes the specified InitRuntimeRequest message, length delimited. Does not implicitly {@link pruntime_rpc.InitRuntimeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {pruntime_rpc.IInitRuntimeRequest} message InitRuntimeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitRuntimeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitRuntimeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.InitRuntimeRequest} InitRuntimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitRuntimeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.InitRuntimeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.skip_ra = reader.bool();
                    break;
                case 2:
                    message.encoded_genesis_info = reader.bytes();
                    break;
                case 3:
                    message.debug_set_key = reader.bytes();
                    break;
                case 4:
                    message.encoded_genesis_state = reader.bytes();
                    break;
                case 5:
                    message.encoded_operator = reader.bytes();
                    break;
                case 6:
                    message.is_parachain = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitRuntimeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.InitRuntimeRequest} InitRuntimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitRuntimeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitRuntimeRequest message.
         * @function verify
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitRuntimeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.skip_ra != null && message.hasOwnProperty("skip_ra"))
                if (typeof message.skip_ra !== "boolean")
                    return "skip_ra: boolean expected";
            if (message.encoded_genesis_info != null && message.hasOwnProperty("encoded_genesis_info"))
                if (!(message.encoded_genesis_info && typeof message.encoded_genesis_info.length === "number" || $util.isString(message.encoded_genesis_info)))
                    return "encoded_genesis_info: buffer expected";
            if (message.debug_set_key != null && message.hasOwnProperty("debug_set_key")) {
                properties._debug_set_key = 1;
                if (!(message.debug_set_key && typeof message.debug_set_key.length === "number" || $util.isString(message.debug_set_key)))
                    return "debug_set_key: buffer expected";
            }
            if (message.encoded_genesis_state != null && message.hasOwnProperty("encoded_genesis_state"))
                if (!(message.encoded_genesis_state && typeof message.encoded_genesis_state.length === "number" || $util.isString(message.encoded_genesis_state)))
                    return "encoded_genesis_state: buffer expected";
            if (message.encoded_operator != null && message.hasOwnProperty("encoded_operator")) {
                properties._encoded_operator = 1;
                if (!(message.encoded_operator && typeof message.encoded_operator.length === "number" || $util.isString(message.encoded_operator)))
                    return "encoded_operator: buffer expected";
            }
            if (message.is_parachain != null && message.hasOwnProperty("is_parachain"))
                if (typeof message.is_parachain !== "boolean")
                    return "is_parachain: boolean expected";
            return null;
        };

        /**
         * Creates an InitRuntimeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.InitRuntimeRequest} InitRuntimeRequest
         */
        InitRuntimeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.InitRuntimeRequest)
                return object;
            let message = new $root.pruntime_rpc.InitRuntimeRequest();
            if (object.skip_ra != null)
                message.skip_ra = Boolean(object.skip_ra);
            if (object.encoded_genesis_info != null)
                if (typeof object.encoded_genesis_info === "string")
                    $util.base64.decode(object.encoded_genesis_info, message.encoded_genesis_info = $util.newBuffer($util.base64.length(object.encoded_genesis_info)), 0);
                else if (object.encoded_genesis_info.length)
                    message.encoded_genesis_info = object.encoded_genesis_info;
            if (object.debug_set_key != null)
                if (typeof object.debug_set_key === "string")
                    $util.base64.decode(object.debug_set_key, message.debug_set_key = $util.newBuffer($util.base64.length(object.debug_set_key)), 0);
                else if (object.debug_set_key.length)
                    message.debug_set_key = object.debug_set_key;
            if (object.encoded_genesis_state != null)
                if (typeof object.encoded_genesis_state === "string")
                    $util.base64.decode(object.encoded_genesis_state, message.encoded_genesis_state = $util.newBuffer($util.base64.length(object.encoded_genesis_state)), 0);
                else if (object.encoded_genesis_state.length)
                    message.encoded_genesis_state = object.encoded_genesis_state;
            if (object.encoded_operator != null)
                if (typeof object.encoded_operator === "string")
                    $util.base64.decode(object.encoded_operator, message.encoded_operator = $util.newBuffer($util.base64.length(object.encoded_operator)), 0);
                else if (object.encoded_operator.length)
                    message.encoded_operator = object.encoded_operator;
            if (object.is_parachain != null)
                message.is_parachain = Boolean(object.is_parachain);
            return message;
        };

        /**
         * Creates a plain object from an InitRuntimeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @static
         * @param {pruntime_rpc.InitRuntimeRequest} message InitRuntimeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitRuntimeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.skip_ra = false;
                if (options.bytes === String)
                    object.encoded_genesis_info = "";
                else {
                    object.encoded_genesis_info = [];
                    if (options.bytes !== Array)
                        object.encoded_genesis_info = $util.newBuffer(object.encoded_genesis_info);
                }
                if (options.bytes === String)
                    object.encoded_genesis_state = "";
                else {
                    object.encoded_genesis_state = [];
                    if (options.bytes !== Array)
                        object.encoded_genesis_state = $util.newBuffer(object.encoded_genesis_state);
                }
                object.is_parachain = false;
            }
            if (message.skip_ra != null && message.hasOwnProperty("skip_ra"))
                object.skip_ra = message.skip_ra;
            if (message.encoded_genesis_info != null && message.hasOwnProperty("encoded_genesis_info"))
                object.encoded_genesis_info = options.bytes === String ? $util.base64.encode(message.encoded_genesis_info, 0, message.encoded_genesis_info.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_genesis_info) : message.encoded_genesis_info;
            if (message.debug_set_key != null && message.hasOwnProperty("debug_set_key")) {
                object.debug_set_key = options.bytes === String ? $util.base64.encode(message.debug_set_key, 0, message.debug_set_key.length) : options.bytes === Array ? Array.prototype.slice.call(message.debug_set_key) : message.debug_set_key;
                if (options.oneofs)
                    object._debug_set_key = "debug_set_key";
            }
            if (message.encoded_genesis_state != null && message.hasOwnProperty("encoded_genesis_state"))
                object.encoded_genesis_state = options.bytes === String ? $util.base64.encode(message.encoded_genesis_state, 0, message.encoded_genesis_state.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_genesis_state) : message.encoded_genesis_state;
            if (message.encoded_operator != null && message.hasOwnProperty("encoded_operator")) {
                object.encoded_operator = options.bytes === String ? $util.base64.encode(message.encoded_operator, 0, message.encoded_operator.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_operator) : message.encoded_operator;
                if (options.oneofs)
                    object._encoded_operator = "encoded_operator";
            }
            if (message.is_parachain != null && message.hasOwnProperty("is_parachain"))
                object.is_parachain = message.is_parachain;
            return object;
        };

        /**
         * Converts this InitRuntimeRequest to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.InitRuntimeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitRuntimeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitRuntimeRequest;
    })();

    pruntime_rpc.InitRuntimeResponse = (function() {

        /**
         * Properties of an InitRuntimeResponse.
         * @memberof pruntime_rpc
         * @interface IInitRuntimeResponse
         * @property {Uint8Array|null} [encoded_runtime_info] InitRuntimeResponse encoded_runtime_info
         * @property {Uint8Array|null} [encoded_genesis_block_hash] InitRuntimeResponse encoded_genesis_block_hash
         * @property {Uint8Array|null} [encoded_public_key] InitRuntimeResponse encoded_public_key
         * @property {Uint8Array|null} [encoded_ecdh_public_key] InitRuntimeResponse encoded_ecdh_public_key
         * @property {pruntime_rpc.IAttestation|null} [attestation] InitRuntimeResponse attestation
         */

        /**
         * Constructs a new InitRuntimeResponse.
         * @memberof pruntime_rpc
         * @classdesc Represents an InitRuntimeResponse.
         * @implements IInitRuntimeResponse
         * @constructor
         * @param {pruntime_rpc.IInitRuntimeResponse=} [properties] Properties to set
         */
        function InitRuntimeResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitRuntimeResponse encoded_runtime_info.
         * @member {Uint8Array} encoded_runtime_info
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @instance
         */
        InitRuntimeResponse.prototype.encoded_runtime_info = $util.newBuffer([]);

        /**
         * InitRuntimeResponse encoded_genesis_block_hash.
         * @member {Uint8Array} encoded_genesis_block_hash
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @instance
         */
        InitRuntimeResponse.prototype.encoded_genesis_block_hash = $util.newBuffer([]);

        /**
         * InitRuntimeResponse encoded_public_key.
         * @member {Uint8Array} encoded_public_key
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @instance
         */
        InitRuntimeResponse.prototype.encoded_public_key = $util.newBuffer([]);

        /**
         * InitRuntimeResponse encoded_ecdh_public_key.
         * @member {Uint8Array} encoded_ecdh_public_key
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @instance
         */
        InitRuntimeResponse.prototype.encoded_ecdh_public_key = $util.newBuffer([]);

        /**
         * InitRuntimeResponse attestation.
         * @member {pruntime_rpc.IAttestation|null|undefined} attestation
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @instance
         */
        InitRuntimeResponse.prototype.attestation = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * InitRuntimeResponse _attestation.
         * @member {"attestation"|undefined} _attestation
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @instance
         */
        Object.defineProperty(InitRuntimeResponse.prototype, "_attestation", {
            get: $util.oneOfGetter($oneOfFields = ["attestation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new InitRuntimeResponse instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {pruntime_rpc.IInitRuntimeResponse=} [properties] Properties to set
         * @returns {pruntime_rpc.InitRuntimeResponse} InitRuntimeResponse instance
         */
        InitRuntimeResponse.create = function create(properties) {
            return new InitRuntimeResponse(properties);
        };

        /**
         * Encodes the specified InitRuntimeResponse message. Does not implicitly {@link pruntime_rpc.InitRuntimeResponse.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {pruntime_rpc.IInitRuntimeResponse} message InitRuntimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitRuntimeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_runtime_info != null && Object.hasOwnProperty.call(message, "encoded_runtime_info"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_runtime_info);
            if (message.encoded_genesis_block_hash != null && Object.hasOwnProperty.call(message, "encoded_genesis_block_hash"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.encoded_genesis_block_hash);
            if (message.encoded_public_key != null && Object.hasOwnProperty.call(message, "encoded_public_key"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.encoded_public_key);
            if (message.encoded_ecdh_public_key != null && Object.hasOwnProperty.call(message, "encoded_ecdh_public_key"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.encoded_ecdh_public_key);
            if (message.attestation != null && Object.hasOwnProperty.call(message, "attestation"))
                $root.pruntime_rpc.Attestation.encode(message.attestation, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InitRuntimeResponse message, length delimited. Does not implicitly {@link pruntime_rpc.InitRuntimeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {pruntime_rpc.IInitRuntimeResponse} message InitRuntimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitRuntimeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitRuntimeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.InitRuntimeResponse} InitRuntimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitRuntimeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.InitRuntimeResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_runtime_info = reader.bytes();
                    break;
                case 2:
                    message.encoded_genesis_block_hash = reader.bytes();
                    break;
                case 3:
                    message.encoded_public_key = reader.bytes();
                    break;
                case 4:
                    message.encoded_ecdh_public_key = reader.bytes();
                    break;
                case 5:
                    message.attestation = $root.pruntime_rpc.Attestation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitRuntimeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.InitRuntimeResponse} InitRuntimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitRuntimeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitRuntimeResponse message.
         * @function verify
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitRuntimeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.encoded_runtime_info != null && message.hasOwnProperty("encoded_runtime_info"))
                if (!(message.encoded_runtime_info && typeof message.encoded_runtime_info.length === "number" || $util.isString(message.encoded_runtime_info)))
                    return "encoded_runtime_info: buffer expected";
            if (message.encoded_genesis_block_hash != null && message.hasOwnProperty("encoded_genesis_block_hash"))
                if (!(message.encoded_genesis_block_hash && typeof message.encoded_genesis_block_hash.length === "number" || $util.isString(message.encoded_genesis_block_hash)))
                    return "encoded_genesis_block_hash: buffer expected";
            if (message.encoded_public_key != null && message.hasOwnProperty("encoded_public_key"))
                if (!(message.encoded_public_key && typeof message.encoded_public_key.length === "number" || $util.isString(message.encoded_public_key)))
                    return "encoded_public_key: buffer expected";
            if (message.encoded_ecdh_public_key != null && message.hasOwnProperty("encoded_ecdh_public_key"))
                if (!(message.encoded_ecdh_public_key && typeof message.encoded_ecdh_public_key.length === "number" || $util.isString(message.encoded_ecdh_public_key)))
                    return "encoded_ecdh_public_key: buffer expected";
            if (message.attestation != null && message.hasOwnProperty("attestation")) {
                properties._attestation = 1;
                {
                    let error = $root.pruntime_rpc.Attestation.verify(message.attestation);
                    if (error)
                        return "attestation." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InitRuntimeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.InitRuntimeResponse} InitRuntimeResponse
         */
        InitRuntimeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.InitRuntimeResponse)
                return object;
            let message = new $root.pruntime_rpc.InitRuntimeResponse();
            if (object.encoded_runtime_info != null)
                if (typeof object.encoded_runtime_info === "string")
                    $util.base64.decode(object.encoded_runtime_info, message.encoded_runtime_info = $util.newBuffer($util.base64.length(object.encoded_runtime_info)), 0);
                else if (object.encoded_runtime_info.length)
                    message.encoded_runtime_info = object.encoded_runtime_info;
            if (object.encoded_genesis_block_hash != null)
                if (typeof object.encoded_genesis_block_hash === "string")
                    $util.base64.decode(object.encoded_genesis_block_hash, message.encoded_genesis_block_hash = $util.newBuffer($util.base64.length(object.encoded_genesis_block_hash)), 0);
                else if (object.encoded_genesis_block_hash.length)
                    message.encoded_genesis_block_hash = object.encoded_genesis_block_hash;
            if (object.encoded_public_key != null)
                if (typeof object.encoded_public_key === "string")
                    $util.base64.decode(object.encoded_public_key, message.encoded_public_key = $util.newBuffer($util.base64.length(object.encoded_public_key)), 0);
                else if (object.encoded_public_key.length)
                    message.encoded_public_key = object.encoded_public_key;
            if (object.encoded_ecdh_public_key != null)
                if (typeof object.encoded_ecdh_public_key === "string")
                    $util.base64.decode(object.encoded_ecdh_public_key, message.encoded_ecdh_public_key = $util.newBuffer($util.base64.length(object.encoded_ecdh_public_key)), 0);
                else if (object.encoded_ecdh_public_key.length)
                    message.encoded_ecdh_public_key = object.encoded_ecdh_public_key;
            if (object.attestation != null) {
                if (typeof object.attestation !== "object")
                    throw TypeError(".pruntime_rpc.InitRuntimeResponse.attestation: object expected");
                message.attestation = $root.pruntime_rpc.Attestation.fromObject(object.attestation);
            }
            return message;
        };

        /**
         * Creates a plain object from an InitRuntimeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @static
         * @param {pruntime_rpc.InitRuntimeResponse} message InitRuntimeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitRuntimeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.encoded_runtime_info = "";
                else {
                    object.encoded_runtime_info = [];
                    if (options.bytes !== Array)
                        object.encoded_runtime_info = $util.newBuffer(object.encoded_runtime_info);
                }
                if (options.bytes === String)
                    object.encoded_genesis_block_hash = "";
                else {
                    object.encoded_genesis_block_hash = [];
                    if (options.bytes !== Array)
                        object.encoded_genesis_block_hash = $util.newBuffer(object.encoded_genesis_block_hash);
                }
                if (options.bytes === String)
                    object.encoded_public_key = "";
                else {
                    object.encoded_public_key = [];
                    if (options.bytes !== Array)
                        object.encoded_public_key = $util.newBuffer(object.encoded_public_key);
                }
                if (options.bytes === String)
                    object.encoded_ecdh_public_key = "";
                else {
                    object.encoded_ecdh_public_key = [];
                    if (options.bytes !== Array)
                        object.encoded_ecdh_public_key = $util.newBuffer(object.encoded_ecdh_public_key);
                }
            }
            if (message.encoded_runtime_info != null && message.hasOwnProperty("encoded_runtime_info"))
                object.encoded_runtime_info = options.bytes === String ? $util.base64.encode(message.encoded_runtime_info, 0, message.encoded_runtime_info.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_runtime_info) : message.encoded_runtime_info;
            if (message.encoded_genesis_block_hash != null && message.hasOwnProperty("encoded_genesis_block_hash"))
                object.encoded_genesis_block_hash = options.bytes === String ? $util.base64.encode(message.encoded_genesis_block_hash, 0, message.encoded_genesis_block_hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_genesis_block_hash) : message.encoded_genesis_block_hash;
            if (message.encoded_public_key != null && message.hasOwnProperty("encoded_public_key"))
                object.encoded_public_key = options.bytes === String ? $util.base64.encode(message.encoded_public_key, 0, message.encoded_public_key.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_public_key) : message.encoded_public_key;
            if (message.encoded_ecdh_public_key != null && message.hasOwnProperty("encoded_ecdh_public_key"))
                object.encoded_ecdh_public_key = options.bytes === String ? $util.base64.encode(message.encoded_ecdh_public_key, 0, message.encoded_ecdh_public_key.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_ecdh_public_key) : message.encoded_ecdh_public_key;
            if (message.attestation != null && message.hasOwnProperty("attestation")) {
                object.attestation = $root.pruntime_rpc.Attestation.toObject(message.attestation, options);
                if (options.oneofs)
                    object._attestation = "attestation";
            }
            return object;
        };

        /**
         * Converts this InitRuntimeResponse to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.InitRuntimeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitRuntimeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitRuntimeResponse;
    })();

    pruntime_rpc.Attestation = (function() {

        /**
         * Properties of an Attestation.
         * @memberof pruntime_rpc
         * @interface IAttestation
         * @property {number|null} [version] Attestation version
         * @property {string|null} [provider] Attestation provider
         * @property {pruntime_rpc.IAttestationReport|null} [payload] Attestation payload
         * @property {number|Long|null} [timestamp] Attestation timestamp
         */

        /**
         * Constructs a new Attestation.
         * @memberof pruntime_rpc
         * @classdesc Represents an Attestation.
         * @implements IAttestation
         * @constructor
         * @param {pruntime_rpc.IAttestation=} [properties] Properties to set
         */
        function Attestation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Attestation version.
         * @member {number} version
         * @memberof pruntime_rpc.Attestation
         * @instance
         */
        Attestation.prototype.version = 0;

        /**
         * Attestation provider.
         * @member {string} provider
         * @memberof pruntime_rpc.Attestation
         * @instance
         */
        Attestation.prototype.provider = "";

        /**
         * Attestation payload.
         * @member {pruntime_rpc.IAttestationReport|null|undefined} payload
         * @memberof pruntime_rpc.Attestation
         * @instance
         */
        Attestation.prototype.payload = null;

        /**
         * Attestation timestamp.
         * @member {number|Long} timestamp
         * @memberof pruntime_rpc.Attestation
         * @instance
         */
        Attestation.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Attestation instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {pruntime_rpc.IAttestation=} [properties] Properties to set
         * @returns {pruntime_rpc.Attestation} Attestation instance
         */
        Attestation.create = function create(properties) {
            return new Attestation(properties);
        };

        /**
         * Encodes the specified Attestation message. Does not implicitly {@link pruntime_rpc.Attestation.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {pruntime_rpc.IAttestation} message Attestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attestation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.provider);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                $root.pruntime_rpc.AttestationReport.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified Attestation message, length delimited. Does not implicitly {@link pruntime_rpc.Attestation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {pruntime_rpc.IAttestation} message Attestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attestation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Attestation message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.Attestation} Attestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attestation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.Attestation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 2:
                    message.provider = reader.string();
                    break;
                case 3:
                    message.payload = $root.pruntime_rpc.AttestationReport.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Attestation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.Attestation} Attestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attestation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Attestation message.
         * @function verify
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Attestation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.provider != null && message.hasOwnProperty("provider"))
                if (!$util.isString(message.provider))
                    return "provider: string expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                let error = $root.pruntime_rpc.AttestationReport.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates an Attestation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.Attestation} Attestation
         */
        Attestation.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.Attestation)
                return object;
            let message = new $root.pruntime_rpc.Attestation();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.provider != null)
                message.provider = String(object.provider);
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".pruntime_rpc.Attestation.payload: object expected");
                message.payload = $root.pruntime_rpc.AttestationReport.fromObject(object.payload);
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an Attestation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.Attestation
         * @static
         * @param {pruntime_rpc.Attestation} message Attestation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Attestation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.version = 0;
                object.provider = "";
                object.payload = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.provider != null && message.hasOwnProperty("provider"))
                object.provider = message.provider;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.pruntime_rpc.AttestationReport.toObject(message.payload, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            return object;
        };

        /**
         * Converts this Attestation to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.Attestation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Attestation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Attestation;
    })();

    pruntime_rpc.AttestationReport = (function() {

        /**
         * Properties of an AttestationReport.
         * @memberof pruntime_rpc
         * @interface IAttestationReport
         * @property {string|null} [report] AttestationReport report
         * @property {Uint8Array|null} [signature] AttestationReport signature
         * @property {Uint8Array|null} [signing_cert] AttestationReport signing_cert
         */

        /**
         * Constructs a new AttestationReport.
         * @memberof pruntime_rpc
         * @classdesc Represents an AttestationReport.
         * @implements IAttestationReport
         * @constructor
         * @param {pruntime_rpc.IAttestationReport=} [properties] Properties to set
         */
        function AttestationReport(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttestationReport report.
         * @member {string} report
         * @memberof pruntime_rpc.AttestationReport
         * @instance
         */
        AttestationReport.prototype.report = "";

        /**
         * AttestationReport signature.
         * @member {Uint8Array} signature
         * @memberof pruntime_rpc.AttestationReport
         * @instance
         */
        AttestationReport.prototype.signature = $util.newBuffer([]);

        /**
         * AttestationReport signing_cert.
         * @member {Uint8Array} signing_cert
         * @memberof pruntime_rpc.AttestationReport
         * @instance
         */
        AttestationReport.prototype.signing_cert = $util.newBuffer([]);

        /**
         * Creates a new AttestationReport instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {pruntime_rpc.IAttestationReport=} [properties] Properties to set
         * @returns {pruntime_rpc.AttestationReport} AttestationReport instance
         */
        AttestationReport.create = function create(properties) {
            return new AttestationReport(properties);
        };

        /**
         * Encodes the specified AttestationReport message. Does not implicitly {@link pruntime_rpc.AttestationReport.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {pruntime_rpc.IAttestationReport} message AttestationReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttestationReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.report != null && Object.hasOwnProperty.call(message, "report"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.report);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            if (message.signing_cert != null && Object.hasOwnProperty.call(message, "signing_cert"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signing_cert);
            return writer;
        };

        /**
         * Encodes the specified AttestationReport message, length delimited. Does not implicitly {@link pruntime_rpc.AttestationReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {pruntime_rpc.IAttestationReport} message AttestationReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttestationReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttestationReport message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.AttestationReport} AttestationReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttestationReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.AttestationReport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.report = reader.string();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                case 3:
                    message.signing_cert = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttestationReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.AttestationReport} AttestationReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttestationReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttestationReport message.
         * @function verify
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttestationReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.report != null && message.hasOwnProperty("report"))
                if (!$util.isString(message.report))
                    return "report: string expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            if (message.signing_cert != null && message.hasOwnProperty("signing_cert"))
                if (!(message.signing_cert && typeof message.signing_cert.length === "number" || $util.isString(message.signing_cert)))
                    return "signing_cert: buffer expected";
            return null;
        };

        /**
         * Creates an AttestationReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.AttestationReport} AttestationReport
         */
        AttestationReport.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.AttestationReport)
                return object;
            let message = new $root.pruntime_rpc.AttestationReport();
            if (object.report != null)
                message.report = String(object.report);
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            if (object.signing_cert != null)
                if (typeof object.signing_cert === "string")
                    $util.base64.decode(object.signing_cert, message.signing_cert = $util.newBuffer($util.base64.length(object.signing_cert)), 0);
                else if (object.signing_cert.length)
                    message.signing_cert = object.signing_cert;
            return message;
        };

        /**
         * Creates a plain object from an AttestationReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.AttestationReport
         * @static
         * @param {pruntime_rpc.AttestationReport} message AttestationReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttestationReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.report = "";
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
                if (options.bytes === String)
                    object.signing_cert = "";
                else {
                    object.signing_cert = [];
                    if (options.bytes !== Array)
                        object.signing_cert = $util.newBuffer(object.signing_cert);
                }
            }
            if (message.report != null && message.hasOwnProperty("report"))
                object.report = message.report;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            if (message.signing_cert != null && message.hasOwnProperty("signing_cert"))
                object.signing_cert = options.bytes === String ? $util.base64.encode(message.signing_cert, 0, message.signing_cert.length) : options.bytes === Array ? Array.prototype.slice.call(message.signing_cert) : message.signing_cert;
            return object;
        };

        /**
         * Converts this AttestationReport to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.AttestationReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttestationReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttestationReport;
    })();

    pruntime_rpc.GetEgressMessagesResponse = (function() {

        /**
         * Properties of a GetEgressMessagesResponse.
         * @memberof pruntime_rpc
         * @interface IGetEgressMessagesResponse
         * @property {Uint8Array|null} [encoded_messages] GetEgressMessagesResponse encoded_messages
         */

        /**
         * Constructs a new GetEgressMessagesResponse.
         * @memberof pruntime_rpc
         * @classdesc Represents a GetEgressMessagesResponse.
         * @implements IGetEgressMessagesResponse
         * @constructor
         * @param {pruntime_rpc.IGetEgressMessagesResponse=} [properties] Properties to set
         */
        function GetEgressMessagesResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetEgressMessagesResponse encoded_messages.
         * @member {Uint8Array} encoded_messages
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @instance
         */
        GetEgressMessagesResponse.prototype.encoded_messages = $util.newBuffer([]);

        /**
         * Creates a new GetEgressMessagesResponse instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {pruntime_rpc.IGetEgressMessagesResponse=} [properties] Properties to set
         * @returns {pruntime_rpc.GetEgressMessagesResponse} GetEgressMessagesResponse instance
         */
        GetEgressMessagesResponse.create = function create(properties) {
            return new GetEgressMessagesResponse(properties);
        };

        /**
         * Encodes the specified GetEgressMessagesResponse message. Does not implicitly {@link pruntime_rpc.GetEgressMessagesResponse.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {pruntime_rpc.IGetEgressMessagesResponse} message GetEgressMessagesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEgressMessagesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_messages != null && Object.hasOwnProperty.call(message, "encoded_messages"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_messages);
            return writer;
        };

        /**
         * Encodes the specified GetEgressMessagesResponse message, length delimited. Does not implicitly {@link pruntime_rpc.GetEgressMessagesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {pruntime_rpc.IGetEgressMessagesResponse} message GetEgressMessagesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEgressMessagesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetEgressMessagesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.GetEgressMessagesResponse} GetEgressMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEgressMessagesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.GetEgressMessagesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_messages = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetEgressMessagesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.GetEgressMessagesResponse} GetEgressMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEgressMessagesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetEgressMessagesResponse message.
         * @function verify
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetEgressMessagesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encoded_messages != null && message.hasOwnProperty("encoded_messages"))
                if (!(message.encoded_messages && typeof message.encoded_messages.length === "number" || $util.isString(message.encoded_messages)))
                    return "encoded_messages: buffer expected";
            return null;
        };

        /**
         * Creates a GetEgressMessagesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.GetEgressMessagesResponse} GetEgressMessagesResponse
         */
        GetEgressMessagesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.GetEgressMessagesResponse)
                return object;
            let message = new $root.pruntime_rpc.GetEgressMessagesResponse();
            if (object.encoded_messages != null)
                if (typeof object.encoded_messages === "string")
                    $util.base64.decode(object.encoded_messages, message.encoded_messages = $util.newBuffer($util.base64.length(object.encoded_messages)), 0);
                else if (object.encoded_messages.length)
                    message.encoded_messages = object.encoded_messages;
            return message;
        };

        /**
         * Creates a plain object from a GetEgressMessagesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @static
         * @param {pruntime_rpc.GetEgressMessagesResponse} message GetEgressMessagesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetEgressMessagesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.encoded_messages = "";
                else {
                    object.encoded_messages = [];
                    if (options.bytes !== Array)
                        object.encoded_messages = $util.newBuffer(object.encoded_messages);
                }
            if (message.encoded_messages != null && message.hasOwnProperty("encoded_messages"))
                object.encoded_messages = options.bytes === String ? $util.base64.encode(message.encoded_messages, 0, message.encoded_messages.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_messages) : message.encoded_messages;
            return object;
        };

        /**
         * Converts this GetEgressMessagesResponse to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.GetEgressMessagesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetEgressMessagesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetEgressMessagesResponse;
    })();

    pruntime_rpc.ContractQueryRequest = (function() {

        /**
         * Properties of a ContractQueryRequest.
         * @memberof pruntime_rpc
         * @interface IContractQueryRequest
         * @property {Uint8Array|null} [encoded_encrypted_data] ContractQueryRequest encoded_encrypted_data
         * @property {pruntime_rpc.ISignature|null} [signature] ContractQueryRequest signature
         */

        /**
         * Constructs a new ContractQueryRequest.
         * @memberof pruntime_rpc
         * @classdesc Represents a ContractQueryRequest.
         * @implements IContractQueryRequest
         * @constructor
         * @param {pruntime_rpc.IContractQueryRequest=} [properties] Properties to set
         */
        function ContractQueryRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContractQueryRequest encoded_encrypted_data.
         * @member {Uint8Array} encoded_encrypted_data
         * @memberof pruntime_rpc.ContractQueryRequest
         * @instance
         */
        ContractQueryRequest.prototype.encoded_encrypted_data = $util.newBuffer([]);

        /**
         * ContractQueryRequest signature.
         * @member {pruntime_rpc.ISignature|null|undefined} signature
         * @memberof pruntime_rpc.ContractQueryRequest
         * @instance
         */
        ContractQueryRequest.prototype.signature = null;

        /**
         * Creates a new ContractQueryRequest instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {pruntime_rpc.IContractQueryRequest=} [properties] Properties to set
         * @returns {pruntime_rpc.ContractQueryRequest} ContractQueryRequest instance
         */
        ContractQueryRequest.create = function create(properties) {
            return new ContractQueryRequest(properties);
        };

        /**
         * Encodes the specified ContractQueryRequest message. Does not implicitly {@link pruntime_rpc.ContractQueryRequest.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {pruntime_rpc.IContractQueryRequest} message ContractQueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractQueryRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_encrypted_data != null && Object.hasOwnProperty.call(message, "encoded_encrypted_data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_encrypted_data);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                $root.pruntime_rpc.Signature.encode(message.signature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ContractQueryRequest message, length delimited. Does not implicitly {@link pruntime_rpc.ContractQueryRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {pruntime_rpc.IContractQueryRequest} message ContractQueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractQueryRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContractQueryRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.ContractQueryRequest} ContractQueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractQueryRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.ContractQueryRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_encrypted_data = reader.bytes();
                    break;
                case 2:
                    message.signature = $root.pruntime_rpc.Signature.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContractQueryRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.ContractQueryRequest} ContractQueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractQueryRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContractQueryRequest message.
         * @function verify
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContractQueryRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encoded_encrypted_data != null && message.hasOwnProperty("encoded_encrypted_data"))
                if (!(message.encoded_encrypted_data && typeof message.encoded_encrypted_data.length === "number" || $util.isString(message.encoded_encrypted_data)))
                    return "encoded_encrypted_data: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature")) {
                let error = $root.pruntime_rpc.Signature.verify(message.signature);
                if (error)
                    return "signature." + error;
            }
            return null;
        };

        /**
         * Creates a ContractQueryRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.ContractQueryRequest} ContractQueryRequest
         */
        ContractQueryRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.ContractQueryRequest)
                return object;
            let message = new $root.pruntime_rpc.ContractQueryRequest();
            if (object.encoded_encrypted_data != null)
                if (typeof object.encoded_encrypted_data === "string")
                    $util.base64.decode(object.encoded_encrypted_data, message.encoded_encrypted_data = $util.newBuffer($util.base64.length(object.encoded_encrypted_data)), 0);
                else if (object.encoded_encrypted_data.length)
                    message.encoded_encrypted_data = object.encoded_encrypted_data;
            if (object.signature != null) {
                if (typeof object.signature !== "object")
                    throw TypeError(".pruntime_rpc.ContractQueryRequest.signature: object expected");
                message.signature = $root.pruntime_rpc.Signature.fromObject(object.signature);
            }
            return message;
        };

        /**
         * Creates a plain object from a ContractQueryRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.ContractQueryRequest
         * @static
         * @param {pruntime_rpc.ContractQueryRequest} message ContractQueryRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContractQueryRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.encoded_encrypted_data = "";
                else {
                    object.encoded_encrypted_data = [];
                    if (options.bytes !== Array)
                        object.encoded_encrypted_data = $util.newBuffer(object.encoded_encrypted_data);
                }
                object.signature = null;
            }
            if (message.encoded_encrypted_data != null && message.hasOwnProperty("encoded_encrypted_data"))
                object.encoded_encrypted_data = options.bytes === String ? $util.base64.encode(message.encoded_encrypted_data, 0, message.encoded_encrypted_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_encrypted_data) : message.encoded_encrypted_data;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = $root.pruntime_rpc.Signature.toObject(message.signature, options);
            return object;
        };

        /**
         * Converts this ContractQueryRequest to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.ContractQueryRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContractQueryRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContractQueryRequest;
    })();

    pruntime_rpc.Signature = (function() {

        /**
         * Properties of a Signature.
         * @memberof pruntime_rpc
         * @interface ISignature
         * @property {pruntime_rpc.ICertificate|null} [signed_by] Signature signed_by
         * @property {pruntime_rpc.SignatureType|null} [signature_type] Signature signature_type
         * @property {Uint8Array|null} [signature] Signature signature
         */

        /**
         * Constructs a new Signature.
         * @memberof pruntime_rpc
         * @classdesc Represents a Signature.
         * @implements ISignature
         * @constructor
         * @param {pruntime_rpc.ISignature=} [properties] Properties to set
         */
        function Signature(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signature signed_by.
         * @member {pruntime_rpc.ICertificate|null|undefined} signed_by
         * @memberof pruntime_rpc.Signature
         * @instance
         */
        Signature.prototype.signed_by = null;

        /**
         * Signature signature_type.
         * @member {pruntime_rpc.SignatureType} signature_type
         * @memberof pruntime_rpc.Signature
         * @instance
         */
        Signature.prototype.signature_type = 0;

        /**
         * Signature signature.
         * @member {Uint8Array} signature
         * @memberof pruntime_rpc.Signature
         * @instance
         */
        Signature.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new Signature instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {pruntime_rpc.ISignature=} [properties] Properties to set
         * @returns {pruntime_rpc.Signature} Signature instance
         */
        Signature.create = function create(properties) {
            return new Signature(properties);
        };

        /**
         * Encodes the specified Signature message. Does not implicitly {@link pruntime_rpc.Signature.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {pruntime_rpc.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signed_by != null && Object.hasOwnProperty.call(message, "signed_by"))
                $root.pruntime_rpc.Certificate.encode(message.signed_by, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.signature_type != null && Object.hasOwnProperty.call(message, "signature_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.signature_type);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link pruntime_rpc.Signature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {pruntime_rpc.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.Signature();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signed_by = $root.pruntime_rpc.Certificate.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signature_type = reader.int32();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signature message.
         * @function verify
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signed_by != null && message.hasOwnProperty("signed_by")) {
                let error = $root.pruntime_rpc.Certificate.verify(message.signed_by);
                if (error)
                    return "signed_by." + error;
            }
            if (message.signature_type != null && message.hasOwnProperty("signature_type"))
                switch (message.signature_type) {
                default:
                    return "signature_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.Signature} Signature
         */
        Signature.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.Signature)
                return object;
            let message = new $root.pruntime_rpc.Signature();
            if (object.signed_by != null) {
                if (typeof object.signed_by !== "object")
                    throw TypeError(".pruntime_rpc.Signature.signed_by: object expected");
                message.signed_by = $root.pruntime_rpc.Certificate.fromObject(object.signed_by);
            }
            switch (object.signature_type) {
            case "Ed25519":
            case 0:
                message.signature_type = 0;
                break;
            case "Sr25519":
            case 1:
                message.signature_type = 1;
                break;
            case "Ecdsa":
            case 2:
                message.signature_type = 2;
                break;
            case "Ed25519WrapBytes":
            case 3:
                message.signature_type = 3;
                break;
            case "Sr25519WrapBytes":
            case 4:
                message.signature_type = 4;
                break;
            case "EcdsaWrapBytes":
            case 5:
                message.signature_type = 5;
                break;
            }
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.Signature
         * @static
         * @param {pruntime_rpc.Signature} message Signature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.signed_by = null;
                object.signature_type = options.enums === String ? "Ed25519" : 0;
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.signed_by != null && message.hasOwnProperty("signed_by"))
                object.signed_by = $root.pruntime_rpc.Certificate.toObject(message.signed_by, options);
            if (message.signature_type != null && message.hasOwnProperty("signature_type"))
                object.signature_type = options.enums === String ? $root.pruntime_rpc.SignatureType[message.signature_type] : message.signature_type;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this Signature to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.Signature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Signature;
    })();

    pruntime_rpc.Certificate = (function() {

        /**
         * Properties of a Certificate.
         * @memberof pruntime_rpc
         * @interface ICertificate
         * @property {Uint8Array|null} [encoded_body] Certificate encoded_body
         * @property {pruntime_rpc.ISignature|null} [signature] Certificate signature
         */

        /**
         * Constructs a new Certificate.
         * @memberof pruntime_rpc
         * @classdesc Represents a Certificate.
         * @implements ICertificate
         * @constructor
         * @param {pruntime_rpc.ICertificate=} [properties] Properties to set
         */
        function Certificate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Certificate encoded_body.
         * @member {Uint8Array} encoded_body
         * @memberof pruntime_rpc.Certificate
         * @instance
         */
        Certificate.prototype.encoded_body = $util.newBuffer([]);

        /**
         * Certificate signature.
         * @member {pruntime_rpc.ISignature|null|undefined} signature
         * @memberof pruntime_rpc.Certificate
         * @instance
         */
        Certificate.prototype.signature = null;

        /**
         * Creates a new Certificate instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {pruntime_rpc.ICertificate=} [properties] Properties to set
         * @returns {pruntime_rpc.Certificate} Certificate instance
         */
        Certificate.create = function create(properties) {
            return new Certificate(properties);
        };

        /**
         * Encodes the specified Certificate message. Does not implicitly {@link pruntime_rpc.Certificate.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {pruntime_rpc.ICertificate} message Certificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Certificate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_body != null && Object.hasOwnProperty.call(message, "encoded_body"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_body);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                $root.pruntime_rpc.Signature.encode(message.signature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Certificate message, length delimited. Does not implicitly {@link pruntime_rpc.Certificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {pruntime_rpc.ICertificate} message Certificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Certificate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Certificate message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.Certificate} Certificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Certificate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.Certificate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_body = reader.bytes();
                    break;
                case 2:
                    message.signature = $root.pruntime_rpc.Signature.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Certificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.Certificate} Certificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Certificate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Certificate message.
         * @function verify
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Certificate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encoded_body != null && message.hasOwnProperty("encoded_body"))
                if (!(message.encoded_body && typeof message.encoded_body.length === "number" || $util.isString(message.encoded_body)))
                    return "encoded_body: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature")) {
                let error = $root.pruntime_rpc.Signature.verify(message.signature);
                if (error)
                    return "signature." + error;
            }
            return null;
        };

        /**
         * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.Certificate} Certificate
         */
        Certificate.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.Certificate)
                return object;
            let message = new $root.pruntime_rpc.Certificate();
            if (object.encoded_body != null)
                if (typeof object.encoded_body === "string")
                    $util.base64.decode(object.encoded_body, message.encoded_body = $util.newBuffer($util.base64.length(object.encoded_body)), 0);
                else if (object.encoded_body.length)
                    message.encoded_body = object.encoded_body;
            if (object.signature != null) {
                if (typeof object.signature !== "object")
                    throw TypeError(".pruntime_rpc.Certificate.signature: object expected");
                message.signature = $root.pruntime_rpc.Signature.fromObject(object.signature);
            }
            return message;
        };

        /**
         * Creates a plain object from a Certificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.Certificate
         * @static
         * @param {pruntime_rpc.Certificate} message Certificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Certificate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.encoded_body = "";
                else {
                    object.encoded_body = [];
                    if (options.bytes !== Array)
                        object.encoded_body = $util.newBuffer(object.encoded_body);
                }
                object.signature = null;
            }
            if (message.encoded_body != null && message.hasOwnProperty("encoded_body"))
                object.encoded_body = options.bytes === String ? $util.base64.encode(message.encoded_body, 0, message.encoded_body.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_body) : message.encoded_body;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = $root.pruntime_rpc.Signature.toObject(message.signature, options);
            return object;
        };

        /**
         * Converts this Certificate to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.Certificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Certificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Certificate;
    })();

    /**
     * SignatureType enum.
     * @name pruntime_rpc.SignatureType
     * @enum {number}
     * @property {number} Ed25519=0 Ed25519 value
     * @property {number} Sr25519=1 Sr25519 value
     * @property {number} Ecdsa=2 Ecdsa value
     * @property {number} Ed25519WrapBytes=3 Ed25519WrapBytes value
     * @property {number} Sr25519WrapBytes=4 Sr25519WrapBytes value
     * @property {number} EcdsaWrapBytes=5 EcdsaWrapBytes value
     */
    pruntime_rpc.SignatureType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Ed25519"] = 0;
        values[valuesById[1] = "Sr25519"] = 1;
        values[valuesById[2] = "Ecdsa"] = 2;
        values[valuesById[3] = "Ed25519WrapBytes"] = 3;
        values[valuesById[4] = "Sr25519WrapBytes"] = 4;
        values[valuesById[5] = "EcdsaWrapBytes"] = 5;
        return values;
    })();

    pruntime_rpc.ContractQueryResponse = (function() {

        /**
         * Properties of a ContractQueryResponse.
         * @memberof pruntime_rpc
         * @interface IContractQueryResponse
         * @property {Uint8Array|null} [encoded_encrypted_data] ContractQueryResponse encoded_encrypted_data
         */

        /**
         * Constructs a new ContractQueryResponse.
         * @memberof pruntime_rpc
         * @classdesc Represents a ContractQueryResponse.
         * @implements IContractQueryResponse
         * @constructor
         * @param {pruntime_rpc.IContractQueryResponse=} [properties] Properties to set
         */
        function ContractQueryResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContractQueryResponse encoded_encrypted_data.
         * @member {Uint8Array} encoded_encrypted_data
         * @memberof pruntime_rpc.ContractQueryResponse
         * @instance
         */
        ContractQueryResponse.prototype.encoded_encrypted_data = $util.newBuffer([]);

        /**
         * Creates a new ContractQueryResponse instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {pruntime_rpc.IContractQueryResponse=} [properties] Properties to set
         * @returns {pruntime_rpc.ContractQueryResponse} ContractQueryResponse instance
         */
        ContractQueryResponse.create = function create(properties) {
            return new ContractQueryResponse(properties);
        };

        /**
         * Encodes the specified ContractQueryResponse message. Does not implicitly {@link pruntime_rpc.ContractQueryResponse.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {pruntime_rpc.IContractQueryResponse} message ContractQueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractQueryResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoded_encrypted_data != null && Object.hasOwnProperty.call(message, "encoded_encrypted_data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encoded_encrypted_data);
            return writer;
        };

        /**
         * Encodes the specified ContractQueryResponse message, length delimited. Does not implicitly {@link pruntime_rpc.ContractQueryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {pruntime_rpc.IContractQueryResponse} message ContractQueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContractQueryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.ContractQueryResponse} ContractQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractQueryResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.ContractQueryResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encoded_encrypted_data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContractQueryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.ContractQueryResponse} ContractQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractQueryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContractQueryResponse message.
         * @function verify
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContractQueryResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encoded_encrypted_data != null && message.hasOwnProperty("encoded_encrypted_data"))
                if (!(message.encoded_encrypted_data && typeof message.encoded_encrypted_data.length === "number" || $util.isString(message.encoded_encrypted_data)))
                    return "encoded_encrypted_data: buffer expected";
            return null;
        };

        /**
         * Creates a ContractQueryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.ContractQueryResponse} ContractQueryResponse
         */
        ContractQueryResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.ContractQueryResponse)
                return object;
            let message = new $root.pruntime_rpc.ContractQueryResponse();
            if (object.encoded_encrypted_data != null)
                if (typeof object.encoded_encrypted_data === "string")
                    $util.base64.decode(object.encoded_encrypted_data, message.encoded_encrypted_data = $util.newBuffer($util.base64.length(object.encoded_encrypted_data)), 0);
                else if (object.encoded_encrypted_data.length)
                    message.encoded_encrypted_data = object.encoded_encrypted_data;
            return message;
        };

        /**
         * Creates a plain object from a ContractQueryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.ContractQueryResponse
         * @static
         * @param {pruntime_rpc.ContractQueryResponse} message ContractQueryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContractQueryResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.encoded_encrypted_data = "";
                else {
                    object.encoded_encrypted_data = [];
                    if (options.bytes !== Array)
                        object.encoded_encrypted_data = $util.newBuffer(object.encoded_encrypted_data);
                }
            if (message.encoded_encrypted_data != null && message.hasOwnProperty("encoded_encrypted_data"))
                object.encoded_encrypted_data = options.bytes === String ? $util.base64.encode(message.encoded_encrypted_data, 0, message.encoded_encrypted_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.encoded_encrypted_data) : message.encoded_encrypted_data;
            return object;
        };

        /**
         * Converts this ContractQueryResponse to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.ContractQueryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContractQueryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContractQueryResponse;
    })();

    pruntime_rpc.GetWorkerStateRequest = (function() {

        /**
         * Properties of a GetWorkerStateRequest.
         * @memberof pruntime_rpc
         * @interface IGetWorkerStateRequest
         * @property {Uint8Array|null} [public_key] GetWorkerStateRequest public_key
         */

        /**
         * Constructs a new GetWorkerStateRequest.
         * @memberof pruntime_rpc
         * @classdesc Represents a GetWorkerStateRequest.
         * @implements IGetWorkerStateRequest
         * @constructor
         * @param {pruntime_rpc.IGetWorkerStateRequest=} [properties] Properties to set
         */
        function GetWorkerStateRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWorkerStateRequest public_key.
         * @member {Uint8Array} public_key
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @instance
         */
        GetWorkerStateRequest.prototype.public_key = $util.newBuffer([]);

        /**
         * Creates a new GetWorkerStateRequest instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {pruntime_rpc.IGetWorkerStateRequest=} [properties] Properties to set
         * @returns {pruntime_rpc.GetWorkerStateRequest} GetWorkerStateRequest instance
         */
        GetWorkerStateRequest.create = function create(properties) {
            return new GetWorkerStateRequest(properties);
        };

        /**
         * Encodes the specified GetWorkerStateRequest message. Does not implicitly {@link pruntime_rpc.GetWorkerStateRequest.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {pruntime_rpc.IGetWorkerStateRequest} message GetWorkerStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWorkerStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.public_key != null && Object.hasOwnProperty.call(message, "public_key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.public_key);
            return writer;
        };

        /**
         * Encodes the specified GetWorkerStateRequest message, length delimited. Does not implicitly {@link pruntime_rpc.GetWorkerStateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {pruntime_rpc.IGetWorkerStateRequest} message GetWorkerStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWorkerStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWorkerStateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.GetWorkerStateRequest} GetWorkerStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWorkerStateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.GetWorkerStateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.public_key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetWorkerStateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.GetWorkerStateRequest} GetWorkerStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWorkerStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWorkerStateRequest message.
         * @function verify
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWorkerStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.public_key != null && message.hasOwnProperty("public_key"))
                if (!(message.public_key && typeof message.public_key.length === "number" || $util.isString(message.public_key)))
                    return "public_key: buffer expected";
            return null;
        };

        /**
         * Creates a GetWorkerStateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.GetWorkerStateRequest} GetWorkerStateRequest
         */
        GetWorkerStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.GetWorkerStateRequest)
                return object;
            let message = new $root.pruntime_rpc.GetWorkerStateRequest();
            if (object.public_key != null)
                if (typeof object.public_key === "string")
                    $util.base64.decode(object.public_key, message.public_key = $util.newBuffer($util.base64.length(object.public_key)), 0);
                else if (object.public_key.length)
                    message.public_key = object.public_key;
            return message;
        };

        /**
         * Creates a plain object from a GetWorkerStateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @static
         * @param {pruntime_rpc.GetWorkerStateRequest} message GetWorkerStateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWorkerStateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.public_key = "";
                else {
                    object.public_key = [];
                    if (options.bytes !== Array)
                        object.public_key = $util.newBuffer(object.public_key);
                }
            if (message.public_key != null && message.hasOwnProperty("public_key"))
                object.public_key = options.bytes === String ? $util.base64.encode(message.public_key, 0, message.public_key.length) : options.bytes === Array ? Array.prototype.slice.call(message.public_key) : message.public_key;
            return object;
        };

        /**
         * Converts this GetWorkerStateRequest to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.GetWorkerStateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWorkerStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetWorkerStateRequest;
    })();

    pruntime_rpc.WorkerState = (function() {

        /**
         * Properties of a WorkerState.
         * @memberof pruntime_rpc
         * @interface IWorkerState
         * @property {boolean|null} [registered] WorkerState registered
         * @property {boolean|null} [unresponsive] WorkerState unresponsive
         * @property {pruntime_rpc.IBenchState|null} [bench_state] WorkerState bench_state
         * @property {pruntime_rpc.IMiningState|null} [mining_state] WorkerState mining_state
         * @property {Array.<number>|null} [waiting_heartbeats] WorkerState waiting_heartbeats
         * @property {number|null} [last_heartbeat_for_block] WorkerState last_heartbeat_for_block
         * @property {number|null} [last_heartbeat_at_block] WorkerState last_heartbeat_at_block
         * @property {pruntime_rpc.ResponsiveEvent|null} [last_gk_responsive_event] WorkerState last_gk_responsive_event
         * @property {number|null} [last_gk_responsive_event_at_block] WorkerState last_gk_responsive_event_at_block
         * @property {pruntime_rpc.ITokenomicInfo|null} [tokenomic_info] WorkerState tokenomic_info
         */

        /**
         * Constructs a new WorkerState.
         * @memberof pruntime_rpc
         * @classdesc Represents a WorkerState.
         * @implements IWorkerState
         * @constructor
         * @param {pruntime_rpc.IWorkerState=} [properties] Properties to set
         */
        function WorkerState(properties) {
            this.waiting_heartbeats = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkerState registered.
         * @member {boolean} registered
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.registered = false;

        /**
         * WorkerState unresponsive.
         * @member {boolean} unresponsive
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.unresponsive = false;

        /**
         * WorkerState bench_state.
         * @member {pruntime_rpc.IBenchState|null|undefined} bench_state
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.bench_state = null;

        /**
         * WorkerState mining_state.
         * @member {pruntime_rpc.IMiningState|null|undefined} mining_state
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.mining_state = null;

        /**
         * WorkerState waiting_heartbeats.
         * @member {Array.<number>} waiting_heartbeats
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.waiting_heartbeats = $util.emptyArray;

        /**
         * WorkerState last_heartbeat_for_block.
         * @member {number} last_heartbeat_for_block
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.last_heartbeat_for_block = 0;

        /**
         * WorkerState last_heartbeat_at_block.
         * @member {number} last_heartbeat_at_block
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.last_heartbeat_at_block = 0;

        /**
         * WorkerState last_gk_responsive_event.
         * @member {pruntime_rpc.ResponsiveEvent} last_gk_responsive_event
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.last_gk_responsive_event = 0;

        /**
         * WorkerState last_gk_responsive_event_at_block.
         * @member {number} last_gk_responsive_event_at_block
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.last_gk_responsive_event_at_block = 0;

        /**
         * WorkerState tokenomic_info.
         * @member {pruntime_rpc.ITokenomicInfo|null|undefined} tokenomic_info
         * @memberof pruntime_rpc.WorkerState
         * @instance
         */
        WorkerState.prototype.tokenomic_info = null;

        /**
         * Creates a new WorkerState instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {pruntime_rpc.IWorkerState=} [properties] Properties to set
         * @returns {pruntime_rpc.WorkerState} WorkerState instance
         */
        WorkerState.create = function create(properties) {
            return new WorkerState(properties);
        };

        /**
         * Encodes the specified WorkerState message. Does not implicitly {@link pruntime_rpc.WorkerState.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {pruntime_rpc.IWorkerState} message WorkerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.registered != null && Object.hasOwnProperty.call(message, "registered"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.registered);
            if (message.unresponsive != null && Object.hasOwnProperty.call(message, "unresponsive"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.unresponsive);
            if (message.bench_state != null && Object.hasOwnProperty.call(message, "bench_state"))
                $root.pruntime_rpc.BenchState.encode(message.bench_state, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.mining_state != null && Object.hasOwnProperty.call(message, "mining_state"))
                $root.pruntime_rpc.MiningState.encode(message.mining_state, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.waiting_heartbeats != null && message.waiting_heartbeats.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.waiting_heartbeats.length; ++i)
                    writer.uint32(message.waiting_heartbeats[i]);
                writer.ldelim();
            }
            if (message.last_heartbeat_for_block != null && Object.hasOwnProperty.call(message, "last_heartbeat_for_block"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.last_heartbeat_for_block);
            if (message.last_heartbeat_at_block != null && Object.hasOwnProperty.call(message, "last_heartbeat_at_block"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.last_heartbeat_at_block);
            if (message.last_gk_responsive_event != null && Object.hasOwnProperty.call(message, "last_gk_responsive_event"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.last_gk_responsive_event);
            if (message.last_gk_responsive_event_at_block != null && Object.hasOwnProperty.call(message, "last_gk_responsive_event_at_block"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.last_gk_responsive_event_at_block);
            if (message.tokenomic_info != null && Object.hasOwnProperty.call(message, "tokenomic_info"))
                $root.pruntime_rpc.TokenomicInfo.encode(message.tokenomic_info, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WorkerState message, length delimited. Does not implicitly {@link pruntime_rpc.WorkerState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {pruntime_rpc.IWorkerState} message WorkerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkerState message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.WorkerState} WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.WorkerState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.registered = reader.bool();
                    break;
                case 2:
                    message.unresponsive = reader.bool();
                    break;
                case 3:
                    message.bench_state = $root.pruntime_rpc.BenchState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mining_state = $root.pruntime_rpc.MiningState.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.waiting_heartbeats && message.waiting_heartbeats.length))
                        message.waiting_heartbeats = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.waiting_heartbeats.push(reader.uint32());
                    } else
                        message.waiting_heartbeats.push(reader.uint32());
                    break;
                case 6:
                    message.last_heartbeat_for_block = reader.uint32();
                    break;
                case 7:
                    message.last_heartbeat_at_block = reader.uint32();
                    break;
                case 8:
                    message.last_gk_responsive_event = reader.int32();
                    break;
                case 9:
                    message.last_gk_responsive_event_at_block = reader.uint32();
                    break;
                case 10:
                    message.tokenomic_info = $root.pruntime_rpc.TokenomicInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorkerState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.WorkerState} WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkerState message.
         * @function verify
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkerState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.registered != null && message.hasOwnProperty("registered"))
                if (typeof message.registered !== "boolean")
                    return "registered: boolean expected";
            if (message.unresponsive != null && message.hasOwnProperty("unresponsive"))
                if (typeof message.unresponsive !== "boolean")
                    return "unresponsive: boolean expected";
            if (message.bench_state != null && message.hasOwnProperty("bench_state")) {
                let error = $root.pruntime_rpc.BenchState.verify(message.bench_state);
                if (error)
                    return "bench_state." + error;
            }
            if (message.mining_state != null && message.hasOwnProperty("mining_state")) {
                let error = $root.pruntime_rpc.MiningState.verify(message.mining_state);
                if (error)
                    return "mining_state." + error;
            }
            if (message.waiting_heartbeats != null && message.hasOwnProperty("waiting_heartbeats")) {
                if (!Array.isArray(message.waiting_heartbeats))
                    return "waiting_heartbeats: array expected";
                for (let i = 0; i < message.waiting_heartbeats.length; ++i)
                    if (!$util.isInteger(message.waiting_heartbeats[i]))
                        return "waiting_heartbeats: integer[] expected";
            }
            if (message.last_heartbeat_for_block != null && message.hasOwnProperty("last_heartbeat_for_block"))
                if (!$util.isInteger(message.last_heartbeat_for_block))
                    return "last_heartbeat_for_block: integer expected";
            if (message.last_heartbeat_at_block != null && message.hasOwnProperty("last_heartbeat_at_block"))
                if (!$util.isInteger(message.last_heartbeat_at_block))
                    return "last_heartbeat_at_block: integer expected";
            if (message.last_gk_responsive_event != null && message.hasOwnProperty("last_gk_responsive_event"))
                switch (message.last_gk_responsive_event) {
                default:
                    return "last_gk_responsive_event: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.last_gk_responsive_event_at_block != null && message.hasOwnProperty("last_gk_responsive_event_at_block"))
                if (!$util.isInteger(message.last_gk_responsive_event_at_block))
                    return "last_gk_responsive_event_at_block: integer expected";
            if (message.tokenomic_info != null && message.hasOwnProperty("tokenomic_info")) {
                let error = $root.pruntime_rpc.TokenomicInfo.verify(message.tokenomic_info);
                if (error)
                    return "tokenomic_info." + error;
            }
            return null;
        };

        /**
         * Creates a WorkerState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.WorkerState} WorkerState
         */
        WorkerState.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.WorkerState)
                return object;
            let message = new $root.pruntime_rpc.WorkerState();
            if (object.registered != null)
                message.registered = Boolean(object.registered);
            if (object.unresponsive != null)
                message.unresponsive = Boolean(object.unresponsive);
            if (object.bench_state != null) {
                if (typeof object.bench_state !== "object")
                    throw TypeError(".pruntime_rpc.WorkerState.bench_state: object expected");
                message.bench_state = $root.pruntime_rpc.BenchState.fromObject(object.bench_state);
            }
            if (object.mining_state != null) {
                if (typeof object.mining_state !== "object")
                    throw TypeError(".pruntime_rpc.WorkerState.mining_state: object expected");
                message.mining_state = $root.pruntime_rpc.MiningState.fromObject(object.mining_state);
            }
            if (object.waiting_heartbeats) {
                if (!Array.isArray(object.waiting_heartbeats))
                    throw TypeError(".pruntime_rpc.WorkerState.waiting_heartbeats: array expected");
                message.waiting_heartbeats = [];
                for (let i = 0; i < object.waiting_heartbeats.length; ++i)
                    message.waiting_heartbeats[i] = object.waiting_heartbeats[i] >>> 0;
            }
            if (object.last_heartbeat_for_block != null)
                message.last_heartbeat_for_block = object.last_heartbeat_for_block >>> 0;
            if (object.last_heartbeat_at_block != null)
                message.last_heartbeat_at_block = object.last_heartbeat_at_block >>> 0;
            switch (object.last_gk_responsive_event) {
            case "NoEvent":
            case 0:
                message.last_gk_responsive_event = 0;
                break;
            case "EnterUnresponsive":
            case 1:
                message.last_gk_responsive_event = 1;
                break;
            case "ExitUnresponsive":
            case 2:
                message.last_gk_responsive_event = 2;
                break;
            }
            if (object.last_gk_responsive_event_at_block != null)
                message.last_gk_responsive_event_at_block = object.last_gk_responsive_event_at_block >>> 0;
            if (object.tokenomic_info != null) {
                if (typeof object.tokenomic_info !== "object")
                    throw TypeError(".pruntime_rpc.WorkerState.tokenomic_info: object expected");
                message.tokenomic_info = $root.pruntime_rpc.TokenomicInfo.fromObject(object.tokenomic_info);
            }
            return message;
        };

        /**
         * Creates a plain object from a WorkerState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.WorkerState
         * @static
         * @param {pruntime_rpc.WorkerState} message WorkerState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkerState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.waiting_heartbeats = [];
            if (options.defaults) {
                object.registered = false;
                object.unresponsive = false;
                object.bench_state = null;
                object.mining_state = null;
                object.last_heartbeat_for_block = 0;
                object.last_heartbeat_at_block = 0;
                object.last_gk_responsive_event = options.enums === String ? "NoEvent" : 0;
                object.last_gk_responsive_event_at_block = 0;
                object.tokenomic_info = null;
            }
            if (message.registered != null && message.hasOwnProperty("registered"))
                object.registered = message.registered;
            if (message.unresponsive != null && message.hasOwnProperty("unresponsive"))
                object.unresponsive = message.unresponsive;
            if (message.bench_state != null && message.hasOwnProperty("bench_state"))
                object.bench_state = $root.pruntime_rpc.BenchState.toObject(message.bench_state, options);
            if (message.mining_state != null && message.hasOwnProperty("mining_state"))
                object.mining_state = $root.pruntime_rpc.MiningState.toObject(message.mining_state, options);
            if (message.waiting_heartbeats && message.waiting_heartbeats.length) {
                object.waiting_heartbeats = [];
                for (let j = 0; j < message.waiting_heartbeats.length; ++j)
                    object.waiting_heartbeats[j] = message.waiting_heartbeats[j];
            }
            if (message.last_heartbeat_for_block != null && message.hasOwnProperty("last_heartbeat_for_block"))
                object.last_heartbeat_for_block = message.last_heartbeat_for_block;
            if (message.last_heartbeat_at_block != null && message.hasOwnProperty("last_heartbeat_at_block"))
                object.last_heartbeat_at_block = message.last_heartbeat_at_block;
            if (message.last_gk_responsive_event != null && message.hasOwnProperty("last_gk_responsive_event"))
                object.last_gk_responsive_event = options.enums === String ? $root.pruntime_rpc.ResponsiveEvent[message.last_gk_responsive_event] : message.last_gk_responsive_event;
            if (message.last_gk_responsive_event_at_block != null && message.hasOwnProperty("last_gk_responsive_event_at_block"))
                object.last_gk_responsive_event_at_block = message.last_gk_responsive_event_at_block;
            if (message.tokenomic_info != null && message.hasOwnProperty("tokenomic_info"))
                object.tokenomic_info = $root.pruntime_rpc.TokenomicInfo.toObject(message.tokenomic_info, options);
            return object;
        };

        /**
         * Converts this WorkerState to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.WorkerState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorkerState;
    })();

    pruntime_rpc.BenchState = (function() {

        /**
         * Properties of a BenchState.
         * @memberof pruntime_rpc
         * @interface IBenchState
         * @property {number|null} [start_block] BenchState start_block
         * @property {number|Long|null} [start_time] BenchState start_time
         * @property {number|null} [duration] BenchState duration
         */

        /**
         * Constructs a new BenchState.
         * @memberof pruntime_rpc
         * @classdesc Represents a BenchState.
         * @implements IBenchState
         * @constructor
         * @param {pruntime_rpc.IBenchState=} [properties] Properties to set
         */
        function BenchState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BenchState start_block.
         * @member {number} start_block
         * @memberof pruntime_rpc.BenchState
         * @instance
         */
        BenchState.prototype.start_block = 0;

        /**
         * BenchState start_time.
         * @member {number|Long} start_time
         * @memberof pruntime_rpc.BenchState
         * @instance
         */
        BenchState.prototype.start_time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BenchState duration.
         * @member {number} duration
         * @memberof pruntime_rpc.BenchState
         * @instance
         */
        BenchState.prototype.duration = 0;

        /**
         * Creates a new BenchState instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {pruntime_rpc.IBenchState=} [properties] Properties to set
         * @returns {pruntime_rpc.BenchState} BenchState instance
         */
        BenchState.create = function create(properties) {
            return new BenchState(properties);
        };

        /**
         * Encodes the specified BenchState message. Does not implicitly {@link pruntime_rpc.BenchState.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {pruntime_rpc.IBenchState} message BenchState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BenchState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start_block != null && Object.hasOwnProperty.call(message, "start_block"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.start_block);
            if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.start_time);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.duration);
            return writer;
        };

        /**
         * Encodes the specified BenchState message, length delimited. Does not implicitly {@link pruntime_rpc.BenchState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {pruntime_rpc.IBenchState} message BenchState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BenchState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BenchState message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.BenchState} BenchState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BenchState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.BenchState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.start_block = reader.uint32();
                    break;
                case 2:
                    message.start_time = reader.uint64();
                    break;
                case 4:
                    message.duration = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BenchState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.BenchState} BenchState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BenchState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BenchState message.
         * @function verify
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BenchState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start_block != null && message.hasOwnProperty("start_block"))
                if (!$util.isInteger(message.start_block))
                    return "start_block: integer expected";
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                if (!$util.isInteger(message.start_time) && !(message.start_time && $util.isInteger(message.start_time.low) && $util.isInteger(message.start_time.high)))
                    return "start_time: integer|Long expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            return null;
        };

        /**
         * Creates a BenchState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.BenchState} BenchState
         */
        BenchState.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.BenchState)
                return object;
            let message = new $root.pruntime_rpc.BenchState();
            if (object.start_block != null)
                message.start_block = object.start_block >>> 0;
            if (object.start_time != null)
                if ($util.Long)
                    (message.start_time = $util.Long.fromValue(object.start_time)).unsigned = true;
                else if (typeof object.start_time === "string")
                    message.start_time = parseInt(object.start_time, 10);
                else if (typeof object.start_time === "number")
                    message.start_time = object.start_time;
                else if (typeof object.start_time === "object")
                    message.start_time = new $util.LongBits(object.start_time.low >>> 0, object.start_time.high >>> 0).toNumber(true);
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BenchState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.BenchState
         * @static
         * @param {pruntime_rpc.BenchState} message BenchState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BenchState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.start_block = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.start_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start_time = options.longs === String ? "0" : 0;
                object.duration = 0;
            }
            if (message.start_block != null && message.hasOwnProperty("start_block"))
                object.start_block = message.start_block;
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                if (typeof message.start_time === "number")
                    object.start_time = options.longs === String ? String(message.start_time) : message.start_time;
                else
                    object.start_time = options.longs === String ? $util.Long.prototype.toString.call(message.start_time) : options.longs === Number ? new $util.LongBits(message.start_time.low >>> 0, message.start_time.high >>> 0).toNumber(true) : message.start_time;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            return object;
        };

        /**
         * Converts this BenchState to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.BenchState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BenchState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BenchState;
    })();

    pruntime_rpc.MiningState = (function() {

        /**
         * Properties of a MiningState.
         * @memberof pruntime_rpc
         * @interface IMiningState
         * @property {number|null} [session_id] MiningState session_id
         * @property {boolean|null} [paused] MiningState paused
         * @property {number|Long|null} [start_time] MiningState start_time
         */

        /**
         * Constructs a new MiningState.
         * @memberof pruntime_rpc
         * @classdesc Represents a MiningState.
         * @implements IMiningState
         * @constructor
         * @param {pruntime_rpc.IMiningState=} [properties] Properties to set
         */
        function MiningState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MiningState session_id.
         * @member {number} session_id
         * @memberof pruntime_rpc.MiningState
         * @instance
         */
        MiningState.prototype.session_id = 0;

        /**
         * MiningState paused.
         * @member {boolean} paused
         * @memberof pruntime_rpc.MiningState
         * @instance
         */
        MiningState.prototype.paused = false;

        /**
         * MiningState start_time.
         * @member {number|Long} start_time
         * @memberof pruntime_rpc.MiningState
         * @instance
         */
        MiningState.prototype.start_time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MiningState instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {pruntime_rpc.IMiningState=} [properties] Properties to set
         * @returns {pruntime_rpc.MiningState} MiningState instance
         */
        MiningState.create = function create(properties) {
            return new MiningState(properties);
        };

        /**
         * Encodes the specified MiningState message. Does not implicitly {@link pruntime_rpc.MiningState.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {pruntime_rpc.IMiningState} message MiningState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MiningState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.session_id);
            if (message.paused != null && Object.hasOwnProperty.call(message, "paused"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.paused);
            if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.start_time);
            return writer;
        };

        /**
         * Encodes the specified MiningState message, length delimited. Does not implicitly {@link pruntime_rpc.MiningState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {pruntime_rpc.IMiningState} message MiningState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MiningState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MiningState message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.MiningState} MiningState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MiningState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.MiningState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.uint32();
                    break;
                case 2:
                    message.paused = reader.bool();
                    break;
                case 3:
                    message.start_time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MiningState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.MiningState} MiningState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MiningState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MiningState message.
         * @function verify
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MiningState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id))
                    return "session_id: integer expected";
            if (message.paused != null && message.hasOwnProperty("paused"))
                if (typeof message.paused !== "boolean")
                    return "paused: boolean expected";
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                if (!$util.isInteger(message.start_time) && !(message.start_time && $util.isInteger(message.start_time.low) && $util.isInteger(message.start_time.high)))
                    return "start_time: integer|Long expected";
            return null;
        };

        /**
         * Creates a MiningState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.MiningState} MiningState
         */
        MiningState.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.MiningState)
                return object;
            let message = new $root.pruntime_rpc.MiningState();
            if (object.session_id != null)
                message.session_id = object.session_id >>> 0;
            if (object.paused != null)
                message.paused = Boolean(object.paused);
            if (object.start_time != null)
                if ($util.Long)
                    (message.start_time = $util.Long.fromValue(object.start_time)).unsigned = true;
                else if (typeof object.start_time === "string")
                    message.start_time = parseInt(object.start_time, 10);
                else if (typeof object.start_time === "number")
                    message.start_time = object.start_time;
                else if (typeof object.start_time === "object")
                    message.start_time = new $util.LongBits(object.start_time.low >>> 0, object.start_time.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MiningState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.MiningState
         * @static
         * @param {pruntime_rpc.MiningState} message MiningState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MiningState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.session_id = 0;
                object.paused = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.start_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start_time = options.longs === String ? "0" : 0;
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                object.session_id = message.session_id;
            if (message.paused != null && message.hasOwnProperty("paused"))
                object.paused = message.paused;
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                if (typeof message.start_time === "number")
                    object.start_time = options.longs === String ? String(message.start_time) : message.start_time;
                else
                    object.start_time = options.longs === String ? $util.Long.prototype.toString.call(message.start_time) : options.longs === Number ? new $util.LongBits(message.start_time.low >>> 0, message.start_time.high >>> 0).toNumber(true) : message.start_time;
            return object;
        };

        /**
         * Converts this MiningState to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.MiningState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MiningState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MiningState;
    })();

    pruntime_rpc.EchoMessage = (function() {

        /**
         * Properties of an EchoMessage.
         * @memberof pruntime_rpc
         * @interface IEchoMessage
         * @property {Uint8Array|null} [echo_msg] EchoMessage echo_msg
         */

        /**
         * Constructs a new EchoMessage.
         * @memberof pruntime_rpc
         * @classdesc Represents an EchoMessage.
         * @implements IEchoMessage
         * @constructor
         * @param {pruntime_rpc.IEchoMessage=} [properties] Properties to set
         */
        function EchoMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EchoMessage echo_msg.
         * @member {Uint8Array} echo_msg
         * @memberof pruntime_rpc.EchoMessage
         * @instance
         */
        EchoMessage.prototype.echo_msg = $util.newBuffer([]);

        /**
         * Creates a new EchoMessage instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {pruntime_rpc.IEchoMessage=} [properties] Properties to set
         * @returns {pruntime_rpc.EchoMessage} EchoMessage instance
         */
        EchoMessage.create = function create(properties) {
            return new EchoMessage(properties);
        };

        /**
         * Encodes the specified EchoMessage message. Does not implicitly {@link pruntime_rpc.EchoMessage.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {pruntime_rpc.IEchoMessage} message EchoMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.echo_msg != null && Object.hasOwnProperty.call(message, "echo_msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.echo_msg);
            return writer;
        };

        /**
         * Encodes the specified EchoMessage message, length delimited. Does not implicitly {@link pruntime_rpc.EchoMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {pruntime_rpc.IEchoMessage} message EchoMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EchoMessage message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.EchoMessage} EchoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.EchoMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.echo_msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EchoMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.EchoMessage} EchoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EchoMessage message.
         * @function verify
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EchoMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.echo_msg != null && message.hasOwnProperty("echo_msg"))
                if (!(message.echo_msg && typeof message.echo_msg.length === "number" || $util.isString(message.echo_msg)))
                    return "echo_msg: buffer expected";
            return null;
        };

        /**
         * Creates an EchoMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.EchoMessage} EchoMessage
         */
        EchoMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.EchoMessage)
                return object;
            let message = new $root.pruntime_rpc.EchoMessage();
            if (object.echo_msg != null)
                if (typeof object.echo_msg === "string")
                    $util.base64.decode(object.echo_msg, message.echo_msg = $util.newBuffer($util.base64.length(object.echo_msg)), 0);
                else if (object.echo_msg.length)
                    message.echo_msg = object.echo_msg;
            return message;
        };

        /**
         * Creates a plain object from an EchoMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.EchoMessage
         * @static
         * @param {pruntime_rpc.EchoMessage} message EchoMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EchoMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.echo_msg = "";
                else {
                    object.echo_msg = [];
                    if (options.bytes !== Array)
                        object.echo_msg = $util.newBuffer(object.echo_msg);
                }
            if (message.echo_msg != null && message.hasOwnProperty("echo_msg"))
                object.echo_msg = options.bytes === String ? $util.base64.encode(message.echo_msg, 0, message.echo_msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.echo_msg) : message.echo_msg;
            return object;
        };

        /**
         * Converts this EchoMessage to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.EchoMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EchoMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EchoMessage;
    })();

    /**
     * ResponsiveEvent enum.
     * @name pruntime_rpc.ResponsiveEvent
     * @enum {number}
     * @property {number} NoEvent=0 NoEvent value
     * @property {number} EnterUnresponsive=1 EnterUnresponsive value
     * @property {number} ExitUnresponsive=2 ExitUnresponsive value
     */
    pruntime_rpc.ResponsiveEvent = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NoEvent"] = 0;
        values[valuesById[1] = "EnterUnresponsive"] = 1;
        values[valuesById[2] = "ExitUnresponsive"] = 2;
        return values;
    })();

    pruntime_rpc.TokenomicInfo = (function() {

        /**
         * Properties of a TokenomicInfo.
         * @memberof pruntime_rpc
         * @interface ITokenomicInfo
         * @property {string|null} [v] TokenomicInfo v
         * @property {string|null} [v_init] TokenomicInfo v_init
         * @property {string|null} [payable] TokenomicInfo payable
         * @property {number|Long|null} [v_update_at] TokenomicInfo v_update_at
         * @property {number|null} [v_update_block] TokenomicInfo v_update_block
         * @property {number|Long|null} [iteration_last] TokenomicInfo iteration_last
         * @property {number|Long|null} [challenge_time_last] TokenomicInfo challenge_time_last
         * @property {string|null} [p_bench] TokenomicInfo p_bench
         * @property {string|null} [p_instant] TokenomicInfo p_instant
         * @property {number|null} [confidence_level] TokenomicInfo confidence_level
         * @property {string|null} [last_payout] TokenomicInfo last_payout
         * @property {number|null} [last_payout_at_block] TokenomicInfo last_payout_at_block
         * @property {string|null} [total_payout] TokenomicInfo total_payout
         * @property {number|null} [total_payout_count] TokenomicInfo total_payout_count
         * @property {string|null} [last_slash] TokenomicInfo last_slash
         * @property {number|null} [last_slash_at_block] TokenomicInfo last_slash_at_block
         * @property {string|null} [total_slash] TokenomicInfo total_slash
         * @property {number|null} [total_slash_count] TokenomicInfo total_slash_count
         */

        /**
         * Constructs a new TokenomicInfo.
         * @memberof pruntime_rpc
         * @classdesc Represents a TokenomicInfo.
         * @implements ITokenomicInfo
         * @constructor
         * @param {pruntime_rpc.ITokenomicInfo=} [properties] Properties to set
         */
        function TokenomicInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenomicInfo v.
         * @member {string} v
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.v = "";

        /**
         * TokenomicInfo v_init.
         * @member {string} v_init
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.v_init = "";

        /**
         * TokenomicInfo payable.
         * @member {string} payable
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.payable = "";

        /**
         * TokenomicInfo v_update_at.
         * @member {number|Long} v_update_at
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.v_update_at = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TokenomicInfo v_update_block.
         * @member {number} v_update_block
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.v_update_block = 0;

        /**
         * TokenomicInfo iteration_last.
         * @member {number|Long} iteration_last
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.iteration_last = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TokenomicInfo challenge_time_last.
         * @member {number|Long} challenge_time_last
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.challenge_time_last = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TokenomicInfo p_bench.
         * @member {string} p_bench
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.p_bench = "";

        /**
         * TokenomicInfo p_instant.
         * @member {string} p_instant
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.p_instant = "";

        /**
         * TokenomicInfo confidence_level.
         * @member {number} confidence_level
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.confidence_level = 0;

        /**
         * TokenomicInfo last_payout.
         * @member {string} last_payout
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.last_payout = "";

        /**
         * TokenomicInfo last_payout_at_block.
         * @member {number} last_payout_at_block
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.last_payout_at_block = 0;

        /**
         * TokenomicInfo total_payout.
         * @member {string} total_payout
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.total_payout = "";

        /**
         * TokenomicInfo total_payout_count.
         * @member {number} total_payout_count
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.total_payout_count = 0;

        /**
         * TokenomicInfo last_slash.
         * @member {string} last_slash
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.last_slash = "";

        /**
         * TokenomicInfo last_slash_at_block.
         * @member {number} last_slash_at_block
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.last_slash_at_block = 0;

        /**
         * TokenomicInfo total_slash.
         * @member {string} total_slash
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.total_slash = "";

        /**
         * TokenomicInfo total_slash_count.
         * @member {number} total_slash_count
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         */
        TokenomicInfo.prototype.total_slash_count = 0;

        /**
         * Creates a new TokenomicInfo instance using the specified properties.
         * @function create
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {pruntime_rpc.ITokenomicInfo=} [properties] Properties to set
         * @returns {pruntime_rpc.TokenomicInfo} TokenomicInfo instance
         */
        TokenomicInfo.create = function create(properties) {
            return new TokenomicInfo(properties);
        };

        /**
         * Encodes the specified TokenomicInfo message. Does not implicitly {@link pruntime_rpc.TokenomicInfo.verify|verify} messages.
         * @function encode
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {pruntime_rpc.ITokenomicInfo} message TokenomicInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenomicInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.v != null && Object.hasOwnProperty.call(message, "v"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.v);
            if (message.v_init != null && Object.hasOwnProperty.call(message, "v_init"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.v_init);
            if (message.v_update_at != null && Object.hasOwnProperty.call(message, "v_update_at"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.v_update_at);
            if (message.v_update_block != null && Object.hasOwnProperty.call(message, "v_update_block"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.v_update_block);
            if (message.iteration_last != null && Object.hasOwnProperty.call(message, "iteration_last"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.iteration_last);
            if (message.challenge_time_last != null && Object.hasOwnProperty.call(message, "challenge_time_last"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.challenge_time_last);
            if (message.p_bench != null && Object.hasOwnProperty.call(message, "p_bench"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.p_bench);
            if (message.p_instant != null && Object.hasOwnProperty.call(message, "p_instant"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.p_instant);
            if (message.confidence_level != null && Object.hasOwnProperty.call(message, "confidence_level"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.confidence_level);
            if (message.last_payout != null && Object.hasOwnProperty.call(message, "last_payout"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.last_payout);
            if (message.last_payout_at_block != null && Object.hasOwnProperty.call(message, "last_payout_at_block"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.last_payout_at_block);
            if (message.total_payout != null && Object.hasOwnProperty.call(message, "total_payout"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.total_payout);
            if (message.total_payout_count != null && Object.hasOwnProperty.call(message, "total_payout_count"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.total_payout_count);
            if (message.last_slash != null && Object.hasOwnProperty.call(message, "last_slash"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.last_slash);
            if (message.last_slash_at_block != null && Object.hasOwnProperty.call(message, "last_slash_at_block"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.last_slash_at_block);
            if (message.total_slash != null && Object.hasOwnProperty.call(message, "total_slash"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.total_slash);
            if (message.total_slash_count != null && Object.hasOwnProperty.call(message, "total_slash_count"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.total_slash_count);
            if (message.payable != null && Object.hasOwnProperty.call(message, "payable"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.payable);
            return writer;
        };

        /**
         * Encodes the specified TokenomicInfo message, length delimited. Does not implicitly {@link pruntime_rpc.TokenomicInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {pruntime_rpc.ITokenomicInfo} message TokenomicInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenomicInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenomicInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pruntime_rpc.TokenomicInfo} TokenomicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenomicInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pruntime_rpc.TokenomicInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.v = reader.string();
                    break;
                case 2:
                    message.v_init = reader.string();
                    break;
                case 19:
                    message.payable = reader.string();
                    break;
                case 4:
                    message.v_update_at = reader.uint64();
                    break;
                case 5:
                    message.v_update_block = reader.uint32();
                    break;
                case 6:
                    message.iteration_last = reader.uint64();
                    break;
                case 7:
                    message.challenge_time_last = reader.uint64();
                    break;
                case 8:
                    message.p_bench = reader.string();
                    break;
                case 9:
                    message.p_instant = reader.string();
                    break;
                case 10:
                    message.confidence_level = reader.uint32();
                    break;
                case 11:
                    message.last_payout = reader.string();
                    break;
                case 12:
                    message.last_payout_at_block = reader.uint32();
                    break;
                case 13:
                    message.total_payout = reader.string();
                    break;
                case 14:
                    message.total_payout_count = reader.uint32();
                    break;
                case 15:
                    message.last_slash = reader.string();
                    break;
                case 16:
                    message.last_slash_at_block = reader.uint32();
                    break;
                case 17:
                    message.total_slash = reader.string();
                    break;
                case 18:
                    message.total_slash_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenomicInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pruntime_rpc.TokenomicInfo} TokenomicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenomicInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenomicInfo message.
         * @function verify
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenomicInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.v != null && message.hasOwnProperty("v"))
                if (!$util.isString(message.v))
                    return "v: string expected";
            if (message.v_init != null && message.hasOwnProperty("v_init"))
                if (!$util.isString(message.v_init))
                    return "v_init: string expected";
            if (message.payable != null && message.hasOwnProperty("payable"))
                if (!$util.isString(message.payable))
                    return "payable: string expected";
            if (message.v_update_at != null && message.hasOwnProperty("v_update_at"))
                if (!$util.isInteger(message.v_update_at) && !(message.v_update_at && $util.isInteger(message.v_update_at.low) && $util.isInteger(message.v_update_at.high)))
                    return "v_update_at: integer|Long expected";
            if (message.v_update_block != null && message.hasOwnProperty("v_update_block"))
                if (!$util.isInteger(message.v_update_block))
                    return "v_update_block: integer expected";
            if (message.iteration_last != null && message.hasOwnProperty("iteration_last"))
                if (!$util.isInteger(message.iteration_last) && !(message.iteration_last && $util.isInteger(message.iteration_last.low) && $util.isInteger(message.iteration_last.high)))
                    return "iteration_last: integer|Long expected";
            if (message.challenge_time_last != null && message.hasOwnProperty("challenge_time_last"))
                if (!$util.isInteger(message.challenge_time_last) && !(message.challenge_time_last && $util.isInteger(message.challenge_time_last.low) && $util.isInteger(message.challenge_time_last.high)))
                    return "challenge_time_last: integer|Long expected";
            if (message.p_bench != null && message.hasOwnProperty("p_bench"))
                if (!$util.isString(message.p_bench))
                    return "p_bench: string expected";
            if (message.p_instant != null && message.hasOwnProperty("p_instant"))
                if (!$util.isString(message.p_instant))
                    return "p_instant: string expected";
            if (message.confidence_level != null && message.hasOwnProperty("confidence_level"))
                if (!$util.isInteger(message.confidence_level))
                    return "confidence_level: integer expected";
            if (message.last_payout != null && message.hasOwnProperty("last_payout"))
                if (!$util.isString(message.last_payout))
                    return "last_payout: string expected";
            if (message.last_payout_at_block != null && message.hasOwnProperty("last_payout_at_block"))
                if (!$util.isInteger(message.last_payout_at_block))
                    return "last_payout_at_block: integer expected";
            if (message.total_payout != null && message.hasOwnProperty("total_payout"))
                if (!$util.isString(message.total_payout))
                    return "total_payout: string expected";
            if (message.total_payout_count != null && message.hasOwnProperty("total_payout_count"))
                if (!$util.isInteger(message.total_payout_count))
                    return "total_payout_count: integer expected";
            if (message.last_slash != null && message.hasOwnProperty("last_slash"))
                if (!$util.isString(message.last_slash))
                    return "last_slash: string expected";
            if (message.last_slash_at_block != null && message.hasOwnProperty("last_slash_at_block"))
                if (!$util.isInteger(message.last_slash_at_block))
                    return "last_slash_at_block: integer expected";
            if (message.total_slash != null && message.hasOwnProperty("total_slash"))
                if (!$util.isString(message.total_slash))
                    return "total_slash: string expected";
            if (message.total_slash_count != null && message.hasOwnProperty("total_slash_count"))
                if (!$util.isInteger(message.total_slash_count))
                    return "total_slash_count: integer expected";
            return null;
        };

        /**
         * Creates a TokenomicInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pruntime_rpc.TokenomicInfo} TokenomicInfo
         */
        TokenomicInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pruntime_rpc.TokenomicInfo)
                return object;
            let message = new $root.pruntime_rpc.TokenomicInfo();
            if (object.v != null)
                message.v = String(object.v);
            if (object.v_init != null)
                message.v_init = String(object.v_init);
            if (object.payable != null)
                message.payable = String(object.payable);
            if (object.v_update_at != null)
                if ($util.Long)
                    (message.v_update_at = $util.Long.fromValue(object.v_update_at)).unsigned = true;
                else if (typeof object.v_update_at === "string")
                    message.v_update_at = parseInt(object.v_update_at, 10);
                else if (typeof object.v_update_at === "number")
                    message.v_update_at = object.v_update_at;
                else if (typeof object.v_update_at === "object")
                    message.v_update_at = new $util.LongBits(object.v_update_at.low >>> 0, object.v_update_at.high >>> 0).toNumber(true);
            if (object.v_update_block != null)
                message.v_update_block = object.v_update_block >>> 0;
            if (object.iteration_last != null)
                if ($util.Long)
                    (message.iteration_last = $util.Long.fromValue(object.iteration_last)).unsigned = true;
                else if (typeof object.iteration_last === "string")
                    message.iteration_last = parseInt(object.iteration_last, 10);
                else if (typeof object.iteration_last === "number")
                    message.iteration_last = object.iteration_last;
                else if (typeof object.iteration_last === "object")
                    message.iteration_last = new $util.LongBits(object.iteration_last.low >>> 0, object.iteration_last.high >>> 0).toNumber(true);
            if (object.challenge_time_last != null)
                if ($util.Long)
                    (message.challenge_time_last = $util.Long.fromValue(object.challenge_time_last)).unsigned = true;
                else if (typeof object.challenge_time_last === "string")
                    message.challenge_time_last = parseInt(object.challenge_time_last, 10);
                else if (typeof object.challenge_time_last === "number")
                    message.challenge_time_last = object.challenge_time_last;
                else if (typeof object.challenge_time_last === "object")
                    message.challenge_time_last = new $util.LongBits(object.challenge_time_last.low >>> 0, object.challenge_time_last.high >>> 0).toNumber(true);
            if (object.p_bench != null)
                message.p_bench = String(object.p_bench);
            if (object.p_instant != null)
                message.p_instant = String(object.p_instant);
            if (object.confidence_level != null)
                message.confidence_level = object.confidence_level >>> 0;
            if (object.last_payout != null)
                message.last_payout = String(object.last_payout);
            if (object.last_payout_at_block != null)
                message.last_payout_at_block = object.last_payout_at_block >>> 0;
            if (object.total_payout != null)
                message.total_payout = String(object.total_payout);
            if (object.total_payout_count != null)
                message.total_payout_count = object.total_payout_count >>> 0;
            if (object.last_slash != null)
                message.last_slash = String(object.last_slash);
            if (object.last_slash_at_block != null)
                message.last_slash_at_block = object.last_slash_at_block >>> 0;
            if (object.total_slash != null)
                message.total_slash = String(object.total_slash);
            if (object.total_slash_count != null)
                message.total_slash_count = object.total_slash_count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TokenomicInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pruntime_rpc.TokenomicInfo
         * @static
         * @param {pruntime_rpc.TokenomicInfo} message TokenomicInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenomicInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.v = "";
                object.v_init = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.v_update_at = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.v_update_at = options.longs === String ? "0" : 0;
                object.v_update_block = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.iteration_last = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.iteration_last = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.challenge_time_last = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.challenge_time_last = options.longs === String ? "0" : 0;
                object.p_bench = "";
                object.p_instant = "";
                object.confidence_level = 0;
                object.last_payout = "";
                object.last_payout_at_block = 0;
                object.total_payout = "";
                object.total_payout_count = 0;
                object.last_slash = "";
                object.last_slash_at_block = 0;
                object.total_slash = "";
                object.total_slash_count = 0;
                object.payable = "";
            }
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = message.v;
            if (message.v_init != null && message.hasOwnProperty("v_init"))
                object.v_init = message.v_init;
            if (message.v_update_at != null && message.hasOwnProperty("v_update_at"))
                if (typeof message.v_update_at === "number")
                    object.v_update_at = options.longs === String ? String(message.v_update_at) : message.v_update_at;
                else
                    object.v_update_at = options.longs === String ? $util.Long.prototype.toString.call(message.v_update_at) : options.longs === Number ? new $util.LongBits(message.v_update_at.low >>> 0, message.v_update_at.high >>> 0).toNumber(true) : message.v_update_at;
            if (message.v_update_block != null && message.hasOwnProperty("v_update_block"))
                object.v_update_block = message.v_update_block;
            if (message.iteration_last != null && message.hasOwnProperty("iteration_last"))
                if (typeof message.iteration_last === "number")
                    object.iteration_last = options.longs === String ? String(message.iteration_last) : message.iteration_last;
                else
                    object.iteration_last = options.longs === String ? $util.Long.prototype.toString.call(message.iteration_last) : options.longs === Number ? new $util.LongBits(message.iteration_last.low >>> 0, message.iteration_last.high >>> 0).toNumber(true) : message.iteration_last;
            if (message.challenge_time_last != null && message.hasOwnProperty("challenge_time_last"))
                if (typeof message.challenge_time_last === "number")
                    object.challenge_time_last = options.longs === String ? String(message.challenge_time_last) : message.challenge_time_last;
                else
                    object.challenge_time_last = options.longs === String ? $util.Long.prototype.toString.call(message.challenge_time_last) : options.longs === Number ? new $util.LongBits(message.challenge_time_last.low >>> 0, message.challenge_time_last.high >>> 0).toNumber(true) : message.challenge_time_last;
            if (message.p_bench != null && message.hasOwnProperty("p_bench"))
                object.p_bench = message.p_bench;
            if (message.p_instant != null && message.hasOwnProperty("p_instant"))
                object.p_instant = message.p_instant;
            if (message.confidence_level != null && message.hasOwnProperty("confidence_level"))
                object.confidence_level = message.confidence_level;
            if (message.last_payout != null && message.hasOwnProperty("last_payout"))
                object.last_payout = message.last_payout;
            if (message.last_payout_at_block != null && message.hasOwnProperty("last_payout_at_block"))
                object.last_payout_at_block = message.last_payout_at_block;
            if (message.total_payout != null && message.hasOwnProperty("total_payout"))
                object.total_payout = message.total_payout;
            if (message.total_payout_count != null && message.hasOwnProperty("total_payout_count"))
                object.total_payout_count = message.total_payout_count;
            if (message.last_slash != null && message.hasOwnProperty("last_slash"))
                object.last_slash = message.last_slash;
            if (message.last_slash_at_block != null && message.hasOwnProperty("last_slash_at_block"))
                object.last_slash_at_block = message.last_slash_at_block;
            if (message.total_slash != null && message.hasOwnProperty("total_slash"))
                object.total_slash = message.total_slash;
            if (message.total_slash_count != null && message.hasOwnProperty("total_slash_count"))
                object.total_slash_count = message.total_slash_count;
            if (message.payable != null && message.hasOwnProperty("payable"))
                object.payable = message.payable;
            return object;
        };

        /**
         * Converts this TokenomicInfo to JSON.
         * @function toJSON
         * @memberof pruntime_rpc.TokenomicInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenomicInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TokenomicInfo;
    })();

    return pruntime_rpc;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();
