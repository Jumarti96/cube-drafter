---
deck_name: "w-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "W"
format: "40-card"
built_at: "2026-07-09T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
15x Plains
```

### CREATURES (14)
```
CMC  Card                                    Qty   Color  Role                              Rar
  1  Lunarch Veteran // Luminous Phantom      x2    W      Cheap body; lifegain + disturb    C
                                                            recursion (returns as a flyer)
  1  Thraben Inspector                        x1    W      1-drop value, early equip target  C
  2  Twinblade Geist // Twinblade Invocation  x2    W      Core payoff: double strike body,  U
                                                            disturbs into a double-strike aura
  2  Niblis of the Urn                        x2    W      Evasive carrier, taps blockers    U
  3  Dauntless Cathar                         x1    W      Leaves a flying token if it dies  C
  3  Harvest Hand // Scrounged Scythe         x2    C      Becomes Equipment when it dies    C
  3  Thalia, Heretic Cathar                   x1    W      Disruption + first strike body    R
  4  Gisela, the Broken Blade                 x1    W      Best chassis: fly/first strike/   M
                                                            lifelink out of the box
  4  Odric, Lunarch Marshal                   x1    W      Spreads granted keywords across   R
                                                            the whole team
  4  Restoration Angel                        x1    W      Flash flyer / combat trick        R
```

### INSTANTS & SORCERIES (3)
```
CMC  Card                                    Qty   Color  Role                              Rar
  2  Valorous Stance                          x2    W      Indestructible or destroy a big   U
                                                            blocker -- protects the suited-up
                                                            threat
  3  Angelic Purge                            x1    W      Sac a permanent, exile any        C
                                                            artifact/creature/enchantment
```

### OTHER SPELLS (8)
```
CMC  Card                                    Qty   Color  Role                              Rar
  1  Gryff's Boon                             x2    W      Recursive flying aura (+1/+0);    U
                                                            returns from graveyard for {3}{W}
  1  Neglected Heirloom // Ashmouth Blade     x2    C      Cheap Equip {1}, +1/+1; back-face U
                                                            upgrade not reliably reachable
                                                            in this build
  1  Stitcher's Graft                         x1    C      +3/+3 for Equip {2}; sacrifices   R
                                                            its creature if unattached
  3  Bound by Moonsilver                      x1    W      Repeatable lockdown aura,         C
                                                            re-targetable once per turn
  3  Butcher's Cleaver                        x1    C      +3/+0; lifelink only vs Humans    U
  4  Faith Unbroken                           x1    W      +2/+2 + temporary exile (ends if  U
                                                            the Aura leaves play)
```

## SIDEBOARD (10)
```
Card                                    Qty   Color  Role / When to board in              Rar
Cathar Commando                          x2    W      vs artifact/enchantment decks         C
Fiend Hunter                             x1    W      vs grindy/midrange matchups           U
Boarded Window                           x1    C      vs faster aggro / the mirror          U
Slayer of the Wicked                     x2    W      vs Vampire/Werewolf/Zombie tribal      U
Ambitious Farmhand // Seasoned Cathar    x2    C      vs control/grindy matchups (extra      U
                                                       body + lifelink upgrade)
Avacynian Priest                         x2    W      vs stalled boards (taps non-Humans --  C
                                                       hits most of this cube's tribal decks)
```

## ANALYSIS

**Deckbuilding math.** Macro-Archetype: Aggro. Projected avg MV: 2.28.
Lands: 15 (37.5% of N=40) -- above the 30-35% Aggro band on purpose:
Voltron needs to both deploy a threat AND pay an Equip/activation cost
in the same or following turn, so it wants slightly more mana
consistency than a standard aggro shell. No cantrips, mana dorks, or
land-MDFCs in the pool, so no downward modifier applied. Non-land
split: Creatures 14 (56%), Auras/Equipment 8 (32%), Interaction 3
(12%) -- Threats/Payoffs and creatures are combined into one bucket in
this archetype because the auras/equipment package *is* the win
condition, not a side engine, which is why this deviates heavily
above the standard 45-55% Aggro Threats/Payoffs band.

**The double-strike math.** Twinblade Geist, Odric, and Restoration
Angel form a specific line: attach Gryff's Boon or equip Stitcher's
Graft/Neglected Heirloom onto a double-strike source (Twinblade Geist
itself, or anything after Odric turns on double strike from a card
that has it), and Odric then broadcasts double strike, flying,
first strike, and lifelink to every creature you control the moment
any one of them has it. A single Gisela + Odric turn can flip a board
of vanilla bodies into a lethal alpha strike.

**Known fragility.** Only 2 of the deck's 4 mainboard Auras
(Gryff's Boon, Twinblade Invocation) actually survive their creature
dying -- Faith Unbroken and Bound by Moonsilver do not recur.
Stitcher's Graft's "sacrifice on unattach" clause means it should be
treated as a one-way commitment, not something you shuffle between
creatures. Restoration Angel can blink your own enchanted/equipped
creature to dodge removal, but doing so strips any non-recursive Aura
and returns Faith Unbroken's exiled target to the opponent -- know the
line before you take it.

**Cards Considered but Excluded.**

*Rares/mythics cut for the 5-card budget:* Voice of the Blessed (R --
neat with the deck's incidental lifegain, but a slow counters payoff
that doesn't advance the suit-up plan), Wedding Announcement (R --
strong value engine, but pushes toward go-wide instead of one big
threat), Cathars' Crusade (R -- wants a wide board, wrong shape for
Voltron), Conjurer's Closet (R -- actively bad here, blinking strips
non-recursive Auras), Metallic Mimic / Helvault / Tamiyo's Journal (R
-- all solid value pieces but too slow for a 2.28-avg-MV aggro curve),
Vanquish the Horde (R -- a board wipe in a deck trying to keep its own
board alive), Bruna the Fading Light / Brisela / Emrakul (too
expensive/off-theme for this shell).

*Uncommons a tier below the chosen includes:* Cobbled Wings (clean
flying-Equip{1} enabler -- closest alternative to Neglected Heirloom,
worth testing if the transform upside keeps going unused), Demonmail
Hauberk (huge +4/+2, but Equip = sacrifice a creature, too steep with
only 14 creatures), Mentor of the Meek / Mausoleum Guard / Inspiring
Captain / Cathar's Call / Intangible Virtue (all solid, but lean
go-wide/value rather than single-threat Voltron).

*Sideboard-consideration cards not included:* Soul-Guide Gryff (the
only mono-White graveyard hate in the pool; weak and narrow, which is
why the sideboard has no real graveyard answer -- a genuine pool
limitation, not an oversight), Subjugator Angel (strong tempo swing
but too slow at 6 mana for this curve), Geistcatcher's Rig (narrow
anti-flying tech), Epitaph Golem / Wild-Field Scarecrow (off-theme
graveyard/land utility).

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.28   Ramp cards: 0

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: no card exceeds 2 copies across main+SB
[PASS] Rares/mythics: no card exceeds 1 copy
[PASS] Max 5 rares/mythics total across main+SB: exactly 5/5 used
       (Gisela the Broken Blade, Odric Lunarch Marshal, Restoration
       Angel, Thalia Heretic Cathar, Stitcher's Graft) -- all in the
       mainboard, 0 in the sideboard
[PASS] All 50 cards verified present in the cube's working pool by
       exact name match
[PASS] All non-basic cards' color_identity is a subset of {W}
```
