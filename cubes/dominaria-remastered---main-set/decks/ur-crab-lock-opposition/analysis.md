---
deck_name: "ur-crab-lock-opposition"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-08-02T18:47:19Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  10x Island                 blue source
  4x Mountain               red source
  2x Molten Tributary       UR dual, enters tapped
  1x Sulfur Falls           UR dual, untapped-capable
```

### CREATURES (11)

```
CMC  Card                          Qty   Color  Role                                        Rar
  0  Ornithopter                   x1    C      Engine — free permanent Opposition body / fl  C
  1  Grim Lavamancer               x1    R      Payoff — repeating damage needing no Aura, n  R
  2  Cloud of Faeries              x2    U      Engine — net-free body, refunds two lands, f  C
  2  Mogg War Marshal              x2    R      Engine — two untapped bodies from one card    C
  3  Goblin Medics                 x2    R      Payoff — 1 damage whenever it becomes tapped  C
  3  Horseshoe Crab                x2    U      Engine — repeatable lock fuel / Aura host     C
  3  Man-o'-War                    x1    U      Interaction — tempo bounce + an extra body    C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                          Qty   Color  Role                                        Rar
  2  Counterspell                  x2    U      Interaction — stack protection for the 1-of   C
  3  Frantic Search                x2    U      Engine — net-free dig for the singleton payo  C
  4  Turnabout                     x1    U      Interaction — instant mass tap; strips count  U
  5  Force of Will                 x1    U      Interaction — free stack protection when tap  M
