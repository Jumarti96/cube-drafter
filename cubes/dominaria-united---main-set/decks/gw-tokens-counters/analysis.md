---
deck_name: "gw-tokens-counters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-08-14T23:22:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x10  Plains
  x3   Forest
  x2   Crystal Grotto any-colour fixing
  x2   Radiant Grove  only free WG dual
```

### CREATURES (14)
```
CMC  Card                      Qty   Color  Role                                                                  Rar
  2  Juniper Order Rootweaver  x2    W      Threat/Payoff - kicked counter                                        C
  2  Resolute Reinforcements   x2    W      Threat/Payoff - two bodies, flash                                     U
  2  Valiant Veteran           x1    W      Threat/Payoff - Soldier anthem                                        R
  3  Anointed Peacekeeper      x1    W      Threat - body + disruption                                            R
  3  Argivian Cavalier         x2    W      Threat/Payoff - two bodies                                            C
  3  Deathbloom Gardener       x2    G      Engine/Infrastructure - any-colour source, Redeemer-eligible blocker  C
  3  Queen Allenal of Ruadach  x2    GW     Threat/Payoff - token multiplier                                      U
  5  Defiler of Faith          x1    W      PAYOFF - a Soldier per white permanent spell                          R
  5  Serra Redeemer            x1    W      PAYOFF - kill mechanism, two counters per small body                  R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                       Qty   Color  Role                                  Rar
  1  Strength of the Coalition  x2    G      Payoff spell - mass counter (kicked)  U
  2  Destroy Evil               x1    W      Interaction - modal                   C
  2  Take Up the Shield         x2    W      Counter + protection                  C
  4  Captain's Call             x2    W      Threat/Payoff - three bodies          C
```

### OTHER SPELLS (2)
```
CMC  Card              Qty   Color  Role                 Rar
  3  Citizen's Arrest  x2    W      Interaction - exile  C
