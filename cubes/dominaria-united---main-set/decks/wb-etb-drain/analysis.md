---
deck_name: "wb-etb-drain"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-18T20:29:06Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x10 Swamp                    Basic
x5  Plains                   Basic
x2  Sunlit Marsh             WB dual, enters tapped
```

### CREATURES (16)

```
CMC  Card                           Qty   Color  Role                                                    Rar
1    Cult Conscript                 x2    B      Fodder - self-recurring body                            U
2    Blight Pile                    x2    B      Payoff - Elas-independent drain, scales off defenders   U
2    Elas il-Kor, Sadistic Pilgrim  x2    BW     Payoff - the drain itself                               U
2    Resolute Reinforcements        x2    W      Fodder - two bodies, flash                              U
3    Braids, Arisen Nightmare       x1    B      Outlet - free end-step sac that also drains 2           R
3    Gibbering Barricade            x2    B      Outlet - sac for a card; also a defender                C
4    Phyrexian Warhorse             x2    B      Outlet - {1} per sac, no tap                            C
4    Sheoldred, the Apocalypse      x1    B      Payoff - 2 per opposing draw, no death or mana needed   M
4    Wingmantle Chaplain            x2    W      Fodder + Blight Pile scaler + best Argosy blink target  U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card            Qty   Color  Role                                                Rar
1    Bone Splinters  x2    B      Interaction - removal that is also a death trigger  C
1    Cut Down        x2    B      Interaction - 1-mana removal                        U
4    Captain's Call  x2    W      Fodder - three bodies per card                      C
```

### OTHER SPELLS (1)

```
CMC  Card           Qty   Color  Role                                          Rar
4    Golden Argosy  x1    C      Blink - re-buys token ETBs into fresh fodder  R
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                 Rar
Destroy Evil             x1    W      vs enchantments and toughness-4+ blockers                               C
Knight of Dusk's Shadow  x2    B      vs the cube's 22-card lifegain class - shuts it off outright            U
Pilfer                   x2    B      vs artifacts/enchantments - hand disruption, taken BEFORE they resolve  C
Citizen's Arrest         x2    W      vs single large threats - unconditional exile                           C
Extinguish the Light     x2    B      vs planeswalkers and larger creatures                                   C
Prayer of Binding        x1    W      the only post-resolution answer to any nonland permanent                U
```

## ANALYSIS

### DECK IDENTITY

WB ETB Drain. Elas il-Kor, Sadistic Pilgrim reads 'Whenever another creature you control enters, you gain 1 life. Whenever another creature you control dies, each opponent loses 1 life.' The deck floods the board with cheap multi-body token-makers and converts them into damage through repeatable sacrifice outlets. Golden Argosy is the blink component: exiling and returning Resolute Reinforcements and Wingmantle Chaplain manufactures brand-new tokens every combat, which are then fed to the outlets. Blight Pile and Sheoldred, the Apocalypse are Elas-independent drain engines. STATED HONESTLY: the uninteractive drain half of the clock delivers a median of about 12 by turn 10; the remaining damage comes from the leftover bodies the deck never got around to sacrificing. This is not a pure no-combat kill.


### KEY OBSERVATIONS

**The oracle detail the whole deck turns on: Elas il-Kor drains on DEATH, not on entry.** *"Whenever another creature you control **enters**, you gain 1 life. Whenever another creature you control **dies**, each opponent loses 1 life."* A deck that only makes creatures enter gains life and deals nothing. That is why the list is 8 fodder cards and 7 sacrifice-outlet copies rather than a pile of ETB value creatures.

**What the grill changed, and why it matters.** The first version of this deck claimed ~20 drain by turn 9 off "16 bodies." Both grill agents independently caught that 16 is a **deck-wide** total while the assembly gate sees only 16 of 40 cards — so the real expectation was ~6 bodies drawn and a median drain of 12-14. The fix was two cards and one honest restatement:

| Repair | Oracle grounds |
|---|---|
| +Sheoldred, the Apocalypse | *"Whenever an opponent draws a card, they lose 2 life"* — drain with no death, no activation and no mana. Verified in the approval round to contribute a median 8 drain by turn 10 on its own when it resolves. |
| +Wingmantle Chaplain x2 | *"create a 1/1 white Bird creature token with flying for each creature with defender you control"* — fodder, a Blight Pile scaler (X ceiling 4 to 6), and the best Golden Argosy blink target in the deck since re-entering remakes the whole Bird batch. |
| goldfish_turn 9 to 10 | The drain half is ~12 by turn 10; leftover unsacrificed bodies finish it. Stated rather than hidden. |

**Golden Argosy earns its slot here in a non-obvious way.** The shape judge objected that Argosy produces *enters* triggers, which under Elas only gain **you** life — no drain. That is correct in isolation and wrong for this list: 4 of 23 nonland cards read *"create a 1/1 white Soldier creature token"* or *"create a 1/1 white Bird creature token"* on entry. Argosy returning those bodies **manufactures brand-new tokens each combat**, and those tokens are exactly what the outlets convert into drains. It feeds the kill one step removed.

**Never crew Argosy with a token.** It exiles what crewed it, and a token that leaves the battlefield ceases to exist. Cult Conscript also *"enters tapped"* and cannot crew the turn it lands.

**Blight Pile is the quiet engine.** *"{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control."* Defenders in this list: Blight Pile x2, Gibbering Barricade x2, Wingmantle Chaplain x2 = **6 of 23 nonland cards**. With three defenders out, one activation is 3 damage a turn that no blocker interacts with.

**A sweeper is a damage spell pointed at its controller.** Phyrexian Warhorse's *"{1}, Sacrifice another creature"* has no timing restriction — with a sweeper on the stack you convert the board into Elas triggers first. The honest constraint: one body per {1} of open mana.

**Where this deck actually loses.** It runs four interaction spells and needs ~20 points. Against a fast evasive clock it does not get there. Its non-combat drain is the reliable half; the rest comes from 1/1s that a single good blocker taxes heavily.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:6  2:6  3:3  4:8
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Blight Pile@0.7, Blight Pile@0.7) → p=0.86 (need ≥ 0.75)
  PASS  outlet: 7 copies (effective 5.8: Gibbering Barricade@0.6, Gibbering Barricade@0.6, Braids, Arisen Nightmare@0.6) → p=0.93 (need ≥ 0.75)
  PASS  fodder: 8 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 73%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck IS the wide board - it runs 5 token-making cards producing 2-3 bodies each. Every sweeper legal in WB (Drag to the Bottom, Temporary Lockdown, Karn's Sylex) is rare or mythic AND symmetric, and each would exile or kill more of this deck's permanents than the opponent's. Mitigating would destroy the fodder base the drain is built on. Against an opposing wide board the deck races on drain rather than trading, and Bone Splinters x2 plus Cut Down x2 answer the single best blocker.
  OK        single_large_threat: Cut Down, Bone Splinters, Elas il-Kor, Sadistic Pilgrim
  CONCEDED  noncreature_permanents: Zero maindeck answers to a resolved artifact or enchantment. Every removal spell in the list reads creature-only: Cut Down 'Destroy target creature with total power and toughness 5 or less' and Bone Splinters 'Destroy target creature'. White does have answers in this pool - Destroy Evil ('Destroy target enchantment') and Prayer of Binding ('exile up to one target nonland permanent') - but maindecking them costs fodder or outlet slots the turn-9 drain clock cannot spare. Both are in the sideboard, 3 cards total.
  CONCEDED  stack: No counterspells exist in W or B in this pool at all - the dossier's colour breakdown puts every counter effect in U. This is a pool limit rather than a build choice. The deck answers threats after they resolve, or pre-emptively from hand with sideboard Pilfer x2.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census gy_hate = 0), so no answer exists in the pool for any deck. Note this deck is itself a graveyard user - Cult Conscript returns from the yard - so the absence is favourable here.
```

