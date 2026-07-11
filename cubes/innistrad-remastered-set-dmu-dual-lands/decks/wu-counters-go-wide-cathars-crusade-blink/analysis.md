---
deck_name: "wu-counters-go-wide-cathars-crusade-blink"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-07-09T04:07:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
2x Idyllic Beachfront    WU dual, enters tapped
8x Plains
6x Island
```

### CREATURES (15)
```
CMC  Card                    Qty   Color  Role                            Rar
  2  Guardian of Pilgrims    x1    W      Cheap Spirit ETB pump/fodder    C
  2  Ambitious Farmhand      x1    W      ETB land tutor, blink fodder    U
  2  Metallic Mimic          x1    C      Tribal lord, counter accel.     R
  3  Fiend Hunter            x2    W      Resettable exile removal        U
  3  Nebelgast Herald        x2    U      Taps blocker on Spirit ETB      U
  3  Mentor of the Meek      x2    W      Card draw off small ETBs        U
  3  Crusader of Odric       x1    W      Go-wide payoff (P/T=count)      C
  4  Mist Raven              x2    U      ETB tempo bounce, blink target  U
  4  Restoration Angel       x1    W      Keystone blink engine           R
  6  Subjugator Angel        x1    W      Mass-tap alpha finisher         U
  6  Deadeye Navigator       x1    U      Keystone repeatable blink combo R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                    Qty   Color  Role                            Rar
  1  Essence Flux            x2    U      Cheap blink enabler/ETB reset   C
  2  Gather the Townsfolk    x2    W      Core token generator            C
  2  Valorous Stance         x1    W      Flexible removal/protection     U
  3  Cackling Counterpart    x1    U      Token copy, Crusade trigger     U
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                            Rar
  4  Faith Unbroken          x1    W      Exile removal aura              U
  5  Conjurer's Closet       x1    C      Keystone repeatable blink       R
  5  Cathars' Crusade        x1    W      Payoff: ETB -> team-wide counter R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in            Rar
