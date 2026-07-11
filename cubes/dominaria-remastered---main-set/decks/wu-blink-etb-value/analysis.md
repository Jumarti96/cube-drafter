---
deck_name: "wu-blink-etb-value"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-10T02:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
  6x Plains
  8x Island
  1x Idyllic Beachfront        WU dual, enters tapped
```

### CREATURES (9)
```
CMC  Card                    Qty   Color  Role                       Rar
  2  Whitemane Lion           x2    W      Blink enabler / ETB rebuy   C
  2  Cloud of Faeries         x2    U      ETB untap / cantrip flier  C
  3  Man-o'-War                x2    U      ETB tempo removal          C
  4  Sawtooth Loon             x1    WU     ETB rebuy engine (flier)   U
  5  Peregrine Drake           x1    U      ETB mana untap (ritual)    C
  5  Serra Angel               x1    W      Closer / evasive threat    U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Swords to Plowshares      x2    W      Premium removal             U
  2  Momentary Blink           x2    W      Blink enabler (flashback)   C
  2  Counterspell              x2    U      Hard counter                C
  2  Snap                      x1    U      Tempo bounce / rebuy ETB    C
  3  Frantic Search            x1    U      Free card filtering         C
  3  Absorb                    x1    WU     Counter + lifegain          R
  3  Sevinne's Reclamation     x1    W      Recursion (rebuy ETB)       R
  4  Fact or Fiction           x1    U      Card advantage              U
```

### OTHER SPELLS (8)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Mystic Remora             x1    U      Early card advantage engine R
  2  Sun Clasp                 x1    W      Repeatable ETB rebuy (aura) C
  2  Pacifism                  x2    W      Removal (lockdown)          C
  4  Umbilicus                 x1    C      Symmetric bounce engine     R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Windborn Muse            x1    W      Anti-aggro tax (vs go-wide creatures) R
Tormod's Crypt           x2    C      GY hate (vs Reanimator/flashback)     U
Damping Sphere            x1    C      Anti-storm / anti-big-mana            U
Radiant's Judgment        x1    W      Answers big creatures, cycles if dead C
Icy Manipulator           x1    C      Repeatable tapper (control matchups)  U
Thieving Magpie           x1    U      Card advantage (grindy matchups)      U
Ovinize                   x1    U      Neutralizes indestructible/pro threats C
Deep Analysis             x1    U      Card advantage (attrition matchups)   C
Wormfang Drake            x1    U      Evasive body (needs exile fodder)     C
```

## ANALYSIS

A WU tempo-value shell built entirely around repeatable "enters the battlefield" triggers. Whitemane Lion, Momentary Blink, Sun Clasp, and Sawtooth Loon all exist to rebuy Man-o'-War (tempo removal), Cloud of Faeries / Peregrine Drake (mana untap, effectively free spells), and each other. Umbilicus turns that loop into a free, symmetric-but-net-positive engine every single upkeep. There's no single "win condition" card — the payoff is cumulative tempo and card advantage, backed by real WU interaction (Swords to Plowshares, Counterspell, Absorb, Pacifism) so the deck can survive long enough to grind the opponent out. Serra Angel is the lone dedicated closer once the engine has taken over the game.

**Slot allocation.** Macro-Archetype: Tempo (avg CMC 2.56, majority tag vote from pipeline core cards). Lands: 15 (37.5% of N=40) — above the Tempo reference band (30-34%) but matching the mana-audit tool's own formula exactly (15/15, PASS); the deviation from the archetype table is justified by 3 double-pip costs (Counterspell UU, Absorb WUU, Sawtooth Loon/Absorb mixed WU) that need real source density despite the low curve. Modifiers: cantrips −0 (none included at 1cmc), mana dorks/rocks −0 (Cloud of Faeries/Peregrine Drake function as pseudo-ramp but aren't literal rocks), MDFCs −0. Interaction: 10 cards / 40% of nonland spells (Man-o'-War + Swords/Counterspell/Pacifism/Absorb/Snap) — slightly above the 25-35% band, defensible since this deck needs to survive to value out. Engine & Infrastructure: 14 cards / 56% — well above the 20-30% band. Threats/Payoffs: 1 card / 4% — well below the 10-18% band. This last split is a real, acknowledged tradeoff, not an oversight: in a build-around-the-payoff archetype like this one, most "engine" cards (Whitemane Lion, Cloud of Faeries, Man-o'-War) are also the deck's only creature bodies, so the reference table's four buckets don't cleanly separate for this strategy. Serra Angel is the only card whose whole job is closing games — both grill agents flagged this independently as the deck's one soft spot. If it feels too light in practice, Confiscate (uncommon, steal-effect closer) is the natural swap-in (see below).

