---
deck_name: "bg-aristocrats-value-counters"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-07-08T21:19:01Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
11x Swamp
 1x Forest
 2x Haunted Mire          BG dual, enters tapped
 1x Evolving Wilds        Fetches any basic, deck-thins
 1x Westvale Abbey // Ormendahl, Profane Prince   Keystone: token gen + sac-5 finisher
```

### CREATURES (11)
```
CMC  Card                              Qty  Color  Role                                Rar
  1  Gravecrawler                      x1   B      Recurs from GY w/ a Zombie          R
  1  Ecstatic Awakener // Awoken Demon x1   B      Sac outlet + draw, transforms       C
  1  Young Wolf                        x2   G      Undying fodder                      C
  1  Sanitarium Skeleton               x1   B      Renewable fodder (GY return)        C
  2  Blood Artist                      x1   B      Death-drain payoff                  U
  2  Skirsdag High Priest              x1   B      Morbid engine: taps 2 -> 5/5 flier  R
  2  Butcher Ghoul                     x1   B      Undying fodder, Zombie              C
  3  Falkenrath Torturer               x1   B      Free repeatable sac outlet          C
  3  Morbid Opportunist                x1   B      Draws a card off any death          U
  4  Grizzly Ghoul                     x1   BG     Counters payoff (deaths this turn)  U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Village Rites            x2   B      Sac outlet, draw 2                 C
  1  Tragic Slip              x2   B      Morbid removal (-13/-13)           C
  1  Eaten Alive               x1   B      Sac-cost exile removal             C
  1  Deadly Allure             x1   B      Forced-block trick, flashback G    U
  2  Infernal Grasp            x2   B      Unconditional removal              U
```

### OTHER SPELLS (5)
```
CMC  Card                                        Qty  Color  Role                          Rar
  2  The Meathook Massacre                        x1   B      Board wipe + drain payoff     M
  2  Ghoulish Procession                           x1   B      Death-trigger Zombie engine   U
  3  Ulvenwald Mysteries                           x1   G      Death-trigger Clue engine     U
  4  Demonmail Hauberk                             x1   C      Free sac-outlet equip, +4/+2  U
  4  Garruk Relentless // Garruk, the Veil-Cursed  x1   BG     Removal/fodder/tutor/finisher  M
