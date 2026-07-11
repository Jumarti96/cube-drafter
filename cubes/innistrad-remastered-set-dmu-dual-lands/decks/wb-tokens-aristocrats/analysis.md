---
deck_name: "wb-tokens-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-07-08T20:40:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
6x Plains
8x Swamp
2x Sunlit Marsh          WB dual, enters tapped, {T}: Add {W} or {B}
```

### CREATURES (12)
```
CMC  Card                                                          Qty   Color  Role                                    Rar
  1  Gravecrawler](https://scryfall.com/search?q=!"Gravecrawler")  x1    B      Recursive sac fodder                    R
  1  Thraben Inspector](https://scryfall.com/search?q=!"Thraben Inspector")  x2    W      Fodder + Clue card advantage            C
  2  Blood Artist](https://scryfall.com/search?q=!"Blood Artist")  x2    B      Aristocrats drain payoff                 U
  2  Skirsdag High Priest](https://scryfall.com/search?q=!"Skirsdag High Priest")  x1    B      Tap-2 into a 5/5 flying Demon             R
  3  [Falkenrath Torturer](https://scryfall.com/search?q=!"Falkenrath Torturer")  x2    B      Primary sac outlet, grows on Humans       C
  3  [Crusader of Odric](https://scryfall.com/search?q=!"Crusader of Odric")  x2    W      P/T = creatures you control               C
  3  [Morbid Opportunist](https://scryfall.com/search?q=!"Morbid Opportunist")  x1    B      Draw on any creature death                U
  4  [Mausoleum Guard](https://scryfall.com/search?q=!"Mausoleum Guard")  x1    W      Dies into two 1/1 flying Spirits          U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                                                          Qty   Color  Role                                    Rar
  1  Tragic Slip  x2    B      -1/-1, or -13/-13 once morbid is live      C
  2  Gather the Townsfolk  x2    W      2 (or 5) Human tokens                      C
  3  Lingering Souls  x2    WB     2 flying tokens, flashback for 2 more      U
```

### OTHER SPELLS (6)
```
CMC  Card                                                          Qty   Color  Role                                    Rar
  2  The Meathook Massacre  x1    B      Scalable wipe / drain finisher            M
  2  Ghoulish Procession  x1    B      Nontoken death into a 2/2 Zombie          U
  2  Intangible Virtue  x2    W      Token anthem (+1/+1, vigilance)            U
  3  Wedding Announcement // Wedding Festivity  x1    W      Recurring token/draw into team anthem     R
  5  Cathars' Crusade  x1    W      Every ETB counters up the whole board      R
```

## SIDEBOARD (10)
```
Card                                                          Qty   Color  Role / When to board in                     Rar
Cathar Commando  x2    W      Flash artifact/enchantment removal           C
Angelic Purge  x2    W      Sac-a-permanent exile vs. resilient threats  C
Soul-Guide Gryff  x2    W      Graveyard hate vs. flashback/reanimator      C
Valorous Stance  x2    W      Protect a payoff or kill a 4-tough threat    U
Boarded Window  x2    C      Damage-reduction insurance vs. aggro/burn    U
```

## ANALYSIS

Cheap token generators ([Gather the Townsfolk](https://scryfall.com/search?q=!"Gather the Townsfolk"), [Lingering Souls](https://scryfall.com/search?q=!"Lingering Souls"), [Thraben Inspector](https://scryfall.com/search?q=!"Thraben Inspector"), [Wedding Announcement](https://scryfall.com/search?q=!"Wedding Announcement"), [Ghoulish Procession](https://scryfall.com/search?q=!"Ghoulish Procession")) flood the board while [Blood Artist](https://scryfall.com/search?q=!"Blood Artist") / [The Meathook Massacre](https://scryfall.com/search?q=!"The Meathook Massacre") / [Morbid Opportunist](https://scryfall.com/search?q=!"Morbid Opportunist") convert every creature death — yours or theirs, combat or otherwise — into life drain and cards. [Falkenrath Torturer](https://scryfall.com/search?q=!"Falkenrath Torturer") is the deck's one proactive sac outlet; everything else feeds off deaths that were already going to happen. [Cathars' Crusade](https://scryfall.com/search?q=!"Cathars' Crusade") and [Intangible Virtue](https://scryfall.com/search?q=!"Intangible Virtue") turn a wide-but-small board lethal in a turn or two, and [Skirsdag High Priest](https://scryfall.com/search?q=!"Skirsdag High Priest") converts two tapped bodies into a 5/5 flier once something has died.

**Curve and threat density.** The deck runs a low curve (avg CMC 2.33, peaking at 9 two-drops) but its effective threat count is higher than the 12 creatures suggest: Gather the Townsfolk, Lingering Souls, Wedding Announcement, and Ghoulish Procession all mint bodies from noncreature/enchantment slots, so the real "thing on board" count across a game is closer to 20+. After a post-grill swap (see below) there's now exactly one card at each of CMC 4 and 5 (Mausoleum Guard, Cathars' Crusade) — thin at the top but intentional, since this is a proactive, low-to-the-ground plan rather than a ramp-into-bombs one.

**The Gravecrawler / Ghoulish Procession loop.** Ghoulish Procession triggers off *nontoken* creature deaths and makes a 2/2 Zombie. Since Gravecrawler is a Zombie and recurs from the graveyard "as long as you control a Zombie," a single Ghoulish Procession activation keeps the Gravecrawler engine alive indefinitely — sac Gravecrawler to Falkenrath Torturer, a nontoken death triggers Procession for a fresh Zombie, replay Gravecrawler off that Zombie, repeat. Each loop also pings Blood Artist and (once cast) Meathook Massacre.

**Morbid is trivial to turn on.** Tragic Slip's -13/-13 mode and Skirsdag High Priest's activation both require "a creature died this turn." With 5 token-making cards, 2 sac-outlet copies, and a board wipe in the 40, morbid is live from turn 2–3 onward in most games — Tragic Slip functions as a near-unconditional kill spell far more often than its base -1/-1 would suggest.

**Meathook Massacre's X.** Its cost is {X}{B}{B}; cast for X=1–2 early it's a cheap Human/Zombie-token sweep that still drains for every death, or held to X=4+ it's a one-sided wipe once your own board is protected by Intangible Virtue's +1/+1 or simply already spent (tokens that already did their job).

**Mana base.** 8 W sources / 10 B sources against a pip split that landed exactly 50/50 (14 B, 14 W) after the Mausoleum Guard swap — the extra B production (62.5% vs 50% demand) is deliberate slack for turn-1 Gravecrawler/Tragic Slip and Meathook's BB requirement.

**Data quality flags (caught during the self-grill, non-blocking):**
- *Lingering Souls*: this cube's enriched data lists its mana cost as `{2}{W}` with `colors: ["W"]` only — inconsistent with the real card ({1}{W}{B}) and with its own correctly-populated `color_identity: [B, W]`. The deck was built and audited using the correct real-world cost. Worth re-running `cuber enrich` on this card or checking its source printing.
- *Wedding Announcement // Wedding Festivity*: front-face `colors` field read `[]` in the raw cube data (should be `["W"]`); `color_identity` was correct. Didn't affect legality, only a display convenience field, and was corrected for the final deck files.

**Post-grill revision.** The self-grill Challenger flagged a real gap at 4 mana (zero 4-drops in the original 40) and suggested cutting the deck's only unconditional hard removal spell, Infernal Grasp, for Mausoleum Guard — a card whose death trigger (two 1/1 flying Spirits) both plugs the curve and feeds the aristocrats plan directly. That swap was applied; the mana audit was re-run afterward and still returns PASS.

**Known build tradeoff (flagged by the Challenger, not fixed).** Morbid Opportunist and Ghoulish Procession are run as 1-ofs despite being legal at 2 copies and being near-perfect engine pieces. Bumping either to a playset would mean cutting from Crusader of Odric or a Falkenrath Torturer — a reasonable swap to test once you've played a few games and know which matters more, raw stats or engine consistency.

**Cards Considered but Excluded**

*Rares/mythics cut by the 5-card cap* (31 WB-legal rares/mythics were available in the pool):
- **Bloodline Keeper // Lord of Lineage** (M) and **Sorin, Imperious Bloodlord** (M) — excellent token/aristocrats engines, but their best modes key off Vampire count/tribal density, and this list only runs 2 Vampires (Blood Artist, Falkenrath Torturer).
- **Liesa, Forgotten Archangel** (R, BW) — strong grindy aristocrats/graveyard payoff (returns your dying nontokens to hand, exiles opponents' dying creatures); the closest "next pick" if you want more late-game inevitability over Cathars' Crusade's speed.
- **Voldaren Bloodcaster // Bloodbat Summoner** (R) — efficient 2-mana Blood-token engine off any nontoken death; lost out to Gravecrawler for the recursive-fodder slot.
- **Distended Mindbender, Griselbrand, Emrakul, Brisela, Gisela, Bruna** — all powerful but off-plan (big-mana control/reanimator payoffs, not go-wide).
- **Vanquish the Horde** — redundant with Meathook Massacre as a sweeper.
- **Collective Brutality** — flexible removal/discard/drain; a reasonable alternative if you want more control-leaning interaction.
- **Decimator of the Provinces, Second Harvest, Unnatural Growth, Cryptolith Rite** (all G) — the original archetype brief's green half; excluded once WB (not WG) was locked in over the WG path. Decimator's emerge {6}{G}{G}{G} in particular is too green-intensive to splash lightly.

*Uncommons/commons a tier below the current includes:*
- **Village Rites** (C) — sac outlet + draw two; the deck's 24 nonland slots were full, but this is the first card to add if opening a slot.
- **Fleshtaker** (U) — second sac outlet with lifegain/scry; would help the "sac outlet density is thin" issue flagged during the grill (only Falkenrath Torturer is a proactive outlet).
- **Gluttonous Guest, Restless Bloodseeker // Bloodsoaked Reveler** (C/U) — Blood-token/lifegain fodder, solid but redundant with existing fodder count.
- **Indulgent Aristocrat** (U) — good sac payoff on paper, but its counters-on-Vampires mode is weak with only 2 Vampires in the list.

*Sideboard-tier considerations not included:*
- **Village Rites, Eaten Alive, Killing Wave** — alternate sac-cost removal/card-draw; Killing Wave in particular is a mini-wrath worth boarding in against other go-wide decks.
- **Murderous Compulsion, Sever the Bloodline, Fiend Hunter** — situational removal (tapped-only, anti-legend, flicker-exile) that lost out to the broader-hitting Angelic Purge and Cathar Commando.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.33   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  50.0%  prod  62.5%  gap -12.5pp  [OK]
  W  demand  50.0%  prod  50.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons at <=2 copies each        - all C/U entries are x1 or x2
[PASS] Rares/mythics at <=1 copy each              - 5 unique R/M, each x1
[PASS] Max 5 rares/mythics total (main + SB)       - exactly 5, all mainboard, 0 in sideboard
       Gravecrawler, Skirsdag High Priest, The Meathook Massacre,
       Wedding Announcement // Wedding Festivity, Cathars' Crusade
```
