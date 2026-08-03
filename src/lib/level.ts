export interface LevelInfo {
  level: number;
  title: string;
  nextLevelXP: number;
}

export function getLevel(totalXP: number): LevelInfo {
  if (totalXP < 100) {
    return {
      level: 1,
      title: "🌱 Beginner",
      nextLevelXP: 100,
    };
  }

  if (totalXP < 250) {
    return {
      level: 2,
      title: "📘 Learner",
      nextLevelXP: 250,
    };
  }

  if (totalXP < 500) {
    return {
      level: 3,
      title: "🚀 Explorer",
      nextLevelXP: 500,
    };
  }

  if (totalXP < 1000) {
    return {
      level: 4,
      title: "🏆 Scholar",
      nextLevelXP: 1000,
    };
  }

  return {
    level: 5,
    title: "👑 Master",
    nextLevelXP: totalXP,
  };
}