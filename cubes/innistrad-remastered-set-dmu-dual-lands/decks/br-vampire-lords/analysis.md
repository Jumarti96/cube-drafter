---
deck_name: "br-vampire-lords"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-08-26T03:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x8   Swamp                                
  x5   Mountain                             
  x2   Geothermal Bog                       BR dual, enters tapped
  x1   Haunted Ridge                        BR dual, untapped with 2+ other lands
```

### CREATURES (17)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Indulgent Aristocrat                       x2    B      threat                          U
  1  Voldaren Epicure                           x2    R      threat                          C
  2  Asylum Visitor                             x2    B      threat                          U
  2  Blood Petal Celebrant                      x1    R      threat                          C
  2  Bloodtithe Harvester                       x2    BR     threat                          U
  2  Furyblade Vampire                          x1    R      threat                          U
  2  Metallic Mimic                             x1    C      payoff                          R
  2  Olivia's Dragoon                           x2    B      threat                          C
  3  Captivating Vampire                        x1    B      payoff                          R
  3  Stromkirk Occultist                        x2    R      threat                          U
  4  Bloodline Keeper // Lord of Lineage        x1    B      payoff                          M
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Tragic Slip                                x2    B      interaction                     C
  2  Infernal Grasp                             x2    B      interaction                     U
```

### OTHER SPELLS (3)

```
CMC  Card                                       Qty   Color  Role                            Rar
  3  Sorin, Imperious Bloodlord                 x1    B      payoff                          M
  3  Stensia Masquerade                         x2    R      payoff                          U
```

## SIDEBOARD (10)

```
Card                                       Qty   Color  Role / When to board in                    Rar
Abrade                                     x2    R      hate — artifacts                           U
Murderous Compulsion                       x2    B      flex — creature decks                      C
Fiery Temper                               x2    R      hate — evasion / reach                     U
Gluttonous Guest                           x2    B      flex — faster aggro                        C
Savage Alliance                            x2    R      hate — wide_boards                         U
```

## ANALYSIS

### DECK IDENTITY

The purest expression of the constraint: a Vampire tribal aggro deck where the tribe IS the engine. Sixteen of the seventeen creature copies are printed Vampires, and the seventeenth — Metallic Mimic — becomes one on entry ('This creature IS the chosen type in addition to its other types'), so the board is 17 of 17 Vampires and every tribal clause in the deck reads the whole board with no dead cards. Two true board-wide anthems stack on it — Captivating Vampire ('Other Vampire creatures you control get +1/+1') and Bloodline Keeper's flipped Lord of Lineage ('+2/+2') — alongside Metallic Mimic, whose counters attach to Vampires as they ENTER and therefore survive its own removal, and Indulgent Aristocrat, whose board-wide counters cost {2} and a body per use. Stensia Masquerade x2 then gives the whole attacking board first strike, which is what converts raw power into a won combat rather than a trade — and being an enchantment against a cube with 2 enchantment answers in 277 cards, both white, it is the least removable piece of the stack.

### 17 OF 17 — THE TRIBE IS THE ENGINE

This is the tightest constraint match of the four builds, and the number is the reason. Sixteen of the seventeen creature copies are printed Vampires; the seventeenth, Metallic Mimic, *becomes* one on entry (*"This creature **is** the chosen type in addition to its other types"*). So Captivating Vampire's *"Other **Vampire** creatures you control get +1/+1"* covers **16 of the 16 other creatures — 100%**, and there is not one dead tribal clause anywhere in the deck.

That matters because five separate cards in this list read the word Vampire:

| Card | What it reads |
|---|---|
| Captivating Vampire | anthem over other Vampires |
| Bloodline Keeper → Lord of Lineage | flip gate "five or more Vampires"; back face +2/+2 |
| Stensia Masquerade | counter on each Vampire that connects |
| Indulgent Aristocrat | counter on each Vampire you control |
| Sorin, Imperious Bloodlord | +1 counter if Vampire; −3 puts a Vampire from hand |

Every one of them is at maximum value. That is what the Vampire constraint buys you, and it is why this build exists even though it is not the most powerful of the four.

