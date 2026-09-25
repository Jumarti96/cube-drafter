---
deck_name: "r-tannuk-warp-haste"
cube_id: "eoe"
cube_slug: "eoe"
colors: "R"
format: "40-card"
built_at: "2026-08-04T14:55:43Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
16x Mountain                  
```

### CREATURES (18)

```
CMC  Card                      Qty  Color  Role                                                                         Rar
  1  Kavaron Harrier           x2   R      Threat — 1-mana body, extra artifact entry every combat for {2}              U
  2  Oreplate Pangolin         x2   R      Threat — grows on each OTHER artifact entry (9 artifact cards + tokens)      C
  2  Terrapact Intimidator     x2   R      Threat — the OPPONENT chooses: two Landers, or a 4/1                         U
  3  Kavaron Turbodrone        x1   R      Threat — sorcery-speed haste for ONE creature per turn                       C
  3  Possibility Technician    x1   R      Engine — Kavu ETB impulse (8 of 24 Kavu); warp rental at {1}{R}              R
  3  Weftstalker Ardent        x2   R      Payoff — 1 damage per entry; usually HARD-CAST at {2}{R}, not warped         U
  4  Kav Landseeker            x2   R      Threat — 4/3 menace, ETB Lander; the ONE card Tannuk's warp grant discounts  C
  4  Memorial Team Leader      x2   R      Threat — warp {1}{R} anthem beater; covers one combat                        U
  4  Red Tiger Mechan          x2   R      Threat — warp {1}{R} 3/3 with printed haste; rental, recast at {3}{R}        C
  4  Tannuk, Steadfast Second  x1   R      Engine — blanket haste; his warp grant discounts only Kav Landseeker         M
  5  Nova Hellkite             x1   R      Threat — warp {2}{R} flying haste 4/5; rental, recast at {3}{R}{R}           R
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                      Qty  Color  Role                                                                         Rar
  1  Plasma Bolt               x2   R      Interaction/reach — Void 3 damage, and the only burn that can go FACE        C
  2  Invasive Maneuvers        x2   R      Interaction — 3 damage to a CREATURE only; never reach                       U
```

### OTHER SPELLS (2)

```
CMC  Card                      Qty  Color  Role                                                                         Rar
  2  Melded Moxite             x2   R      Infrastructure — artifact entry + filter; NOT a body until {3} is spent      C
