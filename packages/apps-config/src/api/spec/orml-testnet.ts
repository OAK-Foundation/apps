// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  alias: {
    tokens: {
      AccountData: 'OrmlAccountData',
      BalanceLock: 'OrmlBalanceLock'
    }
  },
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        Amount: 'i128',
        AmountOf: 'Amount',
        Currency: 'AssetId',
        CurrencyId: {
          _enum: {
            Token: 'TokenSymbol',
            DEXShare: '(DexShare, DexShare)',
            ERC20: 'EvmAddress',
            ChainSafe: '[u8; 32]'
          }
        },
        CurrencyIdOf: 'CurrencyId',
        EvmAddress: 'H160',
        DexShare: {
          _enum: {
            Token: 'TokenSymbol',
            Erc20: 'EvmAddress'
          }
        },
        TokenSymbol: {
          _enum: {
            ACA: 0,
            AUSD: 1,
            DOT: 2,
            LDOT: 3,
            RENBTC: 4,
            KAR: 128,
            KUSD: 129,
            KSM: 130,
            LKSM: 131 // Reserve for XBTC = 132
          }
        },
        OrmlAccountData: {
          free: 'Balance',
          frozen: 'Balance',
          reserved: 'Balance'
        },
        OrmlBalanceLock: {
          amount: 'Balance',
          id: 'LockIdentifier'
        }
      }
    }
  ]
};

export default definitions;
