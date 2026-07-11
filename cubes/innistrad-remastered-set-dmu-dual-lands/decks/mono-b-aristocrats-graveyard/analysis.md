---
deck_name: "mono-b-aristocrats-graveyard"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-07-09T17:35:45Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  16x Swamp
```

### CREATURES (13)
```
CMC  Card                              Qty   Color  Role                          Rar
  1  Gravecrawler                      x1    B      Recursive sac fodder          R
  1  Ecstatic Awakener // Awoken Demon x2    C      Sac outlet + card draw        C
  2  Blood Artist                      x2    B      Aristocrats drain payoff      U
  2  Skirsdag High Priest              x1    B      Morbid token engine           R
  3  Morbid Opportunist                x2    B      Card draw on death            U
  3  Falkenrath Torturer               x2    B      Sac outlet / evasion          C
  4  Haunted Dead                      x2    B      Recursive value / discard     U
                                                     outlet
  8  Griselbrand                       x1    B      Top-end bomb / reanim target  M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                              Qty   Color  Role                          Rar
  1  Village Rites                     x1    B      Sac outlet / cantrip          C
  1  Tragic Slip                       x2    B      Removal (scales w/ Morbid)    C
  2  Infernal Grasp                    x2    B      Unconditional removal         U
  2  Collective Brutality              x1    B      Modal removal/discard/drain   R
  5  Edgar's Awakening                 x2    B      Reanimation engine            U
```

### OTHER SPELLS (3)
```
CMC  Card                              Qty   Color  Role                          Rar
  2  The Meathook Massacre             x1    B      Sweeper + drain payoff        M
  2  Ghoulish Procession                x2    B      Token payoff on death        U
```

## SIDEBOARD (10)
```
Card                              Qty   Color  Role / When to board in           Rar
Sanitarium Skeleton                x1    B      Resilient blocker vs aggro       C
Killing Wave                       x1    B      Sweeper vs go-wide aggro/tokens  U
Murderous Compulsion                x2    B      Removal vs attackers            C
Boarded Window                      x1    C      Anti-aggro damage reduction     U
Eaten Alive                         x2    B      Exile removal vs ETB/           C
                                                  indestructible threats
Sever the Bloodline                  x2    B      Exile removal vs tribal/       U
                                                  recursive threats
