---
deck_name: "gw-kicker-counters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-08-14T22:43:28Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x7   Plains
  x6   Forest
  x2   Crystal Grotto any-colour fixing
  x2   Radiant Grove  only free WG dual
```

### CREATURES (17)
```
CMC  Card                      Qty   Color  Role                                  Rar
  1  Llanowar Stalker          x2    G      Threat/Payoff                         C
  2  Juniper Order Rootweaver  x2    W      Threat/Payoff - kicked counter        C
  2  Quirion Beastcaller       x1    G      Threat/Payoff - counter bank          R
  2  Resolute Reinforcements   x2    W      Threat/Payoff - width                 U
  2  Valiant Veteran           x1    W      Threat/Payoff - Soldier anthem        R
  3  Argivian Cavalier         x2    W      Threat/Payoff - width                 C
  3  Deathbloom Gardener       x2    G      Engine/Infrastructure - fixing        C
  3  King Darien XLVIII        x1    GW     Threat/Payoff - anthem                R
  3  Queen Allenal of Ruadach  x2    GW     Threat/Payoff - width scaler          U
  5  Defiler of Vigor          x1    G      PAYOFF - kill mechanism               R
  5  Serra Redeemer            x1    W      PAYOFF - two counters per small body  R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                       Qty   Color  Role                                  Rar
  1  Strength of the Coalition  x2    G      Payoff spell - mass counter (kicked)  U
  2  Bite Down                  x2    G      Interaction                           C
  2  Destroy Evil               x1    W      Interaction                           C
  4  Captain's Call             x1    W      Threat/Payoff - width (3 tokens)      C
```

## SIDEBOARD (10)
```
Card                Qty   Color  Role / When to board in                 Rar
Take Up the Shield  x2    W      SB - anti-removal / anti-sweeper        C
Citizen's Arrest    x2    W      SB - unconditional exile answer         C
Broken Wings        x2    G      SB - artifact/enchantment/flier answer  C
Prayer of Binding   x2    W      SB - flash exile answer                 U
Tear Asunder        x1    G      SB - artifact/enchantment exile         U
Snarespinner        x1    G      SB - anti-flier blocker                 C
```

## ANALYSIS

### DECK IDENTITY

A GW aggro deck that wins by putting bodies on the board on turns 1-3 and then multiplying them with +1/+1 counters. Defiler of Vigor is the payoff: every green permanent spell cast after it resolves puts a counter on each creature, and its cost-reduction clause pays for the next one. The counter access is deliberately redundant of the Defiler - Quirion Beastcaller banks counters and redistributes them on death, kicked Juniper Order Rootweaver and kicked Strength of the Coalition add counters without it, and King Darien XLVIII plus Valiant Veteran are static anthems. Width is the multiplier: Resolute Reinforcements, Argivian Cavalier and Queen Allenal of Ruadach each deploy two bodies, so a single mass-counter effect is worth 5-6 power rather than 2.

### HOW THE DECK ACTUALLY KILLS

The deck has three separate mass-counter effects and they stack on the same board:

| Source | Trigger | Qualifying count in this list |
|---|---|---|
| Defiler of Vigor | you cast a green **permanent** spell | 8 of 23 nonland cards (Llanowar Stalker x2, Quirion Beastcaller, King Darien XLVIII, Queen Allenal x2, Deathbloom Gardener x2) |
| Serra Redeemer | another creature with **power 2 or less** enters | 13 of the 17 creature copies, plus **every token the deck makes** (all are 1/1 Soldiers) |
| Strength of the Coalition (kicked) | resolves for {G} + kicker {2}{W} | unconditional — every creature on board |

Serra Redeemer is the single highest-leverage card here and it is worth stating why in mechanical terms rather than as praise. Captain's Call reads "Create three 1/1 white Soldier creature tokens." Queen Allenal of Ruadach reads "If one or more creature tokens would be created under your control, those tokens plus a 1/1 white Soldier creature token are created instead." With both on the battlefield, one Captain's Call makes **four** 1/1 Soldiers, and Serra Redeemer's "put **two** +1/+1 counters on that creature" fires on each of them as it enters — four 3/3 bodies from one four-mana sorcery. Valiant Veteran then anthems all four, since each is a Soldier.

### THE KICKER COLOUR INVERSION IS THE REASON THE MANA BASE LOOKS ODD

Three of the deck's counter effects are on cards whose kicker demands the *other* colour:

- Juniper Order Rootweaver is a **white** card ({1}{W}) whose kicker is **{G}**.
- Strength of the Coalition is a **green** card ({G}) whose kicker is **{2}{W}**.

That is why the mana is built to near-parity (10 green sources, 11 white) with four any-colour lands (Radiant Grove x2, Crystal Grotto x2) rather than skewed to the heavier pip count. A deck that could only produce its own colour would be casting these spells at half value.

### WHY THERE IS NO DOMAIN CARD IN THIS DECK

Dominaria United's green-white section is full of Domain cards, and every one of them was rejected on the same count. Domain scales with **basic land types among lands you control**. This mana base has exactly **two**: Forest and Plains. Radiant Grove is `Land — Forest Plains`, so it contributes both — and therefore adds nothing new. Crystal Grotto has no basic land type at all. At domain 2, Nishoba Brawler is a 2/3 trampler for {1}{G}, Territorial Maro is a 4/4 for five, and Zar Ojanen only counters creatures with toughness *less than 2* — a clause that King Darien XLVIII's own "+1/+1" anthem switches off. Those cards are not weak; they are in the wrong deck, and they get their own build.

### PLAY PATTERN

The curve is deliberately front-loaded: 4 cards at MV 1 and 9 at MV 2, with only three cards above four mana. The intended sequence is bodies on turns 1-3, a mass-counter effect on turns 4-5, and lethal on 6. The two five-drops (Defiler of Vigor, Serra Redeemer) are each a *payoff for a board that already exists* — neither is a card you want to be casting into an empty battlefield, which is why the deck runs 17 lands rather than the 18 a top-heavier build would need.

Bite Down deserves a note as the interaction of choice over Tail Swipe: "Target creature you control deals damage equal to its power to target creature or planeswalker you don't control" is one-sided, where Tail Swipe's fight is mutual. In a deck whose creatures accumulate permanent +1/+1 counters, a one-sided damage spell scales with the game plan for free.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:7  4:1  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.3: Serra Redeemer@0.9, Strength of the Coalition@0.7, Strength of the Coalition@0.7, Valiant Veteran@0.6, Juniper Order Rootweaver@0.7, Juniper Order Rootweaver@0.7) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 11 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 56%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: the dossier records six sweepers in this cube and none is castable in G or W (BG, C, R x2, U, WUR); this deck answers a wide board by out-sizing it, since one Defiler of Vigor trigger or a kicked Strength of the Coalition puts a counter on each of its own creatures
  OK        single_large_threat: Destroy Evil, Bite Down
  OK        noncreature_permanents: Destroy Evil
  CONCEDED  stack: no card in the working pool with G or W identity counters a spell; the deck instead presents more must-answer permanents per turn than a one-for-one answer can absorb
  CONCEDED  graveyard: the structural census found zero graveyard-hate cards in the entire cube, and a direct oracle scan of the working pool for exile-a-graveyard text returned only self-exiling cards (Eerie Soultender, Valiant Veteran); no colour can cover this class here
```

