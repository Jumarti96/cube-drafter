---
deck_name: "gw-cryptolith-harvest"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-27T14:57:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  7x Forest                                       basic
  5x Plains                                       basic
  2x Evolving Wilds                               fetches a basic, enters tapped
  1x Overgrown Farmland                           G/W dual, untapped with 2+ other lands
  2x Radiant Grove                                G/W dual, enters tapped
```

### CREATURES (8)
```
CMC  Card                                       Qty   Color  Role                         Rar
  1  Thraben Inspector                           x1    W      Infrastructure/Consistency   C
  2  Cathar Commando                             x1    W      Interaction/Disruption       C
  2  Duskwatch Recruiter // Krallenhorde Howler  x2    G      Infrastructure/Consistency   U
  2  Scorned Villager // Moonscarred Werewolf    x1    G      Infrastructure/Consistency   C
  4  Mausoleum Guard                             x1    W      Enabler/Fodder               U
  4  Pack Guardian                               x2    G      Enabler/Fodder               U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Gather the Townsfolk                        x2    W      Enabler/Fodder               C
  2  Join the Dance                              x2    WG     Enabler/Fodder               U
  2  Valorous Stance                             x1    W      Interaction/Disruption       U
  3  Clear Shot                                  x1    G      Interaction/Disruption       U
  3  Rally the Peasants                          x2    W      Payload/Payoff               U
  4  Second Harvest                              x1    G      Payload/Payoff               R
```

### OTHER SPELLS (6)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Cryptolith Rite                             x1    G      Engine/Outlet                R
  2  Intangible Virtue                           x2    W      Payload/Payoff               U
  3  Cathar's Call                               x1    W      Engine/Outlet                U
  3  Ulvenwald Mysteries                         x1    G      Engine/Outlet                U
  5  Unnatural Growth                            x1    G      Payload/Payoff               R
```

## SIDEBOARD (10)
```
Card                                        Qty   Color  Rar  Role / When to board in
Ambush Viper                                x2    G      C    vs a single large threat: 'Flash. Deathtouch' answers any size at instant speed, and unlike a removal spell it leaves a body behind that taps for mana under Cryptolith Rite.
Noose Constrictor                           x1    G      U    vs the cube's 58 evasion cards (20.9%), the second-largest threat class and the one this deck's ground board cannot block at all: 'Reach' is the only way G/W interacts with a flier here, and 'Discard a card: this creature gets +1/+1 until end of turn' turns a flooded hand into blocking size. It replaces a second Cathar Commando, which would have been a third sideboard slot aimed at the artifact/enchantment class already covered by Angelic Purge x2 and the maindeck Commando.
Valorous Stance                             x1    W      U    vs targeted removal: 'Target creature gains indestructible until end of turn' protects a doubled attacker mid-combat; the other mode destroys a toughness-4-or-greater wall that a board of 1/1s cannot get through even doubled.
Angelic Purge                               x2    W      C    vs the cube's 24 artifacts and 25 enchantments: 'Exile target artifact, creature, or enchantment'. The additional cost - 'sacrifice a permanent' - is nearly free here, since a spare 1/1 token is the deck's most abundant resource.
Thalia, Heretic Cathar                      x1    W      R    vs decks that hold up instant-speed interaction: 'Creatures and nonbasic lands your opponents control enter tapped' means a flashed-in blocker arrives tapped and cannot stop the burst-turn swing, and it taxes every dual in this cube.
Slayer of the Wicked                        x2    W      U    vs the cube's three largest non-Human tribes (Vampire 23, Zombie 15, Werewolf 13 = 51 cards): 'you may destroy target Vampire, Werewolf, or Zombie' on a 3/2 body, which is also another creature to tap for Cryptolith Rite mana.
Soul-Guide Gryff                            x1    W      C    vs graveyard decks (75 cards, 27% of the cube): 'When this creature enters, exile up to one target card from a graveyard' - the only graveyard answer in G/W. At {4}{W} it is castable off Cryptolith Rite mana far earlier than off lands alone.
```

## ANALYSIS

### DECK IDENTITY

A G/W deck that turns its own board into mana and then doubles it. Nine of its twenty-three nonland copies create creature tokens and eight are creature cards, and Cryptolith Rite - 'Creatures you control have "{T}: Add one mana of any color."' - makes every one of those bodies a mana source. Second Harvest copies every token at instant speed; Unnatural Growth doubles the power of the whole team at the beginning of each combat. Because all three of those are singleton rares, the redundancy lives one layer down: nine token-making copies make the WIDE BOARD precondition near-automatic, and Rally the Peasants x2 and Intangible Virtue x2 are non-green conversion steps that reach lethal without either doubler. Stated plainly: P(at least one payoff copy by turn 7) is 0.94, P(at least one doubler) is 0.58, and P(all three named pieces) is 0.04 - the deck is built to win on the first of those numbers.

### THE SUMMONING-SICKNESS RULING THAT DECIDES WHEN TO CAST SECOND HARVEST

Second Harvest says *"For each token you control, create a token that's a copy of that permanent."* The copies are newly-created creatures, and that has two consequences most token decks get wrong:

1. **They cannot attack** the turn they arrive.
2. **They cannot tap for Cryptolith Rite mana** either - the Rite grants a `{T}` ability, and a summoning-sick creature cannot use one.

And because Unnatural Growth triggers *"at the beginning of each combat"*, copies created after that trigger has already resolved miss the doubling entirely. So the line is **not** "attack, then double the board." It is: cast Second Harvest on the *opponent's end step*, untap with twice the board, then let Unnatural Growth double the power of all of it. Casting it a turn early is the correct play, not a hedge.

### WHY VIGILANCE IS A MANA ABILITY HERE

