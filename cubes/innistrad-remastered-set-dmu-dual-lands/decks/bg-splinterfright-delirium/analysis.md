---
deck_name: "bg-splinterfright-delirium"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-07-09T02:10:50Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
8x Forest
7x Swamp
1x Haunted Mire          BG dual, enters tapped
```

### CREATURES (15)
```
CMC  Card                             Qty   Color  Role                          Rar
  1  Groundskeeper                    x1    G      Land recursion, refuels loop   U
  2  Hermit Druid                     x1    G      Self-mill engine (key piece)   R
  2  Noose Constrictor                x1    G      Reach blocker, discard outlet  U
  2  Ambush Viper                     x1    G      Flash deathtouch, tempo        C
  3  Eccentric Farmer                 x1    G      ETB mill 3 + land recursion    C
  3  Splinterfright                   x1    G      Core payoff - P/T = GY count   U
  3  Morbid Opportunist               x1    B      Draws off any creature death   U
  4  Festerhide Boar                  x1    G      Efficient morbid beater        C
  4  Haunted Dead                     x1    B      Recurs itself from GY          U
  4  Grizzly Ghoul                    x1    BG     Counters off deaths this turn  U
  5  Moldgraf Millipede               x1    G      Core payoff - mill3+counters   C
  5  Midnight Scavengers              x1    B      Rebuys small GY creatures      C
  5  The Gitrog Monster               x1    BG     Keystone engine/payoff         M
  8  Ghoultree                        x1    G      Core payoff - discounted 10/10 U
 13  Emrakul, the Promised End        x1    C      Delirium finisher              M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                             Qty   Color  Role                          Rar
  1  Traverse the Ulvenwald           x1    G      Consistency / delirium tutor   R
  1  Tragic Slip                      x2    B      Cheap removal (morbid)         C
  2  Grapple with the Past            x1    G      Self-mill 3 + recursion        C
  2  Infernal Grasp                   x2    B      Unconditional removal          U
  4  Sever the Bloodline              x1    B      Exile removal + flashback      U
  5  Spider Spawning                  x1    G      Token payoff, flashback        U
```

### OTHER SPELLS (1)
```
CMC  Card                             Qty   Color  Role                          Rar
  2  The Meathook Massacre            x1    B      Scalable wrath + drain         M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                    Rar
Killing Wave            x1    B      vs go-wide token/aggro - scalable edict     U
                                     (symmetric: pay X life or sac too)
