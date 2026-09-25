---
deck_name: "gwu-domain-counters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GWU"
format: "40-card"
built_at: "2026-07-11T19:20:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  4x Forest                
  2x Island                
  2x Plains                
  1x Crystal Grotto        Any-color fixer, scry 1
  2x Idyllic Beachfront    WU typed dual (Plains Island)
  2x Radiant Grove         GW typed dual (Forest Plains)
  2x Tangled Islet         GU typed dual (Forest Island)
  1x Thran Portal          Untapped-early land with a chosen basic type (domain 4)
```

### CREATURES (16)

```
CMC  Card                         Qty  Color  Role                                    Rar
  1  Pixie Illusionist            x2   U      Domain enabler (land-type conversion)   C
  2  Llanowar Loamspeaker         x1   G      Any-color dork + land animation         R
  2  Nishoba Brawler              x2   G      Trample threat, power = basic land typ  U
  2  Vineshaper Prodigy           x2   G      2-drop, kicked card selection           C
  3  Deathbloom Gardener          x2   G      Any-color dork, fixes U/W, deathtouch   C
  3  Voda Sea Scavenger           x2   U      Domain ETB card selection body          C
  4  Nael, Avizoa Aeronaut        x1   UG     Domain card selection on an evasive 4-  U
  5  Sphinx of Clear Skies        x1   U      Evasive domain card-advantage finisher  M
  5  Territorial Maro             x1   G      Domain fattie, 6/6-8/8                  U
  5  Zar Ojanen, Scion of Efrava  x1   WG     Mass-counter keystone on tap, scales w  U
  6  Briar Hydra                  x1   G      Combat-damage counter keystone, domain  R
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                  Qty  Color  Role                                    Rar
  1  Gaea's Might          x2   G      Domain combat trick, +3/+3 typical      C
  2  Artillery Blast       x2   W      Domain removal, 3-4 damage to tapped c  C
```

### OTHER SPELLS (4)

```
CMC  Card                    Qty  Color  Role                                    Rar
  3  Citizen's Arrest        x1   W      Unconditional exile removal             C
  3  The Weatherseed Treaty  x2   G      Basic fetch + body + domain pump finis  U
  6  Leyline Binding         x1   W      Domain-discounted flash exile removal   R
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in                 Rar
Shore Up              x2   U      protect keystone vs targeted removal    C
Destroy Evil          x2   W      vs 4+ toughness fatties and enchantmen  C
Essence Scatter       x2   U      counter opposing bombs on the draw      C
Broken Wings          x2   G      artifact/enchantment/flyer removal      C
Prayer of Binding     x2   W      flash exile vs bombs/planeswalkers      U
```

## ANALYSIS

### Game Plan

Three-color (GW + light U) midrange where the domain count powers both the stats and the counters. The typed common duals do double duty: Radiant Grove (Forest Plains), Tangled Islet (Forest Island), and Idyllic Beachfront (Plains Island) put three basic land types on the table by turn 3-4 without a single off-color basic; Thran Portal enters as a chosen fourth type, and Pixie Illusionist's tap ability converts any land into a fifth on demand. Every payoff rides that axis: Nishoba Brawler and Territorial Maro are domain-statted bodies, Artillery Blast and Leyline Binding are domain-priced removal, Briar Hydra converts each connect into X counters, Nael and Sphinx of Clear Skies are domain card advantage, and Zar Ojanen mass-pumps small creatures whenever he taps.

### Domain Math (post-grill, honest version)

The self-grill's challenger forced precision here: with only Forest/Plains/Island types in the manabase, natural domain caps at 3 — The Weatherseed Treaty can only fetch types the deck already has. The grill fixes raised the ceiling: Thran Portal carries a chosen basic type (natural domain 4), and Pixie Illusionist reaches 5 temporarily. Concretely:

- Domain 3 (turns 3-4, reliable): Brawler 3/3 trample, Maro 6/6, Artillery Blast deals 4, Leyline Binding costs {3} at flash, Briar Hydra pays 3 counters per hit.
- Domain 4 (Portal in play or Pixie active): Zar Ojanen's trigger now covers toughness ≤3 — Brawler, Loamspeaker, Pixie, Gardener, Prodigy, Scavenger, Saprolings, and Loamspeaker's animated 3/3 lands all grow on every attack.
- The win path the deck actually rides most games is domain-3 stompy (Maro/Hydra/Sphinx beatdown behind cheap domain removal); the counters engine is the upside layer, not the only plan.

### Key Interactions

- Zar Ojanen triggers on *becoming tapped* — attacking every turn is a repeating team pump, and he stays back-line relevant even when walls block.
- Leyline Binding at domain 4 costs {1}{W} at flash speed — hold it like an instant.
- Gaea's Might is a 1-mana +3/+3 (or +4/+4) trick that turns any blocked domain body into a trade-up.
- Voda Sea Scavenger's ETB selection scales with domain; at 4 types it digs four deep.

### Matchups

- Strong vs. slower midrange: cheaper (domain-priced) removal and bigger threats.
- Aggro race is the danger: six taplands mean turns 1-2 are often passive; Destroy Evil and Prayer of Binding come in, and Deathbloom Gardener's deathtouch stalls the ground.
- Vs. control: Sphinx and post-board Essence Scatter are the win conditions; expect Sphinx on turn 6-7, not 5 — only two blue sources enter untapped.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card limit (5/5 used):**
- Shanna, Purifying Blade — GWU mythic lifelink draw engine; excellent but off the domain axis.
- King Darien XLVIII / Serra Redeemer — the challenger flagged both as deeper counters-theme options than a second Zar Ojanen; they lost the last slot to Thran Portal, which fixes the domain ceiling the whole deck rides on. Swap one in over Sphinx if you prefer counters density over card advantage.
- Defiler of Dreams — blue permanent draw engine; blue count too low here.
- Threats Undetected — creature tutor with no silver bullets to find.

**Strong uncommons a tier below the chosen includes:**
- Zar Ojanen #2 — cut during the grill: legendary redundancy, and his trigger is weak below domain 4.
- Slimefoot's Survey — fetches two typed lands, but 5 mana of pure setup is too slow at 40 cards.
- Elvish Hydromancer — kicked copy effect; the {3}{U} kicker fights the mana.
- Strength of the Coalition — the honest team-counters spell; belongs to the two GW builds but is a fine swap for Gaea's Might if you want permanent stats over tempo.

**Sideboard considerations that missed the cut:**
- Snarespinner — cut during the grill: with Broken Wings ×2 already in, four anti-flyer slots was redundant.
- Tolarian Geyser / Impede Momentum — tempo answers below Artillery Blast's rate.
- Off-color basics (1 Swamp + 1 Mountain) — a challenger-suggested option that would let Weatherseed Treaty fetch real domain 4-5; skipped for mana consistency, but worth testing if you face slow metas.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.92   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  53.6%  prod  56.2%  gap  -2.6pp  [OK]
  U  demand  25.0%  prod  43.8%  gap -18.8pp  [OK]
  W  demand  21.4%  prod  43.8%  gap -22.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: max 2 copies each (verified per name vs pool multipliers)
[PASS] Rares/mythics: max 1 copy each
[PASS] Max 5 rares/mythics total (main+side): 5/5 used - Briar Hydra, Leyline Binding, Llanowar Loamspeaker, Sphinx of Clear Skies, Thran Portal
[PASS] All cards from cube mainboard (verified by exact name against working pool)
[PASS] Color identity within GWU (basics/colorless exempt)
```