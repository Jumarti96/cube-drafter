---
deck_name: "ur-changeling-elemental-artillery"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UR"
format: "40-card"
built_at: "2026-08-11T04:39:38Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x2   Island                     basic
  x11  Mountain                   basic
  x2   Evolving Wilds             fetches a basic, enters tapped
  x1   Molten Tributary           RU dual, enters tapped
  x1   Steam Vents                RU dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                       Qty  Col  Role                               Rar
  1  Soulbright Seeker          x2   R    threat                             U
  2  Flame-Chain Mauler         x1   R    threat                             C
  2  Flamebraider               x2   R    engine                             U
  3  Changeling Wayfinder       x1   C    engine                             C
  3  Enraged Flamecaster        x1   R    payoff                             C
  3  Flaring Cinder             x2   UR   threat                             C
  3  Rimekin Recluse            x1   U    enabler                            U
  3  Sizzling Changeling        x2   R    threat                             U
  4  Champion of the Path       x1   R    payoff                             R
  4  Twinflame Travelers        x2   UR   payoff                             U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                       Qty  Col  Role                               Rar
  2  Sear                       x2   R    interaction                        U
  3  Tweeze                     x1   R    interaction                        C
  4  Kindle the Inner Flame     x2   R    enabler                            U
  5  Ashling's Command          x1   UR   payoff                             R
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty  Col  Role                               Rar
  3  Firdoch Core               x1   C    engine                             C
  5  Collective Inferno         x1   R    payoff                             R