Boarded Window          x1    C      vs aggro - blunts attacker damage           U
Wild-Field Scarecrow    x1    C      vs aggro - 0/4 wall, sacs for lands         C
Blazing Torch           x1    C      vs Vampires/Zombies tribal - evasion+burn   C
Village Rites           x2    B      vs control/removal - protect value          C
Duel for Dominance      x2    G      vs big-creature midrange mirrors            C
Morkrut Banshee         x1    B      vs small-creature aggro - morbid -4/-4      U
Deadly Allure           x1    B      vs evasive/big threats - forces bad block   U
```

## ANALYSIS

**Delirium math.** The deck naturally sees 5 card types in the graveyard (Creature, Land, Instant, Sorcery, Enchantment via The Meathook Massacre) — comfortably clearing delirium's 4-type threshold by turn 4-5 in most games. That flips Traverse the Ulvenwald from a 1-mana basic-land tutor into a 1-mana creature-or-land tutor, and drives Emrakul, the Promised End's real-world cast cost down from a nominal {13} to roughly {8} once a few permanent types are in the yard.

**Self-mill density.** Six sources put cards in the graveyard independent of combat: Hermit Druid (deep single dig), Eccentric Farmer (mill 3 ETB), Grapple with the Past (mill 3), Moldgraf Millipede (mill 3 ETB), Splinterfright (mill 2 every upkeep once it resolves), and Traverse the Ulvenwald (indirectly, by thinning toward delirium). That's enough volume to reasonably expect 6-8 creature cards in the yard by turn 5-6, at which point Splinterfright is a 6/6+ trampler and Ghoultree is castable for single digits.

**Self-grill correction.** The original build included Bramble Wurm and Sanitarium Skeleton; both were cut after the Challenger agent flagged that their utility abilities (exile-from-graveyard for life, return-from-graveyard-to-hand) actively shrink the same graveyard the deck's payoffs are trying to grow. They were replaced with Spider Spawning (a second graveyard-count payoff that goes wide, with flashback for a second cast) and Grizzly Ghoul (rewards the deck's own removal suite by growing off any death that turn) — both direct upgrades for this specific archetype.

**Grizzly Ghoul / Meathook Massacre interaction.** Casting The Meathook Massacre for X=2+ and having Grizzly Ghoul in hand afterward is a real sequencing line — every creature that dies to the wrath (yours and the opponent's) adds a counter to Ghoul when it's cast post-wipe, so a board wipe can directly set up your own follow-up threat.

**No graveyard-hate sideboard slot.** BG has no dedicated graveyard-exile effect at common/uncommon in this pool (checked directly against the working pool — Sever the Bloodline and Soul Separator are the closest, and neither hates a graveyard broadly). If you face a mirror or another reanimator strategy, Sever the Bloodline and Killing Wave are the closest tools available; there's no clean answer to add without going into the rare/mythic budget, which is already at the 5-card cap.

**Why mostly singleton copies.** The pool rules allow up to 2 copies of any common/uncommon, but that allowance was only spent where duplication helps: Tragic Slip x2 and Infernal Grasp x2 mainboard, Village Rites x2 and Duel for Dominance x2 sideboard — all interchangeable, always-good effects where a second copy is exactly as useful as the first. The graveyard-payoff and self-mill pieces are each a distinct effect doing a specific job in the pipeline; with only 24 non-land slots, doubling any one of them means cutting a different effect entirely, which costs curve diversity and pipeline breadth in a synergy-dependent 40.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**

| Card | Why it lost out |
|---|---|
| Wrenn and Seven (M) | Belongs to the alternate "Gitrog/Wrenn lands-matter" build path, not chosen this time — its value depends on a heavier land-recursion package than this list runs |
| Garruk Relentless // Garruk, the Veil-Cursed (M) | Strong, but its payoff (tokens/aristocrats) is off the delirium-creature plan |
| Tireless Tracker (R) | Excellent value engine, but landfall/clue-based rather than graveyard-based — would have diluted the theme |
| Collective Brutality (R) | Flexible disruption, no clean slot within budget |
| Maelstrom Pulse (R) | Best generic removal available, cut in favor of Hermit Druid's higher archetype synergy |
| Deathcap Glade (R, land) | Strictly better than Haunted Mire (untapped) but is itself a rare — would have displaced a spell |
| Griselbrand (M) | Huge reanimator payoff, but no reanimation package (Edgar's Awakening, etc.) was built to support it |
| Gravecrawler (R) | Strong recursive 1-drop, but aristocrats-shaped rather than delirium-shaped |

**Uncommons/commons a tier below the chosen includes:**

- Epitaph Golem — graveyard utility, cut for slot efficiency
- Archghoul of Thraben — zombie-tribal looter, narrow without zombie critical mass
- Demonic Taskmaster — forced-sac liability without a dedicated fodder engine
- Galvanic Juggernaut — aggressive beater, but the must-attack clause fights a grindy game plan
- Murderous Compulsion — conditional removal, cut when The Meathook Massacre took its slot
- Bramble Wurm / Sanitarium Skeleton — cut this iteration (see Self-grill correction above)

**Sideboard-tier considerations not included:**

- Triskaidekaphobia — flagged by the Challenger as a near-dead card with no support for forcing an exact 13 life total; cut
- 2nd Blazing Torch — trimmed to one copy to avoid over-committing to a single narrow tribal answer
- Eaten Alive, Clear Shot — viable extra removal, left in the pool for future iteration
- Ulvenwald Mysteries — decent grindy card-advantage engine, alternate to Village Rites/Triskaidekaphobia

## MANA AUDIT: PASS
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.5   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand 46.2%  prod 50.0%  gap -3.8pp  [OK]
  G  demand 53.8%  prod 56.2%  gap -2.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at or under 2 copies each
[PASS] Rares/mythics at 1 copy each
[PASS] Max 5 rares/mythics total (main+SB): exactly 5, all mainboard
       (Hermit Druid, Traverse the Ulvenwald, The Gitrog Monster,
        Emrakul the Promised End, The Meathook Massacre) - 0 in SB
[PASS] Self-grill: cube membership, oracle text, color identity all
       independently verified by Proposer + Challenger agents
```
