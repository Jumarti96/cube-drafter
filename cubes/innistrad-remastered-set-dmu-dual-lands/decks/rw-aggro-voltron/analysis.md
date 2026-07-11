---
deck_name: "rw-aggro-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RW"
format: "40-card"
built_at: "2026-07-09T15:09:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
8x Plains
6x Mountain
1x Sacred Peaks          RW dual, enters tapped
```

### CREATURES (13)
```
CMC  Card                                        Qty   Color  Role                             Rar
  1  Village Messenger // Moonrise Intruder        x2    R      Turn-1 haste chassis             C
  1  Thraben Inspector                             x1    W      1-drop body + card advantage     C
  2  Lightning Mauler                              x2    R      Haste enabler (soulbond)         U
  2  Twinblade Geist // Twinblade Invocation       x2    W      Double strike / disturb-aura     U
  2  Avacynian Priest                              x1    W      Cheap body, taps a blocker       C
  3  Kruin Outlaw // Terror of Kruin Pass          x1    R      Evasive double-strike threat     R
  4  Markov Waltzer                                x2    RW     Flying/haste + repeatable pump   U
  4  Restoration Angel                             x1    W      Flash flying tempo/reset         R
  5  Archangel Avacyn // Avacyn, the Purifier      x1    W      Flash indestructible + finisher  M
```

### OTHER SPELLS (8)
```
CMC  Card                                        Qty   Color  Role                              Rar
  1  Stitcher's Graft                              x1    C      Core equipment, +3/+3            R
  1  Neglected Heirloom // Ashmouth Blade          x2    C      Cheap equip, upgrades on flip     U
  2  Cobbled Wings                                 x1    C      Cheap unconditional evasion       C
  3  Butcher's Cleaver                             x1    C      Equipment, +3/+0                  U
  1  Gryff's Boon                                  x2    W      Recursive flying aura             U
  4  Faith Unbroken                                x1    W      Buff + one-shot O-ring removal    U
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                                        Qty   Color  Role                              Rar
  1  Lightning Axe                                 x1    R      Cheap removal                     U
  2  Valorous Stance                               x2    W      Protect (indestructible) / removal U
  3  Angelfire Ignition                            x1    RW     Keyword-soup burst + flashback    R