- No WARN flags in the final report - curve, assembly, goldfish and coverage all PASS.

- HARD ASSEMBLY FAILURE REPAIRED (round 1), disclosed: a first pass ran Elas il-Kor x2 + Ratadrabik as the whole payoff role and FAILED the gate at p=0.64 against a 0.75 threshold. Functional copies were added rather than moving the thesis turn: Blight Pile x2, an independent drain engine.

- THESIS TURN REVISED 9 -> 10 (round 2), disclosed: both grill agents independently computed that the non-combat drain reaches only ~12-15 by turn 9, not 20. The 16-body figure in the original derivation was a DECK-WIDE total measured against a 16-cards-seen denominator - a real arithmetic error. The repair was Sheoldred, the Apocalypse (drain with no death, no activation, no mana) plus Wingmantle Chaplain x2, AND an honest restatement of the kill: the drain half is ~12 by turn 10 and leftover bodies finish it.

- BAND DEVIATIONS, both stated: Threats/Payoffs 21.7% (band 5-15%) and Engine 60.9% (band 40-50%). Cause: this combo needs THREE simultaneous role classes - payoff, outlet, and fodder - and roughly 20 deaths means the fodder count cannot be compressed. The combo bands assume a two-piece combo.

- PLAY CAVEAT from the grill: never crew Golden Argosy with a token. Argosy exiles what crewed it and a token that leaves the battlefield does not return. Cult Conscript also enters tapped, so it cannot crew the turn it lands.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Eight of the 23 nonland cards have a repeatable mana-consuming activated ability: Phyrexian Warhorse x2 ('{1}, Sacrifice another creature'), Gibbering Barricade x2 ('{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' - surplus mana into CARDS), Blight Pile x2 ('{2}{B}, {T}: Each opponent loses X life'), and Cult Conscript x2 ('{1}{B}: Return this card from your graveyard to the battlefield'). Surplus lands convert directly into drains. |
| screw | mitigation | Twelve of the 23 nonland cards cost two mana or less (Cult Conscript x2, Bone Splinters x2, Cut Down x2, Elas il-Kor x2, Blight Pile x2, Resolute Reinforcements x2), so a 2-land hand deploys the payoff on curve. Resolute Reinforcements has Flash. Goldfish: 85% keepable, 88% reach three lands by turn 3, 95% have made a play by turn 2. |
| decapitation | mitigation | Elas il-Kor answered on sight does not end the plan. The deck runs TWO copies, and two entirely Elas-independent drain engines: Blight Pile x2 ('{2}{B}, {T}: Each opponent loses X life') needs no death triggers at all, and Sheoldred, the Apocalypse ('Whenever an opponent draws a card, they lose 2 life') needs no board, no activation and no mana after it resolves. |
| gas-out | mitigation | Gibbering Barricade x2 turn each sacrifice into a card, Braids, Arisen Nightmare draws every end step the opponent declines to sacrifice, Sheoldred gains 2 life per card drawn, and Cult Conscript x2 refuel themselves from the graveyard for {1}{B}. Golden Argosy re-buys token-makers without spending a card. 5 of 23 nonland cards are Net-Positive or Self-Replacing, and critically the deck's resource is BODIES rather than cards - a board of tokens keeps draining after the hand is empty. |
| raced | accepted | The deck runs 4 interaction spells and needs roughly 20 points of drain, so a fast evasive clock beats it. Mitigating by adding removal means cutting fodder or outlets, and the drain math is a direct function of the fodder count - every removal spell added is a body removed from the kill. That is the identity cost. The partial hedges that do NOT cost fodder: Sheoldred is a 4/5 DEATHTOUCH blocker, Elas il-Kor has deathtouch and gains 1 life per creature entering, Gibbering Barricade is a 2/4 defender, and Wingmantle Chaplain is a 0/3 defender that makes chump-blocking Birds. Citizen's Arrest x2, Extinguish the Light x2 and Prayer of Binding come in from the board. |
| disruption-fizzle | mitigation | There is no single critical turn - the drain is incremental, one death at a time, so interaction on any one turn costs a few points rather than the game. The most dangerous single card is a sweeper, and the answer is that Phyrexian Warhorse's '{1}, Sacrifice another creature' carries no timing restriction: it can be activated with the sweeper on the stack, converting the board into Elas triggers before it resolves. The constraint, stated: that line converts at most one body per {1} of open mana. The cube contains only 6 sweepers (2.4% density). |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Ratadrabik of Urborg | 'Whenever another legendary creature you control dies, create a token that's a copy of that creature' - only 3 legendary creature cards in the list to copy, it must already be on the battlefield before the legend dies (no retroactive rebuy), and it contains no life-loss clause at all. Cut in the grill for Sheoldred; a rare slot that produced zero median drain. |
| Argivian Cavalier | 'Enlist / When this creature enters, create a 1/1 white Soldier creature token' - two bodies for three mana is fine, but Enlist is dead text in a deck whose kill is life loss rather than combat. Wingmantle Chaplain took the slot because it also scales Blight Pile and blinks better off Argosy. |
| Aron, Benalia's Ruin | '{W}{B}, {T}, Sacrifice another creature: Put a +1/+1 counter on each creature you control' - legendary AND taps, so the second copy cannot coexist and neither copy can sacrifice the turn it lands. It caps at one death per turn, making it the weakest outlet in the pool. Cut on the shape judge's finding. |
| Phyrexian Vivisector | 'Whenever a creature you control dies, scry 1' - a genuine death-trigger payoff, but scry is selection, not damage, and this deck's constraint is total deaths rather than card quality. |
| Walking Bulwark | 'Defender / {2}: Until end of turn, target creature with defender ... assigns combat damage equal to its toughness rather than its power' - a 1-mana defender that raises Blight Pile's X and lets Gibbering Barricade attack as a 4-power creature. The cheapest Blight Pile enabler in the pool; cut only because the defender count already reaches 6. |
| Benalish Sleeper | 'Kicker {B} / When this creature enters, if it was kicked, each player sacrifices a creature of their choice' - a body that is also an edict, and sacrificing your own token is itself an Elas trigger. A real two-for-one; lost the slot to higher body-count cards. |
| Shield-Wall Sentinel | 'When this creature enters, you may search your library for a creature card with defender' - a colourless tutor for Blight Pile, which converts the 'a lone Blight Pile drains only 1' problem into a real second copy. Cut at 4 mana for a deck that needs its 4-slot for payoffs. |
| Splatter Goblin | 'When this creature dies, target creature an opponent controls gets -1/-1' - a 1-mana body that turns its own sacrifice into interaction. The closest cut in the list. |
| Clockwork Drawbridge | 'Defender / {2}{W}, {T}: Tap target creature' - a 1-mana defender for Blight Pile's X that also brakes one attacker per turn, which is the raced mode this deck accepts. Cut because {2}{W} to tap one creature is too slow to change a race. |
| Braids's Frightful Return | Chapter I sacrifices a creature, chapter III drains 2 if the opponent declines - real, but spread over three turns and strictly worse per turn than Braids, Arisen Nightmare, which is already in the list. |
| Liliana of the Veil | '+1: Each player discards a card' is symmetric against a deck that must hold and deploy fodder, and '-2: Target player sacrifices a creature' lets the opponent choose. A mythic slot for redundancy with Bone Splinters x2 and Cut Down x2. |
| Serra Paragon | 'Once during each of your turns, you may ... cast a permanent spell with mana value 3 or less from your graveyard' - caps at one rebuy per turn, and the rebought permanent EXILES itself when it dies, removing it from the recursion loop rather than sustaining it. A mythic for a grind engine, not a combo accelerant. |
| Caves of Koilos | '{T}: Add {W} or {B}. This land deals 1 damage to you' - the pool's other free WB dual, but it is a RARE. Sunlit Marsh x2 covers the fixing at common, and the audit passes at 17/17 without spending budget on mana. |
| Temporary Lockdown / Drag to the Bottom / Karn's Sylex | All three are the WB-legal sweepers and all three are rare or mythic AND symmetric. This deck IS the wide board - each would exile or kill more of its own permanents than the opponent's, destroying the fodder base the drain is built on. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.09 adj [MV 2.57 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  69.2%  prod  70.6%  gap  -1.4pp  [OK]
  W  demand  30.8%  prod  41.2%  gap -10.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies     PASS
rares/mythics max 1 copy           PASS
max 5 rares+mythics total (MB+SB)  PASS - only 3 used: Golden Argosy, Sheoldred the Apocalypse (M), Braids Arisen Nightmare. The cap is a maximum, not a quota; this shell is built from commons and uncommons by design and the grill confirmed no further rare improves it.
all cards from cube mainboard      PASS - exact-name membership verified
colour usability in W/B            PASS - effective_cost.best_mode returned a usable mode for every distinct nonland card
basic lands (format-supplied, exempt) PASS - 5 Plains, 10 Swamp
```
