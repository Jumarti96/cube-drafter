---
deck_name: "rg-domain-aggro"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-07-11T02:23:23Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

# rg-domain-aggro — RG Domain Aggro

Low-curve red-green beatdown that uses the cube's typed dual taplands to make Domain creatures over-statted for their cost. Basics give Mountain+Forest; Haunted Mire, Sacred Peaks and Thran Portal add a third and fourth basic land type (domain 3+ is online by turn 3 in roughly 55–60% of games — a bonus, not a prerequisite), turning Nishoba Brawler into a 3/3+ trampler for two and Gaea's Might into +3/+3 or more for one mana. The deck aims to deal 20 by turns 5–7 through haste one-drops, fifteen two-drops' worth of pressure, and eight burn/pump spells.

## MAINBOARD (26 spells + 14 lands = 40)

### LANDS (14)

```
  4x Mountain
  4x Forest
  1x Karplusan Forest      Untapped RG dual (1 damage on colored tap)
  2x Wooded Ridgeline      Mountain Forest, enters tapped (fixing, no new type)
  1x Haunted Mire          Swamp Forest, enters tapped (3rd domain type)
  1x Sacred Peaks          Mountain Plains, enters tapped (4th domain type)
  1x Thran Portal          Any-TYPE land: taps ONLY for the chosen type's color, 1 life/tap.
                           Default Mountain/Forest; name an off-type only when the domain
                           point matters more than castable mana.
```

### CREATURES (16)

```
CMC  Card                       Qty   Color  Role                                      Rar
  1  Viashino Branchrider       x2    R      Haste 1-drop; kicker/pump scale late      C
  1  Phoenix Chick              x1    R      Evasive haste 1-drop; recurs on attack    U
  2  Nishoba Brawler            x2    G      Trampler, power = land types (2-3, occ 4) U
  2  Sunbathing Rootwalla       x2    G      2-drop with late +3/+3 to +5/+5 sink      C
  2  Yavimaya Iconoclast        x2    G      Trampler; kicked = hasty 4-power          U
  2  Radha's Firebrand          x1    R      Shuts off blockers; domain pump           R
  2  Sprouting Goblin           x2    R      Kicked: fetch TYPED land; late: sac-draw  U
  3  Squee, Dubious Monarch     x1    R      Hasty token-maker, recurs from yard       R
  4  Radha, Coalition Warlord   x2    GR     Pumps another attacker +3/+3+ when tapped U
  4  Rulik Mons, Warren Chief   x1    GR     Menace; free land or Goblin on attack     U
  5  Territorial Maro           x1    G      Top-end 6/6-8/8 (2x land types)           U
  X  Shivan Devastator          x1    R      Flexible X-cost hasty flier               M
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                       Qty   Color  Role                                      Rar
  1  Gaea's Might               x2    G      Domain pump: +2/+2 to +5/+5 for one mana  C
  2  Lightning Strike           x2    R      Burn: 3 damage to any target              C
  2  Bite Down                  x2    G      Fight removal via over-statted bodies     C
  2  Colossal Growth            x2    GR     Kicked: +4/+4, trample, haste — closer    C
```

