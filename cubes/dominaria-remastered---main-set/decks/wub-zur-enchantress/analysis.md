---
deck_name: "wub-zur-enchantress"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-07-30T02:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x4  Island                 
  x4  Plains                 
  x3  Swamp                  
  x1  Contaminated Aquifer   UB dual, enters tapped
  x1  Drifting Meadow        W, tapped, cycling
  x1  Idyllic Beachfront     UW dual, enters tapped
  x1  Polluted Mire          B, tapped, cycling
  x1  Remote Isle            U, tapped, cycling
  x1  Sunlit Marsh           WB dual, enters tapped
```

### CREATURES (8)
```
CMC  Card                       Qty  Color  Role                          Rar
  3  Auramancer                 x1  W      Enchantment recursion         C
  3  Man-o'-War                 x1  U      Bounce tempo                  C
  3  Phyrexian Rager            x1  B      Cantrip body                  C
  3  Royal Assassin             x1  B      Repeatable removal            R
  4  Aven Fisher                x1  U      Flyer, draws on death         C
  4  Thieving Magpie            x1  U      Evasive card-advantage        U
  4  Zur the Enchanter          x1  BUW    Engine / tutor / flyer        R
  5  Serra Angel                x1  W      Air finisher                  U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Swords to Plowshares       x1  W      Premium removal               U
  2  Counterspell               x1  U      Hard counter                  C
  2  Terror                     x1  B      Cheap removal                 C
  3  Circular Logic             x1  U      Scaling counter               U
  3  Frantic Search             x1  U      Free dig / GY fill            C
  3  Ichor Slick                x1  B      Removal / cycling             C
  3  Recoil                     x1  BU     Bounce any permanent          U
  3  Sevinne's Reclamation      x1  W      Permanent recursion           R
  4  Deep Analysis              x1  U      Refuel (flashback)            C
```

### OTHER SPELLS (6)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Mystic Remora              x1  U      Card-advantage tax (Zur target)  R
  1  Spirit Link                x1  W      Lifegain aura (Zur target)    C
  2  Mind Stone                 x1  C      Ramp / cantrip                C
  2  Oversold Cemetery          x1  B      Recursion engine (Zur target)  R
  2  Pacifism                   x1  W      Removal aura (Zur target)     C
  3  Griffin Guide              x1  W      Evasion aura (Zur target)     U
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                 Rar
Tormod's Crypt             x1  C      Graveyard hate — vs graveyard decks     U
Counterspell               x1  U      Hard counter — vs combo/control         C
Remedy                     x1  W      Damage prevention — vs burn/alpha strike  C
Snap                       x1  U      Tempo bounce — vs aggro (tempo)         C
Nomad Decoy                x1  W      Tapper vs big creatures — vs big-creature decks  C
Renewed Faith              x1  W      Lifegain / cycling — vs aggro/burn      C
Cackling Fiend             x1  B      Hand disruption — vs control/combo      C
Congregate                 x1  W      Anti-aggro lifegain — vs aggro/burn     U
Floodgate                  x1  U      Go-wide sweeper — vs go-wide aggro      U
Icy Manipulator            x1  C      Soft lock — vs problem permanents/mana denial  U
```

## ANALYSIS

