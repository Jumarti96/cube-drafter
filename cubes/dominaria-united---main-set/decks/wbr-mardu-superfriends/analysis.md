---
deck_name: "wbr-mardu-superfriends"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WBR"
format: "40-card"
built_at: "2026-08-20T15:50:55Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x3  Mountain         basic
  x3  Plains           basic
  x2  Swamp            basic
  x2  Crystal Grotto   untapped; scry 1 on ETB; {1},{T}: any colour
  x2  Geothermal Bog   BR dual, enters tapped
  x1  Plaza of Heroes  any colour for legendary spells; {T}: add {C} unconditionally; untapped
  x2  Sacred Peaks     RW dual, enters tapped
  x2  Sunlit Marsh     WB dual, enters tapped
```

### CREATURES (10)

```
CMC  Card                           Qty  Color  Role                      Rar
  2  Elas il-Kor, Sadistic Pilgrim  x1   BW     Deathtouch guard + drain  U
  2  Resolute Reinforcements        x2   W      Flash, 2 walker blockers  U
  2  Salvaged Manaworker            x2   C      Fixing + 0/3 blocker      C
  3  Keldon Strike Team             x2   R      3 bodies when kicked      C
  3  Phyrexian Rager                x1   B      Self-replacing body       C
  4  Griffin Protector              x2   W      Evasive clock             C
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                  Qty  Color  Role                      Rar
  1  Cut Down              x1   B      Removal, 1 mana           U
  2  Destroy Evil          x2   W      Removal or enchantment    C
  2  Lightning Strike      x1   R      Removal or reach          C
  2  Smash to Dust         x1   R      Artifact or wide board    C
  4  Captain's Call        x1   W      3 walker blockers         C
  4  Extinguish the Light  x2   B      Creature or planeswalker  C
```

### OTHER SPELLS (5)

```
CMC  Card                       Qty  Color  Role                         Rar
  3  Liliana of the Veil        x1   B      Walker: edict + discard      M
  4  Jaya, Fiery Negotiator     x1   R      Walker: Monk tokens + reach  M
  4  Karn, Living Legacy        x1   C      Walker: dig + flood sink     M
  4  Prayer of Binding          x1   W      Flash, any nonland perm      U
  5  Urza Assembles the Titans  x1   W      Keystone: dig/deploy/double  R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in         Rar
