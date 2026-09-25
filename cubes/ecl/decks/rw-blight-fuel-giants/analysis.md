---
deck_name: "rw-blight-fuel-giants"
cube_id: "ecl"
cube_slug: "ecl"
colors: "RW"
format: "40-card"
built_at: "2026-08-10T20:53:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
2x Eclipsed Realms      {C} always; any colour only for Giant spells/abilities (6 of 23 nonlands)
8x Mountain             
5x Plains               
2x Sacred Peaks         the pool's only free WR dual; enters tapped
```

### CREATURES (15)

```
CMC  Card                      Qty   Color  Role                                              Rar
  2  Burdened Stoneback        x2    W      Conversion body; counter -> indestructible        U
  2  Scuzzback Scrounger       x1    R      Free blight every turn + Treasure                 R
  2  Warren Torchmaster        x2    R      Free blight every turn + haste                    U
  3  Brambleback Brute         x2    R      Conversion body; counter -> can't block           C
  3  Chaos Spewer              x2    BR     5/4 body whose cost is blight 2                   C
  3  Moonlit Lamenter          x2    W      Conversion body; counter -> draw a card           U
  3  Sting-Slinger             x2    R      PAYOFF + blight source; 2 dmg drain               U
  5  Hovel Hurler              x2    WR     Conversion body; counter -> another gets flying   U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                      Qty   Color  Role                                              Rar
  1  Cinder Strike             x2    R      Removal; 4 dmg when blight 1 paid                 C
  3  Pyrrhic Strike            x2    W      Both modes when blight 2 paid (creature mode MV3+) U
  5  Soul Immolation           x1    R      One-sided sweeper + reach; blight X               M
```

### OTHER SPELLS (3)

```
CMC  Card                      Qty   Color  Role                                              Rar
  2  Lasting Tarfire           x2    R      PAYOFF; 2 dmg per end step a counter was PUT on   U
  2  Spiral into Solitude      x1    W      Neutralise, then blight 1 + sac to exile          C
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                                Rar
Bark of Doran             x1    W      vs ground stalls - blight leaves toughness intact      U
Hexing Squelcher          x1    R      vs the three blue counterspells in this pool           R
Keep Out                  x2    W      vs the 21-card enchantment class                       C
Adept Watershaper         x1    W      vs removal-heavy decks; your creatures tap to activate R
Crib Swap                 x1    W      vs a threat too big or resilient to burn               U
Protective Response       x2    W      vs a single large attacker or blocker                  U
Rooftop Percher           x2    C      vs the cube's 39-card graveyard class                  C
```

## ANALYSIS

### DECK IDENTITY

Red-white midrange that treats -1/-1 counters as a currency. **blight N** ("put N -1/-1 counters on a creature you control") is an *additional cost* the set attaches to cheap effects, and eight mainboard bodies read **"Remove a counter from this creature"** to fire an ability. So a counter is stored ammunition rather than a drawback: paying blight buys a discounted effect AND loads an activation, and every activation permanently grows the body back toward its printed size. Thirteen of 23 nonlands put counters on, eight convert them into cards, forced damage, evasion or protection, and Lasting Tarfire taxes the opponent 2 every time the loop turns.

### THE ECONOMY, AS COUNTS

| Half | Copies of 23 | Cards |
|---|---|---|
| Puts counters on (blight) | **13** | Cinder Strike x2, Scuzzback Scrounger, Warren Torchmaster x2, Spiral into Solitude, Sting-Slinger x2, Chaos Spewer x2, Pyrrhic Strike x2, Soul Immolation |
| Converts counters to value | **8** | Burdened Stoneback x2, Moonlit Lamenter x2, Brambleback Brute x2, Hovel Hurler x2 |
| Free per-turn blight (no card, no mana) | **3** | Scuzzback Scrounger, Warren Torchmaster x2 |

Those three free sources are what make Lasting Tarfire an unconditional clock rather than a conditional one. **Lasting Tarfire keys on *putting* a counter** — the conversion activations *remove* counters and do not trigger it — so the blight half feeds the payoff and the conversion half feeds the board. Both free sources fire on your own turn, so Tarfire x2 is 4 damage at **your** end step, not at both end steps in a round.

### THE PRICE TAG THAT ISN'T ONE

Cinder Strike is a one-mana 4-damage spell in this deck and a fair one everywhere else, because its "drawback" is a counter landing on a permanent that wanted one. The same inversion prices the whole toolbox: Pyrrhic Strike buys both halves of a modal 2-for-1 for blight 2, Spiral into Solitude exiles anything for blight 1, and Soul Immolation is a one-sided sweeper whose cost is X activations banked onto one Giant.

Two honest limits on that framing. **Soul Immolation puts all X counters on a single creature** — with the usual board its greatest toughness is 5, and X=5 kills the host, so X=4 is the practical ceiling if you want to keep it. And **Chaos Spewer is a 3/2 on an empty board**, not a 5/4: its blight 2 is mandatory and lands on itself unless you pay the {2} or already control a body with toughness 3 or more.

### MANA

Genuinely red-forward after the repair: strict R 13 / strict W 7 (65.0% red, matching the audit), plus 4 hybrid {R/W} pips on Hovel Hurler and 2 {B/R} pips on Chaos Spewer paid as red. Unconditional production is **R 10 of 17** and **W 7 of 17**. Nothing in the list costs {W}{W}, and the only double pip is Soul Immolation's {R}{R}.

Eclipsed Realms is weaker here than in a pure Giants list: naming Giant, its coloured mode is live on only **6 of 23** nonlands plus the activations of those same three Giant sources. Moonlit Lamenter is a Treefolk Cleric and Sting-Slinger a Goblin Warrior, so the land cannot pay for the draw or the drain — the two engine activations you most want to fire. Two of 17 lands are therefore colourless for roughly three quarters of the deck.

One tooling caveat: `deck_audit` credits Eclipsed Realms as producing all five colours unconditionally, so the audit block below reads R 64.7% / W 47.1% production. The honest figures are R 58.8% and W 41.2%.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:10  5:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 10.9: Cinder Strike@0.7, Cinder Strike@0.7, Pyrrhic Strike@0.7, Pyrrhic Strike@0.7, Spiral into Solitude@0.6, Soul Immolation@0.5) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 89% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 33%  T2 93%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Soul Immolation
  OK        single_large_threat: Spiral into Solitude, Pyrrhic Strike, Cinder Strike
  OK        noncreature_permanents: Pyrrhic Strike
  CONCEDED  stack: CORRECTED PREMISE: the pool does contain counterspells - Spell Snare {U}, Wild Unraveling {U}{U} and Glen Elendra Guardian {2}{U} - but all three are blue, and 0 of the R/W-castable pool cards say 'counter target'. R and W therefore cannot interact on the stack at any rate. Hexing Squelcher ('Spells you control can't be countered') is sideboarded as the answer, rather than maindecked against an opponent who may not be blue.
  CONCEDED  graveyard: Rooftop Percher exiles up to two cards from graveyards but is a 5-mana 3/3 with no counter interaction; it is sideboarded against the cube's 39-card graveyard class rather than occupying a mainboard slot that would otherwise convert counters into value.
```

