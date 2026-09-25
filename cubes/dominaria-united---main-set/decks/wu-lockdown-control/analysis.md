---
deck_name: "wu-lockdown-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-11T19:21:16Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  8x Island
  7x Plains
  2x Idyllic Beachfront        WU dual (Land - Plains Island), enters tapped
```

### CREATURES (8)

```
CMC  Card                          Qty   Color  Role                              Rar
  3  Academy Wall                  x2    U      0/5 blocker + loot engine         C
  3  Anointed Peacekeeper          x1    W      3/3 body + hand disruption tax    R
  4  Serra Paragon                 x1    W      3/4 flier + rebuys MV<=3 perms    M
  4  Talas Lookout                 x1    U      3/2 flier, dies into selection    C
  5  Frostfist Strider             x1    U      4/4 ward-2, ETB taps + stuns      U
  5  Sphinx of Clear Skies         x1    U      5/5 flier ward-2, draws on hit    M
  7  Tolarian Terror               x1    U      Ward 5/5 finisher                 C
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                          Qty   Color  Role                              Rar
  2  Destroy Evil                  x1    W      Toughness-4+ creature OR enchant  C
  2  Essence Scatter               x2    U      Counter creature spell            C
  2  Impulse                       x2    U      Instant card selection            C
  2  Silver Scrutiny               x1    U      Scalable flash draw               R
  3  Ertai's Scorn                 x2    U      Hard counter, often discounted    U
  3  Stall for Time                x1    W      Fog-tempo cantrip                 C
  3  Tolarian Geyser               x1    U      Bounce + replaces itself          C
```

### OTHER SPELLS (5)

```
CMC  Card                          Qty   Color  Role                              Rar
  3  Citizen's Arrest              x2    W      Exile creature/planeswalker       C
  3  Temporary Lockdown            x1    W      One-sided sweeper (MV<=2)         R
  4  Prayer of Binding             x2    W      Flash exile any nonland permanent U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                Rar
