---
deck_name: "wu-spirits-flash-tempo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-08-26T19:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  8x Island
  6x Plains
  1x Deserted Beach  This land enters tapped unless you control two or more other lands. {T}: Add {W} or {U}.
  2x Idyllic Beachfront  WU dual. This land enters tapped.
```

### CREATURES (15)

```
CMC  Card                                     Qty  Color  Role                Rar
  1  Lantern Bearer // Lanterns' Lift         x2   U      threat              C
  1  Mausoleum Wanderer                       x1   U      threat/interaction  R
  2  Metallic Mimic                           x1   C      payoff              R
  2  Niblis of the Urn                        x2   W      threat/interaction  U
  2  Twinblade Geist // Twinblade Invocation  x2   W      threat              U
  3  Nebelgast Herald                         x2   U      payoff/engine       U
  3  Spectral Shepherd                        x1   W      engine              U
  3  Spell Queller                            x1   WU     interaction/threat  R
  4  Tower Geist                              x2   U      infrastructure      C
  5  Battleground Geist                       x1   U      payoff              C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card              Qty  Color  Role                 Rar
  1  Essence Flux      x1   U      enabler/interaction  C
  1  Syncopate         x1   U      interaction          C
  2  Think Twice       x1   U      infrastructure       C
  3  Geistlight Snare  x2   U      interaction          U
  3  Lingering Souls   x2   W      enabler              U
