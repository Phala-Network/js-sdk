import * as $protobuf from "protobufjs";
/** Namespace prpc. */
export namespace prpc {

    /** Properties of a PrpcError. */
    interface IPrpcError {

        /** The error description */
        message?: (string|null);
    }

    /** The final Error type of RPCs to be serialized to protobuf. */
    class PrpcError implements IPrpcError {

        /**
         * Constructs a new PrpcError.
         * @param [properties] Properties to set
         */
        constructor(properties?: prpc.IPrpcError);

        /** The error description */
        public message: string;

        /**
         * Creates a new PrpcError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrpcError instance
         */
        public static create(properties?: prpc.IPrpcError): prpc.PrpcError;

        /**
         * Encodes the specified PrpcError message. Does not implicitly {@link prpc.PrpcError.verify|verify} messages.
         * @param message PrpcError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: prpc.IPrpcError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrpcError message, length delimited. Does not implicitly {@link prpc.PrpcError.verify|verify} messages.
         * @param message PrpcError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: prpc.IPrpcError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrpcError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrpcError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): prpc.PrpcError;

        /**
         * Decodes a PrpcError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrpcError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): prpc.PrpcError;

        /**
         * Verifies a PrpcError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrpcError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrpcError
         */
        public static fromObject(object: { [k: string]: any }): prpc.PrpcError;

        /**
         * Creates a plain object from a PrpcError message. Also converts values to other types if specified.
         * @param message PrpcError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: prpc.PrpcError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrpcError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace pruntimeRpc. */
export namespace pruntimeRpc {

    /** Represents a PhactoryAPI */
    class PhactoryAPI extends $protobuf.rpc.Service {

        /**
         * Constructs a new PhactoryAPI service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new PhactoryAPI service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PhactoryAPI;

        /**
         * Calls GetInfo.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and PhactoryInfo
         */
        public getInfo(request: google.protobuf.IEmpty, callback: pruntimeRpc.PhactoryAPI.GetInfoCallback): void;

        /**
         * Calls GetInfo.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getInfo(request: google.protobuf.IEmpty): Promise<pruntimeRpc.PhactoryInfo>;

        /**
         * Calls SyncHeader.
         * @param request HeadersToSync message or plain object
         * @param callback Node-style callback called with the error, if any, and SyncedTo
         */
        public syncHeader(request: pruntimeRpc.IHeadersToSync, callback: pruntimeRpc.PhactoryAPI.SyncHeaderCallback): void;

        /**
         * Calls SyncHeader.
         * @param request HeadersToSync message or plain object
         * @returns Promise
         */
        public syncHeader(request: pruntimeRpc.IHeadersToSync): Promise<pruntimeRpc.SyncedTo>;

        /**
         * Calls SyncParaHeader.
         * @param request ParaHeadersToSync message or plain object
         * @param callback Node-style callback called with the error, if any, and SyncedTo
         */
        public syncParaHeader(request: pruntimeRpc.IParaHeadersToSync, callback: pruntimeRpc.PhactoryAPI.SyncParaHeaderCallback): void;

        /**
         * Calls SyncParaHeader.
         * @param request ParaHeadersToSync message or plain object
         * @returns Promise
         */
        public syncParaHeader(request: pruntimeRpc.IParaHeadersToSync): Promise<pruntimeRpc.SyncedTo>;

        /**
         * Calls SyncCombinedHeaders.
         * @param request CombinedHeadersToSync message or plain object
         * @param callback Node-style callback called with the error, if any, and HeadersSyncedTo
         */
        public syncCombinedHeaders(request: pruntimeRpc.ICombinedHeadersToSync, callback: pruntimeRpc.PhactoryAPI.SyncCombinedHeadersCallback): void;

        /**
         * Calls SyncCombinedHeaders.
         * @param request CombinedHeadersToSync message or plain object
         * @returns Promise
         */
        public syncCombinedHeaders(request: pruntimeRpc.ICombinedHeadersToSync): Promise<pruntimeRpc.HeadersSyncedTo>;

        /**
         * Calls DispatchBlocks.
         * @param request Blocks message or plain object
         * @param callback Node-style callback called with the error, if any, and SyncedTo
         */
        public dispatchBlocks(request: pruntimeRpc.IBlocks, callback: pruntimeRpc.PhactoryAPI.DispatchBlocksCallback): void;

        /**
         * Calls DispatchBlocks.
         * @param request Blocks message or plain object
         * @returns Promise
         */
        public dispatchBlocks(request: pruntimeRpc.IBlocks): Promise<pruntimeRpc.SyncedTo>;

        /**
         * Calls InitRuntime.
         * @param request InitRuntimeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and InitRuntimeResponse
         */
        public initRuntime(request: pruntimeRpc.IInitRuntimeRequest, callback: pruntimeRpc.PhactoryAPI.InitRuntimeCallback): void;

        /**
         * Calls InitRuntime.
         * @param request InitRuntimeRequest message or plain object
         * @returns Promise
         */
        public initRuntime(request: pruntimeRpc.IInitRuntimeRequest): Promise<pruntimeRpc.InitRuntimeResponse>;

        /**
         * Calls GetRuntimeInfo.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and InitRuntimeResponse
         */
        public getRuntimeInfo(request: google.protobuf.IEmpty, callback: pruntimeRpc.PhactoryAPI.GetRuntimeInfoCallback): void;

        /**
         * Calls GetRuntimeInfo.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getRuntimeInfo(request: google.protobuf.IEmpty): Promise<pruntimeRpc.InitRuntimeResponse>;

        /**
         * Calls GetEgressMessages.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEgressMessagesResponse
         */
        public getEgressMessages(request: google.protobuf.IEmpty, callback: pruntimeRpc.PhactoryAPI.GetEgressMessagesCallback): void;

        /**
         * Calls GetEgressMessages.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getEgressMessages(request: google.protobuf.IEmpty): Promise<pruntimeRpc.GetEgressMessagesResponse>;

        /**
         * Calls ContractQuery.
         * @param request ContractQueryRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ContractQueryResponse
         */
        public contractQuery(request: pruntimeRpc.IContractQueryRequest, callback: pruntimeRpc.PhactoryAPI.ContractQueryCallback): void;

        /**
         * Calls ContractQuery.
         * @param request ContractQueryRequest message or plain object
         * @returns Promise
         */
        public contractQuery(request: pruntimeRpc.IContractQueryRequest): Promise<pruntimeRpc.ContractQueryResponse>;

        /**
         * Calls GetWorkerState.
         * @param request GetWorkerStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and WorkerState
         */
        public getWorkerState(request: pruntimeRpc.IGetWorkerStateRequest, callback: pruntimeRpc.PhactoryAPI.GetWorkerStateCallback): void;

        /**
         * Calls GetWorkerState.
         * @param request GetWorkerStateRequest message or plain object
         * @returns Promise
         */
        public getWorkerState(request: pruntimeRpc.IGetWorkerStateRequest): Promise<pruntimeRpc.WorkerState>;

        /**
         * Calls Echo.
         * @param request EchoMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and EchoMessage
         */
        public echo(request: pruntimeRpc.IEchoMessage, callback: pruntimeRpc.PhactoryAPI.EchoCallback): void;