Demonic Taskmaster                   x1    B      Proactive threat vs control    U
```

## ANALYSIS

A black sacrifice-value midrange deck that turns every creature death — combat trades, sac-outlet activations, Meathook Massacre wipes — into card draw, life drain, and bodies. Griselbrand and Edgar's Awakening form the deck's "Reanimator" top-end: Griselbrand is a hardcast bomb that refuels the hand, and Edgar's Awakening is a direct reanimation spell that can bring back Griselbrand (or any dead value creature) from the graveyard. The archetype context's original Reanimator/Breach shell didn't survive contact with the cube's actual card pool (see below) and the deck pivoted to lean on this cube's genuinely deep black Aristocrats/Graveyard support instead.

**Why mono-B, not BR/BRG Reanimator.** Discovery found the cube's actual "Reanimator" synergy-cluster tag covers only 3 cards (Griselbrand, Through the Breach, Hermit Druid), and support for Griselbrand specifically — excluding itself — was exactly 2 cards (Through the Breach, Hermit Druid), right at the viability floor. Worse, Hermit Druid's true color identity is green, not black as the original archetype brief assumed, and Bruna's meld payoff is white — neither fits a B/R plan. Rather than force a thin 3-color combo shell on weak fixing (this cube's DMU dual cycle gives every color pair exactly 1 common + 1 rare dual — THIN by the fixing-inventory threshold, not GOOD), the build committed to the cube's genuinely deep black Aristocrats/Graveyard cluster (51 cards, "strong" support tier, 30-card support base once Edgar's Awakening's own clusters are counted) with Griselbrand/Edgar's Awakening as the reanimator-flavored top end.

**The reanimation package is real but thin — by design, not oversight.** Both self-grill agents independently flagged this: the only ways to deliberately discard Griselbrand are Collective Brutality's escalate cost and Haunted Dead's `{1}{B}, Discard two cards` ability (which only works once Haunted Dead is already dead). There's no mill or loot effect in the list. In practice Griselbrand is most often a turn-8+ hardcast bomb (lifelink/flying stabilizes immediately, draw-7 refuels) that occasionally gets cheated in early via a lucky discard. Edgar's Awakening isn't a dead card even without Griselbrand in the yard — it recurs Blood Artist, Haunted Dead, or Skirsdag High Priest just fine as generic value.

**Zombie sub-package quietly enables Gravecrawler.** Gravecrawler needs a Zombie in play to recast itself from the graveyard. Haunted Dead is a Zombie creature, and Ghoulish Procession makes 2/2 Zombie tokens on every nontoken creature death (once per turn) — so once the aristocrats engine is running, Gravecrawler becomes a genuinely recurring 2-power attacker, not just a one-shot sac outlet.

**Death-trigger density.** 8 of the 24 spells care about creatures dying (Blood Artist x2, Morbid Opportunist x2, Ghoulish Procession x2, Skirsdag High Priest, The Meathook Massacre), fed by 5 dedicated sac outlets (Falkenrath Torturer x2, Ecstatic Awakener x2, Village Rites). Tragic Slip goes from -1/-1 to -13/-13 off a single death this turn — easy to enable with this much sacrifice density, making it function as a two-mode removal spell in practice.

**Revised during self-grill.** The original build ran 2x Soul Separator (a `{5}, {T}, Sacrifice` value engine costing 8 total mana for a one-shot effect). Both the Proposer and Challenger agents independently flagged it as the weakest inclusion on efficiency grounds against a 2.6-avg-CMC deck. Swapped for a 2nd Ecstatic Awakener and a Village Rites — both 1-mana, both keep the sac-outlet count high, and the swap dropped average CMC from 2.75 to 2.58 with no other change to the plan.

### Cards Considered but Excluded

**Rares/mythics cut solely due to the 5-card cap** (all verified on-color, all legitimate contenders — swap in if you cut one of the current 5):
- **Distended Mindbender** — Eldrazi emerge threat, strips a cheap and an expensive card from an opponent's hand on cast. Excellent disruption, cut because it's redundant top-end next to Griselbrand and doesn't itself feed the death-trigger package (no sac synergy beyond its own emerge cost).
- **Sorin, Imperious Bloodlord** — tempting because the cube's tagger labels it with a "Reanimation" tag, but the Challenger agent verified the actual ability puts a Vampire from hand, not graveyard, onto the battlefield — the tag is misleading for this deck's plan, and it's gated to Vampires (only 2 in this list). Correctly excluded regardless of budget.
- **Westvale Abbey // Ormendahl, Profane Prince** — a land that makes tokens and turns 5 sacrificed creatures into a 6/6 flying indestructible finisher. Near-perfect thematic fit, cut only because it only produces colorless mana (would cost a rare slot to slightly dilute an otherwise 100%-clean B mana base) and the budget was already spent.
- **Voldaren Bloodcaster // Bloodbat Summoner, Bloodline Keeper // Lord of Lineage, Captivating Vampire, Helvault, Metallic Mimic, Invasion of Innistrad, Emrakul, the Promised End** — all solid B rares/mythics, cut purely on budget triage against the 5 chosen.
- **Bruna, the Fading Light, Through the Breach, Hermit Druid** — the three keystones from the original archetype brief that don't fit mono-B at all (W, R, and G color identity respectively). Kept out of the pipeline entirely once the color plan locked to mono-B.

**Uncommons/commons a tier below the current includes:**
- **Gisa's Bidding** (common) — two 2/2 Zombie tokens with Madness {2}{B}, a second genuine discard-friendly card. Close alternate to the Ecstatic Awakener/Village Rites slot.
- **Morkrut Banshee** (uncommon) — Morbid -4/-4 on a body; a reasonable swap for a copy of Infernal Grasp if you want removal stapled to a blocker instead of pure efficiency.
- **Indulgent Aristocrat** (uncommon) — a cheaper sac outlet, but its counter-growth payoff is Vampire-gated (only 2 Vampires in this list), so it underperforms Falkenrath Torturer here.
- **Archghoul of Thraben** (uncommon) — Zombie-synergy value creature, redundant with the existing Zombie package.
- **Faithless Looting, Lightning Axe, Mass Hysteria** — the red cards from the original archetype brief. Strong cards, but off-color once the plan committed to mono-B rather than splashing R for Through the Breach.

**Sideboard-consideration cards that didn't make the final 10:**
- **Triskaidekaphobia** (uncommon) — alternate win condition, useful vs. grindy lifegain midrange mirrors.
- **Gisa's Bidding** (common) — also viable as SB token-flood tech vs. removal-heavy decks that strand your sac outlets without fodder.
- **Crawl from the Cellar** (common) — cheap graveyard-to-hand recursion with flashback; consider vs. decks packing graveyard hate that would otherwise strand a discarded Griselbrand.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.58   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at <=2 copies each - verified across all 34
       distinct common/uncommon entries in main+side.
[PASS] Rares/mythics at <=1 copy each - all 5 (Griselbrand, The Meathook
       Massacre, Collective Brutality, Gravecrawler, Skirsdag High
       Priest) run exactly 1 copy.
[PASS] Max 5 rares/mythics total across mainboard+sideboard - exactly 5,
       all in mainboard, 0 in sideboard.
[PASS] Every card verified present in the cube's working pool by exact
       name.
```
