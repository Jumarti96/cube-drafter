---
deck_name: "wbr-meld-midrange"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WBR"
format: "40-card"
built_at: "2026-07-09T17:50:14Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
5x  Swamp
1x  Plains
1x  Mountain
2x  Sunlit Marsh          WB dual, enters tapped
2x  Geothermal Bog        BR dual, enters tapped
2x  Sacred Peaks          RW dual, enters tapped
2x  Evolving Wilds        Fetches any basic (thins deck, fixes late)
1x  Hanweir Battlements   Colorless utility land; meld half (+ grants haste for {R})
```

### CREATURES (11)
```
CMC  Card                          Qty  Color  Role                                Rar
  1  Thraben Inspector              x1   W      Card advantage 1-drop               C
  2  Graf Rats                      x2   B      Meld half (-> Chittering Host)       U
  2  Bloodtithe Harvester           x2   BR     2-drop body + Blood-token looter     U
  3  Hanweir Garrison               x1   R      Meld half, token generator           R
  4  Gisela, the Broken Blade       x1   W      Meld half, evasive threat            M
  5  Midnight Scavengers            x2   B      Meld half, graveyard recursion       C
  7  Bruna, the Fading Light        x1   W      Meld half, reanimates Angels/Humans  R
  8  Griselbrand                    x1   B      Top-end reanimation payoff           M
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                          Qty  Color  Role                                Rar
  1  Tragic Slip                    x2   B      Cheap removal, morbid upside         C
  2  Infernal Grasp                 x2   B      Unconditional removal                U
  2  Abrade                         x2   R      Flexible removal / artifact answer   U
  2  Gather the Townsfolk           x2   W      Token generator                      C
  3  Lingering Souls                x2   W      Recurring token generator (flashback) U
  5  Through the Breach             x1   R      Cheats Griselbrand in early           M
  5  Edgar's Awakening              x2   B      Permanent reanimation engine          U
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                Rar
Soul-Guide Gryff              x2   W      Graveyard hate + flying body             C
Cathar Commando               x2   W      Flash artifact/enchantment removal       C
Valorous Stance                x2   W      Protect a bomb, or kill big toughness    U
Killing Wave                   x2   B      Sweeper vs. token-swarm aggro            U
Slayer of the Wicked           x2   W      Answers Vampire/Werewolf/Zombie tribal    U
```

## ANALYSIS

A grindy Mardu (W/B/R) midrange deck built to make all three Innistrad meld pairs functional at once. Bruna/Gisela (-> Brisela), Hanweir Garrison/Battlements (-> Hanweir, the Writhing Township), and Graf Rats/Midnight Scavengers (-> Chittering Host) are each independently playable, so completing any of them is pure upside layered on top of a real removal-and-recursion shell.

**The real Griselbrand line.** Griselbrand never gets hard-cast (his {4}{B}{B}{B}{B} cost is prohibitive in a 3-color deck) — he's a two-step payoff. Through the Breach puts him into play a turn early for an immediate `Pay 7 life: Draw seven cards` activation, then its own end-step sacrifice clause puts him in the graveyard. From there, Edgar's Awakening returns him to the battlefield to stay. The "reanimator" identity of the deck doesn't depend on a discard outlet at all — Through the Breach is the enabler that feeds Edgar's Awakening.

**Bruna cannot reanimate Griselbrand.** Her cast trigger is restricted to Angel or Human creature cards — Griselbrand is a Demon. In practice Bruna brings back Thraben Inspector, Hanweir Garrison, or herself/Gisela if one died previously. Don't expect her to double as a second Griselbrand-recursion outlet.

**Meld math.** All three pairs are live: Bruna+Gisela both need to be in play simultaneously (an end-step trigger, easy since both are strong standalone bodies you'll want to cast anyway); Hanweir Garrison+Battlements meld for {3}{R}{R} as an activated ability (no need to draw both at once — Battlements can sit on the battlefield as a mana source for turns before Garrison shows up); Graf Rats+Midnight Scavengers meld automatically at combat with zero additional cost. The Hanweir and Chittering Host lines are the most reliable since they don't compete for the same turn.

**Proportions (Midrange macro-archetype, N=40):**
- Lands: 16 (40% of 40) — within the 38-42% Midrange band; the curve's real top end (7-8 CMC) is accessed via cheat/reanimate rather than hard-cast, so 16 is enough.
- Interaction: 6 cards / 24 nonland (25%) — within the 20-30% band.
- Threats/Payoffs + absorbed Infrastructure: 17 cards / 24 (70.8%) — high by design; Midrange doesn't reserve a separate Engine budget, and nearly every non-removal card here (meld halves, token generators, Edgar's Awakening) does double duty as both engine and win condition.
- Modifiers applied to land count: 0 (no cantrips, no mana dorks, no MDFCs in the list).

**Mana base.** Pip demand skews black (54.5%) due to Griselbrand's {4}{B}{B}{B}{B} and Edgar's Awakening's {B}{B}; red is the smallest color (18.2% of pips) carrying mostly cheap removal and the Hanweir package. Land production (B 56.2% / W 31.2% / R 31.2%) comfortably covers all three with production exceeding demand everywhere — no color is undersupplied. Hanweir Battlements is nominally 1 of the 16 lands but only taps for {C}, not red; it's functionally a colorless utility/meld land, not a mana-fixer, and the mana base was built treating it that way.

**Cards Considered but Excluded:**
- *Rares/mythics cut for the 6-card cap:* Olivia Voldaren, Sorin Imperious Bloodlord, and Bloodline Keeper (all mythic Vampire-tribal bombs) were strong standalone threats but would have pushed the cap well past 6 and pulled the deck toward a different (Vampire tribal) identity than the meld-focused brief. Wedding Announcement and Cathars' Crusade (both rare token payoffs) were genuinely on-theme with the Hanweir/token subplan but likewise didn't fit the budget once all three meld pairs were locked in.
- *Uncommons a tier below the chosen includes:* Fiery Temper was in an earlier draft of this list (double-red-pip removal/reach) but was cut when the interaction count ran hot (33%) and the curve was thin before turn 4 — Bloodtithe Harvester replaced it, tightening interaction to 25% and adding real 2-drop bodies. Lightning Axe is arguably a better fit than either: it's on-color removal that also serves as a genuine discard outlet (letting you pitch Griselbrand for Edgar's Awakening without needing Through the Breach first) — worth testing as a swap-in for Abrade or Infernal Grasp if you want a more literal discard-based reanimator line. Eaten Alive (1-mana exile removal, sacrifice-cost) is another strong alternative to Tragic Slip if you lean harder into a sacrifice subtheme. Intangible Virtue and Mentor of the Meek (both token-payoff uncommons) were considered for the Gather the Townsfolk/Lingering Souls package but cut for space.
- *Sideboard-consideration cards not included:* Fiend Hunter and Angelic Purge (both flexible W exile-removal) overlap heavily with Cathar Commando/Valorous Stance's job; Murderous Compulsion and Sever the Bloodline (B removal) are fine additional answers if the Vampire/Zombie tribal matchup proves worse than Slayer of the Wicked alone handles; Boarded Window is a reasonable anti-aggro damage-reduction piece if the meta skews more aggressive than expected.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  54.5%  prod  56.2%  gap  -1.7pp  [OK]
  R  demand  18.2%  prod  31.2%  gap -13.0pp  [OK]
  W  demand  27.3%  prod  31.2%  gap  -3.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons: max 2 copies each                          PASS
Uncommons: max 2 copies each                        PASS
Rares/mythics: max 1 copy each                       PASS
Rares/mythics total, relaxed cap of 6 (main+SB)     PASS (exactly 6: Griselbrand,
                                                     Through the Breach, Bruna, Gisela,
                                                     Hanweir Garrison, Hanweir Battlements)
Sideboard rares/mythics: 0                           PASS
Excluded cards: none specified                       PASS
```
