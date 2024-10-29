import { VestingType, Wallet } from "./types/global";
import * as LE from "@lucid-evolution/lucid";

declare const window: {
    cardano?: any;
    lucid?: LE.LucidEvolution
}

export async function getVestingUTxOs(contractAddr: LE.Address, Datum: VestingType) {
    const utxos = await window.lucid?.utxosAt(contractAddr);
    /* DEBUG */ console.log("show detailed utxos from the contract addr");
    /* DEBUG */ console.log(utxos);
    let res = [];
    for (const utxo of utxos!) {
        const datum = utxo.datum;
        if (datum) {
            try {
                const d = LE.Data.from(datum, Datum);
                res.push({ utxo: utxo, datum: d });
            } catch (err) {
                console.log("error: unable to convert from CBOR object (could be a Map object)");
            }
        }
    }
    /* DEBUG */ console.log("show detailed _valid_ utxos from the contract addr");
    /* DEBUG */ console.log(res);
    return res;
}

export async function queryWalletDetails(wallet: Wallet) {
    const pkh = await getCardanoPKH(wallet);
    /* DEBUG */console.log(pkh);
    const utxos = await wallet!().getUtxos();
    /* DEBUG */ console.log(utxos);
    const balance: BigInt = utxos.reduce((acc, utxo) => acc + utxo.assets.lovelace, 0n);

    return {
        cardanoPKH: pkh,
        cardanoBalance: balance
    };
}

async function getCardanoPKH(wallet: Wallet) {
    const addr = await wallet!().address();
    /* DEBUG */ console.log("wallet addr:", addr);
    const details = LE.getAddressDetails(addr);
    /* DEBUG */ console.log("show address details");
    /* DEBUG */ console.log(details);
    return details.paymentCredential?.hash;
}

/**
 * NOTE: DOM node actions
 */
export function removeChildren(node: any) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}

export function addCell(tr: any, content: any, copyEnabled = false) {
    const td = document.createElement('td');
    tr.appendChild(td);

    if (copyEnabled) {
        const node = document.createElement("p");
        td.appendChild(node);
        const uid = "uid_" + String(Math.random()).slice(2);
        node.setAttribute("id", uid);

        node.appendChild(document.createTextNode(content));
        node.addEventListener(
            "click",
            () => navigator.clipboard.writeText(document.getElementById(uid)?.firstChild?.textContent!)
        );
    } else {
        td.appendChild(document.createTextNode(content));
    }
}