        /**
         * Calls Echo.
         * @param request EchoMessage message or plain object
         * @returns Promise
         */
        public echo(request: pruntimeRpc.IEchoMessage): Promise<pruntimeRpc.EchoMessage>;
    }

    namespace PhactoryAPI {

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#getInfo}.
         * @param error Error, if any
         * @param [response] PhactoryInfo
         */
        type GetInfoCallback = (error: (Error|null), response?: pruntimeRpc.PhactoryInfo) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#syncHeader}.
         * @param error Error, if any
         * @param [response] SyncedTo
         */
        type SyncHeaderCallback = (error: (Error|null), response?: pruntimeRpc.SyncedTo) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#syncParaHeader}.
         * @param error Error, if any
         * @param [response] SyncedTo
         */
        type SyncParaHeaderCallback = (error: (Error|null), response?: pruntimeRpc.SyncedTo) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#syncCombinedHeaders}.
         * @param error Error, if any
         * @param [response] HeadersSyncedTo
         */
        type SyncCombinedHeadersCallback = (error: (Error|null), response?: pruntimeRpc.HeadersSyncedTo) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#dispatchBlocks}.
         * @param error Error, if any
         * @param [response] SyncedTo
         */
        type DispatchBlocksCallback = (error: (Error|null), response?: pruntimeRpc.SyncedTo) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#initRuntime}.
         * @param error Error, if any
         * @param [response] InitRuntimeResponse
         */
        type InitRuntimeCallback = (error: (Error|null), response?: pruntimeRpc.InitRuntimeResponse) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#getRuntimeInfo}.
         * @param error Error, if any
         * @param [response] InitRuntimeResponse
         */
        type GetRuntimeInfoCallback = (error: (Error|null), response?: pruntimeRpc.InitRuntimeResponse) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#getEgressMessages}.
         * @param error Error, if any
         * @param [response] GetEgressMessagesResponse
         */
        type GetEgressMessagesCallback = (error: (Error|null), response?: pruntimeRpc.GetEgressMessagesResponse) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#contractQuery}.
         * @param error Error, if any
         * @param [response] ContractQueryResponse
         */
        type ContractQueryCallback = (error: (Error|null), response?: pruntimeRpc.ContractQueryResponse) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#getWorkerState}.
         * @param error Error, if any
         * @param [response] WorkerState
         */
        type GetWorkerStateCallback = (error: (Error|null), response?: pruntimeRpc.WorkerState) => void;

        /**
         * Callback as used by {@link pruntimeRpc.PhactoryAPI#echo}.
         * @param error Error, if any
         * @param [response] EchoMessage
         */
        type EchoCallback = (error: (Error|null), response?: pruntimeRpc.EchoMessage) => void;
    }

    /** Properties of a PhactoryInfo. */
    interface IPhactoryInfo {

        /** PhactoryInfo initialized */
        initialized?: (boolean|null);

        /** PhactoryInfo registered */
        registered?: (boolean|null);

        /** PhactoryInfo genesisBlockHash */
        genesisBlockHash?: (string|null);

        /** PhactoryInfo publicKey */
        publicKey?: (string|null);

        /** PhactoryInfo ecdhPublicKey */
        ecdhPublicKey?: (string|null);

        /** PhactoryInfo headernum */
        headernum?: (number|null);

        /** PhactoryInfo paraHeadernum */
        paraHeadernum?: (number|null);

        /** PhactoryInfo blocknum */
        blocknum?: (number|null);

        /** PhactoryInfo stateRoot */
        stateRoot?: (string|null);

        /** PhactoryInfo devMode */
        devMode?: (boolean|null);

        /** PhactoryInfo pendingMessages */
        pendingMessages?: (number|Long|null);

        /** PhactoryInfo score */
        score?: (number|Long|null);

        /** PhactoryInfo gatekeeper */
        gatekeeper?: (pruntimeRpc.IGatekeeperStatus|null);

        /** PhactoryInfo version */
        version?: (string|null);

        /** PhactoryInfo gitRevision */
        gitRevision?: (string|null);

        /** PhactoryInfo runningSideTasks */
        runningSideTasks?: (number|Long|null);

        /** PhactoryInfo memoryUsage */
        memoryUsage?: (pruntimeRpc.IMemoryUsage|null);
    }

    /** Represents a PhactoryInfo. */
    class PhactoryInfo implements IPhactoryInfo {

        /**
         * Constructs a new PhactoryInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IPhactoryInfo);

        /** PhactoryInfo initialized. */
        public initialized: boolean;

        /** PhactoryInfo registered. */
        public registered: boolean;

        /** PhactoryInfo genesisBlockHash. */
        public genesisBlockHash?: (string|null);

        /** PhactoryInfo publicKey. */
        public publicKey?: (string|null);

        /** PhactoryInfo ecdhPublicKey. */
        public ecdhPublicKey?: (string|null);

        /** PhactoryInfo headernum. */
        public headernum: number;

        /** PhactoryInfo paraHeadernum. */
        public paraHeadernum: number;

        /** PhactoryInfo blocknum. */
        public blocknum: number;

        /** PhactoryInfo stateRoot. */
        public stateRoot: string;

        /** PhactoryInfo devMode. */
        public devMode: boolean;

        /** PhactoryInfo pendingMessages. */
        public pendingMessages: (number|Long);

        /** PhactoryInfo score. */
        public score: (number|Long);

        /** PhactoryInfo gatekeeper. */
        public gatekeeper?: (pruntimeRpc.IGatekeeperStatus|null);

        /** PhactoryInfo version. */
        public version: string;

        /** PhactoryInfo gitRevision. */
        public gitRevision: string;

        /** PhactoryInfo runningSideTasks. */
        public runningSideTasks: (number|Long);

        /** PhactoryInfo memoryUsage. */
        public memoryUsage?: (pruntimeRpc.IMemoryUsage|null);

        /** PhactoryInfo _genesisBlockHash. */
        public _genesisBlockHash?: "genesisBlockHash";

        /** PhactoryInfo _publicKey. */
        public _publicKey?: "publicKey";

        /** PhactoryInfo _ecdhPublicKey. */
        public _ecdhPublicKey?: "ecdhPublicKey";

        /**
         * Creates a new PhactoryInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PhactoryInfo instance
         */
        public static create(properties?: pruntimeRpc.IPhactoryInfo): pruntimeRpc.PhactoryInfo;

        /**
         * Encodes the specified PhactoryInfo message. Does not implicitly {@link pruntimeRpc.PhactoryInfo.verify|verify} messages.
         * @param message PhactoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IPhactoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PhactoryInfo message, length delimited. Does not implicitly {@link pruntimeRpc.PhactoryInfo.verify|verify} messages.
         * @param message PhactoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IPhactoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PhactoryInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PhactoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.PhactoryInfo;

        /**
         * Decodes a PhactoryInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PhactoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.PhactoryInfo;

        /**
         * Verifies a PhactoryInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PhactoryInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PhactoryInfo
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.PhactoryInfo;

        /**
         * Creates a plain object from a PhactoryInfo message. Also converts values to other types if specified.
         * @param message PhactoryInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.PhactoryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PhactoryInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** GatekeeperRole enum. */
    enum GatekeeperRole {
        None = 0,
        Dummy = 1,
        Active = 2
    }

