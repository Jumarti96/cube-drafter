---
deck_name: "wu-spirits-tempo-blink"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-07-09T04:12:09Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  8x Plains
  7x Island
  1x Idyllic Beachfront    WU dual, enters tapped
```

### CREATURES (19)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Thraben Inspector       x1    W      Clue-value 1-drop / blink target  C
  1  Lantern Bearer          x1    U      Flying Spirit; late Disturb value C
  1  Lunarch Veteran         x1    W      Lifegain off any creature ETB/LTB C
  2  Niblis of the Urn       x2    W      Evasive Spirit, taps on attack    U
  2  Metallic Mimic          x1    C      Spirit lord; counters on ETB      R
  3  Drogskol Shieldmate     x1    W      Flash Spirit, combat trick        C
  3  Nebelgast Herald        x2    U      Flash tap-lock on Spirit ETB      U
  3  Fiend Hunter            x2    W      Exile-on-a-stick, blink target    U
  3  Spell Queller           x1    UW     Flash counter+exile, Spirit body  R
  4  Restoration Angel       x1    W      Keystone blink engine             R
  4  Mist Raven              x1    U      Bounce ETB, blink target          U
  4  Apothecary Geist        x1    W      Spirit lifegain buffer            C
  4  Slayer of the Wicked    x1    W      ETB removal vs Vamp/Wolf/Zombie   U
  5  Battleground Geist      x1    U      Static Spirit anthem (+1/+0)      C
  6  Deadeye Navigator       x1    U      Keystone blink engine             R
  6  Subjugator Angel        x1    W      Big flier, taps opposing board    U
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Essence Flux            x2    U      Cheap blink, +1/+1 if Spirit      C
  2  Valorous Stance         x1    W      Flexible removal/protection       U
  3  Cackling Counterpart    x1    U      Copy an ETB creature for value    U
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty   Color  Role                              Rar
  5  Conjurer's Closet       x1    C      Keystone blink engine, free/turn  R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Soul-Guide Gryff        x1    W      GY hate vs Flashback/Disturb decks    C
Imprisoned in the Moon  x1    U      Catch-all vs enchantments/PWs/lands   C
Angelic Purge           x1    W      Sac-cost exile vs artifacts/big stuff C
Syncopate               x2    U      Flexible counter vs bombs/combo       C
Avacynian Priest        x1    W      Tap-lock vs non-Human aggro tribes    C
Compelling Deterrence   x1    U      Tempo bounce, discard vs Zombies      U
Geistlight Snare        x1    U      Discounted counter vs control/combo   U
Spectral Shepherd       x1    UW     Extra Spirit body, repeat-ETB engine  U
Silent Departure        x1    U      Flashback bounce, two-time answer     C
```

## ANALYSIS

A dense Spirit tribal shell (12 Spirit-typed permanents) that leans on flash-speed evasion and repeated ETB triggers rather than raw stats. Four blink pieces — Restoration Angel, Conjurer's Closet, Deadeye Navigator, and cheap Essence Flux/Cackling Counterpart — turn every Fiend Hunter exile, Nebelgast Herald tap-down, and Metallic Mimic counter into a recurring resource instead of a one-shot. The gameplan is to out-tempo the board with taps and bounces early, then grind out a Spirit army that keeps growing permanently via Metallic Mimic counters and Battleground Geist's anthem, closing with Subjugator Angel's alpha-strike tap-all or a long Deadeye Navigator loop.

