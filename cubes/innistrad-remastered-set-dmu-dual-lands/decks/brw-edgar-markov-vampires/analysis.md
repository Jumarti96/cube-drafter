---
deck_name: "brw-edgar-markov-vampires"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-08-26T04:05:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x6   Swamp                                
  x5   Mountain                             
  x2   Geothermal Bog                       BR dual, enters tapped
  x2   Sunlit Marsh                         WB dual, enters tapped
  x1   Sacred Peaks                         RW dual, enters tapped
  x1   Shattered Sanctum                    
```

### CREATURES (16)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Indulgent Aristocrat                       x2    B      threat                          U
  1  Voldaren Epicure                           x2    R      threat                          C
  2  Asylum Visitor                             x2    B      threat                          U
  2  Blood Petal Celebrant                      x2    R      threat                          C
  2  Bloodtithe Harvester                       x2    BR     threat                          U
  2  Metallic Mimic                             x1    C      payoff                          R
  2  Olivia's Dragoon                           x1    B      threat                          C
  3  Stromkirk Occultist                        x2    R      threat                          U
  4  Bloodline Keeper // Lord of Lineage        x1    B      payoff                          M
  6  Edgar Markov                               x1    WBR    payoff                          M
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Lightning Axe                              x1    R      interaction                     U
  1  Tragic Slip                                x2    B      interaction                     C
  2  Infernal Grasp                             x1    B      interaction                     U
```

### OTHER SPELLS (3)

```
CMC  Card                                       Qty   Color  Role                            Rar
  3  Sorin, Imperious Bloodlord                 x1    B      payoff                          M
  3  Stensia Masquerade                         x2    R      payoff                          U
```

## SIDEBOARD (10)

```
Card                                       Qty   Color  Role / When to board in                    Rar
Abrade                                     x2    R      hate — artifacts                           U
Murderous Compulsion                       x2    B      flex — creature decks                      C
Fiery Temper                               x2    R      hate — evasion / reach                     U
Gluttonous Guest                           x2    B      flex — faster aggro                        C
Savage Alliance                            x2    R      hate — wide_boards                         U
```

## ANALYSIS

### DECK IDENTITY

A BR Vampire aggro deck splashing exactly one white card, and the honest description is that the white card is a lottery ticket. Fifteen of the sixteen creature copies are printed Vampires and Metallic Mimic naming Vampire becomes the sixteenth, so every counter source reads the whole board. The plan that actually wins is a wide cheap Vampire board that grows permanently: Stensia Masquerade x2 puts a +1/+1 counter on each Vampire that connects and gives every attacker first strike, Metallic Mimic puts one on each Vampire that enters, and Indulgent Aristocrat x2 converts a doomed body into permanent counters on the rest. Edgar Markov is the NAMED payoff and the largest single swing in the pool — 'First strike, haste. Whenever Edgar attacks, put a +1/+1 counter on each Vampire you control' — but the grill measured him, re-simulated on the FINAL manabase over 120k iterations, at 14.0% to be deployed by his own thesis turn on the play and 18.6% on the draw, counting BOTH the hardcast (7.9% / 12.0%) and Sorin's mana-cheat. The build is therefore constructed so that it does not depend on him at all, and the fixing tax is deliberately kept small.

### READ THIS FIRST: EDGAR MARKOV IS NOT THE CARD YOU THINK HE IS

Edgar's famous ability is **Eminence** — *"Whenever you cast another Vampire spell, **if Edgar is in the command zone or on the battlefield**, create a 1/1 black Vampire creature token."*

**A 40-card constructed deck has no command zone.** So the free-token engine — the thing that makes Edgar a format-defining Commander card, and the thing the archetype brief assumed when it recommended "Edgar's eminence over a deep aggressive Vampire curve" — is simply off until Edgar is physically on the battlefield. And Edgar costs `{3}{R}{W}{B}`: six mana across three colours, in a cube with **no three-colour land**.

Two refinements the grill forced on me, both of which I had wrong at first:

1. **It does not require a hardcast.** The clause says "on the battlefield," so `Sorin, Imperious Bloodlord`'s `−3: You may put a Vampire creature card from your hand onto the battlefield` switches Eminence on for `{2}{B}` on turn 4, not `{3}{R}{W}{B}` on turn 6. Sorin is the single most important card in this build after Edgar himself, and all three independent sketchers found the line.
2. **Eminence triggers on *casting*.** Vampires that Sorin's `−3` puts onto the battlefield are not cast and do not trigger it. And by the turn Edgar lands, most of a 23-card nonland deck is already deployed, so there is little left to trigger it with.

Net: Eminence is a late bonus. It is never the plan.

### THE NUMBER THAT DEFINES THIS DECK

