---
deck_name: "ugb-aristocrats-emerge"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UGB"
format: "40-card"
built_at: "2026-07-09T03:27:49Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

A black-leaning UGB sacrifice deck. Cheap, renewable bodies (undying Young Wolf/Butcher Ghoul, self-tutoring Wretched Throng) die over and over into Blood Artist, Morbid Opportunist, and Demonic Taskmaster's forced upkeep sacrifice -- then get fed into six colossal Emerge Eldrazi, each of which turns "sacrifice a creature" into a game-swinging trigger (mass tap, discard, draw, life drain, token generation, or a team-wide pump/haste finisher). The Meathook Massacre doubles as a scaling board wipe and a permanent drain engine once it's down.

### LANDS (16)
```
6x Swamp
2x Island
2x Forest
2x Contaminated Aquifer    UB dual, enters tapped
2x Haunted Mire             BG dual, enters tapped
2x Tangled Islet            GU dual, enters tapped
```

### CREATURES (19)
```
CMC  Card                              Qty  Color  Role                            Rar
  1  Young Wolf                        x2   G      Renewable fodder (undying)      C
  1  Ecstatic Awakener // Awoken Demon x1   C      Sac outlet / draw / threat      C
  2  Butcher Ghoul                     x2   B      Renewable fodder (undying)      C
  2  Blood Artist                      x2   B      Death payoff (drain 1)          U
  2  Wretched Throng                   x2   U      Renewable fodder (self-tutor)   C
  2  Skirsdag High Priest              x1   B      Token generator / big body      R
  3  Demonic Taskmaster                x1   B      Forced sac engine (upkeep)      U
  3  Morbid Opportunist                x1   B      Card advantage engine           U
  2  Ambush Viper                      x1   G      Flash removal (deathtouch)      C
  7  Wretched Gryff                    x1   U      Emerge payoff: draw a card      C
  8  Abundant Maw                      x1   B      Emerge payoff: 3 life drain     C
  8  It of the Horrid Swarm            x1   G      Emerge payoff: 2 fodder tokens  C
  8  Elder Deep-Fiend                  x1   U      Emerge payoff: mass tap         R
  8  Distended Mindbender              x1   B      Emerge payoff: double discard   R
 10  Decimator of the Provinces        x1   G      Emerge payoff: team finisher    R
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Tragic Slip              x1    B      Removal (Morbid -13/-13)   C
  1  Village Rites             x1    B      Sac outlet, draw 2         C
  2  Infernal Grasp            x1    B      Unconditional removal      U
  2  Duel for Dominance        x1    G      Fight removal (Coven)      C
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty   Color  Role                         Rar
  2  The Meathook Massacre    x1    B      Scaling wipe / drain engine  M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                  Rar
Clear Shot              x1    G      Vs. big blockers/attackers               U
Ghoulish Procession      x1    B      Vs. grindy matchups, more bodies         U
Eaten Alive              x1    B      Vs. indestructible/hexproof-ish threats  C
Killing Wave             x1    B      Vs. go-wide aggro/tokens                 U
Sever the Bloodline      x1    B      Vs. tokens/recursive/legendary bombs     U
Compelling Deterrence    x1    U      Vs. combo/control (tempo + discard)      U
Murderous Compulsion     x1    B      Vs. aggro (kills tapped attackers)       C
Spontaneous Mutation     x1    U      Vs. one big evasive threat               C
Deadly Allure            x1    BG     Vs. must-answer blocker/attacker         U
Imprisoned in the Moon   x1    U      Vs. problem noncreature permanents       C
```

## ANALYSIS

**The color field vs. color identity gap.** The six Emerge Eldrazi print with a fully generic mana cost ({7}, {8}, {8}, {8}, {8}, {10}) -- their `colors` field is empty ("C" in the tables above) because none of their symbols live in the printed cost. Their actual color comes entirely from the Emerge alternative cost text: Elder Deep-Fiend's Emerge is `{5}{U}{U}`, Distended Mindbender's is `{5}{B}{B}`, Decimator of the Provinces's is `{6}{G}{G}{G}`. This is why the deck is genuinely 3-color despite half its creature base showing "colorless" in a strict mana-cost table -- and why the mana base carries meaningfully more U/G support (6 sources each) than the visible spell count alone would justify.

**Two rounds of self-grill produced two concrete fixes.** The first build ran Sanitarium Skeleton and Spore Crawler in the fodder slots and left the land base at 6 Swamp/1 Island/2 Forest/duals. An independent Challenger review flagged that (a) Skirsdag High Priest doesn't actually sacrifice anything -- it taps two creatures -- so "fodder engine" overstated what it does (it's really a token generator that also happens to make a big, sacrificeable body); (b) only 3 maindeck removal spells is thin for a deck that wants to survive to turn 6-8; and (c) 5 blue and 6 green sources were workably thin for UU/GGG emerge costs. Spore Crawler was cut for Demonic Taskmaster (a guaranteed, mandatory death trigger every upkeep -- strictly better fuel for Blood Artist/The Meathook Massacre/Morbid Opportunist than a one-shot draw-on-death body), and Sanitarium Skeleton was cut for Ambush Viper (adds a 4th removal spell and shores up green rather than adding more black). The land base moved from 6/1/2 Swamp/Island/Forest to 6/2/2, which brought the audit from FAIL (B gap +16pp) to PASS with U and G tied at 6 sources apiece.

