---
deck_name: "bg-garruk-counters-grind"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-27T14:36:10Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7   Forest                 
  x7   Swamp                  
  x2   Haunted Mire           BG dual, enters tapped
  x1   Evolving Wilds         Fetches a basic tapped
```

### CREATURES (12)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Young Wolf                                  x2   G      Undying fodder - two deaths per card     C
  2  Butcher Ghoul                               x2   B      Undying fodder - two deaths per card     C
  3  Falkenrath Torturer                         x2   B      FREE repeatable sac outlet               C
  3  Morbid Opportunist                          x1   B      Card flow off deaths                     U
  3  Tireless Tracker                            x1   G      Engine - a Clue per land, a counter per Clue R
  4  Grizzly Ghoul                               x2   BG     Payoff - enters with a counter per death this turn U
  4  Lumberknot                                  x2   G      Payoff - hexproof, a counter on every death U
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Eaten Alive                                 x1   B      Sac outlet + exile removal               C
  1  Tragic Slip                                 x2   B      Removal - morbid -13/-13                 C
  1  Village Rites                               x2   B      Sac outlet + draw two                    C
  2  Infernal Grasp                              x1   B      Removal - unconditional                  U
  3  Eldritch Evolution                          x1   G      Sac outlet that tutors onto the battlefield R
  3  Maelstrom Pulse                             x1   BG     Removal - ANY nonland permanent, all copies R
```

### OTHER SPELLS (3)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  3  Ulvenwald Mysteries                         x2   G      Engine - deaths into Clues into bodies   U
  4  Garruk Relentless // Garruk, the Veil-Curse x1   BG     Payoff - removal, tokens, sac-tutor, overrun M
