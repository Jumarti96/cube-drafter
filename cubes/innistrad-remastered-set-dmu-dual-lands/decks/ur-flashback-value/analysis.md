---
deck_name: "ur-flashback-value"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-07-09T00:58:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

A UR midrange shell that casts cheap instants/sorceries (many with Flashback) to power four parallel payoffs: Thing in the Ice locks the board with a one-sided bounce, Docent of Perfection turns every spell into a Wizard token (and self-transforms once 3 tokens exist), Thermo-Alchemist/Delver punish spell density directly, and Bedlam Reveler refills the hand once the graveyard is stocked. Galvanic Iteration pairs with a miracled Temporal Mastery for an occasional double extra-turn haymaker, but the deck doesn't depend on it.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  6x Island
  7x Mountain
  2x Molten Tributary     UR dual, always enters tapped
  1x Evolving Wilds       Fetches any basic, thins deck
```

### CREATURES (7)
```
CMC  Card                                Qty  Color  Role                          Rar
  1  Delver of Secrets // Insectile Ab.  x2   U      Cheap threat/spell payoff     C
  2  Thing in the Ice // Awoken Horror   x1   U      Keystone: mass-bounce wincon  R
  2  Thermo-Alchemist                    x2   R      Spellslinger engine/reach     U
  5  Docent of Perfection // Final It.   x1   U      Keystone: token engine        R
  8  Bedlam Reveler                      x1   R      Keystone: hand refill         R
```

### INSTANTS & SORCERIES (16)
```
CMC  Card                    Qty  Color  Role                                Rar
  1  Faithless Looting       x2   R      Graveyard enabler / flashback fuel  C
  1  Lightning Axe           x2   R      Premium removal, discard feeds GY   U
  1  Silent Departure        x1   U      Tempo bounce, flashback value       C
  2  Think Twice             x2   U      Card advantage, flashback value     C
  2  Abrade                  x2   R      Flexible removal                    U
  2  Galvanic Iteration      x1   UR     Spell-copy engine / combo piece     R
  3  Fiery Temper            x1   R      Burn removal, madness synergy       U
  4  Mystic Retrieval        x2   U      Spell recursion, flashback value    U
  5  Alchemist's Greeting    x1   R      Removal, madness synergy            C
  5  Seize the Storm         x1   R      Graveyard-scaling threat            C
  7  Temporal Mastery        x1   U      Haymaker (copied by Galvanic Iter.) M