*(No enchantments/artifacts/planeswalkers — OTHER SPELLS omitted.)*

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                          Rar
Broken Wings            x2    G      Artifacts, enchantments, fliers                  C
Smash to Dust           x2    R      Artifact / defender kill / 1-dmg token sweep     C
Snarespinner            x1    G      Cheap reach blocker vs flier decks               C
Tail Swipe              x2    G      1-mana fight vs creature decks                   U
Meria's Outrider        x2    R      Vs grindy decks: domain ETB burn + reach         C
Jaya's Firenado         x1    R      5 damage vs bomb creatures/planeswalkers         C
```

## ANALYSIS

**Slot allocation (Aggro, N=40).** Lands: 14 (35% of N=40) — top of the 30–35% aggro band; kept at 14 despite the audit's formula preferring 16 because the average MV is 2.15, there are fifteen 1–2 drops, and Sprouting Goblin/Rulik Mons generate extra land value. Modifiers: −0 cantrips, −0 producers, −0 MDFC — the cut below baseline is the archetype itself. Threats: 18 of 40 (45%) — low end of the 45–55% aggro band. Interaction: 4 of 40 (10%) — low end of 10–15%. Pump: 4 slots as the aggro finisher package. Projected Avg MV: 2.15.

**The grill changed this deck.** The Challenger flagged two 5-drops on 14 ramp-less lands (only ~41% chance of five lands by turn 5 on the play) and a one-card 3-slot as a curve defect. Fix applied: −1 Territorial Maro, +1 Phoenix Chick, which also raised the effective 1-drop count to three and improved color balance to a −0.4pp green gap.

**Thran Portal is not an any-color land.** It taps only for the color of the basic type you name, at 1 life per activation, and enters tapped once you control 3+ other lands. Name Mountain or Forest unless a specific domain payoff (Gaea's Might for exact lethal, Radha trigger) is worth a land that casts nothing.

**Domain expectations.** Realistic domain by turn 3 is 2–3 (3+ in ~55–60% of games); Sacred Peaks + Haunted Mire + a kicked Sprouting Goblin (which fetches any land *with a basic land type*, including duals) push toward 4. The deck does not need high domain to function — 18 aggressive creatures and 8 burn/pump spells win ordinary combat games at domain 2 — every extra type is pure rate: Nishoba +1/+0, Gaea's Might +1/+1, Radha +1/+1 on her trigger, Radha's Firebrand's activation cheaper.

**Key interactions.**
- Radha, Coalition Warlord triggers on becoming tapped — attacking counts. Every attack is a free +3/+3-ish pump on *another* creature; two Radhas on board can't both be legendary, so the second copy is redundancy, not a combo.
- Phoenix Chick returns from the graveyard whenever you attack with three or more creatures ({R}{R}) — a recurring source of flying damage vs grindy removal decks.
- Colossal Growth kicked on a Nishoba Brawler is usually 7+ trample damage with haste ruled out of blocking math by Radha's Firebrand.
- Squee recasts from the graveyard for {3}{R} + exiling four cards — sweepers don't beat him.

**Weaknesses.** Four always-tapped lands cost real tempo — sequence them turns 1–2 behind one-drops. The deck has no reach past Lightning Strike x2 once the board stalls; board in Meria's Outrider and Jaya's Firenado for grindier games. Fliers are a problem game 1 (only Snarespinner and Broken Wings answer them, both in the sideboard).

**Cards Considered but Excluded**

*Rares/mythics cut by the 5-card limit* (at 5/5: Karplusan Forest, Thran Portal, Radha's Firebrand, Squee, Shivan Devastator):
- Territorial Maro (2nd copy) — cut by the grill for curve reasons; it's an uncommon, so it can come back for a 2-drop if your meta is slow.
- Briar Hydra — 6 mana is above this deck's ceiling.
- Defiler of Instinct — 4-mana first-strike with red-permanent ping; strong but the rare slots were better spent on lands/1-drops.
- Ragefire Hellkite — 6-mana dragon; too slow.

*Strong uncommons/commons a tier below the chosen includes:*
- Balduvian Berserker — the pool's only aggro-profiled 3-drop (Enlist, death-burn); first swap in if you want a fatter curve — the Challenger rated it the alternative to Phoenix Chick.
- Twinferno — double-strike mode plus Gaea's Might is lethal-range math; considered over the 2nd Colossal Growth.
- Yavimaya Steelcrusher — Enlist body with artifact sac; matchup-dependent, lost to Sprouting Goblin's domain work.
- Flowstone Kavu — menace 3-drop; outclassed by the legendary 3-4 slot cards.
- Meria's Outrider (mainboard) — 5 MV is too high for the main; lives in the sideboard.
- Hexbane Tortoise / Barkweave Crusher — vanilla-ish enlist bodies; below the bar.

*Sideboard considerations that missed the cut:* Furious Bellow (trick + scry), Heroic Charge (RW — off-color kicker), Colossal Growth x2 already covers the go-tall plan.

*Non-blocking Challenger notes carried for future tuning:* artifact hate is slightly redundant at 4 overlapping answers; singleton Snarespinner is the weakest sideboard slot.

## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  14 / 16 recommended  [WARN]
Avg CMC:     2.15   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  56.7%  prod  57.1%  gap  -0.4pp  [OK]
  R  demand  43.3%  prod  57.1%  gap -13.8pp  [OK]
```

Notes: the WARN is land count 14 vs the formula's 16 — deliberate for an aggro deck at avg MV 2.15 (the formula is archetype-blind; the aggro reference band is 12–14 for N=40). Color balance passes with a −0.4pp green gap after the Phoenix Chick revision. Karplusan Forest and Thran Portal cost life to tap — fine in a deck applying pressure.

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: all 27 distinct non-basic names verified in working pool (Challenger check 1 + re-verified after revision)
[PASS] commons/uncommons at <= 2 copies each (recounted across both boards)
[PASS] rares/mythics at <= 1 copy each
[PASS] max 5 distinct rares/mythics across main+side: exactly 5/5
       (Karplusan Forest, Thran Portal, Radha's Firebrand, Squee Dubious Monarch, Shivan Devastator)
[PASS] no scryfall links in analysis.md
```