Intangible Virtue reads *"Creature tokens you control get +1/+1 and have **vigilance**."* In the other three decks that is a combat clause. In this one it is a mana clause: an attacking token does not tap, so after attackers are declared every one of them is still untapped and still available to tap for Cryptolith Rite mana. The deck attacks and then, with the same bodies, pays for Rally the Peasants, Clear Shot, Valorous Stance, a Cathar's Call or a Duskwatch activation mid-combat.

The one thing it *cannot* pay for is Second Harvest - see above.

### THE SINGLETON PROBLEM, AND WHERE THE REDUNDANCY ACTUALLY LIVES

All three named combo pieces are rares, and the pool rules cap rares at one copy each. So:

| Event | P by turn 7 (14 cards seen) |
|---|---|
| At least one of the 6 payoff copies | **0.94** |
| At least one doubler (Second Harvest *or* Unnatural Growth) | 0.58 |
| All three named pieces (Rite + Harvest + Growth) | **0.04** |

A deck that needs the third row is not a deck. So the redundancy is built one layer down: fourteen of twenty-three slots make the *wide board* and the mana, and Rally the Peasants x2 plus Intangible Virtue x2 convert that board to lethal with **zero green pips and zero rares**. On a six-token board under one Virtue that is 6 x 2/2 = 12 power, and Rally takes it to 6 x 4 = 24. The named combo is the best draw, not the only one.

### THE EMERGE ARITHMETIC - AND WHY THIS IS THE ONE DECK IT DOESN'T KILL

Emerge reads *"reduced by that creature's mana value"*, and a creature token's mana value is **0**. Sacrificing a 1/1 discounts Decimator of the Provinces by nothing; it stays at `{6}{G}{G}{G}`, nine mana. That kills it in Decks A, B and D.

Here it doesn't, because Cryptolith Rite turns a nine-body board into nine mana. Decimator is cut on the **rare budget** instead - five of five spent - which is a different and honest reason. Worth knowing if you ever move the budget around.

### SOMBERWALD SAGE'S SELF-DEFEATING MANA

The locked sketch ran Somberwald Sage x2. Its text is *"{T}: Add three mana of any one color. **Spend this mana only to cast creature spells.**"* In that build, creature spells were 6 of 23 nonland copies - and **two of those six were Somberwald Sage itself**, which its own mana can never pay for. The operative figure is 4 of 23 (17%). Its mana could not cast Cryptolith Rite, Second Harvest, Unnatural Growth, Intangible Virtue, Cathar's Call, Ulvenwald Mysteries, Gather the Townsfolk, Join the Dance or Rally the Peasants - the entire plan. Scorned Villager (`{T}: Add {G}`, unrestricted) is what the deck actually wanted, and the grill put it in.

### SLOT ALLOCATION

Nonland cards: **23**

| Slot | % of nonland | Count | Rationale |
|---|---|---|---|
| Interaction | 13.0% | 3 | Clear Shot, Valorous Stance, Cathar Commando - inside the 10-20% combo band. Clear Shot dropped to one copy after the Challenger's count: its damage is the power of a creature you control, and off this deck's most abundant body - a 1/1 token, 2/2 under Intangible Virtue - that is 2 to 3 damage, not the 'very large removal spell' the earlier rationale claimed (which was conditioned on Unnatural Growth, a card seen 35% of the time). Valorous Stance took the slot: 'Destroy target creature with toughness 4 or greater' answers the wall a board of 1/1s cannot cross even doubled, and 'Target creature gains indestructible until end of turn' is the only instant-speed protection G/W offers in this pool. |
| Threats/Payoffs | 26.1% | 6 | Second Harvest, Unnatural Growth, Rally the Peasants x2, Intangible Virtue x2. Above the 5-15% combo band by 11.1pp. Disclosed and deliberate: the band assumes a combo deck's payoff is one or two singleton pieces, and this one's are - but both are rares capped at a single copy, so the assembly gate could not be met without redundant conversion steps. Rally the Peasants x2 (an instant, '+2/+0' to the whole team) and Intangible Virtue x2 are those steps, and neither needs green mana, which is what makes them redundant with Unnatural Growth's {G}{G}{G}{G} rather than duplicative of it. |
| Engine & Infrastructure | 60.9% | 14 | Cryptolith Rite, Gather the Townsfolk x2, Join the Dance x2, Cathar's Call, Ulvenwald Mysteries, Pack Guardian x2, Duskwatch Recruiter x2, Scorned Villager, Mausoleum Guard, Thraben Inspector - fourteen copies. Above the 40-50% band. The pre-grill rationale grounded this overage on Cryptolith Rite making every body a land, and the Challenger correctly refused it: the Rite is 1 of 23 copies, about 35% to be seen by turn 7, and the same record discounts Unnatural Growth to 0.7 precisely because the Rite is often absent. A ground cannot lean on a card being present and on it being optional at the same time. The overage is regrounded without the Rite: this is a combo deck whose three combo pieces are singleton rares that cannot be duplicated under the pool rules, so the only bucket that CAN be made redundant is the one that assembles the precondition. Fourteen of twenty-three slots on token production and mana is what takes P(wide board by turn 7) to near-certainty while P(all three named pieces) is 0.04. |

*3 + 6 + 14 = 23 = nonland_total, recomputed from the deck array after the Phase 9 repair.*

### LAND & PIP MATH

