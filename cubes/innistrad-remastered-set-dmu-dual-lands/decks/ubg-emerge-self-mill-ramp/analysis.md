---
deck_name: "ugb-emerge-self-mill-ramp"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UGB"
format: "40-card"
built_at: "2026-07-09T03:15:44Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
2x Island
4x Swamp
4x Forest
2x Contaminated Aquifer      U/B dual, enters tapped
2x Haunted Mire              B/G dual, enters tapped
2x Tangled Islet             G/U dual, enters tapped
```

### CREATURES (17)
```
CMC  Card                                    Qty   Color  Role                          Rar
  1  Young Wolf                              x2    G      Undying sac fodder            C
  1  Gravecrawler                            x1    B      Recursive fodder (Zombie)     R
  2  Butcher Ghoul                           x2    B      Undying sac fodder + Zombie   C
  2  Vilespawn Spider                        x2    GU     Self-mill + sac outlet        U
  3  Grizzled Angler // Grisly Anglerfish    x1    C      Repeatable self-mill engine   U
  7  Wretched Gryff                          x2    C      Emerge Eldrazi cantrip        C
  8  Abundant Maw                            x2    C      Emerge Eldrazi life swing     C
  8  Distended Mindbender                    x1    C      Emerge Eldrazi hand-strip     R
  8  Elder Deep-Fiend                        x1    C      Emerge Eldrazi mass tap       R
  8  It of the Horrid Swarm                  x2    C      Emerge Eldrazi + fodder       C
 10  Decimator of the Provinces              x1    C      Emerge Eldrazi team pump      R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                          Qty   Color  Role                          Rar
  1  Tragic Slip                   x2    B      Cheap removal, morbid upside  C
  1  Eaten Alive                   x1    B      Exile removal, sac-friendly   C
  2  Infernal Grasp                x2    B      Unconditional removal         U
  2  Grapple with the Past         x1    G      Selective mill + recursion    C
```

### OTHER SPELLS (1)
```
CMC  Card             Qty   Color  Role                       Rar
  2  Cryptolith Rite   x1   G      Ramp + universal fixing    R
