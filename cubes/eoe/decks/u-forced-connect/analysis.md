---
deck_name: "u-forced-connect"
cube_id: "eoe"
cube_slug: "eoe"
colors: "U"
format: "40-card"
built_at: "2026-08-06T03:05:32Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x16 Island                   basic
```

### CREATURES (12)

```
CMC Card                       Qty   Color  Role                                           Rar
2   Mechan Navigator           x2    U      carrier + card selection                       U  
2   Steelswarm Operator        x2    U      carrier/evasive (flying) + artifact ramp       U  
3   Dauntless Scrapbot         x2    C      carrier (colourless) + graveyard hate          U  
3   Nanoform Sentinel          x2    U      carrier + untap                                C  
3   Virulent Silencer          x2    C      payoff                                         U  
4   Survey Mechan              x2    C      carrier/evasive (flying) + untargetable (hexproof) U  
```

### INSTANTS & SORCERIES (4)

```
CMC Card                       Qty   Color  Role                                           Rar
2   Mental Modulation          x2    U      interaction: taps the blocker on your turn, replaces itself C  
4   Scour for Scrap            x2    U      payoff tutor                                   U  
```

### OTHER SPELLS (8)

```
CMC Card                       Qty   Color  Role                                           Rar
1   Atomic Microsizer          x2    U      connect-forcer (manufactured unblockable)      U  
1   Synthesizer Labship        x1    U      connect engine (animates a noncreature artifact into a flying carrier) R  
2   Cryogen Relic              x2    U      card advantage + friction-free Labship target + stun C  
2   Wurmwall Sweeper           x2    C      friction-free Labship target; permanent flying carrier at 4+ charge C  
3   Tezzeret, Cruel Captain    x1    C      tutors the MV-1 engine pieces; untaps a carrier M  
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                              Rar
Annul                      x2    U      vs artifact/enchantment spells (29.7% artifact, 6.4% enchantment density) U  
Cryoshatter                x1    U      permanent answer to a recurring ground wall          C  
Desculpting Blast          x2    U      vs blockers and exile-effect enchantments holding a carrier U  
Illvoi Light Jammer        x1    U      protects a resolved Silencer at instant speed        C  
Unravel                    x2    U      hard counter vs the stack                            U  
Lost in Space              x2    U      hard answer: puts an artifact or creature into its owner's library C  
```

## ANALYSIS

### DECK IDENTITY

Mono-Blue Forced Connect. This build does not try to win the board -- it makes one connect unstoppable. Atomic Microsizer manufactures an unblockable attacker on demand ('That creature can't be blocked this turn'), and because Virulent Silencer grants two poison counters regardless of how much damage is dealt, the Microsizer's 'base power and toughness 1/1' clause costs the plan nothing -- it is a pure one-mana unblockable. Four of the twelve carriers fly natively, two of them with Hexproof. Synthesizer Labship is an upgrade rather than a pillar: it animates a friction-free noncreature artifact into a 2/2 flying nontoken carrier each combat. Scour for Scrap, the cube's only artifact tutor, makes the payoff findable, and Tezzeret, Cruel Captain is the only card in the cube that can tutor the engine pieces themselves.

**The premise, stated plainly:** this deck does not try to win the board. It concedes wide boards outright, concedes noncreature permanents, and concedes the stack in the maindeck. What it does instead is guarantee that one nontoken artifact creature touches the opponent every turn. The opponent can be ahead on creatures, on size, and on life, and none of those axes touch the actual failure condition.

**Why Atomic Microsizer is the best card in the archetype.** Its text reads *"Whenever equipped creature attacks, choose up to one target creature. That creature can't be blocked this turn and has base power and toughness 1/1 until end of turn."* There is no "another" clause, so it can target the equipped attacker itself. In any normal deck the 1/1 clause is a real drawback. Here it is worth exactly zero, because Virulent Silencer grants *two* poison counters with no damage-amount clause at all. Shrinking your own attacker to a 1/1 costs nothing. It is a one-mana, repeatable, unconditional "can't be blocked."

The same fact makes **Survey Mechan** — a 1/3 — a *full-rate* threat. Flying plus Hexproof means neither blockers nor targeted removal stop it, and its power being 1 is irrelevant.

**A rules trap this deck had to be repaired around.** Synthesizer Labship animates *"one other target artifact you control"* into a 2/2 flying artifact creature at the beginning of combat. The obvious line — animate an Atomic Microsizer for a free extra flier — does not work as written:

| Step | What happens |
|---|---|
| Beginning of combat | Labship animates the equipped Atomic Microsizer |
| Immediately | An Equipment that becomes a creature **comes unattached** |
| Declare attackers | The carrier is no longer equipped, so *"Whenever equipped creature attacks"* never triggers |
| Result | You traded a guaranteed unblockable connect for a 2/2 flier, and owe {2} to re-equip |

Three of the five original animation targets were Equipment. That is why **Wurmwall Sweeper ×2** is in the deck: a noncreature artifact with no attachment state to lose, which additionally becomes a permanent nontoken flying carrier once stationed to 4 charge counters. Friction-free animation targets went from 2 of 24 to 4 of 24.

**Tezzeret, Cruel Captain is here for one specific reason.** The deck's headline is a *conjunction* — you need Virulent Silencer **and** a connect-forcer. Before Tezzeret, that conjunction was only 37% likely by turn 8. Tezzeret's *"−3: Search your library for an artifact card with mana value 1 or less"* cannot find Virulent Silencer (MV 3), but it finds **both** Atomic Microsizer (MV 1) and Synthesizer Labship (MV 1). It is the only card in the entire cube that tutors this deck's engine. Its loyalty trigger, *"Whenever an artifact you control enters"*, is live on 19 of 24 nonland cards, and its `0` untaps a carrier that already tapped to Station the Labship.

**Four independent routes to a connect.** On any given turn the deck can force damage through by:
1. Atomic Microsizer — unblockable, repeatable, free after the equip
2. Native flying — 4 of 12 carriers, 2 of them hexproof
3. A Labship-animated 2/2 flier off a friction-free artifact
4. Mental Modulation — *"Tap target artifact or creature. Draw a card"*, costing {U} on your own turn, which removes the one blocker that mattered and replaces itself

**The environment is unusually kind to this engine.** The dossier reports only **4 artifact answers in the entire 271-card cube (1.6% density)** and 5 sweepers (2.0%). Both of this deck's connect-forcers are noncreature artifacts. A creature-removal deck cannot dismantle the engine at all.

**The honest cost.** This is the slowest of the three builds: goldfish turn 8, a turn-1 play in only 50% of hands, and against the cube's 22.5% evasion density only 4 of 24 nonland cards can block a flier. It will fall behind on board against a fast start. That is a deliberate trade — repairing it means cutting the connect-forcing engine for cheap bodies, which produces a worse copy of a deck that already exists in this same cube.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:3  2:10  3:7  4:4
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.7: Scour for Scrap@0.85, Scour for Scrap@0.85) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 13.3: Atomic Microsizer@0.7, Atomic Microsizer@0.7, Synthesizer Labship@0.5, Tezzeret, Cruel Captain@0.6, Wurmwall Sweeper@0.6, Wurmwall Sweeper@0.6, Steelswarm Operator@0.8, Steelswarm Operator@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 50%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-blue has no sweeper in this cube at any cost. This build does not contest a wide board -- Atomic Microsizer's 'That creature can't be blocked this turn' and the flying carriers go over or through it, and poison ignores how much damage is dealt.
  OK        single_large_threat: Mental Modulation, Cryogen Relic
  CONCEDED  noncreature_permanents: Tezzeret, Cruel Captain can untap but not answer; no true mainboard answer. Desculpting Blast x2 and Lost in Space x2 come in from the sideboard. A noncreature permanent that does not block does not stop a poison connect.
  CONCEDED  stack: Maindeck holds no counterspell: this build spends its mana proactively on connects, and holding up interaction costs a deployment turn. Annul x2 and Unravel x2 come in from the sideboard.
  OK        graveyard: Dauntless Scrapbot
```

