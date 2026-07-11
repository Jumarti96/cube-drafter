---
deck_name: "b-entomb-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "B"
format: "40-card"
built_at: "2026-07-09T23:54:50Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
14x Swamp
1x  Polluted Mire        Enters tapped, taps for B, cycles for {2} late
1x  Mishra's Factory     Colorless manland, becomes a 2/2 for {1}
```

### CREATURES (11)
```
CMC  Card                      Qty   Color  Role                              Rar
  4  Body Snatcher             x1    B      Discard outlet + reanim. target     R
  4  Faceless Butcher          x2    B      Reanimated exile-removal on a body   U
  4  Flametongue Kavu          x2    R      Reanimated 4-dmg removal on a body   U
  4  Cackling Fiend            x2    B      Disruption body / sac fodder         C
  5  Chainer, Dementia Master  x1    B      Repeatable reanimation engine        R
  6  Worldgorger Dragon        x1    R      Signature reanimation-only bomb      M
  6  Necrosavant               x2    B      Self-recurring reanimation payoff    U
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Entomb                    x1    B      Primary graveyard-fill tutor         R
  1  Vampiric Tutor            x1    B      Finds Entomb / an answer             M
  1  Duress                    x1    B      Protects the combo                   C
  2  Terror                    x2    B      Unconditional removal                C
  2  Chainer's Edict           x2    B      Edict removal, dodges hexproof       U
  3  Life // Death             x2    BG     Cheap {1}{B} reanimation spell       U
  4  Dread Return              x2    B      Reanimation spell + flashback        U
```

### OTHER SPELLS (2)
```
CMC  Card                      Qty   Color  Role                              Rar
  2  Zombie Infestation        x2    B      Repeatable discard outlet -> 2/2     U
