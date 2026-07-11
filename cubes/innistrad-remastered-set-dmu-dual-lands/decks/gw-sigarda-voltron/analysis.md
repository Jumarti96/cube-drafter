---
deck_name: "gw-sigarda-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-07-09T15:08:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
11x Plains
3x  Forest
2x  Radiant Grove          GW dual, always enters tapped
```

### CREATURES (14)
```
CMC  Card                                        Qty   Color  Role                              Rar
  1  Young Wolf                                   x2    G      Resilient equip/aura chassis      C
  1  Thraben Inspector                            x2    W      Value 1-drop / Clue engine        C
  1  Lunarch Veteran // Luminous Phantom          x2    W      Recursive lifegain chassis        C
  2  Twinblade Geist // Twinblade Invocation      x2    W      Keystone: double strike / recursive aura  U
  3  Harvest Hand // Scrounged Scythe             x2    C      Recursive dual-mode threat/equip  C
  3  Thalia, Heretic Cathar                       x1    W      Aggressive disruption body        R
  3  Tireless Tracker                             x1    G      Card-advantage insurance engine   R
  4  Odric, Lunarch Marshal                       x1    W      Team-wide keyword-sharing payoff  R
  5  Sigarda, Host of Herons                      x1    GW     Keystone: hexproof suit-up target M
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                                        Qty   Color  Role                              Rar
  2  Valorous Stance                              x2    W      Protection or removal (flex)      U
  3  Clear Shot                                   x2    G      Fight removal that pumps attacker U
```

### OTHER SPELLS (6)
```
CMC  Card                                        Qty   Color  Role                              Rar
  1  Gryff's Boon                                 x2    W      Recursive evasion aura            U
  1  Neglected Heirloom // Ashmouth Blade         x1    C      Cheap equipment (see note below)  U
  1  Stitcher's Graft                             x1    C      Keystone: high-impact equipment   R
  2  Lunarch Mantle                                x1    W      Pump aura + conditional evasion   C
  4  Faith Unbroken                               x1    W      Pump aura + pseudo-removal         U
