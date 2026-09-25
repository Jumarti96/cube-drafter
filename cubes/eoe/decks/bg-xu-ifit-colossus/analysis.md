---
deck_name: "bg-xu-ifit-colossus"
cube_id: "eoe"
cube_slug: "eoe"
colors: "BG"
format: "40-card"
built_at: "2026-08-03T04:19:26Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
7x Forest                     
9x Swamp                      
2x Haunted Mire               ({T}: Add {B} or {G}.) This land enters tapped.
```

### CREATURES (13)

```
CMC  Card                       Qty   Color  Role                                                 Rar
2    Seedship Broodtender       x2    BG     Reanimator engine (abilities intact) + graveyard ena U
2    Umbral Collar Zealot       x2    B      Graveyard enabler + sacrifice outlet                 U
3    Thawbringer                x2    G      Graveyard enabler                                    C
3    Xu-Ifit, Osteoharmonist    x1    B      Reanimator engine (primary; strips abilities)        R
4    Icetill Explorer           x1    G      Graveyard enabler + extra land drop                  R
5    Voidforged Titan           x1    B      Reanimation payload (Scrounge-legal; route via Scrou U
6    Lashwhip Predator          x2    G      Reanimation payload (route via Broodtender to keep R U
9    Bygone Colossus            x2    C      Reanimation payload (Xu-Ifit-safe)                   U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Tragic Trajectory          x2    B      Interaction                                          U
2    Hymn of the Faller         x2    B      Card flow + graveyard enabler                        U
2    Seedship Impact            x1    G      Interaction (artifact/enchantment answer)            U
3    Scrounge for Eternity      x2    B      Reanimator engine (mana value 5 or less; abilities i U
4    Gravkill                   x2    B      Interaction                                          C
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                                                    Rar
Embrace Oblivion           x2    B      Flex removal — Against fast starts - one mana to destroy a creature or Spacecraft, funded  C
Zero Point Ballad          x1    B      Sweeper — Against go-wide boards. At X=6 your Bygone Colossus (toughness 9) and Lashwhip P R
Chrome Companion           x1    C      Hate — Against opposing graveyard decks needing repeatable answers: '{2}, {T}: Put target  C
Seedship Impact            x1    G      Hate — Second copy against artifact or enchantment decks. This is one of only 4 artifact a U
Dauntless Scrapbot         x1    C      Hate — Against opposing graveyard decks: 'exile each opponent's graveyard' - a one-shot re U
Shattered Wings            x2    G      Hate — Against artifact decks (74 of 271 cube cards are artifacts) and against fliers (56  C
Vote Out                   x2    B      Flex removal — Against creature decks whose threats dodge -2/-2; Convoke lets a reanimated U
```

## ANALYSIS

### DECK IDENTITY

A B/G midrange deck that uses selective self-mill to put an oversized body into its own graveyard, then returns it to the battlefield for a fraction of its mana value. Xu-Ifit, Osteoharmonist is the free repeatable engine, but its clause 'It's a Skeleton in addition to its other types and has no abilities' is a TOTAL ability strip, so it has exactly one payload that loses nothing: Bygone Colossus, whose only printed ability is Warp, a casting-only ability already spent by the time it is in the graveyard. Lashwhip Predator returns as a vanilla 5/7 without Reach, and Voidforged Titan returns without its Void draw - so both are routed through Seedship Broodtender and Scrounge for Eternity, which return cards intact. Six black and green removal and card-flow spells hold the board while the graveyard fills.

### THE ABILITY-STRIP TAX — THE MOST IMPORTANT RULE IN THIS DECK

Xu-Ifit, Osteoharmonist reads `{T}: Return target creature card from your graveyard to the battlefield. It's a Skeleton in addition to its other types and has no abilities.` That last clause is a **total** ability strip — keywords included. It is free and repeatable, which makes it the best engine in the deck, but it is not always the right one. Route your payload accordingly:

| Payload | Via Xu-Ifit (free, repeatable) | Via Seedship Broodtender / Scrounge for Eternity (abilities intact) |
|---|---|---|
| Bygone Colossus | 9/9. **Loses nothing** — its only ability is Warp, a casting-only ability already spent | 9/9 (Broodtender only; mana value 9 is outside Scrounge's clause) |
| Lashwhip Predator | Vanilla 5/7 — **loses Reach** | 5/7 with Reach (Broodtender only; mana value 6 is outside Scrounge's clause) |
| Voidforged Titan | 5/4 — **loses its Void draw** | 5/4 with the end-step draw (Scrounge-legal at mana value 5) |

Against the cube's 56 evasive creatures, that Reach is often the difference between a blocker and a wall of nothing. Use Xu-Ifit for the Colossus; use the other two routes for everything else.

### THE POOL'S HARD CEILING ON REANIMATION

An exhaustive oracle census of the B/G pool finds exactly **five unconditional battlefield-reanimation copies** — Xu-Ifit x1, Seedship Broodtender x2, Scrounge for Eternity x2. Two near-misses do not count: Chorale of the Void returns a creature from the *defending player's* graveyard, and Pull Through the Weft returns lands to the battlefield but nonland permanents only to hand. This ceiling is why the goldfish turn is 8, not 6: at 3.6 reliability-weighted copies the engine is not seen with probability 0.75 until 15 cards are seen. The land count, the interaction density, and the decision to run selective surveil over blind mill all follow from that single fact.

### SURVEIL BEATS MILL HERE

Six of the deck's nine graveyard enablers surveil rather than mill: Umbral Collar Zealot (free and repeatable), Thawbringer (on enter AND on death), Hymn of the Faller. Surveil lets you *choose* to bin the Colossus; mill three is a lottery with 2 copies in 40 cards. This is also why Fell Gravship was cut despite being an obvious archetype card — `mill three cards, then return a creature or Spacecraft card from your graveyard to your hand` makes the return **mandatory**, so with a lone Colossus in the yard it drags your 9/9 back to hand at mana value 9.

### VOID DENSITY — TWO DIFFERENT COUNTS

Three cards care whether `a nonland permanent left the battlefield this turn or a spell was warped this turn`. The enabler count is not one number, because Tragic Trajectory cannot switch on its own upgrade — the permanent has to have left *before* it resolves:

- For **Hymn of the Faller**'s extra draw and **Voidforged Titan**'s end-step trigger: **13 of 22** nonland cards (Scrounge for Eternity x2 sacrifice cost, Umbral Collar Zealot x2 activation, Seedship Broodtender x2 self-sacrifice, Gravkill x2, Tragic Trajectory x2, Seedship Impact x1, Bygone Colossus x2 warped for {3}).
- For **Tragic Trajectory**'s own -10/-10: **11 of 22**, excluding its own copies.

Warping Bygone Colossus for {3} is worth knowing as a line in its own right: it does nothing on board (it is exiled at your end step before it can attack), but it *does* satisfy "a spell was warped this turn," turning on -10/-10 and an extra card.

### PLAY PATTERN

Turns 1–3 are surveil and removal; you present no clock. The deck wants Umbral Collar Zealot or Thawbringer down early, a payload binned by turn 4, and Xu-Ifit resolving around turn 3–5. From there each untap is a free 9/9. If Xu-Ifit never appears, the deck is still a functional B/G midrange pile: Lashwhip Predator costs {2}{G}{G} whenever the opponent has three or more creatures, and Voidforged Titan is a fair 5-mana 5/4 that draws cards.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Midrange):  [WARN]
  MV distribution (22 nonland):  1:2  2:7  3:5  4:3  5:1  6:2  9:2
  WARN  MV 6+ share: share 18% above band maximum 10%
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  reanimator_engine: 5 copies (effective 3.6: Seedship Broodtender@0.7, Seedship Broodtender@0.7, Scrounge for Eternity@0.6, Scrounge for Eternity@0.6) → p=0.76 (need ≥ 0.75)
  PASS  graveyard_enabler: 9 copies (effective 8.8: Icetill Explorer@0.8) → p=0.98 (need ≥ 0.75)
  PASS  reanimation_payload: 5 copies → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 34%  T2 90%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Tragic Trajectory, Lashwhip Predator, Bygone Colossus
  OK        single_large_threat: Gravkill, Tragic Trajectory
  OK        noncreature_permanents: Seedship Impact
  CONCEDED  stack: Black and green contain no counterspell in this pool; the deck answers resolved permanents instead and its own threats recur from the graveyard, so a countered reanimation spell leaves the target still binned.
  CONCEDED  graveyard: No maindeck graveyard hate — the deck's own graveyard is its resource, so hate is asymmetrically bad for it; Dauntless Scrapbot and Chrome Companion are sideboarded in against opposing graveyard decks.
```

- Curve WARN, 'MV 6+ share 18% above band maximum 10%': accepted. All four cards at MV 6+ are Bygone Colossus x2 (MV 9) and Lashwhip Predator x2 (MV 6) - the reanimation payload. They are binned by surveil and mill and returned by Xu-Ifit or Seedship Broodtender, neither of which pays their mana value, so scoring them as top-of-curve cast costs misreads the thesis. Lashwhip Predator additionally 'costs {2} less to cast if your opponents control three or more creatures'.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Icetill Explorer converts surplus lands into engine turns - 'You may play an additional land on each of your turns', 'You may play lands from your graveyard', and 'Landfall - Whenever a land you control enters, mill a card' - so an extra land is an extra bin. Lander tokens from Scrounge for Eternity and Seedship Impact turn excess mana into basics, and Bygone Colossus is hardcastable at {9} off a flooded board. |
| screw | mitigation | 14 of the 22 nonland cards cost 3 or less (curve 1:2, 2:7, 3:5), so two-land hands still cast Tragic Trajectory {B}, Umbral Collar Zealot {1}{B}, Hymn of the Faller {1}{B}, Seedship Broodtender {B}{G}, Thawbringer {2}{G} and Seedship Impact {1}{G}. The goldfish simulation reports 84% keepable hands and 92% with three lands by turn 3. |
| decapitation | mitigation | Xu-Ifit is a single copy, so the line without it is the four other reanimation copies: Seedship Broodtender x2 ('{3}{B}{G}, Sacrifice this creature: Return target creature or Spacecraft card from your graveyard to the battlefield' - no mana-value cap, so it still returns Bygone Colossus) and Scrounge for Eternity x2 for the mana-value-5 payload. Both of these return cards with abilities INTACT, which Xu-Ifit does not - so losing Xu-Ifit costs speed, not card quality. Payload is also hardcastable: Voidforged Titan at {4}{B}, Lashwhip Predator at {2}{G}{G} when opponents control three or more creatures. |
| gas-out | mitigation | Hymn of the Faller x2 - 'Surveil 1, then you draw a card and lose 1 life. Void - If a nonland permanent left the battlefield this turn or a spell was warped this turn, draw another card' - is a SORCERY, so unlike a creature-based draw engine it cannot be blanked by Xu-Ifit's ability strip, and 13 of 22 nonland cards turn its Void clause on. It also surveils, so it is graveyard fuel and card flow in the same slot. Beyond that the deck refuels from its graveyard rather than its library: Xu-Ifit untaps every turn and returns a body from an empty hand at no mana cost. |
| raced | mitigation | Lashwhip Predator is a 5/7 with reach, blocking both the ground and the cube's 56 evasive threats, and it 'costs {2} less to cast if your opponents control three or more creatures' - precisely the board a go-wide race presents, making it a turn-4 blocker in exactly that matchup. NOTE: the Reach is only present when it is HARDCAST or returned by Seedship Broodtender or Scrounge; returned by Xu-Ifit it is a vanilla 5/7. Tragic Trajectory x2 at one mana and Gravkill x2 answer the first threats on curve, and Zero Point Ballad comes in from the sideboard as a sweeper both of the deck's largest bodies survive at X=6. |
| disruption-fizzle | mitigation | The payload never leaves the graveyard when the engine is interacted with. Killing Xu-Ifit in response to its activation costs the activation but Bygone Colossus is still binned for Seedship Broodtender or the next Xu-Ifit. The real exposure is Scrounge for Eternity, whose sacrifice is paid on cast - if its target is removed in response the sacrificed permanent is lost. That is why the sacrifice fodder is chosen to be cards that want to die (Thawbringer: 'When this creature enters or dies, surveil 1'; Lander tokens), so the fizzle costs a bin trigger rather than a threat. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Rescue Skiff | SPLASH CANDIDATE. '{5}{W}' uncapped reanimator; six mana off a white splash that this two-colour build does not run. Cut on mana, not on effect. |
| Scout for Survivors | SPLASH CANDIDATE. Returns creatures with 'total mana value 3 or less' — 3 of the 24 nonland cards in this list have mana value ≤3 and are creatures, so it rebuys near-nothing in a fat-target build. |
| Astelli Reclaimer | SPLASH CANDIDATE. '{3}{W}{W}' double white pip is unreachable off a 2–3 source splash; and it returns a NONCREATURE, nonland permanent — this deck's graveyard payload is creatures. |
| Chorale of the Void | Reanimates from the DEFENDING PLAYER's graveyard, not yours, and its Void clause sacrifices it at end step unless a nonland permanent left the battlefield — it does not advance this deck's own-yard plan. |
| Sothera, the Supervoid | Its reanimation is of creatures IT exiled from opponents, gated on 'if a player controls no creatures' — a different engine (that is deck 3's plan), not Bygone Colossus recursion. |
| Singularity Rupture | '{3}{U}{B}{B}' — blue is not a core or splash colour here. |
| Space-Time Anomaly | '{2}{W}{U}' — two off-colours; fails the one-off-colour splash test. |
| Harmonious Grovestrider | Its power and toughness are set by a characteristic-defining ability; reanimated by Xu-Ifit it 'has no abilities' and is therefore 0/0 and dies immediately. |
| Famished Worldsire | Enters as a 0/0 whose counters come from Devour land, an ability; under Xu-Ifit's 'has no abilities' it enters 0/0 and dies. |
| Cosmogoyf | Power equals cards you own in exile; this deck exiles almost nothing of its own, and Xu-Ifit strips the defining ability. |
| Pinnacle Kill-Ship | 7/7 for {7} but it is an 'Artifact — Spacecraft', not a creature card in the graveyard, so Xu-Ifit ('target creature card') cannot return it — only Seedship Broodtender can. |
| Dauntless Scrapbot | 'When this creature enters, exile each opponent's graveyard' — the cube census shows one graveyard-hate card overall, so the mode is near-dead; it belongs in the sideboard. |
| Chrome Companion | '{2}, {T}: Put target card from a graveyard on the bottom of its owner's library' — a graveyard-hate activation in a deck whose own graveyard is the resource; sideboard only. |
| Timeline Culler | Recasts itself from the graveyard for 'Warp—{B}, Pay 2 life', but warp exiles it at the next end step, so it is a 2/2 haste ping, not a persistent body; it also competes with the yard's Colossus for nothing. |
| Mightform Harmonizer | Landfall power-doubling is an ability, stripped by Xu-Ifit; hardcast at {2}{G}{G} it needs a landfall-dense shell this build does not run. |
| Fungal Colossus | EXCLUDED. Its cost reduction is real here — 3 differently named lands makes it a 4-mana 5/5 — but at mana value 7 it sits outside Scrounge for Eternity's 'mana value 5 or less' clause, and Lashwhip Predator (5/7 reach, also MV 6) is a strictly better blocker against a cube whose evasion density is 22.5%. |
| Icecave Crasher | 4/4 trample for {3}{G} is fine stats but its mana value 4 is below the reanimation premium — hardcasting it costs the same as reanimating it. |
| Pull Through the Weft | Returns nonland permanents to HAND, not the battlefield — a mana-value-9 Colossus in hand is not castable in this deck's land count. |
| Ouroboroid | Mythic counter engine in the +1/+1 cluster; it does not touch the graveyard and would spend one of the six rare/mythic slots on an off-pipeline plan. |
| Bioengineered Future | Rewards lands entering the same turn a creature enters; this build's creatures arrive from the graveyard on off-turns, so the counters rarely trigger. |
| Sledge-Class Seedship | 'Whenever this Spacecraft attacks, you may put a creature card from your hand onto the battlefield' — cheats from HAND, not the graveyard, and needs 7 charge counters before it can attack at all. |
| Tapestry Warden | Rewards toughness > power; the reanimation targets in this list are 9/9, 6/6, 5/5, 5/4 — 1 of 5 qualifies (Lashwhip Predator 5/7). |
| Susurian Dirgecraft | 'each opponent sacrifices a nontoken creature of their choice' is edict removal the opponent chooses; the black suite here offers targeted answers at lower cost. |
| Monoist Circuit-Feeder | Its pump scales with 'the number of artifacts you control'; 4 of the 24 nonland cards in this list are artifacts, so X is typically 0–2. |
| Dark Endurance | Protection trick; the deck's threats are reanimated, so a countered removal spell costs less than a card spent protecting one. |
| Meltstrider's Resolve | Aura fight effect; auras on a reanimated body are two-for-one risk, and the fight damage is capped by the enchanted creature's power at cast time. |
| Broodguard Elite | X-cost 0/0 that enters with X counters; reanimated it enters as a 0/0 with no counters and dies. |
| Hylderblade | 'Equipped creature gets +3/+1' with Equip {4} — a 9/9 does not need +3/+1, and the Void auto-attach requires a permanent to have left the battlefield. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.55   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.23 adj [MV 3.55 vs 2.5, 1 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  57.7%  prod  61.1%  gap  -3.4pp  [OK]
  G  demand  42.3%  prod  50.0%  gap  -7.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                : cube_mainboard
multipliers         : {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}
rare/mythic cap (6) : PASS
verification        : All 40 mainboard + 10 sideboard cards exist by exact name in the working pool. No common/uncommon exceeds 2 combined copies; no rare/mythic exceeds 1. Rare+mythic total across mainboard and sideboard = 3 (Xu-Ifit Osteoharmonist, Icetill Explorer, Zero Point Ballad), inside the user's cap of 6. Basic lands are format-supplied and exempt.
```