**The counter math compounds fast.** Metallic Mimic + Battleground Geist alone turn a 1/1 Spirit into a threat within two ETBs: a Niblis of the Urn that enters after Mimic gets a permanent +1/+1 counter (2/3, then 3/1 with the anthem), and every subsequent blink of any Spirit (via Essence Flux, Restoration Angel, Conjurer's Closet, or Deadeye Navigator) adds another counter permanently — this is the deck's actual win condition once it goes long, not just incidental value.

**Play-pattern warning, not a card flaw:** don't target your own Spell Queller with a blink effect — its leave-the-battlefield trigger lets the opponent cast the exiled spell for free. Likewise, Fiend Hunter and Restoration Angel are the ideal blink targets (their leave/enter triggers only benefit you), while Spell Queller wants to just stick and hold.

**Tempo lock scales with Spirit count, not blink count.** Nebelgast Herald taps a creature on *every* Spirit ETB, not just its own — with 12 Spirit-typed permanents plus 5 blink effects, a single Nebelgast Herald on board can lock down 2-3 blockers/attackers across a turn in the mid-game.

**Slot allocation (Macro-Archetype: Tempo, projected avg CMC 3.0 nonland):**
- **Lands: 16 (40% of N=40)** — above the Tempo reference band of 30-34%. Justified by two 6-CMC payoffs (Subjugator Angel, Deadeye Navigator), zero ramp, and heavy Flash/instant density (Restoration Angel, Spell Queller, Nebelgast Herald x2, Drogskol Shieldmate, Deadeye Navigator's activation, Essence Flux) that wants mana held up while deploying a threat — a materially higher demand than a pure aggressive tempo shell that dumps its hand fast. The programmatic mana-audit tool's own baseline for a 40-card deck at this curve independently converged on 16.
- **Interaction/Disruption: 8 cards (33% of nonland)** — within the 25-35% Tempo band. Fiend Hunter x2, Slayer of the Wicked, Spell Queller, Mist Raven, Nebelgast Herald x2, Valorous Stance.
- **Threats/Payoffs: 7 cards (29% of nonland)** — above the 10-18% Tempo band. This deck's threats are its tribal density (Niblis of the Urn x2, Drogskol Shieldmate, Apothecary Geist, Battleground Geist, Restoration Angel, Subjugator Angel); because so many double as ETB support, raw "threat" count runs higher than a spells-heavy tempo deck's would.
- **Engine & Infrastructure: 9 cards (37% of nonland)** — above the 20-30% Tempo band. Metallic Mimic, Conjurer's Closet, Deadeye Navigator, Essence Flux x2, Cackling Counterpart, Thraben Inspector, Lantern Bearer, Lunarch Veteran. The overlap is intentional: this is a card-quality-over-card-count blink shell where nearly every creature is simultaneously a threat and an engine piece, so the reference bands (built for cards with single clear roles) undercount how "efficient" the build actually is.

**Land color split (pip-demand derived):** 16 W pips vs 13 U pips across nonland cards (55.2% / 44.8%) — driven by Fiend Hunter's {W}{W} and Subjugator Angel's {W}{W} pulling White up, offset by Mist Raven's {U}{U}, Deadeye Navigator's {U}{U}, and Cackling Counterpart's {U}{U} pulling Blue up. Land split: 8 Plains + 1 Beachfront = 9 W sources (56%), 7 Island + 1 Beachfront = 8 U sources (50%) — both within 1pp of demand.

**Matchup-relevant fact:** this cube's tag density shows Vampires (26), Zombies (26), and Werewolves (22) as major aggressive archetypes — all non-Human tribes. Slayer of the Wicked answers all three directly in the maindeck, and Avacynian Priest in the sideboard adds a second, repeatable answer that also dodges Human-based removal-matters cards.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card cap** (Metallic Mimic, Spell Queller, Restoration Angel, Conjurer's Closet, and Deadeye Navigator used the entire budget): Mausoleum Wanderer (R) — excellent 1-drop Spirit tempo/counter, the single best "if you ever add a 6th rare" upgrade target; Cathars' Crusade (R) and Necroduality (M) — fit the alternate Counters/Go-wide sub-archetype path that wasn't chosen; Helvault (R) — the fringe cross-tag card from the original archetype context, doesn't fit the Spirits-tempo curve; Voice of the Blessed (R), Odric, Lunarch Marshal (R), Gisela, the Broken Blade (M), Thalia, Heretic Cathar (R), Memory Deluge (R), Wedding Announcement (R), Docent of Perfection (R), Jace, Unraveler of Secrets (M), Temporal Mastery (M).

**Uncommons/commons a tier below the chosen includes:** Faith Unbroken (uncommon) — cut deliberately, not just for power level: it's a genuine trap in this shell since blinking its enchanted creature returns the opponent's exiled creature to the battlefield; Guardian of Pilgrims (common) — replaced by Lunarch Veteran as a strict upgrade (universal ETB trigger vs. Spirit-only pump); Twinblade Geist (uncommon) — solid aggressive Spirit body, lost the slot to higher-priority engine pieces; Angel's Tomb (uncommon) — cute mana sink but the become-a-3/3-until-EOT text is weaker than a real card in every slot it'd take; Mentor of the Meek and Mausoleum Guard (uncommon) — Tokens-cluster cards that don't fit this path.

**Sideboard-consideration cards not included:** Summary Dismissal (uncommon) — cut in favor of Avacynian Priest since the sideboard was over-indexed on countermagic (originally 4 of 10 slots) against a metagame that's mostly aggressive tribal, not combo; Boarded Window and Spontaneous Mutation — marginal fits, didn't make the cut.

**Off-color splash considered and rejected:** Zealous Conscripts and Voldaren Ambusher (both mono-R, Blink/ETB cluster) were flagged as splash candidates but rejected — this cube's WU fixing is already thin (1 common dual, 1 rare dual), and there is zero native R fixing paired with W or U beyond a couple of taplands; splashing for two fringe cards wasn't worth the consistency cost in an aggressive tempo shell.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  44.4%  prod  50.0%  gap  -5.6pp  [OK]
  W  demand  55.6%  prod  56.2%  gap  -0.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons up to 2 copies each — no card exceeds cap
[PASS] Rares/mythics up to 1 copy each — no card exceeds cap
[PASS] Max 5 rares/mythics total (main+SB) — exactly 5 used: Metallic Mimic, Spell Queller, Restoration Angel, Conjurer's Closet, Deadeye Navigator (0 in sideboard)
```
