---
deck_name: "br-kicker-sacrifice"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-11T07:50:37Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
8x Swamp
5x Mountain
2x Geothermal Bog         BR dual (Swamp Mountain), enters tapped
```

### CREATURES (17)

```
CMC  Card                       Qty   Color  Role                                Rar
  1  Cult Conscript             x2    B      Recursive sac fodder                U
  2  Splatter Goblin            x2    B      Sac fodder w/ removal sting         C
  2  Toxic Abomination          x2    B      Cheap sac fodder                    C
  2  Phyrexian Vivisector       x2    B      Death-trigger scry engine           C
  3  Lagomos, Hand of Hatred    x1    BR     Free fodder engine                  U
  3  Braids, Arisen Nightmare   x1    B      Sacrifice value engine              R
  3  Balduvian Atrocity         x2    B      Kicker payoff (reanimate + sac)     U
  3  Gibbering Barricade        x1    B      Repeatable sac outlet / draw        C
  3  Squee, Dubious Monarch     x1    R      Recursive threat + fodder           R
  4  Garna, Bloodfist of Keld   x1    BR     Death-trigger reach (attacker draw) U
  4  Sheoldred, the Apocalypse  x1    B      Standalone bomb                     M
  6  Ragefire Hellkite          x1    R      Sac-payoff finisher                 R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                       Qty   Color  Role                                Rar
  1  Bone Splinters             x2    B      Sac-cost removal                    C
  2  Lightning Strike           x2    R      Removal                             C
  3  Warhost's Frenzy           x2    R      Kicker payoff (sac-turn draw)       U
  4  In Thrall to the Pit       x1    R      Kicker payoff (steal, sac if kicked) C
```

### OTHER SPELLS (1)

```
CMC  Card                       Qty   Color  Role                                Rar
  3  Liliana of the Veil        x1    B      Discard/sac disruption walker       M
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                Rar
Cut Down                x2    B      vs aggro (power+toughness <= 5)        U
Pilfer                  x2    B      vs control/combo (targeted discard)    C
Extinguish the Light    x2    B      Hard removal for big threats          C
Knight of Dusk's Shadow x1    B      vs lifegain (menace clock)             U
Aggressive Sabotage     x1    B      vs control: discard 2 + reach (kicker) C
Battle-Rage Blessing    x1    B      Protect key engine piece               C
Smash to Dust           x1    R      Artifact hate + x/1 sweeper            C
```

## ANALYSIS

**Deck identity.** Rakdos midrange where every creature is happy to die. Seven cheap expendable bodies (Cult Conscript recurs for {1}{B}, Splatter Goblin stings on death, Toxic Abomination, Lagomos' free 2/1 every combat, Squee recast from the graveyard) feed three engines — Braids (sacrifice → opponent sacrifices or you draw), Garna (attacking deaths draw cards, other deaths ping), Phyrexian Vivisector (deaths scry) — while the BR kicker suite converts the same deaths into burst payoffs.

**The kicker-sacrifice loop.**
- *Warhost's Frenzy* kicked ({2}{R}+{B}): on an attack-and-sac turn every creature death draws a card — with Garna out, attacking deaths draw twice over.
- *In Thrall to the Pit* kicked ({3}{R}+{2}{B}): steal the opponent's best creature, attack with it, then it is sacrificed — removal, damage, and a death trigger for Braids/Garna/Vivisector in one card.
- *Balduvian Atrocity* kicked ({2}{B}+{R}): a 4/4-adjacent menace body that reanimates any of the deck's twelve MV ≤ 3 creatures with haste, sacrificing it at end of turn — more death triggers, more Frenzy draws.

**Top end.** Liliana of the Veil's +1 hurts the opponent more (our discards feed Balduvian Atrocity targets; the sac fodder is expendable), her −2 eats protected bombs. Ragefire Hellkite turns leftover fodder into double strike in the air. Sheoldred punishes both the Frenzy mass-draw turns (gain 2 per draw) and opposing card advantage.

**Grill outcome.** Challenger found no blockers and ruled the pipeline viable ("the loop is real and closed"), with one major, adopted: the deck lacked a repeatable instant-speed sacrifice outlet, so the second In Thrall to the Pit (the clunkiest card at 4-6 mana) became Gibbering Barricade ({2}{B} defender: "{2}{B}, Sacrifice a creature: You gain 1 life and draw a card") — it converts fodder to cards on demand and dodges removal-in-response blowouts on Bone Splinters. Sideboard tightened per its minors: one narrow Knight of Dusk's Shadow became Aggressive Sabotage (on-archetype kicker discard). Garna and Lagomos role labels were rewritten for honesty: Garna mostly pings here because most engineered deaths are non-attacking; Lagomos' five-deaths tutor clause is decorative. Sheoldred was challenged as the weakest thematic link but retained deliberately — the build intent is competitive power, and it converts Frenzy/Braids draw turns into life swings.

**Cards Considered but Excluded.**
- *Rares/mythics cut by the 5-card cap:* Rundvelt Hordemaster (goblin-tribal death engine — the natural 6th rare if you cut Sheoldred for a more linear build), Shadow-Rite Priest (cleric-tribal sac tutor), Defiler of Flesh (black-permanent engine), Tyrannical Pitlord, The Cruelty of Gix (reanimator saga past Atrocity's MV cap — the Challenger's on-theme alternative to Sheoldred if you prefer theme over raw power), Evolved Sleeper (mana-sink 1-drop), Sulfurous Springs (untapped BR rare land — first swap-in if you free a rare slot), Jaya Fiery Negotiator / The Elder Dragon War (red value, off-pipeline).
- *Strong uncommons a tier below:* Sengir Connoisseur (death-trigger flier, 5 MV for a deck that wants to curve out by 4), Hurler Cyclops (sac outlet fighting the 7-source red base), Braids's Frightful Return (saga value engine, slow but real — Challenger-endorsed alternative), Eerie Soultender (graveyard filler).
- *Sideboard considerations:* Writhing Necromass (cheap fatty vs grind, but the yard feeds Atrocity instead), Tattered Apparition (evasive sink), Blight Pile (vs creatureless decks), Battlefly Swarm.

**Matchup notes.** Strongest against creature midrange (In Thrall + Bone Splinters convert their threats into our triggers) and slower control (Liliana + recursion out-grinds spot removal; Pilfer comes in). Weakest to go-wide token aggro that outpaces one-for-one triggers (board Smash to Dust, Cut Down) and to graveyard hate (Cult Conscript, Squee, and Atrocity all lean on the yard).

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.6   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  65.6%  prod  66.7%  gap  -1.1pp  [OK]
  R  demand  34.4%  prod  46.7%  gap -12.3pp  [OK]
```

The audit's `ramp_count: 0` reflects a "ramp" tag this pool doesn't use; the deck runs no ramp by design (aggressive sac curve, average MV 2.60, 15 lands).

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons limited to 2 copies each (max used: 2)
[PASS] Uncommons limited to 2 copies each (max used: 2)
[PASS] Rares/mythics limited to 1 copy each
[PASS] Max 5 rares/mythics across mainboard + sideboard (5/5 used:
       Braids Arisen Nightmare, Liliana of the Veil, Squee Dubious Monarch,
       Ragefire Hellkite, Sheoldred the Apocalypse — sideboard contains 0)
[PASS] All cards present in cube mainboard pool (verified vs working pool)
[PASS] Color identity within B/R (no splash)
```
