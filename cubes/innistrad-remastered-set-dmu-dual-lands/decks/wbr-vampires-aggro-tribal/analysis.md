---
deck_name: "vampires-aggro-tribal"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-07-07T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
  7x Swamp
  2x Mountain
  2x Geothermal Bog          BR dual, enters tapped
  2x Sacred Peaks            RW dual (W splash), enters tapped
  1x Sunlit Marsh            BW dual (W splash), enters tapped
  1x Evolving Wilds          Fetch/thin, enters tapped
```

### CREATURES (19)
```
CMC  Card                   Qty   Color  Role                                          Rar
  1  Indulgent Aristocrat   x2    B      Lifelink 1-drop; sac->+1/+1 counter engine    U
  1  Voldaren Epicure       x2    R      Aggro 1-drop + Blood token/ping               C
  2  Asylum Visitor         x1    B      Hellbent card draw upside                     U
  2  Blood Artist           x2    B      Drain payoff on any death                     U
  2  Blood Petal Celebrant  x2    R      First strike attacker + Blood token           C
  2  Bloodtithe Harvester   x2    BR     2-drop w/ built-in removal (sac outlet)       U
  2  Restless Bloodseeker   x1    B      Blood gen off lifegain; flips into drain      U
  3  Captivating Vampire    x1    B      Vampire lord (+1/+1 anthem) + steal ability   R
  3  Falkenrath Torturer    x1    B      Sac outlet, grants evasion to close games     C
  3  Gluttonous Guest       x1    B      ETB Blood token + lifegain enabler            C
  3  Voldaren Ambusher      x1    R      Removal scaling with Vampire count            U
  4  Bloodline Keeper       x1    B      Token-gen Vampire lord, flips to +2/+2 anthem M
  4  Olivia Voldaren        x1    BR     Repeatable removal engine + threat-theft      M
  6  Edgar Markov           x1    BRW    Eminence token engine + curve-topper (W)      M
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                   Qty   Color  Role                                         Rar
  1  Tragic Slip            x1    B      Removal, -13/-13 with any death this turn    C
  1  Lightning Axe          x1    R      Cheap high-impact removal (discard cost)     U
  2  Infernal Grasp         x1    B      Unconditional removal                        U
  2  Abrade                 x1    R      Flexible: creature or artifact removal       U