```

## SIDEBOARD (10)

```
Card                                        Qty  Color  Role / When to board in                  Rar
Sever the Bloodline                         x2   B      Exiles a creature and every copy of it   U
Murderous Compulsion                        x2   B      Cheap removal vs attackers               C
Ambush Viper                                x2   G      Flash deathtouch blocker                 C
Clear Shot                                  x2   G      Removal that scales with our counters    U
Morkrut Banshee                             x2   B      Removal on a 4/4 body                    U
```

## ANALYSIS

### DECK IDENTITY

Black-Green Aristocrats that banks deaths as permanent stats instead of spending them as damage. Every creature that dies puts a +1/+1 counter on Lumberknot, fills Grizzly Ghoul's entry trigger, feeds a Clue into Ulvenwald Mysteries, and grows the creature-card count in the graveyard that Garruk's "-3: Creatures you control gain trample and get +X/+X until end of turn, where X is the number of creature cards in your graveyard" cashes in as the finisher. Young Wolf and Butcher Ghoul are undying, so a single sacrifice is two deaths and the body comes back bigger. It is the slowest of the four Aristocrats builds and the only one that answers a noncreature permanent, because Maelstrom Pulse exists in exactly these two colours.

### A CORRECTION TO THE STRATEGY-SELECTION TABLE

When these four builds were shortlisted, green was described as contributing about five removal-ish cards and this path was flagged as the softest on interaction at competitive power. That figure came from a **mono-colour** scan and it understated green badly. It missed every BG gold card and several effects phrased in ways a "destroy/exile target" regex does not catch:

| Card | Why the first scan missed it |
|---|---|
| Maelstrom Pulse | BG gold, so it is not a mono-G card |
| Clear Shot | "deals damage equal to its power to target creature you don't control" — a fight variant, not "destroy target" |
| Ambush Viper | removal by Flash + Deathtouch, with no removal wording at all |
| Duel for Dominance | Coven-gated fight |

The finished deck's interaction is 5 maindeck slots plus 6 more in the sideboard, and it is the only one of the four whose `noncreature_permanents` coverage class is **covered rather than conceded**. The original warning was wrong and is corrected here rather than quietly dropped.

### MAELSTROM PULSE IS THE REASON TO BE IN THESE COLOURS

"Destroy target nonland permanent and all other permanents with the same name as that permanent." Read against the cube it is playing in:

| Threat class | Density in the cube | Answered by Maelstrom Pulse? |
|---|---|---|
| Artifacts | 24 cards / 8.7% | Yes |
| Enchantments | 25 cards / 9.0% | Yes |
| Token swarms | — | Yes, all copies at once |
| Planeswalkers | — | Yes |

The three sibling builds all **concede** the `noncreature_permanents` coverage class or answer it only from the sideboard. This one covers it maindeck on a single card, and the same-name clause makes it a one-card answer to a token board as well.

### WHY RECURSION IS ANTI-SYNERGY HERE

This is the counter-intuitive part of the build and it drove several cuts. Garruk's finisher reads "+X/+X … where X is the number of creature cards in **your graveyard**." Cards that return creatures *from* the graveyard — Grapple with the Past, Crawl from the Cellar, Edgar's Awakening, Midnight Scavengers — shrink X. They are on-theme for an Aristocrats deck in general and actively counterproductive for *this* one.

The fodder that survives the test is fodder that dies and comes back **without leaving the graveyard count intact being an issue**: Young Wolf and Butcher Ghoul return via undying, which moves the card from graveyard to battlefield, so they are the one case where the deck accepts the trade — in exchange, each is two death triggers from one card and comes back with a counter already on it.

### THE CLUE ENGINE STACKS

Tireless Tracker and Ulvenwald Mysteries both read "Whenever you sacrifice a Clue." With both on the battlefield, a single Clue sacrifice does three things at once:

1. Draw a card (the Clue's own text)
2. Put a +1/+1 counter on Tireless Tracker
3. Create a 1/1 white Human Soldier token (Ulvenwald Mysteries)

And the two engines are fed from *different* resources — Tireless Tracker investigates off land drops ("Landfall — Whenever a land you control enters"), Ulvenwald Mysteries off deaths ("Whenever a nontoken creature you control dies"). A flooded draw and a board wipe both turn into Clues.

The Human Soldier token is also not incidental: Falkenrath Torturer reads "If the sacrificed creature was a **Human**, put a +1/+1 counter on this creature," so the token the Clue made is the body that permanently grows the free outlet that eats it.

### RARITY BUDGET — ONE SLOT LEFT UNSPENT

| Card | Rarity | What the slot buys |
|---|---|---|
| Garruk Relentless // Garruk, the Veil-Cursed | M | Repeatable removal, repeatable tokens, a sac-outlet-that-tutors, and the overrun finisher |
| Maelstrom Pulse | R | The only maindeck answer to a noncreature permanent in any of the four builds |
| Tireless Tracker | R | A Clue per land, a counter per Clue |
| Eldritch Evolution | R | A sacrifice that tutors a threat straight onto the battlefield |

The fifth slot is deliberately unspent. The grill proposed Westvale Abbey for it, since it costs only a land slot; that was declined on two counts. Its activation reads "Sacrifice **five** creatures" — it empties the board that Garruk's -3 exists to pump, so the two cards compete for the same five bodies at the same point in the game. And it taps only for `{C}`, which attacks the deck's tightest colour requirement: Lumberknot's `{2}{G}{G}` and Eldritch Evolution's `{1}{G}{G}` against 9 green sources.

### WHAT THE DECK CANNOT ANSWER

Two classes are conceded, both pool facts rather than build choices. Neither black nor green has a counterspell anywhere in this 300-card cube. And the dossier's structural census reports **zero** graveyard-hate cards cube-wide, with no card legal in B or G exiling from an opposing graveyard at all — against a `graveyard_interaction` class that is 75 cards at 27.1% density, the largest threat class in the environment. Sever the Bloodline in the sideboard exiles recursive creatures on the battlefield instead, which is the closest substitute these colours can field.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:7  2:3  3:8  4:5
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.9: Garruk Relentless // Garruk, the Veil-Cursed@0.9) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.6: Eldritch Evolution@0.8, Eaten Alive@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 78%  T2 92%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Maelstrom Pulse, Tragic Slip
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Eaten Alive, Maelstrom Pulse
  OK        noncreature_permanents: Maelstrom Pulse
  CONCEDED  stack: Neither black nor green offers a counterspell anywhere in this pool. The deck answers permanents after they resolve, and Maelstrom Pulse answers any nonland permanent type.
  CONCEDED  graveyard: The dossier's structural census reports 0 graveyard-hate cards cube-wide, and no card legal in B or G exiles from an opposing graveyard. Sever the Bloodline in the sideboard exiles recursive creatures on the battlefield instead, which is the closest available substitute.
```

