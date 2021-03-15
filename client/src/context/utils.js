/** Returns a shuffled version of an array using the Fisher-Yates algorithm. */
export function isEverybodyPlayed(phase) {
  return (
    phase.phasePlayer.filter((e) => e.hasPlayed === true).length ===
    phase.phasePlayer.length - 1
  )
}
