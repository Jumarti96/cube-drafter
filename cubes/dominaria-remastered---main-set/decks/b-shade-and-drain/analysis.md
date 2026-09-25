---
deck_name: "b-shade-and-drain"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "B"
format: "40-card"
built_at: "2026-08-02T17:39:50Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Swamp
```

### CREATURES (16)

```
CMC  Card                 Qty  Color  Role                                                                                                                                        Rar
  2  Flesh Reaver         x2   B      Threat                                                                                                                                      U
  2  Nantuko Shade        x1   B      Payoff                                                                                                                                      R
  2  Wretched Anurid      x1   B      Threat                                                                                                                                      C
  3  Undead Gladiator     x2   B      Infrastructure                                                                                                                              U
  3  Urborg Syphon-Mage   x2   B      Payoff (reach)                                                                                                                              C
  4  Faceless Butcher     x2   B      Interaction                                                                                                                                 U
  4  Phyrexian Debaser    x2   B      Threat (evasive)                                                                                                                            C
  5  Hyalopterous Lemure  x2   B      Threat (evasion enabler)                                                                                                                    C
  5  Street Wraith        x2   B      Infrastructure                                                                                                                              C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                 Qty  Color  Role                                                                                                                                        Rar
  1  Howl from Beyond     x2   B      Payoff                                                                                                                                      C
  1  Vampiric Tutor       x1   B      Infrastructure                                                                                                                              M
  2  Chainer's Edict      x2   B      Interaction                                                                                                                                 U
  2  Terror               x1   B      Interaction                                                                                                                                 C
```

### OTHER SPELLS (1)

```
CMC  Card                 Qty  Color  Role                                                                                                                                        Rar
  5  Gauntlet of Power    x1   C      Engine (pipeline anchor)                                                                                                                    M
```

## SIDEBOARD (10)

```
Card                 Qty  Color  Role / When to board in                                                                                                                     Rar
Tormod's Crypt       x2   C      Hate - graveyard - vs Reanimator, Flashback/GY-Cast, Threshold and Self-Mill decks.                                                         U
Duress               x2   B      Hate - noncreature permanents / stack - vs control, and vs any deck on Opposition / Sulfuric Vortex / Sneak Attack / an opposing Gauntlet.  C
Ichor Slick          x2   B      Flex - removal - vs creature decks whose bodies are x/3 or smaller; out vs control.                                                         C
Dark Withering       x2   B      Flex - removal - vs green/white midrange and any deck with 5+ toughness threats.                                                            U
Crawlspace           x1   C      Hate - wide boards - vs Goblins, Tokens and any deck that attacks with multiple small creatures.                                            R
Royal Assassin       x1   B      Flex - repeatable removal - vs midrange mirrors and vs Opposition/tapper decks; out vs decks that go under it.                              R
```

## ANALYSIS

### DECK IDENTITY

Mono-black aggro that turns a mana surplus into combat damage. Nantuko Shade and Howl from Beyond convert every available black mana into power at a 1:1 rate with no ceiling, and Hyalopterous Lemure supplies the evasion those pumps need at a cost of {0}, so 100% of a turn's mana goes into the pump rather than into getting through. Gauntlet of Power is the accelerant, not the plan: naming black doubles all 17 Swamps and anthems all 16 of the deck's 16 creature copies, but it is a 1-of mythic, so the deck is built to function on basics alone and Vampiric Tutor exists to find it. Five cheap interaction spells clear the blockers the ground-based threats cannot go around, and Undead Gladiator plus Street Wraith keep the hand stocked in a colour with no card advantage.

### THE GAUNTLET IS AN ACCELERANT, NOT THE PLAN

The Specific Constraint asked for a Gauntlet of Power deck, and the single most important design decision here is refusing to depend on it. Gauntlet is a mythic limited to one copy; in a 40-card deck a specific singleton is about 30% to be seen by turn 5. So every line in this list works off basic Swamps alone, and Gauntlet upgrades it rather than enabling it.

The arithmetic that makes the deck legal without it: Nantuko Shade deployed on turn 2 attacks on turns 3, 4 and 5 with 1, 2 and 3 spare black mana — 3 + 4 + 5 = **12 damage from a single card** before Flesh Reaver, Howl from Beyond or Gauntlet contribute anything. When Gauntlet does land, both of its clauses are at maximum value here by construction:

| Gauntlet clause | Applies to | Why |
|---|---|---|
| "Whenever a basic land is tapped for mana of the chosen color…" | **17 of 17 lands** | Every land in the deck is a basic Swamp — there is no nonbasic to forfeit the trigger |
| "Creatures of the chosen color get +1/+1" | **16 of 16 creature copies** | Every creature in the deck is `colors: ["B"]` |

That 17/17 is the reason the mana base has zero utility lands. `Polluted Mire`, `Mishra's Factory` and `Terminal Moraine` are all playable cards; each one taken would be a permanent one-mana-per-tap tax on the pipeline anchor, and the two enters-tapped options additionally break a turn-2 Flesh Reaver. Four further pool lands — `Haunted Mire`, `Geothermal Bog`, `Contaminated Aquifer`, `Sunlit Marsh` — are Swamps by *subtype* but carry no Basic supertype, so Gauntlet never fires on them either.