    /** Properties of a GatekeeperStatus. */
    interface IGatekeeperStatus {

        /** GatekeeperStatus role */
        role?: (pruntimeRpc.GatekeeperRole|null);

        /** GatekeeperStatus masterPublicKey */
        masterPublicKey?: (string|null);
    }

    /** Represents a GatekeeperStatus. */
    class GatekeeperStatus implements IGatekeeperStatus {

        /**
         * Constructs a new GatekeeperStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IGatekeeperStatus);

        /** GatekeeperStatus role. */
        public role: pruntimeRpc.GatekeeperRole;

        /** GatekeeperStatus masterPublicKey. */
        public masterPublicKey: string;

        /**
         * Creates a new GatekeeperStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GatekeeperStatus instance
         */
        public static create(properties?: pruntimeRpc.IGatekeeperStatus): pruntimeRpc.GatekeeperStatus;

        /**
         * Encodes the specified GatekeeperStatus message. Does not implicitly {@link pruntimeRpc.GatekeeperStatus.verify|verify} messages.
         * @param message GatekeeperStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IGatekeeperStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GatekeeperStatus message, length delimited. Does not implicitly {@link pruntimeRpc.GatekeeperStatus.verify|verify} messages.
         * @param message GatekeeperStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IGatekeeperStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GatekeeperStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GatekeeperStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.GatekeeperStatus;

        /**
         * Decodes a GatekeeperStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GatekeeperStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.GatekeeperStatus;

        /**
         * Verifies a GatekeeperStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GatekeeperStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GatekeeperStatus
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.GatekeeperStatus;

        /**
         * Creates a plain object from a GatekeeperStatus message. Also converts values to other types if specified.
         * @param message GatekeeperStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.GatekeeperStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GatekeeperStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MemoryUsage. */
    interface IMemoryUsage {

        /** MemoryUsage rustUsed */
        rustUsed?: (number|Long|null);

        /** MemoryUsage rustPeakUsed */
        rustPeakUsed?: (number|Long|null);

        /** MemoryUsage totalPeakUsed */
        totalPeakUsed?: (number|Long|null);
    }

    /** Represents a MemoryUsage. */
    class MemoryUsage implements IMemoryUsage {

        /**
         * Constructs a new MemoryUsage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IMemoryUsage);

        /** MemoryUsage rustUsed. */
        public rustUsed: (number|Long);

        /** MemoryUsage rustPeakUsed. */
        public rustPeakUsed: (number|Long);

        /** MemoryUsage totalPeakUsed. */
        public totalPeakUsed: (number|Long);

        /**
         * Creates a new MemoryUsage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MemoryUsage instance
         */
        public static create(properties?: pruntimeRpc.IMemoryUsage): pruntimeRpc.MemoryUsage;

        /**
         * Encodes the specified MemoryUsage message. Does not implicitly {@link pruntimeRpc.MemoryUsage.verify|verify} messages.
         * @param message MemoryUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IMemoryUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MemoryUsage message, length delimited. Does not implicitly {@link pruntimeRpc.MemoryUsage.verify|verify} messages.
         * @param message MemoryUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IMemoryUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MemoryUsage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MemoryUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.MemoryUsage;

        /**
         * Decodes a MemoryUsage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MemoryUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.MemoryUsage;

        /**
         * Verifies a MemoryUsage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MemoryUsage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MemoryUsage
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.MemoryUsage;

        /**
         * Creates a plain object from a MemoryUsage message. Also converts values to other types if specified.
         * @param message MemoryUsage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.MemoryUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MemoryUsage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncedTo. */
    interface ISyncedTo {

        /** SyncedTo syncedTo */
        syncedTo?: (number|null);
    }

    /** Represents a SyncedTo. */
    class SyncedTo implements ISyncedTo {

        /**
         * Constructs a new SyncedTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.ISyncedTo);

        /** SyncedTo syncedTo. */
        public syncedTo: number;

        /**
         * Creates a new SyncedTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncedTo instance
         */
        public static create(properties?: pruntimeRpc.ISyncedTo): pruntimeRpc.SyncedTo;

        /**
         * Encodes the specified SyncedTo message. Does not implicitly {@link pruntimeRpc.SyncedTo.verify|verify} messages.
         * @param message SyncedTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.ISyncedTo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncedTo message, length delimited. Does not implicitly {@link pruntimeRpc.SyncedTo.verify|verify} messages.
         * @param message SyncedTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.ISyncedTo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncedTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.SyncedTo;

        /**
         * Decodes a SyncedTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.SyncedTo;

        /**
         * Verifies a SyncedTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncedTo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncedTo
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.SyncedTo;

        /**
         * Creates a plain object from a SyncedTo message. Also converts values to other types if specified.
         * @param message SyncedTo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.SyncedTo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncedTo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeadersToSync. */
    interface IHeadersToSync {

        /** HeadersToSync encodedHeaders */
        encodedHeaders?: (Uint8Array|null);

        /** HeadersToSync encodedAuthoritySetChange */
        encodedAuthoritySetChange?: (Uint8Array|null);
    }

    /** Represents a HeadersToSync. */
    class HeadersToSync implements IHeadersToSync {

        /**
         * Constructs a new HeadersToSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IHeadersToSync);

        /** HeadersToSync encodedHeaders. */
        public encodedHeaders: Uint8Array;

        /** HeadersToSync encodedAuthoritySetChange. */
        public encodedAuthoritySetChange?: (Uint8Array|null);

        /** HeadersToSync _encodedAuthoritySetChange. */
        public _encodedAuthoritySetChange?: "encodedAuthoritySetChange";

        /**
         * Creates a new HeadersToSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeadersToSync instance
         */
        public static create(properties?: pruntimeRpc.IHeadersToSync): pruntimeRpc.HeadersToSync;

        /**
         * Encodes the specified HeadersToSync message. Does not implicitly {@link pruntimeRpc.HeadersToSync.verify|verify} messages.
         * @param message HeadersToSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IHeadersToSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeadersToSync message, length delimited. Does not implicitly {@link pruntimeRpc.HeadersToSync.verify|verify} messages.
         * @param message HeadersToSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IHeadersToSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeadersToSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.HeadersToSync;

        /**
         * Decodes a HeadersToSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.HeadersToSync;

        /**
         * Verifies a HeadersToSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeadersToSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeadersToSync
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.HeadersToSync;

        /**
         * Creates a plain object from a HeadersToSync message. Also converts values to other types if specified.
         * @param message HeadersToSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.HeadersToSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeadersToSync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParaHeadersToSync. */
    interface IParaHeadersToSync {

        /** ParaHeadersToSync encodedHeaders */
        encodedHeaders?: (Uint8Array|null);

        /** ParaHeadersToSync proof */
        proof?: (Uint8Array[]|null);
    }

    /** Represents a ParaHeadersToSync. */
    class ParaHeadersToSync implements IParaHeadersToSync {