```

### OTHER SPELLS (6)

```
CMC  Card                          Qty   Color  Role                                        Rar
  2  Hermetic Study                x2    U      Engine — repeating damage source (Aura)       C
  3  Quicksilver Dagger            x2    RU     Engine — repeating damage + card draw (Aura)  U
  4  Icy Manipulator               x1    C      Interaction — backup tapper; also taps my ow  U
  4  Opposition                    x1    U      Engine — the lock; each untapped creature ta  R
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                             Rar
Tormod's Crypt                x2    C      SB — graveyard hate                                   U
Ovinize                       x2    U      SB — blanks one attack or one activation for a turn   C
Snap                          x2    U      SB — mana-neutral bounce vs tempo decks               C
Crawlspace                    x1    C      SB — caps attackers at two per combat                 R
Fire // Ice                   x2    RU     SB — removal / tap + cantrip                          U
Confiscate                    x1    U      SB — noncreature permanent answer                     U
```

## ANALYSIS

### DECK IDENTITY

A blue-red prison deck built on Opposition: 'Tap an untapped creature you control: Tap target artifact, creature, or land.' Opposition's cost has no {T} symbol, so every untapped creature you control - including one cast this turn, and including tokens made this turn - taps one of the opponent's permanents. Horseshoe Crab's '{U}: Untap this creature' makes one body repeat it, and Goblin Medics turns the cost itself into damage: 'Whenever this creature becomes tapped, it deals 1 damage to any target.' The list therefore buys cheap and free bodies - Ornithopter at {0}, Cloud of Faeries which refunds two lands, Mogg War Marshal which leaves a token on entry and again on death. Opposition is a singleton rare with no duplicate anywhere in this cube, so it is played as the best draw rather than as the plan: the deck's actual win condition is Hermetic Study or Quicksilver Dagger on the Crab, backed by Grim Lavamancer, which needs no Aura and no Opposition at all.

### THE RULE THAT DEFINES THIS DECK

Opposition reads `Tap an untapped creature you control: Tap target artifact, creature, or land.`

Notice what is **not** there: no `{T}` symbol. The tapped creature is a *cost you pay*, not the source of the ability. That means **summoning sickness does not apply** — a creature cast this turn, and a token created this turn, can both be tapped to pay Opposition immediately. (This build originally got that wrong: the Step-0 shape judge asserted the opposite and I propagated it into the exclusion reasons. The Phase 9 Challenger caught it, and correcting it is why Ornithopter and Cloud of Faeries are in the list at all.)

The practical consequence is that **every body is a tap effect the turn it lands**, so the deck buys the cheapest bodies in the pool:

| Card | Cost | Bodies | Note |
|---|---|---|---|
| Ornithopter | {0} | 1 | free, and flies |
| Cloud of Faeries | {1}{U} | 1 | "untap up to two lands" — net free, and flies |
| Mogg War Marshal | {1}{R} | 2 | token on entry AND on death |
| Horseshoe Crab | {2}{U} | 1 | but repeats, for {U} each |

With Opposition down and five bodies on the battlefield, the opponent loses five untapped permanents every turn — and Horseshoe Crab adds one more per blue mana on top.

### GOBLIN MEDICS IS THE CONVERSION

`Whenever this creature becomes tapped, it deals 1 damage to any target.` Paying Opposition's cost *taps* Medics, so the same activation locks a permanent **and** deals a point. That is the only card in the cube that turns the lock's cost into damage — and it is why the Opposition build and the burn build are genuinely different decks rather than two names for one list.

Mainboard cards that can tap Medics: Opposition, Icy Manipulator, Turnabout (choose creature, target yourself) — 3, plus attacking, plus sideboard Fire // Ice. That dependency is real, which is why the structural gate declares Medics at a **0.6 reliability weight**, not a full copy: on a board with none of those, Medics deals zero.

### THE HONEST PART: OPPOSITION IS A 1-OF

The cube contains exactly one Opposition and no functional duplicate. **P(drawing it in 14 cards from 40) = 0.37.** That number is stated rather than buried.

The first version of this build hid it: it declared an engine role called "tap_lock_source" holding Opposition plus Icy Manipulator plus Turnabout, and pushed the thesis turn from 7 to 9 to make the assembly gate pass on that composite. The grill's Challenger correctly called it a proxy — 71% of the effective copies were not the payoff and could not produce the payoff's effect. **That role has been withdrawn.** The deck is now gated on the two things it genuinely has redundancy in:

- a **repeating damage source** — 7 copies, effective 5.7 after weights, p = 0.88 by turn 7
- an **untapped body for Opposition** — 11 copies, p = 0.99

So the truthful description is: this is a body-based blue-red attrition deck whose damage comes from Hermetic Study or Quicksilver Dagger on a Horseshoe Crab and from Grim Lavamancer, and **Opposition is its best draw** — a 37%-of-games upgrade that converts the board into a prison. It is not a deck that folds when the rare stays in the library.

### PLAY PATTERN

Deploy bodies turns 1-3 (Ornithopter, Mogg War Marshal, Cloud of Faeries) and do not attack with them — they are Opposition fuel and blockers. Turn 4 is Opposition if you have it, or an Aura on the Crab if you don't. Once Opposition resolves, the default use is the **opponent's upkeep**: tap their lands before they can spend them. Save one blue for a Crab untap so you get one extra tap after they respond.

With Turnabout, the sequencing matters: cast it in their draw step choosing land to strip counter-mana, *then* resolve Opposition on your turn into an empty board.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  0:1  1:1  2:8  3:9  4:3  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  repeating_damage_source: 7 copies (effective 5.7: Quicksilver Dagger@0.85, Quicksilver Dagger@0.85, Grim Lavamancer@0.8, Goblin Medics@0.6, Goblin Medics@0.6) → p=0.88 (need ≥ 0.75)
  PASS  untapped_body_for_opposition: 11 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 34%  T2 92%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Turnabout, Opposition, Hermetic Study, Horseshoe Crab, Grim Lavamancer, Goblin Medics
  OK        single_large_threat: Icy Manipulator, Man-o'-War, Counterspell, Force of Will, Opposition
  CONCEDED  noncreature_permanents: No mainboard answer: the cube holds only 4 enchantment answers and 5 artifact answers in total and none is blue or red, so the pool offers this deck nothing at a castable rate. Confiscate is sideboarded. The mainboard spends the slot on bodies and on the Aura damage engine, which is the win path that does not depend on the singleton payoff.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: No mainboard graveyard answer; Tormod's Crypt is the cube's only graveyard hate card and sits in the sideboard at 2 copies. Maindecking it would also fight Grim Lavamancer, which exiles two cards from my own graveyard per activation.
```

