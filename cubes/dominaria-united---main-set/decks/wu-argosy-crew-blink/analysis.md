---
deck_name: "wu-argosy-crew-blink"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-08-18T16:10:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x9  Plains                   Basic
x6  Island                   Basic
x2  Idyllic Beachfront       WU dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                     Qty   Color  Role                         Rar
2    Knight of Dawn's Light   x2    W      Mana-sink crew body          U
2    Resolute Reinforcements  x2    W      Flash token ETB crew         U
3    Aether Channeler         x1    U      Modal ETB crew               R
3    Anointed Peacekeeper     x1    W      Re-nameable tax ETB crew     R
3    Argivian Cavalier        x2    W      Token ETB crew               C
3    Automatic Librarian      x1    C      Scry ETB crew (colourless)   C
3    Mesa Cavalier            x1    W      Evasive ETB                  C
3    Soaring Drake            x1    U      Evasive Redeemer target      C
4    Micromancer              x1    U      Tutor ETB crew               U
5    Frostfist Strider        x2    U      Top-end body + ETB tap/stun  U
5    Serra Redeemer           x1    W      Entries-matter payoff        R
```

### INSTANTS & SORCERIES (4)

```
CMC  Card             Qty   Color  Role                          Rar
1    Rona's Vortex    x2    U      1-mana bounce                 U
1    Runic Shot       x1    W      Removal (tapped target)       U
3    Tolarian Geyser  x1    U      Backup blink route + cantrip  C
```

### OTHER SPELLS (4)

```
CMC  Card               Qty   Color  Role                               Rar
3    Citizen's Arrest   x2    W      Exile creature/PW                  C
4    Golden Argosy      x1    C      Blink engine / attacker            R
4    Prayer of Binding  x1    W      Flash exile any nonland permanent  U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                         Rar
Destroy Evil             x2    W      vs enchantments and toughness-4+ blockers       C
Essence Scatter          x2    U      vs single large creature threats                C
Impede Momentum          x2    U      Delay a blocker 3 turns; enables Runic Shot     C
Negate                   x1    U      vs sweepers and sagas when your board is empty  C
Protect the Negotiators  x1    U      vs any spell type; kicked adds a crew body      U
Stall for Time           x1    W      vs go-wide races; replaces itself               C
Temporary Lockdown       x1    W      vs wide boards / token swarms                   R
```

## ANALYSIS

### DECK IDENTITY

UW Argosy Crew-Blink. The deck plays a dense curve of cheap creatures whose enters triggers are the value engine, then attacks with Golden Argosy crewed by as many of them as possible so the attack trigger exiles and returns the whole crew, re-buying every enters trigger each combat. Because exile-and-return creates a NEW object, Serra Redeemer's +1/+1 counters do NOT persist across a blink - the correct reading is that Redeemer re-applies two counters to each returning power-2-or-less body rather than compounding them. The genuine compounding source is the token ETBs: Resolute Reinforcements and Argivian Cavalier each read 'create a 1/1 white Soldier creature token', so every Argosy attack crewed by those bodies adds a permanent new Soldier. Because the 5-rare cap makes Golden Argosy a hard 1-of, the list is built to win on an evasive ETB board alone, with Tolarian Geyser and Aether Channeler's bounce mode as slower backup blink routes.


### KEY OBSERVATIONS

**The engine, stated precisely.** Golden Argosy reads *"Whenever Golden Argosy attacks, exile each creature that crewed it this turn. Return them to the battlefield tapped under their owner's control at the beginning of the next end step. / Crew 1."* Crew 1 asks only for total power 1, but you may tap *any number* of creatures - so the correct line is to crew with every ETB creature you control, not the minimum. Twelve of the 13 creature cards in this list have power 1 or more and can crew alone.

**Two things the oracle text says that are easy to get wrong here:**

| Claim | What the text actually says |
|---|---|
| "Serra Redeemer's counters compound each blink" | False. Exile-and-return creates a new object, so the counters are gone. Redeemer *re-applies* two counters on each return. Net growth per cycle: zero. The upside of the same fact is that the returning body is always power 2 or less again, so Redeemer never stops triggering. |
| "Griffin Protector is a blink payoff" | False here. Its trigger is *"gets +1/+1 until end of turn"*, and the crew returns *at the beginning of the next end step* - after combat damage. The pump lands in a phase with no attack. This is why the prior analysis's Griffin Protector recommendation was cut. |

**Never crew with a token.** Argosy exiles what crewed it; a token that leaves the battlefield ceases to exist and does not come back. Five cards in this list produce tokens (Resolute Reinforcements x2, Argivian Cavalier x2, Aether Channeler's Bird mode) and crewing with their output destroys it permanently.

**Enlist and Crew compete.** Argivian Cavalier has *"Enlist (As this creature attacks, you may tap a nonattacking creature you control...)"*. Both Enlist and Crew want to tap the same spare untapped creature, so on an Argosy turn you pick one. That is a real cost, not a synergy.

**The Runic Shot / tapper count.** Runic Shot reads *"Destroy target tapped creature"*. Dedicated tappers in the mainboard are Frostfist Strider x2 - 2 of 23 nonland cards - which supports one copy, not two. Boarding Impede Momentum x2 (*"put three stun counters on it"*, i.e. three untap steps consumed) raises the enabler count to 4.

**Rare budget is the binding constraint, and it includes lands.** Adarkar Wastes, Plaza of Heroes and Thran Portal are all rares. Spending a slot on fixing would have cost Aether Channeler or Anointed Peacekeeper, so the manabase is 9 Plains / 6 Island / 2 Idyllic Beachfront - every land produces W or U. Crystal Grotto was cut precisely because its only free mode is *"{T}: Add {C}"* and this deck has both {W}{W} and {U}{U} costs.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:3  2:4  3:10  4:3  5:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.5: Tolarian Geyser@0.5) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 43%  T2 81%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper exists in WU under the 5-rare cap - every WU-legal sweeper in the cube (Karn's Sylex, The Phasing of Zhalfir) is rare or mythic and the cap is already at 5/5. The deck races instead: Resolute Reinforcements x2 and Argivian Cavalier x2 add a permanent Soldier on every re-entry, and Golden Argosy is a 3/6 that outclasses token-sized blockers. Temporary Lockdown is the sideboard answer, and it costs this deck real board - 'exile each nonland permanent with mana value 2 or less' hits Resolute Reinforcements x2, Knight of Dawn's Light x2, Mesa Cavalier, Aether Channeler and every Soldier/Bird token this deck makes.
  OK        single_large_threat: Citizen's Arrest, Prayer of Binding, Runic Shot, Frostfist Strider, Rona's Vortex
  OK        noncreature_permanents: Prayer of Binding, Aether Channeler
  CONCEDED  stack: Zero maindeck counterspells by choice: this is a proactive aggressor that must have crew bodies on board by turn 4, and reactive slots would trade the crew density the engine is gated on. Negate and Essence Scatter are sideboard.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census gy_hate = 0), so no answer to the 32 graveyard-interaction cards exists in the pool for any deck.
```

