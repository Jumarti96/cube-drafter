---
deck_name: "r-daydreamer-spellslinger-impulse"
cube_id: "ecl"
cube_slug: "ecl"
colors: "R"
format: "40-card"
built_at: "2026-08-11T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x17 Mountain  basic
```

### CREATURES (9)

```
CMC  Card                 Qty  Color  Role            Rar
  2  Scuzzback Scrounger  x1   R      Engine/Outlet   R
  3  Enraged Flamecaster  x2   R      Payload/Payoff  C
  3  Sizzling Changeling  x2   R      Engine/Outlet   U
  3  Sting-Slinger        x1   R      Payload/Payoff  U
  4  Goliath Daydreamer   x1   R      Payload/Payoff  R
  5  Spinerock Tyrant     x1   R      Payload/Payoff  M
  6  Kulrath Zealot       x1   R      Engine/Outlet   C
```

### INSTANTS & SORCERIES (14)

```
CMC  Card                Qty  Color  Role           Rar
  1  Cinder Strike       x1   R      Interaction    C
  1  End-Blaze Epiphany  x1   R      Interaction    R
  1  Impolite Entrance   x2   R      Engine/Outlet  U
  2  Boulder Dash        x2   R      Interaction    U
  2  Sear                x2   R      Interaction    U
  3  Burning Curiosity   x2   R      Engine/Outlet  C
  3  Tweeze              x2   R      Interaction    C
  4  Feed the Flames     x1   R      Interaction    C
  5  Soul Immolation     x1   R      Interaction    M