        /**
         * Constructs a new ParaHeadersToSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IParaHeadersToSync);

        /** ParaHeadersToSync encodedHeaders. */
        public encodedHeaders: Uint8Array;

        /** ParaHeadersToSync proof. */
        public proof: Uint8Array[];

        /**
         * Creates a new ParaHeadersToSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParaHeadersToSync instance
         */
        public static create(properties?: pruntimeRpc.IParaHeadersToSync): pruntimeRpc.ParaHeadersToSync;

        /**
         * Encodes the specified ParaHeadersToSync message. Does not implicitly {@link pruntimeRpc.ParaHeadersToSync.verify|verify} messages.
         * @param message ParaHeadersToSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IParaHeadersToSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParaHeadersToSync message, length delimited. Does not implicitly {@link pruntimeRpc.ParaHeadersToSync.verify|verify} messages.
         * @param message ParaHeadersToSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IParaHeadersToSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParaHeadersToSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParaHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.ParaHeadersToSync;

        /**
         * Decodes a ParaHeadersToSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParaHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.ParaHeadersToSync;

        /**
         * Verifies a ParaHeadersToSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParaHeadersToSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParaHeadersToSync
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.ParaHeadersToSync;

        /**
         * Creates a plain object from a ParaHeadersToSync message. Also converts values to other types if specified.
         * @param message ParaHeadersToSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.ParaHeadersToSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParaHeadersToSync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CombinedHeadersToSync. */
    interface ICombinedHeadersToSync {

        /** CombinedHeadersToSync encodedRelaychainHeaders */
        encodedRelaychainHeaders?: (Uint8Array|null);

        /** CombinedHeadersToSync authoritySetChange */
        authoritySetChange?: (Uint8Array|null);

        /** CombinedHeadersToSync encodedParachainHeaders */
        encodedParachainHeaders?: (Uint8Array|null);

        /** CombinedHeadersToSync proof */
        proof?: (Uint8Array[]|null);
    }

    /** Represents a CombinedHeadersToSync. */
    class CombinedHeadersToSync implements ICombinedHeadersToSync {

        /**
         * Constructs a new CombinedHeadersToSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.ICombinedHeadersToSync);

        /** CombinedHeadersToSync encodedRelaychainHeaders. */
        public encodedRelaychainHeaders: Uint8Array;

        /** CombinedHeadersToSync authoritySetChange. */
        public authoritySetChange?: (Uint8Array|null);

        /** CombinedHeadersToSync encodedParachainHeaders. */
        public encodedParachainHeaders: Uint8Array;

        /** CombinedHeadersToSync proof. */
        public proof: Uint8Array[];

        /** CombinedHeadersToSync _authoritySetChange. */
        public _authoritySetChange?: "authoritySetChange";

        /**
         * Creates a new CombinedHeadersToSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CombinedHeadersToSync instance
         */
        public static create(properties?: pruntimeRpc.ICombinedHeadersToSync): pruntimeRpc.CombinedHeadersToSync;

        /**
         * Encodes the specified CombinedHeadersToSync message. Does not implicitly {@link pruntimeRpc.CombinedHeadersToSync.verify|verify} messages.
         * @param message CombinedHeadersToSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.ICombinedHeadersToSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CombinedHeadersToSync message, length delimited. Does not implicitly {@link pruntimeRpc.CombinedHeadersToSync.verify|verify} messages.
         * @param message CombinedHeadersToSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.ICombinedHeadersToSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombinedHeadersToSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CombinedHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.CombinedHeadersToSync;

        /**
         * Decodes a CombinedHeadersToSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CombinedHeadersToSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.CombinedHeadersToSync;

        /**
         * Verifies a CombinedHeadersToSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CombinedHeadersToSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CombinedHeadersToSync
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.CombinedHeadersToSync;

        /**
         * Creates a plain object from a CombinedHeadersToSync message. Also converts values to other types if specified.
         * @param message CombinedHeadersToSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.CombinedHeadersToSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CombinedHeadersToSync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeadersSyncedTo. */
    interface IHeadersSyncedTo {

        /** HeadersSyncedTo relaychainSyncedTo */
        relaychainSyncedTo?: (number|null);

        /** HeadersSyncedTo parachainSyncedTo */
        parachainSyncedTo?: (number|null);
    }

    /** Represents a HeadersSyncedTo. */
    class HeadersSyncedTo implements IHeadersSyncedTo {

        /**
         * Constructs a new HeadersSyncedTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IHeadersSyncedTo);

        /** HeadersSyncedTo relaychainSyncedTo. */
        public relaychainSyncedTo: number;

        /** HeadersSyncedTo parachainSyncedTo. */
        public parachainSyncedTo: number;

        /**
         * Creates a new HeadersSyncedTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeadersSyncedTo instance
         */
        public static create(properties?: pruntimeRpc.IHeadersSyncedTo): pruntimeRpc.HeadersSyncedTo;

        /**
         * Encodes the specified HeadersSyncedTo message. Does not implicitly {@link pruntimeRpc.HeadersSyncedTo.verify|verify} messages.
         * @param message HeadersSyncedTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IHeadersSyncedTo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeadersSyncedTo message, length delimited. Does not implicitly {@link pruntimeRpc.HeadersSyncedTo.verify|verify} messages.
         * @param message HeadersSyncedTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IHeadersSyncedTo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeadersSyncedTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeadersSyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.HeadersSyncedTo;

        /**
         * Decodes a HeadersSyncedTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeadersSyncedTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.HeadersSyncedTo;

        /**
         * Verifies a HeadersSyncedTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeadersSyncedTo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeadersSyncedTo
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.HeadersSyncedTo;

        /**
         * Creates a plain object from a HeadersSyncedTo message. Also converts values to other types if specified.
         * @param message HeadersSyncedTo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.HeadersSyncedTo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeadersSyncedTo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Blocks. */
    interface IBlocks {

        /** Blocks encodedBlocks */
        encodedBlocks?: (Uint8Array|null);
    }

    /** Represents a Blocks. */
    class Blocks implements IBlocks {

        /**
         * Constructs a new Blocks.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IBlocks);

        /** Blocks encodedBlocks. */
        public encodedBlocks: Uint8Array;

        /**
         * Creates a new Blocks instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Blocks instance
         */
        public static create(properties?: pruntimeRpc.IBlocks): pruntimeRpc.Blocks;

        /**
         * Encodes the specified Blocks message. Does not implicitly {@link pruntimeRpc.Blocks.verify|verify} messages.
         * @param message Blocks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IBlocks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Blocks message, length delimited. Does not implicitly {@link pruntimeRpc.Blocks.verify|verify} messages.
         * @param message Blocks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IBlocks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Blocks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Blocks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.Blocks;

        /**
         * Decodes a Blocks message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Blocks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.Blocks;

        /**
         * Verifies a Blocks message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Blocks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Blocks
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.Blocks;

        /**
         * Creates a plain object from a Blocks message. Also converts values to other types if specified.
         * @param message Blocks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.Blocks, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Blocks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitRuntimeRequest. */
    interface IInitRuntimeRequest {

        /** InitRuntimeRequest skipRa */
        skipRa?: (boolean|null);