```

## SIDEBOARD (10)
```
Card                                       Qty   Color  Role / When to board in                          Rar
Killing Wave                               x1    B      Pseudo-sweeper vs. aggro/token swarms             U
Syncopate                                  x1    U      Counter vs. control/combo bombs                   C
Village Rites                              x1    B      Sac + draw 2 vs. removal-heavy decks               C
Duel for Dominance                         x1    G      Extra fight-removal vs. creature mirrors          C
Ambush Viper                               x1    G      Flash deathtouch blocker vs. aggro                C
Covetous Castaway // Ghostly Castigator    x1    C      Recursive flyer / self-GY reset, not opp. hate    U
Ghoulish Procession                        x1    B      Extra Zombie on death; reinforces Gravecrawler    U
Murderous Compulsion                       x1    B      Conditional removal (tapped only) vs. slow decks  C
Clear Shot                                 x1    G      Fight-removal vs. big/evasive threats             U
Splinterfright                             x1    G      Extra scaling GY threat in grindy matchups        U
```

## ANALYSIS

**The Emerge math.** Emerge costs are reduced by the sacrificed creature's mana value: sac a Young Wolf (MV1) into Elder Deep-Fiend (Emerge {5}{U}{U}) and you're casting an 8-mana flash mass-tap effect for {4}{U}{U} — 6 total mana, achievable turn 5-6 with any ramp online. Sac a Butcher Ghoul (MV2) instead and it drops to {3}{U}{U} (5 mana). Because Young Wolf and Butcher Ghoul are both undying, and Gravecrawler recurs from the yard as long as a Zombie (Butcher Ghoul qualifies) is in play, the fodder base regenerates instead of running out — this is what lets the deck realistically cast 2-3 Eldrazi in a long game instead of just one.

**Colored mana hides in the Emerge text, not the printed cost.** All six Eldrazi print with a fully generic mana cost (e.g. Decimator of the Provinces is nominally {10}) — the color requirement lives entirely in the Emerge line (Decimator: Emerge {6}{G}{G}{G}). Automated pip-counting tools that only read printed mana costs will under-report this deck's true color demand. Accounting for Emerge pips by hand, true colored demand is roughly U 23%, B 40%, G 37% against a land base producing U 37.5%, B 50%, G 50% — comfortable in every color, with the heaviest single demand (Decimator's GGG) covered by 8 green sources. If mana-screwed in one color, every Eldrazi can still be hard-cast for pure generic mana with zero color requirement as a fallback.

**Self-mill can strand your own payoffs — Grapple with the Past is the safety valve.** Vilespawn Spider (1 mill/upkeep) and Grizzled Angler (2 mill/activation, repeatable) have no card selection; over a long game they can mill away a copy of an Eldrazi with no way back. Grapple with the Past directly answers this: mill 3, then optionally return a creature or land to hand — it can rescue a milled Eldrazi, a key fodder creature, or a missed land drop. This is why Grizzled Angler was trimmed to one copy rather than two: less raw blind-mill volume, in exchange for one slot of selective recursion.

**Gravecrawler's one dependency.** Gravecrawler can't count itself for its own recursion condition — in this list, Butcher Ghoul (x2) is the only Zombie that keeps it live. If both copies are gone, Gravecrawler is stranded in the yard as a dead card. Ghoulish Procession is sideboarded specifically to shore this up: it turns any creature death (including Emerge sacrifices) into a bonus 2/2 Zombie once per turn, giving Gravecrawler a second, self-sustaining enabler in matchups where a long grind is expected.

**No dedicated opponent-facing graveyard hate exists in this cube's UGB commons/uncommons.** Covetous Castaway // Ghostly Castigator was the closest candidate, but its back-face ability only shuffles cards from your own graveyard — it doesn't touch an opponent's graveyard at all. It's sideboarded as a recursive flyer / self-reset tool (useful if your own yard gets over-milled or hated out), not as true graveyard hate. Real answers to opposing flashback/delve/reanimator strategies would need to come from the rare slot (see Invasion of Innistrad below), which the 5-card cap doesn't leave room for here.

**Morbid triggers itself constantly.** With undying creatures, Emerge sacrifices, and Vilespawn Spider's outlet all producing deaths on a normal turn, Tragic Slip is almost always live as unconditional -13/-13 rather than the fair-rate -1/-1, and Village Rites (sideboard) is close to a free cantrip whenever a creature is about to die anyway (attacking into a bigger blocker, dying to a sweeper).

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (mainboard uses all 5: Elder Deep-Fiend, Distended Mindbender, Decimator of the Provinces, Gravecrawler, Cryptolith Rite):
- **Eldritch Evolution** — sacrifices a creature to search for and *put onto the battlefield* a creature with mana value ≤ (sacrificed MV + 2). Excluded on more than budget grounds: it puts the creature into play rather than casting it, so it does not trigger any Eldrazi's "when you cast this spell" ability — it would cheat a vanilla body into play and waste the entire point of the archetype.
- **Heartless Summoning** — "Creature spells you cast cost {2} less. Creatures you control get -1/-1." The blanket -1/-1 kills the two 1/1 Insect tokens It of the Horrid Swarm makes on cast, and turns Young Wolf into a 0/0 the instant it resolves (before it even gets a counter) — real anti-synergy with a deck built on small, high-value fodder bodies, not just a budget cut.
- **Gisa and Geralf** (B/U) — mills 4 on ETB and lets you cast a Zombie from the graveyard each turn; would be an excellent second Gravecrawler-enabler and self-mill piece. First card to add back if the rare cap is ever relaxed.
- **Maelstrom Pulse** (B/G) — unconditional removal for any nonland permanent. Second priority add-back if the cap loosens; currently the removal suite leans on Infernal Grasp x2 as the only unconditional answers.
- **The Meathook Massacre** (B) — powerful sweeper + drain, but its -X/-X hits our own undying/token board just as hard; would need careful sequencing to be one-sided. Noted as a power-level option, not a clean fit.
- **Hermit Druid** (G) — mills the entire library until a basic land type not among controlled lands; too high-variance for a competitive 40-card metagame (can strand itself or deck the player out) independent of the budget cut.

**Uncommons/commons a tier below the chosen includes:**
- **Deranged Assistant** (U) — mill 1 + add {C}; cut because Grizzled Angler + Grapple with the Past already cover the self-mill/ramp niche without adding a third near-identical effect.
- **Moldgraf Millipede / Eccentric Farmer / Scorned Villager / Somberwald Sage** — additional self-mill payoffs and mana dorks, all viable swap-ins if the shell should lean further toward pure ramp over the current removal/Eldrazi balance.
- **Sanitarium Skeleton / Haunted Dead / Ecstatic Awakener** — alternate resilient-fodder or sac-outlet options; Sanitarium Skeleton in particular doesn't depend on the Zombie condition the way Gravecrawler does, and is a reasonable direct swap for Gravecrawler if a less fragile fodder engine is wanted (at the cost of freeing up a rare slot elsewhere).
- **Forbidden Alchemy** — card selection + graveyard fill with flashback; a good upgrade candidate over a copy of Tragic Slip in matchups where digging matters more than trading.

**Sideboard-consideration cards not included:**
- **Deadly Allure** (B/G) — forces a block + deathtouch, flashback for redundancy; close alternative to Duel for Dominance/Clear Shot.
- **Compelling Deterrence** (U) — bounce + discard tempo play; useful vs. slower decks that overextend into sorcery-speed answers.
- **Imprisoned in the Moon** (U) — turns any nonland permanent into a land; a real answer to hexproof/indestructible threats the removal suite can't otherwise touch.
- **Summary Dismissal / Geistlight Snare** (U) — heavier counterspell tech vs. dedicated control, if Syncopate alone isn't enough.
- **Moonlight Hunt** (G) — initially considered as removal, but it only deals damage equal to the power of Wolves/Werewolves controlled; with only 2 Young Wolf as Wolves in the whole 40, it's too narrow here and was swapped for Clear Shot.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 17 recommended  [PASS]
Avg CMC:     4.04   Ramp cards: 0 (tool doesn't recognize Cryptolith Rite as ramp; functionally it is)

Color Balance (core), automated (undercounts Emerge alt-cost pips):
  B  demand  50.0%  prod  50.0%  gap  +0.0pp  [OK]
  G  demand  37.5%  prod  50.0%  gap -12.5pp  [OK]
  U  demand  12.5%  prod  37.5%  gap -25.0pp  [OK]

Manually recomputed true demand (printed costs + Emerge alt-cost pips):
  U  demand ~23.3%  prod 37.5%  [comfortable]
  B  demand ~40.0%  prod 50.0%  [comfortable]
  G  demand ~36.7%  prod 50.0%  [comfortable, covers Decimator's GGG]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: none exceed 2 copies (basics exempt by convention)
[PASS] Rares/mythics: none exceed 1 copy (Elder Deep-Fiend, Distended Mindbender,
       Decimator of the Provinces, Gravecrawler, Cryptolith Rite)
[PASS] Global rare/mythic cap: 5 used / 5 allowed, all in mainboard —
       sideboard is entirely commons/uncommons
[PASS] Mainboard: 40 cards exactly
[PASS] Sideboard: 10 cards exactly
```