### THE HONEST PROBLEM: THE LORDS ARE SINGLETONS

The grill's Monte Carlo is worth stating plainly rather than burying. Under the 5-rare cap, both true anthems are 1-ofs:

| Payoff | On curve, on the play |
|---|---|
| Captivating Vampire `{1}{B}{B}` on turn 3 | **~15%** |
| Bloodline Keeper `{2}{B}{B}` on turn 4 | **~15%** |

And the manabase cannot fix that — it is already at the pool's ceiling. The cube prints exactly **two** BR duals (Geothermal Bog at 2 of 2, Haunted Ridge at 1 of 1) and both are maxed; Evolving Wilds fetches tapped. The binding constraint is not mana, it is **singleton-ness**.

So the deck is deliberately built so that neither lord is required. The reliable payoff is **Stensia Masquerade ×2** — uncapped at two copies, and an enchantment against a cube holding **2 enchantment answers in 277 cards, both white**. Against any non-white opponent it simply cannot be removed. First strike on the whole attacking board is what turns "+1/+1" into a won combat rather than a bigger trade.

### THE ANTHEM STACK FAILS IN THREE DIFFERENT WAYS ON PURPOSE

An anthem deck's classic weakness is that one removal spell shrinks the board. This stack spans **three permanent types** and two of the buffs are permanent counters that outlive their source:

- **Captivating Vampire** — a rented buff. Kill it, the board shrinks. This is the fragile one.
- **Metallic Mimic** — *"Each other creature you control of the chosen type **enters** with an additional +1/+1 counter"*. The counters are on the bodies. Kill the Mimic and nothing shrinks. Its cost is that it buffs **0 of the creatures already on the battlefield** — it is a forward-looking anthem only.
- **Indulgent Aristocrat** — *"{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control"*. Also permanent. Also honestly priced: each activation costs two mana **and a Vampire**, so on a four-Vampire board it is roughly break-even on total power and it *reduces* the count Bloodline Keeper's flip gate reads. It is in the deck as a one-mana Vampire and the only lifelink; the counters are a flood sink.

### WHAT THE GRILL CHANGED

Worth recording, because it moved the list materially:

- **Olivia's Dragoon ×2 added** — the strongest absence. *"Discard a card: This creature gains flying until end of turn"* is free, repeatable, unlimited evasion **on a Vampire body**: it costs zero tribal purity and zero rare budget, and flying is exactly what a counter-laden creature needs.
- **Furyblade Vampire ×1 added** — trample is the one evasion type Stensia Masquerade's first strike does *not* supply.
- **A false premise corrected.** I had cut Falkenrath Gorger claiming the deck had "0 discard outlets". It has five Blood-token makers whose text is literally *"{1}, {T}, **Discard a card**, Sacrifice this token: Draw a card"* — and my own flood mitigation quoted that clause. The cut stands, but only on the rare budget.
- **Sideboard rebalanced.** Four of ten slots had been pointed at wide boards (17.7% of the cube) while the **58-card evasion class (20.9%)** — the largest class black and red can actually answer — had none. Fiery Temper ×2 replaced Sever the Bloodline ×2.

### A NOTE ON THE SLOT-BAND "DEVIATION"

Threats/Payoffs reads 83.3% of nonland cards against a 45–55% band, and that looks alarming until you check the arithmetic: the three aggro bands cap at 10-15% + 45-55% + 0-10% = **80%**, so under a nonland denominator they cannot sum to 100 and Threats is *forced* above 75% whenever the other two are in band. Measured against the 40-card denominator this deck reads **Interaction 10.0% / Threats 50.0% / Engine 0% / Lands 40%** — all three in range. There is no real deviation here.

### THE ITERATION SHORTLIST

If you tune this deck, the first card to look at is **Voldaren Ambusher**. Its *"deals X damage ... where X is the number of Vampires you control"* has its best possible X in this build, and the grill showed my cut reason was too harsh: I claimed its condition (*"if an opponent lost life this turn"*) is unreliable, but three of twenty-four nonland copies switch it on **without attacking** — Voldaren Epicure ×2's entry ping and Sorin's +1.


### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list.

| Card | Verdict | Count |
|---|---|---|
| Captivating Vampire | INCLUDE x1 | 'Other Vampire creatures you control get +1/+1.' 16 of the 17 creature copies are printed Vampires and the seventeenth (Metallic Mimic naming Vampire) becomes one on the battlefield, so the anthem covers 16 of the 16 OTHER creatures — a 100% hit rate with no dead cards, the highest tribal density of the four builds. Its second ability, 'Tap five untapped Vampires you control: Gain control of target creature', requires not attacking with five bodies and is almost never correct on a turn-5 clock; the card is priced as a three-mana lord. HONEST CAVEAT from the grill: as a 1-of rare under the 5-card cap it is cast on turn 3 in roughly 15% of games on the play, so it is an upgrade the deck finds, not a plan it relies on. |
| Bloodline Keeper // Lord of Lineage | INCLUDE x1 | Flip gate reads 'five or more Vampires' — with 17 Vampire bodies in 24 nonland cards (70.8%), a five-Vampire board is the deck's normal turn-4/5 state, and the tokens it makes are themselves Vampires that count. Declared at weight 0.6 because the +2/+2 anthem is on the BACK face only: the front must survive a turn AND pay {B} with five Vampires already out. The front face's '{T}: Create a 2/2 black Vampire creature token with flying' is the only repeatable body-maker in the tribe. |
| Metallic Mimic | INCLUDE x1 | Naming Vampire, 'This creature IS the chosen type in addition to its other types' makes it the 17th Vampire, so it is itself anthem-eligible. 'Each other creature you control of the chosen type ENTERS with an additional +1/+1 counter on it' then applies to every Vampire cast after it — declared at weight 0.7, and CORRECTED after the grill: it is not a board-wide buff at all, it buffs 0 of the 17 creature copies already on the battlefield. What it uniquely provides is that its counters sit on the BODIES, so removing the Mimic shrinks nothing. It is the only removal-proof buff in the pool, and that property is what the decapitation mitigation rests on. Opportunity cost disclosed: it consumes a rare slot that Voldaren Bloodcaster (a 2-mana 2/1 FLYING Vampire) would otherwise take. |
| Stensia Masquerade | INCLUDE x2 | 'Attacking creatures you control have first strike. Whenever a Vampire you control deals combat damage to a player, put a +1/+1 counter on it.' The counter clause covers 17 of 17 creature copies. First strike is what converts an anthem from 'bigger creatures' into 'won combats' — a 3/2 first striker kills a 3/3 blocker and lives. Uncapped at 2 copies and, as an enchantment against a cube holding 2 enchantment answers in 277 cards (both white), it is the least removable payoff in the deck. On the grill's mana analysis this — not the two singleton lords — is the deck's most reliable payoff. |
| Indulgent Aristocrat | INCLUDE x2 | '{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control' covers 17 of 17 Vampire copies and the counters are permanent. Declared at weight 0.5, and the Proposer's sharper framing is adopted: each activation costs {2} AND removes one Vampire from the board it is buffing, which on a 4-Vampire board is roughly break-even on total power and strictly REDUCES the count that Bloodline Keeper's five-Vampire flip gate reads. It is included for the 1-mana Vampire body first and as the deck's only lifelink second; the board-wide counters are a flood sink, not a plan. |
| Sorin, Imperious Bloodlord | INCLUDE x1 | '+1: Target creature you control gains deathtouch and lifelink until end of turn. If it's a Vampire, put a +1/+1 counter on it' — the Vampire clause hits 16 of 16 creature copies, and deathtouch on an anthem-boosted attacker forces bad blocks. '-3: You may put a Vampire creature card from your hand onto the battlefield' hits 15 of 23 nonland cards (65.2%). Declared at weight 0.5 in the payoff role because it buffs one creature per turn, not the board. |
| Falkenrath Gorger | CUT | RESOLVED WEAK KEYSTONE, RESTATED after the grill. The shape judge flagged that its madness grant needs a discard outlet. My first resolution claimed 'discard outlets = 0 of 23 nonland cards' — that count was FALSE and the Challenger disproved it: 5 of 24 nonland copies create a Blood token, whose own text reads '{1}, {T}, Discard a card, Sacrifice this token: Draw a card', and Olivia's Dragoon x2 and Furyblade Vampire x1 are free discard outlets added during grill resolution. The deck also runs 6 printed-madness copies. The cut therefore stands on its SURVIVING and independent ground only: Falkenrath Gorger is a rare, the rare/mythic budget is 5 of 5, and a {R} 2/1 vanilla Vampire body is the worst use of a slot that Captivating Vampire, Bloodline Keeper, Metallic Mimic, Sorin and Haunted Ridge are competing for. |
| Voldaren Ambusher | CUT | X = Vampires you control, and this deck has the best count in the pool. CORRECTED after the grill: my cut reasoned that 'if an opponent lost life this turn' is off in a board stall, but the Challenger showed 3 of 24 nonland copies switch it on WITHOUT attacking — Voldaren Epicure x2 ('When this creature enters, it deals 1 damage to each opponent') and Sorin's '+1: ... Sorin deals 3 damage to any target'. X would realistically be 3-5 here. The cut is therefore downgraded from 'the condition is unreliable' to a genuine judgment call on the 4 interaction slots, which go to Tragic Slip and Infernal Grasp because those answer the 12 toughness-6+ creatures that X damage cannot. It is the strongest card on the iteration shortlist. |
| Neonate's Rush | CUT | 'costs {1} less to cast if you control a Vampire' — with 17 Vampire copies the discount is live on essentially every turn from turn 1, the best possible count. Cut on effect size, not count: 1 damage to a creature kills almost nothing in this cube, where 41 creatures have toughness 4 or more (corrected from 42 after the grill's recount). |
| Olivia Voldaren | CUT | Uniquely GROWS the Vampire count — '{1}{R}: ... deals 1 damage to another target creature. That creature becomes a Vampire in addition to its other types' converts opposing creatures into anthem-eligible bodies, then '{3}{B}{B}: Gain control of target Vampire' steals them. Cut on mana and budget: 4 mana for the body plus 5 more for the steal is two turns past the goldfish turn, and the rare/mythic budget is fully committed to four cards that act the turn they land. |
| Voldaren Bloodcaster // Bloodbat Summoner | CUT | A 2-mana 2/1 FLYING Vampire is real evasion for an anthem to carry, and the Proposer named Metallic Mimic's rare slot as its direct opportunity cost. CORRECTED after the grill: the earlier claim that the deck 'has no sacrifice outlet to trigger the death clause' was false (4 of 24 nonland copies are outlets), and Blood sources are 6 copies, not 4. The cut stands on the rare budget alone: 5 of 5 slots are committed to cards that either multiply the tribal count or cast the {B}{B} payoffs on curve. |
| Blood Artist | CUT | CORRECTED after the grill: the earlier verdict claimed 'this build has no sacrifice outlet', which is false — Indulgent Aristocrat x2 ('{2}, Sacrifice a creature') and Bloodtithe Harvester x2 ('{T}, Sacrifice this creature') are 4 of 24 nonland copies. The surviving ground is body quality, not outlets: a 0/1 contributes essentially nothing to an attacking board where every other two-drop in the list has 2 or 3 power, and this deck wins by connecting rather than by trading. |
| Restless Bloodseeker // Bloodsoaked Reveler | CUT | 'if you gained life this turn' — the final mainboard's only lifegain is Indulgent Aristocrat's lifelink (2 of 23 nonland cards) and Sorin's +1. A 2-mana 1/3 whose payoff is conditional on 3 of 23 cards is below rate for a slot competing with Asylum Visitor's 3/1. |
| Heartless Summoning | CUT | Cost reducer with a strong numerator — 17 of 24 nonland cards are creature spells. Cut on the side effect, which is catastrophic in THIS build specifically: 'Creatures you control get -1/-1' kills Voldaren Epicure x2 (1/1), Indulgent Aristocrat x2 (1/1), Asylum Visitor x2 (3/1), Blood Petal Celebrant x1 (2/1), Metallic Mimic (2/1) and Bloodtithe Harvester's fellow X/1s — and it fights the very anthems it would be discounting. |
| Bedlam Reveler | CUT | Cost reducer: '{1} less for each instant and sorcery card in your graveyard'. This list holds 4 instants/sorceries of 24 nonland cards (16.7%) — Tragic Slip x2 and Infernal Grasp x2. With all four in the graveyard it still costs {2}{R}{R}, past the goldfish turn. |
| Festival Crasher | CUT | '+2/+0 whenever you cast an instant or sorcery' against 4 instants/sorceries in 24 nonland cards (16.7%). It is also a Devil, not a Vampire, so it would be the one body no anthem multiplies. |
| Thermo-Alchemist | CUT | Same 4-of-24 (16.7%) denominator, it is a Human rather than a Vampire, and it is a Defender — it can never attack, which is the only way this deck's anthems convert into damage. |
| Vexing Devil | CUT | A 1-mana 4/3 is the largest body-per-mana in the pool, but 'Creature — Devil' means it would be the only creature copy that NO anthem multiplies: Captivating Vampire, Lord of Lineage, Metallic Mimic and Indulgent Aristocrat all read Vampire. In a build whose entire thesis is tribal purity it is the one card that breaks it, and it costs a rare slot to do so. |
| Hanweir Garrison | CUT | 'create two 1/1 red HUMAN creature tokens' — three bodies per attack is the widest board per card in these colours, but the tokens are Humans. They miss all four anthems, Bloodline Keeper's five-Vampire flip gate, and Stensia Masquerade's counter trigger. Rare slot better spent on a lord. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:6  2:11  3:6  4:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 5.8: Bloodline Keeper // Lord of Lineage@0.6, Metallic Mimic@0.7, Indulgent Aristocrat@0.5, Indulgent Aristocrat@0.5, Sorin, Imperious Bloodlord@0.5) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 12 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 72%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper exists in this shape. Stensia Masquerade's 'Attacking creatures you control have first strike' wins the crack-back against an equal-sized token board, and the anthems mean this deck's bodies are simply larger than 1/1 and 2/2 tokens. Savage Alliance x2 ('deals 1 damage to each creature target opponent controls') is the sideboard answer; Sever the Bloodline was cut from the board during grill resolution because 4 of 10 slots were pointed at wide boards while the cube's 58-card evasion class had none.
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  CONCEDED  noncreature_permanents: This list holds no mainboard artifact or enchantment removal; Abrade x2 ('Destroy target artifact') boards in, and enchantments are unanswerable in black and red at any point in this pool. The reciprocal is what makes the plan work: the cube contains only 2 enchantment answers in 277 cards, both white, so Stensia Masquerade x2 is close to unremovable.
  CONCEDED  stack: Black and red hold no counterspells anywhere in this pool — verified against all 305 cards, the only 'counter target' effects are Mausoleum Wanderer, Overcharged Amalgam, Syncopate and Geistlight Snare, all mono-blue. This deck races instead.
  CONCEDED  graveyard: Verified against oracle text: every graveyard-touching black or red card in this pool is self-serving (flashback, recursion). There is no answer to an opponent's graveyard in these colours at all, so the class is unanswerable rather than merely unboarded. There is no sideboard answer either: the closest, Sever the Bloodline, was cut for the evasion class instead.
