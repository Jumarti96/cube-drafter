---
deck_name: "gu-vilespawn-mill"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GU"
format: "40-card"
built_at: "2026-08-27T14:38:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  5x Forest                             
  9x Island                             
  1x Dreamroot Cascade                  UG dual, untapped from your third land
  2x Tangled Islet                      GU dual, enters tapped
```

### CREATURES (15)
```
CMC  Card                                     Qty  Col   Role                        Rar
  2  Covetous Castaway // Ghostly Castigator  x2   U     Engine - dies-mill / valve  U
  2  Deranged Assistant                       x2   U     Engine - mill + ramp        C
  2  Vilespawn Spider                         x2   UG    Payoff - the kill           U
  3  Eccentric Farmer                         x2   G     Enabler - mill 3            C
  3  Grizzled Angler // Grisly Anglerfish     x2   U     Engine - repeatable mill    U
  3  Laboratory Maniac                        x1   U     Payoff - alternate win      U
  3  Splinterfright                           x2   G     Payoff - floating P/T       U
  7  Wretched Gryff                           x2   U     Threat - emerge flier       C
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                                     Qty  Col   Role                        Rar
  1  Silent Departure                         x1   U     Bounce                      C
  1  Syncopate                                x2   U     Counterspell                C
  2  Grapple with the Past                    x2   G     Mill 3 + rebuy              C
  3  Eldritch Evolution                       x1   G     Tutor (sac outlet)          R
  3  Forbidden Alchemy                        x2   U     Engine - instant dig        C
