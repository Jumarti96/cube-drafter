---
deck_name: "wu-danitha-skies-voltron"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-08-19T14:00:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  6x Island                   basic
  4x Plains                   basic
  1x Adarkar Wastes           untapped W/U painland - 1 damage per coloured tap
  2x Crystal Grotto           untapped, scry 1 on entry, {1} for any colour
  2x Idyllic Beachfront       W/U dual, enters tapped (Plains Island)
  1x Plaza of Heroes          untapped; also {3}, T, exile: a legend gains hexproof AND indestructible
```

### CREATURES (10)

```
CMC  Card                            Qty   Color  Role                        Rar
  2  Haunting Figment                x2    U      conditionally unblockable carrier  C
  2  Raff, Weatherlight Stalwart     x2    WU     legendary carrier / draw engine  U
  2  Stenn, Paranoid Partisan        x1    WU     legendary carrier / cost reducer  R
  3  Aether Channeler                x1    U      modal body: token / bounce / card  R
  3  Mesa Cavalier                   x1    W      evasive carrier             C
  3  Soaring Drake                   x1    U      evasive carrier             C
  5  Danitha, Benalia's Hope         x1    W      legendary carrier that free-attaches an Aura or Equipment  R
  5  Tura Kennerüd, Skyknight        x1    WU     legendary evasive carrier   U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Shore Up                        x2    U      protection: hexproof + untap  C
  2  Essence Scatter                 x2    U      stack answer vs creature spells  C
  2  Take Up the Shield              x2    W      protection: indestructible + permanent counter  C
```

### OTHER SPELLS (8)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Combat Research                 x2    U      legends payoff: draw on hit, +1/+1 and ward on a legend  U
  1  Vanquisher's Axe                x2    C      payoff: cheap Equipment     C
  2  Hero's Heirloom                 x2    C      legends payoff: trample + haste  U
  4  Prayer of Binding               x2    W      removal: flash exile of ANY nonland permanent  U
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                       Rar
Destroy Evil                    x2    W      enchantment answer - frees a carrier exiled by an opposing enchantment  C
Knight of Dawn's Light          x2    W      plan-B threat: first-striking carrier with a mana sink  U
Negate                          x2    U      counters sweepers and removal aimed at the carrier  C
Citizen's Arrest                x2    W      unconditional exile of a creature or planeswalker  C
Ertai's Scorn                   x2    U      unconditional counter vs sweepers and removal  U
```

## ANALYSIS

### DECK IDENTITY

Azorius legendary skies-voltron. One evasive creature carries an Aura or an Equipment and connects every turn while the rest of the deck holds mana up. Combat Research turns each connection into a drawn card, and because the carrier is legendary it also gets +1/+1 and ward {1}, so the Aura taxes the removal aimed at its own host; Hero's Heirloom adds +2/+1 and, on a legendary creature, trample and haste, so a legend cast on turn 5 attacks the same turn. Danitha, Benalia's Hope cheats an Aura or Equipment straight out of hand or graveyard onto herself, assembling carrier and payoff from one card. Shore Up and Take Up the Shield answer the one-for-one removal that would otherwise blow out a suited-up creature, Plaza of Heroes can make a legendary carrier hexproof and indestructible outright, and two flash Prayer of Binding exile whatever is standing in the way.

### THE AURA THAT DEFENDS ITSELF

Combat Research is the card the whole deck is built to abuse, and it is worth reading its two clauses separately because they behave completely differently here.

The base clause — `Enchanted creature has "Whenever this creature deals combat damage to a player, draw a card."` — is **unconditional**. It works on all 10 creature copies in the list. That is why the shape judge called it the true keystone rather than the legendary riders.

The second clause — `As long as enchanted creature is legendary, it gets +1/+1 and has ward {1}` — is live on **5 of the 10 creature copies (50%)**. Ward {1} is the interesting half: it makes the Aura tax the removal aimed at the creature carrying it. An Aura is normally the most punishable card type in Magic, because answering the creature two-for-ones you. This one charges the opponent a tax for doing it.