        /** InitRuntimeRequest encodedGenesisInfo */
        encodedGenesisInfo?: (Uint8Array|null);

        /** InitRuntimeRequest debugSetKey */
        debugSetKey?: (Uint8Array|null);

        /** InitRuntimeRequest encodedGenesisState */
        encodedGenesisState?: (Uint8Array|null);

        /** InitRuntimeRequest encodedOperator */
        encodedOperator?: (Uint8Array|null);

        /** InitRuntimeRequest isParachain */
        isParachain?: (boolean|null);
    }

    /** Represents an InitRuntimeRequest. */
    class InitRuntimeRequest implements IInitRuntimeRequest {

        /**
         * Constructs a new InitRuntimeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IInitRuntimeRequest);

        /** InitRuntimeRequest skipRa. */
        public skipRa: boolean;

        /** InitRuntimeRequest encodedGenesisInfo. */
        public encodedGenesisInfo: Uint8Array;

        /** InitRuntimeRequest debugSetKey. */
        public debugSetKey?: (Uint8Array|null);

        /** InitRuntimeRequest encodedGenesisState. */
        public encodedGenesisState: Uint8Array;

        /** InitRuntimeRequest encodedOperator. */
        public encodedOperator?: (Uint8Array|null);

        /** InitRuntimeRequest isParachain. */
        public isParachain: boolean;

        /** InitRuntimeRequest _debugSetKey. */
        public _debugSetKey?: "debugSetKey";

        /** InitRuntimeRequest _encodedOperator. */
        public _encodedOperator?: "encodedOperator";

        /**
         * Creates a new InitRuntimeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitRuntimeRequest instance
         */
        public static create(properties?: pruntimeRpc.IInitRuntimeRequest): pruntimeRpc.InitRuntimeRequest;

        /**
         * Encodes the specified InitRuntimeRequest message. Does not implicitly {@link pruntimeRpc.InitRuntimeRequest.verify|verify} messages.
         * @param message InitRuntimeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IInitRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitRuntimeRequest message, length delimited. Does not implicitly {@link pruntimeRpc.InitRuntimeRequest.verify|verify} messages.
         * @param message InitRuntimeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IInitRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitRuntimeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitRuntimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.InitRuntimeRequest;

        /**
         * Decodes an InitRuntimeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitRuntimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.InitRuntimeRequest;

        /**
         * Verifies an InitRuntimeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitRuntimeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitRuntimeRequest
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.InitRuntimeRequest;

        /**
         * Creates a plain object from an InitRuntimeRequest message. Also converts values to other types if specified.
         * @param message InitRuntimeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.InitRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitRuntimeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitRuntimeResponse. */
    interface IInitRuntimeResponse {

        /** InitRuntimeResponse encodedRuntimeInfo */
        encodedRuntimeInfo?: (Uint8Array|null);

        /** InitRuntimeResponse encodedGenesisBlockHash */
        encodedGenesisBlockHash?: (Uint8Array|null);

        /** InitRuntimeResponse encodedPublicKey */
        encodedPublicKey?: (Uint8Array|null);

        /** InitRuntimeResponse encodedEcdhPublicKey */
        encodedEcdhPublicKey?: (Uint8Array|null);

        /** InitRuntimeResponse attestation */
        attestation?: (pruntimeRpc.IAttestation|null);
    }

    /** Represents an InitRuntimeResponse. */
    class InitRuntimeResponse implements IInitRuntimeResponse {

        /**
         * Constructs a new InitRuntimeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IInitRuntimeResponse);

        /** InitRuntimeResponse encodedRuntimeInfo. */
        public encodedRuntimeInfo: Uint8Array;

        /** InitRuntimeResponse encodedGenesisBlockHash. */
        public encodedGenesisBlockHash: Uint8Array;

        /** InitRuntimeResponse encodedPublicKey. */
        public encodedPublicKey: Uint8Array;

        /** InitRuntimeResponse encodedEcdhPublicKey. */
        public encodedEcdhPublicKey: Uint8Array;

        /** InitRuntimeResponse attestation. */
        public attestation?: (pruntimeRpc.IAttestation|null);

        /** InitRuntimeResponse _attestation. */
        public _attestation?: "attestation";

        /**
         * Creates a new InitRuntimeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitRuntimeResponse instance
         */
        public static create(properties?: pruntimeRpc.IInitRuntimeResponse): pruntimeRpc.InitRuntimeResponse;

        /**
         * Encodes the specified InitRuntimeResponse message. Does not implicitly {@link pruntimeRpc.InitRuntimeResponse.verify|verify} messages.
         * @param message InitRuntimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IInitRuntimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitRuntimeResponse message, length delimited. Does not implicitly {@link pruntimeRpc.InitRuntimeResponse.verify|verify} messages.
         * @param message InitRuntimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IInitRuntimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitRuntimeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitRuntimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.InitRuntimeResponse;

        /**
         * Decodes an InitRuntimeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitRuntimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.InitRuntimeResponse;

        /**
         * Verifies an InitRuntimeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitRuntimeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitRuntimeResponse
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.InitRuntimeResponse;

        /**
         * Creates a plain object from an InitRuntimeResponse message. Also converts values to other types if specified.
         * @param message InitRuntimeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.InitRuntimeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitRuntimeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Attestation. */
    interface IAttestation {

        /** Attestation version */
        version?: (number|null);

        /** Attestation provider */
        provider?: (string|null);

        /** Attestation payload */
        payload?: (pruntimeRpc.IAttestationReport|null);

        /** Attestation timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents an Attestation. */
    class Attestation implements IAttestation {

        /**
         * Constructs a new Attestation.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IAttestation);

        /** Attestation version. */
        public version: number;

        /** Attestation provider. */
        public provider: string;

        /** Attestation payload. */
        public payload?: (pruntimeRpc.IAttestationReport|null);

        /** Attestation timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new Attestation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attestation instance
         */
        public static create(properties?: pruntimeRpc.IAttestation): pruntimeRpc.Attestation;

        /**
         * Encodes the specified Attestation message. Does not implicitly {@link pruntimeRpc.Attestation.verify|verify} messages.
         * @param message Attestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attestation message, length delimited. Does not implicitly {@link pruntimeRpc.Attestation.verify|verify} messages.
         * @param message Attestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attestation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.Attestation;

        /**
         * Decodes an Attestation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.Attestation;

        /**
         * Verifies an Attestation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attestation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attestation
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.Attestation;

        /**
         * Creates a plain object from an Attestation message. Also converts values to other types if specified.
         * @param message Attestation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.Attestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attestation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AttestationReport. */
    interface IAttestationReport {

        /** AttestationReport report */
        report?: (string|null);

        /** AttestationReport signature */
        signature?: (Uint8Array|null);

        /** AttestationReport signingCert */
        signingCert?: (Uint8Array|null);
    }

    /** Represents an AttestationReport. */
    class AttestationReport implements IAttestationReport {

        /**
         * Constructs a new AttestationReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IAttestationReport);

        /** AttestationReport report. */
        public report: string;

        /** AttestationReport signature. */
        public signature: Uint8Array;

        /** AttestationReport signingCert. */
        public signingCert: Uint8Array;

        /**
         * Creates a new AttestationReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttestationReport instance
         */
        public static create(properties?: pruntimeRpc.IAttestationReport): pruntimeRpc.AttestationReport;