Structural gate returned PASS on all four checks, so there are no WARN-tier deviations to answer.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Five repeatable mana sinks across 8 mainboard copies turn surplus lands into value: Moonlit Lamenter x2 ({1}{W}, Remove a counter: Draw a card) literally converts extra mana into cards, Burdened Stoneback x2 into indestructible, Brambleback Brute x2 into forced damage and Hovel Hurler x2 into evasion. Every activation also removes a -1/-1 counter, permanently growing the body. |
| screw | mitigation | 10 of 23 nonlands cost MV2 or less and 20 of 23 cost MV3 or less; goldfish returns 89% keepable with 3 lands by turn 3 in 91% of hands. Scuzzback Scrounger makes a Treasure every turn from turn 2 at no card cost. No card costs {W}{W}; the only double pip in the deck is Soul Immolation's {R}{R} against 10 red sources. |
| decapitation | mitigation | There is no single key piece. The conversion half is 8 copies across 4 cards and the blight half 13 copies across 8; removing any one leaves the loop running. The deck deliberately runs no singleton engine after Slumbering Walker was cut. |
| gas-out | mitigation | Moonlit Lamenter x2 converts a counter into a card at will and is the only card-advantage claim this deck makes. Warren Torchmaster x2 and Scuzzback Scrounger generate a free counter every turn at no card cost, so Lasting Tarfire x2 keeps dealing 4 per end step from an empty hand, and Torchmaster blighting Lamenter is a hand-independent loop: the counter becomes a card. The deck's resource is counters on the battlefield, not cards in hand. |
| raced | mitigation | Chaos Spewer x2 is a 5/4 for three mana - the best body rate available to R or W in this pool - though on an empty board it blocks as a 3/2 because its blight 2 lands on itself. Cinder Strike x2 deals 2 for one mana on an empty board and 4 once any creature is available to blight. Entry sizes, stated honestly: Moonlit Lamenter 1/4, Brambleback Brute 2/3, Hovel Hurler 4/5. Pyrrhic Strike is deliberately NOT counted here - its creature mode reads "mana value 3 or greater" and is dead against the cheap creatures that race. |
| disruption-fizzle | mitigation | There is no critical turn to interact with: the deck advances one activation per turn across 8 distributed conversion bodies rather than assembling a chain. R and W hold no counterspell in this pool (0 of 115 R/W-castable cards say "counter target"), so the relevant interaction is removal, and Burdened Stoneback's indestructible grant answers it - pre-committed in a main phase, per "Activate only as a sorcery". |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Slumbering Walker (rare) | Cut in repair. 'return target creature card with power 2 or less' was live on only 3 of 15 creature copies - counters do not reduce printed power on a card in the graveyard - so a rare slot bought a three-target reanimator. |
| Rhys, the Evermore (rare) | Cut at the sketch-judge stage. '{W}, {T}: Remove any number of counters' removes counters WITHOUT converting them; in an economy where a counter is stored ammunition it is the one activation that produces no card, damage or recursion. |
| Encumbered Reejerey (uncommon) | Cut in repair for failing the same test as Rhys: 'remove a -1/-1 counter from it' whenever it taps is mandatory removal into nothing but stats. It also enters as a 2/1, not the 5/4 its printed line suggests, and needs three tap events to reach full size. |
| Winnowing (rare) | Cut from the sideboard. Its one-sidedness depends on controlling a changeling, and this deck has ZERO changeling creatures - Crib Swap is an instant whose token goes to the OPPONENT. Choosing a Giant Warrior would kill 5 of 15 creature copies. |
| Bre of Clan Stoutarm (rare) | Its free-cast needs life gained that turn AND the exiled card's mana value at or below the life gained; this deck has no lifegain engine. It anchors Deck C. |
| Boldwyr Aggressor (uncommon) | Double strike is a race card; this deck's bodies spend their turns tapped for activations rather than attacking. It anchors Deck A. |
| Curious Colossus (mythic) | {5}{W}{W} at MV7 against 7 unconditional white sources on a base that is 65% red-demand. |
| Reaping Willow (uncommon) | The grill's suggested replacement reanimator - its MV<=3 gate would be live on 13 of 15 creature copies against Slumbering Walker's 3 - but it demands three white pips against 7 unconditional white sources. The recursion slot was dropped entirely rather than paid for in colour. |
| Bark of Doran (uncommon) | Sideboarded rather than maindecked. Blight lowers power and toughness equally, so the toughness-over-power gap is permanent and this would let 10 of 15 creature copies assign damage by toughness - but it does nothing on an empty board. |
| Burning Curiosity (common) | Real card advantage bought with a counter, and squarely on-thesis; cut only because MV3 is already 10 of 23 nonlands. |
| Sourbread Auntie (uncommon) | Three bodies for four mana with two counters loaded, but {2}{R}{R} is the deck's only other double-red alongside Soul Immolation. |
| Gristle Glutton (common) | Cut in repair. Its loot is card-neutral rather than card-positive, and Warren Torchmaster supplies a free blight without costing a tap the deck wants for Sting-Slinger. |
| Evershrike's Gift (uncommon) | A recursive aura refuelled with blight 2, but it grants +1/+0 and flying to a single body rather than converting counters into cards. |
| Feisty Spikeling / Prideful Feastling (common) | Both are changeling Giants that would widen Eclipsed Realms' live count, but neither converts a counter into value; the deck wants conversion bodies, not bodies. |
| Springleaf Drum (uncommon) | Taps a creature for mana, competing directly with the tap-based activations (Sting-Slinger) that are this deck's engine. |
| Personify (uncommon) | Its blink re-triggers 'enters with two -1/-1 counters', which is genuinely a benefit here, but it spends a card to reload a body the blight suite reloads for free. |
| Meanders Guide (uncommon) | Its recursion requires tapping another untapped Merfolk; this deck has none. |
| Gathering Stone (uncommon) | Naming Giant discounts Giant spells but not the activated abilities that are the real mana sink. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.74   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.15 adj [MV 2.74 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  65.0%  prod  64.7%  gap  +0.3pp  [OK]
  W  demand  35.0%  prod  47.1%  gap -12.1pp  [OK]
```


## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies each
[PASS] rares/mythics max 1 copy each
[PASS] max 5 rares+mythics across MB+SB - 4 used (Scuzzback Scrounger R, Soul Immolation M; Adept Watershaper R, Hexing Squelcher R in sideboard)
[PASS] every card drawn from the ecl cube mainboard; basics format-supplied
[PASS] core colours R/W, no splash; Chaos Spewer's {B/R} and Hovel Hurler's {R/W} pips all payable with red or white
[PASS] mainboard 40, sideboard 10
```
