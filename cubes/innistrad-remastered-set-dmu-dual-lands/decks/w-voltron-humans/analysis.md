---
deck_name: "w-voltron-humans"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "W"
format: "40-card"
built_at: "2026-07-08T20:31:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
16x Plains
```

### CREATURES (13)
```
CMC  Card                                     Qty   Color  Role                                       Rar
  1  Thraben Inspector                        x2    W      Card-advantage 1-drop, cheap carrier      C
  2  Metallic Mimic                           x1    C      Human counter-lord, buffs later carriers  R
  2  Cathar Commando                          x1    W      Flash Human body + artifact/ench removal  C
  2  Ambitious Farmhand // Seasoned Cathar     x2    W      Land-smoother, flips into lifelink threat U
  2  Twinblade Geist // Twinblade Invocation   x2    W      Double strike - doubles every payload     U
  2  Niblis of the Urn                        x2    W      Evasive body, taps a blocker on attack    U
  4  Gisela, the Broken Blade                 x1    W      Built-in keyword-soup bomb finisher       M
  4  Restoration Angel                        x1    W      Flash flying threat, dodges sorcery removal R
  6  Subjugator Angel                         x1    W      Taps all blockers, enables the alpha strike U
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                    Qty   Color  Role                                                  Rar
  1  Strength of Arms        x2    W      Combat trick; free 1/1 Human token if you control an Equipment C
  2  Valorous Stance          x2    W      Protects the loaded carrier or kills a blocker         U
```

### OTHER SPELLS (7)
```
CMC  Card                    Qty   Color  Role                                                  Rar
  1  Stitcher's Graft        x1    C      Signature +3/+3 payload equip (risk: sacs carrier if unattached) R
  2  Cobbled Wings           x2    C      Cheap evasion equip                                     C
  3  Butcher's Cleaver       x2    C      +3/+0 & Human lifelink finisher equip                   U
  4  Faith Unbroken          x2    W      Exile removal + pump aura, 2-for-1                      U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                                     Rar