        /**
         * Encodes the specified AttestationReport message. Does not implicitly {@link pruntimeRpc.AttestationReport.verify|verify} messages.
         * @param message AttestationReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IAttestationReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttestationReport message, length delimited. Does not implicitly {@link pruntimeRpc.AttestationReport.verify|verify} messages.
         * @param message AttestationReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IAttestationReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttestationReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttestationReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.AttestationReport;

        /**
         * Decodes an AttestationReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttestationReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.AttestationReport;

        /**
         * Verifies an AttestationReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttestationReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttestationReport
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.AttestationReport;

        /**
         * Creates a plain object from an AttestationReport message. Also converts values to other types if specified.
         * @param message AttestationReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.AttestationReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttestationReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEgressMessagesResponse. */
    interface IGetEgressMessagesResponse {

        /** GetEgressMessagesResponse encodedMessages */
        encodedMessages?: (Uint8Array|null);
    }

    /** Represents a GetEgressMessagesResponse. */
    class GetEgressMessagesResponse implements IGetEgressMessagesResponse {

        /**
         * Constructs a new GetEgressMessagesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IGetEgressMessagesResponse);

        /** GetEgressMessagesResponse encodedMessages. */
        public encodedMessages: Uint8Array;

        /**
         * Creates a new GetEgressMessagesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEgressMessagesResponse instance
         */
        public static create(properties?: pruntimeRpc.IGetEgressMessagesResponse): pruntimeRpc.GetEgressMessagesResponse;

        /**
         * Encodes the specified GetEgressMessagesResponse message. Does not implicitly {@link pruntimeRpc.GetEgressMessagesResponse.verify|verify} messages.
         * @param message GetEgressMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IGetEgressMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEgressMessagesResponse message, length delimited. Does not implicitly {@link pruntimeRpc.GetEgressMessagesResponse.verify|verify} messages.
         * @param message GetEgressMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IGetEgressMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEgressMessagesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEgressMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.GetEgressMessagesResponse;

        /**
         * Decodes a GetEgressMessagesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEgressMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.GetEgressMessagesResponse;

        /**
         * Verifies a GetEgressMessagesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEgressMessagesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEgressMessagesResponse
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.GetEgressMessagesResponse;

        /**
         * Creates a plain object from a GetEgressMessagesResponse message. Also converts values to other types if specified.
         * @param message GetEgressMessagesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.GetEgressMessagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEgressMessagesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContractQueryRequest. */
    interface IContractQueryRequest {

        /** ContractQueryRequest encodedEncryptedData */
        encodedEncryptedData?: (Uint8Array|null);

        /** ContractQueryRequest signature */
        signature?: (pruntimeRpc.ISignature|null);
    }

    /** Represents a ContractQueryRequest. */
    class ContractQueryRequest implements IContractQueryRequest {

        /**
         * Constructs a new ContractQueryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IContractQueryRequest);

        /** ContractQueryRequest encodedEncryptedData. */
        public encodedEncryptedData: Uint8Array;

        /** ContractQueryRequest signature. */
        public signature?: (pruntimeRpc.ISignature|null);

        /**
         * Creates a new ContractQueryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractQueryRequest instance
         */
        public static create(properties?: pruntimeRpc.IContractQueryRequest): pruntimeRpc.ContractQueryRequest;

        /**
         * Encodes the specified ContractQueryRequest message. Does not implicitly {@link pruntimeRpc.ContractQueryRequest.verify|verify} messages.
         * @param message ContractQueryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IContractQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractQueryRequest message, length delimited. Does not implicitly {@link pruntimeRpc.ContractQueryRequest.verify|verify} messages.
         * @param message ContractQueryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IContractQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractQueryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractQueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.ContractQueryRequest;

        /**
         * Decodes a ContractQueryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractQueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.ContractQueryRequest;

        /**
         * Verifies a ContractQueryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractQueryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractQueryRequest
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.ContractQueryRequest;

        /**
         * Creates a plain object from a ContractQueryRequest message. Also converts values to other types if specified.
         * @param message ContractQueryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.ContractQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractQueryRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Signature. */
    interface ISignature {

        /** Signature signedBy */
        signedBy?: (pruntimeRpc.ICertificate|null);

        /** Signature signatureType */
        signatureType?: (pruntimeRpc.SignatureType|null);

        /** Signature signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a Signature. */
    class Signature implements ISignature {

        /**
         * Constructs a new Signature.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.ISignature);

        /** Signature signedBy. */
        public signedBy?: (pruntimeRpc.ICertificate|null);

        /** Signature signatureType. */
        public signatureType: pruntimeRpc.SignatureType;

        /** Signature signature. */
        public signature: Uint8Array;

        /**
         * Creates a new Signature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Signature instance
         */
        public static create(properties?: pruntimeRpc.ISignature): pruntimeRpc.Signature;

        /**
         * Encodes the specified Signature message. Does not implicitly {@link pruntimeRpc.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link pruntimeRpc.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.Signature;

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.Signature;

        /**
         * Verifies a Signature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Signature
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.Signature;

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @param message Signature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Signature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Certificate. */
    interface ICertificate {

        /** Certificate encodedBody */
        encodedBody?: (Uint8Array|null);

        /** Certificate signature */
        signature?: (pruntimeRpc.ISignature|null);
    }

    /** Represents a Certificate. */
    class Certificate implements ICertificate {

        /**
         * Constructs a new Certificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.ICertificate);

        /** Certificate encodedBody. */
        public encodedBody: Uint8Array;

        /** Certificate signature. */
        public signature?: (pruntimeRpc.ISignature|null);

        /**
         * Creates a new Certificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Certificate instance
         */
        public static create(properties?: pruntimeRpc.ICertificate): pruntimeRpc.Certificate;

        /**
         * Encodes the specified Certificate message. Does not implicitly {@link pruntimeRpc.Certificate.verify|verify} messages.
         * @param message Certificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Certificate message, length delimited. Does not implicitly {@link pruntimeRpc.Certificate.verify|verify} messages.
         * @param message Certificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Certificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Certificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.Certificate;

        /**
         * Decodes a Certificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Certificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.Certificate;

        /**
         * Verifies a Certificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Certificate
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.Certificate;

        /**
         * Creates a plain object from a Certificate message. Also converts values to other types if specified.
         * @param message Certificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.Certificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Certificate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SignatureType enum. */
    enum SignatureType {
        Ed25519 = 0,
        Sr25519 = 1,
        Ecdsa = 2,
        Ed25519WrapBytes = 3,
        Sr25519WrapBytes = 4,
        EcdsaWrapBytes = 5
    }

    /** Properties of a ContractQueryResponse. */
    interface IContractQueryResponse {

        /** ContractQueryResponse encodedEncryptedData */
        encodedEncryptedData?: (Uint8Array|null);
    }

    /** Represents a ContractQueryResponse. */
    class ContractQueryResponse implements IContractQueryResponse {

        /**
         * Constructs a new ContractQueryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IContractQueryResponse);

        /** ContractQueryResponse encodedEncryptedData. */
        public encodedEncryptedData: Uint8Array;