Battlefly Swarm          x2   B      vs fliers (51 cards)            C
Cut Down                 x1   B      vs fast aggro                   U
Knight of Dusk's Shadow  x2   B      vs lifegain (22 cards)          U
Smash to Dust            x1   R      vs artifacts / token swarms     C
Citizen's Arrest         x2   W      Big threats / opposing walkers  C
Hurloon Battle Hymn      x1   R      vs aggro: 4 dmg + 4 life        U
Prayer of Binding        x1   W      Catch-all 2nd copy              U
```

## ANALYSIS

### DECK IDENTITY

A three-colour Mardu grind deck built around Urza Assembles the Titans and the three planeswalkers the W/B/R rare budget can afford: Liliana of the Veil, Jaya, Fiery Negotiator and the colourless Karn, Living Legacy. It plays a dense, deliberately MODAL removal suite (Prayer of Binding on any nonland permanent, Destroy Evil on fatties-or-enchantments, Extinguish the Light and Lightning Strike on creatures-or-planeswalkers, Smash to Dust on artifacts-or-wide-boards) so that every walker lands into a board the deck has already answered, and backs each walker with token-makers whose bodies absorb attacks. Griffin Protector supplies the evasive clock the walkers alone cannot, and its trigger fires on those same tokens ENTERING rather than consuming them. Honest limitation, stated up front: Urza is a single copy in a 40-card deck, so it is a payoff ACCELERANT, not an assembly requirement - the deck's baseline plan is to hard-cast walkers behind removal, and Urza's Ch.II free deployment plus Ch.III double activation is upside on top of that plan, not a prerequisite for it.

### THE BINDING ARITHMETIC OF "SUPERFRIENDS" IN THIS CUBE

Before anything else, the constraint that shapes this entire deck. The Dominaria United main-set cube contains **exactly four planeswalkers**, and every one of them is mythic:

| Planeswalker | Cost | Identity |
|---|---|---|
| Liliana of the Veil | {1}{B}{B} | B |
| Jaya, Fiery Negotiator | {2}{R}{R} | R |
| Karn, Living Legacy | {4} | colourless |
| Ajani, Sleeper Agent | {1}{G}{G/W/P}{W} | GW |

Urza Assembles the Titans is a rare. Plaza of Heroes is a rare. Every painland in the cube is a rare. Against a **5-card rare/mythic cap**, that gives one equation:

> walkers you run = 5 − 1 (Urza) − (1 if you want Plaza) − (any other rare)

This deck spends its five on Urza + Liliana + Jaya + Karn + Plaza of Heroes. Three walkers is the most any legal build can reach while still owning the keystone and a fixing land, and it requires W (Urza) + B + R — hence Mardu.

### URZA'S CHAPTER I HIT RATE, HONESTLY

Chapter I reads "Scry 4, then you may reveal the top card of your library. If a planeswalker card is revealed this way, put it into your hand." Scry 4 lets you place a planeswalker on top if one is among the four, so the hit rate is P(at least one planeswalker in the top 4):

| Walkers in the 40 | P(hit) |
|---|---|
| 2 | 19.2% |
| **3 (this deck)** | **27.7%** |
| 4 | 35.5% |

Chapter II ("put a planeswalker card with mana value 6 or less from your hand onto the battlefield") has a legal target for all three — Liliana MV 3, Jaya MV 4, Karn MV 4 — but only when one is already in hand. Chapter III doubles loyalty activations on whatever is already deployed.

The conclusion the build draws from this, and states rather than hides: **Urza is an accelerant, not a prerequisite.** One copy in 40 cards is seen with p = 0.375 by the thesis turn. It is deliberately not declared as an assembly role in the structural gate, because declaring it would create a hard failure repairable only with copies the pool does not contain. The deck is built to function on a hard-cast-the-walkers plan; Urza is upside on top of it.

### WHAT THE STRUCTURAL GATE ACTUALLY CAUGHT

The first version of this list failed the assembly gate at p = 0.71 with three walkers declared as the payoff. That failure was not a formality — it exposed that the deck had ten removal spells and almost no way to close a game, with 1/1 Soldier tokens as its only "threats". The repair traded Cut Down x2 to x1 and Lightning Strike x2 to x1 for an evasive clock, which fixed the gate and the deck at the same time.

### THE GRIFFIN / SKYKNIGHT SWAP

That clock was originally Coalition Skyknight. The Phase 9 Challenger killed it on a count: the build's gas-out mitigation had listed Skyknight among six "self-replacing" cards, but its entire oracle text is "Flying / Enlist" — it creates nothing, and the tagger's own resource_exchange for it is empty. Griffin Protector replaced it at identical cost and rarity, and is strictly better here for three separate mechanical reasons:

- It is a 2/3 rather than a 2/2, so it survives The Elder Dragon War chapter I ("deals 2 damage to each creature and each opponent") — one of the cube's six sweepers.
- Its trigger, "Whenever another creature you control enters, this creature gets +1/+1 until end of turn", fires on **10 of the 23 nonland cards**. Captain's Call alone makes it a 5/6 flier for a turn.
- Skyknight's Enlist actively fought the deck's plan: tapping a Soldier to enlist removes a blocker from a planeswalker, which is the only reason those Soldiers are in the deck. Griffin's trigger consumes nothing.

### WHY PLAZA OF HEROES EARNS A RARE SLOT

Plaza's second ability adds any colour but only to cast a **legendary** spell. This deck runs four legendary cards out of 23 nonland cards — Jaya, Liliana and Karn (all Legendary Planeswalkers) plus Elas il-Kor, Sadistic Pilgrim (a Legendary Creature) — and of those, three actually need coloured mana (Karn costs {4}). Those three are precisely the double-pip cards a THIN three-colour base struggles with. Ability 1 ("{T}: Add {C}") is unconditional, so it is never a dead land, and ability 3 ("any color among legendary permanents you control") is live from turn 2 onward off a 2-mana Elas il-Kor — not only after a walker resolves.

### THE DISCLOSED MANA RISK

The mana audit returns PASS on all three colours, but that PASS is weak evidence and should not be read as a green light. The metric counts each dual-typed land fully for two colours, so production sums above 100% across colours and every gap is mechanically negative.

The live question it does not ask: Jaya costs {2}{R}{R}, and only **3 of the 17 lands produce red both untapped and at no extra cost** (Mountain x3). Sacred Peaks x2 and Geothermal Bog x2 enter tapped; Crystal Grotto x2 charges {1} for coloured mana; Plaza's any-colour mana is legendary-only (which does cover Jaya, but at the cost of the land's other uses that turn). The basics were rebalanced from Plains 4 / Mountain 2 to Plains 3 / Mountain 3 specifically to improve this. Red is 23.1% of pip demand and Jaya is the only {R}{R} card, so the residual risk is accepted rather than mitigated further — but a turn-4 Jaya is not something this mana base reliably delivers.

### THREAT CLASSES WITH NO ANSWER

The cube's second-largest threat class is **graveyard interaction: 32 cards, 12.96% density**. A full scan of all 271 pool cards for oracle text that exiles an opponent's graveyard returns exactly one hit — Vohar, Vodalian Desecrator ({U}{B}) — which is off-colour. There is **no graveyard answer available to W/B/R at any rarity in this cube.** Citizen's Arrest in the sideboard does not fill the gap: it exiles a battlefield permanent "until this enchantment leaves the battlefield", which does nothing to a card already in a graveyard and returns the body if the Arrest is destroyed.

The stack is likewise unanswerable in these colours — the cube's only counterspells are blue. And the six sweepers (2.4% density) each wipe this deck's entire Soldier bodyguard layer; at that density no sideboard slot was reserved, which is a conscious decline rather than an oversight.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:9  3:4  4:8  5:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Griffin Protector@0.7, Griffin Protector@0.7) → p=0.84 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5: Keldon Strike Team@0.7, Keldon Strike Team@0.7, Elas il-Kor, Sadistic Pilgrim@0.6) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 16%  T2 91%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Smash to Dust
  OK        single_large_threat: Destroy Evil, Extinguish the Light, Prayer of Binding, Liliana of the Veil
  OK        noncreature_permanents: Prayer of Binding, Destroy Evil, Smash to Dust
  CONCEDED  stack: No counterspell exists in W/B/R in this pool; the only counters are blue (Protect the Negotiators {1}{U}, Ertai Resurrected {2}{U}{B}). This deck answers resolved permanents instead of the stack.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards in the entire cube, so no colour can address this class.
```