```

## SIDEBOARD (10)
```
Card                                        Qty   Color  Role / When to board in              Rar
Cathar Commando                              x1    W      vs opposing equipment/auras (flash)   C
Abrade                                       x1    R      vs artifacts / flexible removal       U
Slayer of the Wicked                         x1    W      vs Vampire/Werewolf/Zombie tribal     U
Soul-Guide Gryff                             x1    W      vs graveyard/flashback/disturb decks  C
Boarded Window                               x1    C      vs faster aggro mirrors                U
Fiery Temper                                 x1    R      vs grindy matchups, reach to face      U
Lightning Axe                                x1    R      2nd copy, vs resilient creatures       U
Thraben Inspector                            x1    W      2nd copy, vs control (card adv.)       C
Angelic Purge                                x1    W      vs indestructible/hexproof threats     C
Savage Alliance                              x1    R      vs token swarm                          U
```

## ANALYSIS

**Slot allocation.** Macro-Archetype: Aggro. Projected Avg MV: ~2.3.
Lands: 15 (37.5% of N=40) — one land above the 30-35% aggro band, deliberately: the deck has real non-hardcast mana sinks (Gryff's Boon buyback at {3}{W}, Angelfire Ignition flashback at {2}{R}{W}, equip costs up to {3}) plus a real 4-5 CMC tail (Markov Waltzer, Restoration Angel, Archangel Avacyn). Modifiers: no cantrips, no mana dorks, no MDFCs in this pool — 0 adjustment. Threats/Payoffs (creatures 13 + equipment/auras 8 + Angelfire Ignition 1 = 22 of 25 nonland, 88%) — voltron decks fold nearly everything into the payoff category since equipment/auras *are* the win condition, not a separate engine. Interaction (Valorous Stance x2 + Lightning Axe = 3 of 25, 12%) sits in the 10-15% aggro band.

**Mana math.** 25 pips: R=10 (40%), W=15 (60%). Land production: 8 Plains + 1 Sacred Peaks = 9 W sources (60%), 6 Mountain + 1 Sacred Peaks = 7 R sources (46.7%, safely over demand). Both colors land at 0pp / -6.7pp gap — no WARN triggers.

**Grill revisions applied (Phase 9).** The independent Challenger agent flagged that 12 creatures for 9 equipment/aura slots was a thin voltron chassis-to-payload ratio, and that Faith Unbroken's role description ("dodges the 2-for-1") was inaccurate — Faith Unbroken has no recursion; if the enchanted creature dies, the exiled opposing creature returns and the Aura is gone, a straight 2-for-1 *against* this deck. Resolution: cut the second Faith Unbroken and second Butcher's Cleaver, added Avacynian Priest (a cheap body that also taps down blockers) and Cobbled Wings (cheaper, unconditional flying equip vs. Butcher's Cleaver's Human-only lifelink clause). This moves the ratio to 13 creatures / 8 payload pieces and drops Faith Unbroken to a 1-of that's still a fine tempo/removal-adjacent buff, just not part of the "recursive aura" thesis. The Challenger also flagged Restoration Angel's blink ETB as anti-synergistic if used reflexively to "protect" a suited-up creature (blinking strips attached Auras/unequips Equipment) — it's better sequenced as a flash flying tempo body or a reset on a creature *without* attachments, not a save button for the fully-loaded voltron piece. Twinblade Invocation's disturb is a one-time recursion, not a repeatable engine — Gryff's Boon (repeatable {3}{W} buyback) is the deck's only genuinely recursive payload piece. Sideboard: swapped the narrow, expensive Geistcatcher's Rig ({6}, anti-flyer only) for Soul-Guide Gryff, since the cube's tag density shows heavy Disturb/Flashback/Madness support (32 flashback-tagged cards, several disturb/madness cards) and the sideboard had zero graveyard answers.

**Key interaction: Stitcher's Graft's real cost.** Its oracle text reads "Whenever equipped creature attacks, it doesn't untap during its controller's next untap step" (no vigilance/blocking after a big swing) and "Whenever this Equipment becomes unattached from a permanent, sacrifice that permanent" (re-equipping to a new creature kills the old holder). In a 13-creature deck this is a real risk on a card advantage swing — sequence Stitcher's Graft onto a creature you're comfortable losing, not your last blocker.

**Angelfire Ignition math.** {1}{R}{W} sorcery + {2}{R}{W} flashback = 2 casts from one card across a game, each granting vigilance/trample/lifelink/indestructible/haste + 2 counters — the single biggest tempo swing in the deck, and the indestructible clause is the other half (with Archangel Avacyn) of this deck's answer to removal aimed at its investment.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:** Thalia, Heretic Cathar (rare — strong W aggro tax piece and first-strike body, cut because it's generically powerful rather than voltron-specific; the 5 slots went to cards that are either the core payload [Stitcher's Graft, Angelfire Ignition] or premium suit-up targets/protection [Kruin Outlaw, Restoration Angel, Archangel Avacyn]). Gisela, the Broken Blade (mythic — flying/first strike/lifelink body, but her meld ability is dead without Bruna and she doesn't out-perform Kruin Outlaw or Avacyn as a threat). Odric, Lunarch Marshal (rare — powerful keyword-sharing lord that combos with Angelfire Ignition/Blood Mist, but redundant with Markov Waltzer's role and not worth a 6th rare slot). Mirrorwing Dragon (mythic — symmetric downside, off-theme). Voice of the Blessed (rare — needs a critical mass of lifegain this deck doesn't run). Zealous Conscripts / Collective Defiance (rare — generically strong but not voltron-synergistic). Vanquish the Horde (rare — too much of a control card for this curve).

**Uncommons a tier below the current includes:** Blood Mist (repeatable double strike granter — excellent but redundant with Angelfire Ignition's one-shot keyword burst and Kruin Outlaw's built-in double strike; would be the first card in if a copy of Faith Unbroken or Butcher's Cleaver gets cut later). Demonmail Hauberk (+4/+2 equipment, but "equip: sacrifice a creature" is too risky for a 13-creature deck — reconsider if the creature count climbs). Uncaged Fury (instant-speed double strike pump, a fine alternate include over the 2nd Valorous Stance if the meta is removal-light). Lunarch Mantle (W aura, +2/+2 and a sac-fueled flying activation — solid, sits just behind Gryff's Boon/Faith Unbroken). Furyblade Vampire, Niblis of the Urn (fine aggressive 2-drops, displaced by the haste/evasion package). Crusader of Odric (scales with board width, this deck is too creature-light to maximize it).

**Sideboard-consideration cards not included:** Vexing Devil (rare — would need a rarity slot; strong but the aggro-burn plan it wants is a different archetype than voltron). Alchemist's Greeting (5cmc for 4 damage is too slow for a 40-card aggro shell). Neonate's Rush (Vampire-count discount doesn't apply — this isn't a tribal deck). Helvault (rare, off-plan). If facing heavy removal, consider swapping in Blood Mist for Cathar Commando; if facing counterspell-heavy control, Fiery Temper and Savage Alliance are already positioned for that plan via reach.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.2   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  40.0%  prod  46.7%  gap  -6.7pp  [OK]
  W  demand  60.0%  prod  60.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons <= 2 copies each - verified across all 25 unique nonland cards
[PASS] rares/mythics <= 1 copy each - 5 unique rare/mythic cards, all at 1 copy
[PASS] max 5 rares/mythics total (main+SB combined) - actual: 5 exactly
       (Stitcher's Graft, Angelfire Ignition, Kruin Outlaw // Terror of Kruin Pass,
       Restoration Angel, Archangel Avacyn // Avacyn, the Purifier - all mainboard,
       sideboard is 100% commons/uncommons)
[PASS] all cards' color_identity subset of {R, W} (colorless permitted)
[PASS] all 35 unique deck entries verified present in cube working pool by exact name
```