Silent Departure        x1    U      Tempo bounce vs. single big threat  C
Imprisoned in the Moon  x1    U      Universal removal, planeswalkers    C
Angelic Purge           x1    W      Exile removal (tokens are cheap fodder for the sac cost) C
Syncopate               x1    U      Anti-combo/anti-spells tempo counter C
Summary Dismissal       x1    U      Anti-control mass counter/blowout   U
Slayer of the Wicked    x2    W      Removal vs. Vampire/Werewolf/Zombie U
Soul-Guide Gryff        x1    W      Graveyard hate + flying body        C
Avacynian Priest        x1    W      Repeatable tap vs. non-Human threats C
Twinblade Geist         x1    W      Resilient recursive threat vs. control U
```

## ANALYSIS

**The core loop.** Cathars' Crusade reads "whenever a creature you control enters, put a +1/+1 counter on each creature you control" — it doesn't care whether that creature is cast normally, blinked, or copied. That means Restoration Angel's flash blink, Conjurer's Closet's free end-step blink, Deadeye Navigator's repeatable {1}{U} blink, Essence Flux's 1-mana instant blink, Gather the Townsfolk's two tokens, and Cackling Counterpart's token copy are all independently "another counter for the whole team" triggers. Deadeye Navigator soulbonded to any cheap creature (even itself) turns a big blue mana turn into several counters at once — this is the deck's explosive top end, gated behind drawing the single copy of Cathars' Crusade.

**Rare/mythic budget accounting.** The pool restriction capped rares/mythics at 5 total across both boards. All 5 went to spells that are irreplaceable to the plan (Restoration Angel, Conjurer's Closet, Deadeye Navigator as the three blink engines; Cathars' Crusade as the payoff; Metallic Mimic as a colorless counter accelerant that costs nothing in fixing). No rare land (Deserted Beach) was included — spending a 6th rare-equivalent slot on a land would have meant cutting a spell, and the spell package was judged the stronger use of the budget. This does mean the manabase leans on only 1 common WU dual (Idyllic Beachfront x2) plus basics; the mana audit still passes comfortably (avg CMC 3.17 supports 16 lands cleanly).

**Self-grill correction.** The first draft over-indexed on cheap ETB bodies with weak individual payoffs (2nd Guardian of Pilgrims, 2nd Ambitious Farmhand, Thraben Inspector) and was thin on real removal (only Fiend Hunter + Valorous Stance, 12.5% of nonland slots). The Challenger agent flagged this and pointed at three on-color uncommons that didn't require touching the rare budget: Faith Unbroken (real exile removal), Subjugator Angel (a Falter effect that turns a Crusade-buffed board into a lethal alpha strike), and Cackling Counterpart (another cheap Crusade trigger with flexibility). Those three replaced the weakest slots. The Challenger also caught that Nebelgast Herald's "taps on every Spirit ETB" line doesn't extend to this deck's tokens — Gather the Townsfolk makes Human tokens, not Spirits — so the trigger only fires off the ~5 real Spirit bodies (2x Nebelgast Herald, 1x Guardian of Pilgrims, 1x Deadeye Navigator), not the token stream. It's still worth running for its own ETB and the Deadeye Navigator interaction, just don't expect it to tap blockers off every token.

**Sideboard correction.** Compelling Deterrence's only differentiator — "discard a card if you control a Zombie" — is dead text in a deck with zero Zombies, so it was swapped for Soul-Guide Gryff, which gives this list its only dedicated graveyard answer against the cube's single densest tag (graveyard, 44 cards) while still functioning as an on-plan ETB blink target if boarded in.

### Cards Considered but Excluded

*Rares/mythics cut for budget (5-rare cap already spent on Restoration Angel, Conjurer's Closet, Deadeye Navigator, Cathars' Crusade, Metallic Mimic):*
- **Wedding Announcement** (R) — strong standalone token+draw engine; would be a very reasonable 6th rare if you ever want to cut Metallic Mimic for it.
- **Necroduality** (M) — its trigger is "whenever a nontoken Zombie you control enters," not general ETB; this deck runs zero Zombies, so it would be a dead card as built. Correctly excluded regardless of budget.
- **Docent of Perfection** (R) — spellslinger payoff (triggers off casting instants/sorceries); this deck only runs 6 instants/sorceries, poor density match.
- **Voice of the Blessed** (R) — its counters trigger off lifegain, not creatures entering; off-plan for the Crusade engine.
- **Hopeful Initiate** (R) — Training/artifact-hate, aggro-leaning; doesn't add to the team-wide counter plan.
- **Spell Queller** (R) — excellent card, but belongs to the Spirits Tempo-Blink path that wasn't chosen; would have displaced a keystone here.
- **Deserted Beach** (R land) — the only rare WU dual; passed over to keep the full rare budget on spells.
- **Zealous Conscripts / Voldaren Ambusher** (R, red) — off-color Blink/ETB-cluster cards; splash rejected earlier due to thin WU fixing.

*Uncommons/commons a tier below the chosen includes:*
- **Angel's Tomb** (U, colorless) — animates into a 3/3 flier off any ETB; reasonable filler, lost out to Faith Unbroken/Cackling Counterpart on impact.
- **Dauntless Cathar, Mausoleum Guard, Apothecary Geist, Inspiring Captain, Drogskol Shieldmate** (C/U) — all solid role-players, all a step below the current 24 in either curve fit or payoff size.
- **Thraben Inspector, 2nd Guardian of Pilgrims, 2nd Ambitious Farmhand** (C/U) — cut in the self-grill revision to make room for real removal/finishers; still fine reintroduction candidates if you want an even lower curve.

*Sideboard-consideration cards not included:*
- **Compelling Deterrence** (U) — its discard clause needs a Zombie you don't run; cut in favor of Soul-Guide Gryff.
- **Memory Deluge** (R) — would have been strong SB card draw/flashback, but is a rare and the budget is fully spent.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  41.4%  prod  50.0%  gap  -8.6pp  [OK]
  W  demand  58.6%  prod  62.5%  gap  -3.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: no card exceeds 2 copies (basics exempt)
[PASS] Rares/mythics: no card exceeds 1 copy
[PASS] Max 5 rares/mythics total across main+SB: exactly 5
       (Metallic Mimic, Restoration Angel, Conjurer's Closet,
        Cathars' Crusade, Deadeye Navigator - all mainboard, 0 in SB)
[PASS] All cards within WU color identity
[PASS] All 26 unique card names verified against cube working pool
```
