---
deck_name: "br-madness-tempo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-07-08T02:50:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
  9x Mountain
  3x Swamp
  2x Geothermal Bog       BR dual, always enters tapped
  1x Evolving Wilds       Fixing/thinning, enters tapped
```

### CREATURES (11)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Vexing Devil            x1    R      Explosive 1-drop clock/reach   R
  1  Voldaren Epicure        x2    R      Aggro 1-drop + Blood token      C
  2  Asylum Visitor          x2    B      Hellbent card advantage         U
  2  Bloodtithe Harvester    x2    BR     Blood token + removal creature  U
  3  Stromkirk Occultist     x2    R      Card-advantage clock, madness   U
  4  Bloodhall Priest        x1    BR     Hellbent finisher               R
  8  Bedlam Reveler          x1    R      Spells-matter refuel/threat     R
```

### INSTANTS & SORCERIES (14)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Lightning Axe           x2    R      Removal + discard outlet        U
  1  Faithless Looting       x2    R      Core discard-enabler/filtering  C
  2  Collective Brutality    x1    B      Modal removal/discard/drain     R
  2  Abrade                  x2    R      Flexible removal/artifact hate  U
  2  Murderous Compulsion    x2    B      Removal (tapped only), madness  C
  3  Fiery Temper            x2    R      Burn/removal, cheap madness     U
  3  Collective Defiance     x1    R      Modal self-wheel/removal/burn   R
  3  Neonate's Rush          x2    R      Removal + reach + cantrip       C
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in            Rar
Tragic Slip             x2    B      Cheap removal vs creature decks     C
Killing Wave             x1    B      Sweeper vs go-wide/tokens           U
Sever the Bloodline      x1    B      Anti-token/anti-legend/recursion    U
Village Rites            x2    B      Convert dying creature to cards     C
Gisa's Bidding           x2    B      Go-wide resilience vs removal/control C
Thermo-Alchemist         x2    R      Inevitability/reach vs control      U
```

## ANALYSIS

A low-curve BR shell built around discarding madness cards into cheap value: Faithless Looting, Lightning Axe, Collective Brutality's escalate, and repeatable Blood tokens (Voldaren Epicure, Bloodtithe Harvester) all convert a card in hand into a discounted madness spell. The actual win condition is combat damage from an efficient 11-creature suite backed by dual-purpose removal/burn (several spells also hit the opponent's face), with Bloodhall Priest and Bedlam Reveler as top-end payoffs for emptying the hand.

**Macro-Archetype: Tempo. Projected Avg MV: 2.32.**

Slot allocation (of N=40): Lands 15 (37.5%) — deliberately above the Tempo guidance range of 30-34% because several cards carry expensive hardcast tails (Bedlam Reveler {6}{R}{R}, Collective Defiance {1}{R}{R}) that need reliable land drops when a discard outlet isn't live; the independent mana-audit formula recommends 16, so 15 stays within 1 of that reference. Interaction-capable spells: 14 of 25 non-land cards (56%) — high because most removal doubles as reach (Fiery Temper, Neonate's Rush, Collective Defiance can all hit the opponent). Dedicated creatures/threats: 11 of 25 (44%), most of which also generate value (Blood tokens, card-advantage triggers), so this build doesn't reserve a separate "engine" budget — the same cards that clock the opponent also fuel the discard loop.

**Madness math.** 5 of the cube's 10 unique madness cards are running (Fiery Temper, Asylum Visitor, Stromkirk Occultist, Bloodhall Priest, Murderous Compulsion) across 9 physical copies. Discard access: Faithless Looting x2 (+flashback = 4 total activations across a game), Lightning Axe x2 (discard-as-cost), Collective Brutality x1 (escalate), plus every Blood token from Voldaren Epicure x2 and Bloodtithe Harvester x2 (4 more repeatable outlets once in play). That's a wide base of ways to turn a dead madness card into a discounted spell — Fiery Temper drops from {1}{R}{R} to {R}, Bloodhall Priest from {2}{B}{R} to {1}{B}{R}.

**Honest framing note.** This is not a pure "burn the opponent out" deck — only Fiery Temper, Vexing Devil, Voldaren Epicure, Bloodhall Priest, Neonate's Rush, and Collective Defiance can ever hit the opponent's face directly; Lightning Axe, Abrade, and Murderous Compulsion are creature-only removal. The actual win condition is combat damage from the creature suite, with burn as a secondary closer and Bloodhall Priest/Bedlam Reveler as top-end payoffs — the deck name reflects that mixed identity rather than overselling a pure burn plan.

**Grill resolution.** Two mainboard swaps were made after the Proposer/Challenger self-grill: Reforge the Soul was cut for Collective Defiance — Reforge the Soul is fully symmetric (opponent also draws 7) and doesn't actually create a hellbent state, contradicting its intended role, while Collective Defiance is modal and stays on-plan. Alchemist's Greeting x2 was cut for Neonate's Rush x2 — same removal slot, strictly more value (also hits the opponent's face and cantrips) at the same common rarity. The sideboard's original "vs control" package (Festival Crasher, Bloodmad Vampire) was replaced with Gisa's Bidding and Thermo-Alchemist since raw bigger creatures don't answer a control deck's removal/counterspells the way resilience (go-wide) and inevitability (a hard-to-remove pinger) do. Village Rites stays in the sideboard as removal-matchup insurance despite working against the maindeck's own hellbent sub-plan (noted, not hidden) — no better anti-removal tool exists in the BR pool. No dedicated graveyard-hate exists in this color pair in this cube — a pool limitation, not an oversight; the sideboard has no answer to flashback/self-mill strategies.

**Cards Considered but Excluded**

*Rares/mythics cut for the 5-card cap:*
- **Falkenrath Gorger** — grants madness to Vampire cards in hand while it survives on board. Genuinely strong (9 of 11 creatures are Vampires), but its value is retroactive and fragile (dies to any removal before paying off), and there was no rare slot left after Vexing Devil / Collective Brutality / Bloodhall Priest / Collective Defiance / Bedlam Reveler.
- **Olivia Voldaren** — a powerful removal-engine finisher, but too high-commitment and midrange-shaped for a low-curve plan; would be the first swap-in if you want a slower, grindier BR build instead.
- **Reforge the Soul** — included in the first draft, cut during the grill (see above).
- **Gravecrawler, Distended Mindbender, Mirrorwing Dragon** — no madness/burn synergy (Gravecrawler), too clunky at 8cmc emerge (Distended Mindbender), or too situational/win-more (Mirrorwing Dragon needs opponents to target it with instants/sorceries).

*Uncommons a tier below the chosen includes:*
- **Infernal Grasp** — unconditional removal at the same cost as Murderous Compulsion, but loses the madness discount; Murderous Compulsion was kept for its floor-vs-ceiling trade with the discard package, but Infernal Grasp is the first swap if the tapped-only restriction proves too clunky in practice.
- **Stensia Masquerade** — the pool's one dedicated Vampire payoff (first strike + counters on Vampire combat damage). Deliberately excluded to keep the deck's identity as spells-tempo rather than drifting toward the Vampire-tribal path not chosen.
- **Furyblade Vampire** — a combat-only discard outlet; redundant with the Blood-token and Faithless Looting outlets already running.
- **Village Messenger // Moonrise Intruder** — its transform condition needs a turn with no spells cast, which fights this deck's own spell density.

*Sideboard-tier considerations not included:*
- **Eaten Alive** — flexible exile removal, but needs a body to sacrifice or {3}{B}, clunky without more expendable creatures.
- **Blood Petal Celebrant** — fine low-curve filler, but the mainboard already has enough 1-2 drop creature density.
- **Festival Crasher, Bloodmad Vampire** — cut from the sideboard during the grill for not addressing control specifically.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.32   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  25.0%  prod  33.3%  gap  -8.3pp  [OK]
  R  demand  75.0%  prod  73.3%  gap  +1.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: all at <=2 copies
[PASS] Rares/mythics: all at exactly 1 copy each
[PASS] Max 5 rares/mythics total (main+SB): 5/5 exactly
       (Vexing Devil, Collective Brutality, Bloodhall Priest,
        Collective Defiance, Bedlam Reveler)
```
