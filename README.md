This is a TypeScript rewrite of a smart contract application demo in Week 03 of the [Plutus Pioneer Program](https://iog-academy.gitbook.io/plutus-pioneers-program-fourth-cohort/) (PPP).

This app demonstrates how to connect the following components:

1. Wallet integration between the new Lucid API ([Lucid Evolution](https://anastasia-labs.github.io/lucid-evolution) with a chromimum-based Nami wallet extension).
2. a simple UI based on TypeScript + Webpack + Bootstrap


### Aim

This rewrite largely aims to reinforce my mental model of a smart contract use case. I want a deeper understanding of how to connect a wallet address and enact various interactions between the wallet API and blockchain transactions, specifically how objects are transacted between the web app and various APIs. The strong typing system of TypeScript has helped me in the process of reviewing and defining types for many objects.

This rewrite also attempts to update the Lucid app itself. I replaced the old Lucid API with a new and more modern `@lucid-evolution/lucid` API. The new API is actively developed (and seeking funding through IntersectMBO). The maintainers aim to streamline, expand and eventually replace the old Lucid.

### Run It

```sh
pnpm install && pnpm run start
```

MIT License