```

## SIDEBOARD (10)
```
Card                                     Qty  Col   Rar  Role / When to board in
Compelling Deterrence                    x2   U     U    vs. the cube's 24 artifacts + 25 enchantments (49 cards, 18%): 'Return target nonland permanent to its owner's hand' is the ONLY answer to a noncreature permanent available in G/U
Imprisoned in the Moon                   x2   U     C    vs. a resolved bomb of any kind: 'Enchant creature, land, or planeswalker. Enchanted permanent is a colorless land ... and loses all other card types and abilities' answers three permanent classes with one card
Summary Dismissal                        x1   U     U    vs. combo and storm turns: 'Exile all other spells and counter all abilities'. Held at ONE copy - four mana held up competes directly with the {2}{G}{U} activation, and 'counter all abilities' would hit our own Vilespawn Spider ability if it were on the stack
Elder Deep-Fiend                         x1   U     R    vs. a board stall the Insect tokens cannot attack through: 'Flash. Emerge {5}{U}{U}' off a spent 3-drop is four mana, 'tap up to four target permanents' clears the blockers, and the emerge sacrifice adds a creature card to the count
Cackling Counterpart                     x1   U     U    vs. grindy decks that answer the first Spider: 'Create a token that's a copy of target creature you control' is a second Vilespawn Spider - but the copy is summoning-sick and the ability is sorcery-only, so it activates the FOLLOWING turn, never the same one
Mist Raven                               x2   U     U    vs. the cube's 58 evasion cards (21%): 'Flying. When this creature enters, return target creature to its owner's hand' both blocks in the air and buys a turn
Overcharged Amalgam                      x1   U     R    vs. decks that answer the Vilespawn Spider activation: 'Flash ... Exploit ... When this creature exploits a creature, counter target spell, activated ability, or triggered ability', and the exploited creature becomes a creature card in the graveyard
```

## ANALYSIS

### DECK IDENTITY

A G/U self-mill deck that turns its library into a resource and then spends it three different ways. Blue supplies the deepest repeatable mill in the cube - Grizzled Angler taps for two a turn, Deranged Assistant mills and ramps, Forbidden Alchemy buries three at instant speed - while Eccentric Farmer and Grapple with the Past add burst. Vilespawn Spider cashes the accumulated creature-card count out as an Insect board; Splinterfright reads the identical count as raw trampling power with no activated ability to disrupt; and Wretched Gryff turns a spent body into a 3/4 flier for about three mana via Emerge, adding a creature card to the count as the cost. Laboratory Maniac is the concession that this deck really can mill itself out - it converts that loss into a win. Syncopate is the only stack interaction available to any build in these colours, and it protects the one sorcery-speed window the Spider needs.

### THE COMBO IS SORCERY-SPEED AND TELEGRAPHED

Vilespawn Spider's activation reads "{2}{G}{U}, {T}, Sacrifice this creature: Create a 1/1 green Insect creature token for each creature card in your graveyard. **Activate only as a sorcery.**" Three separate clocks fall out of that one line:

- the `{T}` means the Spider must have been under your control since your upkeep, so it is summoning-sick the turn it lands;
- `{2}{G}{U}` is four mana on top of the two you already spent deploying it;
- "Activate only as a sorcery" means the opponent gets a full turn cycle to see it coming and cannot be responded to at instant speed.

A turn-2 Spider therefore activates on **turn 4 at the earliest**, and the stated thesis turn of 6 is the turn where you can both activate *and* hold up Syncopate. There is no out-of-nowhere kill here.

### FIVE KEY PIECES DO NOTHING THE TURN THEY LAND

Vilespawn Spider, Grizzled Angler, Deranged Assistant and Reckless Scholar all have `{T}` abilities, and Cackling Counterpart's token copy is summoning-sick. This deck is a full turn slower than its mana curve suggests, and that is priced into the thesis turn rather than wished away.

### TWO FLASHBACK COSTS ARE DEAD TEXT

Spider Spawning's "Flashback {6}{B}" and Forbidden Alchemy's "Flashback {6}{B}" **cannot be paid**: zero of the 17 lands and zero of the 23 nonland cards produce black mana (Deranged Assistant adds `{C}`). Both are one-shots here. This is exactly why Spider Spawning is at one copy in this build and two in the B/G ones.

The flashbacks that *do* work: Silent Departure's `{4}{U}` (live, five mana) and Covetous Castaway's `Disturb {3}{U}{U}` (live, five mana). Cackling Counterpart's `{5}{U}{U}` is castable but seven mana, past the thesis turn.

### DECKING IS A REAL RISK, AND THE VALVE COSTS YOU THE PAYOFF

Grizzled Angler x2 (2 each), Splinterfright x2 (2 each), Deranged Assistant x2 (1 each) and Reckless Scholar can bury six-plus cards a turn against a ~33-card post-mulligan library. The safety valve is Covetous Castaway's back face — Ghostly Castigator, `Disturb {3}{U}{U}`, "you may shuffle up to three target cards from your graveyard into your library" — which is castable **from the graveyard**, so a dead Castaway is not a dead card.

But note the tension honestly: shuffling three cards out of your graveyard **reduces the number Vilespawn Spider reads**. So does Grapple with the Past when you take the creature mode. The valve and the payoff pull against each other.

### THIS IS THE ONLY DECK IN THE RUN WITH STACK INTERACTION

Syncopate is the only counterspell available to any build across all four colour pairs explored here — B/G has none at all. Given that the kill is a single sorcery-speed activation the opponent can see coming a turn away, protecting that one window is worth more in this deck than in any of the others.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:3  2:8  3:10  7:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 6.5: Splinterfright@0.9, Splinterfright@0.9, Wretched Gryff@0.8, Wretched Gryff@0.8, Laboratory Maniac@0.5, Eldritch Evolution@0.6) → p=0.92 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 13.6: Covetous Castaway // Ghostly Castigator@0.8, Covetous Castaway // Ghostly Castigator@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 48%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Vilespawn Spider, Splinterfright, Syncopate
  OK        single_large_threat: Silent Departure, Syncopate, Splinterfright, Wretched Gryff
  CONCEDED  noncreature_permanents: no maindeck card answers a resolved artifact or enchantment. Compelling Deterrence is the only G/U answer that touches those two classes and it is in the sideboard - note that Imprisoned in the Moon reads 'Enchant creature, land, or planeswalker' and canNOT target an artifact or enchantment, so it does not cover them despite sitting in a hate slot
  OK        stack: Syncopate
  CONCEDED  graveyard: there is no graveyard hate at all in G or U in this pool; the only two cards in the whole cube that touch a graveyard from outside it are Soul-Guide Gryff (white) and Deluge of the Dead (black), a 2-card risk across 300
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | CORRECTED per the Challenger's finding 8, which caught the earlier entry claiming Grapple with the Past 'can take a spell instead of a land' - its own quoted text refutes that: it returns 'a creature or land card' only. The real flood outlets are Deranged Assistant ('{T}, Mill a card: Add {C}', turning a surplus turn into mana and a graveyard card), Grizzled Angler ('{T}: Mill two cards', free every turn regardless of hand), and Grapple's LAND mode. Eccentric Farmer also returns a land card from the graveyard. |
| screw | mitigation | 17 lands at the computed recommendation; goldfish keepable 88%, 3 lands by turn 3 at 88%, and 11 of the 23 nonland cards cost 2 or less. CORRECTED per the Challenger's finding 9: Deranged Assistant does NOT ramp on turn 2 - its ability has {T} in the cost, so a turn-2 Assistant is summoning-sick and produces its first mana on turn 3. |
| decapitation | mitigation | Vilespawn Spider is at 2 copies and three further card slots read the same count: Splinterfright x2 (its own power and toughness, with no activated ability to disrupt) and Wretched Gryff x2 (which adds to the count as its Emerge cost). Grapple with the Past x2 returns an answered Spider from the graveyard - the Spider is a creature card, so 'return a creature or land card' reaches it - and Eldritch Evolution tutors another. Assembly p(payoff by turn 7) = 0.92. |
| gas-out | mitigation | Self-replacing count is 6 of 23 nonland cards: Forbidden Alchemy x2 ('Put one of them into your hand and the rest into your graveyard'), Grapple with the Past x2, and Eccentric Farmer x2 (mill three, return a land). Beyond that the deck does not need cards in hand: Grizzled Angler x2 and Splinterfright x2 mill four a turn between them for free, so the count keeps climbing on an empty hand. |
| raced | mitigation | REWRITTEN per the Challenger's finding 5, which showed the earlier `accepted` priced its concession against a turn-6 combo that does not exist. G/U genuinely has no unconditional creature removal in this pool - that part was true - but the deck was spending nothing on surviving to the turn it actually wins. Wretched Gryff x2 is the fix that costs the plan nothing, because it IS the plan: 'Emerge {5}{U}' off a spent 3-drop is about three mana, the sacrifice adds a creature card to the count, and the result is a 3/4 FLIER - this deck previously had one evasive body in 40 cards against a cube that is 20.9% evasion. Mist Raven x2 and Elder Deep-Fiend board in behind it. |
| disruption-fizzle | mitigation | Syncopate x2 ('Counter target spell unless its controller pays {X}') is the only stack interaction available to any build in these colours and exists specifically to protect the one sorcery-speed activation window. Sacrificing the Spider is a COST, so killing it in response to the activation does not stop the ability. If the Spider plan is answered entirely, Splinterfright x2 converts the identical count into combat damage with no activated ability to disrupt. Honest limit: Syncopate's X is funded from whatever mana is left after the {2}{G}{U} activation, so a meaningful tax and the activation in the same turn needs six-plus lands - which is part of why the thesis turn is 7. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bramble Wurm | seven mana for a 5/5, and '{2}{G}, Exile this card from your graveyard: You gain 5 life' exiles it out of the yard the payoff counts. |
| Epitaph Golem | '{2}: Put target card from your graveyard on the bottom of your library' — its only ability removes cards FROM the graveyard, shrinking the exact number Vilespawn Spider counts. |
| Harvest Hand // Scrounged Scythe | 'When this creature dies, return it to the battlefield transformed' — it never stays in the graveyard, so it never adds to the creature-card count. |
| Soul Separator | {3} to cast plus '{5}, {T}, Sacrifice this artifact' — eight mana across two turns to reanimate one creature; this deck's own payoffs cost three to five. |
| Travel Preparations | 'Flashback {1}{W}' is uncastable — W is outside core_colors + splash_colors, locked at Phase 3 — leaving a sorcery that only places two +1/+1 counters. |
| Laboratory Maniac (uncommon) | The prior analysis named it as a win line, and it is genuinely closer to live here than in the B/G builds - this deck really can empty its own library. Cut because the win it offers arrives around turn 8-9, two to three turns after the Vilespawn Spider activation is meant to have already ended the game, and a 3-mana 2/2 that does nothing until the library is empty is a slot not spent on the count. |
| Hermit Druid (rare) - CUT, but on partly faulty reasoning | CORRECTION - this card was cut from three of the four decks in this run on reasoning that was partly WRONG, and the self-grill on the fourth caught it. Hermit Druid reads: 'Reveal cards from the top of your library until you reveal a basic land card. Put THAT CARD into your hand and ALL OTHER cards revealed this way into your graveyard.' The basic goes to HAND - so Hermit Druid never mills a basic land, and everything it does mill is drawn from the non-basic portion of the library. In this deck that pool is 26 cards of which 15 are creature cards = 58% creature-dense, against the deck's overall 38%. So while the volume is only about 1.7 cards per activation (the high basic count is real), the yield is about 1.00 CREATURE cards per activation, repeatable from turn 3 at no card cost. For comparison Splinterfright's 'mill two cards' yields 0.75. The original cut used a correct volume figure to reach an unsupported conclusion by applying the deck's overall creature density to a pool the card cannot touch. It is the strongest single swap-in for any of these decks and it costs one rare/mythic slot. |
| Soulcipher Board // Cipherbound Spirit (uncommon) | A keystone of the winning sketch, cut on the judge's mechanism. It reads 'Whenever a creature card is put into your graveyard from anywhere, remove an omen counter... Then if it has no omen counters on it, transform it' - and this deck's entire function is putting creature cards in the graveyard, so it transforms inside two turns and LOSES its mill ability. Replaced by Reckless Scholar, which never switches itself off. |
| Mausoleum Wanderer (rare) | Its counter tax is 'unless its controller pays {X}, where X is this creature's power', and its power only grows 'whenever another Spirit you control enters'. This list has 1 Spirit in 40 cards (Tower Geist), so X would be 1 - a tax anyone pays. Syncopate was taken instead because its X scales with our mana rather than with a tribe we do not have. |
| Rise from the Tides (uncommon) | Reads a DIFFERENT count than every other payoff here - 'for each instant and sorcery card in your graveyard'. At 11 instants/sorceries in 23 nonland cards the yard holds roughly 4 by turn 6, so it is six mana for four TAPPED 2/2s against four mana for 4-5 untapped Insects. |
| Aberrant Researcher // Perfected Form (uncommon) | Its flip rate is genuinely good here - 11 of 23 nonland cards are instants or sorceries, so about 48% per upkeep. Cut because the front face is a 3/2 flier that mills only ONE card a turn, against Grizzled Angler's two for free at a cheaper slot. |
| Delver of Secrets // Insectile Aberration (common) | Recorded explicitly because 'a 1-mana beater' is exactly the kind of lazy cut the counts discipline exists to prevent. Its real flip rate against this list is 47.8% per upkeep (11 instants and sorceries of 23 nonland cards). It is still cut - a 3/2 flier reads nothing this deck counts and does not advance a kill that is a graveyard tally - but the number is stated rather than assumed. |
| Ghoultree and Moldgraf Millipede (uncommon / common) | Both convert the same count into a body and both are perfectly castable here. They lose the slot because this is a COMBO deck whose kill is a token swarm at four mana; a 10/10 with no evasion gets chump-blocked while a swarm of Insects does not. |
| Sideboard considerations not taken | Memory Deluge (rare, 'Look at the top X cards... Put two into your hand', Flashback {5}{U}{U}) is the best raw card advantage in blue and would be the first rare to add given two unspent rare slots. Cobbled Lancer and Makeshift Mauler were rejected outright: both read 'exile a creature card from your graveyard' as an additional cost, which directly decrements the number the payoff counts. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.74   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.01 adj [MV 2.74 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  41.7%  prod  47.1%  gap  -5.4pp  [OK]
  U  demand  58.3%  prod  70.6%  gap -12.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2            PASS - highest count on any common/uncommon is 2
rares_mythics_max_1_each           PASS - Eldritch Evolution 1, Dreamroot Cascade 1 (mainboard); Overcharged Amalgam 1, Elder Deep-Fiend 1 (sideboard)
rares_mythics_max_5_total          PASS - 4 across both boards, one under the cap
basics_unlimited                   Island 9, Forest 5 - exempt as format-supplied
all_cards_from_cube                PASS - every non-basic name matched by exact string against the working pool cache
```