```

## SIDEBOARD (10)
```
Card               Qty   Color  Role / When to board in                              Rar
Prayer of Binding  x2    W      SB - flash exile answer                              U
Broken Wings       x2    G      SB - artifact/enchantment/flier answer               C
Destroy Evil       x1    W      Interaction - modal                                  C
Snarespinner       x2    G      SB - anti-flier blocker                              C
Griffin Protector  x1    W      SB - Redeemer-eligible flier that scales with width  C
Bite Down          x2    G      SB - one-sided removal for toughness-3 fliers        C
```

## ANALYSIS

### DECK IDENTITY

A white-primary GW token-aggro deck that converts width into +1/+1 counters. Serra Redeemer is the payoff: every creature with power 2 or less that enters gets two counters, and every token this deck makes is a 1/1 Soldier, so Captain's Call resolves as three 3/3s and Resolute Reinforcements as a pair of them. Defiler of Faith is the second copy of that plan from a different angle - it makes a Soldier every time you cast one of the 14 white permanent spells in the list. Queen Allenal of Ruadach adds one extra Soldier to every token event, and kicked Strength of the Coalition is a mass-counter effect that needs no creature to enter at all. The deck runs exactly ONE anthem, Valiant Veteran, and that is a deliberate mechanical constraint rather than a shortage: a second anthem would raise entering tokens above Serra Redeemer's power threshold and switch the payoff off. Green is a support colour - three cards, six copies, and five free sources.

### THE ONE-ANTHEM RULE — READ THIS BEFORE CHANGING THE DECK

This is the single most important thing to know about building this archetype, and it cost the deck a card during the grill.

Serra Redeemer reads *"Whenever another creature you control with **power 2 or less** enters, put two +1/+1 counters on that creature."* It checks power **as the creature enters** — and static anthems are already applying at that moment. So:

| Board state | A 1/1 Soldier token enters as | Redeemer triggers? |
|---|---|---|
| No anthem | 1/1 | ✅ |
| Valiant Veteran only | 2/2 | ✅ |
| Valiant Veteran **+ King Darien XLVIII** | **3/3** | ❌ |

An earlier version of this deck ran both anthems. With both on the battlefield, **100% of the deck's token output stopped triggering its own payoff** — and King Darien alone also pushed Juniper Order Rootweaver ×2, Argivian Cavalier ×2 and Valiant Veteran (all printed 2/2) out of range. King Darien XLVIII was cut for exactly this reason.

The deck therefore runs **exactly one anthem, by design**. Valiant Veteran is safe because it buffs only Soldiers, and a 1/1 Soldier token still arrives at power 2. **Do not add a second anthem to this list.** If you ever do, the play sequence matters: deploy Serra Redeemer and dump your tokens *first*, because +1/+1 counters are permanent and survive the anthem leaving, while the anthem's buff does not.

### WHY THERE ARE TWO WIDE-MAKERS

Serra Redeemer is a singleton — the rare cap forbids a second copy — and a singleton in 40 cards is seen only **32.5%** of the time by turn 6. That is a poor rate for a card the deck identity calls "the payoff." Defiler of Faith is the answer: it is a second, independent one-card wide-maker, making a 1/1 Soldier every time you cast one of the **13 white permanent spells** that can trigger it. With both, P(at least one by turn 6) rises to **55%**.

They also compose. Defiler's Soldiers are power 1 (2 under Valiant Veteran), so every one of them is a Redeemer beneficiary that enters as a 3/3.

### THE SIGNATURE TURN

Captain's Call, with Queen Allenal of Ruadach and Serra Redeemer already on the battlefield:

1. Captain's Call would create three 1/1 Soldiers.
2. Queen Allenal is a **replacement effect** — *"those tokens plus a 1/1 white Soldier creature token are created instead"* — so it is **one** creation event producing **four** tokens.
3. Serra Redeemer triggers **per creature entering**, so that is **four separate triggers**, two counters each.

Four 3/3 Soldiers from a four-mana sorcery. A removal spell held in response can kill the Redeemer before Captain's Call resolves, but the four bodies still arrive under Valiant Veteran's anthem.

### GREEN IS SMALL BUT IT IS NOT OPTIONAL

Green is 6 of 31 pips (19.4%), which understates how much it matters. Six of the 23 nonland copies **cannot be cast at all** without green — Strength of the Coalition ×2 ({G}), Deathbloom Gardener ×2 ({2}{G}), Queen Allenal of Ruadach ×2 ({G}{W}{W}) — and two more want kicker {G}.

Only **five** lands produce green for free (3 Forest, 2 Radiant Grove), and two of those enter tapped. Crystal Grotto reaches green only through its `{1}, {T}` mode, which cannot cast a turn-3 Queen Allenal at `{G}{W}{W}`. Note also that Deathbloom Gardener is *not* insurance against green screw — its own cost is `{2}{G}`, so it cannot be cast without green already available. What it does is hold any colour once online, and enter as a printed-power-1 body that Serra Redeemer turns into a 3/3 **deathtouch** blocker.

### PLAY PATTERN

Bodies on turns 1–3, a payoff on 4–5, lethal on 6. The deck's two-for-ones do the heavy lifting: 6 cards produce 10 token bodies, or 16 with Queen Allenal out. The interaction is deliberately thin — Citizen's Arrest ×2 are the only unconditional creature answers, since Destroy Evil's creature mode is gated on toughness 4 or greater — and that cost is paid in a sideboard where 7 of 10 slots point at the cube's 51 evasion creatures.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:9  4:2  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.6: Serra Redeemer@0.9, Defiler of Faith@0.9, Strength of the Coalition@0.7, Strength of the Coalition@0.7, Juniper Order Rootweaver@0.7, Juniper Order Rootweaver@0.7) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 10 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 29%  T2 92%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: none of the cube's six sweepers is castable in G or W at a cost this aggro curve can pay - the six are BG, R x2, U, WUR, and Karn's Sylex, whose {X} activation is a sorcery-speed mana sink this 17-land deck cannot afford while it is deploying. This deck is itself the widest board in most games; against a mirror it out-sizes rather than clears, since Serra Redeemer makes each of its own tokens a 3/3 while an opposing token stays a 1/1.
  OK        single_large_threat: Citizen's Arrest, Destroy Evil
  OK        noncreature_permanents: Citizen's Arrest, Destroy Evil
  CONCEDED  stack: no card in the working pool with G or W identity counters a spell; the deck presents more must-answer bodies per card than one-for-one answers can absorb - Resolute Reinforcements, Argivian Cavalier and Captain’s Call are each two or more bodies from one card.
  CONCEDED  graveyard: the structural census found zero graveyard-hate cards in the entire cube, confirmed by a direct oracle scan of the working pool. No colour can cover this class here.
```

- No WARN flags on either run - curve, assembly, goldfish and coverage returned PASS before and after the Phase 9 repairs (payoff p=0.86, enabler p=0.98, 87% keepable, T2 play 92%).

