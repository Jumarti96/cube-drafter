---
deck_name: "u-marit-lage-high-tide"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "U"
format: "40-card"
built_at: "2026-07-31T16:55:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  16x Island                  Land — the High Tide and Gauntlet of Power multiplier
  1x Dark Depths             Payoff — win condition
```

### CREATURES (3)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  2  Cloud of Faeries            x2   U      Engine — untap two lands; cycles when mana is not th  C
  5  Peregrine Drake             x1   U      Engine — untaps five lands unconditionally; a 2/3 fl  C
```

### INSTANTS & SORCERIES (17)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  1  High Tide                   x2   U      Engine — doubles every Island for a turn              U
  2  Counterspell                x2   U      Interaction — protects the assembly                   C
  2  Impulse                     x2   U      Find — digs four deep for Dark Depths                 C
  2  Snap                        x1   U      Engine + interaction — free bounce, untaps two lands  C
  3  Frantic Search              x2   U      Find + engine — free untap and two cards deep         C
  3  Stroke of Genius            x1   U      Backup payoff — decks the opponent off the same 30 m  R
  4  Deep Analysis               x2   U      Find — four cards from one slot via flashback         C
  4  Fact or Fiction             x2   U      Find — digs five deep; you choose the pile            U
  4  Turnabout                   x2   U      Engine — untap all your lands                         U
  5  Force of Will               x1   U      Interaction — zero-mana protection on the burst turn  M
```

### OTHER SPELLS (3)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  2  Mind Stone                  x1   C      Ramp — accelerates to a turn-4 Gauntlet of Power      C
  3  Jalum Tome                  x1   C      Find — the deck's only REPEATABLE digger              C
  5  Gauntlet of Power           x1   C      Engine — a permanent High Tide on every basic Island  M
```

## SIDEBOARD (10)

```
Card                        Qty  Color  Role / When to board in                                                          Rar
Maze of Ith                 x1   C      Recurring attacker blank (land) — vs creature aggro — swap for a Mishra's Factor  R
Tormod's Crypt              x2   C      Graveyard hate — vs the cube's 45 graveyard cards — flashback, threshold, reanim  U
Ovinize                     x1   U      Single-large-threat answer — vs a lone fatty, regenerator or protection-from-col  C
Circular Logic              x2   U      Scaling counterspell — vs control and combo — 18 of the 23 nonland cards are ins  U
Man-o'-War                  x1   U      Bounce on a body + Floodgate trigger — vs creature decks — 'return target creatu  C
Floodgate                   x2   U      Wall + delayed sweeper — vs creature decks — a 0/5 Defender that on leaving the   U
Confiscate                  x1   U      Noncreature-permanent answer — vs a key artifact or enchantment — mono-blue has   U
```

## ANALYSIS

### DECK IDENTITY

A mono-blue High Tide combo deck whose only intended win condition is Dark Depths. Mono-blue has no card that searches the library for a land, so the deck's binding constraint is not the thirty mana — it is drawing one mythic land out of forty cards, and nine of the twenty-three nonland slots exist purely to dig for it. The mana comes from stacking two multipliers on a monolithic basic-Island base: Gauntlet of Power makes every basic Island tap for two permanently, High Tide adds a third for a turn, and Turnabout, Peregrine Drake, Frantic Search, Snap and Cloud of Faeries untap those Islands again. Stroke of Genius is the honest concession — the same thirty mana that would strip ten ice counters instead decks the opponent in the roughly one game in five where Dark Depths never appears.

### THE TWO-MULTIPLIER STACK

The engine is not High Tide alone. Gauntlet of Power reads "Whenever a **basic** land is tapped for mana of the chosen color, its controller adds an additional one mana of that color", and High Tide reads "whenever a player taps an **Island** for mana, that player adds an additional {U}". Both trigger off the same sixteen basic Islands, and they stack **additively**: with both on the battlefield each basic Island taps for three.