- **Land target trace:** `{"base_lands": 17, "base_window": [2, 4], "base_p_window": 0.7945, "avg_mv": 2.65, "reference_avg_mv": 2.5, "accel": 3, "adjustment": -0.3, "raw_target": 16.7, "clamped": false, "recommended_land_count": 17, "p_window_at_recommended": 0.7945}`
- **Recount after FILL:** Recomputed from the final list: avg MV 2.65, ramp 2, cantrip 1, accel 3 -> 17 lands. No deviation.
- **Deviation:** none - built to 17
- **Composition:** Green-primary base for a four-green-pip top end. Overgrown Farmland ('This land enters tapped unless you control two or more other lands. {T}: Add {G} or {W}.') is the pair's only untapped-capable dual per dossier.duals_by_pair.WG and costs one of five rare/mythic slots. Radiant Grove x2 is 'Land - Forest Plains' with 'This land enters tapped' unconditionally. Evolving Wilds x2 fetch either basic but produce no mana themselves and the audit does not credit them as coloured sources; this record follows that convention. Cryptolith Rite is the real fixing: it adds mana of ANY colour off any creature, so from the turn it resolves the base's colour split matters far less than its raw count.
- **Pips:** 18 green pips and 13 white pips (58% / 42%) across the 23 nonland cards, after the Phase 9 repair shifted one green and added two white. Join the Dance's 'Flashback {3}{G}{W}' adds 2 green and 2 white of demand that mana_cost does not carry; Rally the Peasants' 'Flashback {2}{R}' is DEAD at 0 red sources and counted as nothing. Land split: 7 Forest, 5 Plains, 1 Overgrown Farmland, 2 Radiant Grove, 2 Evolving Wilds = 17, giving 10 green and 8 white coloured sources on the audit's convention - gaps of -0.7pp and -5.2pp. Methodological note the Challenger raised and which is correct: the audit divides coloured sources by LAND COUNT (17) rather than by total sources (18), so with duals present the two production percentages sum above 100% and both gaps can read negative at once. The earlier claim that these were 'the tightest of the four decks' rested on that artefact and is withdrawn. The binding requirement is still Unnatural Growth's {1}{G}{G}{G}{G} against 10 green sources.

### COUNT-DEPENDENT VERDICTS