- The locked sketch proposed 16 lands / 24 nonlands on explosive-lens grounds. deck_audit.land_target returned 17 on both calls, and per build.md the count is the function's output rather than a lens preference, so the build is 17 / 23.

- The Phase 9 grill changed the deck more than any other in this batch, and for a mechanical reason rather than a ratio one: the Challenger proved that the deck's second anthem was switching its own payoff off. That is recorded in full at count_dependent_verdicts.ANTHEM_CONSTRAINT.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Corrected per Challenger #8, which showed the earlier draft's emphasis was inverted. The load-bearing, unconditional flood outlet is the kicker suite: 4 of the 23 nonland cards have a more expensive better mode - Juniper Order Rootweaver x2 (kicker {G} for a counter) and Strength of the Coalition x2 (kicker {2}{W} for a board-wide counter). Valiant Veteran's '{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control' is a genuine mass pump from an empty hand but requires it to have died first, and it is 1 of 40. Defiler of Faith's life-for-mana clause also converts surplus turns into extra white permanents, each of which is another Soldier. |
| screw | mitigation | 10 of the 23 nonland cards cost 2 or less and 2 cost 1, so a two-land hand still deploys on turns 1, 2 and 3. Crystal Grotto x2 scries on entry, and the structural gate measures 87% keepable hands with 88% reaching three lands by turn 3 and a 92% turn-2 play rate. The genuine risk is colour, not count: Queen Allenal of Ruadach at {G}{W}{W} and Citizen's Arrest at {1}{W}{W} both want a specific double pip on turn 3, which is why 4 of the 17 lands make green and 14 make white. |
| decapitation | mitigation | Serra Redeemer answered on sight no longer costs the deck its plan, which was the point of the Phase 9 repair: Defiler of Faith is a second independent wide-maker off 14 white permanent spells, taking P(at least one payoff by turn 6) from 32.5% to 55%. Beyond that the tokens still arrive (10 bodies from 6 cards, 16 with Queen Allenal), Valiant Veteran is a static anthem needing no trigger, and kicked Strength of the Coalition x2 puts a counter on each creature with no creature needing to enter. Take Up the Shield x2 protects the payoff on the turn it matters - noting honestly that indestructible does not stop exile, and this cube's likeliest answers (Citizen's Arrest, Prayer of Binding, Leyline Binding) all exile. |
| gas-out | mitigation | The deck's answer to an empty hand is bodies already on the battlefield: 6 of the 23 nonland cards are two-for-ones or better (Resolute Reinforcements x2 and Argivian Cavalier x2 at two bodies each, Captain's Call x2 at three), and Queen Allenal of Ruadach x2 adds a body to every one of those events. From a genuinely empty hand, King Darien's activation manufactures a new Soldier every turn and Valiant Veteran's graveyard mode is a mass pump cast from exile. Anointed Peacekeeper also strips information and taxes the opponent's best card, which slows the refuel race. |
| raced | accepted | The cube's biggest threat class is evasion at 51 cards (20.7%), and this mainboard has one flier (Serra Redeemer) and two unconditional creature answers. Mitigating it means playing the pool's white fliers - Griffin Protector, Coalition Skyknight, Mesa Cavalier - in place of the token makers. Stated precisely, correcting the earlier draft per Challenger #10: those three are all printed power 2, so they ARE Redeemer-eligible and the objection is not the one the earlier record gave. The real cost is body count - each is ONE body where Resolute Reinforcements and Argivian Cavalier are two and Captain's Call is three, and the thesis pays out per body that enters, so swapping them in shrinks the trigger count that is the deck. The cost is therefore paid in the sideboard: Snarespinner x2, Griffin Protector, Bite Down x2 and Broken Wings x2 - 7 of 10 slots against the evasion class. |
| disruption-fizzle | mitigation | There is no single critical turn. The counters Serra Redeemer places are PERMANENT and are placed one creature at a time as bodies arrive, so interaction on any one turn removes one 3/3, not the plan. The deck's most explosive single turn - Captain's Call into a board with Redeemer and Queen Allenal - is ONE token-creation event producing four tokens, which causes FOUR separate Redeemer triggers (mechanism corrected per Challenger #7); a removal spell in response can at most kill the Redeemer before the spell resolves, and the four Soldiers still arrive under Valiant Veteran's anthem. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| King Darien XLVIII | CUT DURING THE GRILL, and the reason is the most important thing to know about building this archetype. Its 'Other creatures you control get +1/+1' is a static anthem, and Serra Redeemer checks power AS a creature enters - so alongside Valiant Veteran every 1/1 Soldier token entered at power 3 and stopped triggering the payoff entirely. King Darien alone also pushed Juniper Order Rootweaver x2, Argivian Cavalier x2 and Valiant Veteran out of range. Do not add a second anthem to this list. |
| Guardian of New Benalia | The natural use of the one free rare slot, and the Challenger argued for it: on a 10-to-16-token board, tapping a spare 1/1 to enlist buys scry 2 every combat, which is the deck's only card selection outside two Crystal Grottos. Declined because it is a printed 2/2 SOLDIER - under Valiant Veteran it enters at power 3 and is not Redeemer-eligible, which is exactly the trap that cost King Darien its slot. The free rare slot is deliberately left unspent; it is the cleanest place to iterate. |
| Heroic Charge | 'Creatures you control get +2/+1 until end of turn' is +12 or more on the six-body board this deck builds, at the same 4 mana as a kicked Strength of the Coalition's +6. It loses the slot because Strength leaves PERMANENT +1/+1 counters, which is the archetype, where Heroic Charge leaves nothing. Worth noting it is mono-white castable (the {1}{R} kicker is declined), so swapping one Strength for one Heroic Charge would also halve the deck's mono-green exposure. |
| Serra Paragon | Recasts a permanent of MV 3 or less from the graveyard each turn, and 15 of the 23 nonland cards qualify. Rejected with its sketch: at four mana it is a grind card in a list whose goldfish turn is 6. |
| Charismatic Vanguard | A 3/2 for {2}{W} with a repeatable mass pump. Printed power 3, so it is invisible to Serra Redeemer's trigger - cut for Anointed Peacekeeper, a 3/3 vigilance body at the same cost. |
| Wingmantle Chaplain | The only repeatable source of FLYING tokens in the pool, and every Bird is power 1 so Redeemer would make them 3/3 flyers. It needs Clockwork Drawbridge and other defenders to justify five mana, and defenders do not attack - the judge rejected the whole build for spending its clock assembling evasion it could not deploy in time. |
| Love Song of Night and Day | Chapter III puts a +1/+1 counter on each of up to two creatures and chapter II makes a flying Bird, but chapter I draws the OPPONENT two cards, and read ahead forces a choice between the Bird and the counters rather than giving both. |
| Temporary Lockdown | 'Exile each nonland permanent with mana value 2 or less'. Corrected count per Challenger #7: it exiles 5 of this deck's 23 nonland cards that are actually PERMANENTS (the other MV-2-or-less cards are instants), PLUS the entire token board, since tokens have mana value 0. Still firmly anti-synergistic. |
| Knight of Dawn’s Light | A {1}{W} 2/2 first striker with a repeatable '{1}{W}: this creature gets +1/+1' - a colour-reliable mana sink on a Redeemer-eligible body, which the flood plan could use. It loses its slot to cards that bring two bodies rather than one. |
| Argivian Phalanx | 'Affinity for creatures' makes its cost shrink with the width this deck maximizes - a {W} 4/4 vigilance on a five-creature board. Printed power 4, so it is invisible to the payoff, and it is one large body in a deck paid per small body. |
| Griffin Protector / Coalition Skyknight / Mesa Cavalier | The pool's white fliers and the answer to the accepted raced mode. All three are printed power 2 and therefore ARE Redeemer-eligible - the earlier draft dismissed them on a criterion that does not apply. The real cost is that each is one body where the cards they replace are two or three. Griffin Protector was promoted to the sideboard for exactly this reason. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.74   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.01 adj [MV 2.74 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  19.4%  prod  41.2%  gap -21.8pp  [OK]
  W  demand  80.6%  prod  82.4%  gap  -1.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Mainboard size            : 40 / 40
[PASS] Sideboard size            : 10 / 10
[PASS] All cards in cube pool    : 0 phantom names
[PASS] Copy limits (C/U max 2)   : 0 violations
[PASS] Copy limits (R/M max 1)   : 0 violations
[PASS] Max 5 rares/mythics total : 4 / 5  (Anointed Peacekeeper, Defiler of Faith, Serra Redeemer, Valiant Veteran)
[PASS] Colour usability (G/W)    : 0 unusable cards
[PASS] Splash cap                : no splash colours declared
```