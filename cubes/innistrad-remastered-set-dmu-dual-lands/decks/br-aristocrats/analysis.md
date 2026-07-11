---
deck_name: "br-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-07-08T21:18:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

A lean, low-curve Black-Red sacrifice deck built around the cube's deepest tagged cluster (Aristocrats/Sacrifice, 59 cards). Cheap fodder (Voldaren Epicure, Bloodtithe Harvester's Blood tokens) feeds free or near-free outlets (Falkenrath Torturer, Village Rites, Indulgent Aristocrat) into death-trigger payoffs (Blood Artist, Morbid Opportunist, The Meathook Massacre, Skirsdag High Priest). Zealous Conscripts converts the opponent's best blocker into a Threaten-then-sacrifice removal spell, and a light White splash carries a single copy of Archangel Avacyn as a high-ceiling, low-probability bonus.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
1x  Westvale Abbey // Ormendahl, Profane Prince    Colorless utility land; sac 5 creatures late to flip into a 6/6 flying/lifelink/indestructible/haste finisher
1x  Geothermal Bog                                 BR dual, enters tapped
1x  Sacred Peaks                                   RW dual, enters tapped - core R source + the deck's main W-splash source
1x  Plains                                         W splash source (Avacyn)
10x Swamp
2x  Mountain
```

### CREATURES (15)

```
CMC  Card                       Qty  Color  Role                                          Rar
  1  Indulgent Aristocrat        x2   B      1-mana lifelink outlet, Vampire-counter payoff  U
  1  Voldaren Epicure            x2   R      Fodder + Blood token + 1 reach damage           C
  2  Blood Artist                x2   B      Core drain payoff on any death                  U
  2  Bloodtithe Harvester        x2   BR     Removal + outlet + Blood-token fodder producer   U
  2  Skirsdag High Priest        x1   B      Death-fueled 5/5 flying Demon engine (Morbid)    R
  3  Falkenrath Torturer         x2   B      Repeatable free sac outlet, evasion upside       C
  3  Morbid Opportunist          x2   B      Card draw on any death trigger                   U
  5  Zealous Conscripts          x1   R      Threaten effect -> feed to an outlet = removal   R
  5  Archangel Avacyn // Avacyn  x1   W      Protection + delayed board wipe (WW, splash)      M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                       Qty  Color  Role                                          Rar
  1  Tragic Slip                 x2   B      Removal; Morbid turns it into -13/-13           C
  1  Village Rites                x1  B      Free sac outlet, draws 2                        C
  2  Infernal Grasp              x2   B      Unconditional removal                           U
  2  Abrade                       x1  R      Flexible removal (creature or artifact)          U
  4  Sever the Bloodline          x1  B      Exile-all-copies removal, flashback              U
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty  Color  Role                                          Rar
  1  Traveler's Amulet            x1  C      Fixing insurance - can fetch the Plains for Avacyn  C
  2  The Meathook Massacre        x1  B      Keystone: sweeper + ongoing death-drain engine  M
