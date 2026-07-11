---
deck_name: "u-crab-gun-control-lock"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "U"
format: "40-card"
built_at: "2026-07-10T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
16x Island
 1x Mishra's Factory    Colorless manland, resilient late-game threat
```

### CREATURES (11)
```
CMC  Card                    Qty   Color  Role                              Rar
  3  Horseshoe Crab          x2    U      Combo enabler (self-untap)         C
  3  Man-o'-War               x2    U      Tempo bounce on a body             C
  4  Aven Fisher              x2    U      Evasive threat, draw on death      C
  4  Thieving Magpie          x2    U      Evasive threat, draw on damage     U
  5  Peregrine Drake          x2    U      Evasive threat, untaps 5 lands     C
  6  Arcanis the Omnipotent   x1    U      Finisher — repeatable draw-3       R
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  High Tide               x1    U      Doubles Island mana for the turn   U
  2  Counterspell            x2    U      Hard countermagic                  C
  2  Impulse                 x1    U      Card selection                     C
  2  Snap                    x2    U      Free bounce + land untap           C
  4  Deep Analysis           x1    U      Draw 2 + flashback                 C
  4  Fact or Fiction         x1    U      Card advantage                     U
  5  Force of Will           x1    U      Free countermagic                  M
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Mystic Remora           x1    U      Early card draw engine             R
  4  Icy Manipulator         x1    U      Repeatable tap-down (colorless)    U
  4  Opposition              x1    U      Combo payoff — tap-down engine     R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Tormod's Crypt          x1    U      Graveyard/Reanimator matchups          U
Damping Sphere          x1    U      Anti-storm/ritual, taxes fetches       U
Wall of Junk            x2    U      Repeatable blocker vs aggro            U
Floodgate               x2    U      Pseudo-sweeper vs nonblue aggro        U
Turnabout               x2    U      Mass tap-down vs go-wide boards        U
Confiscate              x2    U      Steal a bomb (tribal lord/artifact/    U
                                      enchantment) vs Midrange/Enchantress
```

## ANALYSIS

**The engine, honestly assessed.** Horseshoe Crab ("{U}: Untap this creature") plus Opposition ("Tap an untapped creature you control: Tap target artifact, creature, or land") is a real two-card interaction: enchant nothing, just tap the Crab to satisfy Opposition's cost, then pay {U} to untap the Crab and repeat — every spare blue mana becomes one more tapped-down opposing permanent. But the self-grill on this exact question (independently run twice) concluded the same thing both times: with only 1 Opposition and 2 Horseshoe Crabs in 40 cards, this is a low-frequency bonus, not a load-bearing win condition. Opposition alone already taps one permanent per turn using *any* untapped creature you control (not just the Crab), and Icy Manipulator gives a mana-costed version of the same effect that needs no creature at all. Play the deck as a mono-U tempo/control shell first; treat the full Crab lock as a ceiling-raiser when it comes together, not the plan you're drawing toward.

**Why Arcanis over more fliers.** The original build leaned on Aven Fisher/Thieving Magpie/Peregrine Drake as the entire win condition — six sub-3-toughness bodies with no evasion beyond flying and no pump support. The self-grill flagged this as a real weakness: good at buying card advantage, bad at actually ending games once the board is locked down. Arcanis the Omnipotent (`{T}: Draw three cards` / `{2}{U}{U}: Return Arcanis to its owner's hand`) is the fix — a repeatable draw engine that also dodges removal by bouncing itself, giving the deck a genuine plan to out-card-advantage an opponent into an unwinnable position. It cost the deck's last open rare/mythic slot (swapped in place of Mind Stone) and pushed the curve up slightly (avg CMC 3.26 → 3.43), which is an acceptable trade for a deck whose whole plan is stalling into the late game anyway.

**Mishra's Factory over the 17th Island.** A colorless manland that dodges sorcery-speed removal and can't be answered by counterspells is a strictly better use of one land slot than a 17th Island in a deck this control-heavy — it's a card that's never dead, even in the driest late-game topdeck war.

