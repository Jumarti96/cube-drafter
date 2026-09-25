---
deck_name: "bw-drain-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-27T00:37:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x10  Swamp                  
  x3   Plains                 
  x2   Sunlit Marsh           WB dual, enters tapped
  x1   Evolving Wilds         Fetches a basic tapped
```

### CREATURES (12)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Gravecrawler                                x1   B      Recursive fodder                         R
  2  Blood Artist                                x2   B      Drain payoff - 1 life per death          U
  2  Butcher Ghoul                               x2   B      Recursive fodder (undying)               C
  2  Fleshtaker                                  x1   BW     Sac payoff + {1} outlet                  U
  2  Restless Bloodseeker // Bloodsoaked Reveler x1   B      Secondary drain (back face)              U
  2  Skirsdag High Priest                        x1   B      Payoff - deaths into 5/5 fliers          R
  3  Falkenrath Torturer                         x2   B      FREE repeatable sac outlet               C
  3  Morbid Opportunist                          x2   B      Card flow off deaths                     U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Tragic Slip                                 x2   B      Removal - morbid -13/-13                 C
  1  Village Rites                               x2   B      Sac outlet + draw two                    C
  2  Collective Brutality                        x1   B      Modal drain / discard / -2/-2            R
  2  Infernal Grasp                              x1   B      Removal - unconditional                  U
  3  Angelic Purge                               x1   W      Sac outlet + exile removal               C
  3  Lingering Souls                             x2   W      Fodder - four bodies per card            U
```

### OTHER SPELLS (3)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  2  Ghoulish Procession                         x1   B      Fodder engine / Zombie enabler           U
  2  The Meathook Massacre                       x1   B      Drain payoff + X sweeper                 M
  3  Wedding Announcement // Wedding Festivity   x1   W      Fodder engine - a Human each turn        R