```

## SIDEBOARD (10)

```
Card                       Qty  Col  Rar  Role / When to board in
Giantfall                  x2   R    U   vs artifact decks (11 artifacts in this cube) - 'Destroy target artifact' on one mode, and on the other 'Target creature you control deals damage equal to its power to target creature an opponent controls', which is a 7-damage fight with Champion of the Path on board
Eclipsed Flamekin          x2   UR   U   vs aggro, and in games where the manabase needs help - a 1/4 blocker whose ETB digs four cards deep for an Elemental, Island or Mountain
Feed the Flames            x2   R    C   vs high-toughness and recursive creatures - 33 of the cube's 168 creature cards have toughness 5 or greater and therefore survive Sear's 4 damage; Feed the Flames' 5 damage covers 19 of those 33, and its 'If that creature would die this turn, exile it instead' clause also answers the cube's 39-card graveyard-recursion suite at the point of death
Temporal Cleansing         x2   U    C   vs anything this deck cannot burn - 'Convoke ~ The owner of target nonland permanent puts it into their library second from the top or on the bottom' answers planeswalkers, enchantments (21 in this cube) and indestructible or oversized creatures alike, and the Elemental board convokes it
Rooftop Percher            x2   C    C   vs graveyard/recursion decks (39 graveyard-interaction cards in this cube, 15% density) - and it is a changeling, so it is an Elemental for Champion of the Path even while it hates
```

## ANALYSIS

### DECK IDENTITY

A U/R deck that turns creatures into burn spells. Champion of the Path reads 'Whenever another Elemental you control enters, it deals damage equal to its power to each opponent' - and every one of the 14 other creature cards in this list is an Elemental, so every body it plays is also an unblockable ping. Changelings are what makes the archetype universal rather than tribal: a changeling is every creature type at once, so Sizzling Changeling, Changeling Wayfinder and Firdoch Core are Elementals for the engine while also paying any behold cost. On top of that base sit two multipliers - Twinflame Travelers makes each of those triggers fire twice, and Collective Inferno naming Elemental doubles the damage - and two manufacturers, Kindle the Inner Flame and Ashling's Command, which copy an Elemental already on board to buy an extra trigger at instant or sorcery speed. Flamebraider's Elemental-restricted mana funds all of it.

### THE ARITHMETIC OF THE KILL

Champion of the Path is the whole deck: *"Whenever another Elemental you control enters, it deals damage equal to its power to each opponent."* **All 14 of the other creature cards in this mainboard are Elementals** — eleven by printed subtype, and Sizzling Changeling ×2 and Changeling Wayfinder because a changeling is every creature type at once. So every creature this deck casts is also a burn spell that no blocker can stop.

The multipliers stack, and they stack in a specific order:

| Board state | A Flaring Cinder (3 power) entering deals |
|---|---|
| Champion of the Path alone | 3 |
| + Twinflame Travelers (*"triggers an additional time"*) | 6 |
| + Collective Inferno naming Elemental (*"Double all damage"*) | 12 |

Twinflame Travelers doubles the *trigger*; Collective Inferno doubles the *damage*. They multiply rather than add, which is why the judge picked this build over the two that carried only one of them.

### THE CHANGELING HONESTY CHECK

Only **4 of the 23 nonland cards** here are changelings — Sizzling Changeling ×2, Changeling Wayfinder, Firdoch Core. That is the thinnest changeling count of the four builds in this series, and it should be stated plainly rather than dressed up. The archetype still belongs in U/R for a different reason: changelings are *universal* Elementals, not *numerous* ones. U/R supplies 25 printed Elemental creature cards, so the type-matters engine is fully fed with or without them. What the changelings uniquely do here is pay costs no other card can pay in every direction at once — Champion of the Path's "behold an Elemental", Kindle the Inner Flame's "Behold three Elementals", and any other tribe's behold if the deck ever splashes.

One trap worth recording: **Firdoch Core triggers Champion of the Path but deals 0 damage.** It is a changeling, so it is an Elemental, so entering satisfies the trigger — but it is a noncreature artifact with no power, and the trigger deals damage *equal to its power*. It earns its slot as fixing, not as ammunition, unless `{4}` has animated it into a 4/4 first.

### WHAT FLAMEBRAIDER ACTUALLY UNLOCKS

The cube dossier's ritual probe reports **0 rituals** in this cube, and its own caveat warns that a 0-match proves nothing. Flamebraider is the counter-example: *"{T}: Add two mana in any combination of colors. Spend this mana only to cast Elemental spells or activate abilities of Elemental sources."* A two-mana permanent that taps for **two** mana of **any** colours is a ritual and a fixer in one — and its restriction costs almost nothing here, because **19 of the 23 nonland cards are Elemental-typed**. Only Sear ×2, Tweeze and Collective Inferno fall outside it. This is what lets a deck with 13 red and 4 blue coloured sources reliably cast `{2}{U}{R}` on turn four.

### WHY THERE ARE ONLY THREE INTERACTION SLOTS

Every slot spent on an answer is a slot not spent on an Elemental, and every Elemental is a damage source whose output scales with its *power*. That is a real, uncomfortable trade — this deck is genuinely soft to a fast start, which is why `raced` is recorded as an **accepted** failure mode rather than a mitigated one. Sear and Tweeze stay because they are the two that can be pointed at either a blocker or the opponent's face; Tweeze's *"deals 3 damage to any target"* is a burn spell wearing a removal spell's clothes.

### THE ONE-DROP CORRECTION

The first version of this list had no one-drops at all, and the goldfish check duly reported a **0% turn-1 play rate**. The Phase 9 grill found Soulbright Seeker — a `{R}` 2/1 Elemental whose behold is paid by any of the 19 Elemental cards — and it went in, taking the turn-1 play rate to **35%** and dropping average mana value from 3.13 to 3.00. Its second ability is a genuine flood outlet that also rituals: *"{R}: Target creature you control gains trample until end of turn. If this is the third time this ability has resolved this turn, add {R}{R}{R}{R}"* — three activations cost `{R}{R}{R}` and return `{R}{R}{R}{R}`, a net gain of one red mana plus trample on the whole board.

### MANA

19 red pips against 4 blue. The blue is not decorative — Twinflame Travelers is the trigger doubler and it costs `{2}{U}{R}` — but it is thin enough that the deck leans on Flamebraider and Firdoch Core to produce it rather than on Islands. Steam Vents was added in Phase 9 after the grill correctly pointed out that the rare budget had two unused slots; it is the pair's only dual that can enter untapped.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:2  2:5  3:9  4:5  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.2: Champion of the Path@0.8, Twinflame Travelers@0.6, Twinflame Travelers@0.6, Collective Inferno@0.7, Ashling's Command@0.9, Enraged Flamecaster@0.6) → p=0.76 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 13.6: Kindle the Inner Flame@0.8, Kindle the Inner Flame@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 35%  T2 84%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Ashling's Command
  OK        single_large_threat: Sear, Tweeze
  CONCEDED  noncreature_permanents: The 3 mainboard interaction slots are all burn, which cannot target an artifact or enchantment. Maindecking an answer would cost an Elemental body, and every Elemental body is also a Champion of the Path damage trigger - the deck's only clock. Giantfall x2 and Temporal Cleansing x2 are sideboarded for the matchups where it matters.
  CONCEDED  stack: No counterspell is maindecked. This deck is the beatdown and holding up mana on turns 3-5 costs a turn of Elemental deployment, which is a turn of damage; Temporal Cleansing in the sideboard answers the permanent after it resolves instead.
  CONCEDED  graveyard: Rooftop Percher x2 is sideboarded rather than maindecked: at 5 mana it sits above a curve whose kill turn is 6, and its 3 power is a smaller Champion of the Path trigger than the 4-drops it would displace.
```