```

## SIDEBOARD (10)
```
Card                      Qty   Color  Role / When to board in              Rar
Tormod's Crypt            x1    C      Graveyard hate vs mirror/other reanim.  U
Icy Manipulator           x2    C      Tempo/removal vs aggro                  U
Wall of Junk              x2    C      Defensive blocker vs aggro              U
Dark Withering            x1    B      Catch-all removal, madness w/ our disc. U
Urborg Uprising           x2    B      Rebuy targets vs attrition/exile        C
Undead Gladiator          x1    B      Flex cycler/recursion vs slow matchups  U
Duress                    x1    B      2nd copy vs control/combo               C
```

## ANALYSIS

**Macro-Archetype: Midrange (with a deliberate deviation).** Projected Avg MV: 3.33. Land count 16 (40% of N=40) — at the top of Midrange's 38-42% band; this deck's activated abilities are colored-mana-hungry (Chainer BBB, Necrosavant 3BBB, Dread Return 2BB), so it wants to hit 4-6 lands reliably even though its actual curve is low. Threats/Payoffs sit at 9/24 non-land cards (37.5%, within the 30-40% Midrange band). Interaction/Disruption is 7/24 (29%, top of the 20-30% band). Infrastructure/Consistency (Entomb, Vampiric Tutor, Dread Return x2, Life//Death x2, Zombie Infestation x2 = 8/24, 33%) is called out as a deviation from Midrange's "0%, absorbed into threats" default — both self-grill agents independently confirmed this is warranted, not padding: Worldgorger Dragon and Necrosavant are functionally inert cards until the tutor-into-discard-into-reanimate chain resolves, so the enabling suite is genuine load-bearing infrastructure, not incidental value.

**Mana base is intentionally mono-Black.** Worldgorger Dragon ({3}{R}{R}{R}) and both Flametongue Kavus ({3}{R}) are reanimation-only inclusions — verified from oracle text that Dread Return, Life // Death's Death half, Chainer's activated ability, and Body Snatcher's death trigger never reference the target's own mana cost or color, only that it's "a creature card in a graveyard." Zero Red sources is therefore correct, not an oversight: spending land slots on Red would dilute the Black base for spells that actually need to resolve (Entomb, Vampiric Tutor, the two edict/removal spells, Chainer's BBB activation) for a color that will never be paid. The mana audit's R "splash check" WARN below is this exact, accepted tradeoff. Also note Life // Death's full card identity is technically [B, G] (the unused Life half is green) — only the Death half is ever cast, same logic as the Red reanimation targets, so this remains a true mono-Black manabase in practice.

**Two real play-pattern risks surfaced during the self-grill, worth knowing before you sit down with this deck:**

| Risk | Card | Why it matters | Mitigation |
|---|---|---|---|
| Locks your own permanents | Worldgorger Dragon | Its ETB exiles all other permanents you control -- including lands -- not just creatures. Reanimating it with no plan to make it leave strands you at zero permanents. | Only 2 reliable "make it leave" outlets exist: Necrosavant's own reanimation ability (sac Dragon as the cost) or Dread Return's flashback (sac 3 creatures). Sequence around having one available, or use this defensively -- reanimate Dragon in response to a board wipe to save your permanents, then let it leave when safe. |
| Exiles the reanimated bomb | Chainer, Dementia Master | Anything reanimated specifically via Chainer's activated ability becomes a Nightmare and gets exiled the instant Chainer dies (his own "leaves the battlefield" trigger). | Prefer Dread Return / Life-Death / Body Snatcher's death trigger for your best, hardest-to-replace bomb; save Chainer's ability for expendable or replaceable targets. |

**Discard-outlet redundancy is thin but real.** Only two proactive ways to fill the graveyard: Entomb (1-shot, always hits) and Zombie Infestation x2 (repeatable, costs 2 cards per activation). Body Snatcher's ETB adds a third, conditional line. Vampiric Tutor effectively adds a fourth by fetching Entomb. That's enough independent redundancy to assemble the combo most games, but a hand with none of these and a dead Worldgorger Dragon/Necrosavant will be slow -- the sideboard's Urborg Uprising exists partly to buy back a stranded reanimation target after removal.

### Cards Considered but Excluded

The pool restriction (max 5 rares/mythics across main+sideboard) was the binding constraint on this build -- the "core cards" suggested by the archetype context alone already total 7 rares/mythics (Entomb, Vampiric Tutor, Gamble, Sneak Attack, Worldgorger Dragon, Chainer, Body Snatcher), two over budget before any flex bomb is added.

**Rares/mythics cut for budget:**
- **Sneak Attack** (mythic, R) -- the other half of the "cheat big creatures" archetype; this deck's 5-slot budget went to the graveyard-recursion package instead. This is the anchor of the alternate "Sneak & Bomb" sub-archetype that was not selected.
- **Gamble** (rare, R) -- a second tutor, redundant with Entomb/Vampiric Tutor and would have pushed Red-source needs up for no real benefit given Sneak Attack isn't in the deck.
- **Worldly Tutor** (rare, G) + **Gamekeeper** (uncommon, G) -- the Green tutor-toolbox package from the "BRG Toolbox" path; would have required a genuine Green splash on top of an already-thin BR manabase.
- **Oversold Cemetery** (rare, B) -- excellent grind piece ("if 4+ creatures in your graveyard, return one to hand"), would be an easy include with a free rare slot; the strongest single card left on the outside looking in.
- **Yawgmoth, Thran Physician** (mythic, B), **Royal Assassin** (rare, B), **Mindslicer** (rare, B) -- all strong Black rares that simply didn't fit the 5-slot cap.
- **Denizen of the Deep, Arcanis the Omnipotent** (rare, U) and **Phantom Nishoba** (rare, GW), **Shivan Dragon, Siege-Gang Commander** (rare, R) -- the archetype-context "textbook reanimation targets." All are legal reanimation targets in principle (color doesn't matter once in the yard), but every one is a rare, and the 5-slot budget was better spent on the engine (Entomb/Vampiric Tutor/Chainer/Body Snatcher) than on additional off-color payoffs. Denizen of the Deep is also a genuine anti-synergy risk: its ETB bounces every other creature you control, which fights a board built around Necrosavant/token sacrifice fodder.

**Uncommons a tier below the chosen includes:**
- **Ichor Slick** (common, B) -- conditional -3/-3 removal with madness; weaker than Terror's unconditional destroy, considered for the sideboard over Dark Withering but Dark Withering answers a wider range of threats.
- **Urborg Syphon-Mage** (common, B) -- a discard/drain outlet, but single-card-per-activation at a worse rate than Zombie Infestation's two-for-one.
- Aside from Oversold Cemetery, no other uncommon clearly outperformed anything in the final 24 non-land slots per the Challenger agent's independent scan of the pool.

**Sideboard-consideration cards not included:** Damping Sphere (uncommon, anti-storm/ritual hate -- this cube doesn't have enough ritual/storm density to warrant the slot), Jalum Tome and Mind Stone (colorless card draw/ramp -- didn't beat the graveyard-recursion sideboard plan for slots), Ichor Slick (see above).

## MANA AUDIT: WARN
```
-- Mana Audit: WARN ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.33   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand 100.0%  prod  93.8%  gap  +6.2pp  [OK]

Splash Check: [WARN]
  R  3 card(s), max CMC 6  sources 0/3  [WARN]
  WARN  R  actual 0 < required 3
```
Note: the WARN is the intentional, accepted tradeoff discussed above -- Worldgorger Dragon and Flametongue Kavu x2 are reanimation-only cards that are never hard-cast, so the audit tool's assumption that Red-identity cards need Red sources doesn't apply here. Both self-grill agents independently confirmed this reading of the oracle text and did not treat it as a defect requiring a fix.

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at <=2 copies each (all satisfied)
[PASS] Rares/mythics at <=1 copy each (all satisfied)
[PASS] Max 5 rares/mythics total across mainboard+sideboard -- exactly 5 used
       (Body Snatcher, Chainer Dementia Master, Worldgorger Dragon, Entomb, Vampiric Tutor),
       all in the mainboard, 0 in the sideboard
[PASS] All 50 cards (40 main + 10 SB) verified against cube working pool by exact name --
       no phantom inclusions (independently confirmed by Challenger agent)
```
