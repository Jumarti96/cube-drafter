---
deck_name: "rg-sapling-nursery-landfall"
cube_id: "ecl"
cube_slug: "ecl"
colors: "RG"
format: "40-card"
built_at: "2026-08-10T21:21:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  12x Forest
  2x Mountain
  2x Evolving Wilds   fixing; TWO landfall triggers per card
  2x Wooded Ridgeline   RG dual; ALSO a Forest for Affinity
```

### CREATURES (11)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  2  Bristlebane Battler        x1    G      Threat — 6/6 trample ward {2} that permanently shed… R
  2  Great Forest Druid         x1    G      Engine/Infra — a Treefolk that fixes red off a Fore… C
  3  Crossroads Watcher         x2    G      Threat — 3/3 trample that grows with every token en… C
  3  Gangly Stompling           x1    RG     Threat — 4/2 trample; castable off either colour     C
  3  Mutable Explorer           x1    G      Threat/Engine — its Mutavault token is a LAND enter… R
  4  Bristlebane Outrider       x2    G      Threat — 3/5 evasive; 5/5 on any turn a creature en… U
  6  Prismabasher               x2    G      Threat — 6/6 trample + team pump for the alpha stri… U
  7  Aurora Awakener            x1    G      Threat — 7/7 trample; puts revealed permanents (lan… M
```
### INSTANTS & SORCERIES (7)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  2  Sear                       x2    R      Interaction — removal                                U
  3  Tend the Sprigs            x2    G      Engine/Infra — a land onto the battlefield off-drop… C
  3  Unforgiving Aim            x1    G      Interaction — modal answer (flyers / enchantments /… C
  4  Feed the Flames            x2    R      Interaction — 5 damage + exile                       C
```
### OTHER SPELLS (4)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  3  Firdoch Core               x1    C      Engine/Infra — any-colour fixer, a Treefolk via cha… C
  4  Prismatic Undercurrents    x2    G      Engine/Infra — an extra land drop every turn + basi… U
  8  Sapling Nursery            x1    G      Engine/Payoff — landfall makes a 3/4 Treefolk per l… R
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                  Rar
Assert Perfection           x2    G      One-way fight removal — vs. creature decks — a 3/4 Treefolk kills a… C
Giantfall                   x1    R      Artifact removal / one-way fight — vs. the cube's 11 artifacts; the… U
Chomping Changeling         x2    G      Artifact/enchantment answer on a body; also a Treefolk via changeli… U
Unforgiving Aim             x1    G      Second modal answer — vs. the cube's 41 evasive cards or enchantmen… C
Luminollusk                 x2    G      Deathtouch blocker + lifegain — vs. fast aggro, where the turn-7 go… U
Rooftop Percher             x2    C      Graveyard hate + flying blocker — vs. graveyard decks (39 GY cards … C
```

## ANALYSIS

### DECK IDENTITY

RG Sapling Nursery — landfall Treefolk midrange. The deck turns lands entering the battlefield into 3/4 reach bodies. Sapling Nursery's Landfall trigger fires on ANY land entering, so Evolving Wilds is worth two triggers per card, Tend the Sprigs puts a land in outside the drop, Mutable Explorer's Mutavault token is a land, and Prismatic Undercurrents grants an extra drop every turn. Its Affinity for Forests is served by a manabase where 14 of 18 lands carry the Forest type - including Wooded Ridgeline, whose type line 'Land - Mountain Forest' makes it a Forest that also produces red. Crossroads Watcher grows with every token, Bristlebane Outrider becomes an unblockable-by-small-creatures 5/5, and Prismabasher converts the accumulated board into a lethal alpha strike. Because the payoff is a singleton by rarity cap, the list is deliberately built to be a functional green midrange deck without it.

### THE MECHANIC, READ EXACTLY

**Sapling Nursery**: *"Affinity for Forests (This spell costs {1} less to cast for each Forest you control.) / Landfall — Whenever a land you control enters, create a 3/4 green Treefolk creature token with reach. / {1}{G}, Exile this enchantment: Treefolk and Forests you control gain indestructible until end of turn."*

Three readings drove the build:

1. **Landfall triggers on ANY land entering** — not just your land drop. A fetched basic counts. A token land counts. This is why **Evolving Wilds is worth two triggers per card**: once when the Wilds itself enters, once when the basic it fetches enters.
2. **Affinity counts FORESTS, not green lands.** A Mountain does nothing for it. **Wooded Ridgeline's type line is `Land — Mountain Forest`, so it IS a Forest** while still producing red — the single most efficient land in this deck. The manabase is **14 of 18 lands Forest-typed** (12 Forest + 2 Wooded Ridgeline), so at 5 Forests on board Sapling Nursery costs {1}{G}{G} and at 6 it costs {G}{G}.
3. **"Put it onto the battlefield" ≠ "put it into your hand."** This one cut cards. Changeling Wayfinder and Kulrath Zealot's basic landcycling both search a basic *to hand* — **neither is a landfall trigger.** Prismatic Undercurrents' Vivid clause is also to-hand; its value is entirely in the *second* line, *"You may play an additional land on each of your turns."*

### THE LANDFALL LEDGER

| Source | Triggers | Mechanism |
|---|---|---|
| Normal land drop | 1/turn | — |
| **Prismatic Undercurrents** ×2 | **+1/turn, recurring** | *"You may play an additional land on each of your turns"* |
| **Evolving Wilds** ×2 | **+1 each** | the Wilds enters, then the fetched basic enters |
| **Tend the Sprigs** ×2 | **+1 each** | *"put it onto the battlefield tapped"* — outside the drop |
| **Mutable Explorer** ×1 | **+1** | *"create a tapped Mutavault token. (It's a land…)"* |
| **Aurora Awakener** ×1 | variable | *"Put any number of those permanent cards onto the battlefield"* — lands included |

That is **5 guaranteed extra triggers plus a recurring one**, on top of 18 land drops.

### THE SINGLETON PROBLEM, STATED UP FRONT

Sapling Nursery is a **rare, so exactly one copy is legal**, and nothing else in the pool has a landfall token trigger. Roughly **two games in three never see it by turn 7.** The shape judge picked this build specifically on that test — of the three sketches, it is the one that still fields a clock without the enchantment. What remains when the Nursery never shows up:

- **Tend the Sprigs ×2** makes its own 3/4 Treefolk with reach at seven lands-and/or-Treefolk — reachable by turn 5 with 5 lands + 2 Treefolk (Great Forest Druid and Firdoch Core, which is a Treefolk by changeling).
- **Prismabasher ×2** is a 6/6 trample that pumps.
- **Bristlebane Battler** is a two-mana 6/6 trample ward {2} once five creatures have entered; **Bristlebane Outrider ×2** is a 3/5 that becomes a 5/5 *and cannot be blocked by anything with power 2 or less*; **Gangly Stompling** is a 4/2 trample for three.
- **Aurora Awakener** is a 7/7 trample.

So the median game is a green midrange deck with 4 removal spells. The Nursery games are the ceiling.

### WHY BRISTLEBANE OUTRIDER SURVIVED THE JUDGE'S FLAG

The shape judge flagged it: *"the +2/+0 requires 'another creature entered the battlefield under your control this turn,' which is exactly the condition Nursery supplies."* Checking the text, that overstates the dependency — the condition is satisfied by **simply casting any creature that turn**, and this list runs **11 creature cards of 22 nonland slots** plus every Treefolk token and the Unforgiving Aim Elf. It is kept, with the count stated rather than the adjective.

### CROSSROADS WATCHER IS THE TOKEN PAYOFF

*"Whenever another creature you control enters, this creature gets +1/+0 until end of turn."* On a Nursery turn with an extra land drop, two Treefolk enter and it swings as a **5/3 trample**. It is the only card in these colours that reads the token board directly.

### THE COLOUR DECISION I WANT TO FLAG

**Mono-green is a real alternative and it is better for the payoff.** Affinity counts Forests; a mono-green build at 17 Forests casts Sapling Nursery for {G}{G} nearly always, against 14 Forest-typed lands here. The 2 Mountains and 2 Evolving Wilds are the price of **Sear ×2 and Feed the Flames ×2** — which are this deck's *only* answers to a resolved creature, because green's removal in this pool is fight-based (Assert Perfection, Pitiless Fists) and needs a board you may not have when you are behind. I kept RG because the locked pipeline identity is RG and because trading all four removal spells for 2–4 Forests is the worse deal. If you want to iterate, that is the first fork to try.

### RARE BUDGET

4 of 5 used after the grill (Sapling Nursery, Mutable Explorer, Bristlebane Battler, Aurora Awakener). The idle slots' best claimant is **Formidable Speaker** ({2}{G} rare) — *"you may discard a card. If you do, search your library for a creature card"* — but note it cannot find Sapling Nursery, which is an **Enchantment**. Nothing in the pool tutors for the payoff, which is why the singleton problem is answered with redundancy of *effect* (Tend the Sprigs, Mutable Explorer) rather than redundancy of *card*.

### WHAT THE GRILL CHANGED

Three things, all of them corrections to me rather than to the archetype.

1. **Bristlebane Battler was wrongly absent.** {1}{G} rare, 6/6 trample ward {2}: *"This creature enters with five -1/-1 counters on it. Whenever another creature you control enters while this creature has a -1/-1 counter on it, remove a -1/-1 counter from this creature."* That is the **same trigger** Crossroads Watcher occupies two slots for — but the growth is **permanent**, not until end of turn. With 11 creature cards, two Tend the Sprigs tokens and one 3/4 Treefolk per land under the Nursery, five creature-enter events is a normal game. It also fills the deck's empty 2-mana threat slot. In, over a Gangly Stompling.

2. **My `flood` mitigation cited a card that does not do what I said.** I wrote that Great Forest Druid *"turns surplus lands into red mana."* Its entire oracle text is *"{T}: Add one mana of any color"* — it taps **itself** and consumes no land. Stripped of that, the deck had **exactly one repeatable mana sink of 22 nonland cards** and `cantrip_count = 0`. **Firdoch Core** (*"{4}: This artifact becomes a 4/4 artifact creature until end of turn"*) replaced a Great Forest Druid: same any-colour mana, still a Treefolk via changeling so Tend the Sprigs' count survives, plus the sink.

3. **`raced` was an `accepted` resting on a false premise.** I claimed mitigating meant cutting the top end. It did not — Bristlebane Battler comes out of the redundant *middle* of the curve and raises the ceiling. It is now a mitigation.

One number was also inflated: I had written "8 red sources." The audit says **4 red-producing lands**. Evolving Wilds are virtual copies of the same 2 Mountains — and every Wilds that fetches a Mountain produces a land that is **not** a Forest, working against the Affinity census the deck is built on.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  2:4  3:8  4:6  6:2  7:1  8:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.2: Crossroads Watcher@0.9, Crossroads Watcher@0.9, Bristlebane Outrider@0.9, Bristlebane Outrider@0.9, Aurora Awakener@0.7, Bristlebane Battler@0.9) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.3: Mutable Explorer@0.9, Great Forest Druid@0.7, Firdoch Core@0.7) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 54%  T3 95%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in these colours in this pool (the cube has 2 sweepers total, in R and UR). The answer to a wide board here is a wider board of bigger bodies: 3/4 Treefolk tokens with reach block almost everything profitably, and Prismabasher's '+X/+X to up to X creatures' plus trample on Prismabasher, Gangly Stompling and Aurora Awakener makes chump blocks non-lethal.
  OK        single_large_threat: Feed the Flames, Sear
  OK        noncreature_permanents: Unforgiving Aim
  CONCEDED  stack: Neither red nor green in this pool contains a counterspell; the deck interacts on the battlefield and accepts that its spells resolve or do not.
  CONCEDED  graveyard: The cube census reports 0 dedicated graveyard hate and the RG pool contains none maindeckable; Rooftop Percher ('exile up to two target cards from graveyards') is a colourless answer held in the sideboard because a 5-mana 3/3 competes with the deck's own 5-and-6-drops.