### WHAT THE POOL ACTUALLY ALLOWS — AND WHY THIS IS THE THINNEST LEGENDS PATH

Be clear about the ceiling here. Filtering the entire cube for legendary creatures whose colour identity fits inside W/U returns **four cards**: Raff, Weatherlight Stalwart; Stenn, Paranoid Partisan; Tura Kennerud, Skyknight; Danitha, Benalia's Hope. That is all of them. This deck runs 5 copies drawn from all four — every legend W/U has — and the other five carriers are non-legendary purely because there is nothing else to run.

So half the time the legendary riders on Combat Research and Hero's Heirloom are simply off. That is not a build error; it is the honest ceiling of "Legends Matter" in two colours, and it is exactly what the Phase 3 shortlist flagged before this path was chosen.

### DANITHA IS THE COMPRESSION CARD

`When Danitha enters, you may put an Aura or Equipment card from your hand or graveyard onto the battlefield attached to Danitha.`

A voltron deck's structural problem is that it needs two cards to make one threat. Danitha needs one. She has **5 legal targets** in the list (Combat Research ×2, Hero's Heirloom ×2, Vanquisher's Axe ×2 — 6 cards) and the clause reads *from your hand **or graveyard***, so she recurs a payoff that already died with a previous carrier. First strike, vigilance and lifelink on a 4/4 means she survives the combat she creates. The shape judge called her ETB "the single best synergy pick of the three" sketches.

### THE EQUIPMENT-VERSUS-AURA SPLIT IS DELIBERATE

| | Combat Research | Hero's Heirloom / Vanquisher's Axe |
|---|---|---|
| Effect | draw a card on every hit | +2/+1 (trample + haste on a legend) / +2/+0 |
| When the carrier dies | dies with it — card disadvantage | **stays on the battlefield**, re-arms the next body for `Equip {2}` |
| Legendary rider | +1/+1 and ward {1} | trample and haste |

That resilience asymmetry is why the deck runs 4 Equipment against 2 Auras, and it is the backbone of the decapitation plan: the carrier role sits at 10 copies (p = 0.97 by turn 5), so a replacement host is nearly always available to pick the gear back up.

### WHAT THE GRILL CHANGED

Two findings materially rebuilt this deck and are worth recording:

1. **The pre-grill list had zero maindeck removal.** Not "thin" — zero of 24 nonland cards could remove an opposing permanent, in a cube whose largest threat class is evasion at 51 of 247 cards (20.7%). A single resolved 2/3 flier blocked the carrier and the whole plan stopped. Prayer of Binding ×2 moved from the sideboard to the maindeck to fix it, at the cost of both Impulse — a keystone of the locked sketch.

2. **The interaction count was inflated.** Shore Up and Take Up the Shield only target creatures *you control*; counting them as "interaction" made the deck look like it had a 25% interaction budget when the opponent-facing figure was 8.3%. Both numbers are now recorded. Under the strict reading the deck sits *below* the Tempo band at 16.7%, and that is stated rather than argued away.

### THE HONEST WEAKNESS