- No WARN-tier flags were raised on the final list. Curve PASS (MV 1:1 2:9 3:4 4:8 5:1 - MV2 share 39% against a 15% Midrange floor; MV6+ share 0% against a 10% ceiling). Goldfish PASS (keepable 84% against an 80% floor; 3 lands by turn 3 at 88%).

- Assembly initially FAILED on payoff (3 walkers -> p=0.71 against a 0.75 threshold). Repaired, not rationalised: the gate had exposed a real defect - 10 removal spells and no way to actually close a game. Cut Down x2->x1 and Lightning Strike x2->x1 were traded for an evasive clock. Assembly now PASSes at p=0.84 with 4.4 effective copies.

- Declared explicitly rather than hidden: Urza Assembles the Titans is NOT declared as an assembly role. A single copy in 40 cards is seen with p=0.375 by turn 9 and could never clear a 0.75 gate. Declaring it as a role would create a HARD failure repairable only by copies that do not exist - the pool contains exactly 4 planeswalkers, all mythic, under a 5-card rare/mythic cap. The truthful reading is that Urza is a payoff accelerant layered on top of a hard-cast-the-walkers plan, and the deck is built so that it functions without ever drawing Urza.

- Phase 9 repairs applied to the list: Coalition Skyknight x2 -> Griffin Protector x2 (same cost and rarity budget, 2/3 instead of 2/2, and its trigger fires on tokens ENTERING rather than consuming them via Enlist), and Relic of Legends x1 -> Phyrexian Rager x1 (both grill agents independently named Relic the weakest slot; Rager is the only card in the deck the tagger marks 'Cards: Self-Replacing'). Basics rebalanced Plains 4/Mountain 2 -> Plains 3/Mountain 3 to improve untapped red access for Jaya.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Karn, Living Legacy '-1: Pay any amount of mana. Look at that many cards from the top of your library, then put one of those cards into your hand' is a genuinely uncapped mana sink that converts every surplus land into a selected card. Selection support: Urza chapter I 'Scry 4' and Crystal Grotto x2 'When this land enters, scry 1'. CORRECTION OF RECORD: an earlier draft also named Coalition Skyknight's Enlist and Salvaged Manaworker as absorbers. Neither is one - Enlist has no mana cost at all, and Salvaged Manaworker's '{1}: Add one mana of any color' is net-zero filtering, not a sink. Skyknight is no longer in the deck. The mode rests on Karn's -1, which is real. |
| screw | mitigation | 10 of the 23 nonland cards cost 2 or less (Cut Down at MV1; Destroy Evil x2, Lightning Strike, Smash to Dust, Resolute Reinforcements x2, Elas il-Kor and Salvaged Manaworker x2 at MV2), so a two-land hand has action rather than dead cards. Digging out: Crystal Grotto x2 scry on ETB, Urza chapter I scries 4, Phyrexian Rager draws, and Karn -1 for 1 mana digs one card deep. 9 of the 17 lands produce more than one colour - 6 of them unconditionally (the three common duals at 2 copies each) - which is what actually keeps a two-land hand functional across three colours. |
| decapitation | accepted | If Urza Assembles the Titans is answered on sight the deck loses its accelerant and nothing else - by design, per structural_responses, it is not an assembly requirement. But if a planeswalker is answered on sight there is NO redundancy: the pool contains exactly 4 planeswalkers, all mythic, and the 5-card rare/mythic cap means a 4th copy of the walker package cannot be bought at any price. Mitigating this would mean cutting Plaza of Heroes for Ajani, Sleeper Agent - and Ajani's mana cost is {1}{G}{G/W/P}{W}, in which only the hybrid-Phyrexian pip is payable with life; the {G} is a hard green pip this W/B/R base cannot produce. The cost of mitigation is the deck's mana base, so the exposure is accepted. |
| gas-out | mitigation | Karn -1 is a repeatable draw engine that never runs out; Jaya -1 'Exile the top two cards of your library. Choose one of them. You may play that card this turn' is a second one. On the resource ledger the deck runs 6 of 23 self-replacing nonland cards - Resolute Reinforcements x2 and Keldon Strike Team x2 and Captain's Call each turn one card into two or three permanents, and Phyrexian Rager ('you draw a card and you lose 1 life', tagged 'Cards: Self-Replacing' by the cube tagger) turns one card into a body plus a card. Prayer of Binding also answers a threat AND gains 2 life off one card. |
| raced | accepted | The cube's largest threat class is 51 evasive creatures (20.6% density) and this deck's goldfish is turn 9 - it will lose races it does not interact in. It is built to interact rather than race: 8 mainboard removal spells plus Liliana's -2 edict, and the sideboard adds Battlefly Swarm x2 (a 1-mana flying deathtouch blocker) and Hurloon Battle Hymn (4 damage plus 4 life). Mitigating further in the maindeck would mean cutting walkers for cheap blockers, which is cutting the archetype. |
| disruption-fizzle | mitigation | The critical turn is deploying a walker. It survives interaction because the deck never needs a specific card on a specific turn: there is no combo turn to counter, and the walkers are mechanically independent - losing Liliana to removal does not stop Jaya or Karn. Prayer of Binding has Flash, so the deck can hold up interaction on the turn it would otherwise tap out, and Resolute Reinforcements also has Flash ('You may cast this spell any time you could cast an instant'), letting a walker land into blockers deployed at instant speed on the opponent's end step. Concretely: this deck has no single turn whose failure loses the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Ajani, Sleeper Agent | The 4th planeswalker, but '{1}{G}{G/W/P}{W}' requires both G and W; adding green to a W/B/R deck would need a 4th colour AND consume the last rare/mythic slot, leaving zero budget for Plaza of Heroes. |
| Archangel of Wrath | RARE. 'Kicker {B} and/or {R}... deals 2 damage to any target' twice-kicked is a perfect Mardu card, but all 5 rare/mythic slots are spent on Urza + 3 walkers + Plaza. |
| Ratadrabik of Urborg | RARE. 'Whenever another legendary creature you control dies, create a token that's a copy' - this deck runs 0 legendary creatures (planeswalkers are not creatures), so the trigger reads blank here even before the rare cap. |
| Caves of Koilos / Sacred Foundry-style painlands | Caves of Koilos and Sulfurous Springs are RARE. Spending a rare slot on untapped fixing would cost a planeswalker, which is the archetype itself. |
| Temporary Lockdown | RARE, and 'exile each nonland permanent with mana value 2 or less' would exile this deck's own 1/1 Soldier tokens (MV 0) - anti-synergy with the walker-defence plan. |
| Sheoldred, the Apocalypse | MYTHIC. A first-rate card, but including it means cutting a planeswalker, which directly reduces Urza chapter I/II hit rate - the archetype's whole point. |
| The Elder Dragon War | RARE. Ch.I 'deals 2 damage to each creature and each opponent' would kill this deck's own 1/1 Soldier tokens; also no rare budget. |
| Bone Splinters | 'As an additional cost... sacrifice a creature' - this deck's creatures are walker bodyguards; sacrificing one to kill one is a wash that leaves the walker undefended. |
| Clockwork Drawbridge | 'Defender / {2}{W}, {T}: Tap target creature' - a fine walker wall, but the tap ability costs 3 mana every turn, competing directly with deploying a walker on curve. |
| Griffin Protector | 'Whenever another creature you control enters, this creature gets +1/+1 until end of turn' - a combat trick that only matters when attacking; this deck's tokens stay home defending walkers, so the pump is rarely converted. |
| Samite Herbalist | 'Whenever this creature becomes tapped, you gain 1 life and scry 1' - needs a tap outlet; this deck has only Enlist, and enlisting removes a walker's blocker. |
| Aron, Benalia's Ruin | '{W}{B}, {T}, Sacrifice another creature: Put a +1/+1 counter on each creature you control' - a sacrifice outlet in a deck whose creatures exist to block for walkers; the cost fights the plan. |
| Phyrexian Missionary | 'Kicker {1}{B}... return target creature card from your graveyard to your hand' - fine value, but the deck's best creatures are 1-drop-equivalent token makers whose value is the ETB, already spent. |
| Phyrexian Warhorse | '{1}, Sacrifice another creature' - same conflict as Aron; the token bodies are defence, not fodder. |
| Jaya's Firenado | 'deals 5 damage to target creature or planeswalker' for {4}{R} - 5 mana for removal is unaffordable in a deck that wants turns 3/4/5 for Liliana, Jaya and Urza. |
| Pilfer | 'Target opponent reveals their hand. You choose a nonland card... discards' - proactive discard is worse than Aggressive Sabotage here (which discards two and can be kicked for 3 damage) and the deck can only afford so many do-nothing-to-the-board sorceries. |
| Heroic Charge | 'Creatures you control get +2/+1' - an alpha-strike card; this deck's Soldiers are assigned to blocking duty, so the mass pump is usually idle. |
| Stall for Time | 'Tap up to two target creatures... Draw a card' - the stun-counter upside needs Kicker {1}{U}, and blue is not in this identity, so it is a cantrip Fog for 3. |
| Inscribed Tablet | 'Put a land card from among them into your hand' - land-finding is not this deck's problem; colour-finding is, and Tablet cannot pick a colour. |
| Automatic Librarian | 'When this creature enters, scry 2' - a 2/3 scry body, but Urza chapter I already provides Scry 4 and the deck needs its 3-drops to make multiple bodies. |
| Take Up the Shield / Battle-Rage Blessing | Single-target protection tricks; they save a creature but do nothing to protect a planeswalker, which is what this deck actually needs to protect. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.11 adj [MV 2.96 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  34.6%  prod  47.1%  gap -12.5pp  [OK]
  R  demand  23.1%  prod  58.8%  gap -35.7pp  [OK]
  W  demand  42.3%  prod  58.8%  gap -16.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base_pool: cube_mainboard of dominaria-united---main-set only; every card verified by exact-name match against the working pool cache, and independently re-verified by the Phase 9 Challenger against the bundle's working_pool (zero phantoms).
[PASS] common_uncommon_max_2: PASS - no common or uncommon exceeds 2 copies across mainboard + sideboard combined. Verified programmatically via cube_search.get_max_copies with a per_rarity policy, after the validator itself was proven against a known-bad fixture containing a 3-copy common.
[PASS] rare_mythic_max_1_each: PASS - Urza Assembles the Titans, Jaya, Liliana, Karn, Plaza of Heroes are 1 copy each.
[PASS] rare_mythic_total_max_5: PASS - exactly 5: Urza Assembles the Titans (rare), Plaza of Heroes (rare), Jaya, Fiery Negotiator (mythic), Karn, Living Legacy (mythic), Liliana of the Veil (mythic). Zero rare/mythic cards in the sideboard.
[PASS] basics: Plains x3, Swamp x2, Mountain x3 - format-supplied, exempt from copy limits.
[PASS] colour_legality: PASS - every nonland card returns a usable mode from effective_cost.best_mode(card, ['W','B','R'], []). Two cards print multicolour identities that come only from kicker costs, and BOTH kickers are on-colour here: Keldon Strike Team (RW, Kicker {1}{W}) and Hurloon Battle Hymn (RW, Kicker {W}). No card in this deck is legal only via a restricted mode.
```
