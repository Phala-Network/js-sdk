/**
 * Polkadot-js API Type Declarations for Parachain APIs.
 */
 import type {ApiPromise} from '@polkadot/api'
 import type {
   ApiTypes,
   SubmittableExtrinsic,
   AugmentedSubmittable,
   MethodResult,
 } from '@polkadot/api/types'
 import type {Vec, Struct, Option, Int, Tuple} from '@polkadot/types/codec'
 import type {bool, u32, u64, u128, Text, Bytes} from '@polkadot/types/primitive'
 import type {AccountId, AccountId32, Balance, H256, Sr25519Signature} from '@polkadot/types/interfaces'
 import type {Registration} from '@polkadot/types/interfaces/identity'
 import type {Observable} from '@polkadot/types/types'
 import type {
   AugmentedQuery,
   AugmentedQueryAt,
 } from '@polkadot/api/types/storage'
 
 declare global {
   type PalletPhalaWorldStatusType = string & (
     'ClaimSpirits' |
     'PurchaseRareOriginOfShells' |
     'PurchasePrimeOriginOfShells' |
     'PreorderOriginOfShells' |
     'LastDayOfSale'
   )
 }
 
 // api.consts
 declare module '@polkadot/api/types/consts' {
   export interface AugmentedConsts<ApiType extends ApiTypes> {
     pwNftSale: {
       minBalanceToClaimSpirit: Balance
       primeOriginOfShellPrice: Balance
       magicOriginOfShellPrice: Balance
       legendaryOriginOfShellPrice: Balance
       secondsPerEra: u64
       iterLimit: u32
     }
   }
 
   export interface QueryableConsts<ApiType extends ApiTypes>
     extends AugmentedConsts<ApiType> {}
 }
 
 // api.query
 declare module '@polkadot/api/types/storage' {
   export interface AugmentedQueries<ApiType extends ApiTypes> {
     pwNftSale: {
       overlord: AugmentedQuery<
         ApiType,
         () => Observable<AccountId32>
       >
 
       canClaimSpirits: AugmentedQuery<
         ApiType,
         () => Observable<bool>
       >
 
       canPreorderOriginOfShells: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<bool>
       >
 
       canPurchaseRareOriginOfShells: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<bool>
       >
 
       canPurchasePrimeOriginOfShells: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<bool>
       >
 
       lastDayOfSale: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<bool>
       >
 
       originOfShellsInventory: AugmentedQueryAt<
         ApiType,
         (
           rarity: RarityType,
           race?: RaceType
         ) => Observable<Vec<NftSaleInfoStruct>>
       >
 
       originOfShellCollectionId: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<NumberOption>
       >
 
       spiritCollectionId: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<NumberOption>
       >
 
       era: AugmentedQuery<ApiType, (opts?: unknown) => Observable<u64>>
 
       zeroDay: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<NumberOption>
       >
 
       originOfShellsMetadata: AugmentedQuery<
         ApiType,
         (race: RaceType) => Observable<Text>
       >
 
       // TODO fixedme
       preorders: AugmentedQueryAt<
         ApiType,
         (orderId?: number) => Observable<PreorderInfoStruct>,
         [Int]
       >
 
       ownerHasPreorder: AugmentedQuery<
         ApiType,
         (account: AccountId32 | string) => Observable<bool>
       >
 
       spiritsMetadata: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<Text>
       >
     }
 
     pwIncubation: {
       shellCollectionId: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<NumberOption>
       >
 
       originOfShellFoodStats: AugmentedQueryAt<
         ApiType,
         (era: number, index?: [number, number]) => Observable<u32>,
         [Int, Tuple] // eraId, (collectId, nftId)
       >
 
       canStartIncubation: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<bool>
       >
 
       foodByOwners: AugmentedQueryAt<
         ApiType,
         (account: AccountId32 | string) => Observable<u32>,
         [Int] // eraId
       >
 
       hatchTimes: AugmentedQueryAt<
         ApiType,
         (collectionId: CollectionId, nftId: NftId) => Observable<u64>
       >
 
       officialHatchTime: AugmentedQuery<
         ApiType,
         (opts?: unknown) => Observable<u64>
       >
     }

     phalaFatContracts: {
      contracts: AugmentedQueryAt<
        ApiType,
        (contractId?: string) => Observable<MethodResult<Option<ContractInfo>>>,
        [string]
      >

      clusters: AugmentedQueryAt<
        ApiType,
        (clusterId?: string) => Observable<MethodResult<Option<ClusterInfo>>>,
        [string] // H256 / cluster id
      >

      clusterContracts: AugmentedQueryAt<
        ApiType,
        (clusterId?: string) => Observable<Vec<H256>>,
        [string]
      >

      clusterWorkers: AugmentedQueryAt<
        ApiType,
        (clusterId?: string) => Observable<Vec<Sr25519Signature>>,
        [string]
      >
     }

     phalaRegistry: {
      contractKeys: AugmentedQueryAt<
        ApiType,
        (contractId?: string) => Observable<Option<string>>,
        [string]
      >

      endpoints: AugmentedQueryAt<
        ApiType,
        (workerId?: string) => Observable<MethodResult<Option<EndpointInfo>>>,
        [string]
      >

      gatkeeper: AugmentedQuery<
         ApiType,
         () => Observable<MethodResult<Vec<H256>>>
       >
     }
 
     uniques: {
       account: AugmentedQueryAt<
         ApiType,
         (
           account: AccountId32 | string,
           collectionId: u32 | number,
           nftId: u32
         ) => Observable<Vec<NumberOption>>,
         [Text, Int, Int]
       >
 
       // @FIXME
       attribute: AugmentedQueryAt<
         ApiType,
         (
           collectionId: u32 | number,
           nftId: u32 | number,
           args: unknown
         ) => Observable<Option<Vec<any>>>,
         [Int, Int, Int]
       >
     }
 
     system: {
       account: AugmentedQueryAt<
         ApiType,
         (account: AccountId32 | string) => Observable<FrameSystemAccountInfo>,
         [Text, Int, Int]
       >
       events: QueryableModuleStorageAt<ApiType>;
     }
 
     identity: {
       identityOf: AugmentedQuery<
         ApiType,
         (
           arg: AccountId | string | Uint8Array
         ) => Observable<Option<Registration>>
       >
     }
 
     rmrkCore: {
       nfts: AugmentedQuery<
         ApiType,
         (
           collectionId: CollectionId,
           nftId: NftId
         ) => Observable<Option<NftMetadataStruct>>
       >
 
       properties: AugmentedQuery<
         ApiType,
         (
           collectionId: u32 | number,
           assetId: u32 | number,
           keyName: Bytes | string
         ) => Observable<Option<Bytes>>
       >
     }
   }
 
   export interface QueryableStorage<ApiType extends ApiTypes>
     extends AugmentedQueries<ApiType> {}
 }
 
 // api.tx
 declare module '@polkadot/api/types/submittable' {
   export interface AugmentedSubmittables<ApiType> {
     pwNftSale: {
       setStatusType:  AugmentedSubmittable<
         (status: boolean, StatusType: PalletPhalaWorldStatusType) => SubmittableExtrinsic<ApiType>
       >
 
       redeemSpirit: AugmentedSubmittable<
         (signature: SignatureLike) => SubmittableExtrinsic<ApiType>
       >
 
       preorderOriginOfShell: AugmentedSubmittable<
         (race: RaceType, career: CareerType) => SubmittableExtrinsic<ApiType>
       >
 
       buyRareOriginOfShell: AugmentedSubmittable<
         (
           rarity: RarityType,
           race: RaceType,
           career: CareerType
         ) => SubmittableExtrinsic<ApiType>
       >
 
       buyPrimeOriginOfShell: AugmentedSubmittable<
         (
           signature: string,
           race: RaceType,
           career: CareerType
         ) => SubmittableExtrinsic<ApiType>
       >
     }
 
     pwIncubation: {
       startIncubation: AugmentedSubmittable<
         (
           collectionId: CollectionId,
           nftId: NftId
         ) => SubmittableExtrinsic<ApiType>
       >
 
       feedOriginOfShell: AugmentedSubmittable<
         (
           collectionId: CollectionId,
           nftId: NftId
         ) => SubmittableExtrinsic<ApiType>
       >
     }
   }
 
   export interface SubmittableExtrinsics<ApiType extends ApiTypes>
     extends AugmentedSubmittables<ApiType> {
     (extrinsic: Uint8Array | string): SubmittableExtrinsic<ApiType>
   }
 }