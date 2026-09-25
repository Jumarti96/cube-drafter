---
deck_name: "wu-skies-voltron"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-11T20:05:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  7x Island
  4x Plains
  2x Evolving Wilds  (fetches a basic, tapped)
  2x Idyllic Beachfront  (dual, enters tapped)
  1x Hallowed Fountain  (dual, untapped for 2 life)
```

### CREATURES (10)

```
CMC  Card                                                 Qty   Color Role                 Rar
  1  Flitterwing Nuisance                                 x1    U     Threat/Payoff        R
  2  Gravelgill Scoundrel                                 x2    U     Threat/Payoff        C
  2  Loch Mare                                            x1    U     Engine               M
  2  Sygg, Wanderwine Wisdom // Sygg, Wanderbrine Shield  x1    C     Threat/Payoff        R
  2  Unwelcome Sprite                                     x2    U     Threat/Payoff        U
  3  Glen Elendra Guardian                                x1    U     Interaction          R
  3  Silvergill Peddler                                   x2    U     Engine               C
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                                                 Qty   Color Role                 Rar
  1  Spell Snare                                          x2    U     Interaction          U
  3  Crib Swap                                            x1    W     Interaction          U
```

### OTHER SPELLS (11)

```
CMC  Card                                                 Qty   Color Role                 Rar
  1  Evershrike's Gift                                    x2    W     Threat/Payoff        U
  1  Springleaf Drum                                      x2    C     Engine               U
  2  Aquitect's Defenses                                  x2    U     Threat/Payoff        C
  2  Bark of Doran                                        x1    W     Threat/Payoff        U
  2  Spiral into Solitude                                 x2    W     Interaction          C
  2  Stalactite Dagger                                    x2    C     Threat/Payoff        C