```

### OTHER SPELLS (1)
```
CMC  Card                Qty  Color  Role                              Rar
  3  Burning Vengeance    x1   R      Flashback payoff / reach damage   U
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                Rar
Boarded Window             x1   C      vs Aggro-Tribal/Tokens: attackers -1/-0 U
Blazing Torch              x1   C      vs small aggro/Vampire-Zombie tribal    C
Spontaneous Mutation       x1   U      vs big creatures once GY is stocked     C
Imprisoned in the Moon     x1   U      Unconditional answer to a key threat    C
Compelling Deterrence      x2   U      Flexible bounce vs problem permanents   U
Summary Dismissal          x1   U      vs combo/storm mirrors, big turns       U
Fiery Temper               x1   R      Extra reach vs grindy/control           U
Silent Departure           x1   U      Extra tempo bounce vs creature decks    C
Wandering Mind             x1   UR     Extra card advantage vs control        U
```

## ANALYSIS

**Docent's transform is self-sufficient.** "Whenever you cast an instant or sorcery spell, create a 1/1 blue Human Wizard creature token. Then if you control three or more Wizards, transform this creature." The tokens it makes ARE Wizards, so Docent flips itself off 3 spell casts with no external Wizard support needed — this isn't a soft dependency, it's a closed loop.

**The graveyard is what makes the top end castable.** Bedlam Reveler reads {6}{R}{R} but "costs {1} less to cast for each instant and sorcery card in your graveyard" — with 16 instants/sorceries in the deck (40% of it) plus Faithless Looting/Lightning Axe actively feeding the yard, it's realistically a 2-4 mana play by turn 5-6, not an 8-drop. Seize the Storm's flashback ({6}{R}) and Temporal Mastery's hardcast ({5}{U}{U}) work the same way: expensive on paper, live once the engine is running. This is intentional curve-smoothing via the graveyard, not curve-top bloat.

**The Galvanic Iteration / Temporal Mastery line.** Temporal Mastery has Miracle {1}{U} (castable off the top-of-turn draw trigger). Galvanic Iteration is an instant, so it can be cast in response to your own miracle trigger, then Temporal Mastery resolves as "the next instant or sorcery spell you cast this turn" — copying it for a second extra turn. This needs Temporal Mastery to be your literal first draw of the turn with Galvanic Iteration live, so it's a real but low-frequency haymaker, not the primary plan.

**Fiery Temper's madness line has a wrinkle.** When discarded and cast via Madness {R}, it's "discard[ed] into exile" rather than the graveyard — so a madness-cast Fiery Temper does NOT feed Bedlam Reveler's cost reduction or become a Mystic Retrieval target. It still counts as a spell cast for Thing in the Ice/Docent/Thermo-Alchemist either way.

**Slot proportions (Midrange bands, N=24 nonland):**
Interaction 7/24 (29.2%, band 20-30%) — Lightning Axe, Abrade, Fiery Temper, Alchemist's Greeting, Silent Departure.
Threats/Payoffs 9/24 (37.5%, band 30-40%) — Delver, Thing in the Ice, Thermo-Alchemist, Docent, Bedlam Reveler, Seize the Storm, Burning Vengeance.
Engine/card-selection 8/24 (33.3%, absorbed into Payoffs per the Midrange rule) — Faithless Looting, Think Twice, Mystic Retrieval, Galvanic Iteration, Temporal Mastery.

**Mana base.** Pip demand is R 55.2% / U 44.8% (16R/13U pips across core cards) — Bedlam Reveler (RR) and Fiery Temper (RR) skew red despite Docent/Temporal Mastery both wanting UU. Land production is R 56.2% / U 50.0% (9 red sources / 8 blue sources out of 16 lands), tracking the demand split within a few points either way. UR fixing in this cube is THIN (only Molten Tributary at common; Stormcarved Coast is a rare and was cut to preserve the 5-rare budget for spells) — 2x Molten Tributary + Evolving Wilds is what's available without spending a rare slot on a land.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (all confirmed UR-legal, all genuinely strong — cut for budget, not weakness):
- **Chandra, Dressed to Kill** (M) — strong red planeswalker, but the deck already commits its planeswalker/finisher slots to Temporal Mastery + Galvanic Iteration.
- **Jace, Unraveler of Secrets** (M) — "+1: Scry 1, then draw a card" is excellent value, but a 5-mana blue walker competes directly with Docent/Bedlam Reveler for top-end slots.
- **Mirrorwing Dragon** (M) — "Whenever a player casts an instant or sorcery spell that targets only this creature, that player copies that spell for each other creature they control" is a build-around payoff, but needs a wider board of creatures than this list runs.
- **Hullbreaker Horror** (R) — flash, uncounterable, bounces a spell or permanent on every cast. Excellent control finisher, first alternate if a rare slot opens up (e.g., swap out Bedlam Reveler for a more controlling build).
- **Memory Deluge** (R) — scalable card selection with Flashback {5}{U}{U}; strictly better late-game Think Twice, blocked purely by the rare cap.
- **Stormcarved Coast** (R, land) — "enters tapped unless you control two or more other lands" is a strictly better Molten Tributary. Cut to keep the rare budget on spells rather than a land.

**Commons/uncommons a tier below the chosen includes:**
- **Rise from the Tides** (U) — "Create a tapped 2/2 Zombie for each instant/sorcery in your graveyard" is a real go-wide payoff, but at 6 mana it competes with the deck's other expensive payoffs and doesn't fit the tighter 24-spell shell.
- **Cackling Counterpart** (U) — copies a creature you control, with Flashback; needs a better creature to copy than this list runs.
- **Festival Crasher** (C) — "+2/+0 until end of turn" per spell cast is a fine aggressive payoff, cut in favor of Mystic Retrieval to keep the curve grindy rather than beatdown-leaning.
- **Deranged Assistant / Reckless Scholar / Covetous Castaway** — all solid graveyard-filling bodies, but the deck's enabler slots (Faithless Looting x2, Think Twice x2) were judged sufficient without adding more creature-based self-mill.

**Sideboard-consideration cards not included:**
- **Syncopate** — cut from the mainboard for being the least synergistic card in the list (no flashback, no graveyard tie-in); a reasonable SB include if you want more generic interaction vs. a deck this list otherwise struggles against.
- **Voldaren Ambusher / Traveler's Amulet** — considered for anti-tribal/fixing roles respectively, cut as lower-impact than the current 10.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.79   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  55.2%  prod  56.2%  gap  -1.0pp  [OK]
  U  demand  44.8%  prod  50.0%  gap  -5.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: none exceed 2 copies
[PASS] Rares/mythics: 1 copy each (5 total: Thing in the Ice,
       Docent of Perfection, Bedlam Reveler, Galvanic Iteration,
       Temporal Mastery)
[PASS] Max 5 rares/mythics across main+SB: exactly 5, all mainboard,
       0 in sideboard
[PASS] All 50 cards (40 main + 10 SB) verified present in the cube's
       300-card mainboard pool by exact name
```