| Card | Verdict | Count against this list |
|---|---|---|
| Second Harvest | INCLUDE x1 | 'For each token you control, create a token that's a copy of that permanent.' Token count against this list: 9 of 23 nonland copies create creature tokens. The 14-token figure quoted earlier is a CEILING, not a floor - it requires every copy drawn and every flashback paid (Gather 4 + Join the Dance 8 + Pack Guardian 2). At the thesis turn the structural gate sees 14 cards, so each 2-of yields about 0.7 expected copies and the expected board is closer to SIX creature tokens. Six copies for four mana at instant speed is still the largest single swing in the deck, and it also copies CLUE tokens from Thraben Inspector and Ulvenwald Mysteries. |
| Cryptolith Rite | INCLUDE x1 | Every creature becomes a land. Against the FINAL list that is 8 nontoken creature copies plus the token bodies - so on a typical turn-5 board of six creatures it is +6 mana, which is the difference between Unnatural Growth being a turn-8 card and a turn-5 card. It is also the deck's colour fixing, since it adds mana of any colour. (The pre-repair version of this entry said 6 nontoken copies and 14+ token bodies; both figures predate the Phase 9 swaps and are corrected here - 8 nontoken copies, and a token-body ceiling of 12 with roughly 6 expected on board at the thesis turn.) |
| Unnatural Growth | INCLUDE x1 (reliability weight 0.7) | 'At the beginning of each combat, double the power and toughness of each creature you control until end of turn.' On a board of eight 2/2 tokens under one Intangible Virtue that is 32 power in one combat. Discounted to 0.7 in the assembly check because {1}{G}{G}{G}{G} is four green pips against 11 green sources - it is castable on curve only with Cryptolith Rite down or a green-flooded draw. |
| Intangible Virtue | INCLUDE x2 | 'Creature tokens you control get +1/+1 and have vigilance.' 9 of the 23 nonland copies make creature tokens and tokens are the large majority of the board. This entry is also the resolution of the shape judge's weak_keystone flag, and the Challenger showed the first version of that resolution named the one spell vigilance-mana CANNOT pay for. Corrected: a vigilant token that attacks does not tap, so it remains available to tap for Cryptolith Rite mana after attackers are declared - and what that mana can be spent on is Rally the Peasants ({2}{W}, instant), Clear Shot ({2}{G}, instant), Valorous Stance ({1}{W}, instant), a Cathar's Call, or a Duskwatch Recruiter activation. It CANNOT usefully be spent on Second Harvest, because copies created after attackers are declared are summoning-sick (so they neither attack nor tap for Rite mana) and, since Unnatural Growth triggers 'at the beginning of each combat', they also miss the doubling entirely. Second Harvest belongs on the opponent's end step. |
| Rally the Peasants | INCLUDE x2 | 'Creatures you control get +2/+0 until end of turn' - castable for {2}{W}; the {2}{R} flashback is off-core and counted at nothing. Added at Phase 5B step 6 to fix an assembly FAIL: payoff was 4 copies / 3.7 effective for p=0.74 against a 0.75 threshold. It is the redundancy the locked lens asked for, because it converts board width to damage with zero green pips - on a ten-body board it is +20 damage for three mana at instant speed. |
| Decimator of the Provinces | CUT | The emerge arithmetic is the same everywhere - 'reduced by that creature's mana value' and a token's mana value is 0 - so it stays {6}{G}{G}{G}, nine mana. Unlike the other three decks this pipeline CAN pay nine mana, because Cryptolith Rite turns a nine-body board into nine mana. It is cut on the rare budget instead: 5 of 5 slots are spent on Cryptolith Rite, Second Harvest, Unnatural Growth, Overgrown Farmland and Thalia, and Unnatural Growth doubles the whole team where Decimator adds a flat +2/+2. |
| It of the Horrid Swarm | CUT | Same arithmetic at emerge {6}{G} = 7 mana after sacrificing a 0-MV token; it returns two 1/1 Insects, so the deck pays seven mana and one body for a net of two bodies plus a 4/4. Join the Dance produces two bodies for two mana. |
| Somberwald Sage | CUT (reversed from the locked sketch at FILL) | The locked sketch ran two copies. 'Spend this mana only to cast creature spells' - and creature spells in the locked build were 6 of 23 nonland copies, of which TWO WERE SOMBERWALD SAGE ITSELF, which its own mana can never pay for. The operative figure is therefore 4 of 23 (17%), not 6 of 23; the Challenger caught the self-contradiction and the corrected number makes the cut stronger, not weaker. Its mana cannot pay for Cryptolith Rite, Second Harvest, Unnatural Growth, Intangible Virtue, Cathar's Call, Ulvenwald Mysteries, Gather the Townsfolk, Join the Dance or Rally the Peasants - which is the entire plan. Replaced with Pack Guardian x2 at FILL, and Scorned Villager at Phase 9 is the unrestricted mana creature the deck actually wanted. |
| Ulvenwald Mysteries | INCLUDE x2 (reliability weight 0.6) | 'Whenever a nontoken creature you control dies, investigate' and 'Whenever you sacrifice a Clue, create a 1/1 white Human Soldier creature token.' Double-gated: the investigate needs one of only 6 nontoken creature copies to die, and turning the Clue into a body costs a further {2}. It stays because a Clue is a TOKEN, so Second Harvest copies it, and because the {2} is cheap once Cryptolith Rite is making mana off the board. |
| Duskwatch Recruiter // Krallenhorde Howler | INCLUDE x2 | '{2}{G}: Look at the top three cards of your library. You may reveal a creature card from among them and put it into your hand.' Hit rate is 8 of 23 nonland copies after the repair. It is a two-mana body - a Cryptolith Rite source that arrives on turn 2 - and a mana sink. One honest limit the Challenger identified: the card also reads 'At the beginning of each upkeep, if NO SPELLS WERE CAST last turn, transform this creature', and the flip side Krallenhorde Howler has no {2}{G} activation. A combo deck holding up Second Harvest on the opponent's end step is a deck that cast nothing on its own turn, so on exactly the turns the sink matters most it can flip away. Activating the ability is not casting a spell and does not prevent the flip. |
| Pack Guardian | INCLUDE x2 (reliability weight 0.8) | 'Flash. When this creature enters, you may discard a land card. If you do, create a 2/2 green Wolf creature token.' Two bodies at instant speed for four mana, both of which tap for Cryptolith Rite mana, and the flash lets them arrive on the opponent's end step so they are untapped and unsick on the burst turn. Discounted to 0.8 because the second body needs a land card in hand. Its four green pips are also what makes {G}{G}{G}{G} reachable. |
| Cathar's Call | INCLUDE x2 (reliability weight 0.8) | 'At the beginning of your end step, create a 1/1 white Human creature token' with no per-body cost - a free body, and therefore a free mana, every turn. Discounted to 0.8 as an Aura that needs a creature already on the battlefield and can be two-for-oned in response. |
| Cathars' Crusade | CUT | It would fire once per Second Harvest copy, which is the largest single burst available in the slice. Cut on the rare budget: 5 of 5 spent, and the three kill pieces plus the untapped dual all outrank it. It is the anchor of a different pipeline in this cube. |
| Torens, Fist of the Angels | CUT | 'Whenever you cast a creature spell' - 6 of 23 nonland copies are creature spells (26%), the lowest creature density of the four decks, because this build's bodies come from sorceries and enchantments. It is also a rare. |
| Wedding Announcement // Wedding Festivity | CUT | A free body every end step is exactly what this deck wants, and the rejected resilient sketch chose it for that. Cut on the rare budget: Cathar's Call does the same job at uncommon and therefore at two copies, which is twice the rate for the same slot cost. |
| Crusader of Odric | CUT | Its size is the creature count, and this deck has the highest creature count of the four - but it is a NONTOKEN creature, so Second Harvest cannot copy it and Intangible Virtue x2 do not pump it. Unnatural Growth does double it, which is one of six payoff copies. |
| Mentor of the Meek | CUT | Tokens here enter as 1/1s so the trigger rate is high - 10 of 23 copies make qualifying creatures - but each draw costs {1}, and this deck's spare mana is committed to a five-mana enchantment and a four-mana instant on the same turn. Duskwatch Recruiter's activation is the sink that fits the curve. |
| Spider Spawning | CUT | 'for each creature card in your graveyard' - only 6 of 23 nonland copies are creature cards, and tokens cease to exist rather than becoming graveyard cards, so its denominator is the smallest part of this deck. |
| Moldgraf Millipede | CUT | Same 6-of-23 graveyard-creature denominator. |
| Splinterfright | CUT | Same 6-of-23 graveyard-creature denominator. |
| Wrenn and Seven | CUT | A mythic against a spent budget; its -3 makes ONE token sized by land count (17), where Second Harvest wants many tokens to copy rather than one large one. |
| Garruk Relentless // Garruk, the Veil-Cursed | CUT | A mythic against a spent budget; one 2/2 Wolf per turn is the same rate as Cathar's Call at uncommon. |
| Mayor of Avabruck // Howlpack Alpha | CUT | 'Other Human creatures you control get +1/+1' - Human tokens here are Gather's 4 and Join the Dance's 8, a real count, but it is a rare against a spent budget and Intangible Virtue covers ALL token types at uncommon. |
| Metallic Mimic | CUT | Naming Human would hit Gather's 4 and Join the Dance's 8 of roughly 14 token bodies. Rare, budget spent. |
| Tireless Tracker | CUT | 17 landfall triggers over a long game and its Clues are Second Harvest targets - genuinely on-plan. Rare, budget spent; Ulvenwald Mysteries supplies Clues at uncommon and two copies. |
| Eldritch Evolution | CUT | 'mana value X or less, where X is 2 plus the sacrificed creature's mana value' - off a 0-MV token it finds a 2-drop, and this deck's most expensive creature is Pack Guardian at 4. |
| Duel for Dominance | CUT | Coven asks for 'three or more creatures with different powers'. This deck's board is overwhelmingly identical 1/1 tokens that all become 2/2s together under Intangible Virtue and all double together under Unnatural Growth - unlike the Cathars' Crusade pipeline, nothing here makes powers diverge. Distinct powers come only from the 6 nontoken creature copies. The fight half is still unconditional, but Clear Shot at {2}{G} does the same job with no condition attached at all. |
| Moonlight Hunt | CUT | 'Each creature you control that's a Wolf or a Werewolf' - Wolf/Werewolf count in this mainboard is 2, the Wolf tokens from Pack Guardian x2, and only when the land discard was paid. |
| Strength of Arms | CUT | The token clause needs an Equipment; this mainboard contains 0 Equipment. |
| Voice of the Blessed | CUT | Lifegain triggers in this mainboard: 0. Rare, budget spent. |
| Hopeful Initiate | CUT | 'Remove two +1/+1 counters from among creatures you control' - +1/+1 counter sources in this mainboard: 0. Unnatural Growth and Intangible Virtue both grant static or until-end-of-turn bonuses, not counters. |
| Odric, Lunarch Marshal | CUT | Admitted only by the raised threat cap. Its flying grant needs a flier: this list has 0 flying creatures after Lingering Souls was cut for Rally the Peasants. Rare, budget spent. |
| Inspiring Captain | CUT | 'creatures you control get +1/+1 until end of turn' at four mana is a strictly worse Rally the Peasants (+2/+0 for three, at instant speed) for this deck's purpose, which is converting width to damage on one turn. |
| Lingering Souls | CUT (reversed at FILL) | It was in the locked sketch. Its 'Flashback {1}{B}' is dead at 0 black sources, so it is three mana for two bodies - against Join the Dance's two mana for two bodies with a LIVE {3}{G}{W} flashback, and Gather the Townsfolk's two mana for two bodies. It was the worst token rate in the list, and its slot went to Rally the Peasants x2 to fix the assembly FAIL. |
| Ghoulish Procession | CUT (splash declined) | Its trigger reads nontoken creature deaths - 6 of 23 copies - and it costs {1}{B} against 0 black sources. |
| Siege Zombie | CUT (splash declined) | 'Tap three untapped creatures you control' competes directly with Cryptolith Rite for the same untapped bodies, which in this deck are the mana base. 0 black sources. |
| Skirsdag High Priest | CUT (splash declined) | Same competition for untapped creatures, plus a morbid gate this deck has no sacrifice outlet to satisfy. 0 black sources. |
| Scorned Villager // Moonscarred Werewolf | INCLUDE x1 (added at Phase 9) | Challenger absence 1, and my batch reason for cutting it ('a card that only finds a land') was factually false: its text is '{T}: Add {G}', a mana ability, and flipped it is '{T}: Add {G}{G}'. Against this list it is unrestricted mana for all 18 green pips and all 23 nonland copies, where Somberwald Sage's mana was restricted to 4 of 23. It is also a CREATURE, so it is simultaneously a Cryptolith Rite source, an Unnatural Growth target and a body Second Harvest can be cast off - and it is the deck's only Rite-independent accelerant toward {1}{G}{G}{G}{G}. |
| Mausoleum Guard | INCLUDE x1 (added at Phase 9) | Challenger absence 3, and an include_candidate that had reached no verdict at all. 'When this creature dies, create two 1/1 white Spirit creature tokens with flying.' Two counts: it raises nontoken creature copies from 6 to 8, which is the denominator that discounts Ulvenwald Mysteries to 0.6; and it is the ONLY source of flying bodies available to this pipeline, against a cube whose evasion class is 58 cards (20.9%) and a mainboard that had zero fliers and zero reach. |
| Valorous Stance | INCLUDE x1 (added at Phase 9) | Took the second Clear Shot's slot. Clear Shot's damage is the power of one of your creatures, which off a 1/1 token (2/2 under Intangible Virtue) is 2 to 3 - so 2 of 3 interaction copies were dealing 2 damage in the common case. Valorous Stance's 'Destroy target creature with toughness 4 or greater' has no such scaling, and its indestructible mode is the only instant-speed protection in G/W in this pool. MB 1 + SB 1 = 2, at the uncommon cap. |
| Fiend Hunter | CUT | Challenger absence 4 and the swap it proposed for Clear Shot #2. Its 'you may exile another target creature' is genuinely unconditional where Clear Shot is not. Contested on the pip count: {1}{W}{W} is a double-white cost against 8 white sources in a green-primary base, and turn three is when this deck wants Cathar's Call, Rally the Peasants or Ulvenwald Mysteries. Valorous Stance answers the same 'a body too big to fight' problem at {1}{W} - one white pip instead of two - and also supplies the instant-speed protection the disruption-fizzle entry needs. |
| Hamlet Captain | CUT | Challenger absence 2, count conceded: 12 of the 14 one-shot token bodies this deck makes are Humans (Gather the Townsfolk 4, Join the Dance 8), so 'other Humans you control get +1/+1 until end of turn' would cover most of the board. Contested on a head-to-head count against the card already in that slot: Intangible Virtue costs the same two mana, gives +1/+1 PERMANENTLY rather than until end of turn, covers all 14 token bodies including the two non-Human Wolf tokens, and has no attack-or-block gate - Hamlet Captain does nothing on a turn it stays home, which for a combo deck holding up an instant is a common turn. |
| Dauntless Cathar | CUT | An include_candidate that had reached no verdict. A 3/2 body plus '{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit creature token with flying' is a graveyard mana sink and a flier - both things this deck wanted. It lost the slot to Mausoleum Guard, which produces TWO flying bodies to its one and does so on a death trigger rather than requiring {1}{W} at sorcery speed from the graveyard. |
| Travel Preparations | CUT | An include_candidate that had reached no verdict. 'Put a +1/+1 counter on each of up to two target creatures. Flashback {1}{W}' is four permanent counters from one card. Cut because this deck's conversion steps multiply power rather than add it - Unnatural Growth doubles, Second Harvest doubles the body count, Rally the Peasants is +2/+0 to everything - so four counters spread over two creatures is the smallest of those effects. Note for the record: because Travel Preparations is NOT in the mainboard, the Hopeful Initiate verdict's statement that this list has 0 +1/+1 counter sources remains true. |
| Sigarda, Host of Herons | CUT | An include_candidate that had reached no verdict. A 5/5 flying hexproof body for {2}{G}{W}{W} would answer both the evasion gap and the removal-protection gap at once. Cut on two counts: it is a MYTHIC against a rare budget that is 5 of 5 spent, and {2}{G}{W}{W} is five mana with a double-white requirement against 8 white sources on the same turns the deck wants {1}{G}{G}{G}{G}. |
| Westvale Abbey // Ormendahl, Profane Prince | CUT (land, evaluated at Phase 9) | Challenger absence 5. '{5}, {T}, Sacrifice five creatures: Transform this land' is genuinely payable here because Cryptolith Rite turns the token board into the {5} - this is the one deck of the four where that is true. Cut on two counts: it taps for {C} only, and this list has 31 coloured pips across 23 nonland cards including {1}{G}{G}{G}{G}, so a colourless land takes coloured sources from 18 to 17 against the most demanding pip requirement of the four decks; and sacrificing five bodies removes exactly what Second Harvest copies and Unnatural Growth doubles. It would also displace Overgrown Farmland, the pool's only untapped-capable G/W dual. |
| Cryptolith Fragment // Aurora of Emrakul | CUT | Challenger absence 6, and my batch reason ('none is a creature, so none is a Cryptolith Rite mana source') was false of it - '{T}: Add one mana of any color' makes it literally a mana source and a Rite-independent answer to {G}{G}{G}{G}. Cut on a head-to-head count against Scorned Villager, which took the slot: {1}{G} against {3}, enters untapped against 'This artifact enters tapped', costs no life against 'Each player loses 1 life' per activation, and is a creature - so it is also a Rite source, an Unnatural Growth target and a Second Harvest enabler, none of which an artifact is. |
| Subjugator Angel | CUT | Challenger absence 7. 'When this creature enters, tap all creatures your opponents control' would clear every blocker on the burst turn and is payable off Rite mana. Cut on the pip count: {4}{W}{W} is six mana with a double-white requirement against 8 white sources, on the same turn the deck wants {1}{G}{G}{G}{G} or {2}{G}{G}. Mausoleum Guard answers the same 'we cannot get through' problem for four mana and one white pip. |