Both grill agents independently simulated it, and they agree. Across 60,000 games with **no mulligans and generous land sequencing** — every assumption favouring the deck:

| Route to Edgar | Turn 6, on the play | Turn 6, on the draw |
|---|---|---|
| Hardcast `{3}{R}{W}{B}` | 7.9% | 12.0% |
| Sorin's `−3` | — | — |
| **Either — Edgar deployed** | **14.0%** | **18.6%** |

(Re-measured on the *final* manabase over 120,000 iterations. The pre-repair list read 14.6% / 19.9%.)

The named payoff arrives on time in **fewer than one game in six**.

And the diagnosis matters more than the number: **colour is not what fails.** Given six lands in play, the three-colour requirement costs only about 1.5 percentage points. What fails is *reaching six lands*, which is a land-count problem — and the land count was computed from an average mana value of 2.17 while the thesis turn is 6. That contradiction is inherent to this pipeline, not to the manabase, and no gate in the pipeline cross-checks land count against thesis turn.

### SO WHAT ACTUALLY WINS

The deck was deliberately built so it does not depend on Edgar at all. The payoff it *runs* on is **Stensia Masquerade ×2** — three mana, one colour, two copies:

> *"Attacking creatures you control have first strike. Whenever a Vampire you control deals combat damage to a player, put a +1/+1 counter on it."*

That is Edgar's job, earlier, twice as often, and off a manabase that can actually produce it. It is also an **enchantment**, against a cube with **2 enchantment answers in 277 cards, both white** — so against a non-white opponent it cannot be removed.

