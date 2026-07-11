---
deck_name: "rg-werewolves-wolves"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RG"
format: "40-card"
built_at: "2026-07-08T15:06:39Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
9x  Swamp
5x  Island
2x  Contaminated Aquifer     UB dual, always enters tapped
```

### CREATURES (15)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Gravecrawler             x1    B      Free-recast Zombie fodder     R
  2  Bladestitched Skaab      x2    BU     Zombie lord (+1/+0)           U
  2  Siege Zombie             x1    B      Reach/drain finisher          C
  2  Deranged Assistant       x1    U      Colorless mana + self-mill    C
  3  Archghoul of Thraben     x2    B      Card advantage off Zombie dths U
  3  Stitched Mangler         x2    U      ETB tempo-lock, G&G target    C
  4  Drunau Corpse Trawler    x2    U      ETB token+deathtouch, G&G tgt U
  4  Haunted Dead             x2    B      ETB token + self-recursion    U
  4  Overcharged Amalgam      x1    U      Flash flier/exploit-counter   R
  4  Gisa and Geralf          x1    BU     Payoff: free-cast Zombie/turn R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Tragic Slip              x2    B      Cheap removal, easy morbid    C
  1  Eaten Alive              x1    B      Sac-cost exile removal        C
  1  Village Rites            x1    B      Sac outlet, draw 2            C
  2  Infernal Grasp           x2    B      Premium unconditional removal U
```

### OTHER SPELLS (3)
```
CMC  Card                              Qty   Color  Role                       Rar
  2  Ghoulish Procession                x1    B      Free Zombie on any death   U
  4  Necroduality                       x1    U      Payoff: token-copy Zombies M
  4  Invasion of Innistrad // Deluge     x1    B      Flash removal + GY->token  R
     of the Dead                                      engine
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Wretched Throng          x2    U      Resilient recursive Zombie package;    C
                                       board vs. removal-heavy/grindy decks
                                       (needs both copies - its own ability
                                       tutors "a card named Wretched Throng")
Killing Wave             x1    B      Edict sweeper vs. hexproof/protection  U
                                       threats or go-wide aggro (symmetric -
                                       hurts your own board too)
Murderous Compulsion     x1    B      Removal for tapped creatures vs. aggro C
Compelling Deterrence    x2    U      Bounce + discard (if you control a     U
                                       Zombie) vs. combo/control
Syncopate                x1    U      Cheap counterspell, anti-combo        C
Summary Dismissal        x1    U      Protects a key turn vs. counter-wars   U
Sever the Bloodline      x1    B      Exiles a legendary/bomb + all copies   U
Essence Flux             x1    U      Re-blinks an ETB creature to dodge     C
                                       removal or double a trigger
```

## ANALYSIS

**Environment & pipeline.** This cube is a balanced 5-color draft environment (each color ~12-13% of cards, no domain/kicker density) with strong graveyard/aristocrats/flashback support. UB has solid fixing (2x common Contaminated Aquifer). Three materially different Zombie sub-archetypes were viable in this pool — Gisa and Geralf value engine, Rooftop Storm explosive curve-out, and Grimgrin aristocrats (already built in this cube as ub-zombies-aristocrats) — and the Gisa and Geralf path was selected.

**Macro-Archetype: Midrange. Avg CMC: 2.62.** Slot allocation (N=40): Lands 16 (40% of N) — Midrange baseline, confirmed by the mana audit. Interaction 6 (25% of 24 non-lands) — efficient removal to buy time for the engine to come online. Threats/Payoffs+Engine 18 (75% of 24 non-lands, Engine absorbed into Threats/Payoffs per Midrange convention). No cantrip/mana-dork/MDFC land modifiers applied — Deranged Assistant is a single colorless-only source, below the "2+" threshold needed to trigger the mana-dork land reduction.

**Recursion density.** 13 physical Zombie-creature cards across 8 distinct names (Gravecrawler, Bladestitched Skaab, Siege Zombie, Archghoul of Thraben, Stitched Mangler, Drunau Corpse Trawler, Haunted Dead, Overcharged Amalgam) sit in the 24-card mainboard spell count — 54% of non-lands are valid Gisa and Geralf recast targets once they hit the graveyard. Necroduality doubles every one of those recasts (and every natural draw-and-cast) since it copies any nontoken Zombie ETB, not just recursive ones.

**Metallic Mimic synergy note (not included).** Metallic Mimic — choose Zombie, and every other Zombie you control enters with a +1/+1 counter, including Necroduality's token copies — is a clean combo piece with this engine but was cut to keep all 5 rare/mythic slots on the archetype's named keystones and core cards. Worth testing in for Mimic over Overcharged Amalgam if the meta is light on removal/counterspells and you want a bigger midgame body count instead of interaction.