**Morbid is trivially live.** With Young Wolf, Butcher Ghoul, Blood Artist, Wretched Throng, Village Rites, Ecstatic Awakener // Awoken Demon, Demonic Taskmaster, and the Emerge sacrifices themselves all producing death events, Tragic Slip is functionally "kill anything for {B}" from turn 2 onward in most games. The same density makes Skirsdag High Priest's Morbid clause and The Meathook Massacre's X-cost scaling reliable rather than aspirational.

**Emerge fodder math.** The dedicated renewable package (Young Wolf x2, Butcher Ghoul x2 -- each dies twice via undying; Wretched Throng x2 -- each death fetches a fresh copy to hand) generates roughly 6-8 sacrifice-eligible events across a game before the deck needs to lean on incidental deaths (combat, opposing removal, Skirsdag High Priest's tapped-not-sacked Demon token). Since the plan only needs one or two successful Emerge casts per game to take over, and every Eldrazi can simply be hard-cast at its full printed cost if fodder runs dry, this is tight but sufficient -- not overflowing.

**Zombie synergy is a real, if minor, bonus.** Butcher Ghoul and Wretched Throng are both Zombies, which quietly turns sideboard Compelling Deterrence's "discard a card if you control a Zombie" clause from conditional to close-to-guaranteed.

**Splash considered and declined.** Lingering Souls, Bloodtithe Harvester, and Fleshtaker (all off-color W/R Aristocrats-cluster cards) were tempting, but the deck already spends its entire fixing budget on 3 colors (6 dual lands across UB/BG/GU) -- a 4th color would stretch that thin for marginal gain. Declined.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (the cap was never actually violated -- these lost out on merit, not just budget):
- Sorin, Imperious Bloodlord (M, B) -- double sac outlet + 3-damage/3-life drain + reanimation-adjacent -3. The strongest cut; would be the natural 6th rare/mythic if you want to push further into the plan.
- Grimgrin, Corpse-Born (M, B/U) -- repeatable free sac outlet stapled to removal-on-attack and a growing body. Flagged independently by the Challenger review as possibly outperforming Skirsdag High Priest for the black engine slot.
- Gravecrawler (R, B) -- a real 1-drop recursive fodder engine, but needs more Zombie density than this build carries to recur reliably; only 2 Zombies (Butcher Ghoul, Wretched Throng) currently.
- Eldritch Evolution (R, G) -- sac-tutor, but our fodder's mana values are too low to search up anything bigger than a vanilla body; doesn't reach the Eldrazi.
- Heartless Summoning (R, B) -- reduces creature costs by {2} but also -2 toughness, which kills most of the 1-2 toughness fodder base outright. Actively anti-synergistic here despite being a suggested keystone.
- Cryptolith Rite (R, G) -- excellent mana engine, but it's the backbone of a Go-Wide Token Swarm sub-archetype that wasn't chosen, not this one.
- Voldaren Bloodcaster // Bloodbat Summoner, Maelstrom Pulse, Collective Brutality, Westvale Abbey // Ormendahl, Profane Prince -- all solid, all would've been a 6th+ rare with no clear edge over what's in the 40.

**Uncommons a tier below the chosen includes:**
- Restless Bloodseeker // Bloodsoaked Reveler (U, B) -- close second to Demonic Taskmaster for the engine slot; conditional on gaining life first.
- Indulgent Aristocrat (U, B) -- sac outlet with a Vampire-counters upside that's mostly dead text without more Vampire density.
- Biolume Egg // Biolume Serpent (U, U) -- sacrifice-and-return-transformed fodder; lost out to Wretched Throng for a slightly lower curve.
- Vilespawn Spider (U, G/U) -- self-mill/token/sac hybrid; belongs more to a Token Swarm build.
- Falkenrath Torturer (C, B) -- free repeatable sac outlet; redundant with Village Rites/Ecstatic Awakener // Awoken Demon.
- Gluttonous Guest (C, B) -- Blood token generator; redundant with existing token/card-advantage pieces.

**Sideboard-tier considerations not included:**
- Moonlight Hunt (U, G) -- conditional removal needing a Wolf/Werewolf on board; Young Wolf enables it but it's fragile compared to Clear Shot.
- Silent Departure (C, U) -- redundant tempo bounce next to Compelling Deterrence.
- Grapple with the Past, Forbidden Alchemy -- self-mill support for a Self-Mill/Graveyard Ramp path that wasn't chosen; revisit if you want to pivot the deck's identity later.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.42   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  66.7%  prod  62.5%  gap  +4.2pp  [OK]
  G  demand  22.2%  prod  37.5%  gap -15.3pp  [OK]
  U  demand  11.1%  prod  37.5%  gap -26.4pp  [OK]
```
Note: this tool only counts pips visible in printed `mana_cost` fields, so it cannot see the UU/BB/GGG buried in the three rares' Emerge cost text. Land production (U=6, G=6, B=10 out of 16) was deliberately set higher on U/G than the raw percentages above would suggest, specifically to support those hidden costs -- see Analysis above.

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: no card exceeds 2 copies (main+sideboard checked individually)
[PASS] Rares/mythics: all 5 are singletons (Elder Deep-Fiend, Distended Mindbender,
       Decimator of the Provinces, The Meathook Massacre, Skirsdag High Priest)
[PASS] Rares/mythics global cap: 5 total across mainboard+sideboard (cap was 5,
       extendable to 6 if needed -- not needed here)
[PASS] No off-color cards: every card's color_identity is a subset of {U, G, B}
```
