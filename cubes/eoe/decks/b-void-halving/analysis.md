---
deck_name: "b-void-halving"
cube_id: "eoe"
cube_slug: "eoe"
colors: "B"
format: "40-card"
built_at: "2026-08-03T15:30:48Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
16x Swamp                  ({T}: Add {B}) - untapped from turn 1
```

### CREATURES (13)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Hullcarver             x2    B      T1 deathtouch body / sac fodder   C
  2  Timeline Culler        x2    B      Warp {B} switch; hasty, recurs from GY  U
  2  Umbral Collar Zealot   x2    B      Zero-mana repeatable Void switch  U
  3  Gravpack Monoist       x2    B      Flier; dies into a 2/2 Robot      C
  3  Insatiable Skittermaw  x2    B      Menace, grows each Void end step  C
  3  Susurian Voidborn      x2    B      Warp {B} switch; drains per death  U
  5  Alpharael, Stonechosen x1    B      Halving payoff; two hits take 20-10-5  M
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Embrace Oblivion       x1    B      Sac cost + removal; fires Void twice  C
  1  Tragic Trajectory      x2    B      -2/-2, or -10/-10 under Void      U
  2  Hymn of the Faller     x2    B      Draw 2 when Void is live          U
  3  Decode Transmissions   x1    B      Draw 2 + 2 reach under Void       C
```

