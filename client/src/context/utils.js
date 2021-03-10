/** Returns a shuffled version of an array using the Fisher-Yates algorithm. */
export function nextPhaseGame(phase) {
  // 0 => players choose answers cards
  // 1 => King choose his favorite answer(s)
  // 2 => score & restart
  if (
    phase.phaseGame === 0 &&
    phase.phasePlayer.filter((e) => e.phase === true).length ===
      phase.phasePlayer.length - 1
  ) {
    return 1
  }
}
