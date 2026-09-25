---
deck_name: "rw-double-strike-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WR"
format: "40-card"
built_at: "2026-08-28T02:17:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  9x Plains                                   basic, untapped
  5x Mountain                                 basic, untapped
  2x Sacred Peaks                             RW dual, enters tapped
```

### CREATURES (11)

```
CMC  Card                                     Qty  Color  Role                        Rar
  1  Thraben Inspector                        x2   W      threat-host                 C
  1  Village Messenger // Moonrise Intruder   x1   C      threat-host                 C
  2  Cathar Commando                          x2   W      threat-host                 C
  2  Lightning Mauler                         x2   R      threat-host                 U
  2  Niblis of the Urn                        x1   W      threat-host                 U
  2  Twinblade Geist // Twinblade Invocation  x2   C      payoff                      U
  3  Thalia, Heretic Cathar                   x1   W      threat-host                 R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                                     Qty  Color  Role                        Rar
  1  Lightning Axe                            x1   R      interaction-removal         U
  2  Valorous Stance                          x2   W      interaction-protection      U
  3  Angelfire Ignition                       x1   RW     engine-attachment           R
  3  Uncaged Fury                             x2   R      engine-multiplier           U
```

### OTHER SPELLS (7)

```
CMC  Card                                     Qty  Color  Role                        Rar
  1  Gryff's Boon                             x2   W      engine-attachment           U
  1  Stitcher's Graft                         x1   C      engine-attachment           R
  2  Lunarch Mantle                           x1   W      engine-attachment           C
  3  Cathar's Call                            x1   W      engine-attachment           U
  4  Blood Mist                               x1   R      engine-multiplier           U
  4  Faith Unbroken                           x1   W      interaction-removal         U
```

## SIDEBOARD (10)

```
Card                                     Qty  Color  Role / When to board in     Rar
Ancestral Anger                          x1   R      flex-trample                C
Abrade                                   x2   R      hate-artifact               U
Angelic Purge                            x1   W      hate-noncreature-permanent  C
Bound by Moonsilver                      x1   W      hate-single-large-threat    C
Fiery Temper                             x2   R      removal-reach               U
Savage Alliance                          x1   R      hate-wide-boards            U
Slayer of the Wicked                     x1   W      hate-tribal-creatures       U
Soul-Guide Gryff                         x1   W      hate-graveyard              C
```

## ANALYSIS

### DECK IDENTITY

A WR aggro Voltron deck that wins by attaching cheap flat-pump Auras and Equipment to a disposable early body and then multiplying that body's damage with double strike. The attachment package is the win condition, not support for it: nine of twenty-four nonland slots are pump, evasion or double-strike grants, against eleven deliberately cheap hosts whose only job is to be alive and legal to enchant on turn two or three, backed by Cathar's Call manufacturing a free 1/1 Human host every end step. White supplies the hosts, the Auras and the protection; red supplies the double-strike multipliers and the removal that clears a blocker on the turn the doubler is active.

This deck is the most explosive of the four Voltron builds in this cube, and the shape judge
picked it for one specific reason: it is the only build that buys **attachment redundancy**. Nine of twenty-four nonland
slots are pump, evasion or double-strike grants against eleven deliberately cheap hosts, so the deck draws both halves of
its combination inside the first five turns as a matter of course rather than as a lucky singleton collision.

### The damage math

Double strike does not add damage, it multiplies it. That makes flat pump worth roughly twice its printed value here.

| Host | Base | + Stitcher's Graft (+3/+3) | Doubled |
|---|---|---|---|
| Cathar Commando | 3/1 | 6/4 | **12** |
| Twinblade Geist | 2/2 | 5/5 | **10** (native double strike, no multiplier needed) |
| Lightning Mauler | 2/1 | 5/4 | **10** |
| Thalia, Heretic Cathar | 3/2 | 6/5 | **12** |

Against a 20-life opponent, one connection from turn 4 is between half and two-thirds of the game. That is the whole plan.

### Why red, specifically

White supplies the hosts and the Auras; red supplies the multipliers. There are exactly three double-strike sources in
this entire 300-card cube outside of white's own Twinblade Geist, and all three are red: Blood Mist, Uncaged Fury, and
Kruin Outlaw's back face. Blood Mist is the one that changes the character of the deck rather than a single turn --
"At the beginning of combat on your turn, target creature you control gains double strike until end of turn" is not a
trick, it is a permanent tax on every block the opponent makes for the rest of the game.

### The interaction slot is doing double duty

The four interaction cards were chosen so that none of them is dead when there is nothing to interact with:

- **Angelfire Ignition** is nominally protection, but its counters are permanent and its trample is what stops a chump
  block from blanking a double-striker. It is bucketed as an enabler for exactly that reason, and it has flashback.
- **Faith Unbroken** is a removal spell that is also an Aura -- it exiles a blocker AND gives +2/+2 to the creature you
  were going to suit up anyway. One card, both halves of the plan.
- **Valorous Stance** is the only instant-speed "gains indestructible" in white or red in this pool. It is the answer to
  the two-for-one that kills this archetype, and it is a removal spell when there is nothing to protect.

### Cathar Commando is quietly one of the best cards in the deck

Not for its body, though a 2-mana 3/1 is the best raw-power cheap host in the colours. Per the cube dossier, the entire
300-card pool contains **4 artifact answers and 2 enchantment answers**. Cathar Commando is one of each. In a cube whose
Voltron, Equipment and Enchantress decks all rely on permanents sticking, having two maindeck copies of one of only two
enchantment answers in the format is a structural advantage no other colour pair can buy.

### The known weakness

The deck cannot protect a spell on the stack. Every counterspell in this cube is mono-blue, so the WU build is strictly
better at defending its suited creature and this one is strictly faster. What this deck buys instead is *retry rather
than protection*: with five separate double-strike sources and eleven hosts, a fizzled turn costs a turn, not the game.
Blood Mist in particular is a standalone enchantment, so removing the creature it targeted does not answer it -- it just
picks a new target next combat.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (24 nonland):  1:7  2:10  3:5  4:2
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.8: Blood Mist@0.8) → p=0.78 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.8: Stitcher's Graft@0.8) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 77%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper exists in W or R below 8 mana in this pool (Vanquish the Horde is MV 8 and destroys the suited host too). The answer is evasive racing rather than trading: Gryff's Boon grants flying, Lunarch Mantle grants a sacrifice-for-flying ability, and Uncaged Fury doubles that flier, so a wide ground board that cannot block a flier loses the race from turn 4. Savage Alliance ('deals 1 damage to each creature target opponent controls') is the sideboard answer.
  OK        single_large_threat: Faith Unbroken, Valorous Stance, Lightning Axe, Thalia, Heretic Cathar
  OK        noncreature_permanents: Cathar Commando
  CONCEDED  stack: No counterspell exists in W or R in this pool -- the cube's only countermagic (Syncopate, Geistlight Snare, Mausoleum Wanderer, Overcharged Amalgam) is mono-blue. Mitigating would require abandoning the locked WR identity and with it Blood Mist and Uncaged Fury, which are the kill mechanism.
  CONCEDED  graveyard: Soul-Guide Gryff ('exile up to one target card from a graveyard') is the ONLY graveyard-hate card in the entire WR pool -- dossier.structural_census.graveyard_hate is empty and the Challenger's independent scan confirmed it. It is sideboarded rather than maindecked because at 1 possible copy it cannot be drawn reliably enough to justify a maindeck slot on a 24-card nonland budget, against a class that is 27% of the cube but only matters in roughly half the matchups.
```