```

## SIDEBOARD (10)
```
Card                    Qty  Color  Role / When to board in                     Rar
Killing Wave            x1   B      Mass edict vs token swarm/go-wide aggro       U
Murderous Compulsion    x1   B      Kills tapped attackers vs aggro               C
Sever the Bloodline     x1   B      Exile answer vs token-copy/name strategies    U
Morkrut Banshee         x1   B      Removal-on-a-body vs midrange bombs           U
Boarded Window          x1   C      Damage mitigation vs aggro/burn               U
Geistcatcher's Rig      x1   C      Anti-flyer tech vs Spirits/Angels (slow)      U
Ambush Viper            x1   G      Flash deathtouch blocker vs aggro             C
Duel for Dominance      x1   G      Flex fight removal                            C
Clear Shot              x1   G      One-sided flex fight removal                  U
Blazing Torch           x1   C      Cheap reach/ping, evasion vs Vamp/Zombie      C
```

## ANALYSIS

**Engine math.** Dedicated fodder bodies are thin (5: Gravecrawler, Sanitarium Skeleton, 2x Young Wolf, Butcher Ghoul) but the deck supplements them with self-replacing token generation — Ghoulish Procession and Ulvenwald Mysteries both trigger only on *nontoken* creature deaths, so the fodder base (all nontoken) feeds them cleanly, but the tokens they produce don't feed back into either engine. Six outlets (Village Rites x2, Ecstatic Awakener, Falkenrath Torturer, Eaten Alive, Demonmail Hauberk's equip cost, Garruk's -1) are available to convert that fodder into value.

**Gravecrawler needs a Zombie.** Its graveyard-recast clause requires you to control a Zombie — Butcher Ghoul and Ghoulish Procession's token both qualify, so the recursion is live from turn 2 onward in most games, but it's dead text if both are gone.

**Skirsdag High Priest corrected.** Its ability *taps* two creatures, it does not sacrifice them — it's a Morbid-gated payoff downstream of the sac engine (needs a death to have already happened that turn), not an outlet itself. Don't sequence around it as a sac outlet.

**Deadly Allure corrected.** It's a forced-block combat trick (deathtouch + must-be-blocked), not a fight spell — it only does anything while you have an attacker, and is dead on defense. Its G flashback recasts it for a second removal effect once you're on the play.

**Vampire/Human sub-payoffs are mostly inert.** Indulgent Aristocrat was cut specifically because the deck only runs 3 Vampires (Blood Artist, Falkenrath Torturer, and itself would've been the third) — not enough density to matter. Falkenrath Torturer's Human-sac bonus (only 2 Humans: itself and Morbid Opportunist) is similarly thin, but the card still functions as an unconditional evasion outlet regardless.

**No graveyard hate available.** This cube's BG common/uncommon pool has no dedicated graveyard-hate card under the pool restrictions — a real gap against the cube's heavy flashback/self-mill environment. Noted rather than forced into an awkward inclusion.

### Cards Considered but Excluded

**Rares/mythics cut solely by the 5-card cap** (all are strong Aristocrats/Sacrifice fits — swap in if you loosen the restriction or cut one of the current 5):
- Voldaren Bloodcaster // Bloodbat Summoner (R) — flying Blood-token engine, would've been a 6th rare
- Sorin, Imperious Bloodlord (M) — Vampire sac-outlet planeswalker, but Vampire count is thin here anyway
- Maelstrom Pulse (R) — premium unconditional BG removal, lost out to keeping the engine pieces
- Collective Brutality (R) — discard/drain/edict modal spell, excellent but rare-capped
- Tireless Tracker (R) — strong value engine, more landfall/clues than sac-payoff
- The Gitrog Monster (M) — huge BG value engine, would be a great alternative finisher
- Wrenn and Seven (M) — lands-matter planeswalker, off-theme for this build
- Eldritch Evolution / Hermit Druid / Cryptolith Rite (R) — combo/ramp pieces, not this deck's plan
- Decimator of the Provinces / Distended Mindbender / Griselbrand (R/R/M) — huge emerge/reanimator payoffs, too far off the deck's 1.92 avg CMC to justify a rare slot
- Deathcap Glade (R, land) — second BG dual, cut to make room for one of the 5 spell/creature rares

**Uncommons/commons a tier below the current includes:**
- Indulgent Aristocrat (swapped out for Ecstatic Awakener during the self-grill review)
- Soul Separator (swapped out for Demonmail Hauberk — 8 total mana to activate was too slow for this curve)
- Restless Bloodseeker // Bloodsoaked Reveler — solid Blood-token engine, close cut behind Ghoulish Procession
- Lumberknot / Spore Crawler / Voldaren Epicure — fine death-trigger payoffs, but weaker rate than what's included
- It of the Horrid Swarm — emerge finisher, too far off-curve for a lean 40

**Sideboard-tier considerations not included:**
- Moonlight Hunt — fight removal keyed off Wolves/Werewolves you control (Young Wolf, Garruk's tokens); close alternate to Duel for Dominance/Clear Shot
- Chalice of Life // Chalice of Death — lifegain-into-drain, off-theme enough to leave in the pool
- Cryptolith Fragment // Aurora of Emrakul — artifact value, doesn't address a specific matchup weakness

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     1.92   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  82.6%  prod  81.2%  gap  +1.4pp  [OK]
  G  demand  17.4%  prod  18.8%  gap  -1.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: max 2 copies each - verified, no violations
[PASS] Rares/mythics: max 1 copy each - verified, no violations
[PASS] Max 5 rares/mythics total (main+SB): exactly 5/5
       (Gravecrawler, Skirsdag High Priest, The Meathook Massacre,
        Garruk Relentless, Westvale Abbey)
[PASS] All cards within BG color identity (or colorless)
```
