---
deck_name: "wub-zur-enchantment-toolbox"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-08-02T22:36:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
2x   Contaminated Aquifer  Land - U/B, Island-typed
2x   Idyllic Beachfront    Land - W/U, Island-typed
4x   Island                Land - basic, untapped U
4x   Plains                Land - basic, untapped W
2x   Sunlit Marsh          Land - W/B
3x   Swamp                 Land - basic, untapped B
```

### CREATURES (5)

```
CMC  Card                  Qty   Color Role                                                                                                       Rar
  3  Man-o'-War            x1    U     Interaction - bounce on a 2/2 body; also a Floodgate enabler                                               C
  3  Phyrexian Rager       x1    B     Engine - body that replaces itself                                                                         C
  4  Zur the Enchanter     x1    BUW   Payoff - attacks to tutor an enchantment onto the battlefield                                              R
  5  Lyra Dawnbringer      x1    W     Payoff - legend; 5/5 flying first strike lifelink, anthem for Serra Angel                                  M
  5  Serra Angel           x1    W     Payoff - 4/4 flying vigilance; backup clock that also blocks for Zur                                       U
```

### INSTANTS & SORCERIES (12)

```
CMC  Card                  Qty   Color Role                                                                                                       Rar
  1  Swords to Plowshares  x2    W     Interaction - 1-mana unconditional exile                                                                   U
  1  Vampiric Tutor        x1    B     Engine - finds Zur; the only redundancy the pool sells                                                     M
  2  Chainer's Edict       x2    B     Interaction - edict + Flashback, two answers per card                                                      U
  2  Counterspell          x2    U     Interaction - hard counter; protects Zur on the turn he resolves                                           C
  2  Snap                  x1    U     Interaction - free bounce; triggers Floodgate and can save Zur from removal                                C
  4  Deep Analysis         x1    U     Engine - draw 2, Flashback for 2 more                                                                      C
  4  Fact or Fiction       x2    U     Engine - the pool's biggest draw instant                                                                   U
  5  Force of Will         x1    U     Interaction - free counter; protects Zur without holding mana                                              M
```

### OTHER SPELLS (6)

```
CMC  Card                  Qty   Color Role                                                                                                       Rar
  1  Mystic Remora         x1    U     Engine - Zur bullet: the only one needing no creature on board                                             R
  2  Pacifism              x1    W     Interaction - also a Zur bullet: blanks a blocker for free                                                 C
  2  Sun Clasp             x1    W     Engine - Zur bullet: +1/+3 and a {W} bounce, so it answers or protects                                     C
  2  Twisted Experiment    x1    B     Payoff - Zur bullet: +3/-1, the damage spike                                                               C
  3  Griffin Guide         x1    W     Payoff - Zur bullet: makes him a 3/6 flier, leaves a 2/2 if he dies                                        U
  3  Leaden Fists          x1    U     Payoff - Zur bullet: Flash +3/+3, fetched LAST on the final attack                                         C
