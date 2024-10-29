import * as LE from '@lucid-evolution/lucid';

declare global {
    let cardano: any;
    let lucid: any

}

export type Wallet
    = (() => LE.Wallet)
    | undefined;


const VestingSchema = LE.Data.Object({
    stakeholder: LE.Data.Bytes(),
    deadline: LE.Data.Integer(),

});

export type VestingType = LE.Data.Static<typeof VestingSchema>;
export const VestingType = VestingSchema as unknown as VestingType;