### OTHER SPELLS (5)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Hylderblade            x2    B      Free Void attach; +3/+1           U
  1  Nutrient Block         x1    C      Self-sac artifact; replaces itself  C
  3  Dubious Delicacy       x2    B      Flash -3/-3; sac for 3 to face    U
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                       Rar
Zero Point Ballad       x1    B      vs go-wide x/1-x/2 boards only                R
Archenemy's Charm       x1    B      vs a resolved bomb; also rebuys Alpharael     R
Dauntless Scrapbot      x2    C      vs graveyard decks; brings its own Lander fodder  U
Temporal Intervention   x2    B      vs combo/control; {B} Thoughtseize under Void  C
Gravkill                x2    B      Instant exile; vs a single must-answer blocker or bomb  C
Swarm Culler            x2    B      vs fliers/aggro; 2/4 flier + free sac outlet  C
```

## ANALYSIS

### DECK IDENTITY

Mono-black Void aggro. Every cheap permanent in the list is designed to leave the battlefield on purpose, so the Void intervening-if is true on demand; Alpharael, Stonechosen then converts that into percentage damage with 'defending player loses half their life, rounded up'. Because halving rounds up it can never deal the killing blow, so the deck is built as a body-first aggro deck - 13 creatures over 24 nonland cards on a derived MV1=8 / MV2=6 / MV3=9 / MV5=1 curve, avg MV 2.17 - that uses the halvings to collapse 20 to 10 to 5 and then finishes with menace, equipment and non-combat drain. The Void switch package IS the aggro engine here, not a value tax on it.

### THE KILL MECHANISM, IN ORACLE TEXT

Alpharael, Stonechosen ({3}{B}{B}, 3/3, mythic) reads: "Ward—Discard a card at random." and
"Void — Whenever Alpharael attacks, if a nonland permanent left the battlefield this turn or a spell was
warped this turn, defending player loses half their life, rounded up."

The trigger is an attack trigger with an intervening-if, so the condition is checked when attackers are
DECLARED. That is the single most important play-pattern fact in the deck: the switch has to be flipped in
main phase 1 or at beginning of combat, never after. Umbral Collar Zealot ("Sacrifice another creature or
artifact: Surveil 1") does it for zero mana at instant speed; Dubious Delicacy ("{2}, {T}, Sacrifice this
artifact: Target opponent loses 3 life") does it for {2}.

Two connected halvings take 20 to 10 to 5. Halving rounds UP, so it can never deal the killing blow — the
last ~5 life is why this is built as a body-first aggro deck rather than a value shell. The finishers are
Hylderblade ("Equipped creature gets +3/+1" / "Void — At the beginning of your end step, if a nonland
permanent left the battlefield this turn or a spell was warped this turn, attach this Equipment to target
creature you control" — Equip {4} is never budgeted on curve), Insatiable Skittermaw ("Menace" / "Void — At
the beginning of your end step ... put a +1/+1 counter on this creature"), and 8 fixed points of non-combat
reach.

### TWO VOID CLOCKS, CHECKED AT DIFFERENT TIMES

The deck runs two separate Void windows and they need different enablers:

| Window | Checked | Payoffs in this deck | Enablers that reach it |
| --- | --- | --- | --- |
| Declare attackers | Alpharael's attack trigger | Alpharael 1 | Umbral Collar Zealot 2 (free), Dubious Delicacy 2 (flash/{2}), Embrace Oblivion 1, Tragic Trajectory 2 (precombat kill), warp casts |
| Beginning of your end step | Hylderblade 2, Insatiable Skittermaw 2 | 4 of 24 nonlands | any of the 12 enablers, including warp self-exile at the same end step |

This is why Swarm Culler ("Whenever this creature becomes tapped, you may sacrifice another creature or
artifact. If you do, draw a card") is a sideboard card and not an Alpharael enabler: its trigger goes on the
stack simultaneously with the attack trigger, so it can never make the intervening-if true. It does power the
end-step window, which is where it earns its slot when boarded in.

### WARP AS A ONE-MANA SWITCH

Timeline Culler ("Haste" / "You may cast this card from your graveyard using its warp ability." /
"Warp—{B}, Pay 2 life.") and Susurian Voidborn ("Warp {B}") each turn Void on twice off one card: once when
the spell is warped, and again when the creature self-exiles at the beginning of the next end step — which
lands exactly on the Hylderblade/Skittermaw window. Timeline Culler additionally recurs from the graveyard,
which is why Umbral Collar Zealot's Surveil 1 is a resource and not just a Void switch.

### COUNT-DEPENDENT VERDICTS

Every claim below is numerator/denominator against this 24-nonland list.

- **Sacrifice costs are fed** — 18 of 24 nonland cards are permanents that can pay 'sacrifice an artifact or creature': 13 creatures (Alpharael 1, Insatiable Skittermaw 2, Hullcarver 2, Gravpack Monoist 2, Timeline Culler 2, Susurian Voidborn 2, Umbral Collar Zealot 2) plus 5 artifacts (Hylderblade 2, Dubious Delicacy 2, Nutrient Block 1), before counting the 2/2 Robot tokens Gravpack Monoist leaves behind.
- **Umbral Collar Zealot's zero-mana switch has fodder** — Same 18/24 denominator minus the Zealot itself ('Sacrifice ANOTHER creature or artifact'): 17/24 legal sacrifices per Zealot.
- **Void enablers (relabelled per Challenger finding 10)** — 12 of 24 nonland cards produce the Void condition. Truly unaided - no other permanent required: Timeline Culler 2 ('Warp-{B}, Pay 2 life'), Susurian Voidborn 2 ('Warp {B}'), Dubious Delicacy 2 ('{2}, {T}, Sacrifice this artifact'), = 6/24. Outlet- or death-dependent: Umbral Collar Zealot 2, Embrace Oblivion 1, Nutrient Block 1, Gravpack Monoist 2 = 6/24. Four independent classes; assembly p(enabler by turn 7) = 0.98. Additionally, Alpharael's condition reads 'a nonland permanent' with no controller restriction, so Tragic Trajectory x2 killing an opposing creature precombat is also an enabler.
- **Void payoffs that consume the switch** — 10 of 24 nonland cards read the Void condition: Alpharael 1, Hylderblade 2, Insatiable Skittermaw 2, Tragic Trajectory 2, Hymn of the Faller 2, Decode Transmissions 1. Enabler:payoff ratio 12:10; assembly p(payoff by turn 7) = 0.97.
- **Evasion coverage (was 0/13, Challenger findings 1 and 7)** — 4 of 13 mainboard creatures now have evasion: Gravpack Monoist 2 ('Flying') and Insatiable Skittermaw 2 ('Menace'). Against the cube's evasion class (56 cards, 22.5% density) the deck still has no reach and no flying blocker maindeck; that is answered from the board with Swarm Culler x2 (2/4 'Flying') and Gravkill x2.
- **One-mana creatures (was 0/13, Challenger finding 3)** — 2 of 13 mainboard creatures cost 1: Hullcarver x2 ({B} 1/1 'Deathtouch' Artifact Creature). Nonland MV curve is now MV1=8, MV2=6, MV3=9, MV5=1.
- **Fixed non-combat reach (Challenger finding 9)** — 8 fixed points: Dubious Delicacy 2 x 'Target opponent loses 3 life' = 6, Decode Transmissions 1 x 'each opponent loses 2 life' = 2. Plus 1 per creature/artifact death with Susurian Voidborn on board - unbounded, stated separately rather than folded into the 8.
- **Refuel density (gas-out)** — 4 of 24 nonland cards are card-positive: Hymn of the Faller 2, Decode Transmissions 1, Nutrient Block 1 ('When this artifact is put into a graveyard from the battlefield, draw a card'). Plus Timeline Culler 2, which is not card-positive but recurs itself from the graveyard.
- **Sacrifice sources (outlet count)** — 6 of 24 nonland cards actively sacrifice a permanent: Umbral Collar Zealot 2 (free, repeatable), Embrace Oblivion 1 (additional cost), Dubious Delicacy 2 (self), Nutrient Block 1 (self). This is the denominator that Challenger finding 14 measured at 4/24 on the pre-resolution list.
- **Self-inflicted life loss (relevant to being raced)** — 5 of 24 nonland cards cost life: Timeline Culler 2 ('Warp-{B}, Pay 2 life'), Hymn of the Faller 2 ('lose 1 life'), Decode Transmissions 1 ('lose 2 life' when Void is off). Offsetting lifegain: Susurian Voidborn 2 ('you gain 1 life' per death), Dubious Delicacy 2 ('You gain 3 life' mode), Nutrient Block 1 ('You gain 3 life').

### CURVE AND LAND MATH

Nonland MV distribution (24 cards): MV1=8  MV2=6  MV3=9  MV5=1. Average MV 2.1667.

Land derivation, verbatim from deck_audit.land_target(40, avg_mv=2.1667, accel=1): base 17 lands
(argmax P(2-4 lands in 7) = 0.7945), adjustment -0.607 for being 0.33 MV below the 2.5 reference with
accel=1, raw_target 16.393, clamped false, recommended 16, P(2-4 in 7) at 16 = 0.7903. Built to 16 exactly;
deviation: none. accel=1 is machine-derived and its single member is Nutrient Block (cantrip tag).

All 16 lands are Swamp. The pool's three nonbasic options were rejected on their own text: Command Bridge
("This land enters tapped." plus "sacrifice it unless you tap an untapped permanent you control") costs a
tempo turn and a tapped attacker in a deck that needs no fixing; Secluded Starforge only makes "{T}: Add {C}",
which cannot pay {B}{B} (Timeline Culler hardcast) or {3}{B}{B} (Alpharael), and it is a rare that would spend
a rare-budget slot; Susur Secundi, Void Altar enters tapped AND is a mythic. So all 16 lands are untapped
black sources on turn 1 against 26 black pips out of 26 total.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:8  2:6  3:9  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9.1: Hylderblade@0.9, Hylderblade@0.9, Tragic Trajectory@0.8, Tragic Trajectory@0.8, Hymn of the Faller@0.9, Hymn of the Faller@0.9, Decode Transmissions@0.9) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 10.1: Dubious Delicacy@0.9, Dubious Delicacy@0.9, Umbral Collar Zealot@0.8, Umbral Collar Zealot@0.8, Embrace Oblivion@0.8, Nutrient Block@0.7, Gravpack Monoist@0.6, Gravpack Monoist@0.6) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 86%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-black at this curve has no non-symmetric sweeper in the pool (Zero Point Ballad is sideboarded because it also kills our own 1-2 toughness bodies). The damage that ignores blockers carries it: Alpharael - defending player loses half their life, rounded up; Dubious Delicacy x2 - Target opponent loses 3 life; Decode Transmissions - each opponent loses 2 life; Susurian Voidborn - target opponent loses 1 life per death.
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory, Tragic Trajectory, Dubious Delicacy, Dubious Delicacy
  CONCEDED  noncreature_permanents: CONCEDED (corrected from OK at Phase 9 per Challenger finding 2). Embrace Oblivion reads Destroy target creature or Spacecraft - Spacecraft only, not Equipment/Food/enchantment. dossier.pool_limits: Artifact-removal probe matched 0 mono-colour cards in B, U; Enchantment-removal probe matched 0 mono-colour cards in B, R, U, W. No answer in main or side to a resolved aura/enchantment on Alpharael; the deck races instead.
  CONCEDED  stack: Zero counterspells exist in the mono-black slice of this pool; the deck answers the stack proactively (sideboard Temporal Intervention - Target opponent reveals their hand. You choose a nonland card from it. That player discards that card - costing {B} once Void is on) and by presenting a turn-6/7 kill.
  CONCEDED  graveyard: No mainboard graveyard hate; our own graveyard is an asset (Timeline Culler - You may cast this card from your graveyard using its warp ability), so hate is a sideboard slot: Dauntless Scrapbot x2, exile each opponents graveyard.
```