```

### OTHER SPELLS (1)

```
CMC  Card                    Qty  Color  Role         Rar
  3  Imprisoned in the Moon  x1   U      interaction  C
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in                                                                    Rar
Cathar Commando       x2   W      vs artifacts (24 in cube) and enchantments (25); flash body means it is never a dead draw  C
Valorous Stance       x2   W      vs the 4 sweepers and vs any toughness-4+ blocker that walls the air force                 U
Angelic Purge         x1   W      vs a resolved must-answer permanent of any type                                            C
Bound by Moonsilver   x2   W      vs a single large threat and vs the 13 Werewolves ('can't attack, block, or transform')    C
Slayer of the Wicked  x1   W      vs Vampire (23) / Werewolf (13) / Zombie (15) decks — 51 creatures across the cube         U
Soul-Guide Gryff      x2   W      vs graveyard decks (75 cards / 27.1% density — flashback, disturb, reanimator)             C
```

## ANALYSIS

### DECK IDENTITY

WU Spirits flash-tempo. Twelve of the fifteen creature cards fly, and seventeen of the twenty-three nonland cards put a Spirit onto the battlefield. Nebelgast Herald turns each of those arrivals into a tapped opposing blocker, so the board the opponent builds is rarely allowed to block the board this deck builds. Battleground Geist and Metallic Mimic convert that air force into lethal damage, while Geistlight Snare, Syncopate and Spell Queller hold the door at instant speed on the turns the deck is not deploying. The three non-fliers (Metallic Mimic, Twinblade Geist x2) are ground bodies whose job is the anthem and the double-strike multiplier, not evasion.

### THE ENGINE, STATED AS A COUNT

The whole deck is one sentence of oracle text. Nebelgast Herald reads:

> Flash / Flying / **Whenever this creature or another Spirit you control enters, tap target creature an opponent controls.**

The trigger does not say "whenever this creature enters." It says *or another Spirit*. So the question the deck has to answer is: how many cards in the list put a Spirit onto the battlefield?

| Denominator | Count |
|---|---|
| Nonland cards | 23 |
| Creature cards | 15 |
| Cards that put a Spirit onto the battlefield | **17 of 23** |
| Spirit creature cards (13 natively + Metallic Mimic once it names Spirit) | 14 of 15 |
| Flying creature cards | 12 of 15 |
| Instants + sorceries | 7 of 23 (30.4%) |
| Cards that can put an enchantment onto the battlefield | 5 of 23 |

Seventeen of twenty-three. With one Herald out, three quarters of the deck's remaining cards are "tap a blocker" stapled to a body. Lingering Souls is the standout — one card, two Spirit tokens, **two** separate Herald triggers for three mana.

### THE THREE NON-FLIERS ARE NOT A MISTAKE

Twelve of fifteen creature cards fly. The three that do not — Metallic Mimic and Twinblade Geist x2 — are there for the conversion math, not the evasion:

- **Metallic Mimic** naming Spirit puts a +1/+1 counter on every Spirit that enters afterward. It is also a Spirit itself once it names the type, so it takes Battleground Geist's anthem and it triggers Herald.
- **Twinblade Geist** has double strike. Both of the deck's pump effects — Battleground Geist's `+1/+0` and Metallic Mimic's counter — are worth **double** on a double striker. A Twinblade Geist under both is a 4/4 double striker dealing 8.
- And Twinblade Geist's Disturb back, Twinblade Invocation, is an Aura reading `Enchanted creature has double strike` — which can be put on any of the twelve fliers. The ground body becomes air damage from the graveyard.

### A CARD THAT IS TWO CARDS, FOUR TIMES

Four mainboard cards cast a second time from the graveyard, none of which needs a graveyard *theme* to work:

| Card | Second cast | What comes back |
|---|---|---|
| Lantern Bearer // Lanterns' Lift | Disturb `{2}{U}` | An Aura: `+1/+1 and has flying` |
| Twinblade Geist // Twinblade Invocation | Disturb `{2}{W}` | An Aura: `has double strike` |
| Think Twice | Flashback `{2}{U}` | A card |
| Lingering Souls | Flashback `{1}{B}` | **Inaccessible — see below** |

Both Disturb backs read `If [this] would be put into a graveyard from anywhere, exile it instead`, so they are one-shot — but they are one-shot *for free*, in slots that already earned their keep as creatures.

### THE HONEST COST: LINGERING SOULS IS HALF A CARD HERE

`Lingering Souls` prints as `{2}{W}` with `Flashback {1}{B}`. Its printed `color_identity` is `[B,W]` — but `effective_cost.best_mode(card, [W,U], [])` returns `{mode: 'cast', cost_pips: {'W'}}`, so it is a legal core WU card, not a splash. This deck runs **zero black sources**, and the flashback is never cast.

That is a real cost and worth stating plainly: roughly half the card's printed value is unavailable. The reason it stays is the front half alone — 3 mana for two flying Spirit bodies is two Herald triggers, two Metallic Mimic counters and two Battleground Geist anthem recipients, and no other card in these colours at this cost does any of that. The alternative was a black splash, and a 17-land two-colour mana base built for a turn-5 clock cannot absorb 2–3 Swamps to enable the back half of two cards.

### WHAT THE GRILL CHANGED

The first pass of this list failed its own review in four places, and the repairs are worth recording because they are the difference between the deck as imagined and the deck as built:

1. **Essence Flux was cut on the wrong trigger.** The original reason read "only 3 mainboard ETBs are worth re-triggering." That reads Herald's trigger as *this creature enters*. It is *this creature **or another Spirit** you control enters* — so Essence Flux on any of the 14 other Spirits taps a blocker, leaves a permanent +1/+1 counter, and dodges targeted removal for `{U}` **while keeping the body on the battlefield**. It went back in.
2. **The flood plan credited Disturb with making bodies.** `Lanterns' Lift` and `Twinblade Invocation` both read `Enchant creature`. They are Auras. They add no creature, trigger no Herald, and cannot be cast on an empty board — which is precisely the flood state. Think Twice replaced a Syncopate.
3. **Two coverage classes were satisfied by the same three counterspells.** A counter answers a spell on the stack; it is not an answer to a permanent already on the battlefield. Imprisoned in the Moon replaced Silent Departure — it is the only unconditional, permanent answer in these colours, and it hits lands and planeswalkers too.
4. **`Geistlight Snare`'s enchantment clause was written off as dead.** It is not: `Lanterns' Lift`, `Twinblade Invocation` and `Imprisoned in the Moon` are all enchantments, so 5 of 23 cards can turn the Snare into a `{U}` counterspell.

### PLAY PATTERN

The deck wants to spend the opponent's turn, not its own. Nebelgast Herald, Spell Queller, Drogskol Shieldmate-style flash bodies and the counters all deploy at instant speed; the main phase is reserved for the sorcery-speed cards (Lingering Souls, Metallic Mimic, Imprisoned in the Moon). A representative turn 4 is: hold `{1}{U}` + `{2}{U}`, and if the opponent does nothing, flash in Herald at end of turn — tapping their blocker down going into your attack step. The alpha strike is a combat step, not a spell, which is why a counterspell has no target on the turn that matters.

The one line to avoid: **do not Essence Flux or Spectral Shepherd your own Spell Queller.** Its leave-the-battlefield trigger reads `the exiled card's owner may cast that card without paying its mana cost`.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:5  2:6  3:9  4:2  5:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.4: Metallic Mimic@0.8, Niblis of the Urn@0.8, Niblis of the Urn@0.8) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 13.6: Spell Queller@0.9, Essence Flux@0.7) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 68%  T2 96%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Nebelgast Herald, Niblis of the Urn, Battleground Geist, Essence Flux
  OK        single_large_threat: Imprisoned in the Moon, Spell Queller, Geistlight Snare, Syncopate
  OK        noncreature_permanents: Imprisoned in the Moon, Geistlight Snare, Syncopate, Spell Queller
  OK        stack: Geistlight Snare, Syncopate, Spell Queller, Mausoleum Wanderer
  CONCEDED  graveyard: No dedicated mainboard graveyard answer. Syncopate ('If that spell is countered this way, exile it instead of putting it into its owner's graveyard') and Spell Queller ('exile target spell') do deny fuel preemptively, but neither touches a graveyard that already exists. Soul-Guide Gryff is a 5-mana body that costs a full deployment turn against a goldfish-turn-5 clock, so both copies sit in the sideboard for the 75 graveyard cards.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Think Twice ('Draw a card. Flashback {2}{U}') is castable twice and its flashback is a genuine late-game mana sink at instant speed; Syncopate is an X-spell that scales directly with excess lands; Spectral Shepherd's '{1}{U}: Return target Spirit you control to its owner's hand' converts surplus mana into a re-bought Nebelgast Herald ETB. The two Disturb costs ({2}{U} on Lantern Bearer, {2}{W} on Twinblade Geist) are real late-game mana sinks that produce a second CARD from one slot — but they produce an Aura, not a body: an earlier version of this entry claimed a second body and the grill correctly refuted it from the oracle text ('Enchant creature'). They also require a creature already on the battlefield to enchant. |
| screw | mitigation | Five 1-MV cards (Mausoleum Wanderer, Lantern Bearer x2, Essence Flux, Syncopate) and six 2-drops mean a 2-land hand casts spells on turns 1-2; nothing in the list costs more than 5. The goldfish sim on the finished list returns 88% keepable hands and 96% of hands making a play by turn 2. Honest caveat: Syncopate is {X}{U} and is not a turn-1 play — at X=0 it counters 'unless its controller pays {0}', i.e. never — so the real turn-1 count is 4, not 5. |
| decapitation | mitigation | There is no single key card. Nebelgast Herald is at 2 copies and Niblis of the Urn x2 supplies the same tap effect on a different trigger; Battleground Geist and Metallic Mimic are two mechanically independent damage converters. Answering any one of them leaves 12 evasive bodies still attacking. Essence Flux and Spectral Shepherd both blank targeted removal on the piece that matters at instant speed. |
| gas-out | mitigation | Think Twice is two cards from one slot; Tower Geist x2 replaces itself on arrival ('look at the top two cards of your library. Put one of them into your hand'); Lantern Bearer x2 and Twinblade Geist x2 each cast a second time from the graveyard via Disturb; Lingering Souls x2 is two bodies per card. Resource ledger: 1 card tagged Cards: Net-Positive (Think Twice), 1 tagged Cards: Self-Replacing (Tower Geist), 4 further cards that cast twice from the graveyard. This is the deck's thinnest mode — total true card DRAW is Think Twice alone; Tower Geist selects 1 of 2 rather than drawing. |
| raced | mitigation | REWRITTEN after the grill refuted the previous entry, which cited Niblis of the Urn ('Whenever this creature ATTACKS' — inert on defence) and Stitched Mangler, a card not in this deck. The real defence: 12 flying creature cards can block ground attackers, and Nebelgast Herald has Flash, so it can be deployed during the opponent's upkeep and its 'whenever this creature ... enters, tap target creature an opponent controls' strips an attacker BEFORE the attack step. Spell Queller ('Flash ... exile target spell with mana value 4 or less') and Geistlight Snare x2 answer the pump or burn spell that would push damage through. Twinblade Geist's double strike deals first-strike damage on a block, which kills any attacker with toughness 2 or less before it deals damage back. Against the cube's fastest shells specifically, the sideboard adds Slayer of the Wicked ('destroy target Vampire, Werewolf, or Zombie' — 51 of 277 nonland cube cards carry one of those types) and Bound by Moonsilver ('can't attack, block, or transform'). |
| disruption-fizzle | mitigation | The critical turn is an alpha strike, not a spell, so a counterspell has no target on it. If removal answers the key attacker mid-combat, Essence Flux ({U} instant: 'Exile target creature you control, then return that card to the battlefield') blanks it entirely and keeps the body on the battlefield, and Spectral Shepherd does the same for {1}{U} by returning it to hand. Geistlight Snare x2 and Syncopate are held up to counter the removal itself. Note the honest limit: Essence Flux on Spell Queller returns the exiled spell to its owner, so Queller is the one creature this line must not target. |

### COUNT-DEPENDENT VERDICTS

| Card | Count against this list | Verdict |
|---|---|---|
| Battleground Geist | Spirit creatures receiving '+1/+0': all 14 of the other creature cards (13 natively Spirit, plus Metallic Mimic once it names Spirit), plus all 4 Lingering Souls tokens. On a turn-5 board of four to six fliers this is roughly +4 to +6 damage. | **INCLUDE** |
| Metallic Mimic | Spirits that can enter after it: 14 other Spirit creature cards + Lingering Souls x2 (4 tokens) = 16 of the other 22 nonland cards. Discounted to weight 0.8 in the assembly gate because a copy drawn late converts nothing already deployed. | **INCLUDE** |
| Geistlight Snare | Spirit clause: 17 of 23 nonland cards put a Spirit onto the battlefield, so from turn 3 on it is essentially always {1}{U}. Enchantment clause: CORRECTED — an earlier version of this record said '0 of 23 nonland cards are enchantments, so the second {1} reduction never applies.' That was wrong and the grill caught it. Lanterns' Lift and Twinblade Invocation both read 'Enchant creature' and Imprisoned in the Moon is an Aura, so 5 of 23 cards can put an enchantment onto the battlefield and the Snare can cost {U}. | **INCLUDE — plan at {1}{U}, upgrade to {U} whenever a Disturb Aura or Imprisoned in the Moon is out** |
| Essence Flux | CORRECTED — an earlier version cut this on 'only 3 mainboard ETBs are worth re-triggering'. That reads the wrong trigger. Nebelgast Herald fires on 'this creature OR ANOTHER SPIRIT you control enters', so with a Herald out, Essence Flux on any of the 15 Spirit creature cards taps a blocker. It also leaves a permanent +1/+1 counter ('If it's a Spirit'), re-buys a Tower Geist dig, and dodges targeted removal for {U} while KEEPING the body on the battlefield — a strictly cheaper and better version of the job previously assigned to Spectral Shepherd's {1}{U} activation. Live targets: 15 of 15 creature cards. | **INCLUDE (added in grill repair)** |
| Delver of Secrets // Insectile Aberration | CORRECTED — instants + sorceries in this list are 7 of 23 = 30.4%, not the 5 of 23 = 21.7% previously recorded (Lingering Souls is a Sorcery and was omitted). P(flip on a given upkeep) = 0.304. | **CUT — the verdict survives the recount on a different ground than the original: at 30.4% it flips about every third upkeep, but it is a Human Wizard, so it neither triggers Nebelgast Herald nor takes Battleground Geist's +1/+0, and it competes for the same 1-mana slot as Mausoleum Wanderer and Lantern Bearer, both of which are Spirits.** |
| Apothecary Geist | 'if you control another Spirit' is live off 17 of 23 nonland cards, but at 4 mana it competes directly with Tower Geist, which costs the same, also flies, is also a Spirit, and draws a card. | **CUT** |
| Voice of the Blessed | Cards in this list that gain life: 0 of 23. The denominator is zero. | **CUT** |
| Odric, Lunarch Marshal | CORRECTED — creatures with flying are 12 of 15, not 14 of 16. He would share a keyword that 12 of 15 already have, and he is a ground Human for 4 who neither triggers Herald nor takes the anthem. | **CUT** |
| Intangible Virtue | Creature tokens this list makes: 4 (Lingering Souls x2 at 2 each). | **CUT** |
| Mentor of the Meek | Creatures with power 2 or less that enter: a large majority of the 15 — but 'you may pay {1}' competes for the same untapped mana Geistlight Snare and Syncopate need, which is the thesis. | **CUT** |
| Inspiring Captain | Board width at turn 5 is 4-6 creatures, so the ETB is roughly +5/+5 spread — but it is a 4-mana non-Spirit adding no Herald trigger. | **CUT** |
| Spontaneous Mutation | CORRECTED — the earlier reason said 'a deck with 0 self-mill'; Tower Geist x2 reads 'put ... the other into your graveyard'. Real count: by turn 4 the graveyard holds roughly 2-3 cards, so -X/-0 is -2/-0 to -3/-0. | **CUT — the effect is too small on that denominator to beat a Spirit body in the same slot** |
| Wedding Announcement // Wedding Festivity | Attacker width of 2+ is reliably met from turn 4. CORRECTED GROUND — the earlier reason ('a 3-mana do-nothing on the turn it lands, which a goldfish-turn-5 clock cannot afford') was a standard this list does not apply to itself: Battleground Geist is a 5-mana card that also adds zero damage on arrival. The real ground is tribal: Wedding Announcement makes 1/1 Human tokens, which take neither Battleground Geist's anthem nor Metallic Mimic's counter and trigger no Herald, whereas Lingering Souls at the same cost makes two Spirit fliers that do all three. | **CUT** |
| Docent of Perfection // Final Iteration | CORRECTED — instants + sorceries are 7 of 23, not 5. Wizards on board for the flip: 0. | **CUT** |
| Hopeful Initiate | CORRECTED — the earlier reason ('needs +1/+1-counter removal fuel this deck does not run') was false: Metallic Mimic naming Spirit puts a counter on each other Spirit entering. The real count is narrower than the grill's: the fuel requires Metallic Mimic (1 of 23 cards) to be on the battlefield AND two Spirits to have entered since, so the '{2}{W}, Remove two +1/+1 counters: Destroy target artifact or enchantment' mode is live in a minority of games. Cathar Commando (common, 2 copies legal, Flash) does the same job unconditionally for less. | **CUT — but noted: it is 1 of only 2 enchantment answers in the whole cube** |
| Crusader of Odric | CORRECTED — the earlier batch reason described 1/1 Human tokens and ground anthems, and this card is neither. Its real count against this list: power and toughness equal to creatures controlled, which at the turn-5 board width of 4-6 makes it a 4/4 to 6/6 for {2}{W}. | **CUT on the correct ground — it is a ground Human with no evasion in a deck whose damage comes from the air; it triggers no Herald and takes no anthem** |
| Cathars' Crusade | 'Whenever a creature you control enters, put a +1/+1 counter on each creature you control' — this list generates roughly 19 creature ETBs across 17 cards, the highest denominator of any cut card. | **CUT — {3}{W}{W} is above the deck's curve top and produces zero board on the turn it lands; the double-W cost is also the heaviest in the pool against 9 W sources** |
| Guardian of Pilgrims | SEED-GAP CARD, verdict recorded here (the Phase 5A clusters_note flagged it as unreachable by either band and the first draft never closed the gap — a grill finding). It is a {1}{W} Spirit Cleric, so it does trigger Nebelgast Herald and does take Battleground Geist's anthem; the pool of 2-mana Spirit bodies it competes with is Niblis of the Urn x2 and Twinblade Geist x2. | **CUT — its ETB ('target creature gets +1/+1 until end of turn') expires, and it has no evasion, while Niblis at the identical cost flies and strips a blocker every attack** |
| Mausoleum Guard | SEED-GAP CARD, verdict recorded here for the same reason. 'When this creature dies, create two 1/1 white Spirit creature tokens with flying' is three Spirit-count bodies from one card, two of which arrive THROUGH removal and through the cube's 4 sweepers, each one a Herald tap. | **CUT — it is a Human Scout, so it adds no Herald trigger on arrival and its payoff is gated on dying, which is a tempo loss on the turn it happens; Tower Geist occupies the same 4-mana slot as a Spirit that flies, draws, and pays immediately. It is the strongest sideboard candidate against the cube's 4 sweepers.** |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Throng, Makeshift Mauler, Drunau Corpse Trawler, Necroduality, Rooftop Storm | Zombie-typed payoffs/enablers ('nontoken Zombie you control enters', 'Zombie creature spells', 'search for a card named Wretched Throng'); this Spirit list runs zero Zombies, so the rider text is blank and the bodies are below rate without it. |
| Elder Deep-Fiend | 'Flash… Emerge {5}{U}{U}… tap up to four target permanents' is genuinely on-plan text, but even after sacrificing a 3-drop the cost is {2}{U}{U}+ and it eats a Spirit that Nebelgast Herald wanted on the board; against a goldfish-turn-5 clock it arrives after the game is decided. |
| Vanquish the Horde | 'Destroy all creatures' is symmetric and this deck is the one with the wide board; the cost reduction ('{1} less for each creature on the battlefield') is cheapest exactly when our own board is biggest. |
| Gather the Townsfolk, Crusader of Odric, Cathars' Crusade, Angel's Tomb, Rally the Peasants | Go-wide ground-token payoffs: the tokens are 1/1 Humans with no evasion, and this deck's damage comes from the air behind Nebelgast Herald taps — a ground anthem does not convert to damage against a blocker the deck is already tapping down. |
| Thing in the Ice // Awoken Horror | 'Whenever you cast an instant or sorcery spell, remove an ice counter' needs four instants/sorceries, and the flip 'return all non-Horror creatures to their owners' hands' bounces this deck's own Spirit board — the payoff is actively hostile to a creature-based tempo list. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.03 adj [MV 2.48 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  65.2%  prod  64.7%  gap  +0.5pp  [OK]
  W  demand  34.8%  prod  52.9%  gap -18.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] base: cube_mainboard only — every card verified by exact-name match against the working pool cache (Phase 5C check 2: PASS)
  [PASS] copy_limits: commons/uncommons <= 2, rares/mythics <= 1 — Phase 5C check 3: PASS. The validator was self-checked against a known-bad fixture (3x a rare, 43 cards, off-colour cards, 9 rares) which it correctly failed on checks 1, 3, 4 and 6.
  [PASS] rare_mythic_cap: 4 of 5 used. Mainboard: Mausoleum Wanderer (R), Metallic Mimic (R), Spell Queller (R), Deserted Beach (R, land). Sideboard: 0 — all ten board cards are commons or uncommons. One slot deliberately unspent.
  [PASS] basics: Island x8, Plains x6 — format-supplied, exempt from copy limits
  [PASS] colour: all 23 nonland cards usable in [W,U] via effective_cost.best_mode (Phase 5C check 4: PASS); no splashed cards (check 5: PASS, tested on best_mode cost_pips rather than printed identity)
```