### SKELETON SELECTION (Phase 5B Step 0)

- **Archetype family:** combo — Locked thesis default_role = combo; the kill is one burst turn - board into mana, mana into a doubled board, doubled board into a doubled attack - not incremental combat damage.
- **Chosen:** Sketch 2 — lens `most redundant assembly`
- **Judge grounds:** The only build that answers the rubric's actual discriminator - how you cope with three singleton kill pieces - by making the PRECONDITION for the kill (a critical-mass token board plus a backup mana source) redundant instead of the impossible-to-duplicate rares.
- **Rejected** (`fastest goldfish`, family combo): Judge: fastest to a wide board on an empty stack, but never engages the singleton-rares problem at all - if any one of Rite, Harvest or Growth is stuck in hand or answered, the plan has no built-in fallback, which matters at a competitive power level where opponents interact.
- **Rejected** (`most resilient to disruption`, family combo): Judge: gives partial, thesis-grounded resilience - Wedding Announcement's flip side can substitute for Unnatural Growth's pump role if that one enchantment is answered - but it does nothing for the other two singletons, so the problem is only half-addressed.
- **Harvested from rejected builds:** Pack Guardian (from `none - added at FILL`, Enabler/Fodder); Rally the Peasants (from `none - added at FILL step 6`, Payload/Payoff)
- **Weak keystones:** [{'card': 'Intangible Virtue', 'flagged_role': 'redundant anthem', 'judge_reason': '\'nothing else in the listed package is an anthem - it is the only card of its kind, so "redundant" mischaracterizes it. The redundancy claim is about interchangeable token-GENERATORS; Intangible Virtue is not a generator and has no substitute.\'', 'resolution': "RESOLVED by re-assignment, and then CORRECTED at the grill. The card stays at two copies with its role recorded as Payload/Payoff on its real function here: 'Creature tokens you control get +1/+1 and have VIGILANCE.' Vigilance is the load-bearing half - an attacking token does not tap, so it is still available to tap for Cryptolith Rite mana after attackers are declared, which pays for Rally the Peasants, Clear Shot, Valorous Stance, a Cathar's Call or a Duskwatch activation. The first version of this resolution said it pays for Second Harvest, which the Challenger correctly refuted: Second Harvest's copies are summoning-sick, so they cannot attack or tap for Rite mana, and because Unnatural Growth triggers 'at the beginning of each combat' they miss the doubling too. Second Harvest belongs on the opponent's end step, and the vigilance-mana claim now names only spells it can actually pay for. The redundancy the lens asked for is supplied by Rally the Peasants x2, a genuine second non-green conversion step."}]

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:1  2:12  3:5  4:4  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.7: Unnatural Growth@0.7) → p=0.88 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8.7: Cathar's Call@0.8, Ulvenwald Mysteries@0.6, Pack Guardian@0.8, Pack Guardian@0.8, Mausoleum Guard@0.7) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 90%
  play by turn: T1 16%  T2 92%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: This pipeline answers a wide board by being wider and then doubling: Second Harvest copies every token and Unnatural Growth doubles the power of the result, so an opposing swarm loses the size race rather than being removed. The core colours field no mass -X/-X at all - both the pool's sweepers of that kind are black. The cost of conceding is that a faster go-wide deck can kill before turn 7, which is exactly what Ambush Viper x2 and Slayer of the Wicked x2 are sideboarded for.
  OK        single_large_threat: Clear Shot, Valorous Stance
  OK        noncreature_permanents: Cathar Commando
  CONCEDED  stack: G/W fields no counterspell in this pool, so nothing can be declared. For a combo deck this is the real cost of the colour pair: the burst turn cannot be protected, only timed. Second Harvest being an instant is the partial answer - it is held until the opponent's end step rather than cast into open mana.
  CONCEDED  graveyard: Soul-Guide Gryff at {4}{W} is the only graveyard answer in the core colours and it is a five-mana body in a deck already spending turn 5 on Unnatural Growth. It sits in the sideboard, where Cryptolith Rite mana makes it castable a turn or two earlier than its printed cost suggests.