- **curve** — PASS, no flag. Distribution over 24 nonland cards, recomputed from the shipped list at render time, is MV1=8, MV2=6, MV3=9, MV5=1 (the prose stored at Phase 8 said MV1=7/MV2=10/MV3=6 and is corrected here to match deck_checks.curve_check). The effective curve is lower still, since Timeline Culler x2 and Susurian Voidborn x2 are castable for {B} via warp, moving 4 cards from MV2/MV3 down to one-mana plays.
- **goldfish** — PASS, no flag. 85% keepable against the 80% floor, 3 lands by turn 3 in 84% of hands, T1 play 83% / T2 100% / T3 100% - consistent with the 16-land count that land_target computed rather than a count chosen to flatter this check.

### FAILURE MODES

| Mode | Verdict | Reasoning |
| --- | --- | --- |
| flood | mitigation | Sinks written on the cards: Hylderblade x2 'Equip {4}'; Dubious Delicacy x2 '{2}, {T}, Sacrifice this artifact: Target opponent loses 3 life' (or the 3-life mode); Nutrient Block '{2}, {T}, Sacrifice this artifact: You gain 3 life'. All but the Equip are also Void switches. 14 of 24 nonland cards cost 1 or 2 (MV1=8, MV2=6), so a flooded turn deploys two or three spells. |
| screw | mitigation | Two-land hands are keepable: 14/24 at MV1-2, and Timeline Culler ('Warp-{B}, Pay 2 life') and Susurian Voidborn ('Warp {B}') are one-mana plays out of a two-land hand. Digging: Hymn of the Faller x2 ('Surveil 1, then you draw a card'), Decode Transmissions x1, and Umbral Collar Zealot's free 'Surveil 1'. Goldfish 1000 hands seed 0: 85% keepable, 84% have 3 lands by T3, T1 play 86%. Note per Challenger finding 3 that the T1 figure now includes 2 genuine one-drop creatures (Hullcarver) rather than only Hylderblade. |
| decapitation | mitigation | Alpharael is a 1-of and carries his own tax, 'Ward-Discard a card at random'. If he never resolves, 9 of the other 23 nonland cards still read Void (Hylderblade 2, Insatiable Skittermaw 2, Tragic Trajectory 2, Hymn of the Faller 2, Decode Transmissions 1) and the deck still has 8 fixed points of non-combat reach (Dubious Delicacy 2 x 3 = 6; Decode Transmissions 1 x 2 = 2) plus 1 per death with Susurian Voidborn out. Skittermaw grows a menace body every Void end step and Hylderblade attaches +3/+1 to it for free. |
| gas-out | mitigation | 4 of 24 nonland cards are card-positive (Hymn of the Faller 2, Decode Transmissions 1, Nutrient Block 1) and both Hymn and Decode draw two on a Void turn. The graveyard is a second hand: Timeline Culler x2 'You may cast this card from your graveyard using its warp ability', deliberately binned by Umbral Collar Zealot's free 'Surveil 1'. Swarm Culler x2 in the board ('Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card') is the grindier configuration. |
| raced | accepted | REWRITTEN at Phase 9 against the true pool census (Challenger finding 1). The old text claimed the only mono-black blockers available were Monoist Sentry and Gravblade Heavy; working_pool in fact offers Swarm Culler {3}{B} 2/4 'Flying' x2, Gravpack Monoist {2}{B} 2/1 'Flying' x2 and Survey Mechan {4} 1/3 'Flying' x2, and neither previously-named blocker can block a flier at all (Monoist Sentry is 'Defender' with no reach; Gravblade Heavy has none). Resolution: Gravpack Monoist x2 is maindecked, so evasion is 4 of 13 creatures (2 flying + 2 menace) instead of 0 of 13, and Swarm Culler x2 - a 2/4 flier that is also a free sacrifice outlet and replaces itself - replaces Monoist Sentry x2 in the sideboard, so the boarded plan answers the air rather than the ground. What is still accepted: 0 of 13 creatures have reach, the maindeck has no flying blocker, and 5 of 24 nonland cards pay life, so a turn-3 flying clock backed by removal still beats us. That cost is accepted because Alpharael's halving rounds up and can never reduce the opponent to 0 - the last ~5 must come from attacking bodies, and every dedicated wall maindecked is a body subtracted from the only thing that can finish. |
| disruption-fizzle | mitigation | 12 of 24 nonland cards supply the Void condition across four independent classes, so killing one enabler in response does not turn Void off. Timing is recorded correctly: Alpharael's ability is an attack trigger with an intervening-if checked when attackers are DECLARED, so the switch must be flipped in main 1 or at beginning of combat - Umbral Collar Zealot does that for zero mana, and Dubious Delicacy does it at instant speed for {2}. This correctly disqualifies Swarm Culler and Comet Crawler as Alpharael enablers (their triggers are simultaneous with declare-attackers); Swarm Culler is sideboard-only and powers the end-step Void checks on Hylderblade x2 and Insatiable Skittermaw x2 instead. |

