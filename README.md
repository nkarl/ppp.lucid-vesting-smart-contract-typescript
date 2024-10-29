This is a TypeScript rewrite of a smart contract application demo in Week 03 of the [Plutus Pioneer Program](https://iog-academy.gitbook.io/plutus-pioneers-program-fourth-cohort/) (PPP).

This smart contract demonstrate how to connect the following components into a simple application:

1. a 3rd-party API that provides wallet integration ([Lucid Evolution](https://anastasia-labs.github.io/lucid-evolution) via a chromimum-based extension).
2. a simple application UI based on JavaScript + Webpack + Bootstrap


### Aim

This rewrite largely aims to reinforce my mental model of a smart contract use case on the Cardano blockchain. I want to understand how to connect a wallet address and enact various interactions between the wallet API and blockchain transactions.

Furthermore, I want to get a deeper understanding of the transacted objects (between the web app and APIs). TypeScript's strong policy for typing helps me in the process of reviewing and defining types for many objects.

This rewrite also attempts to update the Lucid app itself. I replaced the Lucid API with the more modern `@lucid-evolution/lucid` API. The latter is actively being developed with the aim to streamline, expand and eventually replace Lucid.

### Run It

```sh
pnpm install && pnpm run start
```

MIT License