```

## SIDEBOARD (10)

```
Card                                        Qty  Color  Role / When to board in                  Rar
Soul-Guide Gryff                            x2   W      Graveyard hate (cube is 27% GY)          C
Sever the Bloodline                         x2   B      Tokens / recursion answer                U
Cathar Commando                             x2   W      Artifact + enchantment removal           C
Slayer of the Wicked                        x2   W      Vampire/Werewolf/Zombie removal          U
Valorous Stance                             x2   W      Protect a keystone or kill a fatty       U
```

## ANALYSIS

### DECK IDENTITY

White-Black Aristocrats. The deck deploys cheap, replaceable bodies and then converts their deaths into damage. Blood Artist and The Meathook Massacre drain on every death; Falkenrath Torturer is a zero-mana repeatable outlet, so the conversion costs nothing but a card that was already expendable. Lingering Souls, Ghoulish Procession, Wedding Announcement, Butcher Ghoul and Gravecrawler make the same cards die repeatedly, and Village Rites plus Morbid Opportunist turn those same deaths into cards so the grind never runs out. When the drain is answered, Skirsdag High Priest converts one death per turn into a 5/5 flying Demon and closes through combat instead.

### THE SCARCEST RESOURCE IN THIS CUBE IS A FREE SACRIFICE OUTLET

The cube contains 10 sacrifice outlets, 6 of them free by the dossier's census, but inside the Aristocrats/Sacrifice cluster only three are both free and repeatable, and only one is available at 2 copies:

| Outlet | Cost per activation | Copies legal | In deck |
|---|---|---|---|
| Falkenrath Torturer | **0 mana** | 2 (common) | 2 |
| Fleshtaker | {1} | 2 (uncommon) | 1 |
| Indulgent Aristocrat | {2} | 2 (uncommon) | 0 |
| Ecstatic Awakener | {2}{B}, once per turn | 2 (common) | 0 |
| Demonmail Hauberk | equip = sacrifice, but {4} to cast | 2 (uncommon) | 0 |
| Grimgrin, Corpse-Born | 0 mana | 1 (mythic) | off-colour (UB) |

Falkenrath Torturer at 2 copies is the single most load-bearing card in the list and the reason this build is black rather than any other Aristocrats colour pair. Every other outlet charges mana per death, which caps how many drain triggers a turn can produce; Falkenrath Torturer's only cap is how many creatures you control.

### THE FODDER DOES NOT RUN OUT — A COUNT

Twenty-four nonland cards produce far more than twenty-four death events, because most of the fodder is reusable:

| Source | Death events per card | Total |
|---|---|---|
| Lingering Souls x2 | 4 bodies each (2 on cast, 2 on Flashback {1}{B}) | 8 |
| Butcher Ghoul x2 | 2 each (undying returns it once) | 4 |
| Gravecrawler x1 | recast from the graveyard for {B} each time a Zombie is out | unbounded, mana-limited |
| Ghoulish Procession x1 | one 2/2 Zombie per turn on any nontoken death | 1 per turn |
| Wedding Announcement x1 | one 1/1 Human per end step | 1 per turn |
| Skirsdag High Priest x1 | one 5/5 Demon per turn | 1 per turn |

Gravecrawler is the sharpest of these and it needs a Zombie on the battlefield to be recast. This deck supplies three sources: Butcher Ghoul is itself a Zombie, Ghoulish Procession makes a 2/2 Zombie on every nontoken death, and Gravecrawler counts itself while it is on the battlefield. With Ghoulish Procession out and Falkenrath Torturer as the outlet, {B} converts into one Blood Artist drain, one Meathook drain, and a fresh 2/2 body — repeatable every turn for as long as the mana lasts.

### WHY WEDDING ANNOUNCEMENT IS AN ARISTOCRATS CARD

Its front face reads "At the beginning of your end step, put an invitation counter on this enchantment. If you attacked with two or more creatures this turn, draw a card. Otherwise, create a 1/1 white Human creature token." Every turn it produces either a card or a body, free, with no activation cost. In a deck whose bottleneck is expendable bodies, the token mode is the relevant one, and the Human type is not incidental: Falkenrath Torturer reads "If the sacrificed creature was a Human, put a +1/+1 counter on this creature," so each Wedding Announcement token permanently grows the outlet that eats it. After three counters it flips into a +1/+1 team anthem for the Spirit and Zombie tokens already on the board.

### THE ESCALATE COST IS NEARLY FREE HERE

Collective Brutality's Escalate cost is "Discard a card." In most decks that is a real cost. In this one, two of the most-drawn cards are actively better in the graveyard than in hand: Lingering Souls has Flashback {1}{B}, and Sever the Bloodline (sideboard) has Flashback {5}{B}{B}. Discarding a Lingering Souls to buy a second Collective Brutality mode still leaves the two Spirit tokens available for {1}{B} later.

### WHAT THE DECK CANNOT ANSWER

Two coverage classes are conceded, and both concessions are pool facts rather than build choices:

- **The stack.** Neither white nor black contains a single counterspell anywhere in this 300-card pool. The deck answers permanents after they resolve.
- **Graveyards.** The dossier's structural census reports **0** graveyard-hate cards cube-wide, while `threat_profile.graveyard_interaction` is **75 cards at 27.1% density** — the largest threat class in the environment. Soul-Guide Gryff and Soul Separator are the only cards in white, black or colourless that exile from an opposing graveyard, and Soul-Guide Gryff x2 is therefore the sideboard's largest single commitment.

### RARITY BUDGET

The five rare/mythic slots are fully spent, all in the mainboard, none in the sideboard:

| Card | Rarity | What the slot buys |
|---|---|---|
| The Meathook Massacre | M | The only death-drain effect in the pool besides Blood Artist, plus a scaling sweeper |
| Gravecrawler | R | The only fodder in the pool that recurs for {B} with no other cost |
| Skirsdag High Priest | R | The combat backup that wins when the drain is answered |
| Collective Brutality | R | Drain, discard and -2/-2 on one 2-drop whose cost this deck pays for free |
| Wedding Announcement | R | A permanent, free, every-turn fodder engine |

The rare white/black dual land (Shattered Sanctum) was deliberately declined: it would have consumed a sixth slot the cap does not allow, and the mana audit returns PASS on 10 Swamp, 3 Plains, 2 Sunlit Marsh and 1 Evolving Wilds without it.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:5  2:11  3:8
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Skirsdag High Priest@0.7, Restless Bloodseeker // Bloodsoaked Reveler@0.5) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.8: Angelic Purge@0.8) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 64%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Tragic Slip
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Angelic Purge
  OK        noncreature_permanents: Angelic Purge
  CONCEDED  stack: Neither W nor B offers a counterspell anywhere in this pool, so the deck cannot answer a spell on the stack; it answers the permanent after it resolves with Infernal Grasp, Tragic Slip or Angelic Purge.
  CONCEDED  graveyard: The dossier's structural census reports 0 graveyard-hate cards cube-wide; the pool's only clean answer is Soul-Guide Gryff, a 5-mana one-shot exile, which is sideboarded rather than maindecked.
```