```

## SIDEBOARD (10)

```
Card                       Qty  Color  Role / When to board in                            Rar
Killing Wave               x1   B      Vs. go-wide token/aggro strategies                  U
Boarded Window             x1   C      Vs. wide aggro (blunts attackers)                    U
Eaten Alive                x1   B      Vs. indestructible/recursive threats                 C
Murderous Compulsion       x1   B      Vs. aggressive decks (kills tapped attackers)         C
Butcher Ghoul               x1  B      Vs. aggro (undying blocker, dies twice for value)     C
Fiery Temper                x1  R      Vs. racing/burn matchups (reach)                      U
Alchemist's Greeting         x1 R      Vs. bigger creatures                                  C
Abrade                       x1 R      Vs. artifact/vehicle-heavy decks (2nd copy)           U
Geistcatcher's Rig            x1 C     Vs. Spirits/Angels (flyer-heavy) matchups             U
Ghoulish Procession            x1 B    Upgrade vs. grindy/removal-heavy matchups             U
```

## ANALYSIS

**The engine loop.** Ten cards in this list are outlets or fodder-producers that trigger on demand: Village Rites, Falkenrath Torturer (x2), Indulgent Aristocrat (x2), Bloodtithe Harvester (x2, both as an ETB Blood-token maker and a self-sacrificing removal spell), plus Zealous Conscripts feeding a stolen creature into any of the above. That's enough density that Morbid (Tragic Slip, Skirsdag High Priest) and the death-payoffs (Blood Artist x2, Morbid Opportunist x2, The Meathook Massacre) are live most turns from turn 2 onward.

**Blood token sub-package.** Voldaren Epicure (x2) and Bloodtithe Harvester (x2) can put up to 4 Blood tokens on the battlefield across the two card types. Each Blood token is itself a free sacrifice for Bloodtithe Harvester's own -X/-X ability (X = 2 x Blood tokens controlled), so a board with 2+ Blood tokens turns a second copy of Bloodtithe Harvester into a repeatable -4/-4 or better.

**Vampire sub-synergy (incidental, not the plan).** Indulgent Aristocrat, Voldaren Epicure, Blood Artist, and Bloodtithe Harvester are all Vampires - up to 7 other Vampire bodies for Indulgent Aristocrat's counter ability to buff, on top of its own copies.

**Zealous Conscripts as removal.** This card was explicitly requested despite not being tagged into the Aristocrats/Sacrifice cluster (its tag is Blink/ETB) - the actual line justifying it: steal the opponent's best blocker or biggest threat, swing with it (haste), then feed it to Falkenrath Torturer, Village Rites, Bloodtithe Harvester, or Westvale Abbey before end of turn. The creature never returns to its owner. That's a Threaten effect converted into unconditional removal, plus a full Blood Artist/Meathook Massacre/Morbid Opportunist trigger off the kill.

**Archangel Avacyn - a disclosed risk, not a hidden one.** Avacyn's real casting cost is `{3}{W}{W}` - double white - despite showing R/W in color identity (the back face, Avacyn the Purifier, carries a color indicator with no mana cost of its own). The manabase carries only 2 dedicated W sources (Sacred Peaks + 1 Plains) in 16 lands. A hypergeometric check puts the odds of having both W sources in hand/on board by turn 5 at roughly 7%, climbing to only ~38% even by turn 12+. The automated mana audit tool's splash-requirement formula only evaluates single-color splashes, so its overall PASS does not validate Avacyn specifically - this was caught in the self-grill Challenger pass and is disclosed here rather than papered over. Traveler's Amulet was added to the maindeck specifically to improve the odds of finding the Plains, but this remains a genuine, user-authorized risk: treat Avacyn as a high-ceiling bonus draw, not a reliable keystone. If it undercasts too often in practice, cutting it for Sorin, Imperious Bloodlord (the strongest excluded rare, see below) and dropping the W splash entirely is the cleanest fix - but that requires freeing a rare/mythic slot.

**The 5-slot rare/mythic budget is fully spent, with zero slack.** The Meathook Massacre, Skirsdag High Priest, Zealous Conscripts, Archangel Avacyn, and Westvale Abbey use all 5 allowed copies across main + sideboard combined. Any future upgrade that adds a rare/mythic (see below) requires cutting one of these five first.

### Cards Considered but Excluded

**Rares/mythics cut solely due to the 5-card budget cap** (all are legitimately in-identity for BR and would be strong includes with more room):

- **Gravecrawler** `{B}` - "This creature can't block. / You may cast this card from your graveyard as long as you control a Zombie." The single best recursive-fodder card in the pool for this exact archetype (near-infinite sac fodder once one Zombie is online); cut only because the budget was already spoken for.
- **Sorin, Imperious Bloodlord** `{1}{B}{B}` (mythic) - repeatable Vampire sac-into-removal-and-lifegain planeswalker; the strongest single upgrade candidate if a rare/mythic slot opens up.
- **Distended Mindbender** `{5}{B}{B}` (emerge `{5}{B}{B}`) - sacrifice a creature to cast, then strip two cards from the opponent's hand; a strong late-game sac sink.
- **Voldaren Bloodcaster // Bloodbat Summoner** `{1}{B}` - ETB and death-trigger Blood-token generator that flips into a hasty attacker at 5 tokens; would have slotted directly into the Blood-token sub-package.
- **Vexing Devil** `{R}` - explosive 1-drop, either 4 damage or a body to sacrifice; strong but more aggro-lean than this list's game plan.
- **Captivating Vampire**, **Bloodhall Priest**, **Bloodline Keeper // Lord of Lineage**, **Olivia Voldaren** - all strong Vampire-tribal payoffs, crowded out by the same budget cap plus a tribal sub-theme that's incidental here, not the core plan.

**Uncommons/commons a tier below the chosen includes:**

- **Ghoulish Procession** `{1}{B}` - "Whenever one or more nontoken creatures die, create a 2/2 black Zombie creature token with decayed. Once each turn." No controller restriction (triggers off opponents' deaths too), which the self-grill Challenger flagged as stronger than the card it replaced in the maindeck (Blood Petal Celebrant). Placed in the sideboard as the clearest upgrade path.
- **Ecstatic Awakener // Awoken Demon** `{1}` - outlet + looter that flips into a large threat; a fine inclusion, edged out by the tighter core outlets.
- **Restless Bloodseeker // Bloodsoaked Reveler** - lifegain-triggered Blood-token engine; good with Indulgent Aristocrat's lifelink, but redundant with Bloodtithe Harvester's token generation.
- **Demonic Taskmaster**, **Desperate Farmer // Depraved Harvester**, **Gluttonous Guest**, **Haunted Dead**, **Demonmail Hauberk**, **Siege Zombie**, **Abundant Maw** - all playable fodder/payoff pieces that lost out to the tighter 24-card curve; any of these are reasonable swaps if the deck needs more bodies.

**Sideboard-consideration cards not chosen:** Neonate's Rush and Savage Alliance (both flexible burn/reach, edged out by Fiery Temper/Alchemist's Greeting), Wild-Field Scarecrow (land-fetch anti-flood tech, weaker than Traveler's Amulet now that it's maindeck), Blazing Torch (cheap anti-Vampire/Zombie equipment, narrow).

### Self-grill revision note

The original build ran Blood Petal Celebrant instead of Traveler's Amulet. The Challenger agent in the self-grill pass flagged two issues: (1) Blood Petal Celebrant was the weakest payoff in the 24 (a one-shot Blood token with no repeatable trigger), and (2) Archangel Avacyn's actual WW casting cost is barely supported by only 2 W sources (~7% to have both by turn 5) and the automated mana-audit tool never actually validates multi-color splash cards like Avacyn (its splash formula only checks single-color splashes). Both issues were resolved with one swap: Traveler's Amulet replaced Blood Petal Celebrant, directly improving the odds of finding the Plains for Avacyn. This is a partial mitigation, not a full fix - the WW requirement remains a real risk, disclosed above rather than hidden.

## MANA AUDIT: PASS

```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  76.0%  prod  68.8%  gap  +7.2pp  [OK]
  R  demand  24.0%  prod  25.0%  gap  -1.0pp  [OK]
```

Note: the tool's splash_check does not evaluate Avacyn's WW requirement (its formula only checks single-color splash cards) - see the Analysis section above for the manually-verified risk assessment.

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: all <= 2 copies (main+SB combined)
[PASS] Rares/mythics: all <= 1 copy each
[PASS] Max 5 rares/mythics total (main+SB): exactly 5/5
       (Meathook Massacre, Skirsdag High Priest, Zealous Conscripts,
        Archangel Avacyn, Westvale Abbey)
[PASS] All 50 cards (40 main + 10 SB) confirmed present in the cube pool
       by exact name (independently verified by the Challenger agent)
```