```

### OTHER SPELLS (2)
```
CMC  Card                        Qty   Color  Role                                    Rar
  3  Sorin, Imperious Bloodlord  x1    B      Pump/removal/cheat-a-Vampire-in PW      M
  3  Stensia Masquerade          x1    R      Team first strike + counters on hit     U
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                       Rar
Fiery Temper            x1    R      Extra reach/removal vs control or races       U
Murderous Compulsion    x1    B      Extra removal vs tapped-attacker matchups     C
Cathar Commando         x1    W      Flash body + artifact/enchantment answer      C
Sever the Bloodline     x1    B      Anti-recursion/anti-token-copy/anti-legend    U
Village Rites           x1    B      Turns a doomed creature into 2 cards          C
Eaten Alive             x1    B      Exile removal for indestructible/recursive    C
Valorous Stance         x1    W      Protect a threat, or kill a big blocker       U
Faithless Looting       x1    R      Filtering vs flood; feeds Madness cards       C
Festival Crasher        x1    R      +2/+0 off instant/sorcery casts, extra reach  C
Neonate's Rush          x1    R      Cheap removal that replaces itself            C
```

## ANALYSIS

**Slot allocation.** Lands: 15 (37.5% of N=40) — above the 30-35% Aggro
baseline, justified by the W splash for Edgar Markov and a genuine 6-drop top
end, offset by seven Blood-token sources providing incidental filtering.
Interaction: 4 removal spells (16% of 25 nonland) — slightly above the
10-15% Aggro guidance, defensible given this is a competitive-power cube
seat where 2-for-1 removal spells (Bloodtithe Harvester, Voldaren Ambusher)
are baked into creatures rather than counted as dedicated slots.
Threats/Payoffs + Engine: the remaining 21 nonland cards are essentially all
Payload/Payoff or Engine/Outlet-tagged Vampires — go-wide Aggro decks run
almost entirely threats by design.

**Eminence math.** 19 of 25 mainboard nonland cards are Vampire spells, so
Edgar Markov's eminence (triggers on casting a Vampire spell while Edgar is
on the battlefield) fires on roughly 76% of the deck's nonland draws once
he's down, turning a single 6-drop into a steady stream of 1/1s.

**Sac-outlet stack.** Indulgent Aristocrat, Falkenrath Torturer, Bloodtithe Harvester,
and Sorin, Imperious Bloodlord's second +1 are four independent ways to convert a
spare token (from Bloodline Keeper or Edgar) into permanent counters,
evasion, or 3 damage + 3 life — with Blood Artist turning every one of
those sacrifices into an additional point of drain.

**Mana base note.** Pip demand skews black-heavy (62% B / 38% R) because the
strongest 2x-copy commons/uncommons happened to cluster in black
(Indulgent Aristocrat, Blood Artist). The land base (10 B / 6 R / 3 W
sources out of 15) was built to match that ratio rather than a flat 50/50
split — see Mana Audit below.

**Post-grill revision.** The self-grill Challenger flagged Killing Wave
as a symmetric sweeper that hurts this deck's own board in its default
game-state (ahead on creatures), and noted a gap in artifact/enchantment
answers. Swapped it for Cathar Commando, which fixes both: a proactive
flash body that doesn't punish being ahead, with a sac-to-destroy mode
covering artifacts and enchantments.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- Voldaren Bloodcaster // Bloodbat Summoner (rare) — excellent Blood-token
  engine, but leans Aristocrats/Blood-engine rather than go-wide; first cut
  to make room for Sorin.
- Falkenrath Gorger (rare) — grants Madness to Vampires in hand, but does
  nothing without a dedicated discard subtheme this build doesn't run.
- Bloodhall Priest (rare) — its damage trigger needs an empty hand, which
  fights a deck that wants to hold removal up.
- Hanweir Garrison (rare) — strong token maker but off-tribe (Human), so
  it doesn't trigger the lords or Edgar's eminence.
- The Meathook Massacre (mythic) — a strictly powerful sweeper/drain
  engine per the self-grill Challenger, but the 5-slot budget was already
  committed to higher-priority keystones.
- Cathars' Crusade (rare, W) — a phenomenal go-wide payoff, but would
  require deeper white investment than a 1-card splash supports.

**Uncommons/commons a tier below the chosen includes:**
- Markov Waltzer (uncommon, RW) — flying/haste team pump; cut alongside
  duplicating stronger 1-2 drops for consistency, but the self-grill
  Challenger flagged it as a reasonable upgrade candidate for the thin
  4-drop slot (only 2 four-drops in the current build).
- Voldaren Duelist (common) — 4cmc haste attacker, similar upgrade
  candidate to Markov Waltzer.
- Furyblade Vampire, Olivia's Dragoon, Bloodmad Vampire,
  Stromkirk Occultist — all solid 2-3cmc Vampires, cut when doubling up
  on Indulgent Aristocrat / Blood Artist / Blood Petal Celebrant / Voldaren
  Epicure / Bloodtithe Harvester for redundancy at the same curve slots.

**Sideboard considerations not included:**
- Killing Wave (uncommon) — cut post-grill; see Post-grill revision above.
- Angelic Purge (common, W) — an alternate artifact/enchantment/creature
  exile answer to Cathar Commando, costs more W commitment.
- Collective Brutality (rare) — strong modal removal/discard/drain, but
  the rare/mythic budget was fully spent.
- Soul-Guide Gryff (common, W) — real graveyard hate, cut because a 5cmc
  body is too slow/unreliable off a 3-source W splash.
- Triskaidekaphobia (uncommon) — an alternate win condition, too
  slow/cute for a proactive aggro sideboard.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.32   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  62.1%  prod  66.7%  gap  -4.6pp  [OK]
  R  demand  37.9%  prod  40.0%  gap  -2.1pp  [OK]

Splash Check: [PASS] — W: 3 sources (2x Sacred Peaks, 1x Sunlit Marsh) for
the single-card Edgar Markov splash.
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons <=2 copies: Indulgent Aristocrat, Voldaren Epicure,
       Blood Artist, Blood Petal Celebrant, Bloodtithe Harvester at 2x;
       all others 1x or basics.
[PASS] Rares/mythics <=1 copy each: Captivating Vampire, Bloodline Keeper,
       Olivia Voldaren, Edgar Markov, Sorin - each exactly 1 copy.
[PASS] Max 5 rares/mythics total (main+SB): exactly 5/5 used, all in the
       mainboard; sideboard is 100% common/uncommon.
[PASS] No excluded cards (exclusion list was empty).
```