```

## SIDEBOARD (10)

```
Card                Qty  Color  Rar  Role / When to board in
Flame-Chain Mauler  x2   R      C    Against controlling decks that would rather answer spells than bodies. '{1}{R}: This creature gets +1/+0 and gains menace until end of turn' is a two-drop that converts flooded mana into evasive damage without spending a card.
Giantfall           x2   R      U    Against artifact decks. 'Destroy target artifact' - one of only 4 artifact answers in the cube and the only one in mono-red. The other mode fights with your own power, which is live off Spinerock Tyrant (6/6), Kulrath Zealot (6/5) and Goliath Daydreamer (4/4).
Gristle Glutton     x1   R      C    Against grindy or removal-heavy decks. '{T}, Blight 1: Discard a card. If you do, draw a card' is the only mana-free repeatable card filter in red - 1 of the 62 red-legal nonland cards - and a 1/3 body blocks the cube's one- and two-drops while doing it.
Brambleback Brute   x2   R      C    Against fast aggro. A 4/5 body for three blocks nearly everything in the cube's aggro decks, and 'Target creature can't block this turn' turns it back into a clock when you retake the initiative.
Feed the Flames     x1   R      C    Against a single large or recursive threat. 'deals 5 damage to target creature. If that creature would die this turn, exile it instead' - the exile clause answers the cube's 39 graveyard-recursion cards at the point of death. This is the second copy; one is maindecked.
Rooftop Percher     x2   C      C    Against the cube's graveyard decks (39 cards, 15.0% density - the second-largest threat class). 'exile up to two target cards from graveyards. You gain 3 life' is the only graveyard answer mono-red can cast; it is colourless, and this deck's 17 lands and mana-value-6 Kulrath Zealot mean a five-drop is castable here in a way it would not be in a faster list.
```

## ANALYSIS

### DECK IDENTITY

A mono-red spellslinger tempo deck built on the only compounding play-from-exile engine in the cube. Goliath Daydreamer exiles every instant or sorcery you cast from hand with a dream counter instead of letting it hit the graveyard, then free-casts one of them on every attack - a second hand that grows every turn and cannot be discarded, countered or milled. 14 of the 23 nonland cards are instants and sorceries, so the bank fills fast; Enraged Flamecaster converts each mana-value-4-or-greater cast into 2 damage to each opponent, Spinerock Tyrant copies every single-target spell, and Sting-Slinger turns spare mana into face damage that needs no attack at all. Burning Curiosity, Sizzling Changeling, Kulrath Zealot and End-Blaze Epiphany impulse cards off the top of the library so the physical hand keeps supplying spells to bank, and Scuzzback Scrounger's Treasure every first main phase is what lets you actually cast an impulsed card before its window expires.

### THE BANK — WHAT GOLIATH DAYDREAMER ACTUALLY DOES

Goliath Daydreamer has two clauses and the first is the one people misread:

> "Whenever you cast an instant or sorcery spell **from your hand**, exile that card with a dream counter on it **instead of putting it into your graveyard** as it resolves."
> "Whenever this creature attacks, you may cast a spell from among cards you own in exile with dream counters on them **without paying its mana cost**."

It is a replacement effect on the graveyard, not a cost. Every burn spell you cast is used once at full effect and then **permanently retained** in exile, and every attack cashes one of them for free. There is no once-per-turn clause on the second ability and no expiry on the first. Functionally it is a second hand that only grows.

**14 of the 23 nonland cards** feed it. That is the number the whole build is sized against.

### THE RESTRICTION THAT SHAPES THE DECK

"From your hand" is load-bearing and cuts against the deck's own theme: **cards played out of the impulse exile do not bank.** Burning Curiosity, Sizzling Changeling, Kulrath Zealot and End-Blaze Epiphany all say "you may play that card" from exile, and a card played that way is not cast from hand, so no dream counter is placed.

The two exile effects are additive rather than redundant, and they cover opposite weaknesses:

| | Impulse exile | Dream-counter exile |
|---|---|---|
| Source | Burning Curiosity, Sizzling Changeling, Kulrath Zealot, End-Blaze Epiphany | Goliath Daydreamer |
| Duration | "until the end of your next turn" — use it or lose it | permanent |
| Beats | an empty hand | discard, counterspells, mill |
| Cost to use | full mana | free, one per attack |

The impulse package's job here is not to feed the bank directly — it is to keep the *hand* full so there is always another spell to cast from hand. That is why the Engine slot is deliberately over band.

**Scuzzback Scrounger is the fix for the impulse half's real weakness.** Burning Curiosity exiles two or three cards playable only "until the end of your next turn"; on a 17-land deck you often cannot cast them all before they expire. A Treasure every first main phase is the extra mana that stops them rotting.

### THE FREE CAST KEEPS PRINTED MANA VALUE

This is the interaction that makes Enraged Flamecaster more than a bear. Casting a spell without paying its mana cost does not change its mana value, so a banked Feed the Flames (MV 4) or Soul Immolation (MV 5) free-cast off an attack **still triggers** "whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent." With both Flamecasters out that is 4 damage attached to a free spell.

Five of the 23 nonland cards are MV 4+ outright; End-Blaze Epiphany is a conditional sixth, since an `{X}{R}` spell on the stack has mana value 1+X and qualifies at X≥3.

### A GOLDFISH LINE, USING ONLY QUOTED TEXT

- **T3** Enraged Flamecaster (3/2 reach). Opponent 20.
- **T4** Goliath Daydreamer; attack with Flamecaster → **17**.
- **T5** Tweeze to the face ("deals 3 damage to any target") → **14**, and it banks. Attack with both for 7 → **7**. Daydreamer's trigger free-casts the banked Tweeze → **4**.
- **T6** Any attack, or one Sting-Slinger activation, finishes.

That is a turn-6 kill inside a turn-7 thesis, using no mythic, no impulse card, and one rare.

### WHAT THE GRILL CHANGED, AND WHY IT MATTERS FOR ITERATION

Two structural facts came out of the audit that are worth knowing before you tune this list:

1. **Mono-red contains only four cards that are payoffs for this pipeline.** Goliath Daydreamer, Spinerock Tyrant and Enraged Flamecaster ×2 — that is the whole set, and it put P(seeing a payoff by turn 7) at 0.68 against a 0.75 threshold. Sting-Slinger is in the list as functional redundancy, not because it has impulse text; it is the honest patch for a genuinely thin colour. It was trimmed from ×2 to ×1 once the second copy started costing instant/sorcery density.
2. **There is a floor at roughly 14 instants and sorceries of 23.** Below that the Daydreamer stops compounding — the bank fills too slowly to have anything worth free-casting on turn 5. Any swap you make into this list should keep that count intact. It is the single most important number in the deck.

### THE HONEST WEAKNESSES

**A dead Daydreamer means a stranded bank, not a recoverable one.** Its "whenever **this creature** attacks" is the only clause in red that can cast a dream-countered exile. If it is answered, every card banked under it is gone for the game. The deck survives that because four of the five payoff copies win without it — but the card advantage does not come back.

**Enchantments are unanswerable.** Zero red cards in this cube can destroy or exile an enchantment; 21 enchantments exist (8.1%). No fix in colour.

**The rare budget is fully spent on the maindeck.** All five rare/mythic slots are Goliath Daydreamer, Spinerock Tyrant, End-Blaze Epiphany, Soul Immolation and Scuzzback Scrounger. The sideboard has none. If you want Lavaleaper (which would double a 17-Mountain mana base) or Kirol, Attentive First-Year (which copies Daydreamer's attack trigger for a *second* free cast), something in that five has to come out.

### THE MANA BASE IS A FEATURE

17 basic Mountains, all untapped, is the best mana in this cube. Every nonbasic dual except the five shocks enters tapped, and the two shocks that produce red — Blood Crypt and Steam Vents — cost 2 life for zero fixing benefit in a deck with 26 red pips and no off-colour cards. Worse, neither carries the **Basic** supertype, so every copy taken is invisible to Kulrath Zealot's "search your library for a basic land card." A 100%-basic mana base is what makes a six-drop into a two-mana land search.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:4  2:5  3:9  4:2  5:2  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.1: Goliath Daydreamer@0.7, Spinerock Tyrant@0.8, Enraged Flamecaster@0.8, Enraged Flamecaster@0.8) → p=0.78 (need ≥ 0.75)
  PASS  enabler: 18 copies (effective 17: Sizzling Changeling@0.8, Sizzling Changeling@0.8, End-Blaze Epiphany@0.7, Soul Immolation@0.7) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 60%  T2 92%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Soul Immolation, Boulder Dash, Spinerock Tyrant
  OK        single_large_threat: Feed the Flames, Sear, End-Blaze Epiphany
  CONCEDED  noncreature_permanents: Mono-red has zero enchantment answers in this cube - the dossier's enchantment_answers list is G, UG and W only - so the 21 enchantments (8.1%) are unanswerable in these colours with no fix available. Artifacts are answerable: Giantfall is the only mono-red artifact removal and sits in the sideboard x2, because artifacts are 11 cards (4.2%) and a maindeck slot would be blank in most matchups.
  CONCEDED  stack: Mono-red has no counterspells in this cube, and the counted reality is that only 2 counterspells exist cube-wide (0.7%) - the smallest threat class measured. Hexing Squelcher was cut from the sideboard in the Phase 9 repair precisely because spending 1 of only 5 rare slots on a 0.77% class was blocking pipeline cards from the maindeck. The class is conceded outright rather than answered.
  CONCEDED  graveyard: The maindeck concedes graveyard interaction. Rooftop Percher x2 is the sideboard answer and is the only graveyard hate mono-red can cast; at {5} it is too slow to maindeck against a turn-7 plan that wants every early slot spent on cheap spells to bank under Goliath Daydreamer. The class is real and large: 39 cards, 15.0% density.
```
_No WARN-tier flags were raised; all four structural checks passed._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Surplus lands become damage through Sting-Slinger ('{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent'), a mana-only outlet needing no card from hand, and Kulrath Zealot at mana value 6 is a card that only gets castable with excess lands. Burning Curiosity x2 converts a flooded turn into two or three fresh cards off the top, and Scuzzback Scrounger's Treasure means a flooded turn can still double-spell. CORRECTION after the grill: an earlier draft claimed Soul Immolation 'gets BETTER with excess lands' - false, its X is capped by 'the greatest toughness among creatures you control' and takes no extra mana. That clause is struck. |
| `screw` | mitigation | All 17 lands are basic Mountains and every one enters untapped, so there is no tapped-land tempo loss anywhere in the deck. 9 of the 23 nonland cards cost 1 or 2 mana. Kulrath Zealot's 'Basic landcycling {1}{R}' turns the deck's most expensive card into a two-mana land search on a screwed hand, and the land-property census confirms it is live off 17 of 17 lands. The goldfish check reports 87% keepable hands and 88% on three lands by turn 3. |
| `decapitation` | mitigation | Goliath Daydreamer is a singleton by rare limit and IS the named engine, so this is the deck's most exposed mode. The mitigation is that the payoff suite is 5 copies, not 1, and 3 of those 5 need no attack at all: Enraged Flamecaster x2 ('Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent') and Sting-Slinger x1 ('{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent'). Spinerock Tyrant x1 is the fifth copy and closes as a 6/6 flier. Soul Immolation ('deals X damage to each opponent') also wins without attacking but is roled Interaction and is deliberately NOT counted among the 5 payoff copies. Losing the Daydreamer costs the compounding, not the win condition. |
| `gas-out` | mitigation | This is the mode the deck is built to beat. Net-positive or self-replacing cards: Impolite Entrance x2 ('Draw a card'), Tweeze x2 ('You may discard a card. If you do, draw a card'), Burning Curiosity x2 (exile 2-3 and play them), Sizzling Changeling x2 (exile 1 on death), Kulrath Zealot x1 (exile 1 on entry), End-Blaze Epiphany x1 (exile power-many) = 10 of 23 nonland cards. On top of that the bank itself is a growing second hand that cannot be discarded, countered or milled. |
| `raced` | accepted | The deck's fastest realistic clock starts on turn 4 with Goliath Daydreamer, and it has zero mainboard lifegain. Mitigating would mean maindecking Brambleback Brute (a 4/5 blocker) and Flame-Chain Mauler over spells - but every spell cut is a card removed from the bank, and the bank is the win condition; the Phase 9 grill demonstrated this concretely when the earlier Sting-Slinger x2 build had pushed instants and sorceries down to 13 of 23 and the repair had to buy one back. The cost is therefore the deck's identity, so it is accepted, and the answer is boarded: Brambleback Brute x2 comes in against fast aggro. |
| `disruption-fizzle` | mitigation | REWRITTEN after the grill, which correctly refuted the earlier version. The earlier entry claimed the bank survives disruption because banked cards are 'not in hand to be discarded and not on the stack to be countered'. That is true and inert: Goliath Daydreamer's only access clause is 'Whenever THIS CREATURE attacks, you may cast a spell from among cards you own in exile with dream counters on them', and it is the only card in the red-legal pool that can cast a dream-countered exile. If the Daydreamer is answered, the bank survives as cards that can never be cast again. The honest mitigation is therefore not the bank at all - it is that this deck has no critical turn to interact with. The plan is a per-turn loop, not a combo turn, so a counterspell or a removal spell on any single turn costs one free cast rather than the game; and 4 of the 5 payoff copies (Enraged Flamecaster x2, Sting-Slinger x1, Spinerock Tyrant x1) each produce damage with the Daydreamer already dead and the bank already stranded. What disruption takes from this deck is card advantage, not a win condition. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Flaring Cinder | 'When this creature enters and whenever you cast a spell with mana value 4 or greater, you may discard a card. If you do, draw a card.' RAISED BY THE GRILL as a missed sweep entry, and it was genuinely missed. It shares Enraged Flamecaster's trigger condition exactly - 2 of the red-legal pool cards carry that trigger and this deck plays 1 of the 2. But it does NOT falsify the 'only four payoffs' premise, because it shares the trigger and not the EFFECT: Flamecaster deals 2 damage to each opponent, Flaring Cinder loots. A loot is an enabler, not a payoff, so substituting it for Sting-Slinger would drop the payoff count back to 4 and re-fail the assembly gate at p=0.68. It is a reasonable card for the Engine slot, but the Engine slot is already 4.8pp over band. |
| Shadow Urchin | 'Whenever a creature you control with one or more counters on it dies, exile that many cards from the top of your library. Until your next end step, you may play those cards.' CORRECTION: an earlier draft excluded this on the ground that 'mono-red has no token maker to feed it'. That statement is FALSE - Sourbread Auntie ('create two 1/1 black and red Goblin creature tokens'), Elder Auntie ('create a 1/1 black and red Goblin creature token') and Stalactite Dagger ('create a 1/1 colorless Shapeshifter creature token') are all red-legal token makers. The true reason it stays out: Shadow Urchin needs counter-laden creatures to DIE, and this deck has no sacrifice outlet and runs no token makers, so feeding it would mean importing the whole token package - which is Deck A, not a one-card swap. It is also a rare against a budget at 5 of 5. |
| Gristle Glutton | '{T}, Blight 1: Discard a card. If you do, draw a card.' RAISED BY THE GRILL as a missed sweep entry. It is the only mana-free repeatable card filter among the red-legal pool cards, and a 1/3 body. The maindeck problem it was offered against - 0 creature copies at mana value 2 or less - was instead solved by Scuzzback Scrounger, which supplies a body at the same cost AND the Treasure that pays for impulsed cards. Gristle Glutton is in the sideboard for grindy matchups where repeatable filtering beats a Treasure. |
| Lavaleaper | 'All creatures have haste. Whenever a player taps a BASIC land for mana, that player adds one mana of any type that land produced.' The land census confirms all 17 lands qualify, so it would double this deck's mana. CORRECTED after the grill, which correctly objected that the earlier reason led with 'the effect is symmetric' - a card-in-isolation property, not a count. The counted reason: the mana half accelerates the opponent as much as you, and the haste half is worth one turn on one creature, because Goliath Daydreamer's free-cast trigger fires only on ITS OWN attack - so of the 9 creature cards, global haste changes the clock of at most the 1 that matters. Rare budget is also at 5 of 5. |
| Champion of the Path | 'Whenever another Elemental you control enters, it deals damage equal to its power to each opponent.' Elementals among the 9 mainboard creature cards: Enraged Flamecaster x2, Kulrath Zealot x1 = 3. CORRECTED after the grill: an earlier draft called its behold-and-exile cost 'permanent card disadvantage', which its own third line refutes - 'When this creature leaves the battlefield, return the exiled card to its owner's hand.' The valid remaining ground is the rare budget at 5 of 5, plus a 3-of-9 Elemental denominator. |
| Boldwyr Aggressor | 'Double strike. Other Giants you control have double strike.' Goliath Daydreamer is a Giant Wizard, so this would make the engine a 4/4 double striker. But Giants number exactly 1 of the 9 mainboard creature cards, and at {3}{R}{R} it would be a third card at mana value 5. |
| Lasting Tarfire | 'At the beginning of each end step, if you put a counter on a creature this turn, this enchantment deals 2 damage to each opponent.' Cards in this list that place a counter on a creature: Cinder Strike (optional blight), Burning Curiosity x2 (optional blight), Soul Immolation (mandatory blight X), Sting-Slinger (blight as an activation cost), Scuzzback Scrounger (blight for a Treasure), Spinerock Tyrant (wither) = 7 of 23 nonland cards, several of them only on the turn you happen to cast them. |
| Squawkroaster | 'Double strike. Vivid - Squawkroaster's power is equal to the number of colors among permanents you control.' In a mono-red deck that number is 1, making it a 1/4 double striker for four mana. |
| Kirol, Attentive First-Year | 'Tap two untapped creatures you control: Copy target triggered ability you control. Activate only once each turn.' RAISED BY THE GRILL as a missed sweep entry. Copying Goliath Daydreamer's attack trigger would mean two free casts per attack, which is the single highest-ceiling line available. Excluded on two counts: it is {1}{R/W}{R/W}, so it is castable on all-red, but it is a RARE against a budget at 5 of 5; and its cost taps two untapped creatures in a deck with 9 creature cards whose plan requires attacking with them. |
| Sanar, Innovative First-Year | 'reveal cards from the top of your library until you reveal X nonland cards, where X is the number of colors among permanents you control... You may cast the exiled cards this turn.' Hybrid {2}{U/R}{U/R} so it is castable on RR, and it is a genuine recurring impulse engine - but X is 1 in a mono-red deck, making it a four-mana 'exile one red card and cast it this turn'. It anchors Deck C, where the colour count is the point. |
| Warren Torchmaster | 'At the beginning of combat on your turn, you may blight 1. When you do, target creature gains haste until end of turn.' A free repeating haste enabler for Goliath Daydreamer, but the blight is a real cost here: with no tokens, the counter goes on one of this deck's 10 creature cards, and Impolite Entrance grants the same haste while also drawing a card. |
| Brambleback Brute | 'This creature enters with two -1/-1 counters on it. {1}{R}, Remove a counter from this creature: Target creature can't block this turn.' A 4/5 for three is the best raw body in mono-red, but it casts no spells and banks nothing; maindecking it would widen the Threats slot that the assembly repair had already pushed to 26.1%. It is in the sideboard x2 against fast aggro. |
| Goatnap | 'Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn.' A three-mana sorcery that banks under Goliath Daydreamer and is a fine free-cast, but with no sacrifice outlet in the deck the stolen creature simply goes back, so it buys one attack rather than a two-for-one. |
| Reckless Ransacking | 'Target creature gets +3/+2 until end of turn. Create a Treasure token.' Banks itself and leaves mana behind, but it is a combat trick in a deck with only 10 creature cards, and Impolite Entrance at one mana already fills the pump-plus-value slot while granting the haste Goliath Daydreamer needs. |
| Collective Inferno | 'Convoke. As this enchantment enters, choose a creature type. Double all damage that sources you control of the chosen type would deal.' Choosing Elemental would double Enraged Flamecaster x2's pings, but it is a five-mana rare that affects nothing the turn it lands, and the rare budget is at 5 of 5. |
| Meek Attack | '{1}{R}: You may put a creature card with total power and toughness 5 or less from your hand onto the battlefield. That creature gains haste. At the beginning of the next end step, sacrifice that creature.' A mythic whose power/toughness cap excludes Goliath Daydreamer (4/4 = 8), Spinerock Tyrant (6/6 = 12), Flamekin Gildweaver (4/3 = 7) and Kulrath Zealot (6/5 = 11) - it can only cheat in Enraged Flamecaster (3/2) and Sizzling Changeling (3/2), 4 of the 10 creature cards, and then kills them. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color.' Acceleration toward the {R}{R} turns, but it taps the creature Goliath Daydreamer's plan needs attacking, and a mono-red deck with 17 untapped Mountains has no colour problem for it to solve. |
| Boneclub Berserker | 'This creature gets +2/+0 for each other Goblin you control.' Goblins in this list number 2 of the 10 creature cards (Sting-Slinger x2), so it would be a 4/4 for four at best. |
| Sourbread Auntie | 'When this creature enters, you may blight 2. If you do, create two 1/1 black and red Goblin creature tokens.' Raised by the grill as a missed sweep entry. It is a genuine red token maker (which is why the Shadow Urchin exclusion reason had to be corrected), but this deck has no aristocrats payoff and no sacrifice outlet, so two 1/1 bodies are just two 1/1 bodies at {2}{R}{R}, and it casts no spell so it banks nothing under Goliath Daydreamer. |
| Chaos Spewer | 'When this creature enters, you may pay {2}. If you don't, blight 2.' Raised by the grill as a missed sweep entry, and it is the largest body castable at mana value 3 in red (5/4). Excluded because it banks nothing, triggers nothing, and the deck's mana-value-3 slot is already 9 of 23 cards deep - the grill's own curve finding pushed this build toward cheaper cards, not another three-drop. |
| Eclipsed Flamekin | 'When this creature enters, look at the top four cards of your library. You may reveal an Elemental, Island, or Mountain card from among them and put it into your hand.' Raised by the grill as a missed sweep entry. Castable on RR via hybrid. Honest count: 20 of the other 39 cards are hits, but 17 of those 20 are Mountains, so it is overwhelmingly a land-finder in a deck that already built exactly to its 17-land target. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.23 adj [MV 2.83 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard (ecl), 277 unique cards
[PASS] copy_limits: commons/uncommons max 2, rares/mythics max 1 - verified by cube_search.get_max_copies against every card in mainboard + sideboard: PASS
[PASS] rare_mythic_budget: 5 of the allowed 5 used, ALL MAINBOARD: Goliath Daydreamer, Spinerock Tyrant (mythic), End-Blaze Epiphany, Soul Immolation (mythic), Scuzzback Scrounger. The sideboard contains no rares - Hexing Squelcher was cut in the Phase 9 repair because spending 1 of only 5 rare slots on a threat class of 2 cards (0.77% of the cube) was blocking a pipeline card from the maindeck.
[PASS] basics: Mountain x17 are format-supplied and exempt from copy limits
[PASS] colour_legality: every nonland card returns a usable mode from effective_cost.best_mode(card, ['R'], []): PASS. All 20 distinct nonland cards resolve as a normal 'cast'; every cost is red-only or generic (Rooftop Percher is {5} colourless).
[PASS] splash: splash_colors = [], splash_candidates = [] - no splashed cards; the deck is strictly mono-red
```