**Mana base derivation.** Core pips (W/U only, no splash): W=14, U=16 (30 total) → 46.7% W / 53.3% U. Land production: 7 W sources (6 Plains + Idyllic Beachfront) / 9 U sources (8 Island + Idyllic Beachfront) out of 15 lands → 46.7% W / 60.0% U. Audit reports both colors OK (W gap +0.0pp, U gap −6.7pp).

**The Umbilicus symmetry.** Umbilicus's upkeep trigger is symmetric — the opponent gets the identical "pay 2 life or bounce a permanent" choice on their own upkeep. It's still a strong include because our creatures actively want to be bounced (that's a free ETB retrigger), while the opponent's board usually doesn't want the same treatment — but it is not a one-sided engine, and an opponent with their own ETB synergies could turn it back on us. Playing around this: sequence Umbilicus after your ETB pieces are already down.

**The Frantic Search / Sevinne's Reclamation interaction.** Frantic Search mills 2 cards while drawing 2 (net card-neutral, mana-positive), which can feed Sevinne's Reclamation targets into the graveyard faster — a 3-or-less MV permanent milled by Frantic Search becomes a free Sevinne's Reclamation target even if you never drew it.

**Sideboard cohesion and its ceiling.** Tormod's Crypt + Damping Sphere directly answer this cube's strongest secondary archetypes (Reanimator/Graveyard and Storm/Spellslinger, both well-represented in Dominaria Remastered). One real limitation surfaced by the Challenger agent: there is no on-color artifact or enchantment removal anywhere in the WU-restricted pool (Break Asunder is green; Orim's Thunder's kicker cost is red, making it illegal in a no-splash build) — so this sideboard structurally cannot answer the Enchantress or Artifacts archetypes. That's a pool-level ceiling, not a build mistake; there's nothing in-color to add.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- Denizen of the Deep (R, 8cmc) — thematically the single best payoff in the cube for this archetype (bounces ALL your creatures on ETB, retriggering everything at once), but 8cmc is far too slow for a 2.56-avg-CMC 40-card shell, and it would've displaced a more load-bearing rare.
- Vexing Sphinx (R) — solid card-draw engine, cut to free a rare slot for Windborn Muse in the sideboard instead.
- Wrath of God (R) — a real sweeper option, but it kills our own ETB bodies too; cut in favor of Windborn Muse, which doesn't punish our board.
- Arcanis the Omnipotent (R, 6cmc) — strong late-game draw engine, cut for curve/rarity-budget reasons.
- Force of Will (M) — powerful protection, but overkill for a grindy value plan rather than a combo needing hard protection; would've used a mythic slot.
- Urza, Lord High Artificer (M) — needs artifact density this deck doesn't have; cut.

**Uncommons a tier below the chosen includes:**
- Confiscate (U, 6cmc) — "Enchant permanent. You control enchanted permanent." A genuinely better closer than Serra Angel (steals the best threat instead of just being a body), flagged independently by both grill agents. Didn't make the cut only because of curve top-end concerns; strong candidate if you want a second/replacement closer.
- Ovinomancer (U) — another ETB-tagged card, but its "sacrifice unless you return three basic lands" cost is much clunkier than Man-o'-War's clean bounce.
- Nomad Decoy (C) — repeatable tapper, lost out to Icy Manipulator for the same slot type.
- Impulse (C) — cheap card selection, very close cut vs. Frantic Search; swap in if you want less graveyard synergy and more raw card selection.

**Sideboard-consideration cards that didn't make the 10:**
- Stand // Deliver (U) — flexible protection/bounce split card, honorable mention for a "protect the plan" slot.
- Voice of All (U) — protection-from-a-color ETB creature, decent generic answer to mono-colored aggro, cut for Windborn Muse instead.
- Wrath of God — also a sideboard consideration against go-wide decks if Windborn Muse isn't fast enough, despite hitting our own board.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     2.56   Ramp cards: 3

Color Balance (core):  [PASS]
  U  demand  53.3%  prod  60.0%  gap  -6.7pp  [OK]
  W  demand  46.7%  prod  46.7%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <= 2 copies each ............................ PASS
Rares/mythics <= 1 copy each ................................... PASS
Max 5 rares/mythics total (main + SB) .......................... PASS (5/5: Absorb, Mystic Remora,
                                                                    Sevinne's Reclamation, Umbilicus,
                                                                    Windborn Muse)
All cards verified present in filtered cube pool ............... PASS
Color identity within {W, U}, no splash ......................... PASS
```