```

## SIDEBOARD (10)

```
Card                      Qty  Color  Role / When to board in
Drill Too Deep            x2   R      Destroy a resolved artifact — The only answer to a resolved noncreature permanent available to mono-red, against a cube that is 30% artifacts (74 of 249). Its other mode ('five charge counters on target Spacecraft or Planet you control') is dead here. [C]
Cut Propulsion            x2   R      Kills large creatures and fliers — 'Target creature deals damage to itself equal to its power. If that creature has flying, it deals twice that much damage to itself instead.' The mainboard's damage ceiling is 3, which misses the cube's 31-of-139 creatures at toughness 5+; this scales with the opponent's card instead of the deck's mana. [U]
Dauntless Scrapbot        x2   C      Graveyard exile, two artifact entries — Against the cube's 31 graveyard-interaction cards. Uniquely cheap to board here: the body plus its Lander are two artifact entries, so it feeds Weftstalker Ardent and Oreplate Pangolin rather than costing tempo. [U]
Lithobraking              x1   R      2-damage sweeper (symmetric) — Only when the opponent goes wider than this deck does. 'Deals 2 damage to each creature' kills 10 of this deck's own 24 nonland copies plus every Robot and Lander token. [U]
Ruinous Rampage           x2   R      Reach OR artifact sweep — Mode 1 ('deals 3 damage to each opponent') against decks that stabilise the ground. Mode 2 ('Exile all artifacts with mana value 3 or less') against artifact decks — but note it would exile most of this deck's own board too, so the modes are matchup-exclusive and mode 2 is essentially never boarded alongside a normal draw. [U]
Orbital Plunge            x1   R      6 damage + Lander entry — Against a single large blocker the deck cannot go around. One copy only, because four mana is a turn this deck does not attack. [C]
```

## ANALYSIS

### DECK IDENTITY

Mono-red warp aggro built around a payoff that counts BATTLEFIELD ENTRIES. Weftstalker Ardent — 'Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent' — turns every body, Lander, Robot and Harrier token into damage that no blocker stops, so in this deck body density IS the damage output. Eight of the twenty-four nonland copies carry a printed warp cost, which buys a discounted one-turn rental now (Red Tiger Mechan at {1}{R} with its own haste, Nova Hellkite at {2}{R} with flying and haste) plus a full-price recast from exile later — a second entry, not a free second body. Tannuk, Steadfast Second is the ceiling: 'Other creatures you control have haste' is the clause that matters, applying to every body the deck deploys. His second clause, 'Artifact cards and red creature cards in your hand have warp {2}{R}', is live on 19 of the 24 nonland copies but actually SAVES mana on only two of them (Kav Landseeker, {3}{R} to {2}{R}) — on everything else it is a way to buy an extra entry at a premium, because those cards already warp or hard-cast for the same or less. The mana is 16 untapped Mountains.

### WHICH HALF OF TANNUK IS THE ENGINE

This deck was pitched on the wrong clause, and the correction is the most useful thing in this document.

Tannuk, Steadfast Second reads:

> "Other creatures you control have haste.
> Artifact cards and red creature cards in your hand have warp {2}{R}."

The second clause looks like the payoff — in a cube that is 40% artifacts, granting warp to "artifact cards and red creature cards" touches 43 of the 60 cards a mono-red deck can legally cast. Inside *this* list it is live on 19 of 24 nonland copies. But **warp {2}{R} is three mana**, and almost every card here is already cheaper than that:

| Card | Its own price | Tannuk's grant | Net |
|---|---|---|---|
| Weftstalker Ardent | warp {R} | {2}{R} | worse |
| Kavaron Harrier | {R} | {2}{R} | worse |
| Oreplate Pangolin | {1}{R} | {2}{R} | worse |
| Terrapact Intimidator | {1}{R} | {2}{R} | worse |
| Melded Moxite | {1}{R} | {2}{R} | worse |
| Red Tiger Mechan | warp {1}{R} | {2}{R} | worse |
| Memorial Team Leader | warp {1}{R} | {2}{R} | worse |
| Possibility Technician | warp {1}{R} | {2}{R} | worse |
| Kavaron Turbodrone | {2}{R} | {2}{R} | same |
| Nova Hellkite | warp {2}{R} | {2}{R} | same |
| **Kav Landseeker** | **{3}{R}** | **{2}{R}** | **saves 1** |

**Tannuk's warp grant discounts exactly one card in this deck.** He also cannot grant warp to himself — the ability affects cards *in your hand*.

So the engine is the first clause. *"Other creatures you control have haste"* applies to every body the deck deploys, which is the whole deck. That is what Tannuk does here.

The warp grant is not worthless, but its value is different from a discount: for a payoff that counts **entries**, paying one extra mana to warp a card you could have hard-cast buys you a **second entry later**, when you recast it from exile. That is a real thing to do with spare mana. It is not "two bodies from one card."

### WARP IS A RENTAL, NOT A BUY-ONE-GET-ONE

The reminder text matters: *"Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn."* The recast is at the **printed** price. So a warp card is one discounted body for one turn, plus the option to pay full price later for a second entry.

The sharpest consequence is a play-pattern rule for the deck's own payoff. **Weftstalker Ardent should usually be hard-cast at {2}{R}, not warped for {R}.** Warped on turn 1 it is exiled at that same end step having converted *zero* entries — you paid one mana for nothing. Warp it only when another body is entering the same turn.

Eight of the twenty-four nonland copies carry a printed warp cost: Weftstalker Ardent ×2, Red Tiger Mechan ×2, Memorial Team Leader ×2, Possibility Technician ×1, Nova Hellkite ×1. (Tannuk is *not* one of them — his text contains the string "warp {2}{R}" as a grant to other cards.)

### THE DECK KILLS ON TURN 5 WITHOUT THE MYTHIC

Tannuk is one mythic at one copy: **P(seen by turn 5) ≈ 0.26**. A build that needs him loses roughly three games in four. Here is the verified line with him undrawn, on the play:

| Turn | Play | Cumulative damage |
|---|---|---|
| 1 | Kavaron Harrier ({R}) | 0 |
| 2 | Red Tiger Mechan warped ({1}{R}, **printed haste**), both attack | 5 |
| 3 | Weftstalker Ardent hard-cast ({2}{R}); Harrier attacks | 7 |
| 4 | Memorial Team Leader warp {1}{R} + second Red Tiger Mechan warp {1}{R} — two entries fire Ardent for 2, anthem +1/+0, Red Tiger hasty | 19 |
| 5 | Nova Hellkite warped ({2}{R}, **printed haste**) + second Kavaron Harrier | lethal |

The load-bearing insight is that **haste only buys the turn of arrival.** Bodies deployed on turns 1–4 attack on turns 2–5 whether or not anything grants haste. Printed haste sits on 3 of 24 copies (Red Tiger Mechan ×2, Nova Hellkite ×1), and Kavaron Turbodrone gives it to one creature per turn at sorcery speed. Tannuk raises the ceiling; he is not the floor.

### THE ONE CARD THAT NEVER RUNS OUT

Kavaron Harrier: *"Whenever this creature attacks, you may pay {2}. If you do, create a 2/2 colorless Robot artifact creature token that's tapped and attacking. Sacrifice that token at end of combat."*

For a deck whose payoff counts entries, this is the only card that produces one **from mana alone, every combat, forever** — after the hand is completely empty. One activation is 2 extra attacking power, one Weftstalker Ardent trigger, and (because the token is sacrificed at end of combat) a permanent leaving the battlefield, which switches Plasma Bolt's Void clause on for the postcombat main phase.

One timing note carried over from the B/R build in this same set: that end-of-combat sacrifice is **too late** to enable an attack trigger with an intervening-if. It works fine here because Weftstalker Ardent triggers on the token *entering*, not on anything about combat.

### WHY 75% THREATS IS NOT A MISTAKE

The structural check flags Threats/Payoffs at 66.7% attacking bodies (16 of 24) against an Aggro band of 45–55%. In an ordinary aggro deck that overrun would be a curve problem. Here it is the plan: **Weftstalker Ardent converts each battlefield entry into damage, so body count is not a proxy for the clock — it is the clock.** A build at 50% threats would have roughly two-thirds of the entries and therefore two-thirds of the non-combat damage.

That is a different justification from the one this deck was originally built on ("warp makes each threat two bodies"), which was false: only 7 of the 18 threat copies carry printed warp at all.

### THE MANA IS THE QUIET ADVANTAGE

Sixteen untapped Mountains. Zero tapped lands, zero conditional lands, zero colour screw, 26 red pips against 16 red sources for a 0.0pp gap. Compare the U/R build of this same archetype, which had to accept a tapped-only common as its dual because **this cube contains no U/R shockland at all**. Two of the four decks built from this cube's warp mechanic went mono-coloured, and in both cases the mana was a real part of the argument.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (24 nonland):  1:4  2:8  3:4  4:7  5:1
  WARN  MV 4+ share: share 33% above band maximum 20%
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 11 copies (effective 10.2: Memorial Team Leader@0.6, Memorial Team Leader@0.6) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.2: Terrapact Intimidator@0.6, Terrapact Intimidator@0.6) → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 58%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Mono-red's only one in this pool is Lithobraking, and its 'deals 2 damage to each creature' kills 10 of this deck's 24 nonland copies (Kavaron Harrier 2/1, Oreplate Pangolin 2/2, Terrapact Intimidator 2/1, Weftstalker Ardent 2/3 survives, plus every Robot and Lander token) — a deck whose plan is a wide hasty board cannot maindeck a symmetric sweep of its own board. Lithobraking x1 is in the sideboard for the matchups where the opponent goes wider than this deck does.
  CONCEDED  single_large_threat: The mainboard's damage ceiling is 3 (Invasive Maneuvers x2; Plasma Bolt x2 reaches 3 only with Void live), which does not kill the cube's 31-of-139 creatures at toughness 5 or more. Mitigating means adding Orbital Plunge or Cut Propulsion at 3-4 mana, and this deck runs 16 lands with a warp-effective average mana value of 2.08 specifically so it can deploy two bodies a turn — a four-mana removal spell is a turn it does not attack, which is the whole clock. The plan against a large blocker is to go around it (Kav Landseeker's menace, Nova Hellkite's flying) or over it (Weftstalker Ardent's damage does not care about blockers). Cut Propulsion x2 and Orbital Plunge x1 are in the sideboard.
  CONCEDED  noncreature_permanents: No mainboard artifact or enchantment answer, against a cube that is 30% artifacts. Drill Too Deep x2 ('Destroy target artifact') covers artifacts from the sideboard; enchantments are unanswerable in mono-red, as the cube's only enchantment removal is green. Maindecking Drill Too Deep costs a body, and a body is a battlefield entry, which is what Weftstalker Ardent converts into damage.
  CONCEDED  stack: Mono-red has no counterspell in this pool. The deck is proactive and taps out every turn by design; holding mana up costs an entry, which is one to two damage off the clock. There is no sideboard answer either — this class is simply unavailable to the colour.
  CONCEDED  graveyard: No mainboard graveyard hate. The cube has 31 graveyard-interaction cards but a turn-5 clock outruns most of them. Dauntless Scrapbot x2 ('exile each opponent's graveyard') is in the sideboard and is itself two artifact entries (the body plus its Lander), so boarding it costs no clock.
```