### CARDS CONSIDERED BUT EXCLUDED

Rares and mythics cut against the 6-card rare/mythic cap (3 of 6 spent: Alpharael, Stonechosen main;
Zero Point Ballad and Archenemy's Charm side), uncommons a tier below the chosen includes, and the cards
flagged as sideboard-only rather than maindeck.

- **Sothera, the Supervoid** (mythic, {2}{B}{B}) — [rare_budget] Mythic; 'Whenever a creature you control dies, each opponent chooses a creature they control and exiles it' is a genuine Void engine, but it is the payoff of a DIFFERENT locked pipeline and the 6 rare/mythic slots are already spent on Alpharael + 5 aggro-relevant rares.
- **Tezzeret, Cruel Captain** (mythic, {3}) — [rare_budget] Mythic; '-3: Search your library for an artifact card with mana value 1 or less' fetches Hylderblade/Nutrient Block, but a 3-mana planeswalker that adds no clock loses its slot to bodies in a goldfish-turn-7 aggro deck.
- **The Dominion Bracelet** (mythic, {2}) — [rare_budget] Mythic; 'Equipped creature gets +1/+1' for {2} with Equip {1} is strictly worse than Hylderblade's +3/+1 free attach, and the {15} mind-control mode is unreachable here.
- **Zero Point Ballad** (rare, {X}{B}) — [rare_budget] Rare; 'Destroy all creatures with toughness X or less. You lose X life.' is a symmetric sweeper — this deck's own board is 12+ small bodies whose deaths it needs on ITS terms, not wiped. Sideboard-only against go-wide.
- **Requiem Monolith** (rare, {2}{B}) — [rare_budget] Rare; the damage-to-draw grant is opponent-optional ('That creature's controller may have this artifact deal 1 damage to it'), so it produces no reliable cards and no clock.
- **Xu-Ifit, Osteoharmonist** (rare, {1}{B}{B}) — [rare_budget] Listed as an include candidate but the FIRST cut if the 6-rare budget binds: 'has no abilities' means reanimated Alpharael has no Void trigger, so it never advances the kill mechanism directly.
- **Entropic Battlecruiser** (rare, {3}{B}) — [rare_budget] Rare; 'Whenever this Spacecraft attacks, each opponent discards a card' needs Station to 8+ before it can attack at all — too many taps for a deck whose creatures must be attacking.
- **Dawnsire, Sunstar Dreadnought** (mythic, {5}) — [rare_budget] Mythic; Station 20+ for flying on a 5-mana 20/20 is unreachable when this deck's creatures average ~2 power and must attack.
- **The Eternity Elevator** (rare, {5}) — [rare_budget] Rare; '{T}: Add {C}{C}{C}' is colorless ramp in a deck whose costs are {B}-heavy ({B}{B}, {3}{B}{B}, {B}{B}{B}).
- **The Endstone** (mythic, {7}) — [rare_budget] Mythic; 'your life total becomes half your starting life total, rounded up' at every end step is a hard anti-synergy — this deck races and cannot hand itself a 10-life clock.
- **Extinguisher Battleship** (rare, {8}) — [rare_budget] Rare; eight mana and 'deals 4 damage to each creature' kills our own board of 1- and 2-toughness fodder.
- **Thrumming Hivepool** (rare, {6}) — [rare_budget] Rare; 'Affinity for Slivers' and 'Slivers you control have double strike' — 0/60 cards in the B-legal pool are Slivers, so it is a 6-mana do-nothing.
- **Secluded Starforge** (rare, land) — [rare_budget] Rare LAND — counts against the same 6 rare/mythic budget as spells; '{T}: Add {C}' produces no black mana for {B}{B} and {3}{B}{B} costs.
- **Susur Secundi, Void Altar** (mythic, land) — [rare_budget] Mythic LAND — spends a rare slot AND 'This land enters tapped', which a 1-2-3 curve cannot afford; the 12+ Station draw ability is a control payoff.
- **Monoist Circuit-Feeder** (uncommon, {4}{B}{B}) — [tier_below] Uncommon; a 6-mana 4/4 flier is two turns past this deck's goldfish turn of 7 with the same mana spent on two Void switches instead.
- **Survey Mechan** (uncommon, {4}) — [tier_below] Uncommon; 4 mana for a 1/3 flier with hexproof adds essentially no clock, and its {10} sacrifice ability is unpayable here.
- **All-Fates Scroll** (uncommon, {3}) — [tier_below] Uncommon; '{T}: Add one mana of any color' is redundant fixing in a mono-black deck, and the {7} draw ability keys off 'differently named lands you control' — this deck's lands are near-uniformly Swamps.
- **Virulent Silencer** (uncommon, {3}) — [tier_below] Uncommon; poison is a second, competing win condition — two poison per artifact-creature hit needs 5 connections, while Alpharael needs 2. Splitting the clock loses to both.
- **Pinnacle Kill-Ship** (common, {7}) — [tier_below] Common; seven mana, and Station 7+ before it flies — unreachable before the thesis goldfish turn.
- **Command Bridge** (common, land) — [tier_below] Common LAND; 'This land enters tapped' plus 'sacrifice it unless you tap an untapped permanent you control' costs both a tempo turn and a tapped attacker in a mono-color deck that needs no fixing.
- **Chrome Companion** (common, {2}) — [sideboard] Listed as a marginal include; its real edge is '{2}, {T}: Put target card from a graveyard on the bottom of its owner's library' — flag as a sideboard card against recursion, not a maindeck requirement.
- **Dauntless Scrapbot** (uncommon, {3}) — [sideboard] Maindeck-fine as Lander fodder, but 'exile each opponent's graveyard' is the reason to bring extra copies in against graveyard decks specifically.
- **Blade of the Swarm** (uncommon, {3}{B}) — [sideboard] Mode 2 ('Put target exiled card with warp on the bottom of its owner's library') is dead in most matchups — flag as sideboard-relevant only against other warp decks; maindeck it is a plain 5/3.
- **Monoist Sentry** (uncommon, {B}) — [sideboard] Defender contributes 0 to a clock; its 4/1 body is a sideboard blocker against aggro or pure Station/sac fodder, not an aggro maindeck staple.

### SIDEBOARD GUIDE

| Bring in | Against | Take out | Mechanism |
| --- | --- | --- | --- |
| Swarm Culler x2 | Flying or fast aggro decks | Hymn of the Faller x2 | The maindeck has 0 of 13 creatures with reach and 0 flying blockers; Swarm Culler is {3}{B} 2/4 "Flying" and its "Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card" replaces the drawn card Hymn was providing. |
| Gravkill x2 | A single must-answer blocker or bomb | Nutrient Block x1, Hullcarver x1 | "Exile target creature or Spacecraft" at instant speed; cast precombat it also turns Void on for that same attack. |
| Dauntless Scrapbot x2 | Graveyard/recursion decks | Gravpack Monoist x2 | "When this creature enters, exile each opponent's graveyard. Create a Lander token." — hate plus a fresh sacrificeable artifact, so the Void switch is not diluted. |
| Temporal Intervention x2 | Combo and control | Hullcarver x2 | 0 counterspells exist in the mono-black slice; "Target opponent reveals their hand. You choose a nonland card from it. That player discards that card" costs {B} once Void is on and strips the removal aimed at Alpharael. |
| Archenemy's Charm x1 | A resolved bomb, or after Alpharael is answered | Decode Transmissions x1 | "Exile target creature or planeswalker" at instant speed, and mode 2 "Return one or two target creature and/or planeswalker cards from your graveyard to your hand" rebuys Alpharael. {B}{B}{B} is free in mono-black. |
| Zero Point Ballad x1 | Go-wide boards of x/1s and x/2s | Insatiable Skittermaw x1 | "Destroy all creatures with toughness X or less. You lose X life." is symmetric and our own board is mostly 1- and 2-toughness, so it only comes in when their board is strictly wider than ours. |

Never board out: Alpharael, Stonechosen (the kill), Umbral Collar Zealot x2 (the only zero-mana switch),
Timeline Culler x2 or Susurian Voidborn x2 (the only unaided one-mana switches).

### KNOWN HOLES

- noncreature_permanents: CONCEDED. Embrace Oblivion reads "Destroy target creature or Spacecraft" — no
  Equipment/Food/enchantment clause anywhere in main or side, and the dossier records 0 mono-black
  artifact-removal and 0 mono-black enchantment-removal matches. A resolved aura on Alpharael is unanswerable;
  the deck races.
- stack: CONCEDED. 0 counterspells in the mono-black slice; answered proactively with Temporal Intervention.
- wide_boards: CONCEDED. No non-symmetric sweeper exists in mono-black here; the 8 fixed points of
  blocker-proof damage plus the halving carry the matchup instead.

- Pipeline note correction: LOCKED PIPELINE notes list Blade of the Swarm among the warp cards. Its working_pool oracle text is 'When this creature enters, choose one - Put two +1/+1 counters on this creature. Put target exiled card with warp on the bottom of its owner's library.' It has no warp ability; it hates on warp. Correctly excluded (Challenger finding 11).
- Pipeline note correction: dossier.interaction_chains has 0 entries, so the Phase 9 check-10 cross-reference floor was unavailable; the absence audit rests on an oracle-text scan of the mono-B/colourless slice (Challenger finding 13).
- Pipeline note correction: Step 0's rejected 'resilient' sketch (threats 8/24 = 33%, engine 10/24 = 42%, thesis turn 8) sits 12pp below the 45-55% aggro threat band and is a midrange profile, not an interpretation of aggro (Challenger finding 12).

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.61 adj [MV 2.17 vs 2.5, 1 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base            : cube_mainboard   multipliers C=2 U=2 R=1 M=1   only_from {}   excluded []
deck_size_40                 PASS - 24 nonland + 16 Swamp = 40
sideboard_10                 PASS - 2+2+2+2+1+1 = 10
copy_limits_main_plus_side   PASS - no nonbasic name exceeds its rarity multiplier or its pool copy count; Swamp x16 is a basic land and exempt
rare_mythic_cap_6            PASS - 3 of 6 used: Alpharael, Stonechosen (mythic, main), Zero Point Ballad (rare, side), Archenemy's Charm (rare, side). Sunset Saboteur was cut, banking 1 slot; 3 slots remain unspent.
colour_usability             PASS - effective_cost.best_mode(card, ['B'], []) returned non-None for all 24 nonland mainboard and all 10 sideboard cards; no off-identity inclusion, so no usable_as caveat to carry into Phase 9.
splash_cap                   PASS - splash_colors is empty and 0 cards carry an off-core color identity
format_40_card               PASS - format 40-card, mainboard 40, sideboard exactly 10
```