```

- curve PASS (aggro 1:6 2:11 3:6 4:1) — no flags raised. The single 4-drop is Bloodline Keeper.
- goldfish PASS (keepable 84%, 3 lands by T3 84%, play by T1 72% / T2 98% / T3 99%) — no flags raised.
- Interaction at 16.7% sits 1.7pp above the 10-15% aggro band. Accepted and grounded: 12 creatures in this cube have toughness 6+ and the largest damage-based answer in black or red is Lightning Axe at 5, so all 12 are immune to burn; Tragic Slip and Infernal Grasp are the only unconditional outs and both cost one or two mana.
- Threats at 83.3% is NOT recorded as a meaningful deviation. The aggro bands cap at 80% under a nonland denominator and therefore cannot sum to 100, forcing Threats above 75% whenever Interaction and Engine are in band; measured against the 40-card denominator this deck reads 10.0% / 50.0% / 0% / 40% lands, all in range.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three mana sinks convert surplus lands into board. Indulgent Aristocrat x2 ('{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control') turns every spare two mana into a permanent board-wide buff. Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' adds a body every turn for no mana. And 5 of 24 nonland copies create a Blood token — Voldaren Epicure x2 and Bloodtithe Harvester x2 on ETB, Blood Petal Celebrant x1 on death — whose '{1}, {T}, Discard a card, Sacrifice this token: Draw a card' converts a spare mana into a fresh card. |
| screw | mitigation | Six 1-drops and eleven 2-drops make two-land hands functional — the goldfish sim reports 98% play-by-turn-2 and an 84% keepable rate. Only two of sixteen lands enter tapped unconditionally. The honest caveat, which the grill quantified: the two {B}{B} payoffs are cast on curve in roughly 15% of games on the play, driven mainly by their being 1-of rares under the 5-card cap rather than by the manabase, which is already at the pool's BR ceiling. The deck is built so that neither is required — 17 Vampire bodies and Stensia Masquerade x2 carry the plan. |
| decapitation | mitigation | The buff is spread across cards that fail differently, spanning THREE permanent types (corrected from the pre-grill claim of four): Creature (Captivating Vampire, Lord of Lineage, Indulgent Aristocrat), Artifact Creature (Metallic Mimic) and Enchantment (Stensia Masquerade x2). Killing Captivating Vampire shrinks the board; killing Metallic Mimic does NOT, because 'Each other creature you control of the chosen type ENTERS with an additional +1/+1 counter' leaves the counters on the bodies, and Indulgent Aristocrat's counters are likewise permanent. Stensia Masquerade is an enchantment against a cube holding 2 enchantment answers in 277 cards, both white. |
| gas-out | mitigation | Stromkirk Occultist x2 is the refuel: 'Whenever this creature deals combat damage to a player, exile the top card of your library. Until end of turn, you may play that card' — and with printed trample plus first strike from Stensia Masquerade it connects through blockers rather than around them. Asylum Visitor x2 reads 'if that player has no cards in hand, you draw a card and you lose 1 life', turning the empty hand an aggro deck produces into card flow. Sorin's '-3: You may put a Vampire creature card from your hand onto the battlefield' converts a stranded card into a body, hitting 16 of 24 nonland cards. Blood tokens bank a rummage. |
| raced | accepted | This deck has one lifegain source (Indulgent Aristocrat's printed lifelink) and no mainboard blocker — Gluttonous Guest (1/4) sits in the sideboard. Mitigating with blockers would mean maindecking bodies in place of the cheap attackers the anthems multiply, which attacks the thesis directly: the payoff's value is a function of how many Vampires are attacking, and a wall is a Vampire that never converts. The grill correctly noted this acceptance originally considered only blockers and not reach; that gap is now closed from the sideboard rather than the identity — Fiery Temper x2 ('deals 3 damage to any target') boards in as reach that costs the tribal count nothing. |
| disruption-fizzle | mitigation | There is no single critical turn — the plan is incremental board development, and a removal spell mid-curve costs one of seventeen Vampire copies. The buff spans three permanent types, so no single answer resets it. Black and red hold no counterspells in this pool (verified across all 305 cards: only Mausoleum Wanderer, Overcharged Amalgam, Syncopate and Geistlight Snare, all mono-blue), so the only stack interaction to play around is blue, and the deck's cheap curve lets it deploy under a counterspell rather than through it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Essence Flux | U splash candidate. 'Exile target creature you control, then return it to the battlefield under your control' — a lords deck wants its Vampires ON the battlefield holding anthem buffs, and blinking one resets any +1/+1 counters Metallic Mimic or Stensia Masquerade put on it. |
| Mausoleum Wanderer | U splash candidate. A Spirit, not a Vampire, so it is invisible to every anthem and every Vampire count in this build; its 'Sacrifice this creature: Counter target instant or sorcery spell' is defensive text on a deck that is the beatdown. |
| Bladestitched Skaab | U splash candidate at {U}{B}. Its anthem reads the wrong tribe — 'Other Zombies you control get +1/+1' — and this list contains no Zombies. |
| Gravecrawler | 'You may cast this card from your graveyard as long as you control a Zombie' — this build contains no Zombies at all, so the recursion clause is permanently off, leaving a 1-mana 2/1 that 'can't block' and is not a Vampire, at rare cost. |
| The Meathook Massacre | 'each creature gets -X/-X' is symmetric against a board of cheap Vampires — at X=1 it kills Voldaren Epicure (1/1), Indulgent Aristocrat (1/1), Asylum Visitor (3/1), Blood Petal Celebrant (2/1) and Bloodmad Vampire (4/1). Its drain half belongs to the aristocrats build (P2), where the deaths are the plan. |
| Skirsdag High Priest | '{T}, Tap two untapped creatures you control: Create a 5/5 black Demon' taxes three attackers' worth of taps per activation, which directly competes with the attack step a lords deck wins through; it is also a Human, invisible to every anthem here. |
| Ghoulish Procession | 'create a 2/2 black Zombie creature token with decayed' makes bodies of the wrong tribe — Zombies miss Captivating Vampire's and Bloodline Keeper's anthems entirely — and decayed means they cannot block and sacrifice themselves after one attack. |
| Invasion of Innistrad // Deluge of the Dead | A 4-mana rare whose -13/-13 is strong removal, but the deck already holds Tragic Slip, Infernal Grasp, Abrade, Murderous Compulsion, Fiery Temper and Lightning Axe below four mana; the rare slot buys nothing the curve does not already cover. |
| Tree of Perdition | 'Defender' — a 4-mana body that can never attack, in a deck whose entire plan is the attack step. Mythic. |
| Zealous Conscripts | 5-mana 3/3 haste with a one-turn steal — a midrange tempo card two turns above this curve, and a rare. |
| Reforge the Soul | 'Each player discards their hand, then draws seven cards' refills the opponent at exactly the point an aggro deck has emptied its own hand onto the board. Rare. |
| Sever the Bloodline | CORRECTED after the grill. It was originally batch-cut for 'not being a Vampire', which is a category error for a Sorcery. The real count: at {3}{B} it is the highest mana value of any card considered for a 2.13-average-MV deck with a turn-5 thesis, and its sweep effect duplicates Savage Alliance's 'deals 1 damage to each creature target opponent controls' at two mana more. It is not in the sideboard either — the grill showed 4 of 10 board slots were pointed at wide boards while the cube's 58-card evasion class had none, so those slots went to Fiery Temper. |
| Edgar Markov | Outside the seed's colour gate (BRW vs. core BR) and not a U splash candidate, so it never entered the seed. In a 40-card deck there is no command zone, so its Eminence token-maker requires a 6-mana {3}{R}{W}{B} hardcast with no BRW land in the pool. Built as its own deck (P4). |

Seed candidates that reached the sketchers but did not make the final list:

| Card | Verdict | Reason |
|---|---|---|
| Olivia's Dragoon | INCLUDE x2 (added post-grill) | An include_candidate the pre-grill build never adjudicated, and the Challenger's strongest absence. 'Discard a card: This creature gains flying until end of turn' is a free, repeatable, no-mana evasion granter ON A VAMPIRE BODY — it costs zero tribal purity (17 of 17 preserved) and zero rare budget, and flying is exactly what an anthem-boosted body needs to convert. Secondarily it is a free discard outlet for the 6 printed-madness copies. |
| Furyblade Vampire | INCLUDE x1 (added post-grill) | An include_candidate never adjudicated pre-grill. 'Trample. At the beginning of combat on your turn, you may discard a card. If you do, this creature gets +3/+0.' Trample is the one evasion type Stensia Masquerade's first strike does NOT supply, and it is the specific answer to chump blockers standing in front of an anthem stack. Added when the recomputed land target freed a nonland slot. |
| Bloodmad Vampire | CUT (post-grill) | The Proposer flagged that running it at 1 copy when 2 are legal was never explained. Resolved by cutting it: a 4/1 for three dies to every 1-damage effect in the cube, and its counter clause is self-only, so it neither multiplies nor is reliably multiplied. |
| Lightning Axe | CUT | 'As an additional cost to cast this spell, discard a card or pay {5}. Lightning Axe deals 5 damage to target creature.' One mana for 5 damage, and the discard is now genuinely fed (6 Blood copies, 3 free outlets). Cut because it misses the 12 toughness-6+ creatures that are precisely why the interaction slots exist, and Infernal Grasp covers those unconditionally. |
| Voldaren Duelist | CUT | 'Haste. When this creature enters, target creature can't block this turn' answers the exact failure case the interaction rationale names, on a Vampire body. Cut on mana value alone: at 4 MV it is the second 4-drop in a deck with one, against a 2.08 average and a turn-5 clock. |
| Bloodhall Priest | CUT | A 4-mana 4/4 Vampire whose hellbent trigger matches the empty hand this deck produces. Cut on the rare budget alone (5 of 5) — the one honest reason, and the pre-grill build gave it no verdict at all. |
| Collective Brutality | CUT | Its escalate cost is a discard, which this deck now genuinely feeds, and its drain mode answers the accepted 'raced' mode. Cut on the rare budget (5 of 5). |
| Collective Defiance | CUT | Removal plus reach, but a rare against a committed budget, and {1}{R}{R} on 7 red sources in a 63%-black deck is the worst cost in the slice. |
| Fiery Temper | SIDEBOARD x2 (added post-grill) | 'deals 3 damage to any target. Madness {R}'. Boarded rather than maindecked: it answers the cube's 58-card evasion class (20.9%), which the pre-grill sideboard covered with zero slots while spending four on wide boards. |
| Sever the Bloodline | CUT from sideboard (post-grill) | At {3}{B} it was the highest mana value of any card in either board against a 2.08-average deck, and its sweep mode duplicates Savage Alliance's at two mana more. It was also inconsistently recorded — present in the sideboard while sitting in considered_but_excluded — which the grill flagged as a sweep-integrity defect. |
| Murderous Compulsion | SIDEBOARD x2 | 'Destroy target tapped creature. Madness {1}{B}' — cheap removal against decks that attack or tap out. Its board-in note previously miscosted it as one mana; it is two either way. |
| Savage Alliance | SIDEBOARD x2 | Its 'Creatures target player controls gain trample' mode is the answer to a board of chump blockers in front of an anthem stack, and the 1-damage sweep answers 1/1 token boards. |
| Abrade | SIDEBOARD x2 | The mainboard has zero artifact answers against a cube 8.7% dense in artifacts, 22 of them colourless. |
| Gluttonous Guest | SIDEBOARD x2 | A 1/4 Vampire wall that still counts for every anthem and for Bloodline Keeper's flip gate — a blocker that costs the tribal count nothing. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.56 adj [MV 2.08 vs 2.5, 0 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  63.0%  prod  68.8%  gap  -5.8pp  [OK]
  R  demand  37.0%  prod  50.0%  gap -13.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool rules: commons/uncommons up to 2 copies; rares/mythics 1 copy.
Extra build constraint: at most 5 rare-or-mythic CARDS across mainboard + sideboard.
Basic lands: format-supplied, unlimited.

  [PASS] Mainboard = 40 (required 40)
  [PASS] Sideboard = 10 (required 10)
  [PASS] Every card exists in the cube mainboard by exact name
  [PASS] Copy limits obeyed (verified via cube_search.get_max_copies with a per_rarity policy)
  [PASS] Rare/mythic cards used: 5 of 5 -> Captivating Vampire, Bloodline Keeper // Lord of Lineage, Metallic Mimic, Sorin, Imperious Bloodlord, Haunted Ridge
  [PASS] Every nonland card usable in B/R (effective_cost.best_mode)
  [PASS] Splash cap: 0 splash colour(s), 0 splash cards used

```