- No WARN-tier flags: curve PASS and goldfish PASS.
- Goldfish reports a turn-1 play in only 50% of hands (3 one-drops). Accepted rather than repaired: this build's one-drops are Atomic Microsizer and Synthesizer Labship, which are setup permanents rather than clock -- deploying them on turn 1 is not what makes the deck function, and adding filler one-drops would displace the connect-forcing engine.
- DISCLOSED INPUT CAVEATS raised by the Challenger and contested: audit.cantrip_count reads 0 although Mental Modulation x2 and Cryogen Relic x2 draw cards, and audit.accel_count reads 4 although one accel source is a Lander token that fetches a TAPPED land. Both figures are computed by deck_audit from tags, and Phase 6 audits the land count against that same function, so overriding them by hand would manufacture the very disagreement the gate exists to catch. Recorded here rather than silently adjusted. The land verdict is unaffected: at avg MV 2.500 the target is 16 and the deck is built to 16.
- INPUT CAVEAT recorded at the Challenger's request: Tezzeret, Cruel Captain's starting loyalty is absent from the enriched card data (the loyalty field is null and the oracle text carries no value), so the turn on which its -3 first becomes available cannot be verified from the pipeline's own data. It is therefore declared at reliability weight 0.6, and its tutor mode is never claimed as available the turn it resolves.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Cryogen Relic x2 -- 'When this artifact enters or leaves the battlefield, draw a card' plus its own '{1}{U}, Sacrifice this artifact' converts surplus mana into 2 cards and a stun counter. Mechan Navigator x2 loots a surplus Island away on every attack. Scour for Scrap x2 is an instant that converts excess mana into the payoff. Atomic Microsizer's Equip {2} and Wurmwall Sweeper's Station are permanent mana and tap sinks. |
| screw | mitigation | 13 of 24 nonland cards cost MV 2 or less (curve 1:3, 2:10, 3:7, 4:4) and all 16 lands are Islands that always enter untapped with no colour requirement to miss. Steelswarm Operator's '{T}: Add {U}. Spend this mana only to cast an artifact spell' is a 17th and 18th source live on 19 of 24 nonland cards. |
| decapitation | mitigation | Scour for Scrap x2 is an unconditional instant search that replaces an answered Virulent Silencer, and its second mode 'Return target artifact card from your graveyard to your hand' rebuys one that already died -- 4 functional payoff copies in 40. Survey Mechan x2 has 'Hexproof' so those carriers cannot be targeted at all, and sideboard Illvoi Light Jammer has 'Flash' plus 'That creature gains hexproof until end of turn' to protect a resolved Silencer at instant speed. Both connect-forcers are NONCREATURE permanents, so creature removal cannot touch the engine. |
| gas-out | mitigation | Counted honestly against this list: Cryogen Relic x2 is net-card-positive (2 cards from 1 slot via the enters-OR-leaves trigger), and Mental Modulation x2 'Tap target artifact or creature. Draw a card' is interaction that replaces itself. Wurmwall Sweeper's 'surveil 2' on entry is selection. Mechan Navigator x2 is card SELECTION at net zero and is not claimed as refuel. That is 4 of 24 nonland cards that do not cost a card to use. |
| raced | accepted | This is the slowest of the three Poison Robots builds -- goldfish turn 8, a turn-1 play in only 50% of hands, and against the cube's 22.5% evasion density only 4 of 24 nonland cards can block a flier. Mitigating would mean trading the connect-forcing engine (Atomic Microsizer, Synthesizer Labship, Tezzeret) for cheap bodies, which converts this deck into the UR or mono-red build and destroys the one thing it does better than both: Atomic Microsizer's 'can't be blocked' does not care how many creatures the opponent controls, so this deck can lose the board and still win the game. |
| disruption-fizzle | mitigation | Poison counters are permanent and never reset, so interaction on the critical attack step delays the count rather than undoing it. Both connect-forcers are NONCREATURE permanents -- Atomic Microsizer is an 'Artifact - Equipment' that survives creature removal and re-attaches for {2}, and Synthesizer Labship is an 'Artifact - Spacecraft'. The dossier reports only 4 artifact answers in the entire cube (1.6% density), so the engine is close to untouchable in this environment. Survey Mechan x2 is hexproof and cannot be targeted at all. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Chrome Companion | {2} colourless 2/1 carrier cut during the grill: its lifegain is inert against a plan that ignores life totals entirely, and its '{2}, {T}' graveyard clause both taps it out of the attack and duplicates Dauntless Scrapbot, which exiles the opponent's ENTIRE graveyard. |
| Mechan Shieldmate | {1}{U} 3/2 with Defender that attacks only on turns an artifact entered. A conditional attacker is an unreliable poison carrier, and this build's whole premise is guaranteed connects. |
| Mechanozoa | {4}{U}{U} 5/5 whose ETB taps and stuns one permanent. One-shot against a single blocker at six mana; it buys one connect and does not scale to the 3-5 connects the thesis needs. |
| Mechan Assembler | {4}{U} 4/4 whose 'create a 2/2 colorless Robot artifact creature token' makes TOKENS, which give zero poison under Virulent Silencer's nontoken clause. Off-curve at 5 MV as well. |
| Emissary Escort | RARE {1}{U} 0/4 that 'gets +X/+0, where X is the greatest mana value among other artifacts you control'. At power 0 on an empty board it deals no combat damage and generates ZERO poison, and it grants only power, never toughness. It also has no evasion, making it entirely Microsizer-dependent. |
| Selfcraft Mechan | {3}{U} 3/4 carrier that draws a card on ETB -- a genuinely better body than Chrome Companion, but at MV 4 it would push avg MV to ~2.62 and the land target to 17 while adding no evasion. The slots went to Wurmwall Sweeper instead, which repairs the Synthesizer Labship animation-target problem. |
| Nutrient Block | SIDEBOARD CONSIDERATION. {1} indestructible Food is the cheapest friction-free Labship animation target and the animated 2/2 flier would ignore 'destroy' removal, but its lifegain mode is fully dead here and Wurmwall Sweeper does the same job while also becoming a permanent carrier at 4 charge counters. |
| Cerebral Download | SIDEBOARD CONSIDERATION. {4}{U} 'Surveil X, where X is the number of artifacts you control. Then draw three cards' -- X is routinely 3-5 here and it is the only genuine three-card refuel in mono-blue, but at 5 MV it is well past this deck's turn-8 kill window. |
| Illvoi Infiltrator / Cloudsculpt Technician / Illvoi Galeblade / Mm'menon, the Right Hand | All are Creatures, NOT Artifact Creatures. Despite flying or 'can't be blocked' text they generate ZERO poison under Virulent Silencer's 'nontoken artifact creature' clause. The single most seductive trap in blue for this archetype. |
| Secluded Starforge | RARE land whose '{5}, {T}: Create a 2/2 colorless Robot artifact creature token' makes tokens (no poison), and it taps for {C} only, which would dilute a mono-U mana base that currently has a 0.0pp colour gap. |
| Tractor Beam | {2}{U}{U} Aura that steals a creature -- but the stolen permanent enters tapped and 'doesn't untap during its controller's untap step', so it is neither a blocker for you nor a poison carrier. It delivers blocker-subtraction only, priced like a threat. Cut from the sideboard for Cryoshatter, which does the same job for one mana. |
| Divert Disaster | SIDEBOARD, CUT. 'Counter target spell unless its controller pays {2}' fails against exactly the resolved threats you board it in to stop; the build's own sketch-rejection grounds had already called soft counters weak for an aggressor. Replaced by Unravel. |
| Cryoshatter | SIDEBOARD, INCLUDED at 1. Note its real limitation: the -5/-0 blocker REMAINS on the battlefield and can still block once, so it does not unlock a connect the turn it is cast -- it is a permanent answer to a recurring wall, not a tempo play. |
| Weftwalking / Quantum Riddler / Starwinder | MYTHIC/RARE blue top-end. All sit at 5-7 MV, far past a turn-8 kill window, and none is an artifact creature, so none carries poison. |
| Hullcarver / Monoist Sentry / Monoist Circuit-Feeder | Off-colour for the mono-U shell. Monoist Sentry additionally has Defender, so it could never attack and therefore never trigger Silencer at all. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.5   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.67 adj [MV 2.5 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2      PASS -- no card exceeds 2 copies (Island exempt)
rares_mythics_max_1          PASS -- Synthesizer Labship and Tezzeret, Cruel Captain, 1 copy each
rare_mythic_budget_6         PASS -- 2 of 6 used
all_cards_from_cube          PASS -- exact-name membership verified; Island is a format-supplied basic
mainboard_40_sideboard_10    PASS
colour_usability             PASS -- effective_cost.best_mode non-None for every nonland card in mono-U
```