```

## SIDEBOARD (10)
```
Card                                    Qty   Color  Role / When to board in                    Rar
Fiend Hunter                             x1    W      vs. opposing bombs/must-answer threats    U
Bound by Moonsilver                      x1    W      vs. evasive/big threats we can't remove   C
Ambush Viper                             x2    G      vs. aggressive decks (flash deathtouch)   C
Slayer of the Wicked                     x1    W      vs. Vampires/Werewolves/Zombies tribal    U
Cathar Commando                          x2    W      vs. opposing Equipment/Auras/artifacts    C
Angelic Purge                            x1    W      vs. problem artifact/creature/enchantment C
Avacynian Priest                         x1    W      vs. stalled boards (non-Human blockers)   C
Aim High                                 x1    G      vs. flyers-heavy decks                    C
```

## ANALYSIS

**Macro-Archetype: Aggro. Projected Avg MV: 2.12.**

**Slot allocation:**
- Lands: 16 (40% of N=40) - Aggro's baseline range is 30-35%, but this deviates upward deliberately: zero mana ramp/dorks, Sigarda's GWW cost at the curve top, and THIN GW fixing (only one common dual pair, Radiant Grove) all argue against skimping. The constructed-land-target formula itself recommended 16 for this curve (avg CMC 2.12, 0 ramp), and the deck now hits that exactly.
- Threats/Payoffs (creatures + auras/equipment): 20 of 24 nonland cards (83%) - far above Aggro's 45-55% reference range, but this is the defining trait of Voltron: the auras and equipment aren't a separate "engine," they *are* the payoff that turns a cheap body into a win condition. A conventional aggro deck's 45-55% figure assumes creatures alone carry the threat density; here the pump package does that job jointly with the creatures.
- Interaction: 4 of 24 (16.7%) - both self-grill agents independently flagged the original 3-slot interaction suite (2 Valorous Stance + 1 Clear Shot) as thin for a competitive list, since Valorous Stance's removal mode only hits toughness-4+ creatures. Added a 2nd Clear Shot (cut from a 2nd Lunarch Mantle, the weaker of the two pump auras) to shore this up.
- Engine & Infrastructure: 0 (absorbed) - no dedicated ramp/fixing spells beyond the land base itself; not needed at this curve.

**Mana base fix:** The original build ran a single Radiant Grove (4 green sources total) - the self-grill Challenger agent calculated a roughly 35-40% chance of not drawing a green source by turn 3 on that count. Swapped a Plains for a 2nd Radiant Grove (uses the full 2-copy common allowance), bringing green sources to 5 without touching white density (still 13 white sources). Color balance is now PASS with comfortable margins in both directions.

**Recursion density - the core resilience mechanism:** Counting individual copies, 10 of the 24 nonland cards (41.7%) have a built-in way to survive a single removal spell: Young Wolf x2 (undying), Lunarch Veteran x2 (disturb), Twinblade Geist x2 (disturb), Harvest Hand x2 (dies-and-returns-transformed), Gryff's Boon x2 (graveyard reattach for {3}{W}). This is the mechanical backbone of dodging the two-for-one from the original brief - the deck doesn't need heavy protection spells because losing the first copy of a threat usually isn't a real loss.

**Odric payoff math:** Odric shares any granted keyword across the whole team once one creature has it. Sigarda alone (flying, hexproof) turns on two keyword shares for free; Twinblade Geist/Invocation (double strike) and the Ashmouth Blade side of Neglected Heirloom (first strike) add two more triggers if either resolves. A board with Sigarda + Odric already makes every other attacker evasive and hard to remove - this is the single highest-leverage two-card combination in the deck.

**Two honest fragility notes surfaced by the self-grill (kept in, not fixed, because the alternative costs more than it's worth):**
- Faith Unbroken enchants your own creature, not the exiled one - if that creature dies to unrelated removal, the aura falls off and the opponent's exiled creature comes back. Play it on Sigarda or another recursive threat, not a fragile body, to avoid the blowout.
- Stitcher's Graft's equipped creature doesn't untap next turn (so it can't also block), and manually moving the equipment off a living creature sacrifices that creature. Treat it as a "commit to the attack" card, not a flexible one.
- Neglected Heirloom // Ashmouth Blade's upgrade trigger ("when equipped creature transforms") most likely never fires in this build - none of the 14 creatures perform an actual transform; Lunarch Veteran/Twinblade Geist use disturb (a graveyard recast of a different card face) and Harvest Hand uses "return to the battlefield transformed" (a new object entering the battlefield), neither of which is the same game action as a permanent transforming in place. Kept at 1 copy as a perfectly fine vanilla +1/+1-for-{1}-equip rather than the "keystone" it was originally billed as - cutting it to 0 wasn't worth losing a cheap, functional equip target just because its upside is dead. If you want it to actually flip, a werewolf (day/night transform, e.g. Scorned Villager // Moonscarred Werewolf) would need to enter the 75.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (Sigarda, Stitcher's Graft, Odric, Thalia, and Tireless Tracker took all 5 slots): Gisela, the Broken Blade (mythic - strong flier but off-plan, doesn't recur); Wrenn and Seven (mythic - powerful but a different, lands-matter gameplan); Restoration Angel (rare - flickering a suited-up creature strips its Auras, actively anti-synergistic with half the payload package); Wedding Announcement // Wedding Festivity, Cathars' Crusade, Torens Fist of the Angels (rares - all token/go-wide payoffs, a different macro-plan than single-threat Voltron); Voice of the Blessed, Hopeful Initiate, Metallic Mimic (rares - fine bodies, but none plug into the aura/equipment plan directly); Bruna, the Fading Light, Cultivator Colossus, Brisela (bombs, but too slow/off-curve for an aggressive shell); Hermit Druid, Traverse the Ulvenwald, Cryptolith Rite, Eldritch Evolution (rares - all combo/ramp pieces for other archetypes); Helvault, Conjurer's Closet, Tamiyo's Journal, Vanquish the Horde, Decimator of the Provinces (rares - control/late-game tools, wrong speed); Overgrown Farmland (the rare GW dual - deliberately passed over in favor of a 2nd common Radiant Grove to preserve the rare budget for spells).

**Uncommons/commons a tier below the chosen includes:** Butcher's Cleaver (solid +3/0 conditional-lifelink equipment, but redundant with Neglected Heirloom/Stitcher's Graft at the low end of the curve); Demonmail Hauberk (+4/2 is huge, but "equip: sacrifice a creature" is a harsh tax without a token-generation subtheme to fuel it); Cobbled Wings (cheap flying equipment - fine budget include, cut only for slot count; strong swap-in if you want more evasion); Duskwatch Recruiter // Krallenhorde Howler (solid card selection, but doesn't touch the equipment/aura plan); Noose Constrictor (reach + pump body, redundant with existing 1-drops).

**Sideboard-consideration cards not included:** Duel for Dominance (Coven fight removal - too conditional on board diversity for a low-curve deck); Moonlight Hunt (needs a Wolf/Werewolf attacker - only Young Wolf qualifies, too narrow); Traveler's Amulet (fixing - unnecessary once the 2nd Radiant Grove was added); Guardian of Pilgrims (weak combat-trick-on-a-body, outclassed by what's already in the 75).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  33.3%  prod  31.2%  gap  +2.1pp  [OK]
  W  demand  66.7%  prod  81.2%  gap -14.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: all <= 2 copies (verified card-by-card, no violations)
[PASS] Rares/mythics: all <= 1 copy each
[PASS] Max 5 rares/mythics total across mainboard+sideboard: exactly 5/5 used
       (Thalia, Heretic Cathar; Tireless Tracker; Odric, Lunarch Marshal;
        Sigarda, Host of Herons; Stitcher's Graft)
[PASS] All 24 non-basic card names verified present in the cube pool
```