### DECK IDENTITY
A WUB Zur toolbox-control deck. Zur the Enchanter attacks each turn to tutor a value or lock enchantment (Mystic Remora, Oversold Cemetery, Pacifism, Griffin Guide, Spirit Link) directly onto the battlefield, assembling inevitability for free. Hard interaction (Counterspell, Circular Logic, Swords, Terror, Recoil, Royal Assassin) keeps the board clear while three permanent card-advantage engines (Mystic Remora, Thieving Magpie, Oversold Cemetery) plus recursion (Sevinne's Reclamation, Auramancer) out-grind the opponent; evasive fliers (Zur, Thieving Magpie, Serra Angel, Aven Fisher) close around turn 9.

Zur the Enchanter is both the engine and the deck's structural gamble. Because every one of the 5 maindeck enchantments is mana value 3 or less (Mystic Remora, Oversold Cemetery, Pacifism, Griffin Guide, Spirit Link), Zur has a live tutor target on every attack for roughly five turns before it repeats — Remora when the opponent is spell-slinging, Pacifism against a threat, Griffin Guide to make a flier lethal, Oversold once the game grinds long. Zur puts the card straight onto the battlefield, so it costs no mana and dodges counters.

**The singleton-Zur risk is real and disclosed.** Sevinne's Reclamation caps at mana value 3, so it cannot rebuy Zur (mana value 4), and no second Zur exists in the pool. If Zur is answered on sight repeatedly the deck loses its tutor — but it does not fold, because Mystic Remora, Thieving Magpie and Oversold Cemetery are independent card-advantage engines and the deck simply plays on as a generic WUB control shell.

**Fixing is the honest weakness.** All colored fixing enters tapped (three guild duals + three cycling lands), and Zur wants all three colors online by turn 4. That tension is why the mana audit passes but the "screw" failure mode is accepted rather than mitigated — adding more taplands or rocks to fight color screw would only delay the turn-4 engine. Isolated Chapel and Gemstone Mine (both rare) would have helped, but the 5 rare/mythic slots went to the engine (Zur, Mystic Remora, Oversold Cemetery, Sevinne's Reclamation, Royal Assassin).

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:3  2:5  3:10  4:4  5:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.55: Zur the Enchanter@0.85, Aven Fisher@0.7) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.5: Mystic Remora@0.8, Oversold Cemetery@0.7) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 42%  T2 82%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: A sweeper (Wrath of God {2}{W}{W}) exists in-colour but is anti-synergistic with our own Zur engine + creature card-advantage suite (Thieving Magpie, Aven Fisher, Phyrexian Rager); Sevinne's cannot rebuy Zur (mv4). We answer go-wide with spot removal + bounce + Pacifism + Spirit Link lifegain and race back in the air; Floodgate/Congregate come in from the board.
  OK        single_large_threat: Swords to Plowshares, Terror, Pacifism, Royal Assassin, Man-o'-War
  OK        noncreature_permanents: Recoil, Counterspell, Circular Logic
  OK        stack: Counterspell, Circular Logic
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt sits in the sideboard for the cube's dominant graveyard decks.
```
- Curve PASS (control, no flags).
- Goldfish PASS: 84% keepable, T3 land 88%.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Three cycling lands (Remote Isle, Polluted Mire, Drifting Meadow) and Deep Analysis flashback turn surplus mana into cards; Mind Stone sacrifices for a card; Oversold Cemetery and Zur sink extra mana into recursion and attacks. |
| screw | accepted | Goldfish keepable 84%, but this is a 3-color deck whose entire colored-fixing suite enters tapped, so a colour-screw on the wrong two lands is a real loss and Zur (WUB, turn 4) is the bottleneck. Mitigating further (more taplands / rocks) would slow an already tap-heavy base and delay the turn-4 engine — accepted as the cost of a three-color toolbox identity. |
| decapitation | accepted | Zur is a singleton engine and Sevinne's Reclamation cannot rebuy it (Zur is mv4, Sevinne's caps at mv3). If Zur is answered on sight repeatedly the deck loses its tutor, but it does NOT fold: Mystic Remora, Thieving Magpie and Oversold Cemetery are independent card-advantage engines and the deck plays on as a generic WUB control shell. Accepting a singleton Zur is the cost of the pipeline (no second Zur exists in the pool). |
| gas-out | mitigation | Heavy card economy: Mystic Remora (Net-Positive), Thieving Magpie (Self-Replacing per hit), Phyrexian Rager (Self-Replacing), Deep Analysis (Net-Positive + flashback), Frantic Search (Self-Replacing), Oversold Cemetery loop (recurs Rager/Aven Fisher/Man-o'-War). The deck refuels indefinitely. |
| raced | accepted | No maindeck sweeper: Wrath of God exists in-colour but is anti-synergistic (destroys our own Zur/Magpie/Aven Fisher/Rager engine, and Sevinne's cannot rebuy Zur). We answer aggro with spot removal (Swords, Terror, Ichor Slick), bounce (Man-o'-War, Recoil), Pacifism, and Spirit Link lifegain, and race back in the air. Accepted: the fastest go-wide draws can beat game 1 on the tapped-land clock; the sideboard (Floodgate wipes non-fliers while our fliers live, Congregate, Renewed Faith, Remedy) swings the matchup post-board — mitigating maindeck would warp the deck around a sweeper its own engine fights. |
| disruption-fizzle | mitigation | No single critical turn — the plan is incremental. Counterspell and Circular Logic protect a key resolution; multiple independent engines mean one piece of interaction removes one engine, not the plan; Auramancer / Sevinne's rebuy an answered enchantment engine. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Sylvan Library | mythic, but GREEN — a WUB deck cannot cast it; only Zur could put it out, and it is a dead card in hand. Not worth a slot that must be live when drawn. |
| Hunting Grounds | GW mythic Zur target — same dead-in-hand problem off-color; and threshold-dependent. |
| Arcanis / Force of Will / Absorb tension | all rare/mythic and all want a slot; the 5-cap forces choosing among them — flagged for the sketch/judge. |
| Test of Endurance | mythic W alt-win at 50 life — needs a lifegain shell this control build doesn't run; and mv4 so Zur can't fetch it. |
| Urza, Lord High Artificer | mythic U bomb but artifact-matters payoff with no artifact shell here; costs a precious rare slot for little synergy. |
| Yawgmoth, Thran Physician | mythic B sac-engine — wants a creature-sacrifice shell this control deck isn't; off-plan. |
| Stroke of Genius | rare U draw-X — fine but Arcanis/Deep Analysis/Thieving Magpie already cover card advantage; loses the rare-slot race. |
| Enlightened Tutor | RARE — turns any draw into the perfect Zur target/silver-bullet enchantment; excluded only because it would displace one of the 5 capped maindeck rares. |
| Fact or Fiction | strong control card advantage that also fuels Oversold Cemetery, but Deep Analysis flashback + GY-fill synergizes better with Oversold/Sevinne's; a close call for a CA slot. |
| Impulse | cheap top-4 selection that smooths the tapped 3-color base; a fine flex if screw becomes a problem. |
| Chainer's Edict | sacrifice-based removal (dodges protection/hexproof Terror whiffs on) with flashback; sorcery-speed and opponent-chooses keep it a tier below the spot removal chosen. |
| Momentary Blink | protects Zur from removal and re-triggers Man-o'-War/Rager/Auramancer ETBs; a strong flex vs removal-heavy matchups. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 1   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.04 adj [MV 2.78 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  27.6%  prod  35.3%  gap  -7.7pp  [OK]
  U  demand  41.4%  prod  41.2%  gap  +0.2pp  [OK]
  W  demand  31.0%  prod  41.2%  gap -10.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Deck size 40                          PASS (23 nonland + 17 land)
All cards from cube pool              PASS
Commons/uncommons <= 2 copies         PASS (Counterspell x2: 1 main + 1 SB)
Rares/mythics <= 1 copy each          PASS
Max 5 rares/mythics total (main+SB)   PASS (exactly 5: Zur, Mystic Remora, Oversold Cemetery, Sevinne's Reclamation, Royal Assassin; sideboard 0)
Colours within WUB                    PASS (no splash)
```