- Curve check PASS and goldfish check PASS - no WARN flags. Recorded: MV distribution 0:1 1:1 2:8 3:9 4:3 5:1, keepable 86%, 3 lands by turn 3 88%. The turn-1 play rate of 34% is driven by Ornithopter and Grim Lavamancer and is accepted: the deck's first relevant turn is turn 3-4.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Corrected twice during the grill. First correction (Challenger F5): Icy Manipulator does NOT scale without limit - '{T}' sits in its own cost, so it absorbs exactly {1} per turn. Second correction (Challenger approval round): Grim Lavamancer has the same shape - '{R}, {T}, Exile two cards from your graveyard' is one activation per turn AND is gated on graveyard fuel - so it is a bounded sink too. The one genuinely unbounded sink is Horseshoe Crab's '{U}: Untap this creature' while an Aura is attached, which converts every surplus blue into another point of damage or another Opposition activation; 5 of 23 nonland cards can supply that attachment or lock (Opposition, Hermetic Study x2, Quicksilver Dagger x2). Frantic Search x2 turns a surplus land drop into two fresh cards at no net mana. Beyond about eight lands, and without a Crab plus an Aura, the surplus is genuinely dead - stated rather than dressed up. |
| screw | mitigation | Keepable two-land hands exist in both colours: Ornithopter ({0}), Grim Lavamancer ({R}), Hermetic Study ({1}{U}), Cloud of Faeries ({1}{U}, which then untaps two lands), Mogg War Marshal ({1}{R}) and Counterspell ({U}{U}) are all castable on two lands, and 13 of 17 lands produce blue. Goldfish sim: 86% keepable, 88% on three lands by turn 3. |
| decapitation | accepted | Opposition is a 1-of and the cube contains no second copy and no functional duplicate - the only other repeatable tapper in the whole pool is Nomad Decoy, which is white and off-colour. P(drawing Opposition in 14 cards of 40) is 0.30 under deck_checks.p_at_least_one, the model this build is gated by (0.35 under an exact hypergeometric), and that number is stated rather than hidden behind a proxy engine role. Mitigating it properly is impossible in this pool: the only universal tutor, Gamble, discards a card at random and can discard the Opposition it just found, and it would cost a rare slot. What the deck does instead is refuse to depend on it - Hermetic Study x2 and Quicksilver Dagger x2 on the Crab, plus Grim Lavamancer, win without Opposition ever appearing. The stated cost is that in the roughly 70% of games where Opposition is not drawn, this deck is a slower, grindier version of its sibling ur-crab-gun-burn rather than a prison deck. |
| gas-out | mitigation | Rewritten against the CURRENT list after the repairs removed Mystic Remora, Impulse and mainboard Fire // Ice (Challenger approval-round disclosure). The honest ledger: Frantic Search x2 is card-NEUTRAL - 'Draw two cards, then discard two cards' replaces rather than adds - so it is selection and mana, not card advantage. The only true card advantage in the mainboard is Quicksilver Dagger x2 ('You draw a card' on every ping), which is Horseshoe-Crab-conditional for volume, and Mogg War Marshal x2, which yields two bodies per card. Cards: Self-Replacing count: 4 of 23 nonland (Frantic Search x2, Cloud of Faeries x2 via 'Cycling {2}'), and Cloud of Faeries can be a body or a cantrip in a given game, never both. This deck is therefore genuinely thin on refuelling; the mitigation is that it spends few cards per turn - most of its mana goes into activations of permanents already on the battlefield rather than into casting new spells. |
| raced | accepted | With a thesis turn of 7 and a curve peaking at MV 3, this deck loses to the cube's fastest starts (evasion density 17.5%, 42 cards). It now blocks better than the first submission did - Ornithopter and Cloud of Faeries x2 are fliers, and Opposition taps attackers before they attack - but mitigating further would mean cutting the Aura package or the bodies for dedicated removal, which converts the deck into a generic blue-red tempo deck with an Opposition in it. The cost of mitigating is the archetype, so the answers (Crawlspace, Snap x2, Fire // Ice x2, Ovinize x2) live in the sideboard. |
| disruption-fizzle | mitigation | Opposition is the turn that must resolve, and Turnabout is the specific answer: at instant speed, 'Tap all untapped permanents of the chosen type target player controls' choosing land strips the opponent's counter-mana, after which Opposition resolves into a board with no untapped permanents. Counterspell x2 and Force of Will back it up, and Force of Will's 'pay 1 life and exile a blue card from your hand' is live on the turn the deck is tapped out - 17 of the 23 nonland cards are blue (corrected from the inflated 19 per Challenger F8), so the exile cost is fed. If the turn is broken anyway, nothing is consumed: the Crab and any Aura remain and the deck reverts to its non-Opposition win path. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Siege-Gang Commander (rare) | Rare-budget cut, and ONLY that. Its three tokens can pay Opposition's cost the turn they arrive — the earlier summoning-sickness reason was a rules error and is retracted. At {3}{R}{R} it would take the fifth rare slot from Force of Will, whose job is protecting a payoff that exists in exactly one copy. |
| Pashalik Mons (rare) | Rare-budget cut. 'Whenever Pashalik Mons or another Goblin you control dies, Pashalik Mons deals 1 damage to any target' wants Goblins dying; this deck taps its Goblins rather than sacrificing them, and only Mogg War Marshal x2 and its tokens are Goblins — 4 bodies of 11. |
| Mystic Remora (rare) | Cut on Challenger finding F11 to fund Grim Lavamancer. Remora is card advantage keyed entirely off the opponent's deck, and its cumulative upkeep {1} competes with lock activations from turn 4; Grim Lavamancer is a body, a damage source and an Opposition-independent win condition in one rare slot. |
| Urza, Lord High Artificer (mythic) | Rare-budget cut. 'Tap an untapped artifact you control: Add {U}' would be real mana, but this list has only Ornithopter x1 and Icy Manipulator x1 as artifacts — 2 of 23 nonland cards, so the ability produces at most 2 blue. |
| Empty the Warrens | 'Storm — copy it for each spell cast before it this turn.' This list casts about 1 spell per turn, so storm count is typically 0-1: 2-4 Goblins for {3}{R}, against Mogg War Marshal x2 giving 4 bodies for 4 mana with no storm requirement. |
| Skirk Prospector | 'Sacrifice a Goblin: Add {R}.' This deck wants its Goblins alive and untapped to pay Opposition's cost, not sacrificed. Goblins in the list: Mogg War Marshal x2 plus their tokens — sacrificing them is strictly anti-synergy with the payoff. |
| High Tide | 'Until end of turn, whenever a player taps an Island for mana...' — a one-turn doubler. This deck spends its blue across the turn cycle on end-step lock activations rather than in one burst turn, so most of the mana it would double is never spent inside the window. It is core to the sibling deck ur-crab-gun-burn. |
| Peregrine Drake | 'When this creature enters, untap up to five lands' is a mana refund plus a flying body, genuinely good here. It lost the slot to Cloud of Faeries x2, which does the same job for {1}{U} instead of {4}{U} — this deck's problem is body count on turns 2-4, not mana on turn 5. |
| Impulse | Replaced by Frantic Search on Challenger finding F6. Impulse digs 4 deep but costs a real 2 mana on a turn the deck wants to hold up Counterspell; Frantic Search draws 2 and untaps the three lands that paid for it. |
| Fact or Fiction | Instant-speed and five cards deep, the pool's best single 'find the singleton' card, but at {3}{U} it competes directly with Opposition's own {2}{U}{U} on turn 4 and with holding Counterspell. A real cut, and the first card to add if the list is retuned toward digging. |
| Floodgate | Cut from the sideboard on Challenger finding F12: 'deals damage to each nonblue creature without flying' hits 4 of this deck's own creature cards (Goblin Medics x2, Mogg War Marshal x2) plus every Goblin token. |
| Damping Sphere | 'Each spell a player casts costs {1} more to cast for each other spell that player has cast this turn' is symmetric taxation, but this deck's own Opposition turn wants to cast Opposition plus hold Counterspell — it taxes the turn the deck most needs. |
| Wall of Junk | 0/7 Defender is a fine blocker and a free Opposition body, but 'When this creature blocks, return it to its owner's hand at end of combat' means it leaves the battlefield after one block, so it is not a durable body for the lock. |
| Thieving Magpie | The shape judge flagged the rejected sketch's claim that it is a 'width-scaling payoff' as unsupported — its oracle text is a single evasive attacker that draws on combat damage and does not scale with board width at all. |
| Nomad Decoy | '{W}, {T}: Tap target creature' is the only other repeatable tapper in the entire cube — genuinely a functional second Opposition-ish effect — but it is white and outside this deck's colours. Recorded because the first build wrongly claimed no such card existed. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.03 adj [MV 2.65 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  25.0%  prod  41.2%  gap -16.2pp  [OK]
  U  demand  75.0%  prod  76.5%  gap  -1.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool: All 40 mainboard + 10 sideboard cards are exact-name members of the working pool cache; basics are format-supplied.
[PASS] copies: Commons/uncommons at most 2 copies, rares/mythics 1 copy — verified against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1} and default 1. Basic lands exempt.
[PASS] rare_cap: Exactly 5 rare/mythic cards across mainboard + sideboard (Opposition, Grim Lavamancer, Force of Will, Sulfur Falls, Crawlspace) - at the limit, not over it.
[PASS] colors: Every nonland card usable in U/R via effective_cost.best_mode; no splash.
1 mainboard count: PASS 40
1 sideboard count: PASS 10
2 exact-name membership: PASS
3 copy limits: PASS
4 colour usability (best_mode): PASS - all modes 'cast'
5 splash cap: PASS - no splash
6 rare/mythic cap <=5: PASS - exactly 5
```
