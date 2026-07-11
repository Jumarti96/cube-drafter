---
deck_name: "wu-opposition-tap-engine-b-splash"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-10T04:39:39Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
4x Plains
7x Island
2x Swamp
1x Dromar's Cavern        WUB tri-land, sac unless you bounce a non-Lair land
1x Idyllic Beachfront     WU dual, enters tapped
1x Sunlit Marsh           WB dual, enters tapped
1x Polluted Mire          B source, cycles if unneeded
```

### CREATURES (9)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Royal Assassin           x1    B      Tap-lock payoff (kill)     R
  2  Whitemane Lion            x1    W      Flash Wrath-insurance/fuel C
  2  Horseshoe Crab            x1    U      Self-untap engine piece   C
  3  Nomad Decoy               x2    W      Tapper + Opposition fuel  C
  3  Auramancer                x1    W      Enchantment recursion     C
  3  Man-o'-War                x1    U      Tempo bounce/fuel         C
  4  Thieving Magpie           x1    U      Finisher, card draw       U
  5  Serra Angel               x1    W      Finisher (vigilance)      U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Swords to Plowshares      x2    W      Premium removal           U
  2  Counterspell              x2    U      Protects the lock         C
  2  Momentary Blink           x1    W      Dodge removal/reset ETB   C
  2  Impulse                   x1    U      Card selection            C
  3  Absorb                    x1    WU     Counter + lifegain        R
  4  Fact or Fiction           x1    U      Card advantage             U
  4  Wrath of God              x1    W      Sweeper/reset             R
```

### OTHER SPELLS (5)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Mystic Remora             x1    U      Taxes opponent's spells   R
  2  Pacifism                  x1    W      Soft permanent lock       C
  4  Opposition                x1    U      Tap-lock engine core      R
  4  Icy Manipulator           x2    C      Tapper (no fuel needed)   U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in            Rar
Tormod's Crypt           x1    C      vs. graveyard/reanimator decks     U
Damping Sphere           x1    C      vs. combo/storm/fast mana          U
Wall of Junk             x1    C      vs. aggro, recurring blocker       U
Renewed Faith            x1    W      vs. aggro, cycles if dead          C
Terror                   x1    B      extra removal vs. midrange bombs   C
Turnabout                x1    U      mini-Opposition blowout, mirrors   U
Duress                   x1    B      vs. combo/control, strip answers   C
Ovinize                  x1    U      cheap pseudo-removal vs. aggro     C
Confiscate               x1    U      steal effect vs. a lone bomb       U
Recoil                   x1    UB     flexible bounce+discard            U
```

## ANALYSIS

**Slot allocation.** Lands: 17 (42.5% of N=40) — control decks with a 4-mana engine centerpiece (Opposition) and a 4-mana sweeper (Wrath) want to hit land drops reliably; sits at the low end of the 42-47% Control range. Of the 23 non-land cards: Interaction 13 (56.5%), Engine/Infra 8 (34.8%), Threats/Payoffs 2 (8.7%). Interaction and Engine both run well above the typical Control reference ranges (35-45% / 10-20%) — this is a deliberate deviation, not an oversight: Icy Manipulator, Nomad Decoy, and Royal Assassin are simultaneously the deck's interaction (they answer threats) and its engine (they feed and enable Opposition), so classifying them into one bucket inflates that bucket at the other's expense. The real cost of this shape is thin top-end — only 2 dedicated finishers — which is accepted here because Opposition itself is a slow-burning win condition (denying the opponent all their permanents eventually ends the game on its own), not because the deck has genuine card-advantage insurance to spare.

**The Wrath of God / Opposition tension is real and worth naming directly.** Opposition needs untapped creatures to activate; Wrath of God kills them all, including your own. The deck accepts this trade because Opposition and Icy Manipulator are the only pieces that must survive, and neither is a creature (Enchantment / Artifact respectively) — Wrath clears fuel, not the engine itself. Whitemane Lion's Flash lets you bounce Royal Assassin to hand in response to your own Wrath as targeted insurance for the deck's only kill-condition creature.

**Horseshoe Crab solves the critical-mass problem cheaply.** With only 9 creatures, having enough untapped bodies to fuel Opposition every turn was the single biggest structural risk the self-grill surfaced. Horseshoe Crab ("{U}: Untap this creature.") turns one body into a repeatable Opposition activation without needing more creatures resolved — tap it for Opposition, pay {U}, tap it again next activation window.

**Royal Assassin's real cost is {1}{B}{B}** (verified from this cube's card data — not the {2}{B} a first pass mistakenly assumed from memory). Double-black off 5 sources (Dromar's Cavern, Sunlit Marsh, Polluted Mire, 2x Swamp) means roughly 37% to have BB online by turn 3, climbing to ~53% by turn 5-6 and ~68% by turn 8 — Royal Assassin is realistically a mid-to-late-game removal spell here, not a curve play, which is consistent with its role (it wants a tapped target to exist first anyway).

**Serra Angel's Vigilance is an uncredited synergy** — it's the only creature in the whole WU(B)-legal pool with Vigilance, meaning it can attack for 4 in the air and stay untapped as Opposition fuel or a blocker the same turn, doing triple duty in a deck that's short on bodies.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget:** No Mercy (mythic — belongs to the "Hard Lockdown" path not chosen), Windborn Muse, Crawlspace, Arboria (all "Stacked-Tax Prison" path), Maze of Ith, Umbilicus, Jester's Cap, Enlightened Tutor, Mystical Tutor, Vampiric Tutor, Force of Will, Isolated Chapel (a real dual for the splash, but a land wasn't worth a rare slot over Wrath/Absorb), Gemstone Mine, Lyra Dawnbringer, Zur the Enchanter, Urza Lord High Artificer, Stroke of Genius, Time Stretch.

**Uncommons/commons a tier below the chosen includes:** Radiant's Judgment (cut for Horseshoe Crab — power-4+-only condition made it a frequent dead card vs. aggro), Ovinomancer (real removal but the "return 3 basics" drawback is a steep tempo cost), Circular Logic (scales with your own graveyard, not the opponent's — weaker than it looks here), Voice of All, Sawtooth Loon, Thran Golem, Ornithopter (a free body, genuinely considered for the critical-mass problem, but Horseshoe Crab does more per slot).

**Sideboard cards considered but left out:** Dark Withering (also {4}{B}{B} — cut specifically to avoid stacking a second unreliable double-black card on top of Royal Assassin), Leaden Fists (initially looked like a lock piece, but its aura would have to go on your own creature to matter — putting it on an opponent's tapped attacker just hands them a permanent +3/+3), Spite // Malice, Chainer's Edict, Gerrard's Verdict, Night // Day, Stand // Deliver.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  53.6%  prod  52.9%  gap  +0.7pp  [OK]
  W  demand  46.4%  prod  41.2%  gap  +5.2pp  [OK]

Splash Check: [PASS]
  B  2 card(s), max CMC 3  sources 5/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons up to 2 copies each — max observed: Icy Manipulator x2,
       Nomad Decoy x2, Swords to Plowshares x2, Counterspell x2. Nothing exceeds 2.
[PASS] Rares/mythics up to 1 copy each — all 5 (Opposition, Royal Assassin,
       Mystic Remora, Wrath of God, Absorb) at exactly 1 copy.
[PASS] Max 5 rares/mythics total (mainboard + sideboard) — 5 in mainboard,
       0 in sideboard = 5 total. At the cap, not over.
```