        /**
         * Creates a new ContractQueryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractQueryResponse instance
         */
        public static create(properties?: pruntimeRpc.IContractQueryResponse): pruntimeRpc.ContractQueryResponse;

        /**
         * Encodes the specified ContractQueryResponse message. Does not implicitly {@link pruntimeRpc.ContractQueryResponse.verify|verify} messages.
         * @param message ContractQueryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IContractQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractQueryResponse message, length delimited. Does not implicitly {@link pruntimeRpc.ContractQueryResponse.verify|verify} messages.
         * @param message ContractQueryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IContractQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractQueryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.ContractQueryResponse;

        /**
         * Decodes a ContractQueryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.ContractQueryResponse;

        /**
         * Verifies a ContractQueryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractQueryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractQueryResponse
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.ContractQueryResponse;

        /**
         * Creates a plain object from a ContractQueryResponse message. Also converts values to other types if specified.
         * @param message ContractQueryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.ContractQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractQueryResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetWorkerStateRequest. */
    interface IGetWorkerStateRequest {

        /** GetWorkerStateRequest publicKey */
        publicKey?: (Uint8Array|null);
    }

    /** Represents a GetWorkerStateRequest. */
    class GetWorkerStateRequest implements IGetWorkerStateRequest {

        /**
         * Constructs a new GetWorkerStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IGetWorkerStateRequest);

        /** GetWorkerStateRequest publicKey. */
        public publicKey: Uint8Array;

        /**
         * Creates a new GetWorkerStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetWorkerStateRequest instance
         */
        public static create(properties?: pruntimeRpc.IGetWorkerStateRequest): pruntimeRpc.GetWorkerStateRequest;

        /**
         * Encodes the specified GetWorkerStateRequest message. Does not implicitly {@link pruntimeRpc.GetWorkerStateRequest.verify|verify} messages.
         * @param message GetWorkerStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IGetWorkerStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetWorkerStateRequest message, length delimited. Does not implicitly {@link pruntimeRpc.GetWorkerStateRequest.verify|verify} messages.
         * @param message GetWorkerStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IGetWorkerStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetWorkerStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetWorkerStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.GetWorkerStateRequest;

        /**
         * Decodes a GetWorkerStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetWorkerStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.GetWorkerStateRequest;

        /**
         * Verifies a GetWorkerStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetWorkerStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetWorkerStateRequest
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.GetWorkerStateRequest;

        /**
         * Creates a plain object from a GetWorkerStateRequest message. Also converts values to other types if specified.
         * @param message GetWorkerStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.GetWorkerStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetWorkerStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WorkerState. */
    interface IWorkerState {

        /** WorkerState registered */
        registered?: (boolean|null);

        /** WorkerState unresponsive */
        unresponsive?: (boolean|null);

        /** WorkerState benchState */
        benchState?: (pruntimeRpc.IBenchState|null);

        /** WorkerState miningState */
        miningState?: (pruntimeRpc.IMiningState|null);

        /** WorkerState waitingHeartbeats */
        waitingHeartbeats?: (number[]|null);

        /** WorkerState lastHeartbeatForBlock */
        lastHeartbeatForBlock?: (number|null);

        /** WorkerState lastHeartbeatAtBlock */
        lastHeartbeatAtBlock?: (number|null);

        /** WorkerState lastGkResponsiveEvent */
        lastGkResponsiveEvent?: (pruntimeRpc.ResponsiveEvent|null);

        /** WorkerState lastGkResponsiveEventAtBlock */
        lastGkResponsiveEventAtBlock?: (number|null);

        /** WorkerState tokenomicInfo */
        tokenomicInfo?: (pruntimeRpc.ITokenomicInfo|null);
    }

    /** Represents a WorkerState. */
    class WorkerState implements IWorkerState {

        /**
         * Constructs a new WorkerState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IWorkerState);

        /** WorkerState registered. */
        public registered: boolean;

        /** WorkerState unresponsive. */
        public unresponsive: boolean;

        /** WorkerState benchState. */
        public benchState?: (pruntimeRpc.IBenchState|null);

        /** WorkerState miningState. */
        public miningState?: (pruntimeRpc.IMiningState|null);

        /** WorkerState waitingHeartbeats. */
        public waitingHeartbeats: number[];

        /** WorkerState lastHeartbeatForBlock. */
        public lastHeartbeatForBlock: number;

        /** WorkerState lastHeartbeatAtBlock. */
        public lastHeartbeatAtBlock: number;

        /** WorkerState lastGkResponsiveEvent. */
        public lastGkResponsiveEvent: pruntimeRpc.ResponsiveEvent;

        /** WorkerState lastGkResponsiveEventAtBlock. */
        public lastGkResponsiveEventAtBlock: number;

        /** WorkerState tokenomicInfo. */
        public tokenomicInfo?: (pruntimeRpc.ITokenomicInfo|null);

        /**
         * Creates a new WorkerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorkerState instance
         */
        public static create(properties?: pruntimeRpc.IWorkerState): pruntimeRpc.WorkerState;

        /**
         * Encodes the specified WorkerState message. Does not implicitly {@link pruntimeRpc.WorkerState.verify|verify} messages.
         * @param message WorkerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IWorkerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorkerState message, length delimited. Does not implicitly {@link pruntimeRpc.WorkerState.verify|verify} messages.
         * @param message WorkerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IWorkerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorkerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.WorkerState;

        /**
         * Decodes a WorkerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorkerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.WorkerState;

        /**
         * Verifies a WorkerState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorkerState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorkerState
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.WorkerState;

        /**
         * Creates a plain object from a WorkerState message. Also converts values to other types if specified.
         * @param message WorkerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.WorkerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorkerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BenchState. */
    interface IBenchState {

        /** BenchState startBlock */
        startBlock?: (number|null);

        /** BenchState startTime */
        startTime?: (number|Long|null);

        /** BenchState duration */
        duration?: (number|null);
    }

    /** Represents a BenchState. */
    class BenchState implements IBenchState {

        /**
         * Constructs a new BenchState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IBenchState);

        /** BenchState startBlock. */
        public startBlock: number;

        /** BenchState startTime. */
        public startTime: (number|Long);

        /** BenchState duration. */
        public duration: number;

        /**
         * Creates a new BenchState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BenchState instance
         */
        public static create(properties?: pruntimeRpc.IBenchState): pruntimeRpc.BenchState;

        /**
         * Encodes the specified BenchState message. Does not implicitly {@link pruntimeRpc.BenchState.verify|verify} messages.
         * @param message BenchState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IBenchState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BenchState message, length delimited. Does not implicitly {@link pruntimeRpc.BenchState.verify|verify} messages.
         * @param message BenchState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IBenchState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BenchState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BenchState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.BenchState;

        /**
         * Decodes a BenchState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BenchState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.BenchState;

        /**
         * Verifies a BenchState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BenchState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BenchState
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.BenchState;

        /**
         * Creates a plain object from a BenchState message. Also converts values to other types if specified.
         * @param message BenchState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.BenchState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BenchState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MiningState. */
    interface IMiningState {