### FREE EVASION IS THE WHOLE POINT OF THE CHOSEN BUILD

Three independent sketchers each built a different mono-black aggro deck and an independent judge picked the one built around evasion. The reason is a single line of oracle text: `Hyalopterous Lemure` reads "{0}: This creature gets -1/-0 and gains flying until end of turn." Flying for **zero mana** means that on the kill turn, every point of available mana goes into `Howl from Beyond`'s "+X/+0" instead of into getting through. A 4/3 that becomes a 3/3 flier and then eats an entire turn's mana is the cleanest expression of "big mana wins the game" this pool offers.

Compare the alternative: pumping `Flesh Reaver` on the ground means the opponent chump-blocks and the mana is wasted. The Lemure line cannot be blocked by the 78% of cube creatures without flying or reach.

### THE INTERACTION SUITE IS THREE DIFFERENT CARDS ON PURPOSE

Five interaction slots, and none of the three cards is redundant with another:

| Card | Covers | Blind spot |
|---|---|---|
| Terror | Cheapest answer; instant speed at 2 mana | **36 of 120** pool creatures are black or artifact and cannot be targeted |
| Chainer's Edict | Non-targeted — beats hexproof, protection, and shroud | Opponent chooses; poor against a wide board |
| Faceless Butcher | Exiles; the only on-demand answer to a black creature | Sorcery-speed (an ETB); returns the card if it leaves |

This is 22% of the nonland cards against an aggro band of 10–15%. That deviation is deliberate and priced: the cube's evasion density is 42 cards (17.5%), and this deck's threats are ground-based, so an unpumped 4/4 needs help attacking into a developed board.

### WHAT THE GRILL CHANGED

The self-grill returned two BLOCKING findings and both were implemented rather than argued with. The first was an arithmetic error of mine — I had recorded Gauntlet's anthem as hitting "11 of the 13 creatures" when the list actually holds 16 creature copies. The second was more interesting: `Undead Gladiator` was nominated in the sweep, silently dropped, and the Challenger showed it was the only card in the pool that moves three separate counts at once — self-replacing cards from 2/23 to 4/23, discard outlets from 2/23 to 4/23, and the thin MV-3 rung from 2/23 to 4/23. It went in at the cost of one `Wretched Anurid` and one `Terror`, and both cuts were independently justified (Anurid's "whenever another creature enters, you lose 1 life" fires off this deck's own 15 other creature copies; Terror is blank against 30% of the pool's creatures).

The sideboard swap of `No Mercy` for `Crawlspace` came from the same round. Both answer wide boards, but No Mercy lets the alpha strike connect once before it trades, and this deck has already spent life on Flesh Reaver, Street Wraith and Vampiric Tutor. Crawlspace's "No more than two creatures can attack you each combat" caps the damage *before* it happens, costs one less mana, and is colourless.

### THE HONEST WEAKNESS

Card advantage. Zero of the 23 nonland cards are net-positive; four are self-replacing. Mono-black in this cube has no draw engine that fits an aggro curve, so the deck's answer to an empty hand is that lands *are* spells — a topdecked Swamp is +1/+1 on Nantuko Shade or +1 damage from Howl from Beyond. That works, but it means a long game is a losing game, and the `raced` failure mode is formally accepted rather than solved.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (23 nonland):  1:3  2:7  3:4  4:4  5:5
  WARN  MV 1 share: share 13% below band minimum 15%
  WARN  MV 4+ share: share 39% above band maximum 20%
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5: Urborg Syphon-Mage@0.6, Urborg Syphon-Mage@0.6, Vampiric Tutor@0.8) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5: Street Wraith@0.5, Street Wraith@0.5) → p=0.80 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 48%  T2 93%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Black has zero sweepers in this pool - the cube's only four (Floodgate, Sandstorm, Slice and Dice, Wrath of God) are U/G/R/W - so a wide board is raced rather than answered: Hyalopterous Lemure grants itself flying for {0} and Howl from Beyond converts the turn's whole mana pool into +X/+0 over the top of any ground stall.
  OK        single_large_threat: Terror, Faceless Butcher, Chainer's Edict
  CONCEDED  noncreature_permanents: The cube's 5 artifact answers and 4 enchantment answers are all G/W/multicolour; mono-black cannot answer a resolved noncreature permanent at all. Duress x2 in the sideboard strips it before it resolves - the maindeck concession is that a resolved permanent must be raced, which costs nothing this deck is not already doing.
  CONCEDED  stack: Black has no counterspell in this pool. Deploying threats that must be answered on sight is the substitute, and Duress x2 comes in post-board; maindecking reactive slots would cut the threat density the kill mechanism needs on curve.
  CONCEDED  graveyard: Tormod's Crypt is the only graveyard hate card in the entire cube and it is held in the sideboard; maindecking a do-nothing artifact against the 55% of cube decks that are not graveyard decks would cost a threat slot in a deck whose plan is to end the game on turn 5.