The maindeck cannot counter a noncreature spell — Essence Scatter reads `Counter target creature spell`. A removal spell aimed at the suited-up carrier resolves in game one, every time. The protection suite (Shore Up ×2, Take Up the Shield ×2, Plaza of Heroes, plus Combat Research's own ward) is 5 copies at 4.5 effective, p = 0.76 by turn 5 — it clears the gate by 0.01. Game two, Negate ×2 and Ertai's Scorn ×2 come in, and between them they answer **all six** of this cube's sweepers, every one of which is a noncreature spell.

### SIDEBOARDING

The sideboard is deliberately the mainboard's opposite: the maindeck's interaction protects, so the board is proactive. Destroy Evil deserves a specific note — its second mode, `Destroy target enchantment`, is how you get a carrier back when an opposing Citizen's Arrest or Prayer of Binding has exiled it, because those effects exile *until this enchantment leaves the battlefield*.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Tempo):  [PASS]
  MV distribution (24 nonland):  1:6  2:11  3:3  4:2  5:2
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  aura_equipment_payoff: 6 copies (effective 5.2: Vanquisher's Axe@0.6, Vanquisher's Axe@0.6) → p=0.81 (need ≥ 0.75)
  PASS  carrier: 10 copies → p=0.97 (need ≥ 0.75)
  PASS  protection: 5 copies (effective 4.5: Plaza of Heroes@0.5) → p=0.76 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 74%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Stated precisely after the grill: W/U has no NON-SYMMETRIC sweeper reachable in this pool. Three sweepers are castable here and every one of them destroys or exiles this deck's own board as well. The Phasing of Zhalfir ({2}{U}{U}, rare) chapter III reads 'Destroy all creatures'. Karn's Sylex ({3}, mythic, colourless and therefore reachable) reads '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' - at X=2 that is 17 of this list's 24 nonland cards plus its own Equipment. Temporary Lockdown ({1}{W}{W}, rare) reads 'exile each nonland permanent with mana value 2 or less', hitting the same 17 of 24. A deck that concentrates two or three cards onto one creature cannot play a symmetric sweeper. The deck answers width by going over it: 3 of its 10 creature copies fly (Mesa Cavalier, Soaring Drake, Tura Kennerud), 2 more (Haunting Figment x2) cannot be blocked on any turn an instant has been cast, and Aether Channeler can make a flying token.
  OK        single_large_threat: Prayer of Binding, Essence Scatter, Aether Channeler, Take Up the Shield
  OK        noncreature_permanents: Prayer of Binding, Aether Channeler
  OK        stack: Essence Scatter
  CONCEDED  graveyard: Stated precisely: this cube contains no graveyard HATE - no card exiles, disrupts or shrinks an opponent's graveyard. Two cards do reach into a graveyard, but to steal from it rather than answer it: The Cruelty of Gix chapter III and Soul of Windgrace. The cube's 32-card graveyard-interaction class (13.0%) therefore cannot be disrupted by any deck in this cube.
```

- DISCLOSURE, not a check response: the Challenger observed that once protective spells are excluded from the interaction count, this deck's shape is 41.7% threats / 16.7% opponent-facing interaction / 25% engine, which reads closer to an aggro-voltron curve than to classical Tempo. The Tempo label is retained because the deck holds mana up every turn rather than emptying its hand, but the objection is recorded here rather than argued away, and both interaction figures are stated in slot_allocation.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Every payoff in the deck is a repeatable mana sink: Hero's Heirloom x2 and Vanquisher's Axe x2 all read 'Equip {2}', so surplus mana moves the bonus onto a fresh carrier every turn. Stenn, Paranoid Partisan reads '{1}{W}{U}: Exile Stenn. Return it to the battlefield under its owner's control at the beginning of the next end step', a repeatable outlet that also blanks a removal spell aimed at it. Crystal Grotto x2 scry on entry. At 16 lands - the computed target, corrected down from a 17-land draft - the deck also simply draws fewer of them. |
| screw | mitigation | 17 of 24 nonland cards cost 2 or less and 6 cost 1, and only 2 of 16 lands enter tapped. A two-land hand casts Combat Research, Shore Up, Vanquisher's Axe, Raff, Stenn, Haunting Figment, Hero's Heirloom, Take Up the Shield or Essence Scatter on curve. Stated precisely: Crystal Grotto's coloured mode costs an extra {1}, so a two-land hand containing one is a turn slower than a two-land hand of basics. The goldfish simulation measured 84% keepable hands and 3 lands by turn 3 in 84%. |
| decapitation | mitigation | REWRITTEN after the grill, which correctly showed the previous 'accepted' entry justified inaction with a cost that did not exist. The deck's protection suite is Shore Up x2 ('gains hexproof until end of turn. Untap it'), Take Up the Shield x2 ('lifelink and indestructible until end of turn' plus a permanent +1/+1 counter), Plaza of Heroes ('{3}, {T}, Exile this land: Target legendary creature gains hexproof and indestructible'), Combat Research's own ward {1} on a legendary host, and Stenn's self-blink - 5 declared copies at 4.5 effective, p=0.76 by turn 5. Structurally, Hero's Heirloom x2 and Vanquisher's Axe x2 STAY ON THE BATTLEFIELD when the equipped creature dies and re-arm the next body for {2}, and the carrier role is 10 copies at p=0.97, so a replacement host is nearly always available. What is honestly NOT covered: the maindeck cannot counter a noncreature spell - Essence Scatter reads 'Counter target creature spell' - so a removal spell aimed at the carrier resolves in game one. Negate x2 and Ertai's Scorn x2 in the sideboard are the game-two answer, and all six of this cube's sweepers are noncreature spells, so those four counters answer 6 of 6. |
| gas-out | mitigation | Combat Research IS the refuel: 'Whenever this creature deals combat damage to a player, draw a card' fires every turn the carrier connects, and it is why the locked lens is card-advantage-leaning. Behind it, Raff, Weatherlight Stalwart draws on 6 of 24 nonland cards by tapping two creatures, Aether Channeler can simply draw a card, and Tura Kennerüd makes a 1/1 Soldier on each of those same 6 spells so the board widens even when the hand does not. Stated honestly: cutting Impulse x2 for Prayer of Binding x2 after the grill cost this mode two of its digging cards, and Raff's denominator fell from 8 of 24 to 6 of 24 as a result. |
| raced | mitigation | The clock is fast - a stated turn-5 goldfish with 17 of 24 nonland cards at 2 mana or less - and the blockers are real: Raff x2 is a 1/3 for two, Soaring Drake is a 2/3 flier, Danitha has first strike, vigilance AND lifelink so she attacks and blocks in the same turn, Take Up the Shield grants lifelink and indestructible at instant speed, Prayer of Binding gains 2 life while exiling the attacker, and Mesa Cavalier gains 2 on entry. Essence Scatter x2 counters the opposing threat before it ever attacks. |
| disruption-fizzle | mitigation | The critical turn is the equip or enchant. Shore Up untaps as well as granting hexproof, so it answers a removal spell in response to the equip and still leaves the carrier able to attack; Take Up the Shield's indestructible survives a damage-based or destroy-based answer; Plaza of Heroes gives a legendary carrier both hexproof and indestructible for {3}; Prayer of Binding has flash, so the answer can be held up on the same turn as the attack. If the carrier dies anyway, all four Equipment copies stay on the battlefield and re-arm the next body - only the Aura is lost. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Jodah, the Unifier | The pool's biggest legends payoff, but {W}{U}{B}{R}{G} is uncastable in a two-colour deck - effective_cost.best_mode returns no usable mode inside W/U. |
| Ratadrabik of Urborg | The other real legends payoff, but {2}{W}{B} needs black, which this shell does not play. |
| Astor, Bearer of Blades | Would give Equipment equip {1} and dig seven for one, but it is R/W - outside this deck's colours - and would force a third colour for a 4-card Equipment package. |
| Weatherlight Compleated | A legendary artifact Vehicle, but it needs four phyresis counters (one per creature death) before it is a creature at all; this deck is not built to lose creatures. |
| Golden Argosy | Legendary Vehicle that exiles its own crew on attack and returns them at the next end step - the equipped carrier would leave the battlefield and its Equipment would fall off. |
| Karn, Living Legacy | Legendary planeswalker, but its Powerstone mana can only be spent on artifact spells and this list runs 4 artifacts; a 4-mana do-nothing in a tempo deck. |
| Karn's Sylex | Symmetric sweeper that would destroy our own carriers and our own Equipment. |
| Vesuvan Duplimancy | Copies a targeted artifact or creature, but the token is explicitly 'not legendary', so it cannot carry the legendary halves of Combat Research or Hero's Heirloom. |
| Temporary Lockdown | Exiles every nonland permanent with mana value 2 or less - it would exile our own Equipment, our Aura carriers and most of our curve. |
| The Phasing of Zhalfir | Rare Saga whose chapter III destroys all creatures, including the carrier we have invested two cards into. |
| Serra Paragon | Mythic 3/4 flier with strong graveyard recursion, but 4 mana and a capped rare slot in a deck whose plan is to have already connected twice by then. |
| Sphinx of Clear Skies | Mythic 5/5 flier, but its domain payoff scales with basic land types and a two-colour base reaches only 2 of 5. |
| Haughty Djinn | Rare flier whose power equals the instants and sorceries in the graveyard and which discounts them; a real card, but it points the deck at a spells-matter plan rather than at carrying Auras. |
| Defiler of Dreams | Rare 4/3 flier that draws on blue permanent spells, but {3}{U}{U} is a 5-drop in a deck whose goldfish turn is 5. |
| Defiler of Faith | Rare 5/5 with a white-permanent discount, but {3}{W}{W} is likewise a 5-drop and not evasive. |
| Serra Redeemer | Rare 2/4 flier that doubles up on +1/+1 counters for small creatures entering, but it costs 5 and this list wants its mana on carriers plus protection. |
| Tolarian Terror | Cost reduction scales with instants and sorceries in the graveyard; this is a creature-and-Equipment deck, not a spells deck. |
| Academy Loremaster | Symmetric extra draw hands a control opponent the same card advantage, and it does not carry an Aura any better than a 2/3 body. |
| Djinn of the Fountain | 4/4 flier for 6 that grows on instant and sorcery casts - a fine carrier but far above this deck's curve. |
| Frostfist Strider | 4/4 ward {2} that stuns a blocker on entry, and ward is real protection for a carrier - but {3}{U}{U} is 5 mana and double blue. |
| Wingmantle Chaplain | Makes a Bird for each defender you control; this list runs 0 defenders, so the ETB makes 0 tokens. |
| Coral Colony | Its mill scales with creatures with defender you control; this list runs 0 defenders. |
| Micromancer | Tutors an instant or sorcery with mana value 1; this list runs 2 such cards (Shore Up), so the search finds one card name. |
| Founding the Third Path | Chapter I free-casts an instant or sorcery with mana value 1 or 2 - a real effect, but the Saga's other two chapters are graveyard-facing and this deck has no graveyard plan. |
| Silver Scrutiny | Rare draw-X; a control card in a deck that wants to spend mana on carriers and protection during the turns it is attacking. |
| Valiant Veteran | Anthem for Soldiers; this list's Soldier count comes only from tokens, so the anthem is small and it costs a capped rare slot. |
| Vodalian Hexcatcher | Merfolk anthem plus a Merfolk-sacrifice counterspell; this list runs 0 other Merfolk, so both halves are blank. |
| Salvaged Manaworker | Any-colour mana once per turn, but a two-colour deck with 8 dual lands does not need fixing and a 1/3 body is not a carrier. |
| Jodah's Codex | Domain draw engine whose activation cost falls with basic land types; a two-colour base reaches 2 of 5, so it costs {3} to draw a card, once per turn. |
| Argivian Phalanx | Affinity for creatures makes it cheap on a wide board, but a 4/4 vigilance ground body does not carry Combat Research past blockers. |
| Leyline Binding | Domain cost reducer; a two-colour base reaches 2 basic land types, so it costs {3}{W} at best, and it spends a capped rare slot. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.29   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.61 adj [MV 2.29 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand  60.0%  prod  75.0%  gap -15.0pp  [OK]
  W  demand  40.0%  prod  62.5%  gap -22.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card appears more than 2 times across mainboard and sideboard combined.
rares_mythics_max_1: PASS - Danitha Benalia's Hope, Stenn Paranoid Partisan, Aether Channeler, Adarkar Wastes and Plaza of Heroes are 1 copy each.
rare_mythic_total_max_5: PASS - exactly 5 across mainboard and sideboard; the sideboard is entirely common and uncommon.
basics_unrestricted: Island x6, Plains x4 - format-supplied and exempt from copy limits.
all_cards_from_cube: PASS - exact-name match against the working pool cache for all distinct cards.
colour_legality: PASS - effective_cost.best_mode returns a usable mode within W/U for every nonland card; there are no off-identity inclusions at all in this build.
```