        /** MiningState sessionId */
        sessionId?: (number|null);

        /** MiningState paused */
        paused?: (boolean|null);

        /** MiningState startTime */
        startTime?: (number|Long|null);
    }

    /** Represents a MiningState. */
    class MiningState implements IMiningState {

        /**
         * Constructs a new MiningState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IMiningState);

        /** MiningState sessionId. */
        public sessionId: number;

        /** MiningState paused. */
        public paused: boolean;

        /** MiningState startTime. */
        public startTime: (number|Long);

        /**
         * Creates a new MiningState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MiningState instance
         */
        public static create(properties?: pruntimeRpc.IMiningState): pruntimeRpc.MiningState;

        /**
         * Encodes the specified MiningState message. Does not implicitly {@link pruntimeRpc.MiningState.verify|verify} messages.
         * @param message MiningState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IMiningState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MiningState message, length delimited. Does not implicitly {@link pruntimeRpc.MiningState.verify|verify} messages.
         * @param message MiningState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IMiningState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MiningState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MiningState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.MiningState;

        /**
         * Decodes a MiningState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MiningState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.MiningState;

        /**
         * Verifies a MiningState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MiningState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MiningState
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.MiningState;

        /**
         * Creates a plain object from a MiningState message. Also converts values to other types if specified.
         * @param message MiningState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.MiningState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MiningState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EchoMessage. */
    interface IEchoMessage {

        /** EchoMessage echoMsg */
        echoMsg?: (Uint8Array|null);
    }

    /** Represents an EchoMessage. */
    class EchoMessage implements IEchoMessage {

        /**
         * Constructs a new EchoMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.IEchoMessage);

        /** EchoMessage echoMsg. */
        public echoMsg: Uint8Array;

        /**
         * Creates a new EchoMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EchoMessage instance
         */
        public static create(properties?: pruntimeRpc.IEchoMessage): pruntimeRpc.EchoMessage;

        /**
         * Encodes the specified EchoMessage message. Does not implicitly {@link pruntimeRpc.EchoMessage.verify|verify} messages.
         * @param message EchoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.IEchoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EchoMessage message, length delimited. Does not implicitly {@link pruntimeRpc.EchoMessage.verify|verify} messages.
         * @param message EchoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.IEchoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EchoMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EchoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.EchoMessage;

        /**
         * Decodes an EchoMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EchoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.EchoMessage;

        /**
         * Verifies an EchoMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EchoMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EchoMessage
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.EchoMessage;

        /**
         * Creates a plain object from an EchoMessage message. Also converts values to other types if specified.
         * @param message EchoMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.EchoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EchoMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ResponsiveEvent enum. */
    enum ResponsiveEvent {
        NoEvent = 0,
        EnterUnresponsive = 1,
        ExitUnresponsive = 2
    }

    /** Properties of a TokenomicInfo. */
    interface ITokenomicInfo {

        /** TokenomicInfo v */
        v?: (string|null);

        /** TokenomicInfo vInit */
        vInit?: (string|null);

        /** TokenomicInfo payable */
        payable?: (string|null);

        /** TokenomicInfo vUpdateAt */
        vUpdateAt?: (number|Long|null);

        /** TokenomicInfo vUpdateBlock */
        vUpdateBlock?: (number|null);

        /** TokenomicInfo iterationLast */
        iterationLast?: (number|Long|null);

        /** TokenomicInfo challengeTimeLast */
        challengeTimeLast?: (number|Long|null);

        /** TokenomicInfo pBench */
        pBench?: (string|null);

        /** TokenomicInfo pInstant */
        pInstant?: (string|null);

        /** TokenomicInfo confidenceLevel */
        confidenceLevel?: (number|null);

        /** TokenomicInfo lastPayout */
        lastPayout?: (string|null);

        /** TokenomicInfo lastPayoutAtBlock */
        lastPayoutAtBlock?: (number|null);

        /** TokenomicInfo totalPayout */
        totalPayout?: (string|null);

        /** TokenomicInfo totalPayoutCount */
        totalPayoutCount?: (number|null);

        /** TokenomicInfo lastSlash */
        lastSlash?: (string|null);

        /** TokenomicInfo lastSlashAtBlock */
        lastSlashAtBlock?: (number|null);

        /** TokenomicInfo totalSlash */
        totalSlash?: (string|null);

        /** TokenomicInfo totalSlashCount */
        totalSlashCount?: (number|null);
    }

    /** Represents a TokenomicInfo. */
    class TokenomicInfo implements ITokenomicInfo {

        /**
         * Constructs a new TokenomicInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pruntimeRpc.ITokenomicInfo);

        /** TokenomicInfo v. */
        public v: string;

        /** TokenomicInfo vInit. */
        public vInit: string;

        /** TokenomicInfo payable. */
        public payable: string;

        /** TokenomicInfo vUpdateAt. */
        public vUpdateAt: (number|Long);

        /** TokenomicInfo vUpdateBlock. */
        public vUpdateBlock: number;

        /** TokenomicInfo iterationLast. */
        public iterationLast: (number|Long);

        /** TokenomicInfo challengeTimeLast. */
        public challengeTimeLast: (number|Long);

        /** TokenomicInfo pBench. */
        public pBench: string;

        /** TokenomicInfo pInstant. */
        public pInstant: string;

        /** TokenomicInfo confidenceLevel. */
        public confidenceLevel: number;

        /** TokenomicInfo lastPayout. */
        public lastPayout: string;

        /** TokenomicInfo lastPayoutAtBlock. */
        public lastPayoutAtBlock: number;

        /** TokenomicInfo totalPayout. */
        public totalPayout: string;

        /** TokenomicInfo totalPayoutCount. */
        public totalPayoutCount: number;

        /** TokenomicInfo lastSlash. */
        public lastSlash: string;

        /** TokenomicInfo lastSlashAtBlock. */
        public lastSlashAtBlock: number;

        /** TokenomicInfo totalSlash. */
        public totalSlash: string;

        /** TokenomicInfo totalSlashCount. */
        public totalSlashCount: number;

        /**
         * Creates a new TokenomicInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenomicInfo instance
         */
        public static create(properties?: pruntimeRpc.ITokenomicInfo): pruntimeRpc.TokenomicInfo;

        /**
         * Encodes the specified TokenomicInfo message. Does not implicitly {@link pruntimeRpc.TokenomicInfo.verify|verify} messages.
         * @param message TokenomicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pruntimeRpc.ITokenomicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenomicInfo message, length delimited. Does not implicitly {@link pruntimeRpc.TokenomicInfo.verify|verify} messages.
         * @param message TokenomicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pruntimeRpc.ITokenomicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenomicInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenomicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pruntimeRpc.TokenomicInfo;

        /**
         * Decodes a TokenomicInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenomicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pruntimeRpc.TokenomicInfo;

        /**
         * Verifies a TokenomicInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenomicInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenomicInfo
         */
        public static fromObject(object: { [k: string]: any }): pruntimeRpc.TokenomicInfo;

        /**
         * Creates a plain object from a TokenomicInfo message. Also converts values to other types if specified.
         * @param message TokenomicInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pruntimeRpc.TokenomicInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenomicInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