- No WARN flags were raised: curve PASS (1:5 / 2:11 / 3:8) and goldfish PASS (84% keepable, 84% on three lands by turn 3), so no structural response was required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana has five sinks already in the list. The Meathook Massacre is {X}{B}{B} and scales its sweeper with every extra land. Lingering Souls has 'Flashback {1}{B}', so a spent card in the graveyard becomes two more bodies. Restless Bloodseeker's back face is '{4}{B}: Each opponent loses 2 life and you gain 2 life', a repeatable mana-into-damage converter. Fleshtaker's '{1}, Sacrifice another creature' turns loose mana into a death trigger. Collective Brutality's Escalate lets extra mana buy extra modes. |
| screw | mitigation | 5 one-drops and 11 two-drops mean a two-land hand casts Village Rites, Tragic Slip, Gravecrawler, Blood Artist, Butcher Ghoul, Ghoulish Procession, Infernal Grasp, Fleshtaker, Skirsdag High Priest, Restless Bloodseeker, Collective Brutality or The Meathook Massacre at X=0: 16 of 24 nonland cards are castable on two lands. Evolving Wilds plus 13 basics keeps colour screw rare, and the goldfish check reports 84% keepable hands with 84% on three lands by turn 3. |
| decapitation | mitigation | No single card is the deck. Blood Artist is 2 copies; The Meathook Massacre and Wedding Announcement are enchantments, and dossier.threat_profile.enchantment_answers lists only 2 enchantment-removal cards in the entire cube. If every drain source is answered, Skirsdag High Priest's 'Create a 5/5 black Demon creature token with flying' closes through combat instead, and Morbid Opportunist keeps drawing regardless of which payoff is on the battlefield. |
| gas-out | mitigation | The deck is card-positive by construction: Village Rites x2 ('Draw two cards'), Morbid Opportunist x2 ('Whenever one or more other creatures die, draw a card'), and Wedding Announcement ('If you attacked with two or more creatures this turn, draw a card. Otherwise, create a 1/1 white Human creature token') produce a card or a body every turn. Two more refuel from the graveyard rather than the hand: Lingering Souls' Flashback {1}{B} and Sever the Bloodline's Flashback in the sideboard. That is 7 of 24 nonland cards that produce a resource after the hand is empty. |
| raced | mitigation | Against the cube's fastest clocks (evasion density 20.9%, 58 cards) the deck gains life on the same triggers that deal damage: Blood Artist gains 1 per death, Fleshtaker gains 1 per sacrifice, The Meathook Massacre gains 1 per opposing creature death, and Collective Brutality's drain mode gains 2. The Meathook Massacre's entry trigger is also a scaling sweeper against a wide fast board, and Tragic Slip's morbid -13/-13 kills any single attacker for {B}. |
| disruption-fizzle | mitigation | There is no critical turn to interact with: the kill is 1-2 life at a time across many turns rather than one assembled combo turn, so a single counterspell or removal spell delays it rather than fizzling it. Village Rites is an instant, so a sacrifice chain can be run in response to targeted removal - the creature about to be destroyed is sacrificed first, converting the opponent's answer into a death trigger and two cards. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Elder Deep-Fiend, Abundant Maw, Distended Mindbender, It of the Horrid Swarm, Decimator of the Provinces | Emerge: 'you may cast this spell by sacrificing a creature and paying the emerge cost reduced by that creature's mana value' spends fodder as a COST-REDUCTION for one 7-10 MV body. This pipeline's kill mechanism is per-death drain triggers, where the same fodder is worth more sacrificed to a free outlet with Blood Artist out; three of the six are also rares against a 5-rare cap. |
| Griselbrand, Gisela, the Broken Blade, Brisela, Voice of Nightmares, Bruna, the Fading Light | MV 4-9 rare/mythic top-end whose text reads combat or raw card draw, not deaths; the drain plan wins through MV<=3 incremental triggers, and each of these would consume one of only 5 rare/mythic slots. |
| Helvault | '{1}, {T}: Exile target creature you control' EXILES rather than kills, so it produces no death trigger for Blood Artist or Meathook; and '{7}, {T}' to answer an opponent's creature is unreachable at 17 lands. |
| Soul-Guide Gryff | 'When this creature enters, exile up to one target card from a graveyard' — the pool's only clean graveyard answer (dossier reports 0 GY hate), but a single-shot exile on a 5-drop is a sideboard card, not a maindeck slot in a drain deck. |
| Heartless Summoning | 'Creatures you control get -1/-1' kills this deck's own 1/1 Spirit, Human and Zombie tokens outright, deleting the fodder the drain plan is made of. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.84 adj [MV 2.12 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  80.8%  prod  75.0%  gap  +5.8pp  [OK]
  W  demand  19.2%  prod  31.2%  gap -12.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base                         cube mainboard                                  PASS
Commons / uncommons  max 2 each   highest count in deck is 2                      PASS
Rares / mythics      max 1 each   all five are single copies                      PASS
Rares / mythics      max 5 TOTAL  5 of 5 used (mainboard); sideboard uses 0       PASS
  Gravecrawler (R), Collective Brutality (R), Wedding Announcement (R),
  The Meathook Massacre (M), Skirsdag High Priest (R)
All cards from the cube                                                           PASS
Basic lands (format-supplied)     Swamp x10, Plains x3                            PASS
Mainboard 40 / Sideboard 10                                                       PASS
Colour usability in [W, B]        every nonland card                              PASS
```