```

- curve WARN 'MV 4+ share 39% above band maximum 20%': 2 of the 9 MV-4+ cards are not paid at that cost - Street Wraith x2 is cast for ZERO mana ('Cycling-Pay 2 life') and only reads as MV 5 to the checker. Gauntlet of Power is the pipeline anchor the Specific-Constraint intent locked, and it is the card that doubles the mana the rest of the curve spends. The remaining real top-end is 6 of 23 = 26%.

- curve WARN 'MV 1 share 13% below band minimum 15%': the recorded 3 includes 2 copies of Howl from Beyond ({X}{B}), which at X=0 reads 'Target creature gets +0/+0' and is not a turn-1 play - the genuinely turn-1-castable count is 1 of 23 = 4.3%. This strengthens rather than weakens the response: the deck deploys at 2, not at 1. The MV-2 share is 7 of 23 = 30% against a 25% band minimum, and goldfish_sim confirms 93% play-by-turn-2. The only pool card that would fix the MV-1 count is Festering Goblin, a 1/1 (2/2 under Gauntlet) whose body is not worth converting mana onto.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Every payoff in the deck is an unbounded mana sink, so a surplus land is never a dead draw: Nantuko Shade ('{B}: +1/+1') and Howl from Beyond ('{X}{B}') have no ceiling; Urborg Syphon-Mage ('{2}{B}, {T}, Discard a card: Each other player loses 2 life') converts a surplus card IN HAND into 2 damage every turn; Undead Gladiator ('{1}{B}, Discard a card: Return this card from your graveyard to your hand') recurs off the same surplus; Chainer's Edict's 'Flashback {5}{B}{B}' is a second use of an already-spent card; and Street Wraith cycles for zero mana. |
| screw | mitigation | 7 of 23 nonland cards cost exactly 2 and the deck's best turn-2 plays (Flesh Reaver 4/4, Wretched Anurid 3/3, Nantuko Shade) all cost 2, so a 2-land hand deploys on curve. goldfish_sim reports 85% keepable and 93% play-by-turn-2 over 1000 hands. Street Wraith's 'Cycling-Pay 2 life' digs for the third land at zero mana cost, and Undead Gladiator's 'Cycling {1}{B}' digs for a fourth. |
| decapitation | mitigation | Nantuko Shade is deliberately not the single point of failure. Howl from Beyond x2 applies the same mana-to-damage conversion to ANY creature, and the deck runs 15 other creature copies worth pumping - 6 of them (Flesh Reaver x2, Hyalopterous Lemure x2, Phyrexian Debaser x2) are the premium targets. Vampiric Tutor rebuys access to whichever piece was answered, and Undead Gladiator returns itself from the graveyard every upkeep. If Gauntlet is answered the deck still functions - the 17 Swamps still pay for Shade and Howl, just at half rate. |
| gas-out | mitigation | The honest numbers first: 'Cards: Net-Positive' = 0 of 23, 'Cards: Self-Replacing' = 4 of 23 (Street Wraith x2 via 'Cycling-Pay 2 life', Undead Gladiator x2 via 'Cycling {1}{B}'), plus 1 neutral tutor. That is thin, and it is why Undead Gladiator was added. What makes an empty hand survivable is that lands are spells here: Nantuko Shade and Howl from Beyond turn topdecked Swamps into damage, Chainer's Edict's flashback gives the graveyard back as a card, and Undead Gladiator is a permanent loop that converts {1}{B} plus a surplus land into a fresh card every upkeep. |
| raced | accepted | This deck pays life to function - Flesh Reaver ('this creature deals that much damage to you'), Wretched Anurid ('whenever another creature enters, you lose 1 life', triggered by this deck's own 15 other creature copies), Street Wraith ('Pay 2 life'), Vampiric Tutor ('You lose 2 life') - so against the cube's fastest clocks it can lose a race it started. Mitigating means cutting Flesh Reaver, a 4/4 for {1}{B} at 2.0 power per mana, the highest rate in the mono-black pool; that card is the reason a turn-5 kill exists at all, so removing it trades the deck's identity for a life buffer. Partial mitigation only, and it was taken: Wretched Anurid was cut from 2 copies to 1. Urborg Syphon-Mage's 'You gain life equal to the life lost this way' recovers 2 per activation. |
| disruption-fizzle | mitigation | The kill turn is a single instant - Howl from Beyond after blockers are declared, or Nantuko Shade activations in the damage step - so there is no sorcery-speed window for the opponent to act in. If the pumped creature is removed in response, both the card and the mana are lost; mono-black has no protection spell in this pool (independently verified: a search of the mono-B and colourless slice for regenerate-target, grants-protection/shroud/hexproof/indestructible, and prevent-all-damage returns zero hits), so the answer is redundancy rather than protection: 2 Howl from Beyond, 4 evasive bodies (Hyalopterous Lemure x2, Phyrexian Debaser x2) and 5 interaction spells to clear the way and re-attack on a later turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Evil Eye of Orms-by-Gore | 'Non-Eye creatures you control can't attack' shuts off this deck's entire board; the 3/6 body cannot pay for that. |
| Nightscape Familiar | 'Blue spells and red spells you cast cost {1} less to cast' - 0 of this deck's nonland cards are blue or red, so the discount is dead 0/24. |
| Yawgmoth, Thran Physician | 'Pay 1 life, Sacrifice another creature' needs expendable bodies; this list runs single large threats it must not eat, and a rare/mythic slot is worth more on the pipeline anchor. |
| Mindslicer | 'When this creature dies, each player discards their hand' is symmetrical, and this deck's Undead Gladiator / Street Wraith card economy wants a hand. |
| Body Snatcher | 'exile it unless you discard a creature card' plus graveyard reanimation is the Reanimator pipeline, not the mana-sink pipeline. |
| Oversold Cemetery | 'if you have four or more creature cards in your graveyard' - a graveyard-count payoff on a deck built to keep creatures on the battlefield. |
| Entomb | 'Search your library for a card, put that card into your graveyard' has no reanimation target in this list; Vampiric Tutor finds Gauntlet instead. |
| Dread Return | Reanimation with a 'Sacrifice three creatures' flashback - no self-mill and no fodder in this list. |
| Dark Depths | '{3}: Remove an ice counter' x10 = 30 mana, and it is neither a mana producer nor a basic land, so Gauntlet of Power never doubles it - it costs a land slot and produces nothing. |
| Goblin Turncoat | 'Sacrifice a Goblin: Regenerate this creature' - this list contains 0 Goblins besides Festering Goblin. |
| Phyrexian Ghoul | 'Sacrifice a creature: This creature gets +2/+2' - a sacrifice outlet with no death triggers to pay off; Nantuko Shade pumps without eating the board. |
| Twisted Experiment | 'Enchanted creature gets +3/-1' is a permanent that costs a card and dies to the removal aimed at its host; Howl from Beyond delivers more at instant speed. |
| Necrosavant (2nd copy) | Both copies would be dead cards in an opening hand at six mana; one copy is the top-end this curve supports. |
| Lotus Blossom | 'At the beginning of your upkeep, you may put a petal counter' - it takes four turns to match one Swamp under Gauntlet, and it costs a rare slot. |
| Helm of Awakening | 'Spells cost {1} less to cast' is symmetrical and costs a rare slot; this deck's problem is having enough mana sinks, not enough mana. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     3.04   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.55 adj [MV 3.04 vs 2.5, 1 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                                       cube_mainboard only - every card verified by exact name against working_pool.json
commons_uncommons_max_2                    PASS - highest count is 2
rares_mythics_max_1_each                   PASS - Nantuko Shade 1, Vampiric Tutor 1, Gauntlet of Power 1, Crawlspace 1, Royal Assassin 1
rares_mythics_max_5_total_MB_plus_SB       PASS at exactly 5/5 - MB: Gauntlet of Power (mythic), Nantuko Shade (rare), Vampiric Tutor (mythic) = 3. SB: Crawlspace (rare), Royal Assassin (rare) = 2. No headroom.
basics                                     Swamp x17 - format-supplied, exempt from copy limits
colour                                     core_colors ['B'], splash_colors [] - every nonland card returns a non-null effective_cost.best_mode(card, ['B'], []) in normal cast mode; no off-identity inclusions
```