```

- Assembly FAILED on the first run at payoff 4 copies / 3.7 effective -> p=0.74 against a 0.75 threshold - the narrowest failure in these four builds, and a direct consequence of all three kill pieces being singleton rares. Repaired by cutting Lingering Souls x2 (whose {1}{B} flashback is dead in G/W) for Rally the Peasants x2, taking payoff to 6 copies / 5.7 effective -> p=0.88, where it remains after the Phase 9 repair.
- No WARN-tier flags: curve PASS (1:1 2:12 3:5 4:4 5:1 across 23 nonland) and goldfish PASS (82% keepable, 90% three lands by turn 3, T2 play 92%). The 16% turn-1 play rate is the lowest of the four decks and is accepted: the only one-drop that advances this pipeline is Thraben Inspector, and a combo deck's turn 1 is not where its clock lives.
- Cryptolith Rite is deliberately NOT declared as an assembly-required engine role: it is 1 of 23 copies, no second copy is legal, and declaring it would fail the gate by construction. The Challenger was right that this cannot then be used to justify a bucket overage elsewhere, and the Engine rationale has been regrounded without it. What the non-declaration actually asserts is narrower and testable: the deck can hard-cast Second Harvest off four lands and Unnatural Growth off five at 17 lands, so the Rite accelerates the thesis rather than gating it. The two roles that genuinely are required - a wide board and a conversion step - are the two declared, at p=0.97 and p=0.88.
- Probabilities the record previously left implicit, now stated: P(at least one of the 6 payoff copies by turn 7) = 0.94; P(at least one of Second Harvest or Unnatural Growth) = 0.58; P(all three named pieces - Rite, Harvest, Growth) = 0.04. The deck is built to win on the first of those three numbers.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands are the one resource this deck converts best. Duskwatch Recruiter's '{2}{G}: Look at the top three cards of your library' is a repeatable sink; Join the Dance's 'Flashback {3}{G}{W}' rebuys two bodies; Cathar's Call makes a body with no further mana; Pack Guardian's cost is specifically 'discard a land card', so a flooded hand is what turns it into two bodies; and Scorned Villager converts a land drop's worth of mana into {G}{G} once flipped. That is 8 of 23 nonland copies. Two corrections the Challenger forced: Ulvenwald Mysteries is NOT a no-further-mana body source - its Clue-to-body conversion costs {2} and needs a nontoken death, which is why the same record discounts it to 0.6 - and the Duskwatch sink switches off on any turn no spell was cast, because the card transforms under exactly that condition. |
| screw | mitigation | 11 of the 23 nonland cards cost 2 or less, and the two most important early plays - Cryptolith Rite at {1}{G} and Gather the Townsfolk at {1}{W} - are both two-drops. Goldfish on the final list: 82% keepable, 90% three lands by turn 3. Evolving Wilds x2 fetch whichever basic is missing, which matters for the {G}{W} on Join the Dance. Cryptolith Rite itself is the deepest mitigation: once it resolves, every creature is an extra land. |
| decapitation | accepted | All three named kill pieces are rares capped at one copy, so each is answerable on sight and no second copy can be added - the pool does not allow it. Mitigating would mean abandoning the pipeline. What is bought instead is a layer down: 9 token-making copies make the wide-board precondition near-automatic, and Rally the Peasants x2 plus Intangible Virtue x2 convert that board to lethal with no green pips and no rare - the line that wins 94% of games. Losing Unnatural Growth costs the deck its largest turn, not its win condition; losing Cryptolith Rite costs it two turns of speed. |
| gas-out | mitigation | True card DRAW in this list is narrow and the record now says so plainly: 3 of 23 nonland copies (Thraben Inspector's Clue and Ulvenwald Mysteries' Clues, at {2} each to crack). Duskwatch Recruiter x2 is selection, not draw, and Cathar's Call draws nothing. What carries the mode instead is that this deck does not need cards so much as permanents: Second Harvest converts an empty hand into as many bodies as the board already holds, Cathar's Call makes a body every end step from nothing, and Join the Dance x2 are two casts each from one card. |
| raced | accepted | This is the mode a combo deck pays for. The list has 3 interaction copies of 23 and its clock does not start until a doubler resolves, so a deck that curves out on turns 1 to 4 is genuinely ahead. Mitigating properly would mean trading engine slots for removal, and the engine slots are also the board the payoffs multiply - every body cut pushes the burst turn later and makes the race worse. What bounds the cost: Intangible Virtue's vigilance lets the board attack and still block, Pack Guardian has flash so it ambushes a turn-four attacker, Mausoleum Guard now supplies two flying blockers, and the sideboard carries Ambush Viper x2, Slayer of the Wicked x2 and Noose Constrictor for reach. One honest limit: Slayer of the Wicked only destroys 'target Vampire, Werewolf, or Zombie' and is not a generic answer to a fast curve. |
| disruption-fizzle | accepted | Reclassified from mitigation to accepted at the grill, because coverage.stack already CONCEDES this class and timing is not a mitigation when the class is conceded. What is true and worth recording: Second Harvest is an INSTANT and is correctly cast on the opponent's end step, both because it dodges sorcery-speed interaction and because its copies would otherwise be summoning-sick - unable to attack, unable to tap for Cryptolith Rite mana, and, since Unnatural Growth triggers 'at the beginning of each combat', unable to be doubled. And once Unnatural Growth has resolved there is no spell left to answer, only the enchantment. What is accepted: G/W in this pool contains nothing that protects an ENCHANTMENT. Valorous Stance's 'Target creature gains indestructible' protects a creature, not Cryptolith Rite and not Unnatural Growth. Mitigating properly would mean a colour this pipeline does not have; the cost of accepting is that a removal spell on the Rite, or a counterspell on either doubler, sets the burst turn back to the fallback plan - Rally the Peasants x2 and Intangible Virtue x2 on a wide board, which is the line the deck wins with 94% of the time anyway. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Soul Separator | {3} plus a {5} activation is 8 mana across two turns, and it exiles a creature CARD from your graveyard - this pipeline's bodies are tokens, which cease to exist rather than becoming graveyard cards. |
| Archangel Avacyn // Avacyn, the Purifier | Its back face 'deals 3 damage to each other creature and each opponent' and it transforms on the death of any non-Angel creature you control - which here is every token and every Cryptolith Rite mana source. It would wipe its own mana base. |
| Restoration Angel | A rare against a 5-slot budget already claimed by Second Harvest, Cryptolith Rite, Unnatural Growth and the anthems; its blink re-uses one ETB for four mana while Join the Dance produces four bodies for two. |
| Cultivator Colossus | Admitted by the raised threat cap. {4}{G}{G}{G} is seven mana with three green pips and its payoff is putting LANDS onto the battlefield, not tokens - it competes with the burst turn for exactly the mana Cryptolith Rite generates and returns none of it. |
| Gisela, the Broken Blade | Admitted by the raised cap. A mythic 4/3 flier with no interaction with tokens, counters or Cryptolith Rite mana; its meld partner Bruna costs {5}{W}{W}. |
| Hamlet Captain | Pulled out of an adjective batch that misdescribed it. Its text reads a quantity: 'Whenever this creature attacks or blocks, other HUMANS you control get +1/+1 until end of turn', and 12 of the 14 one-shot token bodies this deck makes are Humans (Gather the Townsfolk 4, Join the Dance 8). Cut on a head-to-head count instead: Intangible Virtue costs the same two mana, gives +1/+1 PERMANENTLY to all 14 token bodies including the two non-Human Wolves, and has no attack-or-block gate. Hamlet Captain's pump is until end of turn and only on a turn it is in combat. |
| Cryptolith Fragment // Aurora of Emrakul | '{T}: Add one mana of any color' makes it literally a mana source, so the batch reason was false. It is a genuine Rite-independent answer to the {G}{G}{G}{G} requirement, which is the deck's binding cost. Cut on a head-to-head count against Scorned Villager, which took the slot: Scorned Villager costs {1}{G} against {3}, enters UNTAPPED, does not cost life ('Each player loses 1 life' every activation), and is a CREATURE - so it is also a Cryptolith Rite source, an Unnatural Growth target and a body Second Harvest can be cast off. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 2   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.30 adj [MV 2.65 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  58.1%  prod  58.8%  gap  -0.7pp  [OK]
  W  demand  41.9%  prod  47.1%  gap  -5.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] base: cube_mainboard mainboard only
[PASS] copy_limits: commons/uncommons max 2 each across MB+SB combined, rares/mythics max 1 each - verified by _tmp_validate_build.py check 3. Cathar Commando 1 MB, Valorous Stance 1 MB + 1 SB = 2 at the cap.
[PASS] rare_mythic_cap: 5 total MB+SB. Used exactly 5: Cryptolith Rite (R, MB), Second Harvest (R, MB), Unnatural Growth (R, MB), Overgrown Farmland (R, MB land), Thalia Heretic Cathar (R, SB).
[PASS] basics: Forest 7 / Plains 5 - format-supplied, exempt from copy limits, not present in the cube list
[PASS] colour_usability: every nonland card returns a non-None effective_cost.best_mode against core_colors [G,W] with splash_colors []. Rally the Peasants has printed color_identity [R,W] but is cast for {2}{W}; its {2}{R} flashback is never used and is not counted as a mode this deck relies on.
[PASS] splash: splash_colors = [] in the final deck; all three Phase 3 black candidates (Ghoulish Procession, Siege Zombie, Skirsdag High Priest) declined at FILL.
[PASS] deck_size: 40 mainboard (23 nonland + 17 land), 10 sideboard
```