```

- No WARN flags were raised. Curve PASS (midrange), Assembly PASS (payoff p=0.94, enabler p=0.96, both against a 0.75 floor), Goldfish PASS (82% keepable, 92% three lands by turn 3), Coverage PASS. Note for the reader: Sapling Nursery's PRINTED mana value is 8, which pulls the recorded avg MV to 3.77; its Affinity for Forests means it is realistically cast for 2-4 mana at 14 Forest-typed lands. The curve gate reads printed MV and so overstates this deck's top end by one card.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Under Sapling Nursery flood is a FEATURE: every excess land that enters is a 3/4 reach Treefolk, and Prismatic Undercurrents ('You may play an additional land on each of your turns') exists to convert a hand full of lands into board. Corrected after the grill, which caught a false claim that Great Forest Druid 'turns surplus lands into red mana' - its oracle is '{T}: Add one mana of any color', which taps ITSELF and consumes no land. The honest non-Nursery outlet is Firdoch Core ('{4}: This artifact becomes a 4/4 artifact creature until end of turn'), added in the repair as the deck's only repeatable mana sink, plus a top end of Aurora Awakener at 7 and Prismabasher x2 at 6 that uses the mana. Stated plainly: cantrip_count is 0 and there is exactly 1 repeatable sink among the 22 nonland cards. |
| screw | mitigation | 14 of 18 lands are basics and Tend the Sprigs x2 ('Search your library for a basic land card, put it onto the battlefield tapped') plus Evolving Wilds x2 dig for the third and fourth land; Prismatic Undercurrents' Vivid clause puts up to X basics in hand. Great Forest Druid at {1}{G} is a two-mana accelerant. The structural goldfish check measures 82% keepable hands with three lands by turn 3 in 92% of games. |
| decapitation | accepted | Sapling Nursery is a SINGLETON - the rare cap permits one copy, no card in the pool tutors for an Enchantment (Celestial Reunion searches only creature cards), and nothing else in the pool has a landfall token trigger. Mitigating is not available at any price: there is no redundant copy to add. The accepted cost is stated plainly and the build is sized around it - roughly two games in three never see the Nursery by turn 7, so the list is deliberately threat-dense (10 of 22 nonland cards) with Tend the Sprigs x2 making 3/4 Treefolk on their own, Prismabasher x2 as a 6/6, and Aurora Awakener as a 7/7. The redundancy here is of EFFECT, not of card. |
| gas-out | mitigation | Recounted after the grill. NET-POSITIVE: Prismatic Undercurrents x2 ('search your library for up to X basic land cards... put them into your hand') and Aurora Awakener x1 ('Put any number of those permanent cards onto the battlefield') = 3 of 22 nonland cards. SELF-REPLACING: Tend the Sprigs x2 (one card becomes a land plus, at seven lands-and/or-Treefolk, a 3/4 body) = 2 of 22. The previous figure of 5 net-positive conflated the two. X on the Vivid clauses is 2 at this deck's colour floor, not 2-3. Under Sapling Nursery the deck also converts its remaining LAND DRAWS into bodies, which is the only deck in this set for which an empty hand plus a land is still a play. |
| raced | mitigation | Corrected after the grill, which showed the previous 'accepted' rested on a false premise - that mitigating required cutting the top end. Bristlebane Battler ({1}{G}, 'Whenever another creature you control enters while this creature has a -1/-1 counter on it, remove a -1/-1 counter', 6/6 trample ward {2}) is a TWO-MANA threat cut from the redundant middle of the curve, not from the top, and it RAISES the board-accumulation ceiling rather than lowering it. It runs on the deck's most abundant trigger: 11 creature cards of 22 nonland slots, plus every 3/4 Treefolk token and the Unforgiving Aim Elf. Alongside it: Great Forest Druid's 0/4 and Bristlebane Outrider's 3/5 block early, the Treefolk tokens have REACH against the cube's 41 evasive cards, and Luminollusk x2 (deathtouch) plus Assert Perfection x2 (one-way fight for {1}{G}) are in the sideboard for the matchups where the race is the game. |
| disruption-fizzle | mitigation | The critical turn is a Prismabasher alpha strike or a Nursery turn with two land drops. If Prismabasher is answered mid-turn the board it was pumping is still a wall of 3/4 reach tokens; if the Nursery is answered on sight, see decapitation - the deck reverts to green midrange rather than folding, because none of its 11 creature cards or 5 removal spells requires the enchantment. Sapling Nursery's own '{1}{G}, Exile this enchantment: Treefolk and Forests you control gain indestructible until end of turn' is the answer to a sweeper or a removal spell aimed at the token board, at the price of the engine. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| MONO-GREEN as a colour choice | The strongest alternative and worth stating plainly. Affinity for Forests counts FORESTS, so a mono-green build running 17 Forests would cast Sapling Nursery for {G}{G} nearly always, versus 14 Forest-typed lands here. The 2 Mountains and 2 Evolving Wilds are the cost of Sear x2 and Feed the Flames x2 - which are the deck's ONLY answers to a resolved creature, since green's removal in this pool is fight-based and needs a board. RG was retained because the locked pipeline identity is RG and because losing all 4 removal spells is a worse trade than losing 2-4 Forests. |
| Assert Perfection | CUT to make room for the 18th land after land_target moved. 'Target creature you control gets +1/+0; it deals damage equal to its power to up to one target creature an opponent controls' — genuinely good with 3/4 and 6/6 bodies, but it is sorcery-speed and blank on an empty board, and this deck's board is empty exactly when it is behind. |
| Safewright Cavalry | A 4/4 for {3}{G} that 'can't be blocked by more than one creature' - fine stats, but its {5} activated ability targets an Elf and this list contains 0 Elves (the Unforgiving Aim token is the only one, and it is conditional). Bristlebane Outrider's evasion clause is strictly more relevant against a board of small blockers. |
| Moon-Vigil Adherents | 'gets +1/+1 for each creature you control and each creature card in your graveyard' - it scales with the token board, but this deck has no self-mill and the graveyard half is dead; at {2}{G}{G} for a 0/0 base it needs 4+ creatures already out to beat a Gangly Stompling. |
| Mistmeadow Council | 'costs {1} less to cast if you control a Kithkin' - the shape judge flagged this as dead text in another sketch and was right: this list contains 2 Kithkin (Crossroads Watcher, Bristlebane Outrider), so the discount is live only 2 of 22 nonland cards' worth of the time as an opening condition. A 5-mana 4/3 that draws a card is below the curve here. |
| Pummeler for Hire | 'you gain X life, where X is the greatest power among Giants you control' - Giants in this list: Aurora Awakener x1 (and itself). A 1-of-22 denominator for the lifegain clause. |
| Changeling Wayfinder | 'search your library for a basic land card, reveal it, put it into your HAND' - to hand, not onto the battlefield, so it is NOT a landfall trigger. It only fuels a land drop you were likely making anyway; Tend the Sprigs does the real version of this job. |
| Kulrath Zealot | 'Basic landcycling {1}{R}' searches a basic to HAND, again not a landfall trigger. As a 6-mana 6/5 it competes with Aurora Awakener and Prismabasher for the top of a curve that is already at 3.77 avg MV. |
| Shimmerwilds Growth | 'Enchanted land is the chosen color... adds an additional one mana of the chosen color' - real ramp, but it triggers no landfall (the land is already on the battlefield) and its colour-changing clause matters only to Vivid cards, of which this list runs 3 (Prismatic Undercurrents, Prismabasher x2 - Aurora Awakener makes 4). Wrong build; that is deck 1 of this set. |
| Wildvine Pummeler | 'costs {1} less to cast for each color among permanents you control' - a 6/5 reach trample, but this deck manufactures only 2-3 colours (no dedicated colour adders), so it is realistically a {4}{G} or {3}{G} 6/5 competing with Prismabasher's {4}{G}{G} 6/6-plus-pump. |
| Lavaleaper | 'Whenever a player taps a basic land for mana, that player adds one mana of any type that land produced' - symmetric, and its haste clause helps an opponent racing this 7-turn deck. A rare slot for an effect that cuts both ways. |
| Formidable Speaker | Rare. '{1}, {T}: Untap another target permanent' plus a discard-to-tutor ETB - the tutor could find the singleton Sapling Nursery, which is the deck's biggest consistency problem. Excluded because the tutor costs a card (discard) and puts the Nursery in HAND at 8 printed mana; the untap clause does nothing for landfall. |
| Celestial Reunion | Mythic. '{X}{G} ... search your library for a creature card with mana value X or less' - Sapling Nursery is an ENCHANTMENT, so this cannot find the payoff. It could find Aurora Awakener at X=7, i.e. an 8-mana tutor. |
| Selfless Safewright | Rare. 'Other permanents you control of that type gain hexproof and indestructible until end of turn' with convoke - a real protection effect for a token board, but naming Treefolk protects only the tokens and Great Forest Druid, and at {3}{G}{G} it is a 5-mana do-nothing when not under a sweeper (the cube has 2). |
| Spry and Mighty | Rare. 'You draw X cards and the chosen creatures get +X/+X, where X is the difference between the chosen creatures' powers' - this deck's board converges on 3/4 tokens, so the power DIFFERENCE is usually 0-3 and often exactly 0 among tokens. Anti-synergistic with a uniform token board. |
| Pitiless Fists | SIDEBOARD. 'enchanted creature fights up to one target creature' + permanent +2/+2 - excellent with a 3/4 or 6/6, but it is a 4-mana aura that 2-for-1s you against removal in response. Boarded in against creature decks. |
| Prismatic Undercurrents as ramp | Counted honestly: it does NOT put lands onto the battlefield, only into hand ('put them into your hand'). Its value here is the extra land drop clause, which converts a card in hand into a landfall trigger - so it is an enabler of triggers, not an accelerant of mana. |
| Springleaf Drum / Firdoch Core / Foraging Wickermaw | All colourless mana producers. They fix and accelerate but none of them is a land entering the battlefield, so none feeds the payoff; in a 14-Forest deck whose only off-colour need is 4 single-{R} pips, Great Forest Druid covers the same job on a Treefolk body. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.77   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.69 adj [MV 3.77 vs 2.5, 6 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  G  demand  82.6%  prod  77.8%  gap  +4.8pp  [OK]
  R  demand  17.4%  prod  22.2%  gap  -4.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Every card is drawn from the ecl cube mainboard as loaded into working_pool.json - validator check 2 (exact-name membership) PASS.
[PASS] Commons/uncommons capped at 2 copies, rares/mythics at 1 - validator check 3 PASS.
[PASS] Rare/mythic total across mainboard + sideboard: 4 (Sapling Nursery rare, Mutable Explorer rare, Bristlebane Battler rare, Aurora Awakener mythic) against a cap of 5. One slot deliberately unused - and notably, no available rare would fix this deck's real problem, because nothing in the pool tutors for an Enchantment.
[PASS] Basic lands (Forest x12, Mountain x2) are format-supplied and exempt from copy limits.
[PASS] No splash: splash_colors = [] and no card in the list has a colour identity outside {R, G} - validator checks 4 and 5 PASS.
```