| Board state | Mana from 8 basic Islands | Ice counters that turn |
|---|---|---|
| Neither | 8 | 2 |
| Gauntlet only | 16 | 5 |
| High Tide only | 16 | 5 |
| Both | 24 | 8 |

Gauntlet is worth more than High Tide over a game because it is permanent — the table above is per turn for Gauntlet and once for High Tide — which is why it takes a mythic slot and why Mind Stone x2 are here to cast it on turn four.

### WHY THIS DECK IS 39% "FINDING"

Nine of twenty-three nonland cards do nothing but dig. That is a gross overshoot of the 5-15% Threats/Payoffs band and it is deliberate: **there is no card in mono-blue that searches the library for a land.** Mystical Tutor reads "an instant or sorcery card". Terminal Moraine reads "a basic land card". Dark Depths is neither. So the payoff cannot be tutored, only drawn, and the cards that draw are functionally the payoff slot.

Even with all nine, the assembly gate lands at p = 0.79 against a 0.75 threshold — and it only got there after the grill added Jalum Tome, the deck's one repeatable digger, on a thesis turn already revised from 7 to 8. That number is the honest measure of what mono-blue costs versus the Simic build, which reaches p = 0.82 by spending one green pip on Crop Rotation.

### STROKE OF GENIUS IS NOT A CONSOLATION PRIZE

It is the same win condition wearing different clothes. Dark Depths asks for thirty mana to make a 20/20. Stroke of Genius asks for roughly thirty mana to draw the opponent out of their library. The engine does not care which one it is feeding, and it is castable at instant speed on the opponent's end step. In practice the deck plays as "assemble thirty mana, then check which of two cards you have."

### THE ISLAND COUNT IS A COMBO DECISION, NOT A MANA-BASE DECISION

Four other Island-typed lands exist in this pool — Tangled Islet, Contaminated Aquifer, Idyllic Beachfront, Molten Tributary — and every one of them would trigger High Tide. All four are excluded, and the reason is Gauntlet, not colour: none of them is **basic**, so none is doubled by Gauntlet of Power. Trading a basic Island for a nonbasic Island costs one Gauntlet trigger every turn, forever, to gain a colour the deck cannot use.

### WHAT THE DECK CANNOT DO

Mono-blue in this pool has **zero** cards that destroy an artifact or an enchantment — the sideboard's answer is Confiscate, which steals rather than destroys and costs six mana. There is no maindeck sweeper and no maindeck wall; the only bodies are two 1/1 fliers and a 2/3 Drake. Against a fast creature deck this build is relying on the sideboard to change the matchup entirely.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:4  4:6  5:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff_access: 10 copies (effective 3.9: Fact or Fiction@0.4, Fact or Fiction@0.4, Deep Analysis@0.35, Deep Analysis@0.35, Impulse@0.3, Impulse@0.3, Frantic Search@0.25, Frantic Search@0.25, Jalum Tome@0.3) → p=0.79 (need ≥ 0.75)
  PASS  mana_engine: 12 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 38%  T2 93%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-blue's only mainboard creature answer is Snap x2 ('Return target creature to its owner's hand'), which handles one body. The pool's blue sweeper is Floodgate, whose trigger only fires when it leaves the battlefield — a four-mana wall that does nothing the turn it lands. Maindecking it would cost one of the eight find-slots that a single, untutorable copy of Dark Depths requires. Floodgate x2 sits in the sideboard, where 15 basic Islands make its trigger deal 7.
  OK        single_large_threat: Snap, Counterspell, Force of Will
  CONCEDED  noncreature_permanents: Mono-blue in this pool contains no card that destroys an artifact or an enchantment — not one. The only answer available is Confiscate ({4}{U}{U}, 'Enchant permanent / You control enchanted permanent'), which steals rather than destroys and costs six mana, or two ice-counter activations. It is a sideboard card because six mana during the installment window is the most expensive answer in the deck.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: No blue card in this pool answers a graveyard. Tormod's Crypt ({0}, 'Exile target player's graveyard') is colourless and boards in against the cube's 45 graveyard cards; maindecking it would spend a find-slot that is blank against every deck without a graveyard theme.