```

## SIDEBOARD (10)

```
Card                  Qty   Color Role / When to board in                                                                                    Rar
Circular Logic        x2    U     vs STACK-heavy decks - a single blue pip; the yard fills off Fact or Fiction and Deep Analysis             U
Duress                x2    B     vs CONTROL/COMBO - strips the removal or counter aimed at Zur before he lands                              C
Floodgate             x2    U     vs WIDE BOARDS - 8 Island-typed lands = 4 damage; enabled by Snap, Man-o'-War or Griffin Guide             U
Recoil                x2    BU    vs ARTIFACTS (24) + ENCHANTMENTS (33) - returns ANY permanent at instant speed for 3 mana, plus a discard  U
Tormod's Crypt        x2    C     vs GRAVEYARD (45 cube cards, 18.75%) - the cube's only graveyard hate; {0} to cast                         U
```

## ANALYSIS

### DECK IDENTITY

An Esper control deck built on one card. Zur the Enchanter reads 'Whenever Zur attacks, you may search your library for an enchantment card with mana value 3 or less, put it onto the battlefield, then shuffle', so a single 1/4 flier assembles a free enchantment every combat, tuned to the board. The lethal sequence is FOUR attacks, not three: Griffin Guide first (Zur becomes a 3/6 flier and leaves a 2/2 flier behind if he dies), then Twisted Experiment (6/5), then any bullet, and Leaden Fists LAST — both because 'doesn't untap during its controller's untap step' ends Zur's attacking career and because the three-fetch line only reaches 18 damage. Pacifism, Sun Clasp and Mystic Remora are the same package pointed at removal, protection and card draw. Everything else is cheap interaction and counters protecting a deck whose kill mechanism has no redundancy the pool will sell.

### THE LINE, WITH THE ARITHMETIC DONE

This deck's whole case rests on a sequence, so the sequence had better add up. The first version of this build claimed a three-fetch kill. It doesn't work:

| Turn | Fetch | Zur becomes | Damage | Running total |
|---|---|---|---|---|
| T5 | Griffin Guide (*"+2/+2 and has flying"*) | 3/6 | 3 | 3 |
| T6 | Twisted Experiment (*"+3/-1"*) | 6/5 | 6 | 9 |
| T7 | Leaden Fists (*"+3/+3"*) | 9/8 | 9 | **18** |

Eighteen. The opponent is at 2, and Leaden Fists also reads *"doesn't untap during its controller's untap step"* — so there is no fourth swing to finish with. The self-grill caught it and the claim was withdrawn.

The line that actually works is **four attacks with Leaden Fists fetched last**: T5 Griffin Guide (3), T6 Twisted Experiment (6), T7 any remaining bullet (6), T8 Leaden Fists (9) = **24, lethal on turn 8** — which is exactly the declared goldfish turn. There is also a turn-7 kill if you hard-cast Griffin Guide for `{2}{W}` pre-combat on turn 5 and spend that attack's trigger on Twisted Experiment: 6 + 6 + 9 = 21.

The ordering constraint is not stylistic. Leaden Fists is fetched last **both** because it ends Zur's attacking career and because the deck needs the fourth attack to exist.

### TWO OUTS IN FORTY

The structural gate reports payoff `p = 0.85`, and that number is honest for what it measures — but it is not the number that matters. Three of those six "payoff" copies are aura bullets that do nothing when drawn instead of fetched. The thesis is one card plus one tutor:

- **Zur or Vampiric Tutor by turn 4** (10 cards seen, on the play): **44.2%**
- **…by turn 8** (15 cards): **61.5%**
- **Zur himself by turn 8**: **37.5%**

That is the real shape of this deck. It is why four separate axes of decapitation insurance exist — finding (Vampiric Tutor), protecting (Counterspell ×2, Force of Will), replacing (Griffin Guide's *"create a 2/2 white Griffin creature token with flying"*, Sun Clasp's *"{W}: Return enchanted creature to its owner's hand"*), and winning without him at all (Lyra Dawnbringer, Serra Angel).

### THE ONE RULES INTERACTION THAT MAKES ZUR GOOD

> *"**Whenever Zur attacks**, you may search your library for an enchantment card with mana value 3 or less, put it onto the battlefield, then shuffle."*

The trigger is on **attacking**, and once it is on the stack it resolves independently of its source. Killing or bouncing Zur in response does **not** stop the enchantment arriving. The opponent has to answer him *before* the attack — which is precisely the window Counterspell ×2 and Force of Will are in the deck to cover.

The honest limit: **5 of the 6 bullets are `Enchantment — Aura` with "Enchant creature"**. If Zur dies in response and no other creature is on the battlefield, only Mystic Remora can actually be put onto the battlefield. The trick is real; it is not unconditional.

### THREE COLOURS BEATS FIVE, MEASURABLY

This is the only one of the three decks in this set with a **clean structural report** — all four checks PASS, no WARN. The reason is entirely the manabase:

| Deck | Colours | Tapped lands | Keepable | Turn-1 play |
|---|---|---|---|---|
| Legacy Weapon attrition | WUBRG | 14 of 18 | 73% | 52% |
| Ramp-legends | WUBRG | 13 of 18 | 79% | 61% |
| **Zur (this deck)** | **WUB** | **6 of 17** | **84%** | **60%** |

Eleven untapped basics is what a three-colour deck buys, and it lands exactly on the recommended 17 lands with no deviation to explain — no Lair swapping a land drop, no colourless utility land, no mana-less Maze of Ith.

### THE CONSTRAINT THIS DECK CANNOT MEET, AND WHY

The brief was "Five-Color Legends." This deck runs **2 legendary cards in 23 nonland slots**. That is the ceiling, not a preference: all seven WUB-legal nonland legends in the pool — Zur, Lieutenant Kirtar, Chainer, Arcanis, Lyra, Urza, Yawgmoth — are rare or mythic, and four of the five rare slots are already committed to Zur plus the tutor and protection that a one-card kill mechanism cannot function without. Exactly one slot was left for a second legend. It went to **Lyra Dawnbringer** over Lieutenant Kirtar because Kirtar's ability only exiles an *attacking* creature and eats its own body, while Lyra is a 5/5 flying first-strike lifelink that directly mitigates the accepted `raced` mode and anthems the Serra Angel already in the list.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:4  4:4  5:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.7: Griffin Guide@0.7, Twisted Experiment@0.5, Leaden Fists@0.5) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 5 copies (effective 4.6: Mystic Remora@0.6) → p=0.84 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 52%  T2 93%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Wrath of God is the only true sweeper in these colours and it is rare, with the 5-card budget already spent on Zur, Vampiric Tutor, Mystic Remora, Lyra Dawnbringer and Force of Will. It would also destroy Zur, the deck's only kill mechanism. Crawlspace and Windborn Muse would mitigate without killing Zur, but each also costs a rare the budget does not have. Floodgate x2 is sideboarded instead: 8 of the 17 lands are Island-typed, so it deals 4 damage to each nonblue creature without flying, and of the 5 mainboard creatures only Phyrexian Rager dies (Zur and Man-o'-War are blue; Lyra and Serra Angel fly). Its enablers are in-list: Snap, Man-o'-War and Griffin Guide.
  OK        single_large_threat: Swords to Plowshares, Chainer's Edict, Pacifism, Sun Clasp
  CONCEDED  noncreature_permanents: Esper has no artifact or enchantment DESTRUCTION in this pool (the answers - Orim's Thunder, Break Asunder, Wax // Wane - are red, green or white-red), so the class is conceded maindeck. Recoil x2 is sideboarded: 'Return target permanent to its owner's hand. Then that player discards a card' answers any permanent type at instant speed for 3 mana, with a card of profit.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: Tormod's Crypt x2 is sideboarded. Graveyard interaction is the cube's densest theme at 45 of 271 cards, so this is a real concession paid for after game 1; maindeck slots go to answers live in every matchup.
```