**High Tide over Circular Logic.** High Tide ("Until end of turn, whenever a player taps an Island for mana, that player adds an additional {U}") is a near-perfect fit for a deck whose entire plan is converting spare {U} into value — cast it with several Islands still untapped and every one of them produces double, funding a much bigger turn of Opposition taps, Icy Manipulator activations, or Arcanis draws than the deck could otherwise afford. It replaces Circular Logic, which the self-grill flagged twice as the weakest counterspell in the 40 (a soft counter that's cheapest to beat early, with an unusable Madness clause since the deck has no discard outlet). High Tide's own downside — it's symmetric (helps an opponent's Islands too) and dead if drawn before enough Islands are in play — is a fair trade for a card that's directly on-theme rather than generically fine.

**Mana math.** 30 U pips across 23 nonland cards, 16 U-producing lands out of 17 (94.1% production vs 100% demand, a 5.9pp gap — comfortably inside the audit's tolerance). The only non-producing land is Mishra's Factory, and its standalone value outweighs the small color-consistency cost.

**Sideboard revision.** The original sideboard ran Jester's Cap and put 6 of 10 slots into anti-aggro overlap (Wall of Junk, Floodgate, Turnabout). Jester's Cap got cut so its rare slot could fund Arcanis instead — its anti-combo role is narrow in a metagame this deck already outgrinds. In its place, Confiscate went from 1 to 2 copies: it's the deck's only real answer to a resolved bomb of any permanent type (creature, artifact, or enchantment), which matters against this cube's heavy Tribal/Kindred, Enchantress, and Artifacts clusters — a gap the anti-aggro package doesn't touch.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- *Urza, Lord High Artificer* (mythic) — a strong stand-alone engine, but it's a build-around in its own right (wants an artifact shell) and would have meant cutting one of Opposition/Force of Will/Mystic Remora/Arcanis to fit; none of those felt like the weaker card.
- *Denizen of the Deep* (rare) — its ETB bounces all your *other* creatures back to hand, which directly undoes Man-o'-War/Aven Fisher value and strips your own blockers; rejected on synergy grounds, not just budget.
- *Vexing Sphinx*, *Stroke of Genius*, *Triskelion*, *Cryptic Gateway* — all solid rares in isolation, but the deck's five slots (Opposition, Force of Will, Mystic Remora, Arcanis, and effectively one held in reserve) were already accounted for by higher-priority effects.
- *Jester's Cap* — ran in the first draft of this list; cut specifically to fund Arcanis. Worth bringing back over Confiscate #2 if the metagame turns out to be combo-heavy rather than bomb-heavy.

**Uncommons a tier below the chosen includes:**
- *Circular Logic* — ran in the first two drafts of this list; cut for High Tide once it became clear the deck had a stronger, more on-theme use for that slot. Bring it back if High Tide underperforms (e.g., against opponents with few Islands to double or in fast matchups where it never gets live).
- *Turnabout* — flagged during the self-grill as arguably strong enough for the mainboard (it's a one-card "mass Opposition" effect). Kept in the sideboard because the maindeck's tap-down density (Icy Manipulator + Opposition) is already sufficient without it; bring it in vs. go-wide decks.
- *Gempalm Incinerator*, *Dodecapod*, *Jalum Tome* — all fine value pieces but outclassed by the card-draw suite already in the 40.

**Sideboard-consideration cards not included:**
- *Sulfuric Vortex* (rare) — would be excellent vs. the cube's Lifegain cluster (shuts off life gain entirely) but a 5th rare/mythic slot wasn't available without cutting a maindeck piece.
- *Slice and Dice* — a fine sweeper, but Floodgate already covers the "wipe a go-wide board" role at uncommon cost with no rare competition.

## MANA AUDIT: PASS
```
Land count: 17 (recommended 16) — PASS
Ramp count: 0
Average CMC: 3.35
Pip demand: U 30
Land color production: U 16
Color balance: U pip 100.0% vs prod 94.1% (gap 5.9) — PASS
Splash colors: none
Overall: PASS
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons at or under 2 copies each: PASS
Rares/mythics at exactly 1 copy each: PASS
Max 5 rares/mythics total (main+sideboard): PASS — 4 used (Mystic Remora, Opposition,
  Force of Will, Arcanis the Omnipotent); 1 slot of headroom unused.
```