```

## SIDEBOARD (10)

```
Card                                                 Qty   Color Role / When to board in  Rar
Keep Out                                             x2    W     Hate — Against attacking decks ('deals 4 damage to target tapped creature' reaches anything that attacked) and against the cube's 21 enchantments via the second mode. Note it does NOT answer artifacts.  [C]
Wild Unraveling                                      x2    U     Hate — Against decks whose key spell is not mana value 2 (where Spell Snare is blank) — 'Counter target spell' for {U}{U}. Pay the {1} alternative cost rather than blight 2: two -1/-1 counters kill 4 of this deck's 10 creature copies.  [C]
Pyrrhic Strike                                       x2    W     Hate — The deck's only artifact answer — against the cube's 11 artifacts and 21 enchantments. Take one mode by default; the blight 2 that unlocks both kills 4 of 10 creature copies.  [U]
Rimekin Recluse                                      x2    U     Flex — Against a resolved threat you cannot exile, and to reset an opposing Aura or Equipment — 'When this creature enters, return up to one OTHER target creature to its owner's hand.' The 'up to one other' wording means it never forces a self-bounce, and it leaves a 3/2 body behind.  [U]
Rooftop Percher                                      x2    C     Hate — Against the cube's 39 graveyard cards — 'exile up to two target cards from graveyards'. Colourless, so it casts off any lands, but at mana value 5 it sits above a curve that tops at 3; board it in only when graveyard interaction is the matchup.  [C]
```

## ANALYSIS

### DECK IDENTITY

A W/U skies-and-unblockable Voltron deck. It does not try to grant evasion — it starts with carriers that cannot be blocked in the first place: Sygg and Gravelgill Scoundrel say so in their own oracle text, and with the fliers that is 7 of 10 creature copies that ignore the opposing board entirely. Bark of Doran is the damage converter — it turns high-toughness bodies into their own clock, and Gravelgill Scoundrel 1/3 becomes a 1/4 that hits for 4 while unblockable. The investment is defended on the stack with Spell Snare and Glen Elendra Guardian and on the battlefield with Aquitect's Defenses, whose flash Aura protects and suits on the same card. CORRECTED AFTER THE GRILL: an earlier version of this deck claimed Bark of Doran was colourless and therefore survived Sygg's Shield-face 'protection from each color'. That is false — Bark of Doran is {1}{W} with colors ['W'] and is shed exactly like an Aura. Only Stalactite Dagger (mana cost {2}, colors []) survives it, which is why it now runs at 2 copies; Sygg's Shield trigger otherwise targets a different creature.


### THE THESIS: DON'T GRANT EVASION, START WITH IT

The G/W build of this archetype spends cards granting trample so an Aura's stats can reach the opponent. This deck skips that step. Seven of ten creature copies are evasive before any Aura is cast:

| Carrier | How it evades | Copies |
|---|---|---|
| Sygg, Wanderwine Wisdom | *"Sygg can't be blocked"* — on **both** faces, unconditional, no cost | 1 |
| Gravelgill Scoundrel | *"you may tap another untapped creature you control. If you do, this creature can't be blocked this turn"* | 2 |
| Flitterwing Nuisance / Unwelcome Sprite / Glen Elendra Guardian | Flying | 4 |

That is why the Aura package is only 7 cards and the interaction and engine slots are bigger than the G/W list's: the deck spends nothing on getting damage through.

### THE SYGG TRAP — AND WHY IT ISN'T ONE

Sygg's back face reads *"target creature you control gains protection from each color until your next turn."* Protection from a colour makes a coloured Aura an illegal attachment, and it will not keep a coloured Equipment attached either. Against this list that sheds **5 of 7 payoff copies** — Evershrike's Gift ×2 (white), Aquitect's Defenses ×2 (blue) and Bark of Doran ×1 (white, `{1}{W}` — it is *not* a colourless artifact, despite being an Equipment).

The reason this is a play-pattern note and not a deckbuilding problem: **the transform is optional.** *"At the beginning of your first main phase, you may pay {W}. If you do, transform Sygg."* The protection trigger fires only on transformation. A Sygg wearing Auras simply never flips. When you do want the protection, point it at a different creature, or flip a Sygg wearing only Stalactite Dagger — the one payoff in the deck with `colors: []`, which is why it runs at 2 copies.

### BARK OF DORAN FINALLY HAS A HOME

In G/W this Equipment is nearly dead: that deck's creatures have power ≥ toughness and its own Auras grant +2/+0, switching the damage-swap clause off. Here the creature base is built the other way round — **7 of 9 known creature copies end with toughness > power** after Bark's own +0/+1:

```
Gravelgill Scoundrel  1/3 -> 1/4   assigns 4, unblockable
Silvergill Peddler    2/3 -> 2/4   assigns 4
Loch Mare             4/5 -> 4/6   assigns 6
Glen Elendra Guardian 3/4 -> 3/5   assigns 5 (2/4 -> assigns 4 with its counter still on)
Flitterwing Nuisance  2/2 -> 2/3   assigns 3
```

A 1/3 Gravelgill Scoundrel that hits for 4 and cannot be blocked is the deck's cleanest clock. One caveat: Evershrike's Gift's `+1/+0` switches the clause off on any carrier whose margin is exactly 1 — put the Gift on a different body.

### THE RESOURCE CONFLICT TO PLAY AROUND

Three cards bid for the same untapped creature: Gravelgill Scoundrel's unblockable cost, and both Springleaf Drums. All are paid with *"tap another untapped creature you control."* Gravelgill has vigilance so it never taps itself to attack, but each activation still costs a body that stays home. With 10 creature copies plus 2 changeling tokens this is manageable — but on turn 3 with two creatures out, using the Drum for mana means the Scoundrel gets blocked.

### THE MANA IS WORSE THAN THE G/W BUILD'S

Four of 16 lands enter tapped (Idyllic Beachfront ×2 unconditionally, Evolving Wilds ×2 fetching tapped), against three in the G/W deck. Hallowed Fountain is the only untapped-capable W/U source in the cube and takes a rare slot for that alone. Springleaf Drum ×2 is what pays for the difference — it makes any colour off a summoning-sick one-drop, which is exactly the turn-two double-spell a tapped land denies.

### PLAY PATTERN

Lead on a cheap evasive body, then suit it on turn 2–3 while holding `{U}` for Spell Snare when the mana allows. The deck's honest weakness is that on turns 3 and 4 it usually cannot both protect and develop — Interaction sits at the 25% band floor deliberately, and the locked lens says develop. Spiral into Solitude is the answer to the one blocker a ground carrier cannot get past; Aquitect's Defenses is the answer to the removal spell, and it suits the creature on the same card.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:7  2:13  3:4
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.8: Bark of Doran@0.8) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9: Sygg, Wanderwine Wisdom // Sygg, Wanderbrine Shield@0.7, Flitterwing Nuisance@0.7, Loch Mare@0.6) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 78%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: W/U holds no mass removal at this curve. The deck's answer is that its damage is uninterceptable rather than removal-based: Sygg and Gravelgill Scoundrel cannot be blocked by their own oracle text and 4 of 10 creature copies fly, so 7 of 10 creature copies ignore the size of the opposing board entirely. Spiral into Solitude x2 answers the single blocker that a ground carrier cannot get past.
  OK        single_large_threat: Crib Swap, Spiral into Solitude, Spell Snare, Glen Elendra Guardian
  CONCEDED  noncreature_permanents: There is no mainboard answer to an artifact or enchantment. The cube's artifact density is 4.2% (11 cards) and enchantment density 8.1% (21 cards); Pyrrhic Strike x2 carries both classes from the sideboard, and it is the deck's ONLY artifact answer (Keep Out's second mode reads 'Destroy target enchantment' and does not touch artifacts). Maindecking an answer would cost a carrier or an Aura slot against a locked most-proactive-clock lens.
  OK        stack: Spell Snare, Glen Elendra Guardian
  CONCEDED  graveyard: No W/U mainboard graveyard hate at this curve. Rooftop Percher is colourless and sits in the sideboard for the cube's 39 graveyard cards; at mana value 5 it is above a curve that tops at 3, which is the cost of the concession.
```