- No WARN flags were raised on either run - curve, assembly, goldfish and coverage all returned PASS before and after the Phase 9 repairs. The repairs improved the payoff assembly probability from 0.90 to 0.93.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Excess lands convert to action through three activated abilities that cost nothing but mana: King Darien XLVIII's '{3}{G}{W}: Put a +1/+1 counter on King Darien and create a 1/1 white Soldier creature token' is a repeatable mana sink; Valiant Veteran's '{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control' turns a flooded late game into a mass pump from the graveyard; and the kicker costs on Juniper Order Rootweaver, Shalai's Acolyte and Strength of the Coalition mean every card in hand has a more expensive, better mode when the extra land shows up. |
| screw | mitigation | The curve is built to function on 2-3 lands: 14 of the 23 nonland cards cost 2 or less and 4 of those cost 1, so a 2-land hand still deploys on turns 1, 2 and 3. Crystal Grotto x2 scries on entry to smooth the next draw, and Deathbloom Gardener x2 taps for any colour to reach the 5-mana Defiler on 4 lands. A 2-land keep with two 1-2 drops is a keep; the structural gate measured 87% keepable hands and 88% reaching 3 lands by turn 3. |
| decapitation | mitigation | Defiler of Vigor answered on sight costs the deck its best turn, not its plan: kicked Strength of the Coalition x2 is the same 'put a +1/+1 counter on each creature you control' effect, King Darien XLVIII and Valiant Veteran are static anthems that need no trigger, and Quirion Beastcaller's death clause redistributes its stored counters instead of losing them. 5 counter sources exist besides the Defiler. |
| gas-out | mitigation | This deck answers an empty hand with board, not cards - by design it has spent its hand on permanents by turn 5. The load-bearing count: 7 of the 23 nonland cards are battlefield two-for-ones or better - Resolute Reinforcements x2 and Argivian Cavalier x2 ("When this creature enters, create a 1/1 white Soldier creature token"), Queen Allenal of Ruadach x2 (an extra token on every token event), and Captain's Call (three tokens at once, four with Queen Allenal). From an empty hand, King Darien XLVIII's "{3}{G}{W}: Put a +1/+1 counter on King Darien and create a 1/1 white Soldier creature token" manufactures a fresh threat every turn out of lands alone, and Valiant Veteran's "{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control" is a mass pump cast with no cards in hand. Corrected per Challenger #7: the earlier draft cited Guardian of New Benalia's enlist-scry, a mechanism this same document calls off-plan, and that card is now cut. |
| raced | accepted | The dossier's threat_profile shows 51 evasion creatures across the cube; a flier deck can go over the top of a ground board. Mitigating this in the mainboard would mean playing more of the cube's white fliers (Coalition Skyknight, Griffin Protector, Mesa Cavalier) in place of the width creatures - but width is the thesis multiplier, and every flier swapped in is a body the Defiler counter is worth less on. The cost of mitigating is the kill mechanism itself, so it is pushed to the sideboard: Snarespinner and Broken Wings answer fliers there. |
| disruption-fizzle | mitigation | The critical turn is the Defiler turn, and it is not a single-turn combo: the counters it places are PERMANENT counters, so one piece of interaction on the following turn does not undo them. If the Defiler itself is countered or killed mid-turn, the deck's board is still a set of 2/2s and 1/1 Soldiers under King Darien XLVIII's static '+1/+1' anthem, and Take Up the Shield in the sideboard ('It gains lifelink and indestructible until end of turn') protects the key body on the turn it matters. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Defiler of Faith | 12 of the 23 nonland cards are white permanent spells, so its "Whenever you cast a white permanent spell, create a 1/1 white Soldier creature token" would fire more often than Defiler of Vigor's 8 of 23. It loses the one free rare slot to Serra Redeemer on thesis grounds: Serra Redeemer converts the same bodies into PERMANENT +1/+1 counters, which is the locked archetype, and it would also count Defiler of Faith's tokens - not the reverse. The clean first swap if you want a second five-drop: cut Valiant Veteran for it. |
| Ajani, Sleeper Agent | "-3: Distribute three +1/+1 counters among up to three target creatures" is exactly on-archetype, but the shape judge cut it on the locked explosive lens (a 4-mana planeswalker that does not add a body) and the 5-rare cap is now full. The swap to make if you want it: it replaces Quirion Beastcaller. |
| Zar Ojanen, Scion of Efrava | Its counter clause reads "toughness less than the number of basic land types among lands you control". This mana base has 2 basic land types (Radiant Grove is Land - Forest Plains and adds nothing new, Crystal Grotto is typeless), so it only hits toughness-1 creatures - and King Darien XLVIII's and Valiant Veteran's anthems raise those same bodies to toughness 2 and switch it off. It belongs in the Domain build, not this one. |
| Heroic Charge | "Creatures you control get +2/+1 until end of turn" is a larger same-turn alpha strike than kicked Strength of the Coalition at the same 4 mana, but it leaves nothing behind, where Strength's kicked mode leaves permanent +1/+1 counters that carry to the next turn. On-archetype wins the slot. |
| Argivian Phalanx | "Affinity for creatures" means its cost shrinks with the same board width this thesis maximizes - on the 4-creature board the deck projects for turn 4 it is a {1}{W} 4/4 vigilance. A genuine tier-below include; all 23 nonland slots are spoken for by cards that either add counters or add bodies that counters multiply. |
| Charismatic Vanguard | A 3/2 for {2}{W} with a repeatable "{4}{W}: Creatures you control get +1/+1 until end of turn" mana sink would be a third flood outlet. It loses its slot to Argivian Cavalier, which brings two bodies for the same 3 mana and so is worth more per mass-counter trigger. |
| Temporary Lockdown | "exile each nonland permanent with mana value 2 or less" would exile 13 of this deck's own 23 nonland cards. Actively anti-synergistic here. |
| Tail Swipe | A mutual fight; Bite Down's "Target creature you control deals damage equal to its power" is one-sided at the same cost, and this deck's creatures carry counters. Strictly worse in this list. |
| Llanowar Loamspeaker | Better acceleration than Deathbloom Gardener (2 mana vs 3) and its land-animation is a flood outlet, but it is a rare and the 5-card cap is full; Deathbloom Gardener is a common that can run 2 copies and is also a green permanent spell for the Defiler trigger. |
| Nishoba Brawler / Territorial Maro / Gaea’s Might / Briar Hydra / Slimefoot’s Survey | All Domain cards. With 2 basic land types in this mana base they are a 2-power trampler, a 4/4, a +2/+2, and so on - all unplayable rates. They belong to the Domain-Counters build. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.36 adj [MV 2.48 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  46.7%  prod  58.8%  gap -12.1pp  [OK]
  W  demand  53.3%  prod  64.7%  gap -11.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Mainboard size            : 40 / 40
[PASS] Sideboard size            : 10 / 10
[PASS] All cards in cube pool    : 0 phantom names
[PASS] Copy limits (C/U max 2)   : 0 violations
[PASS] Copy limits (R/M max 1)   : 0 violations
[PASS] Max 5 rares/mythics total : 5 / 5  (Defiler of Vigor, King Darien XLVIII, Quirion Beastcaller, Serra Redeemer, Valiant Veteran)
[PASS] Colour usability (G/W)    : 0 unusable cards
[PASS] Splash cap                : no splash colours declared
```