- No WARN flags were raised: curve PASS (1:5 / 2:11 / 3:8) and goldfish PASS (84% keepable, 84% on three lands by turn 3), so no structural response was required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Tireless Tracker turns surplus lands directly into cards: 'Landfall - Whenever a land you control enters, investigate' means every extra land drop is a Clue, and every Clue sacrificed is a card, a +1/+1 counter on the Tracker, and a 1/1 Human Soldier from Ulvenwald Mysteries. Beyond it, Village Rites and Eldritch Evolution both convert a spare body plus mana into cards or a tutored threat, and Falkenrath Torturer's ability costs no mana at all, so the board is usable on a turn where every card in hand is a land. |
| screw | mitigation | 7 one-drops and 3 two-drops mean 10 of 23 nonland cards are castable on two lands, and the one-drops are the fodder base (Young Wolf x2) and the cheapest interaction (Tragic Slip x2, Village Rites x2, Eaten Alive). The goldfish check reports 84% keepable hands, 78% able to act on turn 1 and 88% on three lands by turn 3, with a symmetric 9 black / 9 green source split, so colour screw is rare despite Lumberknot's {2}{G}{G} and Eldritch Evolution's {1}{G}{G}. |
| decapitation | mitigation | Lumberknot is HEXPROOF - 'This creature can't be the target of spells or abilities your opponents control' - so the deck's primary growing threat cannot be answered by targeted removal at all, which is most of what this cube offers, and it is a 2-of. If Garruk is answered on sight, Grizzly Ghoul x2 and Lumberknot x2 still convert deaths into permanent stats, and Ulvenwald Mysteries keeps producing cards and bodies from an enchantment the cube has only 2 answers to. |
| gas-out | mitigation | Card-positive by construction. Ulvenwald Mysteries x2 turn every nontoken death into a Clue; Tireless Tracker turns every land into a Clue; Village Rites x2 draw two off a body that was going to die anyway; Morbid Opportunist draws on any death cluster. That is 6 of 23 nonland cards that manufacture cards from board state, and Young Wolf x2 and Butcher Ghoul x2 return from the graveyard for free, so an empty hand still redeploys. |
| raced | accepted | This is the slowest of the four Aristocrats builds at a turn-8 thesis and it cannot outrace the cube's fastest starts. Mitigating that would mean cutting the 3-MV engine slots - Ulvenwald Mysteries and Tireless Tracker - for cheap interaction, which is precisely the trade that turns this into the aggressive sketch the shape judge rejected for clashing with the locked controller role. What it has instead is the best late game of the four: Lumberknot is a hexproof threat that grows every time anything dies on either side, Maelstrom Pulse answers a permanent type nothing else in this queue can, and Garruk's overrun scales with a graveyard that only gets deeper. |
| disruption-fizzle | mitigation | There is no single assembled turn to interact with - the counters on Lumberknot and Grizzly Ghoul are PERMANENT, so a removal spell aimed at the engine does not undo the stats already banked. Garruk's -3 is the one burst turn, and if it is answered the board it was going to pump is still on the battlefield and still attacking. Eldritch Evolution is the only card whose cost is paid before the effect resolves, and its sacrifice is a body this deck was happy to lose. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Elder Deep-Fiend, Abundant Maw, Distended Mindbender, It of the Horrid Swarm, Decimator of the Provinces, Chittering Host | Emerge and colourless Eldrazi. Emerge sacrifices ONE creature to discount a single 7-10 MV body; this pipeline converts deaths into +1/+1 counters and cards on a board that keeps growing, so spending a creature to cast one big creature trades the engine for a single threat. Several are also rares against a 5-rare cap. |
| Griselbrand | MV 8 mythic with {B}{B}{B}{B} in its cost, uncastable on this curve at the computed land count, and it would consume one of only 5 rare/mythic slots. |
| Helvault | '{1}, {T}: Exile target creature you control' EXILES rather than kills, producing no death trigger for Blood Artist, Lumberknot, Ulvenwald Mysteries or Grizzly Ghoul — it removes a body from the plan instead of converting it — and '{7}, {T}' is unreachable at this land count. |
| Heartless Summoning | 'Creatures you control get -1/-1' kills this deck's own 1/1 Human Soldier tokens from Ulvenwald Mysteries and its undying 1-drops before they can die usefully, deleting the fodder base the counters are built on. |
| Soul Separator, Invasion of Innistrad // Deluge of the Dead | Both are genuinely on-plan — Soul Separator makes two bodies from a dead creature and Invasion of Innistrad is removal plus two Zombies plus repeatable graveyard exile — but both are slow and Invasion is a rare needing a sixth slot against a cap of 5. Soul Separator's activation is '{5}, {T}, Sacrifice this artifact' on a card that costs {3}, i.e. 8 mana across two turns before it produces anything. |
| Join the Dance, Dauntless Cathar, Mausoleum Guard | The deterministic splash filter returned W with these three names. The splash is DECLINED: the pipeline's finisher is Garruk's '-3: Creatures you control gain trample and get +X/+X until end of turn, where X is the number of creature cards in your graveyard', which needs a board on the turn it fires, and a third colour in a 17-land deck whose only free duals are one common enters-tapped land per pair trades that consistency for three cards. Join the Dance additionally costs {G}{W} and Dauntless Cathar's graveyard ability costs {1}{W}, so both need real white sources, not a token splash. |
| The Gitrog Monster, Tree of Perdition | The Gitrog Monster's 'At the beginning of your upkeep, sacrifice The Gitrog Monster unless you sacrifice a land' costs a LAND every turn, and this deck has no lands-matter payoff to make that profitable; it is also a mythic against a 5-rare cap. Tree of Perdition is a 0/13 defender whose one-shot life swap does nothing for a plan that wins by growing a board and attacking, and it is likewise a mythic. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.36 adj [MV 2.48 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  50.0%  prod  52.9%  gap  -2.9pp  [OK]
  G  demand  50.0%  prod  52.9%  gap  -2.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base                         cube mainboard                                  PASS
Commons / uncommons  max 2 each   highest count in deck is 2                      PASS
Rares / mythics      max 1 each   all four are single copies                      PASS
Rares / mythics      max 5 TOTAL  4 of 5 used; one slot deliberately unspent      PASS
  Garruk Relentless // Garruk the Veil-Cursed (M), Maelstrom Pulse (R),
  Tireless Tracker (R), Eldritch Evolution (R).  Sideboard uses 0.
All cards from the cube                                                           PASS
Basic lands (format-supplied)     Swamp x7, Forest x7                             PASS
Mainboard 40 / Sideboard 10                                                       PASS
Colour usability in [B, G]        every nonland card                              PASS
```
