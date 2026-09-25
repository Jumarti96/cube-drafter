---
deck_name: "wb-aristocrats-drain"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-18T20:23:44Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x7   Plains            basic W
x7   Swamp             basic B
x2   Sunlit Marsh      WB dual, enters tapped
x1   Caves of Koilos   WB dual, untapped; 1 damage per coloured tap
```

### CREATURES (20)

```
CMC  Card                           Qty   Color  Role                               Rar
  1  Cult Conscript                 x2    B      Renewable fodder                   U
  2  Benalish Sleeper               x2    W      3/1 + kicked edict                 C
  2  Elas il-Kor, Sadistic Pilgrim  x2    BW     PAYOFF: deaths -> life loss        U
  2  Phyrexian Vivisector           x2    B      Scry per creature death            C
  2  Resolute Reinforcements        x2    W      Two bodies, flash                  U
  3  Argivian Cavalier              x1    W      Two bodies                         C
  3  Aron, Benalia's Ruin           x2    BW     Sac outlet + team counters         U
  3  Braids, Arisen Nightmare       x1    B      Free sac: drain + draw             R
  3  Gibbering Barricade            x1    B      Wall + sac-to-draw                 C
  3  Phyrexian Rager                x2    B      Body + a card                      C
  4  Phyrexian Warhorse             x1    B      Cheapest repeatable outlet         C
  4  Ratadrabik of Urborg           x1    BW     Copies dying legends               R
  4  Serra Paragon                  x1    W      Replays 17/23 from the yard        M
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                      Qty   Color  Role                               Rar
  1  Bone Splinters            x2    B      Removal + drain trigger            C
  2  Destroy Evil              x1    W      Kills a toughness-4+ wall          C
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                        Rar
Cut Down                  x1    B      cheap early blockers -- In against decks whose U
Destroy Evil              x1    W      a toughness-4+ wall that stops the swarm -- In C
Knight of Dusk's Shadow   x2    B      opposing lifegain that undoes an incremental d U
Pilfer                    x2    B      the sweeper this deck cannot survive -- In aga C
Prayer of Binding         x2    W      any noncreature permanent -- the cube's 15 art U
Tribute to Urborg         x2    B      cheap evasive blockers and X/2 fliers -- In ag C
```

## ANALYSIS

### DECK IDENTITY

WB aristocrats. Twenty creature cards -- three of which arrive two-to-a-card -- put up to 24 bodies on the board, and Elas il-Kor, Sadistic Pilgrim turns every one of their deaths into a life the opponent loses whether or not it was blocked. Aron, Benalia's Ruin, Phyrexian Warhorse, Gibbering Barricade, Bone Splinters and Braids, Arisen Nightmare are five ways to make a creature die on demand rather than waiting for combat, and Aron makes the board permanently larger every time it does. Ratadrabik of Urborg rebuilds a dying Elas il-Kor as a non-legendary copy that keeps the drain trigger, and Serra Paragon replays 18 of the 23 nonland cards out of the graveyard, one per turn. IMPORTANT HONESTY NOTE: this deck is 'lifegain' only through Elas il-Kor's other half. Four of 23 nonland cards gain any life, and Caves of Koilos actively costs life. Its currency is opponent life LOSS -- read it as a drain deck, not a lifegain deck.


### READ THIS FIRST: THIS IS A DRAIN DECK, NOT A LIFEGAIN DECK

Both grill agents independently opened with the same point and it belongs at the top of the analysis.
You asked for the Lifegain archetype; this is its sacrifice sub-path, and the honest accounting is:

| | Cards |
|---|---|
| Nonland cards that GAIN life | **4 of 23** -- Elas il-Kor x2 (1 per other creature entering), Gibbering Barricade (1 per activation), Serra Paragon (2 per recurred permanent dying) |
| Cards that COST life | Phyrexian Rager x2 (1 each on entry), Caves of Koilos (1 per coloured tap) |

The archetype label attaches through exactly one line of text -- Elas il-Kor's *other* half. The life
total is still the axis the game is decided on, but this deck pushes it down on the opponent's side
rather than up on ours. If what you wanted was a rising life total converted into resources, that is
Deck 1 (wb-lifelink-attrition), not this one.

### THE ENGINE: FIVE WAYS TO MAKE A CREATURE DIE ON PURPOSE

Elas il-Kor's drain half reads *"Whenever another creature you control dies, each opponent loses 1
life"* -- note it does not care HOW the creature died. That is the whole deck. Twenty creature cards
put up to 24 bodies on the board (Resolute Reinforcements x2 and Argivian Cavalier each arrive
two-to-a-card), and five cards convert those bodies into damage on demand rather than waiting for
combat:

```
Aron, Benalia's Ruin   {W}{B}, {T}, Sac another creature: +1/+1 counter on EACH creature you control
Phyrexian Warhorse     {1}, Sac another creature: +2/+1        <- no tap, no once-per-turn clause
Gibbering Barricade    {2}{B}, Sac a creature: gain 1, draw a card
Bone Splinters         {B}, sac a creature as a cost: destroy target creature
Braids, Arisen Nightmare  free, every end step: they sac or lose 2 and you draw
```

Phyrexian Warhorse is the one that makes the plan mana-efficient rather than mana-limited: it is the
only outlet in the whole pool with no tap symbol and no once-per-turn restriction, so it can convert
three bodies in one turn. Aron is the one that wins stalled boards -- every activation is a permanent
+1/+1 counter on the entire team, so the board grows as it shrinks.

### CULT CONSCRIPT'S CONDITION IS MET BY 19 OF 20 CREATURES

*"{1}{B}: Return this card from your graveyard to the battlefield. Activate only if a non-Skeleton
creature died under your control this turn."* Cult Conscript is itself a Skeleton, so sacrificing a
Conscript does NOT enable its own return -- the enabling death has to be one of the others. It is:
19 of the 20 creature cards are non-Skeletons, and every Soldier token is one too. In practice any
turn you use an outlet at all, Conscript comes back.

### RATADRABIK LAUNDERS ELAS PAST THE LEGEND RULE

*"Whenever another legendary creature you control dies, create a token that's a copy of that creature,
except it's not legendary and it's a 2/2 black Zombie in addition to its other colors and types."*
Five of the 20 creature cards are legendary other than Ratadrabik itself: Elas il-Kor x2, Aron x2,
and Braids. A copied Elas is a NON-legendary 2/2 that keeps both halves of its text, which means the
deck's most important card effectively gets a third copy that can coexist with the original. Braids is
the likeliest legendary death of all, because you sacrifice it voluntarily.

Recorded honestly: Ratadrabik's middle line, *"Other Zombies you control have vigilance"*, is dead
text here -- 0 of 20 creatures are Zombies.

### THE MANA IS BUILT FOR ONE CARD

Aron, Benalia's Ruin costs {W}{W}{B} and the deck wants it on turn 3. That single requirement is why
Caves of Koilos spends a rare slot and why Crystal Grotto was cut during the grill repair -- Grotto's
coloured mana costs an extra {1}, so it cannot help cast Aron on curve at all.

| Cast | On the play |
|---|---|
| Elas il-Kor {W}{B} on turn 2 | 0.843 |
| Aron, Benalia's Ruin {W}{W}{B} on turn 3 | 0.674 |
| Serra Paragon {2}{W}{W} on turn 4 | 0.642 |

Swapping Crystal Grotto for a Plains bought +6.5pp on Aron and +2.6pp on Elas for free. Every land in
the deck now produces coloured mana at no extra cost, so the audit's source count and the strict count
are identical: W 10 / B 10 out of 17.

### PLAY PATTERN

Deploy two bodies a turn and do not hold them back. The deck's worst draw is one where it has outlets
and no fodder, so lead with the token makers and keep Cult Conscript in the graveyard as a mana sink.
Against a stalled board, Aron is the win condition, not the attack step -- three activations is +3/+3
on the whole team. Against removal-heavy decks, note that every creature killed by the OPPONENT still
triggers Elas; you lose nothing from the drain plan when they answer your board, only from a sweeper,
which is what Pilfer x2 is in the sideboard to strip.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:7  4:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies → p=0.88 (need ≥ 0.75)
  PASS  sac_outlet: 7 copies (effective 5.4: Aron, Benalia's Ruin@0.8, Aron, Benalia's Ruin@0.8, Gibbering Barricade@0.7, Bone Splinters@0.6, Bone Splinters@0.6, Braids, Arisen Nightmare@0.9) → p=0.85 (need ≥ 0.75)
  PASS  fodder: 11 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 55%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck IS the wide board, and no sweeper castable in W or B spares it: Choking Miasma ({1}{B}{B}, all creatures -2/-2) would kill 13 of the 20 creature cards (Elas x2, Cult Conscript x2, Resolute Reinforcements x2, Argivian Cavalier, Phyrexian Vivisector x2, Benalish Sleeper x2, Phyrexian Rager x2) plus every 1/1 Soldier token. Against a mirrored swarm the deck races instead of sweeping -- Aron, Benalia's Ruin ('Sacrifice another creature: Put a +1/+1 counter on each creature you control') wins a board stall by permanently outgrowing it, and Elas il-Kor drains 1 per death regardless of who is ahead on bodies. Mitigating this class would mean maindecking a sweeper that kills our own plan; Pilfer x2 strips it from their hand from the sideboard instead.
  OK        single_large_threat: Bone Splinters, Destroy Evil, Benalish Sleeper
  CONCEDED  noncreature_permanents: Destroy Evil's second mode ('Destroy target enchantment') covers enchantments only -- 0 of the cube's 15 artifacts and 0 of its 4 planeswalkers -- so the maindeck does NOT cover this class and claiming otherwise would be false. The mainboard also contains zero artifacts of its own, so Braids' 'sacrifice a permanent that shares a card type' cannot be pointed at one either. Mitigating it maindeck means spending threat slots on answers in a deck whose kill is board width. Prayer of Binding x2 covers the whole class from the sideboard ('exile up to one target nonland permanent an opponent controls').
  CONCEDED  stack: The cube's counterspells are entirely blue; W and B contain none, so no WB deck can interact on the stack. This deck's substitute is speed -- a turn-6 goldfish and Resolute Reinforcements' flash, which lets it develop at instant speed on the opponent's end step.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour, verified against oracle text: every 'exile ... graveyard' clause in the pool is a self-exile activation cost or a graveyard user. No deck in this pool can cover this class.
```

