---
deck_name: "gr-tannuk-lander-burn"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GR"
format: "40-card"
built_at: "2026-08-03T16:05:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
7x Forest                   Basic - Lander fetch target
7x Mountain                 Basic - Lander fetch target
2x Wooded Ridgeline         GR dual, enters tapped
```

### CREATURES (12)

```
CMC  Card                     Qty   Color  Role                                       Rar
  2  Biotech Specialist       x1    GR     Payoff: 2 dmg per artifact sac             R
  2  Remnant Elemental        x2    R      Payoff: landfall pump, reach               U
  3  Galactic Wayfarer        x2    G      Enabler: body + Lander                     C
  3  Tannuk, Memorial Ensign  x2    GR     PRIMARY PAYOFF                             U
  3  Weftstalker Ardent       x2    R      Payoff: ping per ETB                       U
  4  Icetill Explorer         x1    G      Enabler: extra land drop                   R
  4  Seedship Agrarian        x1    G      Enabler: Lander on tap                     U
  5  Nova Hellkite            x1    R      Evasive threat                             R
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                     Qty   Color  Role                                       Rar
  1  Plasma Bolt              x2    R      Interaction / reach                        C
  1  Sami's Curiosity         x2    G      Enabler: MV1 Lander                        C
  2  Invasive Maneuvers       x2    R      Interaction                                U
  2  Seedship Impact          x1    G      Interaction: artifact/ench                 U
  3  Lithobraking             x2    R      Enabler + sweeper                          U
```

### OTHER SPELLS (3)

```
CMC  Card                     Qty   Color  Role                                       Rar
  3  Larval Scoutlander       x2    G      Enabler: two land ETBs                     U
  5  Eusocial Engineering     x1    G      Payoff: Robot per landfall                 U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                    Rar