**Two mechanical caveats worth playing around.**
1. Invasion of Innistrad // Deluge of the Dead's activated ability ("{2}{B}: Exile target card from a graveyard...") can target *any* graveyard — always point it at the opponent's yard unless you have genuine graveyard overflow, since exiling your own creature converts a reusable Gisa and Geralf target into a one-time token.
2. Ghoulish Procession's token has decayed ("can't block... sacrifice it at end of combat when it attacks") — it's a one-shot attacker/blocker, not durable board presence, so don't count on it to hold the ground long-term.

**Rare/mythic budget: exactly 5/5 used.** Gravecrawler (R), Overcharged Amalgam (R), Gisa and Geralf (R), Necroduality (M), Invasion of Innistrad (R). No headroom remains for a mainboard swap without cutting one of these five.

**Mana base.** 18 black pips vs. 11 blue pips across the 24 spells (62%/38%). Land production is 11 black sources / 7 blue sources out of 16 lands (68.8%/43.8% — these overlap since the 2 Contaminated Aquifers count for both colors). Both colors sit within 7pp of demand, comfortably under the 10pp WARN threshold.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget:**
- Grimgrin, Corpse-Born (M) — flagged in the self-grill as a plausible upgrade (it's a Zombie, a valid Gisa and Geralf target, and a sac outlet synergizing with Village Rites/Eaten Alive). Excluded to keep this build distinct from the existing Grimgrin-centered ub-zombies-aristocrats deck, and because using it well wants a dedicated sac-outlet package this deck doesn't run.
- Metallic Mimic (R) — see synergy note above; strong but win-more.
- Rooftop Storm (R) — named as a keystone in the archetype context, but this cube's actual printing is a 6-mana blue enchantment ({5}{U}) rather than the real card's {1}{B}{B}; too clunky at that cost to fit a lean curve, so it was dropped from consideration entirely.
- Shipwreck Marsh (R) — UB dual land; skipped since 2x common Contaminated Aquifer alone cleared the mana audit at PASS, freeing the slot.
- Collective Brutality (R) — flexible discard/drain/removal; used in the prior aristocrats build instead, no room here.

**Uncommons/commons a tier below the chosen includes:**
- Grizzled Angler // Grisly Anglerfish (U) — repeatable self-mill, cut because Deranged Assistant covers the self-mill role more cheaply.
- Cobbled Lancer (U) / Makeshift Mauler (C) — cheap Zombies, but both cost "exile a creature card from your graveyard" as an additional cost — directly anti-synergistic with a graveyard-recursion plan, excluded on purpose.
- Gisa's Bidding (C) — 2 Zombie tokens for 4 mana (or discard/madness); redundant with Ghoulish Procession and Invasion of Innistrad's own token-making.
- Butcher Ghoul (C) — cheap undying Zombie; solid but the curve wasn't short on 1-2 drops (Gravecrawler, Tragic Slip x2, Bladestitched Skaab x2).

**Sideboard-consideration cards not chosen:**
- Boarded Window (U), Geistlight Snare (U), Silent Departure (C), Spontaneous Mutation (C) — additional interaction, cut for redundancy with the 6 sideboard slots already covering aggro/combo/control/bombs.
- Think Twice (C), Forbidden Alchemy (C), Crawl from the Cellar (C), Sanitarium Skeleton (C) — additional self-mill/recursion value, cut since the mainboard's recursive creature package plus Deranged Assistant already fuels the graveyard sufficiently.

**Known gap.** The sideboard has no dedicated answer to opponent graveyard hate targeting your own yard — Syncopate and Summary Dismissal are the only mitigations (countering the hate spell itself) since this format doesn't offer a clean "protect my graveyard" card in UB.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.62   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  62.1%  prod  68.8%  gap  -6.7pp  [OK]
  U  demand  37.9%  prod  43.8%  gap  -5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons max 2 copies each - no card exceeds 2 copies across mainboard+sideboard
[PASS] Rares/mythics max 1 copy each - Gravecrawler, Overcharged Amalgam, Gisa and Geralf, Necroduality, Invasion of Innistrad each appear once
[PASS] Max 5 rares/mythics total (mainboard+sideboard) - exactly 5/5 used
[PASS] All 50 cards (40 mainboard + 10 sideboard) verified present in the cube's working pool by exact name (independent Challenger-agent check)
```