Behind it sit two more permanent-counter sources chosen for the same reason the resilient lens was chosen: **Metallic Mimic** (counters attach as Vampires *enter*, so they survive the Mimic's own removal — and it is colourless, the one payoff this strained manabase can never fail to cast) and **Indulgent Aristocrat ×2** (in response to a sweeper, converts a doomed body into permanent stats on everything else).

The best unrecorded line, which the Challenger found: **Indulgent Aristocrat's `{2}, Sacrifice a creature` switches on Tragic Slip's Morbid at will**, turning a one-mana `-1/-1` into an unconditional `-13/-13`. Four of twenty-three nonland cards can flip that switch.

### THE FIXING TAX, MEASURED AND THEN CUT

The pre-grill manabase ran a lone Plains plus Evolving Wilds, justified as "the Plains exists so Evolving Wilds can fetch white." The Challenger measured that pair:

- It bought **+0.7pp** of Edgar castability.
- It sold **−10.9pp** of turn-1 coloured plays. Re-measured after the repair, P(a coloured one-drop actually cast on turn 1, on the play) went **0.460 → 0.569** — a bigger gain than the +5.3pp first estimated, because Lightning Axe added a seventh one-drop on the scarcer colour.

On a deck that is 83% threats, that is a straightforwardly bad trade, and both cards were cut. Unconditionally-tapped lands went from six to five.

A related caveat worth carrying: the structural gate reports 78% "play by turn 1," but that figure counts a castable-MV card *in hand*, not one castable off the coloured sources actually in play. Measured against the real manabase it is **56.9%**. Read the 78% as an upper bound — it reproduces exactly as P(the opening hand *contains* a one-drop), which is a different question from whether you can cast it.

### AN AUDIT-TOOL FINDING, NOT A DECK FINDING

Worth recording because it would silently recur on any splash deck: `deck_audit`'s pip counter returned `{"R": 10, "B": 14}` for this deck — omitting white entirely *and* dropping one black and one red pip. It excluded **the whole card** Edgar Markov as a splash card, rather than excluding only his white pip. Downstream, `splash_check` recorded `max_cmc 0` for a card whose mana value is 6, and derived a "3 sources required" threshold from that.

The splash gate passed because it never saw the card. The real pip demand across all 23 nonland cards is **B 14, R 12, W 1**.

### THE PRICE OF THE TURN-ONE FIX, PAID OPENLY

Cutting Plains and Evolving Wilds took white sources from 5 to 4, and none of the four is unconditionally untapped. P(a white source among the lands played by turn 6) fell from **90.3% to 77.6%**. That is a real cost to the deck's named payoff, and it was taken deliberately: +10.9pp on turn one, on a deck that is 83% threats, is worth more than 12.7pp of a card that shows up one game in seven.

A swap of Shattered Sanctum → Haunted Ridge was tested and declined. Haunted Ridge buys **+4.1pp** on turn-3 B+R availability but costs **0.8pp** of hardcast and **0.6pp** of Edgar deployed. Sub-one-point margins on the payoff do not justify abandoning the thesis's named kill card — and if you want the pure-BR version of this shell, it already exists as `br-vampire-lords`.

### THE BEST NEW LINE

Found during the grill: **Lightning Axe + Stromkirk Occultist**. The Axe reads *"As an additional cost to cast this spell, discard a card"*; the Occultist reads *"Madness {1}{R}"* against a `{2}{R}` mana cost. Discard the Occultist to pay the Axe's cost, kill something for one mana, then cast the Occultist from exile for one less than it costs. Two cards, one mana, five damage and a 3/2 trampler.

### WHAT THIS DECK CANNOT DO

- **Graveyard (27.1% of the cube).** An answer exists in colour — `Invasion of Innistrad // Deluge of the Dead`'s back face, *"{2}{B}: Exile target card from a graveyard"* — but the 5-rare budget is fully committed to Edgar, Sorin, Bloodline Keeper, Metallic Mimic and Shattered Sanctum. Budget-blocked, not answerless.
- **Enchantments.** `Hopeful Initiate` is the only answer available and it is a rare; a second white card would also demand real white sources rather than a 4-source splash.
- **Racing.** Five tapped lands and a turn-6 payoff. This is the accepted failure mode, and the cost of mitigating it is cutting the white splash — which means cutting Edgar, which means this stops being the Edgar deck.

### HONEST BOTTOM LINE

This is a BR Vampire aggro deck with a lottery ticket stapled to it. The ticket is the biggest single swing in the pool and it cashes about one game in six. If you want the consistent version of this shell, `br-vampire-lords` is the same plan without the tax; if you want to *see* Edgar attack, this is the build that gives him two routes onto the battlefield instead of one.


### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list.

| Card | Verdict | Count |
|---|---|---|
| Edgar Markov | INCLUDE x1 | CORRECTED TWICE after the grill. 'Whenever Edgar attacks, put a +1/+1 counter on each Vampire you control' reads 16 of 16 creature copies — NOT the 17 of 17 the pre-grill build asserted six separate times; the actual creature count is 16 copies, 15 printed Vampires plus Metallic Mimic naming Vampire. On a board of four Vampires it is +4 power per attack, permanently, with haste. Declared at weight 0.4, and the grill quantified why: across 60k simulated games with no mulligans and generous land sequencing, Edgar is DEPLOYED by his own thesis turn of 6 in 14.6% of games on the play and 19.9% on the draw, counting both the hardcast (8.7% / 13.6%) and Sorin's -3 (7.7% / 9.7%). Both singletons drawn by 13 cards is 10.1%. This is the deck's ceiling, not its plan. |
| Sorin, Imperious Bloodlord | INCLUDE x1 | CORRECTED after the grill. '-3: You may put a Vampire CREATURE CARD from your hand onto the battlefield' is the only mana-cheat in the 305-card pool and Sorin costs {2}{B}, touching no white pip — so it is both the realistic route to Edgar and the card that switches Edgar's Eminence on four turns early. But it hits 14 of 23 nonland cards (60.9%), not the 17 of 23 claimed: Metallic Mimic is a 'Artifact Creature — Shapeshifter' CARD in hand and only becomes a Vampire on entry, so it is not a legal target; Sorin is not a creature; Stensia Masquerade is an enchantment. Note also that Vampires put onto the battlefield this way are not CAST and so do not trigger Eminence. |
| Stensia Masquerade | INCLUDE x2 | 'Attacking creatures you control have first strike. Whenever a Vampire you control deals combat damage to a player, put a +1/+1 counter on it.' Reads 16 of 16 creature copies (corrected from 17 of 17) for the counter clause and every attacker for first strike, at 3 mana in ONE colour rather than 6 across three. It does Edgar's job earlier, twice as often, and off a manabase that can actually produce it. Uncapped at 2 copies, and an enchantment against a cube with 2 enchantment answers in 277 cards, both white. This is the payoff the deck actually runs on, and the measured Edgar numbers are why. |
| Metallic Mimic | INCLUDE x1 | Naming Vampire it becomes the 16th Vampire and 'Each other creature you control of the chosen type ENTERS with an additional +1/+1 counter on it' grows every Vampire cast after it. Weight 0.7 because it buffs 0 of the creatures already on the battlefield. Its counters sit on the bodies, so removing the Mimic shrinks nothing — the removal-proof property the locked lens was chosen for, and it is colourless, which is the one payoff this strained manabase can never fail to cast. Two honest costs, both raised by the grill: it must resolve BEFORE your Vampires to do anything, in a deck deploying them on turns 1-2; and being a Shapeshifter card in hand it is not a legal target for Sorin's -3. |
| Bloodline Keeper // Lord of Lineage | INCLUDE x1 | '{T}: Create a 2/2 black Vampire creature token with flying' manufactures bodies and rebuilds after a sweeper. Flip gate 'five or more Vampires' is fed by 16 Vampire copies in 23 nonland cards (69.6%) — corrected from the claimed 17 copies / 73.9%, which inflated the feeding pool by 13% — plus its own tokens, which are themselves Vampires. Weight 0.6: the +2/+2 anthem is back-face only, and {2}{B}{B} is the hardest cost in the deck for a three-colour manabase. |
| Indulgent Aristocrat | INCLUDE x2 | '{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control' covers 16 of 16 Vampire copies (corrected from 17 of 17) and the counters are permanent. Weight 0.5 — each activation costs {2} AND a body. Its specific job in the resilient lens: in response to a sweeper or spot removal it converts the doomed creature into permanent stats on everything else. Unrecorded before the grill: it is also what switches Tragic Slip's Morbid on at will, which is the strongest line on the interaction sheet. |
| Neonate's Rush | INCLUDE x2 | 'This spell costs {1} less to cast if you control a Vampire' — with 17 Vampire copies the discount is live whenever any creature is out. Included here where it was CUT from the P1 lords build, and the reason is the manabase: a three-colour deck with six tapped lands needs cards that replace themselves to find its third colour, and 'Draw a card' at an effective two mana is the only cantrip available in these colours. |
| Voldaren Ambusher | CUT | X = Vampires you control, and 16 of 16 creature copies qualify. Its condition ('if an opponent lost life this turn') is genuinely switchable — Voldaren Epicure x2's entry ping turns it on without attacking. Cut on curve: it is a 3-drop competing with Stensia Masquerade x2 in the deck with the tightest mana of the four. It remains the top card on the iteration shortlist. |
| Captivating Vampire | CUT | 'Other Vampire creatures you control get +1/+1' would read 15 of 15 others — a perfect count. Cut on the rare budget, which is committed 5 of 5 to Edgar Markov, Sorin (the only route to Edgar), Bloodline Keeper, Metallic Mimic and Shattered Sanctum. {1}{B}{B} is also the second-hardest cost in the pool for a three-colour manabase to produce on turn 3. |
| Olivia Voldaren | CUT | Uniquely GROWS the Vampire count by converting the opponent's creatures. Cut on mana and budget: {2}{B}{R} at 4 mana plus {3}{B}{B} for the steal, in the deck with the most tapped lands. |
| Falkenrath Gorger | CUT | A 1-mana 2/1 Vampire body. 'The madness cost is equal to its mana cost' grants no discount. CORRECTED TWICE: the pre-grill verdict claimed 'only 3 discard outlets' while enumerating six copies, and the post-repair count moved again. Final figures: 5 discard-producing copies (Olivia's Dragoon x1, free and repeatable; Blood tokens from Voldaren Epicure x2 and Bloodtithe Harvester x2) against 6 printed-madness copies (Asylum Visitor x2, Stensia Masquerade x2, Stromkirk Occultist x2) — of which only Stromkirk Occultist's 'Madness {1}{R}' versus a {2}{R} mana cost is an actual discount. Cut on the rare budget. |
| Voldaren Bloodcaster // Bloodbat Summoner | CUT | A 2-mana 2/1 flying Vampire. Cut on the rare budget alone (5 of 5). |
| Blood Artist | CUT | A 2-mana Vampire whose death-drain would convert the trades a go-wide board makes. Cut on body quality: a 0/1 adds nothing to Edgar's attack trigger, which counts Vampires but rewards the ones that can profitably attack. |
| Hopeful Initiate | CUT | A W splash candidate and the ONLY card available to this deck that answers an enchantment: '{2}{W}, Remove two +1/+1 counters from among creatures you control: Destroy target artifact or enchantment' — powered by exactly the resource this deck manufactures. Cut because it is a rare against a fully committed budget, and because a second white card would demand real white sources rather than a 5-source splash. Its absence is why noncreature_permanents is a written concession. |
| Gather the Townsfolk | CUT | A W splash candidate. 'Create two 1/1 white HUMAN creature tokens' — two bodies for two mana is tempting for a go-wide plan, but Humans are counted by NOTHING in this deck: not Edgar's attack trigger, not Stensia Masquerade, not Metallic Mimic, not Indulgent Aristocrat. Bodies no payoff reads are not this deck's currency, and it would spend the splash on a card that is not the payoff. |
| Heartless Summoning | CUT | Cost reducer, and the temptation is real: it would make Edgar Markov a FOUR-mana spell, the largest tempo swing available to this pipeline, over 16 of 23 creature spells. Cut on the side effect, which is specifically fatal here: 'Creatures you control get -1/-1' kills Voldaren Epicure x2 (1/1), Indulgent Aristocrat x2 (1/1), Asylum Visitor x2 (3/1), Blood Petal Celebrant x2 (2/1) and Metallic Mimic (2/1) — 9 of 16 creature copies (denominator corrected from 17) — AND erases the 1/1 Vampire tokens Edgar's Eminence makes once he is on the battlefield. It makes the payoff cheaper and the payoff worse. |
| Bedlam Reveler | CUT | Cost reducer keyed to instants/sorceries in the graveyard: this list holds 5 of 23 nonland cards (21.7%) — Tragic Slip x2, Infernal Grasp x1, Neonate's Rush x2. At {6}{R}{R} base it is uncastable in a three-colour manabase. |
| Festival Crasher | CUT | '+2/+0 whenever you cast an instant or sorcery' against 5 instants/sorceries in 23 nonland cards (21.7%), and it is a Devil — the one body no payoff in this deck would read. |
| Thermo-Alchemist | CUT | Same 5-of-23 (21.7%) denominator, a Human rather than a Vampire, and a Defender — it can never attack, which is the only event Edgar's trigger and Stensia Masquerade's trigger read. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:7  2:9  3:5  4:1  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 5.3: Edgar Markov@0.4, Sorin, Imperious Bloodlord@0.6, Bloodline Keeper // Lord of Lineage@0.6, Metallic Mimic@0.7, Indulgent Aristocrat@0.5, Indulgent Aristocrat@0.5) → p=0.84 (need ≥ 0.75)
  PASS  enabler: 13 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 78%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Stensia Masquerade's 'Attacking creatures you control have first strike' wins the crack-back against equal-sized token boards, and the counter sources mean this deck's bodies outgrow 1/1 and 2/2 tokens. Savage Alliance x2 is the sideboard answer.
  OK        single_large_threat: Tragic Slip, Infernal Grasp, Lightning Axe
  CONCEDED  noncreature_permanents: No mainboard artifact or enchantment removal; Abrade x2 boards in for artifacts. Enchantments are the honest gap: the ONLY card in this deck's colours that answers one is Hopeful Initiate ('{2}{W}, Remove two +1/+1 counters from among creatures you control: Destroy target artifact or enchantment'), and it is a rare against a rare budget already fully committed to Edgar Markov, Sorin, Bloodline Keeper, Metallic Mimic and Shattered Sanctum.
  CONCEDED  stack: Black, red and the white splash hold no counterspells in this pool — verified across all 305 cards, the only 'counter target' effects are Mausoleum Wanderer, Overcharged Amalgam, Syncopate and Geistlight Snare, all mono-blue.
  CONCEDED  graveyard: Verified against oracle text: every graveyard-touching card in these colours is self-serving. CORRECTED after the grill: an answer DOES exist in colour — Invasion of Innistrad // Deluge of the Dead, whose back face reads '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token'. It is excluded by the rare/mythic budget, which is committed 5 of 5 to Edgar Markov, Sorin (the only route to Edgar), Bloodline Keeper, Metallic Mimic and Shattered Sanctum. The class is therefore budget-blocked, not answerless, against a cube 27.1% dense in graveyard interaction.
```

- curve PASS (aggro 1:7 2:9 3:5 4:1 6:1) — no flags raised, including the top-end rule, because thesis_turn is 6.
- goldfish PASS (keepable 87%, 3 lands by T3 88%, play by T1 78% / T2 98% / T3 100%) — no flags raised. IMPORTANT CAVEAT recorded rather than relied on: the grill demonstrated that deck_checks' play_by_turn counts a castable-MV card in hand, not a card castable off the coloured sources actually in play. Measured against the real manabase, P(a coloured one-drop is cast on turn 1, on the play) was 46% before the grill repairs and about 51% after cutting Plains and Evolving Wilds. The 78% figure should be read as an upper bound.
- Interaction at 17.4% is 2.4pp above the 10-15% aggro band. Grounded: Lightning Axe was restored after the grill showed its exclusion reason was false of it, and every interaction card costs one or two mana so the deviation never competes with a land drop in a deck that must reach six.
- Threats at 82.6% is recorded as a DEVIATION, GROUNDED — relabelled after the grill objected to the pre-grill framing of 'not a meaningful deviation'. The arithmetic context (aggro bands cap at 80% under a nonland denominator) is real but is context, not a justification; the justification is that both payoffs read 'Vampire you control', so a body IS a payoff slot.
- ASSEMBLY TRACE CAVEAT, recorded rather than relied on. The Challenger showed deck_checks' reported p-values do not reproduce from the declared cards_seen of 13: payoff effective 5.3 recomputes hypergeometrically to p=0.8931 against the reported 0.84, and enabler 13 to 0.9983 against 0.99. Both errors run in the deck's FAVOUR when corrected, so the PASS stands on either figure — but the trace as printed corresponds to roughly 11 cards seen, not 13.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Indulgent Aristocrat x2 ('{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control') has no cap, so every spare two mana becomes a permanent board-wide buff. Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' adds a body per turn for no mana. Blood tokens from Voldaren Epicure x2 and Bloodtithe Harvester x2 read '{1}, {T}, Discard a card, Sacrifice this token: Draw a card'. And uniquely among these four decks, flood is partly a FEATURE here: the deck's payoff costs six mana, so the seventh and eighth lands are what turn a stalled board into an Edgar hardcast. |
| screw | mitigation | REBUILT after the grill marked this UNSATISFIED. The pre-grill answer leaned on a 71% turn-1 figure that counts cards in hand rather than castable spells, and on Neonate's Rush as an unconditional dig when its text reads 'deals 1 damage to TARGET CREATURE'. Both are gone. What replaces them: the manabase was measurably improved — cutting Plains x1 and Evolving Wilds x1 for a Swamp and a Mountain moved P(coloured one-drop cast on turn 1, on the play) from 0.460 to 0.569 as re-measured in the approval round — a +10.9pp gain rather than the +5.3pp first estimated, because Lightning Axe added a seventh one-drop on the scarcer colour and reduced unconditionally-tapped lands from six to five, at a cost of 0.7pp of Edgar castability. Seven one-drops and nine two-drops now sit on eleven black and eight red sources. The residual honesty: this deck cannot cast its named payoff without white, and reaching six lands at all is roughly a coin flip on turn 6 — that is a property of the pipeline, disclosed in deck_identity, not something a manabase can fix. The Challenger re-verified this mode on the repaired list and withdrew its UNSATISFIED verdict: every named mitigation card is in the deck and its oracle supports the claim. The retained caveat is measured and stands — P(six lands by turn 6 on the play) is 38.6%, which is a property of a six-mana payoff, not of this manabase. |
| decapitation | mitigation | This is the lens the build was chosen for. Every buff is a permanent +1/+1 counter or a token, not a static lord: Metallic Mimic's counters sit on the bodies ('Each other creature you control of the chosen type ENTERS with an additional +1/+1 counter'), Indulgent Aristocrat's likewise, and Stensia Masquerade x2 is an enchantment against a cube with 2 enchantment answers in 277 cards, both white. Edgar himself being answered costs the deck its ceiling but not its board — which is precisely why the judge preferred this shape over the payoff-forward one. |
| gas-out | mitigation | Stromkirk Occultist x2 replaced Neonate's Rush x2 here after the grill: 'Whenever this creature deals combat damage to a player, exile the top card of your library. Until end of turn, you may play that card' is repeating card flow on a 3/2 trampling Vampire body, and unlike Neonate's Rush it is never uncastable. Asylum Visitor x2 reads 'if that player has no cards in hand, you draw a card and you lose 1 life', which fires on the opponent's empty hand as well as your own. Blood tokens from Voldaren Epicure x2 and Bloodtithe Harvester x2 bank a rummage. Sorin's '-3' converts a stranded card into a body. |
| raced | accepted | This is the deck's worst matchup and the cost is structural, not incidental: six of seventeen lands enter tapped, so against a fast clock it is a turn behind before any card is cast, and its named payoff arrives on turn 6. Mitigating would mean cutting the white splash entirely — which means cutting Edgar Markov, which means this is no longer the Edgar deck and P1 already occupies that design space. The concession is explicit: this build trades the raced matchup for access to the largest board-wide swing in the pool, and Gluttonous Guest x2 plus Fiery Temper x2 board in to make the trade survivable. |
| disruption-fizzle | mitigation | There is no single critical turn — the plan is incremental board development, and a removal spell mid-curve costs one of sixteen Vampire copies while the +1/+1 counters already placed stay placed. Black and red hold no counterspells in this pool (verified across all 305 cards: only Mausoleum Wanderer, Overcharged Amalgam, Syncopate and Geistlight Snare, all mono-blue). The one genuine fizzle risk, stated precisely after the grill corrected the earlier wording: Sorin's '-3' with Edgar in hand is a two-card line, and answering Sorin costs the cheat route. The hardcast is NOT a backstop for it — measured, the hardcast is 8.7% by turn 6 on the play against the Sorin route's 7.7%, so they are two coin-flips, not a plan and a fallback. New line found in the approval round and worth recording: Lightning Axe's 'As an additional cost to cast this spell, discard a card' chains with Stromkirk Occultist's 'Madness {1}{R}' — discard the Occultist to pay the Axe's cost, then cast it from exile for one less than its mana cost. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| The Meathook Massacre | 'each creature gets -X/-X' is symmetric against a go-wide board of cheap Vampires — at X=1 it kills Voldaren Epicure (1/1), Indulgent Aristocrat (1/1), Asylum Visitor (3/1), Blood Petal Celebrant (2/1) and Bloodmad Vampire (4/1). It is a mythic, and this deck's plan is to HAVE the wide board, not to convert it. |
| Gravecrawler | 'You may cast this card from your graveyard as long as you control a Zombie' — this build's bodies are Vampires and Human tokens; there are no Zombies to switch it on, leaving a 1-mana 2/1 that can't block, at rare cost. |
| Hanweir Garrison | 'create two 1/1 red HUMAN creature tokens that are tapped and attacking' is the widest board per card in the pool, and in a go-wide deck that is tempting. Cut because Edgar Markov's trigger reads 'put a +1/+1 counter on each VAMPIRE you control' — the tokens miss it, as they miss Captivating Vampire, Lord of Lineage, Stensia Masquerade and Voldaren Ambusher's X. Bodies that no payoff reads are not this deck's currency. |
| Skirsdag High Priest | '{T}, Tap two untapped creatures you control: Create a 5/5 black Demon' taxes three attackers' worth of taps in a deck whose payoff triggers on ATTACKING, and the Demon is not a Vampire. Rare cost on top. |
| Invasion of Innistrad // Deluge of the Dead | Strong removal and the pool's only repeatable graveyard exile, but at {2}{B}{B} it demands double black from a manabase that must also produce {R} and {W} for a six-mana payoff — the double-pip cost this three-colour build can least afford. Rare. |
| Tree of Perdition | 'Defender' — a body that never attacks, in a deck whose payoff triggers only on attacking. Mythic. |
| Zealous Conscripts | A 5-mana 3/3 that is not a Vampire, competing for the mana this deck needs to cast a 6-mana Vampire. Rare. |
| Reforge the Soul | 'Each player discards their hand, then draws seven cards' — refills the opponent symmetrically at the point a go-wide deck has emptied its hand onto the board. Rare. |
| Markov Waltzer | The pool's only other Vampire with a white pip, and it is excluded by the splash rule rather than by judgment: its single cluster (Tribal/Kindred) gives it 1 overlap point against Edgar Markov's 3, Gather the Townsfolk's 2 and Hopeful Initiate's 2, so it ranks 4th and the cap is 3 per splash colour. On the merits it would also be a marginal include — a 4-mana 1/3 whose 'up to two target creatures you control each get +1/+0 until end of turn' is a one-turn pump where this deck's other counter sources are permanent. |
| Slayer of the Wicked | Not a splash candidate (it shares no cluster with this pipeline) and actively hostile: 'When this creature enters, you may destroy target Vampire, Werewolf, or Zombie' points at the deck's own tribe. It is what an opponent boards in against these four decks, not a card any of them plays. |
| Emrakul, the Promised End | {13}, and this deck already struggles to reach 6. |

Seed candidates that reached the sketchers but did not make the final list:

| Card | Verdict | Reason |
|---|---|---|
| Stromkirk Occultist | INCLUDE x2 (added post-grill) | An include_candidate the pre-grill build promoted and then silently dropped. 'Trample. Whenever this creature deals combat damage to a player, exile the top card of your library. Until end of turn, you may play that card.' A 3-mana 3/2 Vampire that is repeating card flow ON a body — it directly refutes the pre-grill claim that Neonate's Rush was 'the only cantrip available in these colours', and its trample is the deck's only answer to the chump blockers the wide_boards concession names. |
| Lightning Axe | INCLUDE x1 (added post-grill) | Batch-cut under 'Collective Defiance, Chandra and Lightning Axe are rares or double-pip red' — false of Lightning Axe on both clauses: it is {R} and uncommon. 'As an additional cost to cast this spell, discard a card or pay {5}. Lightning Axe deals 5 damage to target creature.' One mana for 5 damage, and the discard cost is fed by 5 discard-producing copies while 4 of the discardable cards carry madness. |
| Neonate's Rush | CUT (post-grill) | Was the entire Engine band at x2 and was named in both the screw and gas-out mitigations. Cut because its text is conditional in a way the build never stated: 'deals 1 damage to TARGET CREATURE and 1 damage to its controller. Draw a card' cannot be cast against an empty board, so it is not the unconditional dig a three-colour manabase was relying on. |
| Olivia's Dragoon | REDUCED to x1 (post-grill) | The Proposer's runner-up weakest defence: a 2/2 vanilla body whose ability spends a whole card for one turn of evasion. Kept at one copy as the deck's only FREE repeatable discard outlet. Count corrected after the approval round: the madness package is 6 copies, not the 4 originally stated (Stromkirk Occultist x2 joined it), but only 1 of the 6 — Stromkirk Occultist at 'Madness {1}{R}' against a {2}{R} cost — is an actual mana discount; the other four have madness costs equal to their mana costs. The conclusion survives; the count moved under it. |
| Faithless Looting | CUT (reason corrected) | Was batch-cut for needing 'a madness package this build does not run'. That was a count asserted before any list existed and it is false of the finished list, which runs 4 printed-madness copies and 5 discard-producing copies. The cut stands on a different ground: 'Draw two cards, then discard two cards' adds no body to a deck that is 83% threats and whose payoff counts Vampires on the battlefield. |
| Alchemist's Greeting | CUT (reason corrected) | Same false batch reason. Real ground: at {4}{R} hardcast it is uncastable on curve in the deck with the most tapped lands, and its madness route needs a discard outlet the deck now runs only one free copy of. |
| Furyblade Vampire | CUT | 'Trample. At the beginning of combat on your turn, you may discard a card. If you do, this creature gets +3/+0.' A free repeatable outlet and trample on a Vampire body. Cut because Stromkirk Occultist x2 was taken for the same trample-plus-card-flow role at a better body (3/2 vs 1/2) and without spending a card per activation. |
| Bloodmad Vampire | CUT | A 3-mana 4/1 Vampire, the highest power under four mana in the tribe. Cut because 1 toughness is the worst statline in a deck with 5 tapped lands that will often be a turn behind and needing to block, and the 3-drop slot went to Stromkirk Occultist's trample and card flow. |
| Falkenrath Torturer | CUT | A free sacrifice outlet on a Vampire body that would switch Tragic Slip's Morbid on for zero mana. Cut because Indulgent Aristocrat x2 already provides that switch while also being a 1-drop and a board-wide counter source; a second, worse copy of the same function is not worth a 3-mana slot in this curve. |
| Voldaren Duelist | CUT | 'Haste. When this creature enters, target creature can't block this turn' on a Vampire body answers the chump-blocker problem. Cut on mana value: a second 4-drop in a three-colour deck that already has a 6-drop it struggles to cast. |
| Bloodhall Priest | CUT | A 4-mana 4/4 Vampire, the largest body in the tribe. Cut on colour and curve: {2}{B}{R} is a double-colour four-drop in the deck with the most tapped lands, competing directly with the turns that must be spent assembling six mana. |
| Collective Brutality | CUT | Modal disruption whose escalate cost is a discard this deck can feed. Cut on the rare budget (5 of 5). |
| Invasion of Innistrad // Deluge of the Dead | CUT (recorded for the coverage concession) | Its back face is the pool's only repeatable graveyard exile in these colours: '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token.' Cut on the rare budget, which is why coverage.graveyard is a BUDGET-BLOCKED concession rather than an answerless one — a distinction the pre-grill build got wrong. |
| Hopeful Initiate | CUT | A W splash candidate and the only enchantment answer available: '{2}{W}, Remove two +1/+1 counters from among creatures you control: Destroy target artifact or enchantment', powered by exactly the resource this deck makes. Cut on the rare budget, and because a second white card would demand real white sources rather than a 4-source splash. |
| Gather the Townsfolk | CUT | A W splash candidate. 'Create two 1/1 white HUMAN creature tokens' — bodies that NOTHING in this deck counts: not Edgar's attack trigger, not Stensia Masquerade, not Metallic Mimic, not Indulgent Aristocrat. It would spend the splash on a card that is not the payoff. |
| Sundown Pass | CUT (recorded after the grill) | The grill correctly showed the pre-grill claim that Shattered Sanctum is 'the only untapped-capable white source in the pool' was false — Sundown Pass has the identical 'enters tapped unless you control two or more other lands' clause in R/W, and a basic Plains is untapped always. Shattered Sanctum keeps the slot on the corrected ground: it is the only untapped-capable DUAL that produces W alongside black, which is 14 of the deck's 27 pips, where Sundown Pass pairs W with red at 12. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.44 adj [MV 2.17 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  54.2%  prod  64.7%  gap -10.5pp  [OK]
  R  demand  45.8%  prod  47.1%  gap  -1.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool rules: commons/uncommons up to 2 copies; rares/mythics 1 copy.
Extra build constraint: at most 5 rare-or-mythic CARDS across mainboard + sideboard.
Basic lands: format-supplied, unlimited.

  [PASS] Mainboard = 40 (required 40)
  [PASS] Sideboard = 10 (required 10)
  [PASS] Every card exists in the cube mainboard by exact name
  [PASS] Copy limits obeyed (verified via cube_search.get_max_copies with a per_rarity policy)
  [PASS] Rare/mythic cards used: 5 of 5 -> Edgar Markov, Sorin, Imperious Bloodlord, Bloodline Keeper // Lord of Lineage, Metallic Mimic, Shattered Sanctum
  [PASS] Every nonland card usable in B/R (effective_cost.best_mode)
  [PASS] Splash cap: 1 splash colour(s), 0 splash cards used

```