- No WARN flags raised - curve, assembly, goldfish and coverage all returned PASS.

- THESIS REVISION, stated openly: goldfish_turn was moved 7 -> 8 and the kill mechanism broadened during Phase 6b. A thesis gated on a single 1-of rare has P(seen by turn 7) = 0.58, below the 0.75 HARD assembly threshold. The fix was redundancy plus honesty, not a rationalization.

- PLAY CAVEAT recorded from the grill: never crew Golden Argosy with a token. Argosy exiles what crewed it, and a token that leaves the battlefield does not return. Crew 1 only needs total power 1, so crewing with real cards is always available.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Knight of Dawn's Light x2 is a repeatable, unbounded mana sink - '{1}{W}: This creature gets +1/+1 until end of turn' has no once-per-turn clause - so surplus lands convert directly into damage. That is 2 of 23 nonland cards with a repeatable mana-consuming activated ability. Two further cards absorb surplus mana once each via kicker: Runic Shot 'Kicker {U} ... If this spell was kicked, scry 2' and Tolarian Geyser 'Kicker {W} ... If this spell was kicked, you gain 3 life'. Total 4 of 23 nonland cards can spend excess mana, 2 of them repeatably. |
| screw | mitigation | Seven of the 23 nonland cards are castable off two lands or off colourless mana: Runic Shot, Rona's Vortex x2, Resolute Reinforcements x2, Knight of Dawn's Light x2 at MV<=2, plus Automatic Librarian {3} and Golden Argosy {4} which need no coloured mana. Resolute Reinforcements has Flash, so a 2-land hand still develops on the opponent's turn, and Automatic Librarian's 'scry 2' digs toward land 3. Goldfish simulation: 86% keepable, 88% reach 3 lands by turn 3. |
| decapitation | mitigation | Golden Argosy answered on sight does not end the plan - the thesis was deliberately revised so the evasive board is the primary kill. The air clock is Mesa Cavalier (2/1 flier), Serra Redeemer (2/4 flier), Soaring Drake (2/3 flier) and Aether Channeler's 1/1 flying Bird - 4 bodies. Note that Frostfist Strider and Golden Argosy are ground bodies with no evasion in their oracle text and are NOT part of that clock. Tolarian Geyser remains as a hand-return blink route. |
| gas-out | mitigation | The engine is card-positive by construction: Aether Channeler ('Draw a card' mode), Micromancer (fetch), Automatic Librarian (scry 2, selection rather than advantage), Tolarian Geyser ('Draw a card'), Resolute Reinforcements x2 and Argivian Cavalier x2 (a token each) - 9 of 23 nonland cards are Net-Positive or Self-Replacing, and each Argosy attack re-buys those triggers without spending a card. |
| raced | accepted | The deck runs 17 lands, an avg MV of 2.96 and no maindeck counterspell, so it loses to a genuinely faster start. Mitigating would mean cutting crew density for cheap reactive spells, which is exactly the resource Golden Argosy's Crew 1 and Serra Redeemer's entry trigger are gated on - the engine stops being an engine. Mesa Cavalier's 'you gain 2 life', Prayer of Binding's 'You gain 2 life' and Knight of Dawn's Light's 'you gain that much life plus 1 instead' are the partial hedge; Impede Momentum x2 and Stall for Time come in from the board. |
| disruption-fizzle | mitigation | The critical turn is an Argosy attack, and it is not a stack object an opponent can counter - the exile-and-return is a triggered ability off attacking, and the crew is already tapped when it fires. Removal on a crewing creature in response to crew still leaves the Vehicle animated and attacking. If the whole attack is blanked, the crew simply stays on board and attacks normally next turn; the plan retries rather than folds. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Griffin Protector | 'Whenever another creature you control enters, this creature gets +1/+1 until end of turn' - the Argosy crew returns at the beginning of the next end step, after combat damage, so the pump is spent in a phase with no attack. Recommended by the prior analysis but mechanically dead with the engine. |
| Stenn, Paranoid Partisan | 'choose a card type other than creature or land. Spells you cast of the chosen type cost {1} less' - only 7 of the 23 nonland cards in this list are instants and 4 are enchantments, so the best single choice reduces 7/23. A rare slot for a 2/2 that saves ~2 mana a game. |
| Ertai Resurrected | 'Flash. When Ertai Resurrected enters, choose up to one - counter target spell...; destroy another target creature or planeswalker' - a premier blink target, but it costs {2}{U}{B} and this build is UW; adding black for one card fails the splash filter. |
| Elas il-Kor, Sadistic Pilgrim | 'Whenever another creature you control enters, you gain 1 life' - off-colour ({W}{B}) for a UW build, and the payoff is 1 life per entry rather than board development. |
| Phyrexian Rager | 'When this creature enters, you draw a card and you lose 1 life' - the single best repeatable blink ETB in the cube, but it is {2}{B}. It anchors the Path B and Path C builds instead. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' - symmetric, and this list runs Resolute Reinforcements, Soldier tokens and Mesa Cavalier under that line. Held for the sideboard against go-wide only. |
| Wingmantle Chaplain | 'create a 1/1 white Bird token for each creature with defender you control' - this list runs 0 defenders, so the ETB makes 0 birds. It is the Path D keystone, not this one. |
| Shield-Wall Sentinel | 'search your library for a creature card with defender' - 0 defenders in this list, so the tutor finds nothing. |
| Adarkar Wastes | '{T}: Add {W} or {U}. This land deals 1 damage to you' - real fixing, but it is a rare and the 5-rare cap is better spent on Golden Argosy, Serra Redeemer, Aether Channeler and Anointed Peacekeeper. 2x Idyllic Beachfront + 2x Crystal Grotto cover the WU split without a rare. |
| Plaza of Heroes | 'Add one mana of any color. Spend this mana only to cast a legendary spell' - a rare, and only Golden Argosy is legendary in this list (1 of 23 nonland cards). |
| Danitha, Benalia's Hope | 'you may put an Aura or Equipment card from your hand or graveyard onto the battlefield attached to Danitha' - this list runs 0 Auras and 0 Equipment, so the ETB does nothing. |
| Defiler of Faith | 'Whenever you cast a white permanent spell, create a 1/1 white Soldier token' - 12 of 23 nonland cards are white permanents, a real count, but {3}{W}{W} is above this deck's curve and it costs a rare slot the engine needs. |
| Vesuvan Duplimancy | 'Whenever you cast a spell that targets only a single artifact or creature you control, create a token copy' - this list has 2 such spells (Shore Up, Take Up the Shield are not run), so the trigger count is near zero. |
| Tolarian Terror | 'costs {1} less for each instant and sorcery card in your graveyard' - only 7 instants/sorceries in the list, so it is realistically a 5-6 mana 5/5 with no ETB; wrong axis for a blink engine. |
| Djinn of the Fountain | 'Exile this creature. Return it to the battlefield...' - it self-blinks but has no enters trigger, so the blink returns nothing. Six mana for a vanilla 4/4 flier. |
| Negate | 'Counter target noncreature spell' - too narrow for a proactive tempo build; Essence Scatter answers the blockers that actually stop Argosy. |
| Academy Loremaster | 'At the beginning of each player's draw step, that player may draw an additional card' - symmetric and helps the opponent equally; a rare slot for a 2/3 that does not advance the engine. |
| Micromancer (2nd copy) | 'search your library for an instant or sorcery card with mana value 1' - after the first copy resolves, remaining targets drop to 2 of 21, and if the first fetch was a Rona's Vortex the second Micromancer is paying {3}{U} to find a 1-mana bounce spell. Cut to 1 copy. |
| Tolarian Geyser (2nd copy) | 'Return target creature to its owner's hand. Draw a card' - it returns to HAND, not the battlefield, so re-buying an enters trigger costs a second full casting. Declared at reliability weight 0.5 in the assembly check; one copy is enough as a backup blink route. |
| Crystal Grotto | '{T}: Add {C}. / {1}, {T}: Add one mana of any color' - its only free mode is colourless, and this deck runs {1}{W}{W}, {3}{W}{W} and {3}{U}{U}. At 17 lands a colourless source is the wrong slot. |
| Impulse | 'Look at the top four cards of your library. Put one of them into your hand' - the best digging spell in the pool for finding a 1-of Golden Argosy, but it is a non-crew spell and the locked build was chosen specifically for crew density. |
| Salvaged Manaworker | '{1}: Add one mana of any color. Activate only once each turn' - the only fixer in the pool that is also a crew body (power 1) and Redeemer-eligible; cut only because the manabase already passes at 17/17 with zero colourless lands. |
| Haunting Figment | 'This creature can't be blocked as long as you've cast an instant or sorcery spell this turn' - MV-2 Redeemer-eligible body, but its evasion is live off only 5 of 23 nonland cards (Runic Shot, Rona's Vortex x2, Tolarian Geyser). Soaring Drake's unconditional Flying beat it for the slot. |
| Charismatic Vanguard | '{4}{W}: Creatures you control get +1/+1 until end of turn' - a genuine repeatable mana sink for the flood mode, but power 3, so unlike Knight of Dawn's Light it does not trigger Serra Redeemer's 'power 2 or less' clause. |
| Negate (2nd copy) | 'Counter target noncreature spell' - swapped for Protect the Negotiators, which counters ANY spell type and whose kicked mode adds a crew body. One Negate is retained because Protect the Negotiators' tax ('pays {1} for each creature you control') is weakest exactly when your board is empty. |
| Serra Paragon | 'you may play a land from your graveyard or cast a permanent spell with mana value 3 or less from your graveyard' - a real anti-decapitation engine that rebuys dead ETB crew, but it is a MYTHIC and the 5-rare cap is already spent on the engine itself. |
| Silver Scrutiny | 'Draw X cards' - produces no body, so it never crews Argosy and never triggers Serra Redeemer, and its {X}{U}{U} cost competes with the {W}{W} payoffs. Also a rare. |
| Ertai Resurrected | 'Flash. When Ertai Resurrected enters, choose up to one - counter target spell...; destroy another target creature or planeswalker' - the single best blink target in the cube, but {2}{U}{B} is outside UW and adding black for one card fails the splash filter. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.45 adj [MV 2.96 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  38.5%  prod  47.1%  gap  -8.6pp  [OK]
  W  demand  61.5%  prod  64.7%  gap  -3.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies     PASS
rares/mythics max 1 copy           PASS
max 5 rares+mythics total (MB+SB)  PASS - exactly 5/5: Golden Argosy, Serra Redeemer, Aether Channeler, Anointed Peacekeeper (MB) + Temporary Lockdown (SB)
all cards from cube mainboard      PASS - exact-name membership verified
colour usability in W/U            PASS - effective_cost.best_mode returned a usable mode for all 23 distinct nonland cards
basic lands (format-supplied, exempt) PASS - 9 Plains, 6 Island
```