```

- No WARN flags were raised by the structural gate on the final list — curve, assembly, goldfish and coverage all PASS — so there is nothing to respond to. The slot-band deviations are recorded under slot_allocation, which the gate does not evaluate.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands are the win condition twice over. Dark Depths reads '{3}: Remove an ice counter', so every land past the sixth is another fraction of an activation; and Stroke of Genius reads 'Target player draws X cards', so surplus mana with no Dark Depths still converts into a kill. Cloud of Faeries x2 ('Cycling {2}'), Mind Stone ('{1}, {T}, Sacrifice this artifact: Draw a card') and Jalum Tome ('{2}, {T}: Draw a card, then discard a card') all convert surplus mana into cards. |
| screw | mitigation | Twelve of the 23 nonland cards cost two mana or less and are castable off two lands — the curve is 1:2, 2:10 — including High Tide x2 {U}, Impulse x2 {1}{U}, Snap {1}{U}, Cloud of Faeries x2 {1}{U}, Mind Stone {2} and Counterspell {U}{U}. With 16 of 17 lands being basic Islands there is no colour screw available at all: every land casts every spell. Goldfish sim: 3 lands by turn 3 in 91% of hands, keepable 87%. |
| decapitation | mitigation | This is the mode the build is designed around. Dark Depths is a single mythic copy that nothing recurs from exile — only 1 of 271 cube cards destroys a land, and every discard effect in the cube either lets the opponent choose or cannot take a land — but the deck carries a genuine second win condition off the identical engine: Stroke of Genius, 'Target player draws X cards', kills an opponent with roughly 25 cards left in library for 28 mana, two LESS than the thirty the ice counters cost. Counterspell x2 and Force of Will answer a targeted attempt on the stack. |
| gas-out | mitigation | Nine of the 23 nonland cards exist to refill: Impulse x2 ('Put one of them into your hand'), Fact or Fiction x2 ('Put one pile into your hand'), Deep Analysis x2 ('Target player draws two cards' plus a flashback), Frantic Search x2 ('Draw two cards'), and Jalum Tome, the only one that is repeatable. Stroke of Genius can also target its own controller. And once Dark Depths is on the battlefield the '{3}' activation is a mana sink that works from a completely empty hand. |
| raced | accepted | The mainboard's only bodies are Cloud of Faeries x2 (1/1 fliers) and Peregrine Drake (2/3 flier); there is no maindeck sweeper and no maindeck wall. Mitigating would cost find-slots, and the find-slots are the reason this deck has a win condition at all — the arithmetic is exact: dropping one Fact or Fiction takes payoff_access from effective 3.9 to 3.5 and p below the 0.75 gate. The cost is paid in the sideboard instead: Floodgate x2, Man-o'-War, Ovinize and Maze of Ith are 5 of the 10 sideboard cards, all creature-facing. |
| disruption-fizzle | mitigation | Removed ice counters persist as board state, so there is no single critical turn to interact with — the thirty mana is paid in installments and a counterspell on any one of them costs one activation, not the plan. Gauntlet of Power is the structural answer here: unlike High Tide it is a permanent, so once it resolves the doubled mana cannot be blown out by a single well-timed counterspell. Force of Will's 'You may pay 1 life and exile a blue card from your hand rather than pay this spell's mana cost' is the one protection that costs zero of the mana the activations are made of, and 20 of the 23 nonland cards are blue, so the exile cost is essentially always live. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Crop Rotation | 'Search your library for a land card, put that card onto the battlefield' would find Dark Depths, but it costs {G} and this build is mono-blue. This is the single biggest thing mono-U gives up. |
| Krosan Restorer | 'Threshold - {T}: Untap up to three target lands' is the only repeatable free untapper in the pool, but it costs {2}{G}. |
| Opposition | 'Tap an untapped creature you control: Tap target artifact, creature, or land' needs a wide board; this list runs few creatures and makes no tokens. |
| Time Stretch | {8}{U}{U} for two extra turns is 10 mana - three and a third ice counters instead. |
| Denizen of the Deep | 'return each other creature you control to its owner's hand' would bounce the Peregrine Drakes we want on the battlefield as blockers. |
| Thieving Magpie | 'Whenever this creature deals damage to an opponent, draw a card' needs to connect; this deck does not attack until Marit Lage exists. |
| Horseshoe Crab | '{U}: Untap this creature' untaps a CREATURE, not a land - it produces no mana. |
| Wormfang Drake | 'sacrifice it unless you exile a creature you control other than this creature' makes it a blank in every hand without a second creature. |
| Aquamoeba | 'Discard a card: Switch this creature's power and toughness' - a discard outlet, but this deck has no madness payoff beyond one card. |
| Veiled Serpent | 'can't attack unless defending player controls an Island' - it is a 4/4 that usually cannot attack. |
| Glintwing Invoker | '{7}{U}: gets +3/+3 and gains flying' - eight mana is two and two-thirds ice counters. |
| Triskelion | {6} for three pings; the mana is better spent on counters. |
| Juggernaut | 'attacks each combat if able' forces a 5/3 into blockers while the deck wants to sit back. |
| Umbilicus | 'return a permanent they control to its owner's hand' is symmetric and would bounce our own lands. |
| Damping Sphere | 'If a land is tapped for two or more mana, it produces {C} instead' - it would shut off our own High Tide and Gauntlet of Power. |
| Cryptic Gateway | 'Tap two untapped creatures you control... that shares a creature type' - this list has no shared creature type. |
| Urza's Incubator | 'Creature spells of the chosen type cost {2} less' - creature types in this list do not repeat. |
| Mystic Remora | 'Cumulative upkeep {1}' competes for exactly the mana this deck is hoarding. |
| Ovinomancer | 'sacrifice it unless you return three basic lands you control' - returning three Islands is the opposite of this deck's plan. |
| Hermetic Study | An Aura that turns a creature into a pinger; this deck's creatures are untappers it would rather re-use. |
| Aven Fisher | 'When this creature dies, you may draw a card' - a 2/3 flier that replaces itself, but it neither untaps nor digs proactively. |
| Jester's Cap | 'Search target player's library for three cards and exile them' answers a specific card, not a clock. |
| Gemstone Mine | 'Add one mana of any color' three times - a rare slot for fixing a mono-colour deck does not need. |
| Thran Golem | 'As long as this creature is enchanted' - this deck runs no Auras. |
| Contaminated Aquifer / Idyllic Beachfront / Molten Tributary | All three ARE Island-typed and would fuel High Tide, but each 'enters tapped' and their second colour is unusable here; basic Islands do the same job untapped and are unlimited. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 7   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.50 adj [MV 3.0 vs 2.5, 7 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a deck size: 40 == 40
[PASS] 1b sideboard size: 10 == 10
[PASS] 2 exact-name membership: missing=[]
[PASS] 3 copy limits: violations=[]
[PASS] 4 colour usability (best_mode): unusable=[] | usable_as={'Impulse': 'cast', 'Fact or Fiction': 'cast', 'Deep Analysis': 'cast', 'Frantic Search': 'cast', 'High Tide': 'cast', 'Turnabout': 'cast', 'Cloud of Faeries': 'cast', 'Snap': 'cast', 'Mind Stone': 'cast', 'Gauntlet of Power': 'cast', 'Counterspell': 'cast', 'Force of Will': 'cast', 'Stroke of Genius': 'cast', 'Peregrine Drake': 'cast', 'Jalum Tome': 'cast', "Tormod's Crypt": 'cast', 'Circular Logic': 'cast', 'Floodgate': 'cast', 'Ovinize': 'cast', 'Confiscate': 'cast', "Man-o'-War": 'cast'}
[PASS] 5 splash cap: over=[]
[PASS] 6 rare/mythic cap (user rule, <=5): 5 rare/mythic cards: Dark Depths, Force of Will, Gauntlet of Power, Maze of Ith, Stroke of Genius
```
