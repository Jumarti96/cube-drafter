---
deck_name: "r-gauntlet-goblins"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "R"
format: "40-card"
built_at: "2026-07-10T20:23:47Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
16x Mountain
```
All-basic by design — Gauntlet of Power's mana-doubling only triggers off basic lands.

### CREATURES (19)
```
CMC  Card                  Qty  Color  Role                             Rar
  1  Skirk Prospector      x1   R      Goblin sac-for-mana enabler      C
  2  Mogg War Marshal      x2   R      Token generator / goblin fodder  C
  2  Subterranean Scout    x2   R      Goblin evasion enabler           C
  3  Goblin Matron         x2   R      Goblin tutor                     C
  3  Gempalm Incinerator   x2   R      Flexible goblin / cycling burn   U
  3  Pashalik Mons         x1   R      Goblin payoff / reach engine     R
  4  Flametongue Kavu      x2   R      Premium removal + body           U
  4  Dragon Whelp          x2   R      Firebreathing flier (payoff)     U
  4  Coal Stoker           x1   R      Maindeck ramp toward top end     C
  5  Avarax                x2   R      Firebreathing haste + tutor      C
  5  Siege-Gang Commander  x1   R      Goblin payoff / bodies + reach   R
  6  Shivan Dragon         x1   R      Firebreathing flying finisher    R
```

### INSTANTS & SORCERIES (3)
```
CMC  Card             Qty  Color  Role                  Rar
  1  Chain Lightning  x2   R      Removal / reach burn  C
  6  Fireblast        x1   R      Free finisher burn    U
```

### OTHER SPELLS (2)
```
CMC  Card               Qty  Color  Role                            Rar
  4  Sneak Attack       x1   R      Cost-cheat enabler for dragons  M
  5  Gauntlet of Power   x1   C      Archetype anchor (symmetric)    M
```

## SIDEBOARD (10)
```
Card             Qty  Color  Role / When to board in              Rar
Tormod's Crypt   x1   C      Graveyard hate vs GY/Reanimator      U
Slice and Dice   x1   R      Board wipe vs Tokens/Aristocrats     U
Icy Manipulator  x1   C      Tempo answer vs walls/lock pieces    U
Undying Rage     x2   R      Recursive threat vs Control          C
Juggernaut       x1   C      Ignores Walls vs Stax                C
Goblin Medics    x1   R      Extra reach vs grindy matchups       C
Ridgetop Raptor  x1   R      Efficient body vs trick-light decks  C
Solar Blast      x1   R      Flex burn/cycling reach              C
Lightning Rift   x1   R      Cycling payoff vs grindy/control     U
```

## ANALYSIS

A red Goblin-tribal shell that plays a real aggressive game plan on its own — Skirk Prospector, Mogg War Marshal, and Goblin Matron curve into Siege-Gang Commander and Pashalik Mons for sacrifice-fueled reach — with Gauntlet of Power as a mythic bonus that doubles every Mountain's output and turns Dragon Whelp, Avarax, and Shivan Dragon's repeatable firebreathing abilities into game-ending mana sinks. Sneak Attack is the explosive top-end: for {R} it cheats Shivan Dragon into play with haste, sidestepping the mana cost entirely. The manabase is 16 basic Mountains with zero nonbasics by design, since Gauntlet's bonus only triggers off basic lands.

**Important caveat on Gauntlet of Power: it is symmetric.** Neither its +1/+1 anthem nor its mana-doubling clause is restricted to "you control." It boosts any player's red creatures and basic Mountains, not just this deck's.

**Self-grill revisions applied:** The Challenger agent caught two real issues in the first draft. (1) Suq'Ata Lancer is a Human Knight with flanking, not evasion, and gets zero synergy with the Goblin Matron/Gempalm Incinerator/Siege-Gang Commander tribal payoffs — swapped for Subterranean Scout, an actual Goblin that grants real evasion for one less mana. (2) The deck's headline is "Big Mana," but the first draft ran zero maindeck ramp (Coal Stoker was sitting in the sideboard) — moved it into the 40, cutting the below-rate Solar Blast (4 mana for 3 damage) to make room.

**Framing honesty:** the Challenger also correctly noted that this deck does not depend on drawing Gauntlet of Power or Sneak Attack — each is a single mythic (~2.5% of the deck). The Goblin package plus burn suite is a complete, self-sufficient aggro plan on its own; Gauntlet and Sneak Attack are high-upside bonuses when drawn, not load-bearing combo pieces. That's the honest way to read "Mono-Color Big Mana" here: it's Goblin aggro with a mana-doubling payoff bolted on, not a ramp-into-fatties deck.

**Goblin count for Pashalik Mons/Gempalm Incinerator:** Skirk Prospector, Mogg War Marshal x2, Subterranean Scout x2, Goblin Matron x2, Gempalm Incinerator x2, Siege-Gang Commander, Pashalik Mons = 10 Goblin cards, plus Siege-Gang's 3 tokens and Mogg War Marshal's death-trigger token — real density for Pashalik Mons triggers and a strong X for cycled Gempalm Incinerators.

### Cards Considered but Excluded

- **Rares/mythics cut by the 5-card cap:** Grim Lavamancer, Gamble, Overmaster, Last Chance, Sulfuric Vortex, Worldgorger Dragon (mythic — excluded doubly for the cap and for its exile-all-permanents downside, which is only safe through Sneak Attack and risks a blowout if the dragon is answered before end of turn).
- **Uncommons/commons a tier below the cut:** Storm Entity (dropped from the sideboard too — needs multiple spells cast same-turn to not die to state-based actions, and this shell doesn't reliably enable that), Deadapult (no Zombies to sac), Valduk/Undying Rage as an auras package (too thin without more equipment), Macetail Hystrodon, Ember Beast, Lightning Reflexes.
- **Sideboard-consideration cards not included:** Dodecapod, Umbilicus, Jester's Cap, Crawlspace, Dragon Blood, Dragon Engine, Jalum Tome — all reasonable colorless value pieces, but none answer a specific matchup better than what's in the 10.
- **Land base alternative considered and rejected:** Mishra's Factory and Terminal Moraine are fine utility lands in a vacuum, but both would be dead draws for Gauntlet of Power's basic-land trigger, so they're excluded in favor of a pure 16 Mountains.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.42   Ramp cards: 0 (tool doesn't tag Coal Stoker's ETB ritual as "ramp" — functionally it is)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <=2 copies each:        PASS
Rares/mythics <=1 copy each:              PASS
Total rares/mythics (main+SB) <=5:        PASS (5/5 - Pashalik Mons, Sneak Attack,
                                            Siege-Gang Commander, Gauntlet of Power,
                                            Shivan Dragon; 0 in sideboard)
```
