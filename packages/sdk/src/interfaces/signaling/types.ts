// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { VoteStage } from "@phala/sdk/voting";
import type { Bytes, Struct, Text, u32, u64 } from "@polkadot/types-codec";
import type { AccountId } from "@polkadot/types/interfaces/runtime";

/** @name ProposalContents */
export interface ProposalContents extends Bytes {}

/** @name ProposalRecord */
export interface ProposalRecord extends Struct {
  readonly index: u32;
  readonly author: AccountId;
  readonly stage: VoteStage;
  readonly transition_time: u32;
  readonly title: Text;
  readonly contents: Text;
  readonly vote_id: u64;
}

/** @name ProposalTitle */
export interface ProposalTitle extends Bytes {}

export type PHANTOM_SIGNALING = "signaling";
