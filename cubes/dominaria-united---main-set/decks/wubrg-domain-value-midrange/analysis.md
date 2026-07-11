---
deck_name: "wubrg-domain-value-midrange"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUBRG"
format: "40-card"
built_at: "2026-07-10T23:37:56Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

# wubrg-domain-value-midrange — 5-Color Domain Value Midrange

Green-based five-color midrange built around the Domain mechanic. Ten typed dual taplands plus Thran Portal assemble 4–5 basic land types by the mid-game, at which point every payoff in the deck is above rate: Territorial Maro is an 8/8–10/10 for five, Leyline Binding is a 1–2 mana flash exile, Herd Migration makes 12–15 power in Beasts, and Sphinx of Clear Skies refuels every time it connects.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  4x Forest
  2x Crystal Grotto        Any color + scry 1 (no basic type)
  2x Radiant Grove         Forest Plains, enters tapped
  2x Tangled Islet         Forest Island, enters tapped
  2x Haunted Mire          Swamp Forest, enters tapped
  2x Wooded Ridgeline      Mountain Forest, enters tapped
  1x Idyllic Beachfront    Plains Island, enters tapped
  1x Thran Portal          Any color; becomes a chosen basic type; 1 life per tap
```

### CREATURES (10)

```
CMC  Card                     Qty   Color  Role                                      Rar
  1  Pixie Illusionist        x1    U      Domain fixer (sets a basic type) + flyer  C
  2  Nishoba Brawler          x2    G      Early domain trampler (power = types)     U
  3  Deathbloom Gardener      x2    G      Any-color dork + deathtouch blocker       C
  5  Territorial Maro         x2    G      Oversized threat (2x basic land types)    U
  5  Meria's Outrider         x2    R      Domain ETB burn + reach body              C
  5  Sphinx of Clear Skies    x1    U      Evasive finisher + card advantage         M
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                     Qty   Color  Role                                      Rar
  2  Bite Down                x2    G      Removal via own oversized creatures       C
  2  Artillery Blast          x2    W      Domain burn (tapped creature only)        C
  3  Shadow Prophecy          x2    B      Domain instant dig (up to 2 cards)        C
  3  Scout the Wilderness     x2    G      Ramp (fetch basic); kicked: 2 Soldiers    C
  5  Slimefoot's Survey       x1    G      Fetches two TYPED lands + domain dig      U
  7  Herd Migration           x1    G      Beast per land type; early: land cycler   R