- ALL FOUR CHECKS PASS — curve, assembly (payoff p=0.85, enabler p=0.84), goldfish (84% keepable, above the 80% threshold) and coverage. No WARN-tier flag was raised, so no response is required. This is the only one of the three decks in this set with a clean structural report, and the reason is the manabase: 11 of 17 lands are untapped basics because the deck is three colours rather than five.
- SLOT BUDGET, disclosed rather than flagged: threats +16.1pp and engine +10.4pp total 26.5pp against the 25pp the control bands leave unassigned — 1.5pp over. Stated here rather than hidden in an unbanded bucket.
- ASSEMBLY CAVEAT, disclosed: the payoff p=0.85 counts 6 copies, but 3 of them (Griffin Guide, Twisted Experiment, Leaden Fists) are bullets that are weak when DRAWN rather than fetched. That figure should not be read as 'we find Zur'. The real number is 2 outs in 40 — Zur plus Vampiric Tutor — which is 44.2% by turn 4 on the play and 61.5% by turn 8. The four-axis decapitation mitigation is what carries the deck when those 2 outs do not appear.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zur's trigger costs no mana at all — 'you may search your library for an enchantment card... put it onto the battlefield' — so a board with surplus lands still generates a free card every combat. Beyond that, Deep Analysis has 'Flashback—{1}{U}, Pay 3 life', Chainer's Edict has 'Flashback {5}{B}{B}', and Fact or Fiction x2 is an instant-speed mana sink. At avg MV 2.74 across 23 nonland cards, flooding out is the least likely of this deck's failure modes. |
| screw | mitigation | 11 of the 17 lands are untapped basics and only 6 enter tapped, which is why the goldfish check returns 84% keepable and a 60% turn-1 play rate — both above threshold and both better than either five-colour deck in this set. The curve supports it: 5 one-drops and 7 two-drops among 23 nonland cards, so a two-land keep has plays on turns 1 and 2 (Swords to Plowshares, Vampiric Tutor, Sun Clasp, Chainer's Edict, Counterspell, Snap, Pacifism). An earlier version of this entry cited 'Duress-class plays', which was wrong: Duress is sideboard-only and the mainboard contains no card of that class. |
| decapitation | mitigation | This is the deck's defining risk and it is answered on four axes. Finding: Vampiric Tutor 'searches your library for a card' unconditionally, so it is the only Zur redundancy the pool sells — honestly, that is 2 outs in 40, or 44.2% by turn 4. Protecting: Counterspell x2 and Force of Will, the last of which reads 'You may pay 1 life and exile a blue card from your hand rather than pay this spell's mana cost' and so protects Zur on the turn he resolves without holding mana; 9 of the other 22 nonland cards are blue and therefore legal pitch fodder. Replacing: Griffin Guide reads 'When enchanted creature dies, create a 2/2 white Griffin creature token with flying', so removal on an enchanted Zur still leaves a flier; Sun Clasp's '{W}: Return enchanted creature to its owner's hand' can save him outright. Winning without him: Lyra Dawnbringer (5/5 flying first strike lifelink) and Serra Angel (4/4 flying vigilance) are two clocks that need no setup at all. |
| gas-out | mitigation | 5 of the 23 nonland cards produce cards beyond themselves: Fact or Fiction x2 ('Reveal the top five cards of your library... Put one pile into your hand'), Deep Analysis (two draws plus a Flashback for two more), Phyrexian Rager ('you draw a card and you lose 1 life') and Mystic Remora. Chainer's Edict x2 adds a second use each via 'Flashback {5}{B}{B}'. On top of that, every Zur attack is a free card taken from the library, so the engine that closes the game is also the one that refuels it. (An earlier version stated '6 of 23' and enumerated five; the count is 5 plus the two Edict flashbacks, and is corrected here.) |
| raced | accepted | The mainboard's bodies are a 1/4, a 2/2, a 2/2, a 4/4 and a 5/5, with no maindeck sweeper. Against the cube's fastest starts this deck can simply die before turn 8. Mitigating means maindecking Wrath of God — which costs a rare slot the budget does not have AND destroys Zur, the only kill mechanism — or Crawlspace or Windborn Muse, which do not kill Zur but each still cost a rare the budget does not have. Either way the mitigation cost is a rare slot currently buying the tutor or the protection that a one-card thesis cannot function without. Partial offsets already in-list: Lyra Dawnbringer's lifelink, Sun Clasp as a fetchable +1/+3 or bounce, Pacifism as a fetchable blank on their best attacker, and Floodgate x2 in the sideboard, which is one-sided here. |
| disruption-fizzle | mitigation | The critical turn is a Zur attack, and it is unusually resilient because the ability triggers on ATTACKING: once the trigger is on the stack it resolves independently of its source, so killing or bouncing Zur in response does NOT stop the enchantment being searched up and put onto the battlefield. The opponent must answer Zur BEFORE the attack, which is the window Counterspell x2 and Force of Will exist to cover. Material limit, stated rather than glossed: 5 of the 6 legal fetch targets are 'Enchantment — Aura' with 'Enchant creature', so if Zur is removed in response and no other creature is on the battlefield, only Mystic Remora (1 of 6) can actually be put onto the battlefield. If Zur is answered pre-combat, Lyra Dawnbringer and Serra Angel remain as clocks requiring no setup. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Wrath of God | RARE SLOT, and it kills Zur. 'Destroy all creatures. They can't be regenerated' destroys the deck's only kill mechanism; the shape judge rejected an entire sketch for making it a keystone. wide_boards is conceded and paid for with sideboard Floodgate instead. |
| Crawlspace | RARE SLOT. 'No more than two creatures can attack you each combat' would un-concede wide_boards WITHOUT killing Zur, and it needs no coloured mana. It is the single strongest card left on the table; it lost only because the 5-rare budget is committed to Zur plus the tutor and protection a one-card thesis requires. |
| Windborn Muse | RARE SLOT. 'Creatures can't attack you unless their controller pays {2} for each creature they control that's attacking you' answers both wide_boards and the accepted 'raced' mode on a flying body. Same budget problem as Crawlspace. |
| Lieutenant Kirtar | RARE SLOT. Cut at grill repair for Lyra Dawnbringer: its ability only exiles an ATTACKING creature, so it misses blockers and non-attacking threats, and it sacrifices its own body to do it. |
| Enlightened Tutor | RARE SLOT. 'Search your library for an artifact or enchantment card' cannot find Zur, so it does not buy the non-redundancy insurance the deck actually needs; Zur already searches the toolbox for free every attack. Vampiric Tutor took the slot. |
| Mystical Tutor | RARE SLOT. Redundant with Vampiric Tutor, which finds any card including Zur. |
| Isolated Chapel | RARE SLOT for a single land. 'Enters tapped unless you control a Plains or a Swamp' is usually untapped here with 11 basics, but one of five rare slots buys more as Force of Will. |
| Maze of Ith | RARE SLOT, and 'Prevent all combat damage that would be dealt to and dealt by that creature' is anti-synergy with a deck whose only win is combat damage. It also produces no mana in a deck with a turn-4 triple pip. |
| Arcanis the Omnipotent | RARE SLOT. '{T}: Draw three cards' contains no clock, and {3}{U}{U}{U} is a worse fit than Zur's {1}{W}{U}{B} in the same manabase. |
| Chainer, Dementia Master | RARE SLOT. '{B}{B}{B}, Pay 3 life' is unpayable off 7 black sources in 17 lands. |
| Urza, Lord High Artificer | MYTHIC SLOT. 'Tap an untapped artifact you control: Add {U}' scales with artifact count; this list runs 0 artifacts in the mainboard. |
| Yawgmoth, Thran Physician | MYTHIC SLOT. 'Pay 1 life, Sacrifice another creature' needs a creature surplus; this list runs 5 creatures and needs all of them. |
| Absorb | RARE, and the pool holds exactly 1 copy. An earlier sideboard draft ran Absorb x2, which broke the copy limit AND pool membership as well as pushing the rare total to 7. Circular Logic x2 (uncommon, single blue pip) replaced it. |
| Oversold Cemetery | 'if you have four or more creature cards in your graveyard' is structurally hard to turn on with 5 creatures in the mainboard. |
| Mesa Enchantress | 'Whenever you CAST an enchantment spell, you may draw a card' — Zur PUTS enchantments onto the battlefield rather than casting them, so she never triggers off the kill mechanism. A trap in the most Zur-centric build. |
| Confiscate | Sideboard cut. 'You control enchanted permanent' answers any permanent type, but at {4}{U}{U} it costs twice what Recoil does for the same job, at sorcery speed, and at MV 6 it is not even a Zur fetch target. |
| Terror | Maindeck cut for Snap. 'Destroy target nonartifact, nonblack creature' is blank against 36 of the cube's 120 unique creatures (30%), and Snap is mana-neutral, enables Floodgate, and can bounce this deck's own Zur in response to removal. |
| Spirit Link | Replaced by Sun Clasp as a Zur bullet. Both are 1-2 mana fetchable auras, but Sun Clasp's '{W}: Return enchanted creature to its owner's hand' makes it an ANSWER and a protection tool, where Spirit Link only gains life. |
| Divine Sacrament | A fetchable enchantment at MV 3, but 'White creatures get +1/+1' pumps 2 of the 5 mainboard creatures and its Threshold clause needs seven cards in the graveyard. |
| Zombie Infestation | A fetchable MV 2 enchantment, but 'Discard two cards: Create a 2/2 black Zombie' is card disadvantage in a deck with no discard payoff. |
| Hermetic Study | A fetchable MV 2 aura, but '{T}: This creature deals 1 damage to any target' competes with attacking — Zur cannot both attack and tap for it. |
| Veiled Serpent | A fetchable MV 3 enchantment that becomes a 4/4, but 'can't attack unless defending player controls an Island' makes it a blocker only, and it needs an opponent to cast a spell first. |
| Gerrard's Verdict | Two-for-one on their hand, but it is a sorcery in a deck that wants to hold up Counterspell and Force of Will. |
| Auramancer | 'return target enchantment card from your graveyard to your hand' rebuys a destroyed aura, but Zur re-fetches from the LIBRARY for free, so the effect is largely redundant here. |
| Frantic Search / Fact or Fiction (3rd copy) | Fact or Fiction is capped at 2 copies by the uncommon limit; Frantic Search was cut for curve, since the deck already runs 5 one-drops and 7 two-drops. |
| A green or red splash | The deterministic splash filter found 22 green and 18 red payoff/engine candidates with exactly one off-core colour. Declined: Zur costs {1}{W}{U}{B} on turn 4, and every off-colour source is one not serving that triple pip. The 84% keepable rate is what the discipline buys. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.74   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.15 adj [MV 2.74 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  20.0%  prod  41.2%  gap -21.2pp  [OK]
  U  demand  46.7%  prod  47.1%  gap  -0.4pp  [OK]
  W  demand  33.3%  prod  47.1%  gap -13.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Deck size: mainboard 40 (23 nonland + 17 lands) - PASS
Sideboard: 10 - PASS
Every card exact-name present in working_pool - PASS
Copy limits (commons/uncommons max 2, rares/mythics max 1) - PASS
Rare/mythic total across MB+SB: 5 of max 5 - PASS (Zur the Enchanter, Vampiric Tutor [mythic], Force of Will [mythic], Mystic Remora, Lyra Dawnbringer [mythic])
Sideboard contains 0 rare/mythic cards - PASS. An earlier draft carried Absorb x2; Absorb is rare and the working pool holds exactly 1 copy, so that draft broke the copy limit AND pool membership as well as pushing the rare total to 7. Replaced with Circular Logic x2 (uncommon).
Basic lands (Plains x4, Island x4, Swamp x3) exempt from copy limits - PASS
Colour usability via effective_cost.best_mode for core W,U,B - PASS, all cards cast normally
Splash: none. The deterministic splash filter found 22 green and 18 red payoff/engine candidates with exactly one off-core colour, but a splash was declined: Zur costs {1}{W}{U}{B} on turn 4 and every off-colour source is one not serving that triple pip - N/A
```