- No WARN-tier flags were raised. The goldfish T1 play rate is 35% after Soulbright Seeker x2 was added in Phase 9 (it was 0% before, when the list had no one-drops). Curve now reads 1:2 2:5 3:9 4:5 5:2 and returned PASS for aggro.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks need no extra cards: Flame-Chain Mauler's '{1}{R}: This creature gets +1/+0 and gains menace until end of turn' converts every surplus land into evasive damage; Firdoch Core's '{4}: This artifact becomes a 4/4 artifact creature until end of turn' turns the mana rock into an attacker (and, once animated, into a 4-power Champion of the Path trigger if it is re-entered); and Kindle the Inner Flame's 'Flashback-{1}{R}, Behold three Elementals' is a second casting of a card already spent. Evolving Wilds x2 also thins two lands out of the library. |
| screw | mitigation | Flamebraider is the key card here: at {1}{R} it taps for TWO mana, so a two-land hand that plays it on turn 2 has four mana available on turn 3 for the Elemental half of the deck - 19 of the 23 nonland cards. Changeling Wayfinder fetches a basic to hand, Evolving Wilds x2 fixes and thins, and 6 of the 23 nonland cards cost two. The goldfish check measured 86% keepable hands and 88% three-lands-by-turn-3 over 1000 hands. |
| decapitation | mitigation | Champion of the Path is a single copy and is the deck's namesake, so it will be answered on sight. Three things survive that: 'When this creature leaves the battlefield, return the exiled card to its owner's hand' refunds the card its behold cost exiled, so answering it is not a two-for-one; Enraged Flamecaster x2 is an independent non-combat damage source that does not reference Champion of the Path at all; and Collective Inferno naming Elemental doubles the COMBAT damage of all 15 creature cards, so the board keeps a doubled clock with no Champion on the battlefield. |
| gas-out | mitigation | This deck refuels off cards it was already casting. Sizzling Changeling x2 'When this creature dies, exile the top card of your library. Until the end of your next turn, you may play that card' turns every trade into a card; Flaring Cinder x2 loots on entry and on every MV4+ cast; Tweeze loots after dealing its damage; Kindle the Inner Flame x2 is castable a second time from the graveyard for {1}{R}; and Ashling's Command's 'Target player draws two cards' is one of the two modes it always gets to choose. |
| raced | accepted | Against the cube's fastest clocks this deck is behind on the ground before turn 4: it has no one-drops, only 6 of 23 nonland cards cost two, and its 3 interaction slots are burn that must choose between killing a creature and going to the face. Mitigating this would mean maindecking cheap blockers such as Eclipsed Flamekin, and every slot spent on a 1/4 that does not attack is a slot not spent on an Elemental whose power is the size of a Champion of the Path trigger - the deck's entire damage output scales with the power of the bodies it plays, so trading power for toughness directly shrinks the kill. Eclipsed Flamekin x2 is in the sideboard precisely for the matchups where that trade is correct. |
| disruption-fizzle | mitigation | The critical turn is resolving Champion of the Path or Collective Inferno into an existing board. Two cards let that turn be retried rather than lost: Kindle the Inner Flame is castable again from the graveyard for '{1}{R}, Behold three Elementals', which 19 of the 23 nonland cards can pay; and Ashling's Command is an INSTANT that chooses two of four modes, so it can be held up during the opponent's turn and still produce an Elemental copy (and therefore a Champion trigger) after their interaction has been spent. Collective Inferno's Convoke also means the critical turn can be assembled with less open mana than its printed cost suggests. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Explosive Prodigy | UNCOMMON. 'Vivid - When this creature enters, it deals X damage to target creature an opponent controls, where X is the number of colors among permanents you control' - a 2-drop Elemental that is also removal, and its ETB would be doubled by Twinflame Travelers. Excluded because X is the COLOUR count, which in a two-colour deck is 2, and its 1 power is the smallest Champion of the Path trigger in the pool. |
| Tanufel Rimespeaker | UNCOMMON. 'Whenever you cast a spell with mana value 4 or greater, draw a card' - keyed to the same condition as Enraged Flamecaster, which is live on only 7 of the 23 nonland cards, and its 2 power is a small trigger. |
| Kulrath Mystic | COMMON. 'Whenever you cast a spell with mana value 4 or greater, this creature gets +2/+0 and gains vigilance' - same 7-of-23 condition, and its payoff is combat stats, which Collective Inferno's doubling reaches only through combat rather than through the trigger damage this deck is built on. |
| Ashling, Rekindled // Ashling, Rimebound | RARE. The back face adds two mana usable only on spells of mana value 4 or greater, which is exactly this deck's top end - but it is a transforming card with no printed mana_cost, which breaks the pip-demand math the mana audit runs on. |
| Spinerock Tyrant | MYTHIC. A 6/6 flier with wither for 5 that copies single-target instants and sorceries - but this list runs only 3 instants/sorceries that target (Sear x2, Tweeze), so the copy clause is live on 3 of 23 nonland cards, and it would consume a rare slot the multipliers need. |
| Soul Immolation | MYTHIC. 'blight X ~ deals X damage to each opponent and each creature they control' is real reach, but X is capped by the greatest toughness among my creatures, and this deck's creatures are 2/2s and 3/2s - X would typically be 2 or 3 for five mana. |
| Goliath Daydreamer | RARE. 'Whenever you cast an instant or sorcery spell from your hand, exile it with a dream counter... Whenever this creature attacks, you may cast a spell from among cards you own in exile with dream counters without paying its mana cost' - a genuine engine, but it banks only instants and sorceries and this list runs 6 of 23 nonland cards in those types. |
| Lavaleaper | RARE. 'All creatures have haste' and a symmetric basic-land mana doubler. Haste does nothing for a damage engine that triggers on ENTERING rather than on attacking, and the mana clause helps the opponent equally. |
| Hexing Squelcher | RARE. 'Spells you control can't be countered ~ Other creatures you control have Ward-Pay 2 life' protects the engine, but it is a 2/2 for two that adds no damage, and the rare slots are committed to the two multipliers plus the engine. |
| Rimefire Torque | RARE. 'Whenever a permanent you control of the chosen type enters, put a charge counter ~ Remove three charge counters: copy your next instant or sorcery' - naming Elemental the counters accrue fast, but the payoff copies instants and sorceries and only 6 of 23 nonland cards are those types. |
| Sunderflock | RARE. 'This spell costs {X} less to cast, where X is the greatest mana value among Elementals you control ~ return all non-Elemental creatures to their owners' hands' is a genuinely one-sided sweeper for an all-Elemental deck, but at 9 printed mana it needs a 5-drop already on board to be castable on turn 6. |
| Omni-Changeling | UNCOMMON, a tier below the includes and the closest cut. 'Convoke ~ You may have this creature enter as a copy of any creature on the battlefield, except it has changeling' entering as a copy of Champion of the Path is a 7-power Elemental entering, which the original sees for 7 damage. It lost its slot because at {3}{U}{U} it demands two blue pips out of only 6 blue sources, and it is a 0/0 with nothing to copy on an empty board. |
| Kulrath Zealot | COMMON. A 6/5 Elemental whose entry is 6 damage under Champion of the Path and which can be discarded for a basic land - the single biggest ping available. Cut for curve: at 6 mana it lands after the turn-6 kill window, and the judge specifically flagged its 'impulse draw' text as not supporting a resilience role. |
| Flamekin Gildweaver | COMMON. A 4/3 trample Elemental that makes a Treasure - a 4-damage ping plus ramp. It lost to Flaring Cinder and Sizzling Changeling on cost: at 4 mana it competes directly with Champion of the Path and Twinflame Travelers, the two cards that must land on curve. |
| Eclipsed Flamekin | UNCOMMON. 1/4 body, ETB digs four for an Elemental, Island or Mountain. Moved to the sideboard: its 1 power is the smallest Champion of the Path trigger in the pool, so it is a fixing and blocking card rather than ammunition. |
| Squawkroaster | UNCOMMON. Double strike and 'power equal to the number of colors among permanents you control' - in a two-colour deck that is a 2/4 double striker, so its Champion of the Path trigger is 2. |
| Enraged Flamecaster's alternative, Kulrath Mystic | COMMON. 'Whenever you cast a spell with mana value 4 or greater, this creature gets +2/+0 and gains vigilance' - the same 7-of-23 trigger condition as Enraged Flamecaster but the payoff is combat stats rather than face damage, which does not compose with Collective Inferno's doubling of non-combat damage. |
| Boulder Dash | UNCOMMON. 'deals 2 damage to any target and 1 damage to any other target' is an efficient two-for-one, but Sear's 4 damage kills a materially larger share of the cube's creatures for the same two mana. |
| Cinder Strike | COMMON. A {R} sorcery for 2 damage, or 4 if blight 1 is paid - but blighting means putting a -1/-1 counter on my own Elemental, which shrinks the power that Champion of the Path converts into damage. |
| Stalactite Dagger | COMMON. 'create a 1/1 colorless Shapeshifter creature token with changeling ~ Equipped creature gets +1/+1 and is all creature types' makes a 1-power Elemental entry and can convert a non-Elemental into one - but every creature in this list is already an Elemental, so the type-granting clause is live on 0 of the 15 creature cards. |
| Gathering Stone | UNCOMMON. Naming Elemental it would discount 19 of the 23 nonland cards - the highest hit rate of any cost reducer across all four builds - but at 4 mana with no board impact it costs exactly the turn that Champion of the Path or Twinflame Travelers wants. The strongest swap-in if this list is retuned slower. |
| Eclipsed Realms | UNCOMMON land. Naming Elemental it produces any colour for 19 of the 23 nonland cards, which is a better hit rate than in any other build here; it was cut only because 15 of the 17 lands already produce red and the deck's blue requirement is a single pip on 4 cards. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.33 adj [MV 3.0 vs 2.5, 6 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  82.6%  prod  76.5%  gap  +6.1pp  [OK]
  U  demand  17.4%  prod  23.5%  gap  -6.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base                   cube_mainboard (ecl)
[PASS] copies                 All commons/uncommons at or under 2 copies; all rares at 1. Basics (Mountain x11, Island x2) exempt as format-supplied.
[PASS] rare_mythic_cap        4 of the allowed 5 used: Champion of the Path, Collective Inferno, Ashling's Command (mainboard) and Steam Vents (mainboard land, added in Phase 9). The sideboard is entirely common/uncommon. One slot left unused.
[PASS] colour                 Every nonland card is castable in U/R; effective_cost.best_mode returned a usable mode for all 20 distinct nonland names across mainboard and sideboard.
[PASS] splash                 None declared; splash_colors = [], splash_candidates = [].
```
