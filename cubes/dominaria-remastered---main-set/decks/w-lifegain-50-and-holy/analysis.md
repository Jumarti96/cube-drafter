---
deck_name: "w-lifegain-50-and-holy"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "W"
format: "40-card"
built_at: "2026-07-10T04:58:32Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  14x Plains
  2x  Drifting Meadow        W source, ETB tapped, cycles late
  1x  Mishra's Factory       Colorless manland, dodges sorcery-speed Wrath
```

### CREATURES (10)
```
CMC  Card                        Qty   Color  Role                       Rar
  2  Cleric of the Forward Order x2    W      ETB lifegain payoff        C
  2  Whitemane Lion               x1    W      Flash ETB re-trigger      C
  4  Voice of All                 x2    W      Angel / protection body   U
  5  Serra Angel                  x1    W      Angel / flying vigilance  U
  5  Lyra Dawnbringer             x1    W      Angel lord + lifelink     M
  6  Kjeldoran Gargoyle           x2    W      Repeatable lifegain       C
  7  Serra Avatar                 x1    W      Finisher (P/T=life total) M
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                        Qty   Color  Role                       Rar
  1  Enlightened Tutor            x1    W      Tutor for wincon/aura     R
  1  Swords to Plowshares         x2    W      Premium removal           U
  3  Renewed Faith                x1    W      Lifegain buffer + cycle   C
  4  Congregate                   x2    W      Scaling lifegain burst    U
  4  Wrath of God                 x1    W      Sweeper                   R
```

### OTHER SPELLS (6)
```
CMC  Card                        Qty   Color  Role                       Rar
  1  Spirit Link                  x2    W      Repeatable lifegain aura  C
  2  Pacifism                     x2    W      Soft removal              C
  4  Icy Manipulator              x1    C      Tempo/lockdown            U
  4  Test of Endurance            x1    W      Wincon (50+ life)         M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in         Rar
Tormod's Crypt          x2    C      Graveyard/reanimator matchups    U
Damping Sphere          x2    C      Storm/ritual/greedy manabase     U
Remedy                  x2    W      Anti-burn/aggro racing           C
Nomad Decoy             x2    W      Flex tap-down vs evasive threats C
Radiant's Judgment      x2    W      Big-creature removal             C
```

## ANALYSIS

**The math on Test of Endurance.** Starting at 20 life, you need +30. Direct sources: Congregate (2 per creature on the battlefield -- with just 4-5 bodies out that's 8-10 in one shot, twice), Renewed Faith (6), Cleric of the Forward Order (2, or 4 with both copies down). Repeatable sources: Kjeldoran Gargoyle and Lyra both gain life equal to combat damage dealt every single hit; Spirit Link turns any creature -- including a chump-blocked attacker or an opposing creature you've bounced control of -- into the same engine. In practice the deck rarely "goes off"; it just accumulates until either wincon is live almost as a side effect of playing normal Magic.

**Lyra Dawnbringer is doing three jobs at once**: primary lifelink threat, Angel lord (Serra Angel becomes a 4/5 flying vigilance lifelink; Voice of All becomes a lifelink flyer with protection), and the biggest single life swing in the deck when unanswered. Losing her to removal is the single worst thing that can happen to this deck -- Auramancer/enchantment recursion was considered as insurance but cut for thin payoff (see Cards Considered but Excluded below); Whitemane Lion's flash + bounce is the closest thing to protection she gets (dodge a removal spell at instant speed by bouncing her in response, replay next turn).

**Serra Avatar's self-mill-into-recursion is a hidden resilience piece.** "When Serra Avatar is put into a graveyard from anywhere, shuffle it into its owner's library" means it survives edicts, -X/-X effects, and even a Wrath of God from either side -- it never just dies, it goes back into the deck to be drawn again. Combined with a life total that's already inflated by the time you can afford {4}{W}{W}{W}, it's a very hard finisher to permanently answer.

**Wrath of God is deliberately symmetrical and that's fine here.** The deck's own creature count is modest (10 nonland creature slots) and several of its best payoffs -- Test of Endurance, Spirit Link (if it falls off, recast on the next threat), Congregate, Renewed Faith -- don't care about board state at all. Wrath resets a losing board back to "both players draw cards" while your accumulated life total keeps you clear of the follow-up.

**Interaction count and the self-grill revision.** The first draft of this deck ran only 3 mainboard interaction spells (Swords to Plowshares x2, Wrath of God x1) -- thin for a deck that classifies as Control. The Phase 9 Challenger agent flagged this as the most plausible point of failure (getting run over before the lifegain plan comes online), along with Mesa Enchantress and Auramancer being underfed (only 3 enchantment spells in the whole 40 to trigger off of). Both were cut and replaced with Pacifism x2 and Icy Manipulator x1, bringing mainboard interaction to 6 cards without touching the lifegain core or the rare/mythic budget.

### Cards Considered but Excluded

**Blocked purely by the 5 rare/mythic cap** (all mono-White, all would otherwise have made the deck): Windborn Muse (taxes attackers -- a genuinely excellent fit for a deck racing to a life total, arguably the single best card cut) and Crawlspace ("no more than two creatures can attack you" -- directly protects the life-total plan) were the two closest cuts. Also considered: Glory (rare, graveyard-recursion threat but off-theme), Lieutenant Kirtar, Triskelion, Sevinne's Reclamation, Jester's Cap, Urza's Incubator (mythic), Gauntlet of Power (mythic), Dark Depths (mythic land), Gemstone Mine and Maze of Ith (rare lands -- Maze of Ith in particular is a near-perfect fit, blanking one attacker's combat damage each turn for free, but every rare land competes with the same 5-card budget as the spell picks). If you want to iterate, swapping Wrath of God or Enlightened Tutor for Windborn Muse or Crawlspace is the highest-leverage change available.

**Uncommons a tier below the chosen includes:** Mesa Enchantress and Auramancer (cut this revision -- only 3 enchantment spells in the deck to support them, see Analysis above; would need Improvised Armor and/or Sun Clasp added alongside to justify running either). Battle Screech (token engine, flashback-recurring -- good card but redundant with the deck's existing 4-drop cluster: Congregate, Icy Manipulator, Voice of All, Test of Endurance, Wrath of God all sit at CMC4). Griffin Guide and Sun Clasp (auras -- Sun Clasp especially is a cute pseudo-removal/protection piece, +1/+3 with a bounce-back ability, that could replace a Pacifism if you want more flexibility over raw lockdown).

**Sideboard-consideration cards not included:** Icatian Javelineers (early ping, answers 1-toughness aggro creatures -- cut in favor of Nomad Decoy's broader tap-down utility). Wall of Junk (pure blocker, redundant with the deck's life-total defense plan). Improvised Armor (cycling +2/+5 aura -- a reasonable anti-aggro SB card if Remedy proves insufficient).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ─────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.26   Ramp cards: 0

Color Balance (core):  [PASS]
  W  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each -- verified, none exceed cap
[PASS] Rares/mythics <= 1 copy each -- Lyra Dawnbringer, Serra Avatar,
       Test of Endurance, Wrath of God, Enlightened Tutor all singleton
[PASS] Max 5 rares/mythics total (main + sideboard) -- exactly 5, all
       mainboard, 0 in sideboard
[PASS] All cards verified present in cube mainboard pool
```
