---
deck_name: "br-goblin-tribal-cheat"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-09T22:07:02Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
8x Mountain                  basic
2x Swamp                     basic
2x Geothermal Bog            BR dual, enters tapped
1x Polluted Mire             B source, cycling
2x Smoldering Crater         R source, cycling
```

### CREATURES (16)
```
CMC  Card                       Qty  Color  Role                     Rar
1    Skirk Prospector           x2   R      Engine/Outlet            C
1    Festering Goblin           x2   B      Interaction/Disruption   C
2    Goblin Turncoat            x2   B      Engine/Outlet            C
2    Mogg War Marshal           x2   R      Enabler/Fodder           C
2    Subterranean Scout         x1   R      Enabler/Fodder           C
3    Goblin Matron              x2   R      Infrastructure/Consistency C
3    Goblin Medics              x1   R      Interaction/Disruption   C
3    Gempalm Incinerator        x2   R      Interaction/Disruption   U
3    Pashalik Mons              x1   R      Engine/Outlet            R
5    Siege-Gang Commander       x1   R      Payload/Payoff           R
```

### INSTANTS & SORCERIES (3)
```
CMC  Card                       Qty  Color  Role                     Rar
1    Chain Lightning            x2   R      Interaction/Disruption   C
4    Empty the Warrens          x1   R      Payload/Payoff           C
```

### OTHER SPELLS (6)
```
CMC  Card                       Qty  Color  Role                     Rar
2    Mind Stone                 x1   C      Infrastructure/Consistency C
3    Dralnu's Crusade           x2   BR     Payload/Payoff           U
3    Sulfuric Vortex            x1   R      Payload/Payoff           R
3    Urza's Incubator           x1   C      Engine/Outlet            M
5    Cryptic Gateway            x1   C      Engine/Outlet            R
```

## SIDEBOARD (10)
```
Card                  Qty  Color  Role / When to board in       Rar
Tormod's Crypt        x2   C      Graveyard decks               U
Duress                x2   B      Control / combo               C
Chainer's Edict       x2   B      Large creatures               U
Ichor Slick           x2   B      Creatures / cycling           C
Slice and Dice        x1   R      Go-wide boards                U
Dread Return          x1   B      Reanimate a Goblin payoff     U
```

## ANALYSIS

This deck's strongest draws involve Urza's Incubator on turn 2 followed by multiple cheap Goblins, or Cryptic Gateway on turn 5 tapping two Goblins to put Siege-Gang Commander directly into play. Dralnu's Crusade turns every Goblin into a 2/2 or larger threat and enables Gateway's shared-creature-type condition even more consistently.

Pashalik Mons adds a recursive damage engine: every Goblin that dies becomes 1 damage to any target, and its activated ability turns one Goblin into two. This combines especially well with Festering Goblin (dies to shrink a blocker) and Skirk Prospector (sacrifices Goblins for mana). Mogg War Marshal provides a steady stream of bodies that fuel all of these engines while still being a real threat under Crusade.

The mana base is heavily red (11 R sources / 5 B sources) because the deck only needs black for four cards: Dralnu's Crusade, Goblin Turncoat, Festering Goblin, and Empty the Warrens. With two Geothermal Bogs and cycling black lands, hitting single or double black by the mid-game is reliable.

### Cards Considered but Excluded

Rares / mythics cut due to the 5-card limit:
- Gamble: a one-mana tutor that finds Incubator or Gateway, but Sulfuric Vortex was prioritized as reach against lifegain and control.
- Grim Lavamancer: repeatable removal that competes for the same one-drop slot as Festering Goblin and Skirk Prospector.
- Cryptic Gateway and Urza's Incubator are already included; the remaining rare slots went to Siege-Gang Commander, Pashalik Mons, and Sulfuric Vortex.

Uncommons strong fits but a tier below chosen includes:
- Deadapult: only functions with Zombies, so it needs Dralnu's Crusade already in play. The effect is powerful but too conditional for the mainboard.
- Zombie Infestation: generates tokens from discarded cards, but the deck has no dedicated discard engine and prefers Goblin-specific token makers.
- Undead Gladiator: recursion is on-plan, but five mana is too slow for this curve.

Sideboard-consideration cards:
- Orim's Thunder was considered for artifact/enchantment hate, but its color identity includes white and is therefore outside RB.
- Urborg Uprising and Undying Rage were cut for Dread Return, which reanimates a Goblin payoff by sacrificing three tokens, and additional Ichor Slick removal.

## MANA AUDIT: PASS
```
Land Count: 15 / 15 recommended  [PASS]
Avg CMC: 2.48   Ramp cards: 3

Color Balance (core): [PASS]
  B  demand 23.1%  prod 33.3%  gap -10.2pp  [OK]
  R  demand 76.9%  prod 80.0%  gap -3.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Total rares/mythics across main+side = 5 <= 5
[PASS] All per-rarity copy limits respected
```
