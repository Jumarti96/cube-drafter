---
deck_name: "rb-goblins-aristocrats"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "RB"
format: "40-card"
built_at: "2026-07-09T21:24:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  13x Mountain
  2x  Geothermal Bog        BR dual, enters tapped
  1x  Swamp
```

### CREATURES (17)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Skirk Prospector        x2    R      Sac-a-Goblin mana engine      C
  1  Festering Goblin        x2    B      Sac fodder, native Zombie     C
  1  Grim Lavamancer         x1    R      Repeatable GY-fueled reach    R
  2  Mogg War Marshal        x2    R      Token engine on ETB and death C
  2  Goblin Turncoat         x2    B      Sac-a-Goblin regenerate       C
  2  Subterranean Scout      x1    R      Evasion enabler               C
  3  Goblin Matron           x2    R      Tutor for any Goblin          C
  3  Gempalm Incinerator     x2    R      Removal scaling w/ Goblins    U
  3  Pashalik Mons           x1    R      Keystone: death-ping + tokens R
  4  Flametongue Kavu        x1    R      Removal + body                U
  5  Siege-Gang Commander    x1    R      Keystone: tokens + sac-damage R
```

### INSTANTS & SORCERIES (2)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Chain Lightning         x2    R      Cheap burn / reach            C
```

### OTHER SPELLS (5)
```
CMC  Card                    Qty   Color  Role                          Rar
  3  Dralnu's Crusade        x2    BR     Anthem + turns Goblins Zombie U
  3  Deadapult               x1    R      Repeatable Zombie-sac reach   U
  3  Sulfuric Vortex         x1    R      Reach finisher, no lifegain   R
  3  Urza's Incubator        x1    C      -2 cost on Goblin spells      M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in         Rar
Tormod's Crypt           x1    C      Vs graveyard/reanimator decks    U
Duress                   x1    B      Vs control/combo, strip a key    C
                                       noncreature spell before it lands
Terror                   x2    B      Vs big nonblack threats          C
Icy Manipulator          x1    C      Vs voltron/big creatures, tap    U
                                       down their one relevant blocker
Slice and Dice           x1    R      Vs go-wide token mirrors (cycle  U
                                       for 1 dmg early, hardcast late)
Solar Blast              x2    R      Flexible reach/removal, cycles   C
Chainer's Edict          x1    B      Vs hexproof/protection threats   U
Ichor Slick              x1    B      Vs small/medium creature decks   C
```

## ANALYSIS

Pashalik Mons and Skirk Prospector turn every dying Goblin into damage or mana, while Dralnu's Crusade makes the whole tribe black Zombies so Deadapult can eat any of them for reach. Urza's Incubator discounts the Goblin curve (Siege-Gang Commander down to {1}{R}{R}), and Sulfuric Vortex plus a burn suite close the game even if the fragile 1-2 toughness bodies trade off in combat.

**Slot allocation.** Macro-Archetype: Midrange (aggressive midrange / aristocrats-sacrifice — Pashalik Mons, Siege-Gang Commander, and Deadapult all carry both Aggro and Midrange tags). Projected avg MV: 2.33. Lands: 16 (40% of N=40) — within the 38-42% Midrange band; the Skirk Prospector-as-mana-dork modifier was considered (-0.5 per 2 copies) but the deck's splash and 5-drop top end argued for holding at 16 rather than trimming to 15. Threats/Payoffs and Engine absorb into the same 17 creatures per the Midrange note — this deck's bodies double as both the clock and the sacrifice engine. Interaction sits at 2 dedicated burn spells (Chain Lightning x2) plus incidental removal baked into Gempalm Incinerator, Grim Lavamancer, Deadapult, and both keystones' sac-damage abilities.

**The Dralnu's Crusade / Deadapult interaction is sequence-dependent.** Before Dralnu's Crusade resolves, Deadapult's "Sacrifice a Zombie" only has 2 legal targets in the whole 40: the copies of Festering Goblin (native "Zombie Goblin"). Once a Crusade is in play, every Goblin and every Goblin token becomes a Zombie, and Deadapult can eat the whole board. Sequence Crusade before Deadapult when possible; Deadapult cast first is still fine since Festering Goblin alone gives it live fodder.

**Goblin density is at the pool's ceiling.** This cube has exactly 10 distinct Goblin creatures, and the deck plays every single one at maximum legal copies (16 Goblin card-instances across those 10 names, plus Grim Lavamancer as a non-tribal 11th body). There is no more tribal density available to add from this pool. Reach therefore comes from three independent sac-damage outlets (Deadapult, Siege-Gang Commander's ability, Pashalik Mons's passive ping) layered on top of fragile combat bodies, rather than from combat damage alone.

**Grim Lavamancer needs graveyard fuel**, but this deck supplies it naturally — creatures dying into the aristocrats plan and Gempalm Incinerator's cycling mode both feed the yard, so live fuel is typically available by turn 3-4.

### Cards Considered but Excluded

**Cut during self-grill: Cryptic Gateway (rare).** This card was in the original suggested core-card list and was in the deck through the first build pass, but an adversarial review flagged it as largely redundant — Urza's Incubator already discounts Siege-Gang Commander to {1}{R}{R}, making Cryptic Gateway's "cheat in an expensive Goblin" job mostly done already by a cheaper, more reliable card. Gateway also requires 2 already-tapped creatures and does nothing on the turn it's cast (5 mana, zero board impact) — a real tempo cost in an aggressive shell. Swapped 1-for-1 (same rare slot) for Grim Lavamancer, which gives guaranteed repeatable reach instead of a conditional combo piece. If you want Cryptic Gateway's mass-Goblin-flood upside back in a slower metagame, it is the first card to test in over Grim Lavamancer.

**Other rares/mythics cut due to the 5-card cap:** Chainer, Dementia Master (rare B reanimator payoff — off-theme, no Goblin synergy); Yawgmoth, Thran Physician (mythic B sac-engine — powerful but demands double-black activation, too heavy for a light splash); Vampiric Tutor (mythic B — could find Siege-Gang Commander/Sulfuric Vortex but costs life and a card); Sneak Attack (mythic R — cute with Siege-Gang Commander/Worldgorger Dragon but too combo-cute for a 10-Goblin pool); Triskelion (rare, colorless — fine standalone threat, no tribal tie); Royal Assassin / Nantuko Shade (rare B — generic value, would have displaced a rare a Goblin needs more).

**Uncommons that are strong fits but a tier below the chosen includes:** Zombie Infestation (discard-two-for-a-2/2-Zombie — decent Deadapult fodder post-Crusade, but the discard cost is steep in an aggro shell); Faceless Butcher (clean removal-on-a-body, but a Nightmare, not a Goblin — no tribal payoff synergy); Dread Return (reanimation is off-plan without a self-mill package); Fireblast (free burn by sacrificing 2 Mountains — powerful but a real mana-base tax in a deck that already runs a splash); Storm Entity / Valduk, Keeper of the Flame (both want a spell-heavy or Aura/Equipment shell this deck doesn't have).

**Sideboard-consideration cards not included:** Damping Sphere and Crawlspace (both anti-strategy tech that doesn't line up with a typical Dominaria Remastered cube metagame — swap in vs a ramp/storm opponent if one appears); Wall of Junk (a real anti-aggro blocker if this deck is ever on the draw against faster decks); Jester's Cap (too slow/cute for a 40-card sideboard).