Runic Shot                    x2    W      vs tapped attackers; kicked = scry 2   U
Artillery Blast               x2    W      vs aggro: instant 3 dmg, tapped only   C
Impede Momentum               x2    U      vs one huge threat (tap + 3 stun)      C
Negate                        x2    U      vs control, sagas, noncreature bombs   C
Djinn of the Fountain         x2    U      vs control: 4/4 flier that blinks out  U
```

## ANALYSIS

This is the deck to pick when the problem is *"my removal can't answer that."* It is the only one of the three builds that exiles **any** permanent type — creature, planeswalker, artifact, enchantment, Saga — and it does so at common and uncommon. Prayer of Binding has flash and hits anything nonland; Citizen's Arrest exiles a creature or planeswalker for 3; Destroy Evil's second mode kills an enchantment. Against a bomb rare or a Saga engine, this deck simply has answers the Dimir builds do not.

### Temporary Lockdown is fully one-sided here — that is not luck

Oracle: *"exile each nonland permanent with mana value 2 or less."* Every nonland permanent in this mainboard is **MV 3 or higher**. It exiles literally nothing of ours. (Tolarian Terror's printed MV is 7 — cost reduction lowers what you *pay*, not the card's mana value, so it is never in danger.) A 3-mana one-sided sweeper against any aggro start is exactly what a prison deck wants.

The one live interaction to know: **token creatures have MV 0.** This build deliberately runs *no* token-makers in the mainboard, which is why Lockdown is clean. It is also the reason **Tura Kennerüd, Skyknight was cut** — his 1/1 Soldier tokens would have been exiled by our own Lockdown, permanently (exiled tokens cease to exist and never come back).

### Serra Paragon rebuys exactly the right four cards

Oracle: *"cast a permanent spell with mana value 3 or less from your graveyard."* In this deck that is:

| Rebuyable (MV ≤ 3) | Not rebuyable |
|---|---|
| Citizen's Arrest ×2 | Prayer of Binding (MV 4) |
| Temporary Lockdown | Tolarian Terror (**graveyard MV is 7**, not the reduced cost) |
| Academy Wall ×2 | all 10 instants/sorceries (not permanents) |
| Anointed Peacekeeper | |
| lands, including Idyllic Beachfront | |

Recasting Temporary Lockdown or a Citizen's Arrest from the graveyard is a genuine engine. Be honest about the hit rate though — it's 6 of 22 other nonland cards, and those cards only reach the graveyard if the opponent destroys them first.

### The central tension you should know about before playing it

**"Lockdown" and "Tolarian Terror" pull in opposite directions.** Terror costs {6}{U} minus {1} per instant/sorcery **card in the graveyard** — but six of this deck's answers are *enchantments*, not spells that go to the yard. The mainboard therefore holds only **10 instants/sorceries**, versus 14 in both Dimir builds. Terror realistically costs ~5 mana here around turn 8, not the ~3–4 it costs in the UB decks.

The fix applied: **Terror is now a 1-of, not a 2-of.** A single turn-8 five-mana 5/5 with ward {2} is a fine top-end card. Drawing two seven-drops in a ten-spell deck is not. The freed slot went to Frostfist Strider ({3}{U}{U}, fixed cost, same ward {2}, and it taps + stuns a blocker on arrival).

### Clock

The original build had two evasive threats and a ground-bound Terror that any chump blocker walls forever. It now has **three fliers plus a ward-2 body**: Serra Paragon (3/4), Talas Lookout (3/2, replaces itself when it dies), Sphinx of Clear Skies (5/5 ward 2, and it *draws cards* on connect), and Frostfist Strider (4/4 ward 2). Sphinx is the single most important card in the deck — it is a Tolarian Terror that always costs 5, flies, and refills your hand, which patches the deck's two worst holes at once.

### Cards Considered but Excluded

**Rares/mythics cut against the 5-card cap:**

| Card | Why |
|---|---|
| **The Phasing of Zhalfir** | **Cut for cause, not for budget — this card is actively negative here.** Chapter III destroys all creatures *and gives each controller a 2/2 Phyrexian token per creature destroyed* — against a go-wide deck you pay 4 mana to turn their five 1/1s into five 2/2s. Worse, if you phase out their bomb with chapters I/II it is not on the battlefield for III, so it survives the wrath, and the saga is sacrificed after III, so it phases back in alive. It also kills all of your own win conditions. Do not put this back in. |
| **Stenn, Paranoid Partisan** | Genuinely tempting: name "enchantment" and Citizen's Arrest / Prayer of Binding / Temporary Lockdown all cost {1} less. A real prison-deck rare. It lost to Sphinx of Clear Skies only because the deck needed a *finisher* more than a discount. **First card in if you re-cap at 6 rares.** |
| **Leyline Binding** | Domain — costs {1} less per basic land type. With only 2 basic types it's a 4-mana flash exile, i.e. a strictly worse Prayer of Binding that eats a rare slot. |
| **Aether Channeler** | Flexible (bird token / bounce / draw) but a 2/1 body; outclassed by the cards above. |
| **Danitha, Benalia's Hope / Serra Redeemer / Defiler of Faith** | Real bodies, but no rare slot and none of them fly past a stalled board better than Sphinx. |
| **Adarkar Wastes** | The only untapped WU dual — and it's a **rare**, so it would eat 1 of 5 slots for a land. Not worth it. |

**Strong uncommons/commons a tier below the includes:**
- **Wingmantle Chaplain** — with 2 Academy Walls out, its ETB makes 3 flying Birds (it counts itself). A real defenders-matter payoff and the best "go tall on defense, win in the air" card in the pool. Cut only because its Bird tokens are MV 0 and die to our own Temporary Lockdown. **If you cut Lockdown, this is the best card to add.**
- **Founding the Third Path** — chapter II mills 4 (Terror fuel), chapter I free-casts an MV≤2 spell. Excellent, but it is MV 2, so our own Temporary Lockdown exiles it.
- **Raff, Weatherlight Stalwart**, **Soaring Drake**, **Griffin Protector**, **Coalition Skyknight** (a 4-mana 2/2 flier is a 10-turn clock — not a win condition), **Mesa Cavalier**.

**Deliberately excluded, and why:**
- **Crystal Grotto** — taps for *colorless*; colored mana costs an extra {1}, and it has no basic land type. In a deck with {W}{W}, {U}{U} and {2}{W}{U}{U} costs it is an anti-fixer.
- **Clockwork Drawbridge** (was in the sideboard) — it is **MV 1**, so our own Temporary Lockdown exiles it. Boarding it in against aggro means your sweeper eats your walls. Replaced with Artillery Blast, which at 2 basic land types (Idyllic Beachfront is `Land — Plains Island`, carrying both) deals **3 damage** at instant speed for {1}{W}.
- **The whole off-color-kicker minefield** — Rona's Vortex, Timely Interference, Joint Exploration, Pixie Illusionist and ~16 others cost only {U} or {1}{U} but carry a color identity outside WU because of their kickers. All illegal here.

**Sideboard considerations that didn't make the 10:** Coalition Skyknight, Wingmantle Chaplain, Soaring Drake, Destroy Evil (2nd copy — see below).

### Why only one Destroy Evil

Mode 1 destroys a creature with **toughness 4 or greater**. Across the cube's 153 unique creatures, only **47 (31%)** have toughness 4+ — it misses the entire aggro curve. It is an instant and it is modal (the enchantment mode matters in this cube), so one copy earns its slot. Two was greedy behind 2× Citizen's Arrest, 2× Prayer of Binding and Temporary Lockdown.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.26   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  60.6%  prod  58.8%  gap  +1.8pp  [OK]
  W  demand  39.4%  prod  52.9%  gap -13.5pp  [OK]
```

17 lands (42.5% of N=40), the Control band. This is the most demanding manabase of the three decks: **double-pip costs in both colors at the same curve point** — Citizen's Arrest {1}{W}{W} and Temporary Lockdown {1}{W}{W} both want turn 3, while Ertai's Scorn {1}{U}{U} wants the same turn. 9 white sources is the floor for a reliable turn-3 {W}{W}, and both duals enter tapped, which taxes exactly that turn. Keep this in mind on mulligans: a hand with one Plains and a tapped Beachfront does not cast Lockdown on 3.

## RESTRICTIONS COMPLIANCE

```
[PASS]  Commons/uncommons <= 2 copies       max observed: 2 (Essence Scatter, Impulse,
                                            Citizen's Arrest, Ertai's Scorn, Academy Wall,
                                            Prayer of Binding, Negate, Runic Shot,
                                            Impede Momentum, Artillery Blast,
                                            Djinn of the Fountain)
[PASS]  Rares/mythics <= 1 copy each        all 5 are singletons
[PASS]  Max 5 rares/mythics total (main+side)   EXACTLY 5/5:
                                            Temporary Lockdown (R), Silver Scrutiny (R),
                                            Anointed Peacekeeper (R), Serra Paragon (M),
                                            Sphinx of Clear Skies (M)
                                            Sideboard contains 0 rares.
[PASS]  All cards from cube mainboard       verified by exact name against working pool
[PASS]  Color identity within {W,U}         all 21 distinct nonbasic cards pass; every
                                            off-color-kicker card (CI leak) excluded
[PASS]  Deck size                           40 mainboard + 10 sideboard
```