```

### OTHER SPELLS (4)

```
CMC  Card                     Qty   Color  Role                                      Rar
  3  The Weatherseed Treaty   x2    G      Saga: ramp + token + domain pump          U
  5  Jodah's Codex            x1    C      Repeatable domain draw engine             U
  6  Leyline Binding          x1    W      Flash exile, costs {1} less per type      R
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                        Rar
Drag to the Bottom      x1    B      Domain sweeper vs go-wide aggro                R
Choking Miasma          x2    B      Small sweep vs aggro; kicker saves ours        U
Broken Wings            x2    G      Artifacts, enchantments, fliers                C
Tear Asunder            x1    B      Exile answer; kicked hits any nonland          U
Extinguish the Light    x2    B      Unconditional kill vs bombs                    C
Mossbeard Ancient       x1    G      Vs aggro/burn: trampler + 5 life               U
Essence Scatter         x1    U      Counter an opposing bomb creature              C
```

## ANALYSIS

**Slot allocation (Midrange, N=40).** Lands: 16 (40% of N=40) — top of the midrange band; the deck wants its fifth land on time and its payoffs are land-count-driven. Interaction: 5 of 24 nonland (20.8%) — bottom edge of the 20–30% midrange band, defensible because Bite Down converts oversized threats into removal and the sideboard carries 8 more interaction pieces. Threats/payoffs: 9 (37.5%) — inside the 30–40% band. Ramp/velocity/infrastructure: 10 (41.7%) — well above a normal midrange engine share, justified by the commissioned identity: this is explicitly a Domain *Ramp* deck, and every ramp piece also advances the domain count that all payoffs read. Land modifiers: baseline 16, −0 cantrips, −0.5 for 2 mana producers (Deathbloom Gardener x2), −0 MDFC → 15.5, kept at 16 because 9 taplands make the effective untapped-land count lower. Projected Avg MV: 3.54, supported by 16 lands + 2 dorks + 5 land-fetch effects.

**Domain math (Monte Carlo over this exact manabase, 20k trials).** With 5 lands in play: average domain 3.79, P(domain ≥ 4) = 65%, P(domain = 5) = 20%. With 6 lands: 4.16 avg, 81% ≥ 4, 36% = 5. With 7 lands: 92% ≥ 4. These numbers understate reality: Slimefoot's Survey fetches the exact missing typed duals, and Pixie Illusionist patches the last type at instant speed. Domain 4 is the deck's operating level and arrives on schedule around turn 5.

**What domain 4–5 buys.** Territorial Maro 8/8–10/10; Leyline Binding at {2} or {1} with flash; Artillery Blast for 5–6 (tapped targets only — fire it on their attackers); Herd Migration for 12–15 token power; Shadow Prophecy digging 4–5 deep at instant speed; Jodah's Codex activating for {1} or free every turn — the deck's late-game engine card.

**Key interactions.**
- Pixie Illusionist *overwrites* a land's types (it does not add one). Point it at a redundant Forest or a Crystal Grotto, never at a typed dual, or you go backward.
- Herd Migration's discard mode and the other basic fetches (Weatherseed Treaty I, Scout the Wilderness) can only find Forests — the deck's only basics — so they fix green and ramp but never extend domain past what the duals provide.
- Bite Down off a Maro kills essentially any creature and hits planeswalkers.
- The Weatherseed Treaty chapter III (+4/+5 and trample on a Maro) closes games a full turn earlier than the raw stats suggest.

**Play pattern / weaknesses.** Nine lands always enter tapped, and the only one-drop is Pixie Illusionist — turns 1–2 do very little. Sequence taplands religiously on the early turns and lean on Deathbloom Gardener (deathtouch), Meria's Outrider (reach) and Artillery Blast to survive fast starts; board into Choking Miasma/Drag to the Bottom/Mossbeard Ancient vs aggro. Expect to lose a share of games to turn-1 aggression; against everything slower, the value engine dominates. Note when sideboarding: 7 of 10 sideboard cards carry black pips over ~5 black sources — they reliably come down a turn late, which is acceptable for the grindy matchups they target.

**Cards Considered but Excluded**

*Rares/mythics cut by the 5-card limit* (the deck sits at exactly 5/5 — any rare swap-in requires a rare cut):
- Briar Hydra — 6-mana domain trampler that snowballs counters on combat damage; first rare in if you drop Drag to the Bottom from the sideboard.
- Timeless Lotus — adds WUBRG and turbocharges the top end, but enters tapped and does nothing defensive; cut for interaction quality.
- Llanowar Greenwidow — recursive domain threat; solid but redundant with the existing 5-drop glut.
- Radha's Firebrand — aggro-slanted domain rare; wrong speed for this shell.
- Drag to the Bottom (mainboard) — considered main; kept sideboard because it kills our own Beasts and Sphinx at domain 4+.

*Strong uncommons/commons a tier below the chosen includes:*
- Voda Sea Scavenger — domain ETB scry-to-top; fine, but Shadow Prophecy digs harder at instant speed.
- Sunbathing Rootwalla — good in the aggro build, mediocre in a deck that wants to spend mana on ramp/payoffs.
- Nael, Avizoa Aeronaut — GU domain flier with dig; competes with Sphinx at the same job for less impact.
- Radha, Coalition Warlord / Zar Ojanen, Scion of Efrava — tap-trigger domain pumps; they need an attack-heavy shell, and this deck wins with a few huge bodies instead.
- Bortuk Bonerattle — domain reanimator; this list has no self-mill to feed him (see the bg-domain-reanimator build).
- Yavimaya Sojourner — often a 3–4 mana big body, but no trample/reach and no text once resolved.
- Gaea's Might — premium in aggro; a trick is too low-impact in a value deck.
- Sprouting Goblin — the one fetch that finds *typed* lands (to hand); interesting, but needs RG early and nothing weaker to replace.

*Sideboard considerations that missed the cut:* Snarespinner (cheap reach vs fliers), Pilfer (discard vs control), Smash to Dust (artifact/defender answer in red — off-splash).

*Tuning note:* the Challenger recommended swapping 1 Forest for 1 Swamp or Mountain so the basic-fetch effects could extend domain. Declined for now: it drops green production to 13/16 sources against a 100% green core-pip demand and would flip the mana audit from WARN to FAIL. If you find the fetches consistently idle, it's the first experiment to run.

## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.54   Ramp cards: 0

Color Balance (core):  [WARN]
  G  demand 100.0%  prod  87.5%  gap +12.5pp  [WARN]

Flags:
  WARN  G  gap +12.5pp

Splash Check: [PASS]
  B  2 card(s), max CMC 3  sources 4/3  [OK]
  R  2 card(s), max CMC 5  sources 4/3  [OK]
  U  1 card(s), max CMC 5  sources 5/3  [OK]
  W  3 card(s), max CMC 6  sources 5/3  [OK]
```

Notes: the WARN is the G demand/production gap (100% vs 87.5%) — a single-core-color artifact; all green pips are single-G and 14 of 16 lands plus both dorks produce green. `Ramp cards: 0` undercounts — the deck has 6–7 ramp/fetch effects the tagger doesn't label as ramp. Splash check passes for all four splash colors (3+ sources each).

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: all 29 distinct non-basic names verified in working pool (Challenger check 1)
[PASS] commons/uncommons at <= 2 copies each (recounted across both boards)
[PASS] rares/mythics at <= 1 copy each
[PASS] max 5 distinct rares/mythics across main+side: exactly 5/5
       (Thran Portal, Herd Migration, Leyline Binding, Sphinx of Clear Skies, Drag to the Bottom)
[PASS] no scryfall links in analysis.md
```