Drill Too Deep           x2    R      Instant artifact kill vs 74-artifact cube  C
Seedship Impact          x1    G      2nd/3rd artifact-enchantment answer        U
Dauntless Scrapbot       x2    C      Graveyard exile vs 31 GY cards             U
Shattered Wings          x2    G      Artifact/ench/flier; vs evasion decks      C
Orbital Plunge           x2    R      6 dmg + Lander vs big creatures            C
Territorial Bruntar      x1    R      Grind matchups: impulse per landfall       U
```

## ANALYSIS

### DECK IDENTITY

Gruul landfall burn-aggro. Lander tokens turn spare mana into extra land-ETBs at instant speed, and Tannuk, Memorial Ensign converts each land-ETB into 1 damage to each opponent plus a card on the second trigger each turn. Biotech Specialist adds 2 more damage every time an artifact is sacrificed, and cracking a Lander is exactly that, so one {2} activation is 3 damage with no attack step. Weftstalker Ardent widens the same rail to creatures and artifacts entering, and the combat half is carried by Remnant Elemental, Nova Hellkite and Eusocial Engineering's Robot tokens, all scaling off the same triggers.

### THE TWO DAMAGE RAILS

The Lander token is the whole deck. Its text is `{2}, {T}, Sacrifice this token: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle.` It is an artifact, not a creature, so it has no summoning-sickness restriction — a Lander made this turn can be cracked this turn, at instant speed, on either player's turn.

That single activation touches **two separate trigger conditions**, and the deck is built to be paid on both:

| Trigger condition | What fires | Copies in list |
|---|---|---|
| **A Lander is created** (an artifact you control enters) | Weftstalker Ardent — *"deals 1 damage to each opponent"* | 2 |
| **A Lander is sacrificed** (an artifact is sacrificed) | Biotech Specialist — *"deals 2 damage to target opponent"* | 1 |
| **The fetched land enters** (landfall) | Tannuk ×2 (1 damage each + a card on the 2nd), Remnant Elemental ×2 (+2/+0), Seedship Agrarian (+1/+1 counter), Eusocial Engineering (a 2/2 Robot), Icetill Explorer (mill) | 7 |

The critical distinction, confirmed against oracle text during the grill: **Weftstalker Ardent does not trigger on lands.** Its condition is *"another creature or artifact you control enters"* — a land is neither. It fires on the Lander's *creation*, one step earlier in the chain, which is why it survives an opponent who answers every landfall payoff.

A single {2} activation with Tannuk and Biotech Specialist both online is **3 damage to the face with no attack step**, and the Lander that produced it already dealt 1 more when it was created if Weftstalker Ardent is out.

### WHY THE MANABASE IS 14/16 BASIC

The Lander reads *"search your library for a **basic** land card"*. "Basic" is a supertype, not a land type — so this cube's ten typed duals (`Land — Mountain Forest`, etc.) **are Forests and Mountains but are not basic land cards** and cannot be fetched. Every nonbasic in the manabase is a land a Lander cannot find.

That constraint drives two decisions and forecloses a third:
- Wooded Ridgeline is held to exactly 2 copies — enough to smooth the {1}{R}{G} Tannuk turn, few enough to keep 14 fetchable basics.
- Stomping Ground, the only untapped-capable G/R dual, is excluded: it is a rare, and a rare slot buys more here as a spell than as a land that Landers still can't find.
- **The "differently named lands" payoffs are off the table.** Fungal Colossus, Survey Mechan and All-Fates Scroll all scale on distinct land names; this list controls exactly **3** (Forest, Mountain, Wooded Ridgeline). Fungal Colossus would be a 5/5 for {3}{G} at four lands — worse than the 3-drops already here. The prior archetype analysis recommended those cards for this cube; against a Lander-forward build they anti-synergize, and the count is why.

### LARVAL SCOUTLANDER IS THE BEST TANNUK TURN

*"you may sacrifice a land or Lander. If you do, search your library for up to two basic land cards, put them onto the battlefield tapped."* Two land ETBs from one card is two Tannuk triggers, which is the **second** trigger clause — so it is 2 damage to each opponent **and a card**, off a 3-mana artifact that is also a Spacecraft (turning Invasive Maneuvers from 3 damage into 5). Sacrificing a Lander to pay for it also triggers Biotech Specialist. 14 of 16 lands are legal fetch targets.

### SEEDSHIP AGRARIAN LOOPS WITH LARVAL SCOUTLANDER

Seedship Agrarian reads *"Whenever this creature **becomes tapped**, create a Lander token."* Attacking taps it. So does Larval Scoutlander's Station ability (*"Tap another creature you control"*), which means the two cards form a sorcery-speed loop that produces a Lander per turn without attacking into a bad board — and simultaneously advances Larval Scoutlander toward its 7+ Flying threshold.

### LITHOBRAKING IS ONE-SIDED HERE

*"Create a Lander token. Then you may sacrifice an artifact. When you do, Lithobraking deals 2 damage to each creature."* Verified against this list: every creature in the mainboard has toughness ≥ 3 (Remnant Elemental 0/4, Biotech Specialist 1/3, Tannuk 2/4, Galactic Wayfarer 3/3, Seedship Agrarian 3/3, Icetill Explorer 2/4, Weftstalker Ardent 2/3, Nova Hellkite 4/5). **0 of 10 creature copies die to it.** The only friendly casualties are Eusocial Engineering's 2/2 Robots. And the artifact you sacrifice to turn it on is the Lander it just made — which triggers Biotech Specialist for 2 more.

### KNOWN EXPOSURES

- **Lifegain.** The cube has 13 lifegain cards and the G/R pool contains no "players can't gain life" effect at all. A deck whose kill is 1- and 2-point non-combat pings has no answer to this. Recorded as unfixable, not as an open slot.
- **The stack.** Zero counterspells and zero hand disruption exist in G/R here.
- **Rare budget.** Only 3 of the permitted 6 rare/mythic slots are used. This is deliberate, not an oversight: the pipeline's load-bearing cards (Tannuk, Weftstalker Ardent, Larval Scoutlander, Lithobraking, Eusocial Engineering, Seedship Agrarian) are all uncommons available at 2 copies, and the G/R rares that remain — Memorial Vault, Mightform Harmonizer, Bioengineered Future, Frenzied Baloth — were each rejected on an oracle-grounded mechanism, listed below. Those three slots are the natural place to iterate if you want more raw power.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:4  2:6  3:10  4:2  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.8: Biotech Specialist@0.8) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11: Larval Scoutlander@0.9, Larval Scoutlander@0.9, Icetill Explorer@0.7, Seedship Impact@0.5) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 55%  T2 90%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Lithobraking
  OK        single_large_threat: Invasive Maneuvers, Plasma Bolt
  OK        noncreature_permanents: Seedship Impact
  CONCEDED  stack: The G/R slice of this cube contains zero counterspells and zero hand disruption; the deck answers stack-based plans with clock speed instead.
  CONCEDED  graveyard: No mainboard graveyard answer; Dauntless Scrapbot x2 ('exile each opponent's graveyard') is a sideboard swap against the cube's 31 graveyard-interaction cards.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands ARE the engine. Every land ETB is 1 damage from each Tannuk (x2), +2/+0 on each Remnant Elemental (x2), a 2/2 Robot from Eusocial Engineering and a +1/+1 counter on Seedship Agrarian. Larval Scoutlander x2 ('sacrifice a land or Lander ... search for up to two basic land cards') converts a surplus land into two more ETBs, and Icetill Explorer lets a second land be played every turn. |
| screw | mitigation | 9 G and 9 R sources against a 15/15 pip split, with only three double-pip cards in the list (Icetill Explorer, Nova Hellkite, Eusocial Engineering), all singletons. Four one-mana plays (Sami's Curiosity x2, Plasma Bolt x2) keep two-land hands functional, and Sami's Curiosity plus Larval Scoutlander fetch basics out of the library to unstick a colour. Goldfish check: 82% keepable, 84% for three lands by turn 3. |
| decapitation | mitigation | Tannuk is a 2-of and it is not the only land-ETB payoff. The assembly gate counts 9 payoff copies (Tannuk x2, Remnant Elemental x2, Weftstalker Ardent x2, Seedship Agrarian x1, Eusocial Engineering x1, Biotech Specialist x1 at 0.8 reliability) for p(seen by T6) = 0.96. Weftstalker Ardent in particular triggers on 'another creature or artifact you control enters' - so it fires when a Lander is CREATED rather than when the land arrives, meaning removing every landfall payoff does not switch it off. |
| gas-out | mitigation | Tannuk draws a card on the second landfall trigger each turn, and 12 enabler copies can supply that second trigger. Icetill Explorer mills lands it then replays from the graveyard ('You may play lands from your graveyard'). Territorial Bruntar in the sideboard converts each landfall into impulse card advantage when a game goes past turn 6. |
| raced | accepted | The deck keeps only 5 interaction cards and none costs less than {1}{R}. Adding cheap interaction would mean cutting Lander generators, which in this pipeline ARE the clock - they are the mana-to-damage converters, not a value engine. The stated cost of accepting this: against the cube's fastest starts the deck relies on Remnant Elemental (0/4 reach) and Lithobraking ('deals 2 damage to each creature', which kills none of this deck's own creatures) as blockers rather than on outracing, and can lose to a curve-out it does not draw removal for. |
| disruption-fizzle | mitigation | The kill is not a single stack. Lander activations are independent {2} activated abilities usable at instant speed and spreadable across turns; countering or removing one costs the opponent a card and delays the clock by one trigger, not the plan. Tannuk's and Weftstalker Ardent's damage are triggered abilities that require no attack step, so combat-based disruption does not interact with the primary damage rail at all. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Memorial Vault (R) | Its free sac outlet does NOT put a land onto the battlefield - only the Lander's own '{2}, {T}, Sacrifice' ability does. Sacrificing a Lander to the Vault deletes the land ETB that 9 payoff copies key off, trading it for one impulse card off a MV-0 artifact. Contested during the grill on exactly these grounds. |
| Mightform Harmonizer (R) | 'Landfall - double the power of target creature you control.' It is the only combat-dependent payoff in a deck whose identity is winning without creatures connecting, and 2 of 12 creature copies (Remnant Elemental x2, 0/4) are null targets since doubling 0 power is 0. |
| Famished Worldsire (M) | {5}{G}{G}{G} is unreachable on a T6 aggro curve, and 'Devour land 3' sacrifices the lands the whole landfall plan is built on. |
| The Endstone (M) | {7} in a deck with avg MV 2.67; its end-step 'your life total becomes half your starting life total' also fights a plan that expects to be racing. |
| Bioengineered Future (R) | A keystone in both rejected sketches. '+1/+1 counter for each land that entered this turn' rewards sequencing lands BEFORE creatures, but the Lander line spends mana on land ETBs at instant speed on the opponent's turn, when no creature is being cast. |
| Fungal Colossus (C) | 'costs {X} less, where X is the number of differently named lands you control.' This mainboard has exactly 3 distinct land names (Forest, Mountain, Wooded Ridgeline) because Landers fetch basics only, so the realistic discount is {3} - a 5/5 for {3}{G} at four lands, worse than the 3-drops already in the list. |
| Survey Mechan (U) / All-Fates Scroll (U) | Both scale on differently named lands: 3 distinct names here. Survey Mechan's ability would cost {7} and All-Fates Scroll would draw 3 for {7}. Off-plan for a T6 clock. |
| Harmonious Grovestrider (U) | 'power and toughness are each equal to the number of lands you control', ward 2. A genuine 5/5-7/7 by turn 5-6, but {3}{G}{G} at MV5 where the list already runs two 5-drops, and it converts nothing to the face. |
| Terrapact Intimidator (U) | 'target OPPONENT may have you create two Lander tokens.' The opponent chooses; against a visibly land-based deck they always decline, so it is a 4/3 for 2 rather than a Lander source. Flagged by the shape judge as a weak keystone. |
| Frenzied Baloth (R) | Uncounterable trample-haste 3/2, but nothing in its text touches lands, Landers or landfall - a generic beater spending one of six rare slots. |
| Pull Through the Weft (U) | 'return up to two target land cards from your graveyard to the battlefield tapped' needs land CARDS in the graveyard; nothing in this shell mills or discards lands (Landers move basics library-to-battlefield), so the land half is usually blank. |
| Kav Landseeker (C) | 4/3 menace plus a Lander that is force-sacrificed at the next end step. Fine, but cut for Weftstalker Ardent, which pings on every creature or artifact entering rather than once. |
| Ruinous Rampage (U) | '3 damage to each opponent' is real reach, but its other mode ('exile all artifacts with mana value 3 or less') is a self-Armageddon here: 12 of 24 nonland cards are or create MV<=3 artifacts. Cut for Seedship Impact, which answers noncreature permanents without hitting our own board. |
| Bombard (C) / Cut Propulsion (U) | Sideboard consideration. Both are single-target creature removal that overlap each other and Invasive Maneuvers; Orbital Plunge deals 6 instead of 4 and leaves a Lander behind, so it took the slots. |
| Stomping Ground (R) | The only untapped-capable GR dual, but it is a rare and would spend one of six rare/mythic slots on a manabase that is already 14/16 basics because Landers fetch basics only. |
| Evendo, Waking Haven (M) / Kavaron, Memorial World (M) | Land-property census members that produce G and R respectively. Excluded at a stated cost: each enters tapped AND consumes one of six rare/mythic slots, which this list spends on spells. |
| Command Bridge (C) | Land-property census member ('{T}: Add one mana of any color'). Excluded at a stated cost: 'sacrifice it unless you tap an untapped permanent you control' taxes the turn it enters, and it is not a basic, so Landers cannot fetch it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     2.67   Ramp cards: 11   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.61 adj [MV 2.67 vs 2.5, 11 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  G  demand  50.0%  prod  56.2%  gap  -6.2pp  [OK]
  R  demand  50.0%  prod  56.2%  gap  -6.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies: PASS
rares/mythics max 1 copy: PASS
max 6 rare+mythic cards across mainboard+sideboard: PASS - 3 used (Biotech Specialist, Icetill Explorer, Nova Hellkite), all mainboard
basic lands unlimited (format-supplied): PASS - 7 Forest, 7 Mountain
all cards from cube mainboard: PASS
colour usability within G/R (effective_cost.best_mode): PASS
splash cap: PASS - no splash colours
```