- curve WARN (MV 4+ share 33% vs the 20% Aggro ceiling): the check reads printed mana value. The eight MV-4+ copies are Red Tiger Mechan x2, Memorial Team Leader x2, Kav Landseeker x2, Tannuk x1 and Nova Hellkite x1. Five of those eight carry warp costs of 2-3 and are normally cast at that price (Red Tiger Mechan {1}{R}, Memorial Team Leader {1}{R}, Nova Hellkite {2}{R}), so the warp-effective MV 4+ share is 3 of 24 = 12.5%, inside the band. When Tannuk is on the battlefield Kav Landseeker also gains warp {2}{R} — the one card his grant genuinely discounts — dropping it to 1 of 24. Accepted, with the caveat that a warp-cast body is a one-turn rental: it exiles at the beginning of the next end step and the recast from exile is at full printed price.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Kavaron Harrier x2 is the primary flood sink: 'Whenever this creature attacks, you may pay {2}. If you do, create a 2/2 colorless Robot artifact creature token that's tapped and attacking' converts surplus mana into 2 extra power AND an artifact entry every combat, indefinitely. Melded Moxite x2 turns {3} into a 2/2 Robot. Kavaron Turbodrone x1 gives one creature +1/+1 and haste each turn for a tap. Oreplate Pangolin x2 asks for {1} on each other artifact entry. That is 7 of 24 copies that convert surplus mana, at 16 lands. Every warp card in exile is a second full-price spell. Terrapact Intimidator's Landers are NOT counted here: the opponent chooses whether you get them. |
| screw | mitigation | Every land is an untapped Mountain, so a two-land hand is always two usable mana with zero colour risk (audit gap 0.0pp). Copies costing two or less at the price actually paid: Weftstalker Ardent x2 (warp {R}), Kavaron Harrier x2 ({R}), Plasma Bolt x2 ({R}), Oreplate Pangolin x2 ({1}{R}), Terrapact Intimidator x2 ({1}{R}), Melded Moxite x2 ({1}{R}), Invasive Maneuvers x2 ({1}{R}), Red Tiger Mechan x2 (warp {1}{R}), Memorial Team Leader x2 (warp {1}{R}), Possibility Technician x1 (warp {1}{R}) = 19 of 24 nonland copies, independently recounted and confirmed by the grill. Three of those nineteen (Red Tiger Mechan, Memorial Team Leader, Possibility Technician) are two mana only as self-exiling rentals. 84% of simulated hands reach 3 lands by turn 3, 83% are keepable, 58% have a turn-1 play. |
| decapitation | mitigation | Tannuk is one mythic at about 26% to be seen by turn 5, so the deck is built to not need him — and the Phase 9 grill verified that by reconstructing the clock with him undrawn. Ten of twenty-four copies pay their own way: printed warp on Weftstalker Ardent x2 ({R}), Red Tiger Mechan x2 ({1}{R}), Memorial Team Leader x2 ({1}{R}), Possibility Technician x1 ({1}{R}) and Nova Hellkite x1 ({2}{R}), plus Kavaron Harrier x2 at {R}. Printed haste sits on 3 of 24 (Red Tiger Mechan x2, Nova Hellkite x1), and Kavaron Turbodrone x1 grants it to one creature per turn. The verified on-the-play line without Tannuk: T1 Kavaron Harrier; T2 Red Tiger Mechan warped, attacks (5 cumulative); T3 Weftstalker Ardent hard-cast at {2}{R}, Harrier attacks (7); T4 Memorial Team Leader and a second Red Tiger Mechan both warped — two entries fire Weftstalker for 2, the anthem adds +1/+0, Red Tiger is hasty (19); T5 Nova Hellkite warped with printed haste plus the second Kavaron Harrier — lethal. Haste only buys the turn of arrival; bodies deployed on turns 1-4 attack on turns 2-5 regardless. If Weftstalker Ardent is answered instead, the deck is still 16 attacking bodies under a 16-land untapped manabase. |
| gas-out | mitigation | Stating this precisely, because the label was loose. Genuinely card-positive copies are 3 of 24: Possibility Technician x1 ('exile the top card of your library ... you may play it if you control a Kavu' — Kavu in this list are Tannuk, Memorial Team Leader x2, Kav Landseeker x2, Terrapact Intimidator x2 and itself = 8 of 24) and Melded Moxite x2 ('you may discard a card. If you do, draw two cards' — net plus one). Terrapact Intimidator's half is opponent-chosen and Landers are mana rather than cards, so neither is counted. The real gas-out answer is mechanical rather than card-based: Kavaron Harrier x2 manufactures a fresh attacking body AND a fresh artifact entry from mana alone, every combat, after the hand is completely empty — which is exactly what a payoff that counts entries needs. Eight of twenty-four copies also give a second cast from exile. |
| raced | accepted | Accepted. This deck has 4 of 24 copies of interaction and no lifegain, so a faster or equally fast aggro deck that curves better simply wins the damage race, and a deck with cheap blockers plus a sweeper beats it outright. Mitigating means adding removal or a sweeper, and both cost the thing that makes the deck work: at 16 lands and a warp-effective curve of 2.08, every non-body slot is a turn spent not attacking, and mono-red's only sweeper (Lithobraking) kills 10 of this deck's own 24 nonland copies. The deck's answer to being raced is to be the fastest deck in the set — goldfish turn 5, 58% of hands with a turn-1 play — rather than to interact. Cut Propulsion x2, Orbital Plunge x1 and Lithobraking x1 in the sideboard are the concession. |
| disruption-fizzle | mitigation | There is no critical turn to interact with: damage accrues one body at a time and the deck is happy to spend its whole hand across turns 1-4. A removal spell aimed at a warp body kills something that cost one to three mana and was going to exile itself at end step anyway, and the Weftstalker Ardent trigger has already resolved on entry. The deck holds no mana up, so it never loses a turn to a failed critical action — that is the stated cost of conceding the stack class entirely. The one genuinely fragile line is hard-casting Tannuk at {2}{R}{R} into an open opponent on turn 4; the deck's answer is that it does not need to, because the clock does not route through him. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Weapons Manufacturing | 'Whenever a nontoken artifact you control enters, create a colorless artifact token named Munitions with When this token leaves the battlefield, it deals 2 damage to any target.' The Munitions token is a NONCREATURE artifact, so a sweeper that destroys creatures never causes it to leave the battlefield, and this list has 0 sacrifice outlets that can eat an artifact token — the damage clause is inert. Two independent shape judges reached this conclusion from the text. |
| Anticausal Vestige | Warp {4} means it cannot arrive before turn 4 and its payoff triggers only on LEAVING the battlefield; in a 16-land deck aiming to finish by turn 5 that is a grindy value engine occupying a threat slot. |
| Wurmwall Sweeper | Station is sorcery-speed and grants counters equal to the tapped creature's power, so reaching the 4+ threshold for 'artifact creature' and flying means withholding four total power of attackers from combat. An aggro deck would be paying its clock to buy evasion. |
| Memorial Vault | '{T}, Sacrifice another artifact: Exile the top X cards of your library...' — a four-mana rock that needs an artifact to eat and only pays off the turn after it lands; the deck wants that turn-4 mana on Tannuk or two bodies. |
| Rust Harvester | '{2}, {T}, Exile an artifact card from your GRAVEYARD: put a +1/+1 counter on this creature, then it deals damage equal to its power to any target' — artifact cards reach this deck's graveyard only after they die, so it is a turn-5+ engine on a 1/1 body; it would also be a fourth rare for a repeat-activation plan this curve does not support. |
| Vaultguard Trooper | 'if you control two or more tapped creatures, you may discard your hand. If you do, draw two cards' — a five-mana 5/5 whose refill is a downgrade when the hand still has warp cards in it; above this deck's warp-effective curve of 2.08. |
| Territorial Bruntar | {4}{R}{R} for a 6/6 is two mana above the deck's curve and its landfall impulse only fires on a land drop, which a 16-land deck stops making around turn 5. |
| Bygone Colossus | Warp {3} for a 9/9 with no ETB and no other text — it is one Weftstalker Ardent trigger and a large body that exiles itself at end step, for three mana that could deploy two attackers instead. |
| Warmaker Gunship | 'deals damage equal to the number of artifacts you control to target creature' — artifacts on board when it lands are typically 2-3, so it is a 2-3 damage removal spell on a Spacecraft hull that needs Station to attack; a rare slot for a conditional effect. |
| Virulent Silencer | 'Whenever a NONTOKEN artifact creature you control deals combat damage to a player, that player gets two poison counters' — nontoken artifact creatures here are Kavaron Harrier x2, Oreplate Pangolin x2, Red Tiger Mechan x2 = 6 of 24, and the poison clock (10 counters = 5 connections) is slower than the damage clock this deck already has. |
| Roving Actuator | Its Void ETB copies 'target instant or sorcery card with mana value 2 or less from your graveyard' — qualifying targets here are Plasma Bolt x2 and Invasive Maneuvers x2, and all must already be in the graveyard, making it a turn-5+ card in a turn-5 deck. |
| Kavaron Skywarden | 'Reach / Void — put a +1/+1 counter on this creature' at {4}{R} with no warp cost — a five-mana body that grows slowly, in a deck whose entries cost one to three. |
| Full Bore | '+3/+2 until end of turn ... trample and haste if cast for its warp cost' — a one-shot combat pump that adds no entry and no permanent damage; the same reason it was cut from the U/R build. |
| Slagdrill Scrapper | '{2}, {T}, Sacrifice another artifact or land: Draw a card' is card advantage on a one-mana artifact body, but at {2} plus a tap it competes with deploying an attacker on exactly the turns this deck wants to attack. |
| Bombard | 'deals 4 damage to target creature' — one more mana than Invasive Maneuvers for one more damage, and this deck's interaction is already at the top of the Aggro band. |
| Cut Propulsion | Sideboard — 'Target creature deals damage to itself equal to its power. If that creature has flying, it deals twice that much damage to itself instead.' The mainboard's damage ceiling is 3, which misses the cube's 31-of-139 creatures at toughness 5+; this scales with THEIR card instead. |
| Orbital Plunge | Sideboard — 'deals 6 damage to target creature. If excess damage was dealt this way, create a Lander token' answers anything, but at four mana it is a turn this deck does not attack. |
| Drill Too Deep | Sideboard — '• Destroy target artifact' is the only answer to a resolved noncreature permanent available to mono-red, against a cube that is 30% artifacts. |
| Ruinous Rampage | Sideboard — '• deals 3 damage to each opponent' is reach that ignores blockers entirely; '• Exile all artifacts with mana value 3 or less' would also exile most of this deck's own board, so the modes are matchup-exclusive. |
| Lithobraking | Sideboard at 1 copy only — 'deals 2 damage to each creature' kills 10 of this deck's own 24 nonland copies plus every Robot and Lander token. It comes in only when the opponent goes wider than this deck does. |
| Dauntless Scrapbot | Sideboard — 'exile each opponent's graveyard. Create a Lander token' against the cube's 31 graveyard-interaction cards; the body plus the Lander are two artifact entries, so boarding it costs no clock. |
| Devastating Onslaught | Mythic {X}{X}{R}: 'Create X tokens that are copies of target artifact or creature you control. Those tokens gain haste until end of turn. Sacrifice them at the beginning of the next end step.' At X=2 it is two entries plus two hasty attackers in one card — but that is 5 mana, 2.9 above this deck's warp-effective average of 2.083, and at X=1 (3 mana) it is a single entry, worse than any two-drop body. |
| Tezzeret, Cruel Captain | Mythic {3}: loyalty compounds on 'Whenever an artifact you control enters', which this deck triggers often, and -3 fetches Kavaron Harrier. Excluded because it is not a body: 16 of 24 copies being attackers is the clock, and a three-mana noncreature is a turn not spent attacking. |
| Pain for All | Rare {2}{R} Aura: 'Whenever enchanted creature is dealt damage, it deals that much damage to each opponent' would add reach, which this deck has only 4 of 24 copies of. Excluded because an aura on a 2/1 is a two-for-one into any removal spell, and 8 of 24 copies exile themselves at end of turn when warped, taking the aura with them. |
| Systems Override | Uncommon {2}{R}: 'Gain control of target artifact or creature until end of turn. Untap that permanent. It gains haste until end of turn' is blocker-removal and an extra attacker at once, and the only in-colour mainboard answer to the single_large_threat class this deck concedes. Excluded because it is three mana for a one-turn effect that leaves no permanent, and this deck has 0 sacrifice outlets to keep the stolen creature. |
| Frontline War-Rager | Common {2}{R} 2/3: a 9th and 10th Kavu for Possibility Technician (currently 8 of 24), and its end-step condition is met on any turn the deck attacks with two bodies. Excluded because it has no haste, no warp and no entry generation — the least explosive three-drop available to a deck whose two-mana slot is already 8 copies deep. |
| Zookeeper Mechan | Common {1}{R} 1/3: an artifact entry that also taps for {R}, which would close the gap between the audit's recommended 17 lands and the 16 actually played. Excluded because a 1/3 that taps for mana never attacks, so it occupies a threat slot to be a Mountain, and its {6}{R} pump is unreachable on a 16-land manabase. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 17 recommended  [PASS]
Avg CMC:     2.71   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.05 adj [MV 2.71 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons and uncommons max 2 copies — No card exceeds its rarity multiplier; verified by cube_search.get_max_copies
[PASS] Rares and mythics max 1 copy — All three rare/mythic cards are singletons
[PASS] Max 6 rare/mythic cards across mainboard + sideboard — 3 used: Tannuk, Steadfast Second (M), Nova Hellkite (R), Possibility Technician (R). Sideboard uses zero; 3 slots left unused. The Phase 9 grill checked this and found no strict upgrade to any maindeck slot in the mono-red or colourless pool; the three unused rare/mythics it surfaced (Devastating Onslaught, Tezzeret Cruel Captain, Pain for All) are recorded in considered_but_excluded with their against-counts.
[PASS] All cards from the eoe cube mainboard — Exact-name match against the working pool; Mountains are format-supplied
[PASS] 40-card mainboard, 10-card sideboard — 40 / 10
```