No WARN-tier flags were raised on either the pre-grill or the post-repair run: curve, assembly, goldfish and coverage all returned PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | CORRECTED after the grill (Challenger F12: the previous entry credited Springleaf Drum with absorbing mana when its oracle text produces it). The genuine sinks are Bark of Doran's 'Equip {1}', Stalactite Dagger's 'Equip {2}' x2, Flitterwing Nuisance's '{2}{U}, Remove a counter' (single use, by its own text), and Loch Mare's '{1}{U}, Remove a counter: Draw a card' x3 plus '{2}{U}, Remove two counters: Tap target creature' — 5 of 24 nonland cards. Equipment persists when its creature dies, so a flooded board re-equips a fresh carrier for {1} or {2} rather than recasting a card. |
| screw | mitigation | Seven of 24 nonland cards cost 1 and thirteen cost 2; nothing costs more than 3. Springleaf Drum x2 ('{T}, Tap an untapped creature you control: Add one mana of any color') turns a summoning-sick one-drop into the third mana AND fixes the colour, which matters because 4 of 16 lands enter tapped by their own text. Evolving Wilds x2 fetches whichever basic is missing. Goldfish sim: 84% keepable, 84% on three lands by turn 3. |
| decapitation | mitigation | The key piece is the suited carrier, defended on three axes — CORRECTED from four (Challenger F1 showed the fourth was false). On the stack: Spell Snare x2 and Glen Elendra Guardian ('{1}{U}, Remove a counter: Counter target noncreature spell' — removal spells are noncreature, so this is live). On the battlefield: Aquitect's Defenses x2 (Flash, 'enchanted creature gains hexproof until end of turn'), where protecting and suiting are the same card and the same mana. By redundancy: 10 creature copies plus 2 changeling tokens can wear the same Equipment for {1} or {2} after the first carrier dies, and Evershrike's Gift x2 rebuys itself from the graveyard. The FOURTH axis previously claimed — Sygg's 'protection from each color' — is withdrawn as a protection for the SUITED creature, because it sheds 5 of 7 payoff copies; it remains usable on an unsuited creature or on a Sygg wearing only Stalactite Dagger. |
| gas-out | mitigation | REWRITTEN after the grill, which marked the previous entry UNSATISFIED. The Challenger was right that Unwelcome Sprite's 'surveil 2' draws zero cards and could not be counted, leaving 0 of 24 unconditional card-count-positive sources. Repaired: Loch Mare ('{1}{U}, Remove a counter from this creature: Draw a card', three counters = three cards, no combat required) and Silvergill Peddler x2 ('Whenever this creature becomes tapped, draw a card, then discard a card', turned on by every attack and by the deck's 3 tap-a-creature costs) = 3 of 24 nonland cards that produce cards unconditionally, where there were none. Alongside them sit the conditional sources: Sygg's front-face draw-on-damage grant, Flitterwing Nuisance's one-shot team draw, and Evershrike's Gift x2 rebuying from the graveyard — with the rebuy cost stated honestly, since 'Blight 2' puts two -1/-1 counters on your own creature and kills 4 of the 10 creature copies outright. |
| raced | mitigation | The cube's fastest clocks are evasive (threat_profile: 41 evasion cards, 15.8%, 13 of them blue) and this deck races them in the same lane rather than blocking: 4 of 10 creature copies fly and 3 more cannot be blocked at all by their own text, so 7 of 10 carriers connect regardless of the opposing board. Glen Elendra Guardian is a flash flier that ambushes most of the cube's fliers; Crib Swap exiles unconditionally at instant speed; Spiral into Solitude x2 turns off an attacker for two mana; Spell Snare x2 answers a two-drop before it lands. |
| disruption-fizzle | accepted | The kill turn is a combat step, so there is no chain to break. The honest exposure is a RESOURCE conflict, now recorded here because the Challenger (F11) found the previous entry cross-referenced a record that did not exist: Gravelgill Scoundrel's unblockable clause costs 'tap another untapped creature you control' in the declare-attackers step, and Springleaf Drum's mana ability costs the same untapped body — 3 of 24 nonland cards bid for one resource, against 10 creature copies and 2 changeling tokens. On top of that the deck wants {U} up for Spell Snare on the same turn it attacks and re-suits, and it cannot do all three on 3 lands. Mitigating would mean cutting carriers or payoffs for cheaper interaction, which is the trade the locked most-proactive-clock lens declined and which is why Interaction sits at the 25% band floor rather than mid-band. The cost accepted is that on turns 3 and 4 the deck usually chooses between protecting and developing, and it is built to choose developing. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Lofty Dreams | The archetype context named this a keystone, and it is the pool's best raw Aura — '+2/+2 and has flying' plus 'When this Aura enters, draw a card', so it replaces itself. Excluded on cost: {3}{U}{U} is MV 5 against a locked most-proactive-clock lens and a turn-5 thesis, and its convoke taps the very carrier it is enchanting, costing the attack it is meant to enable. THE FIRST CARD TO TRY if you want to slow this deck down and grind. |
| Gilt-Leaf's Embrace | SPLASH CANDIDATE, declined. Flash +2/+0 with trample and indestructible is the best Aura in the cube, but trample is worth nothing on a carrier that is already unblockable or flying, so the splash would buy only the indestructible half — at the cost of green sources in a cube where the U/G and W/G duals are one common each and all enter tapped. |
| Blossoming Defense | SPLASH CANDIDATE, declined. Aquitect's Defenses supplies the same hexproof beat at flash speed, in-colour, and leaves a permanent +1/+2 behind instead of a one-shot +2/+2. |
| Pitiless Fists | SPLASH CANDIDATE, declined. {3}{G} for a fight is a green mana investment this deck cannot support, and the fight is two-way damage on carriers whose power is deliberately low (Gravelgill Scoundrel 1/3, Tributary Vaulter 1/3). |
| Mirrormind Crown | RARE. 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' — a genuine engine with Silvergill Mentor and Pestered Wellguard, but {4} to cast plus {2} to equip is 6 mana before it copies anything, against a turn-5 thesis. |
| Illusion Spinners | SIDEBOARD ONLY. 4/3 flier with 'hexproof as long as it's untapped' — but attacking taps it, so the hexproof is off during combat, exactly when the carrier is exposed. Boarded in against removal-dense decks as a threat that must be answered at sorcery speed. |
| Loch Mare | MYTHIC. {1}{U} 4/5 that enters with three -1/-1 counters (so a 1/2) and converts counters into cards or tap-downs. A fine grindy two-drop, but it spends a mythic slot and its body only grows by spending its own utility. |
| Deepway Navigator | RARE. 'As long as you attacked with three or more Merfolk this turn, Merfolk you control get +1/+0' — a go-wide Merfolk payoff. This deck attacks with one suited creature and runs 4 Merfolk copies; the condition is rarely met. |
| Sygg's Command | RARE. Modal, but its Merfolk-copy and lifelink modes are go-wide effects; a Voltron deck wants removal or protection, not a token copy of a 1/3. |
| Champions of the Shoal | RARE. 4/6 with a repeatable tap-and-stun on ETB and on becoming tapped — real interaction, but the 'behold a Merfolk and exile it' additional cost is card disadvantage a Voltron deck cannot absorb, and MV 4 breaks the lens. |
| Glen Elendra's Answer | MYTHIC. 'Counter all spells your opponents control and all abilities your opponents control' is a blowout, but {2}{U}{U} held up is a whole turn not attacking, against a lens built to attack every turn. |
| Kinbinding | RARE. +X/+X where X is creatures that entered this turn — a go-wide anthem in a one-creature-tall deck. |
| Adept Watershaper | RARE. 'Other tapped creatures you control have indestructible' is excellent, and it was maindecked in the G/W build — excluded here only because the rare budget is spent on Sygg, Flitterwing Nuisance, Glen Elendra Guardian and Hallowed Fountain, all of which are either the kill mechanism or the mana. THE STRONGEST RARE ON THE BUBBLE. |
| Rimefire Torque | RARE. Copying an instant or sorcery needs three charge counters from permanents of a chosen type entering; this deck deploys roughly one permanent per turn, so the first copy arrives around turn 5. |
| Disruptor of Currents | RARE. Flash convoke 3/3 that bounces a nonland permanent — MV 5, outside the clock. |
| Wild Unraveling | SIDEBOARD. '{U}{U} Counter target spell' with 'blight 2 or pay {1}' — the double-blue pip is harder to hold up than Spell Snare's single {U} on turn two, and blight 2 kills most of this deck's own carriers. In against decks whose key spells are not mana value 2. |
| Run Away Together | SIDEBOARD. It forces two targets 'controlled by different players', and returning your own enchanted carrier to hand puts every Aura on it into the graveyard — it destroys the investment it would rescue. |
| Flock Impostor | {2}{W} 2/2 flash flier whose ETB returns your own creature to hand — same anti-synergy: bouncing the carrier discards every Aura on it. |
| Personify | 'Exile target creature you control, then return that card to the battlefield' — blinking a carrier makes every Aura fall off. |
| Rimekin Recluse | {2}{U} 3/2 that bounces a creature on ETB — the 'up to one OTHER target creature' wording keeps it safe for your own board, but a 3/2 ground body is a poor Aura carrier in a deck built to fly. |
| Silvergill Peddler | 'Whenever this creature becomes tapped, draw a card, then discard a card' — a 2/3 loot engine, but it does not fly or evade and every tap competes with Gravelgill Scoundrel's unblockable cost. |
| Pestered Wellguard | Makes a 1/1 flier whenever it becomes tapped — real value, but MV 4 in a deck whose curve tops at 3. |
| Deepchannel Duelist | 'Other Merfolk you control get +1/+1' and an end-step untap — a Merfolk-tribal anthem; this deck runs 4 Merfolk copies out of 10 creatures and does not go wide. |
| Merrow Skyswimmer | {3}{W/U}{W/U} convoke 2/2 flier with a token — MV 5, and convoke taps the carriers. |
| Stratosoarer | {4}{U} 3/5 flier with basic landcycling — the landcycling mode is genuinely useful, but MV 5 for the body breaks the lens. |
| Thirst for Identity | 'Draw three cards. Then discard two cards unless you discard a creature card' — real selection, but a sorcery-speed-feeling 3 mana that does not affect the board on a turn the deck wants to attack or protect. |
| Eclipsed Merrow | {W/U}{W/U}{W/U} 2/3 that digs for a Merfolk, Plains or Island — the fixing is real, but three hybrid pips at MV 3 competes directly with the deck's own three-drops, and Springleaf Drum fixes more cheaply. |
| Wanderbrine Trapper | '{1},{T}, Tap another untapped creature you control: Tap target creature an opponent controls' — removing a blocker is redundant on carriers that are already unblockable or flying, and it costs two bodies' taps. |
| Blossombind | An Aura that taps and locks down an opposing creature — removal dressed as an Aura, and redundant when the deck's damage is unblockable anyway. |
| Noggle the Mind | Turns a creature into a vanilla 1/1 — a removal Aura, not a Voltron piece, and it does not stop a creature from blocking. |
| Spiral into Solitude | 'Enchanted creature can't attack or block' at {1}{W} — a fine Pacifism, but Crib Swap exiles unconditionally at instant speed for one more mana. |
| Burdened Stoneback | 'Activate only as a sorcery' means its indestructible grant cannot answer instant-speed removal, which is the removal that kills a Voltron carrier. |
| Kinsbaile Aspirant | {W} 2/1 — the only cheap white body without evasion; in a deck whose thesis is uninterceptable damage, a ground 2/1 carrier is the one that gets chump-blocked. |
| Curious Colossus / Winnowing / Morningtide's Light | All MV 6-7 white cards. Winnowing is mass removal and Curious Colossus blanks a board, but both resolve well after the turn-5 thesis, and Morningtide's Light would exile your own carrier and drop its Auras. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.88   Ramp cards: 2   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.33 adj [MV 1.88 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand  68.4%  prod  62.5%  gap  +5.9pp  [OK]
  W  demand  31.6%  prod  43.8%  gap -12.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base: cube_mainboard (ecl)                                    PASS
Commons/uncommons max 2 copies                                     PASS
Rares/mythics max 1 copy                                           PASS
Max 5 rare/mythic cards (main+side): 5 used -> Flitterwing Nuisance, Glen Elendra Guardian, Hallowed Fountain, Loch Mare, Sygg, Wanderwine Wisdom // Sygg, Wanderbrine Shield   PASS
Every card present in the cube by exact name                       PASS
Colour usability via effective_cost.best_mode                      PASS
Mainboard = 40                                                    PASS
Sideboard = 10                                                    PASS
```