_No WARN-tier flags were raised: curve, assembly, goldfish and coverage all returned PASS, so there are no structural responses to record._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Phyrexian Warhorse ('{1}, Sacrifice another creature: This creature gets +2/+1 until end of turn') converts one spare mana per body into damage with no tap symbol and no once-per-turn clause; Gibbering Barricade ('{2}{B}, Sacrifice a creature: You gain 1 life and draw a card') converts spare mana into cards; Cult Conscript x2 ('{1}{B}: Return this card from your graveyard to the battlefield') redeploys a body every turn a non-Skeleton died; and Serra Paragon plays an extra land from the graveyard each turn, which converts a flooded graveyard back into board presence. Four separate sinks, all of which also feed Elas il-Kor's death trigger. |
| screw | mitigation | Thirteen of 23 nonland cards cost 2 or less (curve 1:4, 2:9), so a two-land hand deploys on turns 1 and 2 and can win from there; the goldfish sim on the repaired list reports 86% keepable hands, 96% with a play by turn 2 and 88% with 3 lands by turn 3. Resolute Reinforcements has flash, so a land-light hand can hold it up rather than waste the turn. |
| decapitation | mitigation | Elas il-Kor is the payoff and will be answered on sight, which is why the deck runs 2 copies plus Ratadrabik of Urborg -- 'create a token that's a copy of that creature, except it's not legendary and it's a 2/2 black Zombie' rebuilds a killed Elas with its drain trigger intact, and Elas is a Legendary Creature so the trigger is live. Serra Paragon adds a third route: at mana value 2, Elas is inside its 'mana value 3 or less' replay clause, so a dead Elas can simply be recast from the graveyard. Beyond that the plan degrades rather than stops -- Aron, Benalia's Ruin still turns every sacrifice into a permanent +1/+1 counter on the whole board, which wins a stalled board with no drain at all. |
| gas-out | mitigation | REPAIRED after the grill, where this mode was correctly marked UNSATISFIED. Refuel is now 4 of 23 nonland cards: Braids, Arisen Nightmare (a card at every end step), Gibbering Barricade (a card per spare creature) and Phyrexian Rager x2 ('When this creature enters, you draw a card and you lose 1 life' -- a body AND a card at MV 3). Serra Paragon adds a fifth, replaying 18 of the 23 nonland cards out of the graveyard one per turn, which is refuelling from a zone an empty hand does not touch. Cult Conscript x2 additionally redeploy from the graveyard for mana rather than for cards. |
| raced | mitigation | Against the cube's 51 evasion cards, this deck's defence is that it is faster and wider: 13 of 23 nonland cards cost 2 or less and 20 creature cards produce up to 24 bodies, so a race is the favourable half of the matchup. Where it must interact, Bone Splinters ({B}, sacrifice a creature: destroy target creature) is a one-mana unconditional answer whose additional cost is itself a drain trigger, Elas il-Kor's deathtouch blocks anything on the ground, and Destroy Evil answers the toughness-4+ blocker that would otherwise wall the swarm. Tribute to Urborg x2 comes in from the sideboard for the 2-toughness fliers the mainboard cannot reach. |
| disruption-fizzle | mitigation | There is no single critical turn: the drain accrues one trigger at a time from turn 2 onward, so removal aimed at any one piece costs the opponent a card to stop 1 damage. The genuine version of this mode here is a sweeper on a developed board, and the answer is threefold -- Pilfer x2 from the sideboard ('Target opponent reveals their hand. You choose a nonland card from it. That player discards that card') strips it pre-emptively, Cult Conscript x2 and Ratadrabik rebuild afterward, and Serra Paragon replays the fallen permanents one per turn from the graveyard. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Anointed Peacekeeper | A taxing 3/3 that neither makes fodder nor cares about deaths. |
| Archangel of Wrath | A 4-mana rare threat that produces no fodder and no death triggers. |
| Battlefly Swarm | Cut. A 1/1 flier for {B} with a deathtouch pump is fine fodder, but every slot it would take is held by a card that produces TWO bodies (Resolute Reinforcements, Argivian Cavalier) or comes back for free (Cult Conscript). |
| Blight Pile | Drains for the number of DEFENDERS, not the number of deaths; only Wingmantle Chaplain and Gibbering Barricade qualify. |
| Braids's Frightful Return | Cut. Read ahead saga: the sacrifice is on chapter I and the payoff on chapter III, so it is a 3-turn engine in a 6-turn deck. Braids, Arisen Nightmare does the same thing every turn starting immediately. |
| Captain's Call | Cut on the curve. Three 1/1 Soldiers for {3}{W} is the best raw fodder rate in the pool -- 3 bodies, 3 enter-triggers, 3 death-triggers -- but at MV 4 it more than doubles the deck's top-end count (currently 2 cards at MV 4). It is the first card to add for a slower, grindier build. |
| Charismatic Vanguard | Cut. '{4}{W}: Creatures you control get +1/+1 until end of turn' is a 5-mana activation; with 17 lands this deck reaches it around the turn it was supposed to have won. |
| Choking Miasma | All creatures -2/-2 kills every 1/1 Soldier and Bird token we make. |
| Citizen's Arrest | Cut from the SIDEBOARD during the grill repair. 'exile target creature or planeswalker an opponent controls' answers 0 of the cube's 15 artifacts, leaving that threat class entirely uncovered, and it costs {1}{W}{W} on a base built for a single white pip. Prayer of Binding replaced it: same exile effect on ANY nonland permanent, at flash speed, for {3}{W}, plus 2 life. |
| Crystal Grotto | Cut from the mana base during the grill repair. Its coloured mana costs an extra {1}, so it cannot help cast Aron, Benalia's Ruin ({W}{W}{B}) on turn 3 -- the deck's tightest requirement. Swapping it for a Plains raised Aron-on-turn-3 from 0.609 to 0.674 and turn-2 Elas il-Kor from 0.817 to 0.843. The ETB scry was not worth 6.5 percentage points. |
| Danitha, Benalia's Hope | 5-mana single body; competes for a rare slot against Ratadrabik and Braids, both of which scale with deaths. |
| Defiler of Faith | Cut, and the closest call among the excluded rares. 'Whenever you cast a white permanent spell, create a 1/1 white Soldier creature token' is perfectly on-plan -- 8 of the 23 nonland cards are white permanent spells (Elas il-Kor x2, Aron x2, Resolute Reinforcements x2, Argivian Cavalier x2), so it would make roughly 8 tokens across a game. It costs {3}{W}{W}, which is 5 mana in a deck whose curve tops out at 4 and whose goldfish turn is 6. Add it if you move to a 17-18 land grindier build. |
| Defiler of Flesh | Wants a wide board to pump, but its discount is on BLACK permanent spells and this build's token makers are all white. |
| Drag to the Bottom | Domain -X/-X with only 2 basic land types is -3/-3, which wipes our own token board. |
| Evolved Sleeper | A mana-sink single body; competes for a rare slot against cards that scale with the token board. |
| Extinguish the Light | Cut. {2}{B}{B} is four mana for one removal spell; Bone Splinters kills the same creature for {B} and the additional sacrifice cost is itself an Elas il-Kor drain trigger. |
| Golden Argosy | 'exile each creature that crewed it this turn' removes our creatures from the battlefield without them dying -- it actively turns off Elas il-Kor. |
| Griffin Protector | Cut. 'Whenever another creature you control enters, this creature gets +1/+1 UNTIL END OF TURN' -- the pump is temporary, so it rewards dumping the hand in one turn rather than the sustained board this deck builds. Aron's +1/+1 counters are permanent and do the same job better. |
| Karn's Sylex | Its {X} destroy-each-nonland-permanent mode is symmetric against a board we built wide. |
| Knight of Dawn's Light | A lifegain amplifier; this build's currency is opponent life loss from deaths, not our own life total. |
| Leyline Binding | Domain-reduced to {3}{W} on a 2-type mana base; a rare slot for a 4-mana removal spell. |
| Liliana of the Veil | Cut. Her +1 is symmetric discard and this deck empties its hand by turn 4 anyway, so the discount is real -- but her -2 edict lets the OPPONENT choose, and against a board of 1/1 Soldiers an edict aimed at us is nearly free for them to answer. She is a control card in an aggro shell; a rare slot better spent on Braids. |
| Love Song of Night and Day | Cut. Chapter I is 'You AND target opponent each draw two cards' -- symmetric card draw is the wrong trade for the deck that wants the game to end first -- and the Bird arrives on chapter II, two turns after casting. |
| Mesa Cavalier | A 2/1 flier that gains 2 -- one body per card, where this build wants two or three. |
| Phyrexian Missionary | 2/3 lifelink is a defensive rate; this build wants expendable bodies, not durable ones. |
| Plaza of Heroes | Cut. A rare land whose legendary-only mana matters for 4 of 23 nonland cards, competing with Caves of Koilos which fixes unconditionally. |
| Samite Herbalist | Gain-and-scry on tap; does nothing with creature deaths. |
| Sengir Connoisseur | Cut. 'Whenever one or more other creatures die, put a +1/+1 counter on this creature. This ability triggers only once each turn' -- once per turn is the problem: this deck can sacrifice three bodies in a turn and Connoisseur banks one counter for all of them. At {3}{B}{B} it is also the most expensive card that would be in the list, against a lowest-curve lens. |
| Shadow-Rite Priest | Cut. 'Other Clerics you control get +1/+1' -- this list has 1 other Cleric (Elas il-Kor is a Kor Cleric), and the tutor costs {3}{B}{B} plus tapping plus sacrificing a Cleric. |
| Shanna, Purifying Blade | Not castable. {G}{W}{U} needs green and blue. |
| Sheoldred's Restoration | Four to six mana to rebuy one creature; the fodder here is cheap and replaceable by design. |
| Sheoldred, the Apocalypse | Cut. A 4-mana 4/5 that wins slow games is the wrong shape for a turn-6 goldfish, and it produces no fodder and no death trigger. She is the payoff of the lifelink-attrition build, not this one. |
| Splatter Goblin | Cut during the grill repair, and it was the weakest mainboard card by both agents' assessment. A one-shot '-1/-1 until end of turn' on death is close to no removal at all; the slot went to Phyrexian Rager, which is a body AND a card. |
| Stronghold Arena | Its card draw keys off combat damage to a player, not off creature deaths -- it belongs to the lifelink-attrition build, not the sacrifice build. |
| Tattered Apparition | Cut. A 2/2 flier for {3}{B} is 4 mana for one body against a lowest-curve lens. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is catastrophic here -- this deck's whole board is 1/1 tokens and 2-drops. |
| The Cruelty of Gix | Five mana across three turns for a single reanimation; too slow for a turn-6 aggressive clock. |
| Thran Portal | Cut. Enters tapped once you control three other lands, and charges 1 life per activation on top of the deck's already thin life buffer. |
| Toxic Abomination | Cut, and cut FROM the winning sketch. 'When this creature enters, you lose 2 life' is 4 life across two copies, in the deck whose entire win condition is a life-total race and whose own lifegain is 3 of 23 cards. |
| Tyrannical Pitlord | 'When this creature leaves the battlefield, sacrifice the chosen creature' -- it two-for-ones us when answered. |
| Urborg Repossession | Returns one creature card to hand; this build would rather deploy two new bodies. |
| Valiant Veteran | Cut. 'Other Soldiers you control get +1/+1' -- the list has 4 Soldiers (Benalish Sleeper x2 and the Soldier tokens from Resolute Reinforcements x2 and Argivian Cavalier x2, which are Soldiers but arrive after it). A lord for a quarter of the board is not worth a rare slot next to Braids. |
| Weatherlight Compleated | Cut during the grill repair. It needs 4 phyresis counters to become a creature at all, and the build's justification for reaching that by turn 5 rested on two false premises: Phyrexian Warhorse is mana value 4 and cannot be on the battlefield on turn 3 with zero ramp, and Aron taps to activate so it cannot sacrifice the turn it enters. Realistic time to 4 counters is turn 6 -- the goldfish turn. Serra Paragon took the slot and is a 3/4 flier immediately. |
| Wingmantle Chaplain | Cut. Its Bird count scales with 'each creature with defender you control' and this list runs exactly 1 defender (Gibbering Barricade x1), so it enters as a 0/3 making one token. Weatherlight Compleated already fills the evasive-payoff slot for 2 mana instead of 4. |
| Writhing Necromass | A single 5/5 body; no fodder, no death trigger. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.15 adj [MV 2.39 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  53.1%  prod  58.8%  gap  -5.7pp  [OK]
  W  demand  46.9%  prod  58.8%  gap -11.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool_base: cube_mainboard of dominaria-united---main-set only; all 24 distinct names verified by exact string match against the working pool cache.
[PASS] copy_limits: commons/uncommons <= 2, rares/mythics <= 1 -- verified against cube_search.get_max_copies with a per_rarity policy and cross-checked against each pool card's max_copies. All 24 names pass. Destroy Evil is split 1 mainboard + 1 sideboard = 2 total, at its common limit.
[PASS] rare_mythic_cap: 4 of the 5 allowed used, all mainboard: Braids, Arisen Nightmare (rare), Ratadrabik of Urborg (rare), Serra Paragon (mythic), Caves of Koilos (rare land). One slot is left unspent -- and after the grill this is a tested decision rather than an assumption: the free slot was compared against Serra Paragon (taken), and every remaining sideboard answer the deck needs (Prayer of Binding, Destroy Evil, Pilfer, Knight of Dusk's Shadow, Tribute to Urborg, Cut Down) is a common or uncommon.
[PASS] basics: Plains x7 and Swamp x7 are format-supplied and exempt from copy limits.
[PASS] colour_usability: All 23 nonland cards return a non-None effective_cost.best_mode(card, ['W','B'], []). Two mainboard cards carry off-colour-looking printed identities that are in fact fully in-colour: Phyrexian Warhorse (identity BW, from its {W} kicker -- both core) and Benalish Sleeper (identity BW, from its {B} kicker -- both core). One sideboard card is genuinely off-identity and is in for its base mode only: Tribute to Urborg (identity BU; cast {1}{B}, {1}{U} kicker declined -- the deck has zero blue sources, so the kicked mode is unavailable and no claim rests on it).
```