- No WARN-tier flags were raised, before or after the Phase 9 repairs. Phase 6b returned PASS on all four checks on the final list (curve 7/10/5/2; assembly payoff p=0.78, enabler p=0.89; goldfish 84% keepable; coverage), so there is no deviation to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert to action five ways: 2 Thraben Inspector each leave a Clue ('{2}, Sacrifice this token: Draw a card'); 2 Gryff's Boon have '{3}{W}: Return this card from your graveyard to the battlefield attached to target creature' as a repeatable sink; 2 Twinblade Geist have 'Disturb {2}{W}'; Angelfire Ignition has 'Flashback {2}{R}{W}'; and Cathar's Call turns every subsequent turn into a free 1/1 without spending mana at all. At 16 lands and avg MV 2.08 the deck also floods less than a typical limited deck. |
| screw | mitigation | Keepable on two lands: 7 of 24 nonland cost 1 and 10 cost 2, so a two-land hand deploys a host on turn one and an attachment or second host on turn two. Phase 6b goldfish measures 84% keepable and 84% to have three lands by turn three, both above threshold. Thraben Inspector's Clue digs toward the third land. |
| decapitation | mitigation | The key piece is the suited creature. Four responses: Valorous Stance x2 at instant speed blanks a destroy effect; the attachments are redundant rather than singular (11 hosts, 9 engine cards); Gryff's Boon returns from the graveyard and Twinblade Geist recasts itself via disturb as an Aura that then 'exile[s] it instead' of dying again; and Cathar's Call manufactures a fresh legal host every end step. Of the 9 engine cards only Lunarch Mantle, Cathar's Call and Faith Unbroken are lost outright with the host -- Stitcher's Graft is an Equipment and stays on the battlefield, Angelfire Ignition's counters are already spent, and Blood Mist is unattached. |
| gas-out | mitigation | Net-positive or self-replacing cards: 2 Thraben Inspector (Clue = a card), 2 Gryff's Boon (returns itself), 2 Twinblade Geist (disturb = a second use), 1 Angelfire Ignition (flashback = a second use), 1 Cathar's Call (a 1/1 body every end step, indefinitely) = 8 of 24 nonland cards producing a second card, a second use, or ongoing board. An empty hand still has the Clue, the Boon return, the disturb and the Call tokens as mana sinks. |
| raced | mitigation | Against the cube's fastest clocks (dossier: 58 evasion cards at 21% density, 23 Vampires), this deck goldfishes turn 5 off 7 one-drops and holds 4 interaction slots that all interact profitably in a race: Faith Unbroken exiles the biggest attacker outright while pumping a body of its own, Valorous Stance x2 destroys anything with toughness 4 or greater, and Angelfire Ignition grants 'lifelink' alongside its counters. Stated honestly per Challenger F7: Lightning Axe's 'As an additional cost to cast this spell, discard a card or pay {5}' means that in a race, once hellbent around turn 4-5, its real cost is usually {5} rather than {R} -- it is the weakest of the four in exactly the matchup this mode names. |
| disruption-fizzle | mitigation | REWRITTEN after Challenger F6 marked the previous acceptance UNSATISFIED for pricing the wrong mitigation. The critical turn is the turn a multiplier resolves; the failure is instant-speed removal on the host in response. Three answers are now in the list. (1) Valorous Stance at 2 copies -- 'Target creature gains indestructible until end of turn' at instant speed, the only such effect in W or R in this pool; 2 of 24 nonland, so it is available in roughly a third of games rather than a sixth. (2) Retry rather than protection: the multipliers are 5 separate cards (2 Twinblade Geist, 2 Uncaged Fury, 1 Blood Mist), so a fizzled turn costs a turn, not the game, and Blood Mist being a standalone enchantment simply retargets next combat. (3) Host redundancy: 11 creature cards plus a free 1/1 Human every end step from Cathar's Call, so the deck is rarely down to its last legal target. What is NOT claimed: this deck cannot protect a spell on the stack, because every counterspell in this cube is mono-blue. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Bruna, the Fading Light, Brisela, Voice of Nightmares | Meld halves: each is a 7-11 mana body whose payoff requires owning and controlling the named partner card. Bruna is MV 7 and Brisela MV 11; neither is reachable on an aggro curve, and each would consume one of the five rare/mythic slots. |
| Vanquish the Horde, Reforge the Soul, Collective Defiance, Subjugator Angel, Geistcatcher's Rig, Alchemist's Greeting | Symmetric or self-harming mass effects that undo an aggro board: Vanquish the Horde destroys all creatures including the suited one; Reforge the Soul and Collective Defiance's wheel mode refill the opponent; Subjugator Angel and Geistcatcher's Rig are 6-mana bodies past the thesis turn. |
| Intangible Virtue, Cathars' Crusade, Lingering Souls | Go-wide token/anthem payoffs that reward a board of many small creatures -- the opposite of committing mana to one large attacker. Intangible Virtue only pumps tokens; Cathars' Crusade and Lingering Souls both cost a card to build a board this deck does not want. |
| Chandra, Dressed to Kill, Tamiyo's Journal, Zealous Conscripts, Mirrorwing Dragon, Gisela, the Broken Blade | Five-plus mana rares/mythics that neither pump nor protect the suited creature, and would each consume one of the five rare/mythic slots locked at Phase 0. |
| Soul-Guide Gryff, Slayer of the Wicked | MAINDECK CUT / SIDEBOARD INCLUDE (reclassified after Challenger F8 and F10, which showed both were filed under mechanisms they do not have -- Soul-Guide Gryff under 'symmetric or self-harming mass effects' and Slayer of the Wicked under 'tribal payoffs', when Slayer reads the OPPONENT's board). Both are cut from the mainboard on cost, not mechanism: at MV 5 and MV 4 they sit above a curve whose avg MV is 2.08 and whose goldfish turn is 5. Both are in the sideboard. Soul-Guide Gryff's 'exile up to one target card from a graveyard' is the ONLY graveyard hate in the entire WR pool, against a class that is 27% of the cube; Slayer of the Wicked's 'destroy target Vampire, Werewolf, or Zombie' hits roughly 48 of 277 cube nonlands (~17%). |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.89 adj [MV 2.08 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  33.3%  prod  43.8%  gap -10.5pp  [OK]
  W  demand  66.7%  prod  68.8%  gap  -2.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Mainboard size            40 / 40
[PASS] Sideboard size            10 / 10
[PASS] Copy limits               commons/uncommons max 2 copies, rares/mythics max 1 copy, basics unlimited and rarity-exempt.
                                 Phase 5C check 3 cross-checked every distinct card's mainboard+sideboard total against cube_search.get_max_copies. PASS.
[PASS] Rare/mythic cap           3 / 5 -> Angelfire Ignition, Stitcher's Graft, Thalia, Heretic Cathar
[PASS] Colour usability          every nonland card usable in WR via effective_cost.best_mode
[PASS] Splash cap                splash_colors = [] (no off-colour card in the list)
[PASS] Basic lands               9 Plains + 5 Mountain are format-supplied and exempt from the rarity cap and the copy limit.
[PASS] Cube membership           every card matched by exact name in the working pool
```