Vanquish the Horde      x1    W      Emergency wrath vs. faster go-wide decks (note: also kills your own board) R
Soul-Guide Gryff        x2    W      GY-hate flier vs. Flashback/Disturb/reanimator decks          C
Cathar Commando         x1    W      2nd copy vs. opposing Equipment or problem enchantments       C
Fiend Hunter            x2    W      Extra removal body for grindy matchups (fragile: exile returns if it dies) U
Angelic Purge           x2    W      Catch-all permanent exile removal                             C
Blazing Torch           x2    C      Anti-Vampire/Zombie evasion + reach finisher                  C
```

## ANALYSIS

**Payload count and pip math.** 5 Equipment pieces (Stitcher's Graft, Cobbled Wings x2, Butcher's Cleaver x2) live in a 24-card nonland shell — 20.8% of spells. Strength of Arms only makes its 1/1 Human Soldier token "if you control an Equipment," so by turn 3-4, once one of the five is down, it functions as a de facto two-for-one every time it's cast. That token is itself Human, so it benefits from Butcher's Cleaver's lifelink clause and — if Metallic Mimic named Human first — enters with a bonus +1/+1 counter.

**Human density was the deck's real weak point, and it's a targeted fix, not a full solve.** Only 5 of 13 mainboard creatures are natively Human-typed (Thraben Inspector x2, Cathar Commando, Ambitious Farmhand x2). Metallic Mimic and Butcher's Cleaver's lifelink clause both key off "Human," so this was under-supported in the first draft. Strength of Arms was swapped in specifically to manufacture extra Human bodies on demand rather than relying on the native creature count alone — Twinblade Geist (Spirit), Niblis of the Urn (Spirit), and the three Angels are excellent Voltron carriers but don't feed the tribal payoffs.

**Self-grill revision.** The original build ran Gryff's Boon and Bound by Moonsilver in place of Strength of Arms x2. Both were cut on Challenger review: Gryff's Boon was redundant evasion next to Cobbled Wings at the same mana cost, and Bound by Moonsilver was flagged by both agents as the one non-proactive card in an otherwise all-in Voltron shell. The swap keeps interaction density roughly flat (Faith Unbroken x2 + Valorous Stance x2 + Cathar Commando still form the core removal/protection suite) while directly answering the Human-count critique at zero rarity-budget cost.

**Fragility to flag in play.** Stitcher's Graft sacrifices its carrier the moment it becomes unattached by any means other than the creature dying normally — don't let it ride on a creature you might want to blink or bounce. Faith Unbroken returns the exiled opposing creature if its host dies, so it's a real 2-for-1 risk against unconditional removal; Valorous Stance's indestructible mode is the direct answer to that scenario and should be held up when Faith Unbroken is your only threat on board.

**Curve note.** Equip costs (1/1/2/3) and aura recursion costs aren't reflected in average CMC (2.38) — turning on Butcher's Cleaver or Stitcher's Graft the same turn you cast the creature costs more total mana than the curve number suggests. 16 lands is the audit's exact recommendation for this curve; there's little margin to skimp further.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget** (used: Stitcher's Graft, Metallic Mimic, Gisela the Broken Blade, Restoration Angel, Vanquish the Horde):
- **Odric, Lunarch Marshal** — arguably the single best payoff for this exact shell (shares every keyword any one creature has across the team each combat: flying, lifelink, first strike, double strike all spread for free). Left out only because the rare slot was already spent; the strongest swap-in if you drop Subjugator Angel or Vanquish the Horde.
- **Thalia, Heretic Cathar** — efficient 3/2 first strike Human that taxes opposing creatures/lands into the battlefield tapped. Strong aggressive body, lost out to Restoration Angel's protection utility.
- **Wedding Announcement // Wedding Festivity**, **Cathars' Crusade** — both build toward a go-wide token plan (the sub-archetype not chosen) rather than Voltron.
- **Bruna, the Fading Light**, **Voice of the Blessed**, **Hopeful Initiate** — Bruna's upside is a meld with Gisela that's too narrow for a 40-card deck; Voice of the Blessed and Hopeful Initiate both want counters/lifegain density this build doesn't generate.

**Uncommons/commons a tier below the chosen includes:**
- **Neglected Heirloom // Ashmouth Blade** — equip-1 that flips to +3/+3 first strike specifically when the equipped creature transforms; combos with Ambitious Farmhand's Coven flip, but Coven (3 different powers) is a clunky condition to guarantee.
- **Harvest Hand // Scrounged Scythe** — dies into a Human-menace-granting equipment; resilient and on-theme, first alternate if you want a 3rd copy of the equipment package over Faith Unbroken's second copy.
- **Demonmail Hauberk** — big +4/+2 but equip cost is "sacrifice a creature," too harsh for a 13-creature deck.
- **Mentor of the Meek** — the deck's only card-advantage gap; if games go long and flood on lands, this is the first card-draw plan to bring in.
- **Slayer of the Wicked**, **Mausoleum Guard**, **Intangible Virtue**, **Cathar's Call**, **Gather the Townsfolk**, **Crusader of Odric**, **Dauntless Cathar** — all solid but built for the Go-Wide Tokens sub-archetype, not this one.
- **Avacynian Priest**, **Drogskol Shieldmate**, **Guardian of Pilgrims**, **Apothecary Geist**, **Lunarch Veteran // Luminous Phantom** — fine bodies, but none carry equipment/auras meaningfully better than what's in the 40.

**Sideboard-consideration cards (didn't make the 10):**
- **Harvest Hand // Scrounged Scythe** (again) — would be the first flex swap into the sideboard if you want more anti-removal resilience.
- **Slayer of the Wicked** — bring in vs. Vampire/Werewolf/Zombie tribal decks specifically.
- **Guardian of Pilgrims**, **Drogskol Shieldmate** — combat-trick-adjacent bodies, cuttable for narrower hate if your local meta skews a specific direction.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS --------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.38   Ramp cards: 0

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each: all 16 unique common/uncommon cards checked, all at or under cap
[PASS] Rares/mythics <= 1 copy each: Stitcher's Graft, Metallic Mimic, Gisela the Broken Blade, Restoration Angel, Vanquish the Horde -- each 1 copy
[PASS] Max 5 rares/mythics total across mainboard+sideboard: exactly 5 (4 main + 1 sideboard)
[PASS] Cube membership: all 50 cards verified against working pool by exact name (Proposer + Challenger independent checks)
[PASS] Color identity: every nonland card is W or colorless -- no off-color cards, no splash needed
```
